import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Terms.css';


class Terms extends React.Component {
  render() {
    return (
      <div className={s.root}> 
        <div className={s.container}>
          <h1 className={s.headerOne} >MeetupCannabis Terms of Service and Privacy Policy</h1>

          <h2 className={s.headerTwo} >Disclaimer</h2>
          <p className={s.disclaimer} >
            Meetupcannabis is a Social Community for People who have an interest in Cannabis. 
            Meetupcannabis is not a distributor of cannabis and all products sold within the marketplace known as “Kush Markets” are 
            prohibited by law from distributing any Cannabis products that are illegal by Local, State, Federal or residing Jurisdictional Law. 
            Meetupcannabis is not liable for any actions of any of its members, store owners, sponsors, visitors or any human person who utilizes the 
            Meetupcannabis network wherein those said persons are in violation of Local, State, Federal or Residing Jurisdiction Laws.
          </p>

          <h3 className={s.headerThree} >1. Terms</h3>
          <p className={s.paragraphOne} >
            By accessing the website at http://www.meetupcannabis.com, you are agreeing to be bound by these terms of service, 
            all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. 
            If you do not agree with any of these terms, you are prohibited from using or accessing this site. 
            The materials contained in this website are protected by applicable copyright and trademark law. 
            All members must be at least 21 years of age of older to join and utilize this website
          </p>

          <h3 className={s.headerThree}>2. Use License</h3>
          <p className={s.paragraphTwo}>
            Permission is granted to temporarily download one copy of the materials (information or software) on Meetupcannabis's website for personal, 
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            modify or copy the materials;
            use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
            attempt to decompile or reverse engineer any software contained on Meetupcannabis's website;
            remove any copyright or other proprietary notations from the materials; or
            transfer the materials to another person or "mirror" the materials on any other server.
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Meetupcannabis at any time. 
            Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your 
            possession whether in electronic or printed format.
          </p>

          <h3 className={s.headerThree}>3. Disclaimer</h3>
          <p className={s.paragraphOne} >
            The materials on Meetupcannabis's website are provided on an 'as is' basis. 
            Meetupcannabis makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
            implied warranties or conditions of merchantability, fitness for a particular purpose, 
            or non-infringement of intellectual property or other violation of rights.
            Further, Meetupcannabis does not warrant or make any representations concerning the accuracy, likely results, 
            or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>

          <h3 className={s.headerThree}>4. Limitations</h3>
          <p className={s.paragraphOne} >
            In no event shall Meetupcannabis or its suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Meetupcannabis's website, 
            even if Meetupcannabis or a Meetupcannabis authorized representative has been notified orally or in writing of the possibility of such damage. 
            Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, 
            these limitations may not apply to you.
          </p>

          <h3 className={s.headerThree}>5. Accuracy of materials</h3>
          <p className={s.paragraphOne} >
            The materials appearing on Meetupcannabis's website could include technical, typographical, or photographic errors. 
            Meetupcannabis does not warrant that any of the materials on its website are accurate, complete or current. 
            Meetupcannabis may make changes to the materials contained on its website at any time without notice. 
            However Meetupcannabis does not make any commitment to update the materials.
          </p>

          <h3 className={s.headerThree}>6. Links</h3>
          <p className={s.paragraphOne} >
            Meetupcannabis has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
            The inclusion of any link does not imply endorsement by Meetupcannabis of the site. 
            Use of any such linked website is at the user's own risk.
          </p>

          <h3 className={s.headerThree}>7. Modifications</h3>
          <p className={s.paragraphOne} >
            Meetupcannabis may revise these terms of service for its website at any time without notice. 
            By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h3 className={s.headerThree}>8. Governing Law</h3>
          <p className={s.paragraphOne} >
            These terms and conditions are governed by and construed in accordance with the laws of Colorado and you irrevocably submit to the exclusive 
            jurisdiction of the courts in that State or location.
          </p>

          <h3 className={s.headerThree}>9. Campaigns</h3>
          <p className={s.paragraphOne} >
            Meetupcannabis occassionally will participate and host Fundraising campaigns. 
            These campaigns are only for Registered Members who meet the Requirements listed within the overview of that campaign. 
            Any donations collected through Meetupcannabis Campaigns will be held in a Paypal Escrow account. 
            Upon transfer of these donations to and from accounts, Meetupcannabis may or may not incur a variable fee for the transferring of 
            money into and out of escrow. Meetupcannabis reserves the right to withhold the amount of these processing fees from the 
            Donations as well as any processing fees deemed suitable by Meetupcannabis for sustainment and operation of the campaign. 
            All members who receive donations are liable for any and all Local, State and Federal taxes that might accumulate when a distribution is given. 
            Each Sponsor who provides a donation will be given a receipt for their donation as well as a report on where that donation went once it is distributed. 
            Meetupcannabis and its affiliates are in no way liable or responsibile for any troubleshooting, errors, failed distributions, 
            legal or otherwise found problems with www.loangifter.com Eligibility As prescribed within the campaign itself certain requirements 
            must be met for each campaign that is held at Meetupcannabis. 
            Meetupcannabis reserves the right to remove a member from a group if that members fails to have met the 
            requirements or for any reason deemed to be suitable by Meetupcannabis Management. Member Requirements For a member to 
            receive distribution from a Meetupcannabis Campaigns, the member must 1. Must be 21 Years of age or older 2. Must be a US Citizen 3. 
            Must have an Active Federal Student Loan 4. The active student loan must not be in Collections 5. Must be able to show proof of active student loan 6.  
            Be active within the Social Community a.  Active is defined as i. Being logged into the website at least 1 hour a month ii. 
            Having contributed to the website within that period 1. Contributing is anything from uploading content, viewing content, posting within feeds 7. 
            Meetupcannabis reserves the right to monitor a members online usage within the website to provide validation of this requirement. 8.  
            Meetupcannabis makes no guarantees as to the amount of distribution a member may or may not receive. 
            All distributions are dependent upon Donations accepted and a undisclosed portion of Meetupcannabis revenue. 9. 
            Meetupcannabis is not liable for outstanding Student Loan Debt payments 10.  
            Meetupcannabis reserves the right to transfer distributions only when that distribution amount has a value of $10.00 USD or more. 
            11. Distributions will occur on a first come first serve basis with those that send payment requests first from LoanGifting.com, 
            followed with seniority followed by a procession of active members to inactive members. 
            Not all member may receive a distribution due to the demand and transfer protocols associated with this Campaign. 
            12.  Meetupcannabis reserves the right to end this campaign at any point follow the Campaign launch. 
            All donations accepted and not distributed will be returned to the Sponsor if not applied to a Member distribution. 
            13. Meetupcannabis is not a replacement payment for your student loan debt obligation and is not liable for any late payments, missed payments, 
            full payments or outstanding payments and balances.
          </p>

          <h3 className={s.headerThree}>Privacy Policy</h3>\
          <p className={s.paragraphOne} >
            Your privacy is important to us.
            It is Meetupcannabis's policy to respect your privacy regarding any information we may collect while operating our website. 
            Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose 
            and otherwise make use of personal information. We have outlined our privacy policy below.
            We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.
            Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.
            We will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, 
            unless we obtain the consent of the individual concerned or as required by law.
            Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, 
            should be accurate, complete, and up-to-date.
            We will protect personal information by using reasonable security safeguards against loss or theft, as well as unauthorized access, 
            disclosure, copying, use or modification.
            We will make readily available to customers information about our policies and practices relating to the management of personal information.
            We will only retain personal information for as long as necessary for the fulfilment of those purposes.
            We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of 
            personal information is protected and maintained. Meetupcannabis may change this privacy policy from time to time at Meetupcannabis's sole discretion.
          </p>
        </div>
      </div>
    );
  }
}


export default withStyles(s)(Terms);