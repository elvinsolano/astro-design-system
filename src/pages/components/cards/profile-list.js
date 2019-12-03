import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'gatsby'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'lazysizes';

import Layout from "../../../components/layout";
import SEO from "../../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../../components/atoms/heading';

import uiexamplesProfileListCard1 from "../../../assets/components/cards/Profile List Card/UI Examples/Profile List Card 01.png";  
import detailsProfileListCard1 from "../../../assets/components/cards/Profile List Card/Details/Profile List Card Detail.png";
import paddingProfileListCard1 from "../../../assets/components/cards/Profile List Card/Padding/Profile List Card Padding.png"; 

import guidance1 from "../../../assets/design/logo/guidance/01 Logo Guidance.png";
import guidance2 from "../../../assets/design/logo/guidance/02 Logo Guidance.png";
import guidance3 from "../../../assets/design/logo/guidance/03 Logo Guidance.png";
import guidance4 from "../../../assets/design/logo/guidance/04 Logo Guidance.png";
import guidance5 from "../../../assets/design/logo/guidance/05 Logo Guidance.png";
import guidance6 from "../../../assets/design/logo/guidance/06 Logo Guidance.png";

function ComponentsCardsProfileListPage() { 

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
            <li><div className="block text-white uppercase text-sm w-full font-semibold bg-grey-300">Cards</div></li> 
            <li><Link to="components/cards/single-item" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Single Item</Link></li>  
            <li><Link to="components/cards/single-item-grouping" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Single item with Grouping</Link></li>
            <li><Link to="components/cards/list" className="block text-sm text-grey-400 w-full hover:bg-grey-100">List</Link></li>
            <li><Link to="components/cards/grouped-lists" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Grouped Lists</Link></li>
            <li><Link to="components/cards/two-column" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Two Column</Link></li>
            <li><Link to="components/cards/mail" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Mail</Link></li>
            <li><Link to="components/cards/profile" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Profile</Link></li>
            <li><Link to="components/cards/information" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Information</Link></li>
            <li><Link to="components/cards/progress-bar" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Progress Bar</Link></li>
            <li><Link to="components/cards/highlighted-item-detail" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Highlighted Item &amp; Detail</Link></li>
            <li><Link to="components/cards/tasks" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Tasks</Link></li>
            <li><Link to="components/cards/circle-graph" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Circle Graph</Link></li>
            <li><Link to="components/cards/profile-list" className="block text-sm text-grey-400 w-full hover:bg-grey-100 bg-grey-700 font-semibold active">Profile List</Link>
              <Scrollspy items={ ['ui-examples', 'padding', 'details', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="components/cards/list#ui-examples-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="block text-sm text-grey-400 w-full bg-grey-200 font-semibold hover:bg-grey-100">UI examples</Link></li>
                <li><Link to="components/cards/list#padding-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="active-link">Padding</Link></li>
                <li><Link to="components/cards/list#details-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="active-link">Details</Link></li>
                <li><Link to="components/cards/list#guidance-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
              </Scrollspy>             
            </li>
            <li><Link to="components/cards/sliding-cards" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Swipe Cards</Link></li>
          </ul>
          <ul className="">
            <li><div className="block text-white uppercase text-sm w-full font-semibold bg-grey-300">Overlay</div></li>
            <li><Link to="components/overlays/single-item" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Single Item</Link></li> 
            <li><Link to="components/overlays/list" className="block text-sm text-grey-400 w-full hover:bg-grey-100">List</Link></li>
            <li><Link to="components/overlays/list-icon" className="block text-sm text-grey-400 w-full hover:bg-grey-100">List with Icons</Link></li>
            <li><Link to="components/overlays/grouped-lists" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Grouped Lists</Link></li>
            <li><Link to="components/overlays/two-columns" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Two Column</Link></li>  
            <li><Link to="components/overlays/progress-bar" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Progress Bar</Link></li>
            <li><Link to="components/overlays/highlighted-item-detail" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Highlighted Item &amp; Detail</Link></li>
            <li><Link to="components/overlays/tasks" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Tasks</Link></li> 
            <li><Link to="components/overlays/profile-list" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Profile List</Link></li> 
          </ul> 
          <ul className="">
            <li><div className="block text-white uppercase text-sm w-full bg-grey-300">Popovers</div></li>
            <li><Link to="components/popovers/external" className="block text-sm text-grey-400 w-full hover:bg-grey-100">External</Link></li>
            <li><Link to="components/popovers/general" className="block text-sm text-grey-400 w-full hover:bg-grey-100">General</Link></li> 
          </ul>                     
        </nav>
      </aside>

      
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Profile List</Heading>
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

          <section id="ui-examples" name="ui-examples" className="as-section"> 
            <span id="ui-examples-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">UI Examples
              <CopyToClipboard text={'http://localhost:8000/components/cards/single-item#ui-examples'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">The profile list card is a list that includes an image per row.</p> 
            <Tabs>
              <TabList>
                <Tab>01</Tab>  
              </TabList>
          
              <TabPanel>                  
                <div className="py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                  <img data-src={uiexamplesProfileListCard1} className="lazyload " width="335" alt="Cards Profile List UI Examples 1" />
                </div> 
              </TabPanel>  
            </Tabs>
          </section>   

          <section id="padding" name="padding" className="as-section"> 
            <span id="padding-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Padding
              <CopyToClipboard text={'http://localhost:8000/components/cards/single-item#padding'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">Padding refers to the space between UI elements. Padding should be used in combination with the responsive layout grid to place elements consistently across a design.</p>
            <div className="py-16 px-20 bg-placeholder-300 flex flex-wrap items-center justify-start">
              <img data-src={paddingProfileListCard1} className="lazyload " width="365" alt="Cards Profile List Padding" />
            </div> 
          </section>    

          <section id="details" name="details" className="as-section"> 
            <span id="details-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Details
            <CopyToClipboard text={'http://localhost:8000/components/cards/single-item#details'}>
              <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
              </svg> 
            </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">The card details refer to elements that make up the card surface areas.</p>
            <div className="py-16 px-20 bg-placeholder-300 flex flex-wrap items-center justify-start">
              <img data-src={detailsProfileListCard1} className="lazyload " width="594" alt="Cards Profile List UI Details" />
            </div> 
          </section>    

          <section id="guidance" name="guidance" className="as-section mb-16">
            <span id="guidance-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
              <CopyToClipboard text={'http://localhost:8000/design/typography#guidance-anchor'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 

            <p className="mb-4 text-greyStatus-600 tracking-wider">Below is a list of guidelines for logos to adhere to.</p>
            <div className="flex flex-wrap -mx-4 mb-12">  
              <div className="w-grid px-4 mb-8">
                <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Logo Guidance 1" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not apply any effects to the logo.</p>
                </div>
              </div>

              <div className="w-grid px-4 mb-8">
                <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Logo Guidance 2" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not put logo over any unapproved background colors.</p>
                </div>
              </div>

              <div className="w-grid px-4 mb-8">
                <img data-src={guidance3} className="lazyload mb-3" width="290" alt="Logo Guidance 3" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use any unapproved fill colors.</p>
                </div>                 
              </div>

              <div className="w-grid px-4 mb-8">
                <img data-src={guidance4} className="lazyload mb-3" width="290" alt="Logo Guidance 4" />                
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not skew or stretch the logo.</p>
                </div>    
              </div>

              <div className="w-grid px-4 mb-8">
                <img data-src={guidance5} className="lazyload mb-3" width="290" alt="Logo Guidance 5" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not crop the logo.</p>
                </div>                     
              </div>

              <div className="w-grid px-4 mb-8">
                <img data-src={guidance6} className="lazyload mb-3" width="290" alt="Logo Guidance 6" />
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

export default ComponentsCardsProfileListPage;
