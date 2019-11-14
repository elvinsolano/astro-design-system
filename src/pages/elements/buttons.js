import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'gatsby';  
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading';

import typesPrimary1 from "../../assets/elements/buttons/types/01 Primary Enabled.png";  
import typesPrimary2 from "../../assets/elements/buttons/types/02 Primary Pressed.png";  
import typesPrimary3 from "../../assets/elements/buttons/types/03 Primary Disabled.png";
import typesSecondary1 from "../../assets/elements/buttons/types/01 Secondary Enabled.png";  
import typesText1 from "../../assets/elements/buttons/types/01 Text Button.png";  
import typesText2 from "../../assets/elements/buttons/types/02 Text Button.png";  
import typesNextStep1 from "../../assets/elements/buttons/types/01 Next Step Default.png";  
import typesNextStep2 from "../../assets/elements/buttons/types/02 Next Step Pressed.png";

import voice1 from "../../assets/elements/buttons/voice/01 Voice Button Active.png";  
import voice2 from "../../assets/elements/buttons/voice/02 Voice Button Listening.png";  
import voice3 from "../../assets/elements/buttons/voice/03 Voice Button Talking.png";  
import voice4 from "../../assets/elements/buttons/voice/04 Voice Button Thinking.png";  
import voice5 from "../../assets/elements/buttons/voice/05 Voice Button Delayed.png";  

import usage1 from "../../assets/elements/buttons/usage/01 Primary Usage.png";  
import usage2 from "../../assets/elements/buttons/usage/02 Secondary Usage.png";
import usage3 from "../../assets/elements/buttons/usage/03 Text Link Usage.png"; 
import usage4 from "../../assets/elements/buttons/usage/04 Next Step Usage.png"; 
import usage5 from "../../assets/elements/buttons/usage/05 Voice Button Usage.png";

import specsPrimary1 from "../../assets/elements/buttons/specs/primary/01 Primary Enabled Specs.png";  
import specsPrimary2 from "../../assets/elements/buttons/specs/primary/02 Primary Pressed Specs.png";  
import specsPrimary3 from "../../assets/elements/buttons/specs/primary/03 Primary Disabled Specs.png";
import specsSecondary1 from "../../assets/elements/buttons/specs/secondary/01 Secondary Specs.png";
import specsText1 from "../../assets/elements/buttons/specs/text/01 Text Button Specs.png";
import specsText2 from "../../assets/elements/buttons/specs/text/02 Text Button Specs.png"; 
import specsNextStep1 from "../../assets/elements/buttons/specs/next-step/01 Next Step Specs.png";
import specsNextStep2 from "../../assets/elements/buttons/specs/next-step/02 Next Steps Pressed Specs.png";
import specsVoice1 from "../../assets/elements/buttons/specs/voice/01 Voice Button Specs.png";

import guidance1 from "../../assets/elements/buttons/guidance/01 Guidance.png";  
import guidance2 from "../../assets/elements/buttons/guidance/02 Guidance.png";  
import guidance3 from "../../assets/elements/buttons/guidance/03 Guidance.png";  
import guidance4 from "../../assets/elements/buttons/guidance/04 Guidance.png";  
import guidance5 from "../../assets/elements/buttons/guidance/05 Guidance.png";  
import guidance6 from "../../assets/elements/buttons/guidance/06 Guidance.png";  

function ElementsButtonsPage() { 

  return (
    <Layout>
      <SEO
        title="Element"
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
            <li><Link to="buttons" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100" activeClassName="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</Link>
              <Scrollspy items={ ['types', 'voice', 'usage', 'specs', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="elements/buttons#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li> 
                <li><Link to="elements/buttons#voice-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">Voice Button</Link></li>
                <li><Link to="elements/buttons#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">Usage</Link></li>
                <li><Link to="elements/buttons#specs-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">Specs</Link></li>
                <li><Link to="elements/buttons#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
              </Scrollspy>             
            </li>
            <li><a href="dividers" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Dividers</a></li>
            <li><a href="alerts" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Alerts and Notifications</a></li>
            <li><a href="badges" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Badges</a></li>
            <li><a href="charts" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Charts</a></li>
            <li><a href="form-fields" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Form Fields</a></li>
            <li><a href="loaders" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Loaders</a></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Buttons and Call to Actions (CTA’s)</Heading>
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

          <section id="types" name="types" className="mb-24"> 
            <span id="types-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-12">Types
              <CopyToClipboard text={'http://localhost:8000/elements/buttons#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Primary Button
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-10 relative mb-12"><span className="list-circle">1</span><img data-src={typesPrimary1} className="lazyload inline-block" width="295" height="50" alt="Buttons Types Primary Buttons Primary Enabled" /> </li>
                <li className="as-grid-10 relative mb-12"><span className="list-circle">2</span><img data-src={typesPrimary2} className="lazyload inline-block" width="295" height="50" alt="Buttons Types Primary Buttons Primary Pressed" /> </li>
                <li className="as-grid-10 relative"><span className="list-circle">3</span><img data-src={typesPrimary3} className="lazyload inline-block" width="295" height="50" alt="Buttons Types Primary Buttons Primary Disabled" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Primary Enabled: used to submit information, continue in a process or leave the application.</p>
              <p className="as-type-regular text-sm text-greyStatus-600">2. Primary Pressed: used when a user presses the button to submit information, continue in a process or leave the application.</p>
              <p className="as-type-regular text-sm text-greyStatus-600">3. Primary Disabled: used when the user hasn’t met the requirements to move to the next step.</p>
            </div> 
            
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Secondary Button
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="relative"><span className="list-circle">1</span><img data-src={typesSecondary1} className="lazyload inline-block" width="174" height="30" alt="Buttons Types Secondary Button" /></li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600 tracking-wider">The secondary button is used for less important tasks or when space does not allow for the use of the primary button. </p>
            </div>
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Text Button
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesText1} className="lazyload inline-block" width="74" height="23" alt="Buttons Types Text Button Underlined" /></li>
                <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={typesText2} className="lazyload inline-block" width="168" height="22" alt="Buttons Types Text Button Suggestions" /></li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Text Button Underlined: used for less pronounced actions.</p>
              <p className="as-type-regular text-sm text-greyStatus-600">2. Text Button Suggestions: Let’s user know how to interact with Astro</p>
            </div>            
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Next Step Button
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesNextStep1} className="lazyload inline-block" width="92" height="30" alt="Buttons Types Next Step Button Default" /></li>
                <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={typesNextStep2} className="lazyload inline-block" width="147" height="30" alt="Buttons Types Next Step Button Pressed" /></li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Default State: used as a continuation of the conversation. The user is presented with content and a next step action to take.</p>
              <p className="as-type-regular text-sm text-greyStatus-600">2. Pressed State: When a user presses the default state button they are presented the pressed state.</p>
            </div>            
          </section>

          <section id="voice" name="voice" className="mb-24"> 
            <span id="voice-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Voice Button
              <CopyToClipboard text={'http://localhost:8000/elements/buttons#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
              <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={voice1} className="lazyload inline-block" width="60" height="80" alt="Buttons Voice Button Active" /> </li>
              <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={voice2} className="lazyload inline-block" width="60" height="80" alt="Buttons Voice Button Listening" /> </li>
              <li className="as-grid-4 relative"><span className="list-circle">3</span><img data-src={voice3} className="lazyload inline-block" width="60" height="80" alt="Buttons Voice Button Talking" /> </li>
              <li className="as-grid-4 relative"><span className="list-circle">4</span><img data-src={voice4} className="lazyload inline-block" width="60" height="80" alt="Buttons Voice Button Thinking" /> </li>
              <li className="as-grid-4 relative"><span className="list-circle">5</span><img data-src={voice5} className="lazyload inline-block" width="60" height="80" alt="Buttons Voice Button Delayed" /> </li>
            </ol>  
            <p className="as-type-regular text-sm text-greyStatus-600">1. Active - Astro is ready to listen and take action.</p>
            <p className="as-type-regular text-sm text-greyStatus-600">2. Listening - Astro is listening to the user.</p>
            <p className="as-type-regular text-sm text-greyStatus-600">3. Talking - Astro is responding to the user.</p>
            <p className="as-type-regular text-sm text-greyStatus-600">4. Thinking - Astro is processing information.</p>
            <p className="as-type-regular text-sm text-greyStatus-600">5. Delayed - Shows when Astro takes more than 3 seconds to execute a command.</p>
          </section>

          <section id="usage" name="usage" className="mb-24"> 
            <span id="usage-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
              <CopyToClipboard text={'http://localhost:8000/elements/buttons#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">Buttons communicate actions that users can take. They are typically placed throughout the UI. Here are a variety of applications to help showcase how buttons are used within Astro.</p>
            <Tabs>
              <TabList>
                <Tab>Primary</Tab>
                <Tab>Secondary</Tab>
                <Tab>Text</Tab>
                <Tab>Next Step</Tab>
                <Tab>Voice</Tab>
              </TabList>
          
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex">
                  <img data-src={usage1} className="lazyload " width="375px" alt="Buttons Usage Primary" />
                </div> 
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex">
                  <img data-src={usage2} className="lazyload " width="375px" alt="Buttons Usage Secondary" />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex">
                  <img data-src={usage3} className="lazyload " width="375px" alt="Buttons Usage Text" />
                </div>
              </TabPanel> 
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex">
                  <img data-src={usage4} className="lazyload " width="375px" alt="Buttons Usage Next Step" />
                </div>
              </TabPanel> 
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex">
                  <img data-src={usage5} className="lazyload " width="375px" alt="Buttons Usage Voice" />
                </div>
              </TabPanel>
            </Tabs>
          </section>

          <section id="specs" name="specs" className="mb-24"> 
            <span id="specs-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Specs
              <CopyToClipboard text={'http://localhost:8000/elements/buttons#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">A detailed representation of padding, alignment and maximum character count.</p> 
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Primary
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap justify-start">
                <li className="w-full relative mb-12"><span className="list-circle">1</span><img data-src={specsPrimary1} className="lazyload inline-block" width="398" height="208" alt="Buttons Specs Primary 1" /></li>
                <li className="w-full relative mb-12"><span className="list-circle">2</span><img data-src={specsPrimary2} className="lazyload inline-block" width="295" height="178" alt="Buttons Specs Primary 2" /> </li>
                <li className="w-full relative"><span className="list-circle">3</span><img data-src={specsPrimary3} className="lazyload inline-block" width="295" height="174" alt="Buttons Specs Primary 3" /> </li>
              </ol>
            </div> 
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Secondary
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-10 relative"><span className="list-circle">1</span><img data-src={specsSecondary1} className="lazyload inline-block" width="278" height="221" alt="Buttons Specs Secondary 1" /></li> 
              </ol>
            </div> 
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Text
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-10 relative"><span className="list-circle">1</span><img data-src={specsText1} className="lazyload inline-block" width="237" height="72" alt="Buttons Specs Text 1" /></li> 
                <li className="as-grid-10 relative"><span className="list-circle">2</span><img data-src={specsText2} className="lazyload inline-block" width="331" height="88" alt="Buttons Specs Text 2"/></li> 
              </ol>
            </div> 
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Next Step
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-10 relative"><span className="list-circle">1</span><img data-src={specsNextStep1} className="lazyload inline-block" width="244" height="156" alt="Buttons Specs Next Step 1" /></li> 
                <li className="as-grid-10 relative"><span className="list-circle">2</span><img data-src={specsNextStep2} className="lazyload inline-block" width="147" height="85" alt="Buttons Specs Next Step 2" /></li> 
              </ol>
            </div> 
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Voice
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-10 relative"><span className="list-circle">1</span><img data-src={specsVoice1} className="lazyload inline-block" width="291" height="124" alt="Buttons Specs Voice 1" /></li>  
              </ol>
            </div> 
          </section>          

          <section id="guidance" name="guidance" className="mb-48">
            <span id="guidance-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
              <CopyToClipboard text={'http://localhost:8000/design/typography#guidance-anchor'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 

            <p className="mb-4 text-greyStatus-600 tracking-wider">Below is a list of guidelines for buttons to adhere to.</p>
            <div className="flex flex-wrap -mx-4 mb-12">  

              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Buttons Guidance 1"/>
                <p className="text-sm mb-3 text-greyStatus-600">Do not use primary CTA in content cards</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Buttons Guidance 1" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use primary and secondary buttons together.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img data-src={guidance3} className="lazyload mb-3" width="290" alt="Buttons Guidance 3" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use microphone and primary button together.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img data-src={guidance4} className="lazyload mb-3" width="290" alt="Buttons Guidance 4" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use microphone and secondary button together.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img data-src={guidance5} className="lazyload mb-3" width="290" alt="Buttons Guidance 5" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use text button suggestion for anything other then suggested voice.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img data-src={guidance6} className="lazyload mb-3" width="290" alt="Buttons Guidance 6" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use text button suggestion for anything other then suggested voice.</p>
              </div>
            </div> 
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default ElementsButtonsPage;
