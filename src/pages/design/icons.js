import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy'; 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import {Link} from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading'; 

import typesPulse1 from "../../assets/design/icons/types/Pulse/01 Pulse Large.png";
import typesPulse2 from "../../assets/design/icons/types/Pulse/02 Pulse Small.png";
import typesMainControls1 from "../../assets/design/icons/types/Main Controls/01 Keyboard.png";
import typesMainControls2 from "../../assets/design/icons/types/Main Controls/02 Menu.png";
import typesNavigation1 from "../../assets/design/icons/types/Navigation/01 Account.png";
import typesNavigation2 from "../../assets/design/icons/types/Navigation/02 Nudges.png";
import typesNavigation3 from "../../assets/design/icons/types/Navigation/03 Discover.png";
import typesNavigation4 from "../../assets/design/icons/types/Navigation/04 Home.png";
import typesAvatars1 from "../../assets/design/icons/types/Avatars/01 Avatar 100.png";
import typesAvatars2 from "../../assets/design/icons/types/Avatars/02 Avatar 50.png";
import typesAvatars3 from "../../assets/design/icons/types/Avatars/03 Avatar 30.png";
import typesAvatars4 from "../../assets/design/icons/types/Avatars/04 Intial 100.png";
import typesAvatars5 from "../../assets/design/icons/types/Avatars/05 Intial 50.png";
import typesAvatars6 from "../../assets/design/icons/types/Avatars/06 Initial 30.png";
import typesTravel1 from "../../assets/design/icons/types/Travel/01 Flight.png";
import typesTravel2 from "../../assets/design/icons/types/Travel/02 Hotel.png";
import typesTravel3 from "../../assets/design/icons/types/Travel/03 Rental.png";
import typesTravel4 from "../../assets/design/icons/types/Travel/04 Limo.png"; 

import typesSystem1 from "../../assets/design/icons/types/System/01 Phone.png";
import typesSystem2 from "../../assets/design/icons/types/System/02 Email.png";
import typesSystem3 from "../../assets/design/icons/types/System/03 Back.png";
import typesSystem4 from "../../assets/design/icons/types/System/04 Forward.png";
import typesSystem5 from "../../assets/design/icons/types/System/05 Close Small.png";
import typesSystem6 from "../../assets/design/icons/types/System/06 Check Grey.png";
import typesSystem7 from "../../assets/design/icons/types/System/07 Check Green.png";
import typesSystem8 from "../../assets/design/icons/types/System/08 Hangouts.png";
import typesSystem9 from "../../assets/design/icons/types/System/09 Dropdowns.png";
import typesSystem10 from "../../assets/design/icons/types/System/10 Calendar.png";
import typesSystem11 from "../../assets/design/icons/types/System/11 Eye Hide.png";
import typesSystem12 from "../../assets/design/icons/types/System/12 Eye Show.png";
import typesSystem13 from "../../assets/design/icons/types/System/13 Arrow.png";
import typesSystem14 from "../../assets/design/icons/types/System/14 Trash Can.png";
import typesSystem15 from "../../assets/design/icons/types/System/15 Info.png";
import typesSystem16 from "../../assets/design/icons/types/System/16 Nudge Loader.png";
import typesSystem17 from "../../assets/design/icons/types/System/17 Close Large.png";
import typesSystem18 from "../../assets/design/icons/types/System/18 Location.png";
import typesSystem19 from "../../assets/design/icons/types/System/19 Send.png";

import typesCategoriesPrimaryTwo1 from "../../assets/design/icons/types/Categories/Primary 2/01 Celebration.png";
import typesCategoriesPrimaryTwo2 from "../../assets/design/icons/types/Categories/Primary 2/02 Compliance.png";
import typesCategoriesPrimaryTwo3 from "../../assets/design/icons/types/Categories/Primary 2/03 Delivery.png";
import typesCategoriesPrimaryTwo4 from "../../assets/design/icons/types/Categories/Primary 2/04 Digest.png";
import typesCategoriesPrimaryTwo5 from "../../assets/design/icons/types/Categories/Primary 2/05 Finance.png";
import typesCategoriesPrimaryTwo6 from "../../assets/design/icons/types/Categories/Primary 2/06 FPM.png";
import typesCategoriesPrimaryTwo7 from "../../assets/design/icons/types/Categories/Primary 2/07 HR.png";
import typesCategoriesPrimaryTwo8 from "../../assets/design/icons/types/Categories/Primary 2/08 L_D.png";
import typesCategoriesPrimaryTwo9 from "../../assets/design/icons/types/Categories/Primary 2/09 Marketing.png";
import typesCategoriesPrimaryTwo10 from "../../assets/design/icons/types/Categories/Primary 2/10 Meetings.png";
import typesCategoriesPrimaryTwo11 from "../../assets/design/icons/types/Categories/Primary 2/11 PerMgmt.png";
import typesCategoriesPrimaryTwo12 from "../../assets/design/icons/types/Categories/Primary 2/12 Travel.png";
import typesCategoriesPrimaryTwo13 from "../../assets/design/icons/types/Categories/Primary 2/13 HR.png";
import typesCategoriesPrimaryThree1 from "../../assets/design/icons/types/Categories/Primary 3/01 Celebration.png";
import typesCategoriesPrimaryThree2 from "../../assets/design/icons/types/Categories/Primary 3/02 Compliance.png";
import typesCategoriesPrimaryThree3 from "../../assets/design/icons/types/Categories/Primary 3/03 Delivery.png";
import typesCategoriesPrimaryThree4 from "../../assets/design/icons/types/Categories/Primary 3/04 Digest.png";
import typesCategoriesPrimaryThree5 from "../../assets/design/icons/types/Categories/Primary 3/05 Finance.png";
import typesCategoriesPrimaryThree6 from "../../assets/design/icons/types/Categories/Primary 3/06 FPM.png";
import typesCategoriesPrimaryThree7 from "../../assets/design/icons/types/Categories/Primary 3/07 HR.png";
import typesCategoriesPrimaryThree8 from "../../assets/design/icons/types/Categories/Primary 3/08 L_D.png";
import typesCategoriesPrimaryThree9 from "../../assets/design/icons/types/Categories/Primary 3/09 Marketing.png";
import typesCategoriesPrimaryThree10 from "../../assets/design/icons/types/Categories/Primary 3/10 Meetings.png";
import typesCategoriesPrimaryThree11 from "../../assets/design/icons/types/Categories/Primary 3/11 PerMgmt.png";
import typesCategoriesPrimaryThree12 from "../../assets/design/icons/types/Categories/Primary 3/12 Travel.png";
import typesCategoriesPrimaryThree13 from "../../assets/design/icons/types/Categories/Primary 3/13 HR.png";

import typesOnboarding1 from "../../assets/design/icons/types/Onboarding/01 Mic 1.png";
import typesOnboarding2 from "../../assets/design/icons/types/Onboarding/02 Salesforce 1.png";
import typesOnboarding3 from "../../assets/design/icons/types/Onboarding/03 Notifications 1.png";
import typesOnboarding4 from "../../assets/design/icons/types/Onboarding/04 Gsuite 1.png";
import typesOnboarding5 from "../../assets/design/icons/types/Onboarding/05 Mic 2.png";
import typesOnboarding6 from "../../assets/design/icons/types/Onboarding/06 Salesforce 2.png";
import typesOnboarding7 from "../../assets/design/icons/types/Onboarding/07 Notifications 2.png";
import typesOnboarding8 from "../../assets/design/icons/types/Onboarding/08 G Suite 2.png";
import typesOnboarding9 from "../../assets/design/icons/types/Onboarding/09 G Mic 3.png";
import typesOnboarding10 from "../../assets/design/icons/types/Onboarding/10 Salesforce 3.png";
import typesOnboarding11 from "../../assets/design/icons/types/Onboarding/11 Notifications 3.png";
import typesOnboarding12 from "../../assets/design/icons/types/Onboarding/12 G Suite 3.png";
import typesOnboarding13 from "../../assets/design/icons/types/Onboarding/13 Privacy.png";
import typesOnboarding14 from "../../assets/design/icons/types/Onboarding/14 Chevron.png";
import typesOnboarding15 from "../../assets/design/icons/types/Onboarding/15 Activities.png";
import typesOnboarding16 from "../../assets/design/icons/types/Onboarding/16 Discover.png";
import typesOnboarding17 from "../../assets/design/icons/types/Onboarding/17 Nudges.png";

function DesignIconsPage() { 

  return (
    <Layout>
      <SEO
        title="Design"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <aside className="fixed overflow-y-auto as-nav bg-white top-auto h-full border-r border-grey-500 border-solid">
        <div className="as-nav-logo">
          <svg
            className="fill-current"
            width="103"
            height="20"
            viewBox="0 0 165 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#000" d="M48.972 0c8.177 0 9.686 6.286 9.741 8.781l0.002 0.142v2.029h-4.897v-2.029c0-2.479-1.551-4.462-4.849-4.462-3.155 0-5.235 1.713-5.235 4.281 0 2.854 2.689 4.067 5.682 5.13l0.669 0.234c4.461 1.533 9.116 3.245 9.116 9.555 0 3.967-2.227 8.339-9.794 8.339-10.451 0-10.982-7.286-11.005-8.953l-0.001-2.18h4.851v2.028c0 2.479 1.6 4.643 6.158 4.643 4.315 0 4.897-2.614 4.897-3.877 0-2.685-2.606-3.847-5.548-4.904l-0.658-0.234c-4.461-1.622-9.26-3.335-9.26-9.781 0-2.433 1.503-8.743 10.132-8.743zM92.8 0v4.525h-7.984v27.475h-4.832v-27.475h-7.984v-4.525h20.8zM154.331 0c9.234 0 10.469 7.209 10.469 16s-1.234 16-10.469 16c-9.083 0-10.293-6.974-10.33-15.569v-0.862c0.037-8.595 1.247-15.569 10.33-15.569zM13.494 0l8.906 32h-4.631l-6.592-24.653-6.546 24.653h-4.632l8.906-32h4.587zM118.304 0c9.053 0 10.47 6.125 10.47 10.925 0.001 3.611-0.946 8.827-5.508 9.394v0l6.334 11.682h-5.169l-7.888-14.662 1.761-0.055c5.12-0.183 5.898-2.228 5.853-6.354-0.040-3.52-0.732-6.399-5.853-6.399v0h-4.886v27.465h-4.618v-31.996zM154.331 4.462c-5.211 0-5.714 4.55-5.714 11.535 0 7.029 0.503 11.536 5.714 11.536 5.258 0 5.851-4.506 5.851-11.536 0-6.985-0.594-11.535-5.851-11.535z"></path>
          </svg>
        </div>            
        <nav>
         <ul className=""> 
            <li><Link to="design/logo" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Logo</Link></li>
            <li><Link to="design/color" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Color</Link></li>
            <li><Link to="design/typography" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Typography</Link></li>
            <li><Link to="design/icons" className="block text-sm text-grey-400 w-full active font-semibold bg-grey-700">Icons</Link>
              <Scrollspy items={ ['types', 'usage', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="design/pictograms#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Types</Link></li>
                <li><Link to="design/pictograms#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Usage</Link></li>
                <li><Link to="design/pictograms#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li> 
              </Scrollspy>              
            </li>
            <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Pictograms</Link></li>
            <li><Link to="design/screen-anatomy" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
            <li><Link to="design/motion" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Motion</Link></li>
            <li><Link to="design/sound" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sound</Link></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className="pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Icons</Heading>
            <div className="flex items-center">
              <p className="uppercase text-grey-400 text-xs mr-4">Updated 11/25/19</p>
              <button className="bg-white text-red-600 text-sm as-type-medium border rounded-full border-red-600 border-solid px-4 py-2">
                <svg className="fill-current inline-block mr-1 cursor-pointer" width="13" height="10" viewBox="0 0 23 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#e0301e" d="M11.636 26.182l-11.636-14.545h23.273z"></path>
                  <path fill="#e0301e" d="M5.818 0h11.636v14.545h-11.636v-14.545z"></path>
                  <path fill="#e0301e" d="M0 29.091h23.273v2.909h-23.273v-2.909z"></path>  
                </svg> 
                Sketch File
              </button>
            </div>
          </div>         

          <section id="types" name="types" className="as-section">
            <span id="types-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Types
              <CopyToClipboard text={'http://localhost:8000/design/typography#primary-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='applying-type-scale' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='primary' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>              
            </Heading> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Pulse
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>
              </Heading>
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider">Used when there is a list of 2 or more options but user can only select one.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                  <li className="as-grid-8 relative"><span className="list-circle">1</span><img data-src={typesPulse1} className="lazyload inline-block" width="108" /> </li> 
                  <li className="as-grid-8 relative"><span className="list-circle">2</span><img data-src={typesPulse2} className="lazyload inline-block" width="108" /> </li> 
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Pulse Large.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">2. Pulse Small.</p> 
              </div> 
            </div>  
          </section>

        </main>
      </div>
    </Layout>
  );
}

export default DesignIconsPage;
