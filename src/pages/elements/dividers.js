import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy'; 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import {Link} from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading'; 
 
import typesLightDividers1 from "../../assets/elements/dividers/types/light-dividers/01 Light Divider Small.png";   
import typesLightDividers2 from "../../assets/elements/dividers/types/light-dividers/02 Light Divider Large.png";   
import typesLightDividers3 from "../../assets/elements/dividers/types/light-dividers/03 Light Divider XL.png";   
import typesLightDividers4 from "../../assets/elements/dividers/types/light-dividers/04 Light Divider XXL.png"; 
import typesDarkDividers1 from "../../assets/elements/dividers/types/dark-dividers/01 Divider Dark Large.png";

import usageLightDividers1 from "../../assets/elements/dividers/usage/light-dividers/01 Light Dividers Usage.png";   
import usageLightDividers2 from "../../assets/elements/dividers/usage/light-dividers/02 Light Dividers Usage.png";   
import usageDarkDividers1 from "../../assets/elements/dividers/usage/dark-dividers/01 Dark Dividers Usage.png";      

import specsLightDividers1 from "../../assets/elements/dividers/specs/light-dividers/01 Light Divider Small Specs.png";   
import specsLightDividers2 from "../../assets/elements/dividers/specs/light-dividers/02 Light Divider Large Specs.png";   
import specsLightDividers3 from "../../assets/elements/dividers/specs/light-dividers/03 Light Divider XL Specs.png";   
import specsLightDividers4 from "../../assets/elements/dividers/specs/light-dividers/04 Light Divider XXL Specs.png"; 
import specsDarkDividers1 from "../../assets/elements/dividers/specs/dark-dividers/01 Dark Divider Small Specs.png";     

import guidanceDividers1 from "../../assets/elements/dividers/guidance/01 Dividers Guidance.png";   
import guidanceDividers2 from "../../assets/elements/dividers/guidance/02 Dividers Guidance.png";   
import guidanceDividers3 from "../../assets/elements/dividers/guidance/03 Dividers Guidance.png"; 

function ElementsDividersPage() { 

  return (
    <Layout>
      <SEO
        title="Element"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <aside className="fixed overflow-y-auto as-nav bg-white top-auto h-full border-r border-grey-500 border-solid">
        <nav>
          <ul className="">  
            <li><Link to="elements/buttons" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</Link></li>
            <li><Link to="elements/dividers" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</Link>
              <Scrollspy items={ ['types', 'usage', 'specs', 'guidance'] } offset={-80} className="block" currentClassName="is-current">  
                <li><Link to="elements/dividers#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</Link></li>              
                <li><Link to="elements/dividers#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</Link></li>
                <li><Link to="elements/dividers#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</Link></li>
                <li><Link to="elements/dividers#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</Link></li>
              </Scrollspy> 
            </li>
            <li><Link to="elements/alerts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Alerts and Notifications</Link></li>
            <li><Link to="elements/badges" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</Link></li>
            <li><Link to="elements/charts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</Link></li>
            <li><Link to="elements/form-fields" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</Link></li>
            <li><Link to="elements/loaders" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Loaders</Link></li>
          </ul> 
        </nav>
      </aside>

      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Dividers</Heading>
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
              <Heading level="3" className="as-h3 as-type-medium mb-3">Light Dividers
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Badges draw users’ attention to updated, new or removed content. They are typically placed throughout the UI. Here are examples of how they’re used within Astro.</p>
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">1</span><img src={typesLightDividers1} className="inline-block" width="295" height="1" /> </li>
                <li className="as-grid-4 relative mb-12"><span className="list-circle">2</span><img src={typesLightDividers2} className="inline-block" width="295" height="1" /> </li>
                <li className="as-grid-4 relative mr-12"><span className="list-circle">3</span><img src={typesLightDividers3} className="inline-block" width="295" height="1" /> </li>
                <li className="as-grid-4 relative"><span className="list-circle">4</span><img src={typesLightDividers4} className="inline-block" width="295" height="1" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Light Divider: Small</p>
              <p className="as-type-regular text-sm text-greyStatus-600">2. Light Divider: Large</p>
              <p className="as-type-regular text-sm text-greyStatus-600">3. Light Divider: XL</p>
              <p className="as-type-regular text-sm text-greyStatus-600">4. Light Divider: XXL</p>
            </div> 
             
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Dark Dividers
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Badges draw users’ attention to updated, new or removed content. They are typically placed throughout the UI. Here are examples of how they’re used within Astro.</p>
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img src={typesDarkDividers1} className="inline-block" width="295" height="1" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Dark Divider: Large</p> 
            </div> 
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
            <p className="mb-5 text-greyStatus-600 tracking-wider">Badges draw users’ attention to updated, new or removed content. They are typically placed throughout the UI. Here are examples of how they’re used within Astro.</p>
            <Tabs>
              <TabList>
                <Tab>Light Dividers</Tab>
                <Tab>Dark Dividers</Tab> 
              </TabList>
          
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex">
                  <img src={usageLightDividers1} className="" width="375px" />
                  <img src={usageLightDividers2} className="" width="375px" /> 
                </div> 
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex">
                  <img src={usageDarkDividers1} className="" width="375px" /> 
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
            <p className="mb-12 text-greyStatus-600 tracking-wider">A detailed representation of padding, alignment and maximum character count.</p> 
            
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Light Dividers
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Badges draw users’ attention to updated, new or removed content. They are typically placed throughout the UI. Here are examples of how they’re used within Astro.</p>
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative mb-12"><span className="list-circle">1</span><img src={specsLightDividers1} className="inline-block" width="445" height="82" /> </li>
                <li className="as-grid-4 relative mb-12"><span className="list-circle">2</span><img src={specsLightDividers2} className="inline-block" width="485" height="82" /> </li>
                <li className="as-grid-4 relative mb-12"><span className="list-circle">3</span><img src={specsLightDividers3} className="inline-block" width="475" height="82" /> </li>
                <li className="as-grid-4 relative"><span className="list-circle">4</span><img src={specsLightDividers4} className="inline-block" width="469" height="82" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Light Divider: Small</p>
              <p className="as-type-regular text-sm text-greyStatus-600">2. Light Divider: Large</p>
              <p className="as-type-regular text-sm text-greyStatus-600">3. Light Divider: XL</p>
              <p className="as-type-regular text-sm text-greyStatus-600">4. Light Divider: XXL</p>
            </div> 
             
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Dark Dividers
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Badges draw users’ attention to updated, new or removed content. They are typically placed throughout the UI. Here are examples of how they’re used within Astro.</p>
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img src={specsDarkDividers1} className="inline-block" width="485" height="81" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Dark Divider: Large</p> 
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
            <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of guidelines for typography to adhere to.</p>
            <div className="flex flex-wrap -mx-4 mb-12">  

              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img src={guidanceDividers1} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Don’t use dividers on forms.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img src={guidanceDividers2} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Don’t use a light divider on a black background.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidanceDividers3} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Don’t use a dark divider on a card.</p>
              </div> 
            </div> 
          </section>

        </main>
      </div>
    </Layout>
  );
}

export default ElementsDividersPage;
