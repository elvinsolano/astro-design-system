import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'gatsby'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from "../../../components/layout";
import SEO from "../../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../../components/atoms/heading';

import uiexamplesSingleItemOverlay1 from "../../../assets/components/overlays/Single Item Overlay/UI Examples/Single Item Overlay 01.png"; 
import detailsSingleItemOverlay1 from "../../../assets/components/overlays/Single Item Overlay/Details/Single Item Overlay Details.png";
import paddingSingleItemOverlay1 from "../../../assets/components/overlays/Single Item Overlay/Padding/Single Item Overlay Padding.png"; 

function ComponentsOverlaysSingleItemPage() { 

  return (
    <Layout>
      <SEO
        title="Design"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <aside className="fixed overflow-y-auto as-nav bg-white top-auto h-full border-r border-grey-500 border-solid">
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
            <li><Link to="components/cards/profile-list" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Profile List</Link></li>
            <li><Link to="components/cards/sliding-cards" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sliding Cards***</Link></li>
          </ul>
          <ul className="">
            <li><div className="block text-white uppercase text-sm w-full font-semibold bg-grey-300">Overlay</div></li>
            <li><Link to="components/overlays/single-item" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100">Single Item</Link>
              <Scrollspy items={ ['ui-examples', 'details', 'padding'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="components/overlays/single-item#ui-examples-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="block text-sm text-grey-400 w-full bg-grey-200 font-semibold hover:bg-grey-100">UI examples</Link></li>
                <li><Link to="components/overlays/single-item#details-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="active-link">Details</Link></li>
                <li><Link to="components/overlays/single-item#padding-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="active-link">Padding</Link></li>
              </Scrollspy>               
            </li>
            <li><Link to="components/overlays/single-item-grouping" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Single item with Grouping</Link></li>
            <li><Link to="components/overlays/list" className="block text-sm text-grey-400 w-full hover:bg-grey-100">List</Link></li>
            <li><Link to="components/overlays/grouped-lists" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Grouped Lists</Link></li>
            <li><Link to="components/overlays/two-columns" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Two Column</Link></li> 
            <li><Link to="components/overlays/profile" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Profile</Link></li>
            <li><Link to="components/overlays/information" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Information</Link></li>
            <li><Link to="components/overlays/progress-bar" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Progress Bar</Link></li>
            <li><Link to="components/overlays/highlighted-item-detail" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Highlighted Item &amp; Detail</Link></li>
            <li><Link to="components/overlays/tasks" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Tasks</Link></li> 
            <li><Link to="components/overlays/profile-list" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Profile List</Link></li> 
          </ul> 
          <ul className="">
            <li><div className="block text-white uppercase text-sm w-full bg-grey-300">Popovers</div></li>
            <li><Link to="components/popovers/single-item" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Single Item</Link></li>
            <li><Link to="components/popovers/single-item-grouping" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Single item with Grouping</Link></li> 
          </ul>                    
        </nav>
      </aside>

      
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Single Item</Heading>
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

          <section id="ui-examples" name="ui-examples" className="mb-24"> 
            <span id="ui-examples-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">UI Examples
              <CopyToClipboard text={'http://localhost:8000/components/overlays/single-item#ui-examples'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">The overlay for a single item card displays all the possible content that is not contained in the card, which can include text, data, and links.</p>
            <Tabs>
              <TabList>
                <Tab>01</Tab> 
              </TabList>
          
              <TabPanel>                  
                <div className="mb-12 py-12 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                  <img src={uiexamplesSingleItemOverlay1} className="" width="335" />
                </div> 
              </TabPanel> 
            </Tabs>
          </section>   

          <section id="details" name="details" className="mb-24"> 
            <span id="details-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Details
            <CopyToClipboard text={'http://localhost:8000/components/overlays/single-item#details'}>
              <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
              </svg> 
            </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">The card details refer to elements that make up the card surface areas.</p>
            <div className="py-12 px-20 bg-placeholder-300 flex flex-wrap items-center justify-start">
              <img src={detailsSingleItemOverlay1} className="" width="688" />
            </div> 
          </section>             

          <section id="padding" name="padding" className="mb-24"> 
            <span id="padding-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Padding
              <CopyToClipboard text={'http://localhost:8000/components/overlays/single-item#padding'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">Padding refers to the space between UI elements. Padding should be used in combination with the responsive layout grid to place elements consistently across a design.</p>
            <div className="py-12 px-20 bg-placeholder-300 flex flex-wrap items-center justify-start">
              <img src={paddingSingleItemOverlay1} className="" width="395" />
            </div> 
          </section>             
        </main>
      </div>
    </Layout>
  );
}

export default ComponentsOverlaysSingleItemPage;
 