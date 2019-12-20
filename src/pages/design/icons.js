import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {Link} from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'lazysizes';


import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading'; 
import Copy from "../../components/copy";

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

import typesCategoriesPrimaryTwo1 from "../../assets/design/icons/types/Categories/Grey 6/celebration-grey6.png";
import typesCategoriesPrimaryTwo2 from "../../assets/design/icons/types/Categories/Grey 6/compliance-grey6.png";
import typesCategoriesPrimaryTwo3 from "../../assets/design/icons/types/Categories/Grey 6/delivery-grey6.png";
import typesCategoriesPrimaryTwo4 from "../../assets/design/icons/types/Categories/Grey 6/digest-grey6.png";
import typesCategoriesPrimaryTwo5 from "../../assets/design/icons/types/Categories/Grey 6/finance-grey6.png";
import typesCategoriesPrimaryTwo6 from "../../assets/design/icons/types/Categories/Grey 6/fpm-grey6.png";
import typesCategoriesPrimaryTwo7 from "../../assets/design/icons/types/Categories/Grey 6/hr-grey6.png";
import typesCategoriesPrimaryTwo8 from "../../assets/design/icons/types/Categories/Grey 6/l_d-grey6.png";
import typesCategoriesPrimaryTwo9 from "../../assets/design/icons/types/Categories/Grey 6/marketing-grey6.png";
import typesCategoriesPrimaryTwo10 from "../../assets/design/icons/types/Categories/Grey 6/meetings-grey6.png";
import typesCategoriesPrimaryTwo11 from "../../assets/design/icons/types/Categories/Grey 6/permgmt-grey6.png";
import typesCategoriesPrimaryTwo12 from "../../assets/design/icons/types/Categories/Grey 6/travel-grey6.png"; 

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

import usagePulse1 from "../../assets/design/icons/usage/Pulse/01 Pulse Icon Large.png";
import usagePulse2 from "../../assets/design/icons/usage/Pulse/01 Pulse Icon Small.png";
import usageMainControls1 from "../../assets/design/icons/usage/Main Control/01 Main Control Icon.png"; 
import usageNavigation1 from "../../assets/design/icons/usage/Navigation/01 Navigation Icons.png"; 
import usageAvatar1 from "../../assets/design/icons/usage/Avatar/01 Avatar 100.png"; 
import usageAvatar2 from "../../assets/design/icons/usage/Avatar/02 Avatar Initial.png"; 
import usageTravel1 from "../../assets/design/icons/usage/Travel Icons/01 Travel Story.png"; 
import usageSystem1 from "../../assets/design/icons/usage/System Icons/01 PDP.png"; 
import usageSystem2 from "../../assets/design/icons/usage/System Icons/02 Calendar Icon.png"; 
import usageCategory1 from "../../assets/design/icons/usage/Category/01 Nudges.png"; 
import usageCategory2 from "../../assets/design/icons/usage/Category/02 Discover.png"; 
import usageOnboarding1 from "../../assets/design/icons/usage/Onboarding/01 Icon.png"; 
import usageOnboarding2 from "../../assets/design/icons/usage/Onboarding/02 Icon.png"; 

import guidance1 from "../../assets/design/icons/guidance/01.png";
import guidance2 from "../../assets/design/icons/guidance/02.png";
import guidance3 from "../../assets/design/icons/guidance/03.png";
import guidance4 from "../../assets/design/icons/guidance/04.png";
import guidance5 from "../../assets/design/icons/guidance/05.png";
 
class DesignIconsPage extends Component {   
  render() { 
    return (
      <Layout>
        <SEO
          title="Astro"
          keywords={[``]}
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
                  <li><Link to="design/icons#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Types</Link></li>
                  <li><Link to="design/icons#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Usage</Link></li>
                  <li><Link to="design/icons#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li> 
                </Scrollspy>              
              </li>
              <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Pictograms</Link></li>
              <li><Link to="design/screen-anatomy" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
              <li><Link to="design/motion" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Motion</Link></li>
              <li><Link to="design/sound" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sound</Link></li>
              <li><Link to="design/haptics" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Haptics</Link></li>
            </ul> 
          </nav>
        </aside>
        <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
          <main className="pl-16 pr-16 pt-16">

            <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Icons</Heading>
              <div className="flex flex-wrap items-center">
                <p className="uppercase text-grey-400 text-xs mr-4">Updated 12/05/19</p>
                <a href="https://drive.google.com/uc?export=download&id=13QVAUUjXvZTH_UH8FFuAdSkIW1XENav5" target="_blank" className="bg-white text-red-600 text-sm as-type-medium border rounded-full border-red-600 border-solid px-4 py-2"> 
                  <svg className="fill-current inline-block mr-1 cursor-pointer" width="13" height="10" viewBox="0 0 23 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#e0301e" d="M11.636 26.182l-11.636-14.545h23.273z"></path>
                    <path fill="#e0301e" d="M5.818 0h11.636v14.545h-11.636v-14.545z"></path>
                    <path fill="#e0301e" d="M0 29.091h23.273v2.909h-23.273v-2.909z"></path>  
                  </svg> 
                  Icons File
                </a>
              </div> 
            </div>         
            <p className="mb-16 text-greyStatus-600 tracking-wider">Icons are a powerful way to communicate independent of language. Please review how we integrate iconography into the design system.</p>
            <section id="types" name="types" className="as-section">
              <span id="types-anchor" className="page-anchor"></span>
              <Heading level="2" className="as-h2 as-type-medium mb-12">Types
                <Copy id="types" />
              </Heading> 

              <div className="mb-16">
                <span id="pulse-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Pulse
                  <Copy id="pulse" />
                </Heading>
                <div className="mb-12">
                  <p className="mb-5 text-greyStatus-600 tracking-wider">Pulse icon serves as a representation of the "essence" of Astro. When icon is animated, it also provides feedback to the user that the system is active.</p>
                  <ol className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                    <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesPulse1} className="lazyload inline-block" width="40" alt="Icon Types Pulse Large" /> </li> 
                    <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={typesPulse2} className="lazyload inline-block" width="12" alt="Icon Types Pulse Small" /> </li> 
                  </ol>  
                  <p className="as-type-regular text-sm text-greyStatus-600">1. pulse-large</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">2. pulse-small</p> 
                </div> 
              </div>  

              <div className="mb-16">
                <span id="main-controls-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Main Controls
                  <Copy id="main-controls" />
                </Heading>
                <div className="mb-12">
                  <p className="mb-5 text-greyStatus-600 tracking-wider">These icons create familiar models to help users understand how to engage with Astro.</p>
                  <ol className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                    <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesMainControls1} className="lazyload inline-block" width="29" alt="Icon Types Main Controls Keyboard" /> </li> 
                    <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={typesMainControls2} className="lazyload inline-block" width="30" alt="Icon Types Main Controls Menu" /> </li> 
                  </ol>  
                  <p className="as-type-regular text-sm text-greyStatus-600">1. keyboard</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">2. menu</p> 
                </div> 
              </div>   

              <div className="mb-16">
                <span id="navigation-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Navigation
                  <Copy id="navigation" />
                </Heading>
                <div className="mb-12">
                  <p className="mb-5 text-greyStatus-600 tracking-wider">Icons that visually support guiding the user through the Astro experience.</p>
                  <ol className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                    <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesNavigation1} className="lazyload inline-block" width="20" alt="Icon Types Navigation Account" /> </li> 
                    <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={typesNavigation2} className="lazyload inline-block" width="20" alt="Icon Types Navigation Nudges" /> </li> 
                    <li className="as-grid-4 relative"><span className="list-circle">3</span><img data-src={typesNavigation3} className="lazyload inline-block" width="20" alt="Icon Types Navigation Discover" /> </li> 
                    <li className="as-grid-4 relative"><span className="list-circle">4</span><img data-src={typesNavigation4} className="lazyload inline-block" width="20" alt="Icon Types Navigation Home" /> </li> 
                  </ol>  
                  <p className="as-type-regular text-sm text-greyStatus-600">1. account</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">2. nudges</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">3. discover</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">4. home</p> 
                </div> 
              </div>  

              <div className="mb-16">
                <span id="avatars-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Avatars
                  <Copy id="avatars" />
                </Heading>
                <div className="mb-12">
                  <p className="mb-5 text-greyStatus-600 tracking-wider">An avatar is an icon or image used to represent a user on the screen.</p>
                  <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                    <li className="as-grid-6 mb-12 relative"><span className="list-circle">1</span><img data-src={typesAvatars1} className="lazyload inline-block" width="100" alt="Icon Types Navigation Account" /> </li> 
                    <li className="as-grid-6 mb-12 relative"><span className="list-circle">2</span><img data-src={typesAvatars2} className="lazyload inline-block" width="50" alt="Icon Types Navigation Nudges" /> </li> 
                    <li className="as-grid-6 mb-12 relative"><span className="list-circle">3</span><img data-src={typesAvatars3} className="lazyload inline-block" width="30" alt="Icon Types Navigation Discover" /> </li> 
                    <li className="as-grid-6 relative"><span className="list-circle">4</span><img data-src={typesAvatars4} className="lazyload inline-block" width="100" alt="Icon Types Navigation Home" /> </li> 
                    <li className="as-grid-6 relative"><span className="list-circle">5</span><img data-src={typesAvatars5} className="lazyload inline-block" width="50" alt="Icon Types Navigation Home" /> </li> 
                    <li className="as-grid-6 relative"><span className="list-circle">6</span><img data-src={typesAvatars6} className="lazyload inline-block" width="30" alt="Icon Types Navigation Home" /> </li> 
                  </ol>  
                  <p className="as-type-regular text-sm text-greyStatus-600">1. avatar-100</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">2. avatar-50</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">3. avatar-30</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">4. initial-100</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">5. initial-50</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">6. initial-30</p> 
                </div> 
              </div>  

              <div className="mb-16">
                <span id="travel-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Travel
                  <Copy id="travel" />
                </Heading>
                <div className="mb-12">
                  <p className="mb-5 text-greyStatus-600 tracking-wider">Icons to be used in relation to travel-related stories.</p>
                  <ol className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                    <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesTravel1} className="lazyload inline-block" width="24" alt="Icon Types Navigation Account" /> </li> 
                    <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={typesTravel2} className="lazyload inline-block" width="24" alt="Icon Types Navigation Nudges" /> </li> 
                    <li className="as-grid-4 relative"><span className="list-circle">3</span><img data-src={typesTravel3} className="lazyload inline-block" width="24" alt="Icon Types Navigation Discover" /> </li> 
                    <li className="as-grid-4 relative"><span className="list-circle">4</span><img data-src={typesTravel4} className="lazyload inline-block" width="24" alt="Icon Types Navigation Home" /> </li>  
                  </ol>  
                  <p className="as-type-regular text-sm text-greyStatus-600">1. flight</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">2. hotel</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">3. rental</p> 
                  <p className="as-type-regular text-sm text-greyStatus-600">4. limo</p>  
                </div> 
              </div>  

              <div className="mb-16">
                <span id="system-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">System
                  <Copy id="system" />
                </Heading>
                <p className="mb-5 text-greyStatus-600 tracking-wider">Icons that represent components of the system.</p>
                <div className="flex flex-wrap -mx-5">   
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem1} className="lazyload" width="16" alt="Icons System Phone" />
                    </div>
                    <p className="text-sm text-greyStatus-600">phone</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem2} className="lazyload" width="16" alt="Icons System Email" />
                    </div>
                    <p className="text-sm text-greyStatus-600">email</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem3} className="lazyload" width="16" alt="Icons System Back" />
                    </div>
                    <p className="text-sm text-greyStatus-600">back</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem4} className="lazyload" width="16" alt="Icons System Forward" />
                    </div>
                    <p className="text-sm text-greyStatus-600">forward</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem5} className="lazyload" width="16" alt="Icons System Close Small" />
                    </div>
                    <p className="text-sm text-greyStatus-600">close-small</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem6} className="lazyload" width="16" alt="Icons System Check Grey" />
                    </div>
                    <p className="text-sm text-greyStatus-600">check-grey</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem7} className="lazyload" width="16" alt="Icons System Check Green" />
                    </div>
                    <p className="text-sm text-greyStatus-600">check-green</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem8} className="lazyload" width="16" alt="Icons System Hangouts" />
                    </div>
                    <p className="text-sm text-greyStatus-600">hangouts</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem9} className="lazyload" width="16" alt="Icons System Dropdown" />
                    </div>
                    <p className="text-sm text-greyStatus-600">dropdown</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem10} className="lazyload" width="16" alt="Icons System Calendar" />
                    </div>
                    <p className="text-sm text-greyStatus-600">calendar</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem11} className="lazyload" width="16" alt="Icons System Eye Hide" />
                    </div>
                    <p className="text-sm text-greyStatus-600">eye-hide</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem12} className="lazyload" width="16" alt="Icons System Eye Show" />
                    </div>
                    <p className="text-sm text-greyStatus-600">eye-show</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem13} className="lazyload" width="16" alt="Icons System Arrow" />
                    </div>
                    <p className="text-sm text-greyStatus-600">arrow</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem14} className="lazyload" width="16" alt="Icons Trash Can" />
                    </div>
                    <p className="text-sm text-greyStatus-600">trash-can</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem15} className="lazyload" width="16" alt="Icons Info" />
                    </div>
                    <p className="text-sm text-greyStatus-600">info</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem16} className="lazyload" width="16" alt="Icons Nudge Loader" />
                    </div>
                    <p className="text-sm text-greyStatus-600">nudge-loader</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem17} className="lazyload" width="16" alt="Icons Nudge Loader" />
                    </div>
                    <p className="text-sm text-greyStatus-600">close-large</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem18} className="lazyload" width="16" alt="Icons Location" />
                    </div>
                    <p className="text-sm text-greyStatus-600">location</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-300 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesSystem19} className="lazyload" width="16" alt="Icons Send" />
                    </div>
                    <p className="text-sm text-greyStatus-600">send</p>
                  </div> 
                </div> 
              </div>  

              <div className="mb-16">
                <span id="categories-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Categories
                  <Copy id="categories" />
                </Heading>
                <p className="mb-5 text-greyStatus-600 tracking-wider">Category icons come with two different background options: grey 6 and primary 3.</p>
                <Tabs>
                  <TabList>
                    <Tab>Grey 6</Tab>
                    <Tab>Primary 3</Tab> 
                  </TabList> 
                  <TabPanel>
                    <div className="flex flex-wrap -mx-5">   
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo1} className="lazyload" width="30" alt="Icons Category Celebration" />
                        </div>
                        <p className="text-sm text-greyStatus-600">celebration-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo2} className="lazyload" width="30" alt="Icons Category Compliance" />
                        </div>
                        <p className="text-sm text-greyStatus-600">compliance-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo3} className="lazyload" width="30" alt="Icons Category Delivery" />
                        </div>
                        <p className="text-sm text-greyStatus-600">delivery-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo4} className="lazyload" width="30" alt="Icons Category Digest" />
                        </div>
                        <p className="text-sm text-greyStatus-600">digest-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo5} className="lazyload" width="30" alt="Icons Category Finance" />
                        </div>
                        <p className="text-sm text-greyStatus-600">finance-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo6} className="lazyload" width="30" alt="Icons Category FPM" />
                        </div>
                        <p className="text-sm text-greyStatus-600">fpm-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo7} className="lazyload" width="30" alt="Icons Category HR" />
                        </div>
                        <p className="text-sm text-greyStatus-600">hr-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo8} className="lazyload" width="30" alt="Icons Category LD" />
                        </div>
                        <p className="text-sm text-greyStatus-600">l&amp;d-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo9} className="lazyload" width="30" alt="Icons Category Markdown" />
                        </div>
                        <p className="text-sm text-greyStatus-600">markdown-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo10} className="lazyload" width="30" alt="Icons Category Meetings" />
                        </div>
                        <p className="text-sm text-greyStatus-600">meetings-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo11} className="lazyload" width="30" alt="Icons Category PerMgnt" />
                        </div>
                        <p className="text-sm text-greyStatus-600">permgmt-grey6</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryTwo12} className="lazyload" width="30" alt="Icons Category Travel" />
                        </div>
                        <p className="text-sm text-greyStatus-600">travel-grey6</p>
                      </div>  
                    </div> 
                  </TabPanel>
                  <TabPanel>
                    <div className="flex flex-wrap -mx-5">   
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree1} className="lazyload" width="30" alt="Icons Category Celebration" />
                        </div>
                        <p className="text-sm text-greyStatus-600">celebration-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree2} className="lazyload" width="30" alt="Icons Category Compliance" />
                        </div>
                        <p className="text-sm text-greyStatus-600">compliance-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree3} className="lazyload" width="30" alt="Icons Category Delivery" />
                        </div>
                        <p className="text-sm text-greyStatus-600">delivery-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree4} className="lazyload" width="30" alt="Icons Category Digest" />
                        </div>
                        <p className="text-sm text-greyStatus-600">digest-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree5} className="lazyload" width="30" alt="Icons Category Finance" />
                        </div>
                        <p className="text-sm text-greyStatus-600">finance-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree6} className="lazyload" width="30" alt="Icons Category FPM" />
                        </div>
                        <p className="text-sm text-greyStatus-600">fpm-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree7} className="lazyload" width="30" alt="Icons Category HR" />
                        </div>
                        <p className="text-sm text-greyStatus-600">hr-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree8} className="lazyload" width="30" alt="Icons Category LD" />
                        </div>
                        <p className="text-sm text-greyStatus-600">l&amp;d-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree9} className="lazyload" width="30" alt="Icons Category Markdown" />
                        </div>
                        <p className="text-sm text-greyStatus-600">markdown-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree10} className="lazyload" width="30" alt="Icons Category Meetings" />
                        </div>
                        <p className="text-sm text-greyStatus-600">meetings-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree11} className="lazyload" width="30" alt="Icons Category PerMgnt" />
                        </div>
                        <p className="text-sm text-greyStatus-600">permgnt-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree12} className="lazyload" width="30" alt="Icons Category Travel" />
                        </div>
                        <p className="text-sm text-greyStatus-600">travel-primary3</p>
                      </div> 
                      <div className="px-5 mb-5"> 
                        <div className="bg-placeholder-200 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                          <img data-src={typesCategoriesPrimaryThree13} className="lazyload" width="30" alt="Icons Category Partner" />
                        </div>
                        <p className="text-sm text-greyStatus-600">partner-primary3</p>
                      </div>  
                    </div> 
                  </TabPanel> 
                </Tabs> 
              </div>  

              <div className="mb-16">
                <span id="onboarding-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Onboarding
                  <Copy id="onboarding" />
                </Heading>
                <p className="mb-5 text-greyStatus-600 tracking-wider">Icons to be used within the context of Astro's user onboarding process.</p>
                <div className="flex flex-wrap -mx-5">   
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding1} className="lazyload" width="30" alt="Icons Onboarding Mic 1" />
                    </div>
                    <p className="text-sm text-greyStatus-600">mic-1</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding2} className="lazyload" width="30" alt="Icons Onboarding Salesforce 1" />
                    </div>
                    <p className="text-sm text-greyStatus-600">salesforce-1</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding3} className="lazyload" width="30" alt="Icons Onboarding Notifications 1" />
                    </div>
                    <p className="text-sm text-greyStatus-600">notifications-1</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding4} className="lazyload" width="30" alt="Icons Onboarding G Suite 1" />
                    </div>
                    <p className="text-sm text-greyStatus-600">gsuite-1</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding5} className="lazyload" width="30" alt="Icons Onboarding Mic 2" />
                    </div>
                    <p className="text-sm text-greyStatus-600">mic-2</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding6} className="lazyload" width="30" alt="Icons Onboarding Salesforce 2" />
                    </div>
                    <p className="text-sm text-greyStatus-600">salesforce-2</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding7} className="lazyload" width="30" alt="Icons Onboarding Notifications 2" />
                    </div>
                    <p className="text-sm text-greyStatus-600">notifications-2</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding8} className="lazyload" width="30" alt="Icons Onboarding G Suite 2" />
                    </div>
                    <p className="text-sm text-greyStatus-600">gsuite-2</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding9} className="lazyload" width="30" alt="Icons Onboarding Mic 3" />
                    </div>
                    <p className="text-sm text-greyStatus-600">mic-3</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding10} className="lazyload" width="30" alt="Icons Onboarding Salesforce 3" />
                    </div>
                    <p className="text-sm text-greyStatus-600">salesforce-3</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding11} className="lazyload" width="30" alt="Icons Onboarding Notifications 3" />
                    </div>
                    <p className="text-sm text-greyStatus-600">notifications-3</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding12} className="lazyload" width="30" alt="Icons Onboarding G Suite 3" />
                    </div>
                    <p className="text-sm text-greyStatus-600">gsuite-3</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding13} className="lazyload" width="30" alt="Icons Onboarding Privacy" />
                    </div>
                    <p className="text-sm text-greyStatus-600">privacy</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding14} className="lazyload" width="30" alt="Icons Onboarding Chevron" />
                    </div>
                    <p className="text-sm text-greyStatus-600">chevron</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding15} className="lazyload" width="30" alt="Icons Onboarding Activities" />
                    </div>
                    <p className="text-sm text-greyStatus-600">activities</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding16} className="lazyload" width="30" alt="Icons Onboarding Discover" />
                    </div>
                    <p className="text-sm text-greyStatus-600">discover</p>
                  </div> 
                  <div className="px-5 mb-5"> 
                    <div className="bg-placeholder-400 as-icon h-24 flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesOnboarding17} className="lazyload" width="30" alt="Icons Onboarding Nudges" />
                    </div>
                    <p className="text-sm text-greyStatus-600">nudges</p>
                  </div>  
                </div> 
              </div>              
            </section>

            <section id="usage" name="usage" className="as-section"> 
              <span id="usage-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
                <Copy id="usage" />
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Icons should help users visualize context or quickly identify types of information. Here are examples of how they're used within Astro.</p>
              <Tabs>
                <TabList>
                  <Tab>Pulse</Tab>
                  <Tab>Main Controls</Tab>
                  <Tab>Navigation</Tab>
                  <Tab>Avatars</Tab>                
                  <Tab>Travel</Tab>                
                  <Tab>System</Tab>                
                  <Tab>Categories</Tab>      
                  <Tab>Onboarding</Tab>
                </TabList> 
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usagePulse1} className="lazyload mr-12" width="375px" alt="Usage Select Field" /> 
                    <img data-src={usagePulse2} className="lazyload" width="375px" alt="Usage Select Field" />  
                  </div> 
                </TabPanel>
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex"> 
                    <img data-src={usageMainControls1} className="lazyload" width="375px" alt="Usage Input Field" />  
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageNavigation1} className="lazyload " width="375px" alt="Usage Picker Field" /> 
                  </div>
                </TabPanel> 
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageAvatar1} className="lazyload mr-12" width="375px" alt="Usage Picker Field" /> 
                    <img data-src={usageAvatar2} className="lazyload " width="375px" alt="Usage Picker Field" /> 
                  </div>
                </TabPanel> 
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageTravel1} className="lazyload " width="375px" alt="Usage Feedback" /> 
                  </div>
                </TabPanel>  
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageSystem1} className="lazyload mr-12" width="375px" alt="Usage Feedback" /> 
                    <img data-src={usageSystem2} className="lazyload " width="375px" alt="Usage Feedback" /> 
                  </div>
                </TabPanel>  
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageCategory1} className="lazyload mr-12" width="375px" alt="Usage Feedback" /> 
                    <img data-src={usageCategory2} className="lazyload " width="375px" alt="Usage Feedback" /> 
                  </div>
                </TabPanel>  
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageOnboarding1} className="lazyload mr-12" width="375px" alt="Usage Feedback" /> 
                    <img data-src={usageOnboarding2} className="lazyload " width="375px" alt="Usage Feedback" /> 
                  </div>
                </TabPanel>  
              </Tabs>
            </section> 

            <section id="guidance" name="guidance" className="as-section mb-48">
              <span id="guidance-anchor" className="page-anchor"></span>

              <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
                <Copy id="guidance" />
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of guidelines for icons to adhere to.</p>
              <div className="flex flex-wrap -mx-4 mb-12">  

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Logo Guidance 1" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not distort icons.</p>
                  </div>
                </div>  
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Logo Guidance 5" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use system icons for nudges.</p>
                  </div>
                </div>  
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance3} className="lazyload mb-3" width="290" alt="Logo Guidance 5" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not change the color of icons or use non-approved colors.</p>
                  </div>
                </div>  
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance4} className="lazyload mb-3" width="290" alt="Logo Guidance 5" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use icons for any use other than what is specified.</p>
                  </div>
                </div>  
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance5} className="lazyload mb-3" width="290" alt="Logo Guidance 5" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not create your own icons using combinations of this page. Instead, contact a designer.</p>
                  </div>
                </div>    
              </div> 
            </section>

          </main>
        </div>
      </Layout>
    );
  }
}

export default DesignIconsPage;
