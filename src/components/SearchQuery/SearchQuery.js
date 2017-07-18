import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchQuery.css';
import cx from 'classnames';
import FontAwesome from 'react-fontawesome';


class SearchQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseSearch: '',
      minInput: '',
      maxInput: '',
      maxInputSelect: false,
      numBeds: 0
    }
  }

  handleChangeInput = (e) => {
    this.setState({
      houseSearch: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleBeds = (e) => {
    this.setState({
      numBeds: e.target.value
    });
  }

  handleFocus = (e) => {
    this.setState({
      maxInputSelect: e.target.className.split('-')[1] == 'maxInput' ? true : false
    });
  }

  handleChangeRange = (e) => {
    this.setState({
      [e.target.className.split('-')[1]]: e.target.value
    });
  }

  handlePrice = (key, e) => {
    this.setState({
      [key]: e.target.value
    });
  }

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit} >

        <input 
          className={s.input}
          id='houseSearch'
          placeholder='Enter an address, neighborhood, city or ZIP code'
          type='text'
          autoComplete='off'
          value={this.state.houseSearch}
          onChange={this.handleChangeInput}
        />

        <button
          className={s.submitButton}
          type='submit'
          disabled={!this.state.houseSearch}
        >
          Search
        </button>

        <div className={s.searchSettings}>
          <button 
            className={s.preferencesButton}
            onClick={ this.props.passIt.handleSettingDropDown }
          >
            <span className={s.settingsText}>Settings</span>
            <FontAwesome
              prop={this.handleSubmit}
              name='cog'
              className={s.cog}
            />
          </button>
        </div>
        <div className={s.mapPreferences}>
          <fieldset className={s.listType}>
            <legend style={ this.props.passIt.dropDownHouseType ? { 'zIndex': '4' } : null } data-za-label="Listing Type">
              <button className={s.listButton} onClick={this.props.passIt.handleDropDownType} >
                Listing Type
                <FontAwesome 
                  name='caret-up'
                  className={s.caretUp}
                  style={ this.props.passIt.dropDownHouseType ? { display: 'block' } : null }
                />
                <FontAwesome 
                  name='caret-down'
                  className={s.caretDown}
                  style={ !this.props.passIt.dropDownHouseType ? { display: 'block' } : null }
                />
              </button>
            </legend>
            <div 
              className={s.filterType}
              style={ this.props.passIt.dropDownHouseType ? { display: 'block' } : null }
            >
              <ul className={s.homeUl} >
                <li>
                  <input type='checkbox' ></input>
                  <label>For Sale</label>
                  <ul>
                    <li>
                      <input id='fs-agent-input' type='checkbox' ></input>
                      By Agent
                    </li>
                    <li>
                      <input id='fs-owner-input' type='checkbox' ></input>
                      By Owner
                    </li>
                    <li>
                      <input id='fs-construction-input' type='checkbox' ></input>
                      New Construction
                    </li>
                    <li>
                      <input id='fs-foreclosures-input' type='checkbox' ></input>
                      Foreclosures
                    </li>
                  </ul>
                </li>
                <li>
                  <input id='fr-listing-input' type='checkbox' ></input>
                  <label>For Rent</label>
                </li>
              </ul>
            </div>
          </fieldset>
          <fieldset className={s.price}>
            <legend style={ this.props.passIt.dropDownPrice ? { 'zIndex': '4' } : null } data-za-label="House Price">
              <button className={s.listButton} onClick={this.props.passIt.handleDropDownPrice} >
                Price Range
                <FontAwesome 
                  name='caret-up'
                  className={s.caretUp}
                  style={ this.props.passIt.dropDownPrice ? { display: 'block' } : null }
                />
                <FontAwesome 
                  name='caret-down'
                  className={s.caretDown}
                  style={ !this.props.passIt.dropDownPrice ? { display: 'block' } : null }
                />
              </button>
            </legend>
            <div 
              className={s.filterPrice}
              style={ this.props.passIt.dropDownPrice ? { display: 'block' } : null }
            >
              <div className={s.priceInput} >
                <input
                  type='text'
                  className={s.minInput}
                  placeholder='Min'
                  onFocus={this.handleFocus}
                  value={this.state.minInput}
                  onChange={this.handleChangeRange}
                >
                </input>
                <div className={s.dash} ></div>
                <input
                  type='text'
                  className={s.maxInput}
                  placeholder='Max'
                  onFocus={this.handleFocus}
                  value={this.state.maxInput}
                  onChange={this.handleChangeRange}
                >
                </input>
              </div>

              <ul 
                className={s.homeMinPrice}
                style={ this.state.maxInputSelect ? { display: 'none' } : null }
              >
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='0' >0</button></li>
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='50,000' >$50,000+</button></li>
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='75,000' >$75,000+</button></li>
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='100,000' >$100,000+</button></li>
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='150,000' >$150,000+</button></li>
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='200,000' >$200,000+</button></li>
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='250,000' >$250,000+</button></li>
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='300,000' >$300,000+</button></li>
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='400,000' >$400,000+</button></li>
                <li><button onClick={this.handlePrice.bind(null, 'minInput')} value='500,000' >$500,000+</button></li>
              </ul>
              <ul 
                className={s.homeMaxPrice}
                style={ this.state.maxInputSelect ? { display: 'block' } : null }
              >
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='100,000' >$100,000</button></li>
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='200,000' >$200,000</button></li>
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='300,000' >$300,000</button></li>
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='400,000' >$400,000</button></li>
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='500,000' >$500,000</button></li>
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='600,000' >$600,000</button></li>
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='700,000' >$700,000</button></li>
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='800,000' >$800,000</button></li>
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='900,000' >$900,000</button></li>
                <li style={{textAlign: 'right'}} ><button onClick={this.handlePrice.bind(null, 'maxInput')} value='Any Price' >Any Price</button></li>
              </ul>
            </div>
          </fieldset>
          <fieldset className={s.beds}>
            <legend style={ this.props.passIt.dropDownBed ? { 'zIndex': '4' } : null } data-za-label="Beds">
              <button className={s.listButton} onClick={this.props.passIt.handleDropDownBeds} >
                {this.state.numBeds}+ Beds
                <FontAwesome 
                  name='caret-up'
                  className={s.caretUp}
                  style={ this.props.passIt.dropDownBed ? { display: 'block' } : null }
                />
                <FontAwesome 
                  name='caret-down'
                  className={s.caretDown}
                  style={ !this.props.passIt.dropDownBed ? { display: 'block' } : null }
                />
              </button>
            </legend>
            <div 
              className={s.filterBeds}
              style={ this.props.passIt.dropDownBed ? { display: 'block' } : null }
            >
              <ul 
                className={s.bedList}
              >
                <li><button onClick={this.handleBeds} value='0' >0</button></li>
                <li><button onClick={this.handleBeds} value='1' >1+</button></li>
                <li><button onClick={this.handleBeds} value='2' >2+</button></li>
                <li><button onClick={this.handleBeds} value='3' >3+</button></li>
                <li><button onClick={this.handleBeds} value='4' >4+</button></li>
                <li><button onClick={this.handleBeds} value='5' >5+</button></li>
                <li><button onClick={this.handleBeds} value='6' >6+</button></li>
              </ul>
            </div>
          </fieldset>
        </div>
      </form>
    );
  }
}


export default withStyles(s)(SearchQuery);