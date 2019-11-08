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

import overviewLogo1 from "../../assets/design/logo/overview/Logo Overview.png";

import typesFullLockUpLogo1 from "../../assets/design/logo/types/full lock up/01 Astro_Full_Lock_Up_Primary_RGB.png";
import typesFullLockUpLogo2 from "../../assets/design/logo/types/full lock up/02 Astro_Full_Lock_Up_Secondary_RGB.png";
import typesFullLockUpLogo3 from "../../assets/design/logo/types/full lock up/03 Astro_Full_Lock_Up_Tertiary_RGB.png";
import typesFullLockUpLogo4 from "../../assets/design/logo/types/full lock up/04 Astro_Full_Lock_Up_Monotone_Black_RGB.png";
import typesFullLockUpLogo5 from "../../assets/design/logo/types/full lock up/05 Astro_Full_Lock_Up_Monotone_White_RGB.png";

import typesIconLogo1 from "../../assets/design/logo/types/icon/01 Astro_Icon_Primary_RGB.png";
import typesIconLogo2 from "../../assets/design/logo/types/icon/02 Astro_Icon_Secondary_RGB.png";
import typesIconLogo3 from "../../assets/design/logo/types/icon/03 Astro_Icon_Tertiary_RGB.png";
import typesIconLogo4 from "../../assets/design/logo/types/icon/04 Astro_Icon_Monotone_Black_RGB.png";
import typesIconLogo5 from "../../assets/design/logo/types/icon/05 Astro_Icon_Monotone_White_RBG.png";

import typesWordmarkLogo1 from "../../assets/design/logo/types/wordmark/01 Astro_Wordmark_Primary_RGB.png";
import typesWordmarkLogo2 from "../../assets/design/logo/types/wordmark/02 Astro_Wordmark_Secondary_RGB.png";

import typesAppLogo1 from "../../assets/design/logo/types/app/01 App iOS.png";
import typesAppLogo2 from "../../assets/design/logo/types/app/02 App Android.png";

import constructionLogo1 from "../../assets/design/logo/construction/Construction.png";

import usageLogo1 from "../../assets/design/logo/usage/01 Full Lock Up.png";
import usageLogo2 from "../../assets/design/logo/usage/02 Icon.png";
import usageLogo3 from "../../assets/design/logo/usage/03 Wordmark.png";
import usageLogo4 from "../../assets/design/logo/usage/04 App Icon.png";

import clearspaceLogo1 from "../../assets/design/logo/clearspace/01 Full Lock Up Clearspace.png";
import clearspaceLogo2 from "../../assets/design/logo/clearspace/02 Icon Clearspace.png";
import clearspaceLogo3 from "../../assets/design/logo/clearspace/03 Wordmark Clearspace.png";

import guidanceLogo1 from "../../assets/design/logo/guidance/01 Logo Guidance.png";
import guidanceLogo2 from "../../assets/design/logo/guidance/02 Logo Guidance.png";
import guidanceLogo3 from "../../assets/design/logo/guidance/03 Logo Guidance.png";
import guidanceLogo4 from "../../assets/design/logo/guidance/04 Logo Guidance.png";
import guidanceLogo5 from "../../assets/design/logo/guidance/05 Logo Guidance.png";
import guidanceLogo6 from "../../assets/design/logo/guidance/06 Logo Guidance.png";

function DesignLogoPage() { 

  return (
    <Layout>
      <SEO
        title="Design"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <aside className="fixed overflow-y-auto pt-20 bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className=""> 
            <li><Link to="design/logo" className="block text-sm text-grey-400 pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100">Logo</Link>
              <Scrollspy items={ ['overview', 'types', 'contruction', 'usage', 'clearspace', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="design/logo#overview-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Overview</Link></li>
                <li><Link to="design/logo#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li>                
                <li><Link to="design/logo#contruction-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Construction</Link></li>
                <li><Link to="design/logo#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Usage</Link></li>
                <li><Link to="design/logo#clearspace-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Clearspace</Link></li>
                <li><Link to="design/logo#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
              </Scrollspy>   
            </li>
            <li><Link to="design/color" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100">Color</Link></li>
            <li><Link to="design/typography" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100">Typography</Link></li>
            <li><Link to="design/icons" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100">Icons</Link></li>
            <li><Link to="design/pictograms" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100">Pictograms</Link> </li>
            <li><Link to="design/screen-anatomy" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
            <li><Link to="design/motion" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100">Motion</Link></li>
            <li><Link to="design/sound" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100">Sound</Link></li>
          </ul> 
        </nav>
      </aside>

      <div className="flex flex-col flex-1 mx-auto pt-20 w-full pb-5.5">
        <main className="ml-64 pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Logo</Heading>
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

          <section id="overview" name="overview" className="mb-24"> 
            <span id="overview-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Overview
              <CopyToClipboard text={'http://localhost:8000/design/logo#overview-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='compliance' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='overview' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>               
            </Heading>  
            <p className="mb-4 text-greyStatus-600 tracking-wider">The Astro logo is made of three rectangles that connect to form the A icon. The concept reflects Astro's core purpose to connect us and simplify the way we work.</p>  
            <div className="py-12 px-20 bg-placeholder-300 flex flex-wrap items-center justify-start">
              <img src={overviewLogo1} className="" width="950" />
            </div> 
          </section>   

          <section id="types" name="types" className="mb-24"> 
            <span id="types-anchor" className="page-anchor"></span> 

            <Heading level="2" className="as-h2 as-type-medium mb-12">Types
              <CopyToClipboard text={'http://localhost:8000/design/color#primary'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading>   

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Full Lock Up
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <div className="flex flex-wrap -mx-4 mb-12">
                <div className="px-4 mb-8"> 
                  <div className="bg-black p-16">
                    <img src={typesFullLockUpLogo1} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Primary</p>
                </div>
                <div className="px-4 mb-8"> 
                  <div className="bg-white p-16 border border-grey-200 border-solid">
                    <img src={typesFullLockUpLogo2} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Secondary</p>  
                </div>
                <div className="px-4 mb-8">
                  <div className="bg-black p-16">
                    <img src={typesFullLockUpLogo3} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Tertiary</p> 
                </div>              
                <div className="px-4 mb-8">
                  <div className="bg-white p-16 border border-grey-200 border-solid">
                    <img src={typesFullLockUpLogo4} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Monotone Black</p> 
                </div>              
                <div className="px-4 mb-8">
                  <div className="bg-black p-16">
                    <img src={typesFullLockUpLogo5} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Monotone White</p> 
                </div>              
              </div> 
            </div>

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Icon
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <div className="flex flex-wrap -mx-4 mb-12">
                <div className="px-4 mb-8"> 
                  <div className="bg-black p-16">
                    <img src={typesIconLogo1} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Primary</p>
                </div>
                <div className="px-4 mb-8"> 
                  <div className="bg-white p-16 border border-grey-200 border-solid">
                    <img src={typesIconLogo2} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Secondary</p>  
                </div>
                <div className="px-4 mb-8">
                  <div className="bg-black p-16">
                    <img src={typesIconLogo3} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Tertiary</p> 
                </div>              
                <div className="px-4 mb-8">
                  <div className="bg-white p-16 border border-grey-200 border-solid">
                    <img src={typesIconLogo4} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Monotone Black</p> 
                </div>              
                <div className="px-4 mb-8">
                  <div className="bg-black p-16 border border-grey-200 border-solid">
                    <img src={typesIconLogo5} className="" width="150" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Monotone White</p> 
                </div>              
              </div> 
            </div>

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Wordmark
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <div className="flex flex-wrap -mx-4 mb-12">
                <div className="px-4 mb-8"> 
                  <div className="bg-black p-16 as-grid-11 flex justify-center">
                    <img src={typesWordmarkLogo1} className="" width="268" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Primary</p>
                </div>
                <div className="px-4 mb-8"> 
                  <div className="bg-white p-16 as-grid-11 flex justify-center border border-grey-200 border-solid">
                    <img src={typesWordmarkLogo2} className="" width="268" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Secondary</p>  
                </div>           
              </div> 
            </div>

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">App
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <div className="flex flex-wrap -mx-4 mb-12">
                <div className="px-4 mb-8"> 
                  <div className="bg-white">
                    <img src={typesAppLogo1} className="" width="205" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">iOS</p>
                </div>
                <div className="px-4 mb-8"> 
                  <div className="bg-white">
                    <img src={typesAppLogo2} className="" width="205" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Android</p>  
                </div>             
              </div> 
            </div> 
          </section> 

          <section id="construction" name="construction" className="mb-24"> 
            <span id="construction-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Construction
              <CopyToClipboard text={'http://localhost:8000/design/logo#overview-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='compliance' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='overview' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>               
            </Heading>  
            <p className="mb-4 text-greyStatus-600 tracking-wider">Our logo is based on simple on the letter “A” for Astro. It is carefully constructed to maintain ownable characteristics while allowing for perfect legibility at any size on any application. The dynamic space around the A is measured and kept in proportion by using a single, square block.</p>  
            <div className="py-12 px-20 bg-placeholder-300 flex flex-wrap items-center justify-center">
              <img src={constructionLogo1} className="" width="322" />
            </div> 
          </section>  

          <section id="usage" name="usage" className="mb-24"> 
            <span id="usage-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
              <CopyToClipboard text={'http://localhost:8000/design/logo#overview-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='compliance' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='overview' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>               
            </Heading>  
            <p className="mb-4 text-greyStatus-600 tracking-wider">Our logo is based on simple on the letter “A” for Astro. It is carefully constructed to maintain ownable characteristics while allowing for perfect legibility at any size on any application. The dynamic space around the A is measured and kept in proportion by using a single, square block.</p>  
            <Tabs>
              <TabList>
                <Tab>Full Lock Up</Tab>
                <Tab>Icon</Tab>
                <Tab>Wordmark</Tab>
                <Tab>App</Tab> 
              </TabList>
          
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex justify-center">
                  <img src={usageLogo1} className="" width="375px" />
                </div> 
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex justify-center">
                  <img src={usageLogo2} className="" width="375px" />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex justify-center">
                  <img src={usageLogo3} className="" width="768" />
                </div>
              </TabPanel> 
              <TabPanel>
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex justify-center">
                  <img src={usageLogo4} className="" width="375px" />
                </div>
              </TabPanel>
            </Tabs>
          </section> 

          <section id="clearspace" name="clearspace" className="mb-24"> 
            <span id="clearspace-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Clearspace
              <CopyToClipboard text={'http://localhost:8000/design/logo#overview-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='compliance' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='overview' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>               
            </Heading>  
            <p className="mb-4 text-greyStatus-600 tracking-wider">Clearspace is the minimum amount of space to be placed around the logo. A space in which no other objects, text or graphics should infringe. Each logo type has unique clearspace rules.</p>  
            <p className="mb-4 text-greyStatus-600 tracking-wider">The Full Lock Up clearspace is equal to the height of the Astro wordmark.</p>  
            <p className="mb-4 text-greyStatus-600 tracking-wider">The Icon clearspace is equal to the height and width of the square that forms the bottom of the A.</p>  
            <p className="mb-4 text-greyStatus-600 tracking-wider">The Wordmark clearspace is equal to the height of the Astro wordmark. That height is also the length used to determine the border distance on all sides of the wordmark.</p>  
            <div className="flex flex-wrap -mx-4 mb-12">
              <div className="px-4 mb-8"> 
                <div className="as-grid-11 bg-black p-10 min-h-330 flex align-center">
                  <img src={clearspaceLogo1} className="m-auto" width="205" />
                </div>
                <p className="text-sm text-grey-400 py-2">Full Lock-Up</p>
              </div>
              <div className="px-4 mb-8">
                <div className="as-grid-11 bg-black p-10 min-h-330 flex align-center">
                  <img src={clearspaceLogo2} className="m-auto" width="205" />
                </div>
                <p className="text-sm text-grey-400 py-2">Icon</p>  
              </div>
              <div className="px-4 mb-8">
                <div className="as-grid-11 bg-black p-10 min-h-330 flex align-center">
                  <img src={clearspaceLogo3} className="m-auto" width="365" />
                </div>
                <p className="text-sm text-grey-400 py-2">Wordmark</p> 
              </div>           
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

            <p className="mb-4 text-greyStatus-600 tracking-wider">Below is a list of guidelines for typography to adhere to.</p>
            <div className="flex flex-wrap -mx-4 mb-12">  
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img src={guidanceLogo1} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not apply any effects to the logo.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img src={guidanceLogo2} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not put logo over any unapproved background colors.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidanceLogo3} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use any unapproved fill colors.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidanceLogo4} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not skew or stretch the logo.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidanceLogo5} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not crop the logo.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidanceLogo6} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use the logo over complex imagery.</p>
              </div>
            </div> 
          </section>

        </main>
      </div>
    </Layout>
  );
}

export default DesignLogoPage;
