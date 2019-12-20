import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {Link} from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading'; 
import Download from "../../components/download";
import Copy from "../../components/copy";

import typesFieldAlert1 from "../../assets/elements/alerts/types/Field Alert/01 Mandatory.png";   
import typesFieldAlert2 from "../../assets/elements/alerts/types/Field Alert/02 Green Alert.png";   
import typesFieldAlert3 from "../../assets/elements/alerts/types/Field Alert/03 Red Alert.png"; 
import typesSystemAlert1 from "../../assets/elements/alerts/types/System Alert/01 Validation.png";   
import typesSystemAlert2 from "../../assets/elements/alerts/types/System Alert/02 Continue.png";   
import typesAuthorizationMessage1 from "../../assets/elements/alerts/types/Authorization Message/01 Authorization Message.png";   
import typesOverlayMessage1 from "../../assets/elements/alerts/types/Overlay Message/Overlay Message.png";
import typesCoachmarks1 from "../../assets/elements/alerts/types/Coachmarks/01 Voice.png";
import typesCoachmarks2 from "../../assets/elements/alerts/types/Coachmarks/02 Keyboard.png";
import typesCoachmarks3 from "../../assets/elements/alerts/types/Coachmarks/03 History.png";
import typesCoachmarks4 from "../../assets/elements/alerts/types/Coachmarks/04 Menu.png";
import typesToasts1 from "../../assets/elements/alerts/types/Toasts/01 Confirmation.png";
import typesToasts2 from "../../assets/elements/alerts/types/Toasts/02 Error.png";
import typesToasts3 from "../../assets/elements/alerts/types/Toasts/03 Informational.png";
import typesToasts4 from "../../assets/elements/alerts/types/Toasts/04 Actionable.png";

import usageFieldAlert1 from "../../assets/elements/alerts/usage/Field Alert/01 Mandatory Alert.png";   
import usageFieldAlert2 from "../../assets/elements/alerts/usage/Field Alert/02 Field Alerts.png"; 
import usageSystemAlert1 from "../../assets/elements/alerts/usage/System Alert/01 Validation.png";   
import usageSystemAlert2 from "../../assets/elements/alerts/usage/System Alert/02 Continue Alert FPO.png";   
import usageAuthorizationMessage1 from "../../assets/elements/alerts/usage/Authorization Message/01 Authorization Message.png";   
import usageAllowNotificationsMessage1 from "../../assets/elements/alerts/usage/Allow Notifications Message/01 Allow Notifications Message.png";
import usageCoachmarks1 from "../../assets/elements/alerts/usage/Coachmarks/01 Voice Coachmark.png";
import usageCoachmarks2 from "../../assets/elements/alerts/usage/Coachmarks/02 History Coachmark.png"; 
import usageToasts1 from "../../assets/elements/alerts/usage/Toasts/01 Toasts FPO.png"; 

import specsFieldAlert1 from "../../assets/elements/alerts/specs/Field Alert/01 Mandatory Specs.png";   
import specsFieldAlert2 from "../../assets/elements/alerts/specs/Field Alert/02 Green Specs.png"; 
import specsFieldAlert3 from "../../assets/elements/alerts/specs/Field Alert/03 Red Alert.png"; 
import specsSystemAlert1 from "../../assets/elements/alerts/specs/System Alert/01 Validation Specs.png";   
import specsSystemAlert2 from "../../assets/elements/alerts/specs/System Alert/02 Continue Specs.png";   
import specsSystemAlert3 from "../../assets/elements/alerts/specs/System Alert/01 Continue Specs.png";   
import specsAuthorizationMessage1 from "../../assets/elements/alerts/specs/Authorization Message/01 Authorization Message Specs.png";   
import specsOverlayMessage1 from "../../assets/elements/alerts/specs/Overlay Message/Overlay Message.png";
import specsCoachmarks1 from "../../assets/elements/alerts/specs/Coachmarks/01 Coachmarks Specs.png"; 
import specsToasts1 from "../../assets/elements/alerts/specs/Toasts/01 Toasts Specs FPO.png"; 
import specsToasts2 from "../../assets/elements/alerts/specs/Toasts/02 Toasts Specs FPO.png"; 
import specsToasts3 from "../../assets/elements/alerts/specs/Toasts/03 Toasts Specs FPO.png"; 
import specsToasts4 from "../../assets/elements/alerts/specs/Toasts/04 Toasts Specs FPO.png"; 

import guidance1 from "../../assets/elements/alerts/guidance/01 Alerts Notifications Guidance FPO.png"; 
import guidance2 from "../../assets/elements/alerts/guidance/02 Alerts Notifications Guidance.png"; 
import guidance3 from "../../assets/elements/alerts/guidance/03 Alerts Notifications Guidance.png"; 
import guidance4 from "../../assets/elements/alerts/guidance/04 Alerts Notifications Guidance.png"; 
import guidance5 from "../../assets/elements/alerts/guidance/05 Alerts Notifications Guidance.png"; 
import guidance6 from "../../assets/elements/alerts/guidance/06 Alerts Notifications Guidance.png"; 
 
class ElementsAlertsPage extends Component {   
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
              <li><Link to="elements/buttons" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</Link></li>
              <li><Link to="elements/dividers" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</Link></li>
              <li><Link to="elements/alerts" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100">Alerts and Notifications</Link>
                <Scrollspy items={ ['types', 'usage', 'specs', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="elements/alerts#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li>
                  <li><Link to="elements/alerts#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Usage</Link></li>                
                  <li><Link to="elements/alerts#specs-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Specs</Link></li>
                  <li><Link to="elements/alerts#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
                </Scrollspy>              
              </li>
              <li><Link to="elements/badges" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</Link></li>
              <li><Link to="elements/charts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</Link></li>
              <li><Link to="elements/form-fields" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</Link></li>
              <li><Link to="elements/loaders" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Loaders</Link></li>
            </ul> 
          </nav>
        </aside>
        <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
          <main className=" pl-16 pr-16 pt-16">

            <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Alerts and Notifications</Heading>
              <Download />
            </div> 
            <p className="mb-16 text-greyStatus-600 tracking-wider">Alerts and notifications helps to provide users with context, urgency or informational updates.</p> 
            
            <section id="types" name="types" className="as-section">
              <span id="types-anchor" className="page-anchor"></span>
              <Heading level="2" className="as-h2 as-type-medium mb-3">Types
                <Copy id="types" />     
              </Heading>  
              <p className="mb-16 text-greyStatus-600 tracking-wider">Alerts communicate context as to the status or validity around information. Notifications are messages from the system that bring something to the user’s attention</p>
              
              <div className="mb-16">
                <span id="types-field-alert-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Field Alert
                  <Copy id="types-field-alert" />         
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Helps users understand the state and/or the validity of information within fields.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">1</span><img data-src={typesFieldAlert1} className="lazyload inline-block" width="66" height="1" alt="Alerts Field Mandatory" /> </li>
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">2</span><img data-src={typesFieldAlert2} className="lazyload inline-block" width="61" height="1" alt="Alerts Field Red Alert" /> </li>
                  <li className="as-grid-4 relative"><span className="list-circle">3</span><img data-src={typesFieldAlert3} className="lazyload inline-block" width="50" height="1" alt="Alerts Field Green Alert" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Field Alerts - Mandatory.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Field Alerts - Green Alert.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">3. Field Alerts - Red Alert.</p> 
              </div>

              <div className="mb-16">
                <span id="types-system-alert-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">System Alert
                  <Copy id="types-system-alert" />            
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">A message from the system that informs users about the state of the system.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">1</span><img data-src={typesSystemAlert1} className="lazyload inline-block" width="270" alt="Alerts System Validation" /> </li>
                  <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={typesSystemAlert2} className="lazyload inline-block" width="270" alt="Alerts System Continue" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Validation.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Continue.</p>
              </div> 

              <div className="mb-16">
                <span id="types-authorization-message-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Authorization Message
                  <Copy id="types-authorization-message" />            
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">A notice about the validity or state of user credentials.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-300 border flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={usageAuthorizationMessage1} className="lazyload inline-block" width="254" alt="Alerts Authorization Message " /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Authorization Message.</p> 
              </div> 

              <div className="mb-16">
                <span id="types-overlay-message-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Overlay Message
                  <Copy id="types-overlay-message" />            
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">A intersticial message that provides additional information and can also prompt the user to take action.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesOverlayMessage1} className="lazyload inline-block" width="335" alt="Overlay Message" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Overlay.</p> 
              </div> 

              <div className="mb-16">
                <span id="types-coachmarks-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Coachmarks
                  <Copy id="types-coachmarks" />             
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">An interstitial message designed to "coach" users on how to engage with product features.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">1</span><img data-src={typesCoachmarks1} className="lazyload inline-block" width="295" alt="Overlay Message" /> </li>
                  <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">2</span><img data-src={typesCoachmarks2} className="lazyload inline-block" width="295" alt="Overlay Message" /> </li>
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">3</span><img data-src={typesCoachmarks3} className="lazyload inline-block" width="295" alt="Overlay Message" /> </li>
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">4</span><img data-src={typesCoachmarks4} className="lazyload inline-block" width="295" alt="Overlay Message" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Voice.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">2. Keyboard.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">3. History.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">4. Menu.</p> 
              </div> 

              <div className="mb-16">
                <span id="types-toasts-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Toasts
                  <Copy id="types-toasts" />            
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Toasts are temporary status messages whose appearance on screen may temporarily overlay the permanent UI. Toasts can be dismissed manually.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">1</span><img data-src={typesToasts1} className="lazyload inline-block" width="355" alt="Overlay Message" /> </li>
                  <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">2</span><img data-src={typesToasts2} className="lazyload inline-block" width="355" alt="Overlay Message" /> </li>
                  <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">3</span><img data-src={typesToasts3} className="lazyload inline-block" width="355" alt="Overlay Message" /> </li>
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">4</span><img data-src={typesToasts4} className="lazyload inline-block" width="355" alt="Overlay Message" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Confirmation.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">2. Keyboard.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">3. History.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">4. Menu.</p> 
              </div> 
              
            </section>

            <section id="usage" name="usage" className="as-section"> 
              <span id="usage-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
                <Copy id="usage" />  
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Alerts and notifications are used to share messages about states and/or requirements with the user. Here are examples of how they're used within Astro.</p>
              <Tabs>
                <TabList>
                  <Tab>Field Alerts</Tab>
                  <Tab>System Alerts</Tab>
                  <Tab>Authorization Message</Tab>
                  <Tab>Overlay Message</Tab>
                  <Tab>Coachmarks</Tab>
                  <Tab>Toasts</Tab>
                </TabList> 
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageFieldAlert1} className="lazyload mr-12" width="375px" alt="Buttons Usage Primary" />
                    <img data-src={usageFieldAlert2} className="lazyload " width="375px" alt="Buttons Usage Primary" />
                  </div> 
                </TabPanel>
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageSystemAlert1} className="lazyload mr-12" width="375px" alt="Buttons Usage Secondary" />
                    <img data-src={usageSystemAlert2} className="lazyload " width="375px" alt="Buttons Usage Secondary" />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageAuthorizationMessage1} className="lazyload " width="375px" alt="Buttons Usage Text" />
                  </div>
                </TabPanel> 
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageAllowNotificationsMessage1} className="lazyload " width="375px" alt="Buttons Usage Next Step" />
                  </div>
                </TabPanel> 
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageCoachmarks1} className="lazyload mr-12" width="375px" alt="Buttons Usage Voice" />
                    <img data-src={usageCoachmarks2} className="lazyload " width="375px" alt="Buttons Usage Voice" />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageToasts1} className="lazyload " width="375px" alt="Buttons Usage Voice" />
                  </div>
                </TabPanel>
              </Tabs>
            </section>       
            
            <section id="specs" name="specs" className="as-section">
              <span id="specs-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Specs
                <Copy id="specs" />               
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Details for alerts and notifications including typography, color and alignment.</p>
              
              <div className="mb-16">
                <span id="field-alerts-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Field Alerts
                  <Copy id="specs-field-alerts" />            
                </Heading> 
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">1</span><img data-src={specsFieldAlert1} className="lazyload inline-block" width="210" height="1" alt="Alerts Field Mandatory" /> </li>
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">2</span><img data-src={specsFieldAlert2} className="lazyload inline-block" width="129" height="1" alt="Alerts Field Red Alert" /> </li>
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">3</span><img data-src={specsFieldAlert3} className="lazyload inline-block" width="102" height="1" alt="Alerts Field Green Alert" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Field Alert - Mandatory.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Field Alert - Green Alert.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">3. Field Alert - Red Alert.</p> 
              </div>

              <div className="mb-16">
                <span id="specs-system-alerts-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">System Alerts
                  <Copy id="specs-system-alerts" />            
                </Heading> 
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mb-12"><span className="list-circle">1</span><img data-src={specsSystemAlert1} className="lazyload inline-block" width="531" alt="Alerts System Validation" /> </li>
                  <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={specsSystemAlert2} className="lazyload inline-block" width="531" alt="Alerts System Continue" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Validation.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Continue.</p> 
              </div> 

              <div className="mb-16">
                <span id="specs-authorization-messages-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Authorization Messages
                  <Copy id="specs-authorization-messages" />           
                </Heading> 
                <ol className="mb-5 py-16 px-20 bg-placeholder-300 border flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">1</span><img data-src={specsAuthorizationMessage1} className="lazyload inline-block" width="412" alt="Alerts Authorization Message " /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Authorization Message.</p> 
              </div> 

              <div className="mb-16">
                <span id="specs-allow-notifications-messages-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Allow Notifications Messages
                  <Copy id="specs-allow-notifications-messages" />          
                </Heading> 
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">1</span><img data-src={usageAllowNotificationsMessage1} className="lazyload inline-block" width="335" alt="Overlay Message" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Allow Notifications Message.</p> 
              </div> 

              <div className="mb-16">
                <span id="specs-coachmarks-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Coachmarks
                  <Copy id="specs-coachmarks" />            
                </Heading> 
                <ol className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">1</span><img data-src={specsCoachmarks1} className="lazyload inline-block" width="489" alt="Overlay Message" /> </li> 
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Voice.</p>  
              </div> 

              <div className="mb-16">
                <span id="specs-toasts-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Toasts
                  <Copy id="specs-toasts" />           
                </Heading> 
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">1</span><img data-src={specsToasts1} className="lazyload inline-block" width="665" alt="Overlay Message" /> </li>
                  <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">2</span><img data-src={specsToasts2} className="lazyload inline-block" width="665" alt="Overlay Message" /> </li>
                  <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">3</span><img data-src={specsToasts3} className="lazyload inline-block" width="665" alt="Overlay Message" /> </li>
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">4</span><img data-src={specsToasts4} className="lazyload inline-block" width="665" alt="Overlay Message" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Confirmation.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">2. Keyboard.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">3. History.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">4. Menu.</p> 
              </div> 
              
            </section>

            <section id="guidance" name="guidance" className="as-section mb-48">
              <span id="guidance-anchor" className="page-anchor"></span>

              <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
                <Copy id="guidance" />  
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of guidelines for alerts and notifications to adhere to.</p>
              <div className="flex flex-wrap -mx-5 mb-12">  

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Guidance 2" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use authorization message with a secondary button.</p>
                  </div>
                </div>

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance3} className="lazyload mb-3" width="290" alt="Guidance 1" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use a system alert to notify about app functionality. Use only for system errors and messages.</p>
                  </div>
                </div>

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance4} className="lazyload mb-3" width="290" alt="Guidance 2" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use any other colors on field alerts.</p>
                  </div>
                </div>

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance5} className="lazyload mb-3" width="290" alt="Guidance 1" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use “*Mandatory” field alert on non-mandatory fields.</p>
                  </div>
                </div>

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance6} className="lazyload mb-3" width="290" alt="Guidance 2" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use an overlay message inside a card.</p>
                  </div>
                </div> 

                <div className="w-grid px-5 mb-5"> 
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use toast at the bottom of the screen.</p>
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

export default ElementsAlertsPage;
