import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy'; 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import {Link} from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import dogIllustration from "../../images/dog-illustration.svg";
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading';

import typesSystem1 from "../../assets/design/pictograms/types/system/01 Voice.png";
import typesSystem2 from "../../assets/design/pictograms/types/system/02 History.png";
import typesSystem3 from "../../assets/design/pictograms/types/system/03 Keyboard.png";
import typesSystem4 from "../../assets/design/pictograms/types/system/04 Menu.png";
import typesSystem5 from "../../assets/design/pictograms/types/system/05 No result.png";
import typesSystem6 from "../../assets/design/pictograms/types/system/06 Empty.png";

import typesAnimated1 from "../../assets/design/pictograms/types/animated/01 Activities.png";
import typesAnimated2 from "../../assets/design/pictograms/types/animated/02 Nudges.png";
import typesAnimated3 from "../../assets/design/pictograms/types/animated/03 Discover.gif";
import typesAnimated4 from "../../assets/design/pictograms/types/animated/04 Loading Profile.png";
import typesAnimated5 from "../../assets/design/pictograms/types/animated/05 Checked Profile.png";

import guidance1 from "../../assets/design/pictograms/guidance/01 Guidance.png";
import guidance2 from "../../assets/design/pictograms/guidance/02 Guidance.png";
import guidance3 from "../../assets/design/pictograms/guidance/03 Guidance.png";
import guidance4 from "../../assets/design/pictograms/guidance/04 Guidance.png";
import guidance5 from "../../assets/design/pictograms/guidance/05 Guidance.png";
import guidance6 from "../../assets/design/pictograms/guidance/06 Guidance.png";
import guidance7 from "../../assets/design/pictograms/guidance/07 Guidance.png";
import guidance8 from "../../assets/design/pictograms/guidance/08 Guidance.png";

function DesignPictogramsPage() { 

  return (
    <Layout>
      <SEO
        title="Design"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <aside className="fixed overflow-y-auto as-nav bg-white top-auto h-full border-r border-grey-500 border-solid">
        <nav>
          <ul className=""> 
            <li><Link to="design/logo" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Logo</Link></li>
            <li><Link to="design/color" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Color</Link></li>
            <li><Link to="design/typography" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Typography</Link></li>
            <li><Link to="design/icons" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Icons</Link></li>
            <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100">Pictograms</Link>
              <Scrollspy items={ ['types', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="design/pictograms#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Types</Link></li>
                <li><Link to="design/pictograms#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li> 
              </Scrollspy>                 
            </li>
            <li><Link to="design/screen-anatomy" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
            <li><Link to="design/motion" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Motion</Link></li>
            <li><Link to="design/sound" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sound</Link></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">
          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Pictograms</Heading>
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

            <Heading level="2" className="as-h2 as-type-medium mb-3">Types
              <CopyToClipboard text={'http://localhost:8000/design/pictograms#types-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='types' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
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

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">System Pictograms
                <CopyToClipboard text={'http://localhost:8000/design/pictograms#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">1</span><img src={typesSystem1} className="inline-block" width="96" height="84" /> </li> 
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">2</span><img src={typesSystem2} className="inline-block" width="53" height="99" /> </li> 
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">3</span><img src={typesSystem3} className="inline-block" width="137" height="77" /> </li> 
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">4</span><img src={typesSystem4} className="inline-block" width="225" height="68" /> </li> 
                <li className="as-grid-4 relative mr-12"><span className="list-circle">5</span><img src={typesSystem5} className="inline-block" width="133" height="149" /> </li> 
                <li className="as-grid-4 relative"><span className="list-circle">6</span><img src={typesSystem6} className="inline-block" width="149" height="201" /> </li> 
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">System pictograms help tell our story by visualizing key concepts and information in an approachable and human way. Used in a supportive role, pictograms help emphasize and navigate important information to make concepts easy to understand.</p>
            </div> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Animated Pictograms
                <CopyToClipboard text={'http://localhost:8000/design/pictograms#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">1</span><img src={typesAnimated1} className="inline-block" width="125" height="150" /> </li> 
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">2</span><img src={typesAnimated2} className="inline-block" width="143" height="149" /> </li> 
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">3</span><img src={typesAnimated3} className="inline-block" width="38" height="38" /> </li> 
                <li className="as-grid-4 relative mr-12"><span className="list-circle">4</span><img src={typesAnimated4} className="inline-block" width="150" height="9" /> </li> 
                <li className="as-grid-4 relative"><span className="list-circle">5</span><img src={typesAnimated5} className="inline-block" width="16" height="12" /> </li>  
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">Animated pictograms can enable a pictogram to perform in a way that adds polish and delight. They can use simple or complex motion based on the level of emphasis preferred.</p>
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

            <p className="mb-4 text-greyStatus-600 tracking-wider">Below is a list of guidelines for pictograms to adhere to.</p>
            <div className="flex flex-wrap -mx-4 mb-12">  
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img src={guidance1} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use unapproved colors.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img src={guidance2} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use soft drop shadows.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidance3} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use gradients.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidance4} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use too many layers or shadows.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidance5} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not distort logo.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidance6} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not make too small.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidance7} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use loading profile as a real loader. Only animation.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidance8} className="mb-3" width="290" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not loop any animations.</p>
              </div>
            </div> 
          </section>

        </main>
      </div>
    </Layout>
  );
}

export default DesignPictogramsPage;
