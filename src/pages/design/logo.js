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

import overviewLogo1 from "../../assets/design/logo/overview/Logo Overview.gif";

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
        title="Astro"
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
            <li><Link to="design/logo" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100">Logo</Link>
              <Scrollspy items={ ['types', 'construction', 'usage', 'clearspace', 'guidance'] } offset={-80} className="block" currentClassName="is-current">                
                <li><Link to="design/logo#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li>                
                <li><Link to="design/logo#construction-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Construction</Link></li>
                <li><Link to="design/logo#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Usage</Link></li>
                <li><Link to="design/logo#clearspace-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Clearspace</Link></li>
                <li><Link to="design/logo#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
              </Scrollspy>   
            </li>
            <li><Link to="design/color" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Color</Link></li>
            <li><Link to="design/typography" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Typography</Link></li>
            <li><Link to="design/icons" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Icons</Link></li>
            <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Pictograms</Link> </li>
            <li><Link to="design/screen-anatomy" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
            <li><Link to="design/motion" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Motion</Link></li>
            <li><Link to="design/sound" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sound</Link></li>
            <li><Link to="design/haptics" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Haptics</Link></li>
          </ul> 
        </nav>
      </aside>

      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">

          <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
            <Heading level="1" className="as-h1 as-type-medium">Logo</Heading>
            <Download />
          </div> 

          <section className="as-section"> 
            <p className="mb-16 text-greyStatus-600 tracking-wider">As the key image that visually anchors the user experience, the Astro logo is made of three rectangles that connect to form the "A" icon. The concept reflects Astro's core purpose to connect us and simplify the way we work. </p>
            <div className="mb-16 py-10 px-20 bg-placeholder-400 flex flex-wrap items-center justify-center">
              <img data-src={overviewLogo1} className="lazyload" width="414" alt="Logo Overview" />
            </div>
          </section>   

          <section id="types" name="types" className="as-section"> 
            <span id="types-anchor" className="page-anchor"></span> 

            <Heading level="2" className="as-h2 as-type-medium mb-3">Types
              <CopyToClipboard text={'https://astro-design-system.netlify.com/design/logo/#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading>   
            <p className="mb-12 text-greyStatus-600 tracking-wider">As the logo will be deployed across different screens and experiences, the design system provides approved logo variations to support flexibility and integration. </p>
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Full Lock Up
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Variations for presenting the Astro “A” and wordmark together.</p>
              <div className="flex flex-wrap -mx-4">
                <div className="px-4 mb-8"> 
                  <div className="bg-black p-16">
                    <img data-src={typesFullLockUpLogo1} className="lazyload" width="150" alt="Logo Types Full Lock Up Primary" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Primary</p>
                </div>
                <div className="px-4 mb-8"> 
                  <div className="bg-white p-16 border border-grey-200 border-solid">
                    <img data-src={typesFullLockUpLogo2} className="lazyload" width="150" alt="Logo Types Full Lock Up Secondary" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Secondary</p>  
                </div>
                <div className="px-4 mb-8">
                  <div className="bg-black p-16">
                    <img data-src={typesFullLockUpLogo3} className="lazyload" width="150" alt="Logo Types Full Lock Up Tertiary" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Tertiary</p> 
                </div>              
                <div className="px-4 ">
                  <div className="bg-white p-16 border border-grey-200 border-solid">
                    <img data-src={typesFullLockUpLogo4} className="lazyload" width="150" alt="Logo Types Full Lock Up Monotone Black" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Monotone Black</p> 
                </div>              
                <div className="px-4 ">
                  <div className="bg-black p-16">
                    <img data-src={typesFullLockUpLogo5} className="lazyload" width="150" alt="Logo Types Full Lock Up Monotone White" />
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
              <p className="mb-5 text-greyStatus-600 tracking-wider">Variations for presenting Astro "A" without wordmark.</p>
              <div className="flex flex-wrap -mx-4">
                <div className="px-4 mb-8"> 
                  <div className="bg-black p-16">
                    <img data-src={typesIconLogo1} className="lazyload" width="150" alt="Logo Types Icon Primary" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Primary</p>
                </div>
                <div className="px-4 mb-8"> 
                  <div className="bg-white p-16 border border-grey-200 border-solid">
                    <img data-src={typesIconLogo2} className="lazyload" width="150" alt="Logo Types Icon Secondary" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Secondary</p>  
                </div>
                <div className="px-4 mb-8">
                  <div className="bg-black p-16">
                    <img data-src={typesIconLogo3} className="lazyload" width="150" alt="Logo Types Icon Tertiary" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Tertiary</p> 
                </div>              
                <div className="px-4 ">
                  <div className="bg-white p-16 border border-grey-200 border-solid">
                    <img data-src={typesIconLogo4} className="lazyload" width="150" alt="Logo Types Icon Monotone Black" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Monotone Black</p> 
                </div>              
                <div className="px-4 ">
                  <div className="bg-black p-16 border border-grey-200 border-solid">
                    <img data-src={typesIconLogo5} className="lazyload" width="150" alt="Logo Types Icon Monotone White" />
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
              <p className="mb-5 text-greyStatus-600 tracking-wider">Variations for presenting "Astro" as a typographic treatment.</p>
              <div className="flex flex-wrap -mx-4">
                <div className="px-4"> 
                  <div className="bg-black p-16 as-grid-11 flex justify-center">
                    <img data-src={typesWordmarkLogo1} className="lazyload" width="268" alt="Logo Types Wordmark Primary" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Primary</p>
                </div>
                <div className="px-4"> 
                  <div className="bg-white p-16 as-grid-11 flex justify-center border border-grey-200 border-solid">
                    <img data-src={typesWordmarkLogo2} className="lazyload" width="268" alt="Logo Types Wordmark Secondary" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Secondary</p>  
                </div>           
              </div> 
            </div>

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Apps
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Approved designs for major smartphone platforms.</p>
              <div className="flex flex-wrap -mx-4">
                <div className="px-4"> 
                  <div className="bg-white">
                    <img data-src={typesAppLogo1} className="lazyload" width="205" alt="Logo Types App iOS" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">iOS</p>
                </div>
                <div className="px-4"> 
                  <div className="bg-white">
                    <img data-src={typesAppLogo2} className="lazyload" width="205" alt="Logo Types App Android" />
                  </div>
                  <p className="text-sm text-grey-400 py-2">Android</p>  
                </div>             
              </div> 
            </div> 
          </section> 

          <section id="construction" name="construction" className="as-section"> 
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
            <p className="mb-6 text-greyStatus-600 tracking-wider">Our logo is based on simplifying the letter “A” for Astro. It is carefully constructed to maintain ownable characteristics while allowing for perfect legibility at any size on any application. The dynamic space around the A is measured and kept in proportion by using a single, square block.</p>  
            <div className="mb-16 py-16 px-20 bg-placeholder-300 flex flex-wrap items-center justify-center">
              <img data-src={constructionLogo1} className="lazyload" width="322" alt="Logo Construction" />
            </div> 
          </section>  

          <section id="usage" name="usage" className="as-section"> 
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
            <p className="mb-4 text-greyStatus-600 tracking-wider">Logo usage is based on applying the specific logos variations based on device type, presentation surface and communications objective.</p>  
            <Tabs>
              <TabList>
                <Tab>Full Lock Up</Tab>
                <Tab>Icon</Tab>
                <Tab>Wordmark</Tab>
                <Tab>Apps</Tab> 
              </TabList>
          
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex justify-center">
                  <img data-src={usageLogo1} className="lazyload" width="375px" alt="Logo Usage Full Lock Up" />
                </div> 
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex justify-center">
                  <img data-src={usageLogo2} className="lazyload" width="375px" alt="Logo Usage Icon" />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex justify-center">
                  <img data-src={usageLogo3} className="lazyload" width="768" alt="Logo Usage Wordmark" />
                </div>
              </TabPanel> 
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex justify-center">
                  <img data-src={usageLogo4} className="lazyload" width="375px" alt="Logo Usage App" />
                </div>
              </TabPanel>
            </Tabs>
          </section> 

          <section id="clearspace" name="clearspace" className="as-section"> 
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
            <div className="flex flex-wrap -mx-4 mb-12">
              <div className="px-4 mb-8"> 
                <div className="as-clearspace">
                  <div className="bg-black p-10 min-h-330 flex align-center">
                    <img data-src={clearspaceLogo1} className="lazyload m-auto" width="205" alt="Logo Clearspace Full Lock-Up" />
                  </div>
                  <p className="text-sm text-grey-400 py-2"><span className="as-type-medium">Full Lock Up</span> - The clearspace is equal to the height of the Astro wordmark.</p>
                </div>
              </div>
              <div className="px-4 mb-8">
                <div className="as-clearspace">
                  <div className="bg-black p-10 min-h-330 flex align-center">
                    <img data-src={clearspaceLogo2} className="lazyload m-auto" width="205" alt="Logo Clearspace Icon" />
                  </div>
                  <p className="text-sm text-grey-400 py-2"><span className="as-type-medium">Icon</span> - The clearspace is equal to the height and width of the square that forms the bottom of the A.</p>  
                </div> 
              </div>
              <div className="px-4 mb-8">
                <div className="as-clearspace">
                  <div className="bg-black p-10 min-h-330 flex align-center">
                    <img data-src={clearspaceLogo3} className="lazyload m-auto" width="365" alt="Logo Clearspace Wordmark" />
                  </div>
                  <p className="text-sm text-grey-400 py-2"><span className="as-type-medium">Wordmark</span> - The clearspace is equal to the height of the Astro wordmark. That height is also the length used to determine the border distance on all sides of the wordmark.</p> 
                </div>
              </div>           
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

            <p className="mb-4 text-greyStatus-600 tracking-wider">Below is a list of guidelines for logos to adhere to.</p>
            <div className="flex flex-wrap -mx-5 mb-12">  
              <div className="w-grid px-5 mb-5">
                <img data-src={guidanceLogo1} className="lazyload mb-3" width="290" alt="Logo Guidance 1" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not apply any effects to the logo.</p>
                </div>
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidanceLogo2} className="lazyload mb-3" width="290" alt="Logo Guidance 2" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not put the logo over any unapproved background colors.</p>
                </div>
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidanceLogo3} className="lazyload mb-3" width="290" alt="Logo Guidance 3" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use any unapproved fill colors.</p>
                </div>                 
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidanceLogo4} className="lazyload mb-3" width="290" alt="Logo Guidance 4" />                
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not skew or stretch the logo.</p>
                </div>    
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidanceLogo5} className="lazyload mb-3" width="290" alt="Logo Guidance 5" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not crop the logo.</p>
                </div>                     
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidanceLogo6} className="lazyload mb-3" width="290" alt="Logo Guidance 6" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use the logo over complex imagery.</p>
                </div>  
              </div>

            </div> 
          </section>

        </main>
      </div>
    </Layout>
  );
}

export default DesignLogoPage;
