import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Local.css';
import { connect } from 'react-redux';
import Link from '../../components/Link';
import MyPhotoUrl from '../../../public/MyPhoto.jpg';
import markerInfo from './markerInfo';

const MyPhoto = "url('" + MyPhotoUrl + "')";

import Loading from '../../components/Loading';

let mapboxgl;
if (process.env.__CLIENT__) {
  mapboxgl = require('mapbox-gl');
  mapboxgl.accessToken = 'pk.eyJ1IjoiamRlbWlnIiwiYSI6ImNqM2FjaXEwdzAwa3AzMm56a2U5OTFwNWsifQ.L5-XaISmWUGpn0fh0B-ifQ';
}

let geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "message": "Hello",
                "iconSize": [60, 60],
                "imageUrl": MyPhoto
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -66.324462890625,
                    -16.024695711685304
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Bar",
                "iconSize": [50, 50]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -61.2158203125,
                    -15.97189158092897
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Baz",
                "iconSize": [40, 40]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -63.29223632812499,
                    -18.28151823530889
                ]
            }
        }
    ]
};

class Local extends React.Component {
  constructor() {
    super();

    this.state = {
      userLocation: [],
      locationAvailable: false
    }
  }

  componentDidMount() {

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-104.75, 39.75],
      zoom: 8
    });

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const myCoords = [position.coords.longitude, position.coords.latitude];
        map.easeTo({center: myCoords, zoom: 12});
        setMarkers(myCoords);
      });
    }

    map.addControl(new mapboxgl.NavigationControl());

    const setMarkers = (myCoords) => {
      geojson.features[0].geometry.coordinates = myCoords;
      geojson.features.forEach((marker) => {
          // create a DOM element for the marker
          let emoji = document.createElement('div');
          emoji.className = 'marker';
          emoji.style.backgroundImage = marker.properties.imageUrl || 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
          emoji.style.width = marker.properties.iconSize[0] + 'px';
          emoji.style.height = marker.properties.iconSize[1] + 'px';

          emoji.addEventListener('click', () => {
            map.easeTo({center: myCoords, zoom: 14});
            emojiInfo.style.display = (emojiInfo.style.display == 'block') ? 'none' : 'block';
          });

          // add marker to map
          new mapboxgl.Marker(emoji, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
              .setLngLat(marker.geometry.coordinates)
              .addTo(map);


          const emojiInfo = markerInfo();

          new mapboxgl.Marker(emojiInfo, {offset: [-190, 50]})
              .setLngLat(marker.geometry.coordinates)
              .addTo(map);
      });
    }

  }

  render() {
    return (
      <div className={s.root}>
        <div id='map' className={s.map} ></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Local));
