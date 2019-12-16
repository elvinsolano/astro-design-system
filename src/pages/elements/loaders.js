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
import Download from "../../components/download"; 

import typesPullDownLoader1 from "../../assets/elements/loaders/types/pull-down-loader/01 Pull Down Loader.png";
import typesGeneralLoader1 from "../../assets/elements/loaders/types/general-loader/01 General Loader.png";   
import typesGeneralLoader2 from "../../assets/elements/loaders/types/general-loader/02 General Loader.png";   

import usagePullDownLoader1 from "../../assets/elements/loaders/usage/pull-down-loader/01 Pull Down Loader.png";
import usageGeneralLoader1 from "../../assets/elements/loaders/usage/general-loader/01 General Loader with Text Usage.png";
import usageGeneralLoader2 from "../../assets/elements/loaders/usage/general-loader/02 General Loader Usage.png";

import specsPullDownLoader1 from "../../assets/elements/loaders/specs/pull-down-loader/01 Pull Down Loader Specs.png";
import specsGeneralLoader1 from "../../assets/elements/loaders/specs/general-loader/01 General Loader with Text Specs.png"; 
import specsGeneralLoader2 from "../../assets/elements/loaders/specs/general-loader/02 General Loader Specs.png"; 

import guidance1 from "../../assets/elements/loaders/guidance/01 Loaders Guidance.png";
import guidance2 from "../../assets/elements/loaders/guidance/02 Loaders Guidance.png";
import guidance3 from "../../assets/elements/loaders/guidance/03 Loaders Guidance.png";
import guidance4 from "../../assets/elements/loaders/guidance/04 Loaders Guidance.png";  

function ElementsLoadersPage() { 

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
            <li><Link to="elements/buttons" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</Link></li>
            <li><Link to="elements/dividers" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</Link></li>
            <li><Link to="elements/alerts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Alerts and Notifications</Link></li>
            <li><Link to="elements/badges" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</Link></li>
            <li><Link to="elements/charts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</Link></li>
            <li><Link to="elements/form-fields" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</Link></li>
            <li><Link to="elements/loaders" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Loaders</Link> 
              <Scrollspy items={ ['types', 'usage', 'specs', 'guidance'] } offset={-80} className="block" currentClassName="is-current">  
                <li><Link to="elements/loaders#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</Link></li>              
                <li><Link to="elements/loaders#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</Link></li>
                <li><Link to="elements/loaders#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</Link></li>
                <li><Link to="elements/loaders#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</Link></li>
              </Scrollspy>            
            </li>
          </ul> 
        </nav>
      </aside>

      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Loaders</Heading>
            <Download />
          </div> 

          <section id="types" name="types" className="as-section"> 
            <span id="types-anchor" className="page-anchor"></span> 
            <p className="mb-16 text-greyStatus-600 tracking-wider">Visual actions that inform the user that data is currently loading and the screen is not frozen.</p>
            <Heading level="2" className="as-h2 as-type-medium mb-3">Types
              <CopyToClipboard text={'http://localhost:8000/elements/buttons#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-12 text-greyStatus-600 tracking-wider">The design system offers two types of loaders.</p>
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Pull-Down Loaders
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading>  
              <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesPullDownLoader1} className="lazyload inline-block" width="18" height="17" alt="Loaders Types Pull Down" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">A pull-down loader is used when a user wants to refresh a page or section.</p> 
            </div> 
             
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">General Loaders
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">A general loader is most commonly used for password reset or when items or information take a long time to load.</p>
              <ol className="mb-5 py-16 pl-20 pr-10 bg-placeholder-300 flex flex-wrap items-start justify-start">
                <li className="as-grid-10 relative"><span className="list-circle">1</span><img data-src={typesGeneralLoader1} className="lazyload inline-block mr-12" width="251" height="220" alt="Loaders Types General With Text" /> </li>
                <li className="as-grid-10 relative"><span className="list-circle">2</span><img data-src={typesGeneralLoader2} className="lazyload inline-block" width="40" height="40" alt="Loaders Types General Without Text" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. With Text</p> 
              <p className="as-type-regular text-sm text-greyStatus-600">2. Without Text</p> 
            </div> 
          </section> 

          <section id="usage" name="usage" className="as-section"> 
            <span id="usage-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
              <CopyToClipboard text={'http://localhost:8000/elements/buttons#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">Loaders alert a user to wait for an activity to complete. They are typically placed throughout the UI. Here are examples of how they’re used within Astro.</p>
            <Tabs>
              <TabList>
                <Tab>Pull Down Loader</Tab>
                <Tab>General Loader</Tab> 
              </TabList>
          
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                  <img data-src={usagePullDownLoader1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                </div> 
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                  <img data-src={usageGeneralLoader1} className="lazyload mr-12" width="375px" alt="Loaders Usage General Loader 1" />
                  <img data-src={usageGeneralLoader2} className="lazyload " width="375px" alt="Loaders Usage General Loader 2" /> 
                </div>
              </TabPanel> 
            </Tabs>
          </section>

          <section id="specs" name="specs" className="as-section"> 
            <span id="specs-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Specs
              <CopyToClipboard text={'http://localhost:8000/elements/buttons#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-12 text-greyStatus-600 tracking-wider">Details of how to apply color, alignment and type to a loader.</p> 
            
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Pull-Down Loaders
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading>  
              <ol className="mb-5 py-16 pl-20 pr-10 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start"> 
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={specsPullDownLoader1} className="lazyload inline-block" width="264" height="93" alt="Loaders Specs Pull Down Loader" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Pull-Down Loader</p> 
            </div> 
             
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">General Loader
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading>
              <ol className="mb-5 py-16 pl-20 pr-10 bg-placeholder-300 flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={specsGeneralLoader1} className="lazyload inline-block mr-12" width="423" height="320" alt="Loaders Specs General Loader 1" /> </li>
                <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={specsGeneralLoader2} className="lazyload inline-block" width="200" height="40" alt="Loaders Specs General Loader 2" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. General Loader with Text</p> 
              <p className="as-type-regular text-sm text-greyStatus-600">2. General Loader</p> 
            </div> 
            
          </section>  

          <section id="guidance" name="guidance" className="as-section mb-48">
            <span id="guidance-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
              <CopyToClipboard text={'http://localhost:8000/design/typography#guidance-anchor'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading>  
            <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of loader guidelines to adhere to.</p>
            <div className="flex flex-wrap -mx-5 mb-12">  
              <div className="w-grid px-5 mb-5">
                <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Guidance 1" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not place the pull down loader on the right or left. Always align to the center.</p>
                </div>
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Guidance 2" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use the pull down loader with text.</p>
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
                  <p className="text-sm text-greyStatus-600 ml-3">Do not place the general loader without text to the right or left. Always align to the center and middle.</p>
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
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use text above the general loader. Use only below with text always grouped (text and loader) and aligned to the middle and center.</p>
                </div>
              </div>
 

            </div>
          </section>

        </main>
      </div>
    </Layout>
  );
}

export default ElementsLoadersPage;
