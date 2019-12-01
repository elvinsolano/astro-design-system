import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy'; 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip'
import {Link} from 'gatsby';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading';

import typesCard1 from "../../assets/design/anatomy/types/Card/01 Content Area Specs.png"; 
import typesCard2 from "../../assets/design/anatomy/types/Card/02 Content Area Sample.png"; 
import typesCard3 from "../../assets/design/anatomy/types/Card/03 Text Area Specs.png"; 
import typesCard4 from "../../assets/design/anatomy/types/Card/04 Text Area Sample.png"; 
import typesCard5 from "../../assets/design/anatomy/types/Card/05 Controls Area Specs.png"; 
import typesCard6 from "../../assets/design/anatomy/types/Card/06 Controls Area Sample.png"; 
import typesCard7 from "../../assets/design/anatomy/types/Card/07 Combined Areas.png"; 
import typesCard8 from "../../assets/design/anatomy/types/Card/08 Combined Areas Sample.png"; 
import typesOverlay1 from "../../assets/design/anatomy/types/Overlay/01 Text Area Specs.png"; 
import typesOverlay2 from "../../assets/design/anatomy/types/Overlay/02 Text Area Sample.png"; 
import typesOverlay3 from "../../assets/design/anatomy/types/Overlay/03 Header Area Specs.png"; 
import typesOverlay4 from "../../assets/design/anatomy/types/Overlay/04 Header Area Sample.png"; 
import typesOverlay5 from "../../assets/design/anatomy/types/Overlay/05 Combined Max Header Area Specs.png"; 
import typesOverlay6 from "../../assets/design/anatomy/types/Overlay/06 Combined Max Header Area Sample.png"; 
import typesOverlay7 from "../../assets/design/anatomy/types/Overlay/07 Small Header Area Specs.png"; 
import typesOverlay8 from "../../assets/design/anatomy/types/Overlay/08 Small Header Area Sample.png"; 
import typesOverlay9 from "../../assets/design/anatomy/types/Overlay/09 Combined Small Header Area Specs.png"; 
import typesOverlay10 from "../../assets/design/anatomy/types/Overlay/10 Combined Small Header Area Sample.png"; 
import guidance1 from "../../assets/design/anatomy/guidance/01 Guidance.png"; 
import guidance2 from "../../assets/design/anatomy/guidance/02 Guidance.png"; 
import guidance3 from "../../assets/design/anatomy/guidance/03 Guidance.png"; 

function DesignScreenAnatomyPage() { 

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
            <li><Link to="design/icons" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Icons</Link></li>
            <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Pictograms</Link></li>
            <li><Link to="design/haptics" className="block text-sm text-grey-400 w-full active font-semibold bg-grey-700">Screen Anatomy</Link>
              <Scrollspy items={ ['types', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="design/sound#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li>
                <li><Link to="design/sound#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
              </Scrollspy>  
            </li>
            <li><Link to="design/motion" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Motion</Link></li>
            <li><Link to="design/sound" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sound</Link></li>
            <li><Link to="design/haptics" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Haptics</Link></li>

          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">      
        <main className=" pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Screen Anatomy</Heading>
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

            <Heading level="2" className="as-h2 as-type-medium mb-3">Types &amp; Details
              <CopyToClipboard text={'http://localhost:8000/design/typography#primary-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='applying-type-scale' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='types' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>              
            </Heading>  
            <p className="mb-12 text-greyStatus-600 tracking-wider">Standards for the placement and structuring of content on different screen areas.</p>
            
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Card
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">How to display content within the conversation canvas.</p>
              <ol className="mb-5 flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative mb-10 mr-10">
                  <img data-src={typesCard1} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Content area specs</p>
                </li>
                <li className="as-grid-4 relative mb-10">
                  <img data-src={typesCard2} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Content area sample</p>
                </li>
                <li className="as-grid-4 relative mb-10 mr-10">
                  <img data-src={typesCard3} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Text area specs</p>
                </li>
                <li className="as-grid-4 relative mb-10">
                  <img data-src={typesCard4} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Text area sample</p>
                </li>
                <li className="as-grid-4 relative mb-10 mr-10">
                  <img data-src={typesCard5} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Controls area specs</p>
                </li>
                <li className="as-grid-4 relative mb-10">
                  <img data-src={typesCard6} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Controls area sample</p>
                </li>
                <li className="as-grid-4 relative mb-10 mr-10">
                  <img data-src={typesCard7} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Combined area specs</p>
                </li>
                <li className="as-grid-4 relative mb-10">
                  <img data-src={typesCard8} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Combined area sample</p>
                </li>
              </ol>   
            </div>     
            
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Overlay
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">How to display content within overlays.</p>
              <ol className="mb-5 flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative mb-10 mr-10">
                  <img data-src={typesOverlay1} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Text area specs</p>
                </li>
                <li className="as-grid-4 relative mb-10">
                  <img data-src={typesOverlay2} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Text area sample</p>
                </li>
                <li className="as-grid-4 relative mb-10 mr-10">
                  <img data-src={typesOverlay3} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Header area specs</p>
                </li>
                <li className="as-grid-4 relative mb-10">
                  <img data-src={typesOverlay4} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Header area sample</p>
                </li>
                <li className="as-grid-4 relative mb-10 mr-10">
                  <img data-src={typesOverlay5} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Combined max header area specs</p>
                </li>
                <li className="as-grid-4 relative mb-10">
                  <img data-src={typesOverlay6} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Combined max header area sample</p>
                </li>
                <li className="as-grid-4 relative mb-10 mr-10">
                  <img data-src={typesOverlay7} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Small header area specs</p>
                </li>
                <li className="as-grid-4 relative mb-10">
                  <img data-src={typesOverlay8} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Small header area sample</p>
                </li>
                <li className="as-grid-4 relative mb-10 mr-10">
                  <img data-src={typesOverlay9} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Combined small header area specs</p>
                </li>
                <li className="as-grid-4 relative mb-10">
                  <img data-src={typesOverlay10} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                  <p className="as-type-regular text-sm text-greyStatus-600">Combined small header area sample</p>
                </li>
              </ol>   
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
            <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of screen anatomy for sounds to adhere to.</p>
            <div className="flex flex-wrap -mx-5">   
              <div className="as-guidance px-5 mb-5">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Typography Guidance 1" />
                <p className="text-sm text-greyStatus-600">Do not allow card to overlap the controls area.</p>
              </div>
              <div className="as-guidance px-5 mb-5">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Typography Guidance 2" />
                <p className="text-sm text-greyStatus-600">Controls should never appear over an overlay.</p>
              </div>
              <div className="as-guidance px-5 mb-5">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img data-src={guidance3} className="lazyload mb-3" width="290" alt="Typography Guidance 3" />
                <p className="text-sm text-greyStatus-600">Do not show an Overlay without a Header.</p>
              </div> 
            </div> 
          </section>  
        </main>
      </div>
    </Layout>
  );
}

export default DesignScreenAnatomyPage;
