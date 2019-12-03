import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy'; 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import {Link} from 'gatsby';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import dogIllustration from "../../images/dog-illustration.svg";
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading';

import 'react-accessible-accordion/dist/fancy-example.css';

import typesCardIncoming1 from "../../assets/design/motion/types and details/Card Incoming/CARD_IN.gif";
import typesCardOutgoing1 from "../../assets/design/motion/types and details/Card Outgoing/CARD_OUT_1.gif";
import typesCardOutgoing2 from "../../assets/design/motion/types and details/Card Outgoing/CARD_OUT_2.gif";
import typesConversation1 from "../../assets/design/motion/types and details/Conversations/HISTORY.gif";
import typesMenu1 from "../../assets/design/motion/types and details/Menu/Menu_Open.gif"; 
import typesMenu2 from "../../assets/design/motion/types and details/Menu/Menu_Close.gif"; 
import typesKeyboard1 from "../../assets/design/motion/types and details/Keyboard/Keyboard_Open.gif";
import typesKeyboard2 from "../../assets/design/motion/types and details/Keyboard/Keyboard_Close.gif";
import typesOverlays1 from "../../assets/design/motion/types and details/Overlays/Overlay_Open.gif";
import typesOverlays2 from "../../assets/design/motion/types and details/Overlays/Overlay_Close.gif";
import typesOverlays3 from "../../assets/design/motion/types and details/Overlays/Overlay_Scrolling.gif";
import typesPressStates1 from "../../assets/design/motion/types and details/Press States/PRESS---Card.gif";
import typesPressStates2 from "../../assets/design/motion/types and details/Press States/PRESS---NextStep.gif";
import typesMicrophone1 from "../../assets/design/motion/types and details/Microphone/MicStates_Active.gif";
import typesMicrophone2 from "../../assets/design/motion/types and details/Microphone/MicStates_Listening.gif";
import typesMicrophone3 from "../../assets/design/motion/types and details/Microphone/MicStates_Speaking.gif";
import typesMicrophone4 from "../../assets/design/motion/types and details/Microphone/MicStates_Thinking.gif";
import typesMicrophone5 from "../../assets/design/motion/types and details/Microphone/MicStates_Delayed.gif";


function DesignMotionPage() { 

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
            <li><Link to="design/screen-anatomy" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
            <li><Link to="design/motion" className="block text-sm text-grey-400 w-full active font-semibold bg-grey-700">Motion</Link>
              <Scrollspy items={ ['types', 'usage', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="design/motion#types-details-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Types &amp; Details</Link></li>
                <li><Link to="design/motion#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Usage</Link></li>
                <li><Link to="design/motion#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li> 
              </Scrollspy>             
            </li>
            <li><Link to="design/sound" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sound</Link></li>
            <li><Link to="design/haptics" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Haptics</Link></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">
          <section id="motion" name="motion" className="as-section">
            <span id="motion-anchor" className="page-anchor"></span>

            <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
              <Heading level="1" className="as-h1 as-type-medium">Motion</Heading>
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

            <Heading level="2" className="as-h2 as-type-medium mb-3">Types &amp; Details
              <CopyToClipboard text={'http://localhost:8000/design/typography#primary-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='applying-type-scale' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='primary' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>              
            </Heading> 
            <p className="mb-16 text-greyStatus-600 tracking-wider">These animations help users register that a transition is taking place or provide additional delight to an experience.</p>

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Card Incoming
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Animation for when a card is appearing on screen.</p>
              
              <div className="flex"> 
                <img data-src={typesCardIncoming1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6">Animation timeframe (approx): 0.4 sec.</p>
                  <Accordion className="as-accordion">
                    <AccordionItem >
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          1. Voice Answer
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades into the screen from below (60px)</p>
                        </div>              
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          2. Card
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.02 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades into the screen from below (60px)</p>
                        </div>   
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          3. In Line Feedback
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.04 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades into the screen from below (60px)</p>
                        </div>   
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          4. Next Steps
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades into the screen from below (60px)</p>
                        </div>   
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>  

            </div> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Card Outgoing
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Animation for when a card is departing screen and Astro is taking in a response.</p>
              
              <div className="flex mb-12"> 
                <img data-src={typesCardOutgoing1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6"><span className="as-type-medium">Part 1</span> - Animation timeframe (approx): 0.4 sec.</p>
                  <Accordion className="as-accordion">
                    <AccordionItem >
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          1. Voice Answer
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item moves vertically and fades to 40%</p>
                        </div>              
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          2. Card
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.02 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item moves vertically and fades to 40%</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          3. In Line Feedback
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.04 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item moves vertically and fades to 40%</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          4. Next Steps
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.06 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item moves vertically and fades to 40% - 60px above the Voice Line</p>
                        </div>    
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>  

              <div className="flex"> 
                <img data-src={typesCardOutgoing2} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6"><span className="as-type-medium">Part 2</span> - Animation timeframe (approx): 0.4 sec.</p>
                  <Accordion className="as-accordion">
                    <AccordionItem >
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          1. Voice Answer
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item moves vertically out of the screen and fades to 0%</p>
                        </div>              
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          2. Card
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.02 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item moves vertically out of the screen and fades to 0%</p>
                        </div>   
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          3. In Line Feedback
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.04 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item moves vertically out of the screen and fades to 0%</p>
                        </div>   
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          4. Next Steps
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.06 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item moves vertically out of the screen and fades to 0%</p>
                        </div>   
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>    
            </div> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Conversation
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Scrolling down from the top of the screen will allow the user to access previous conversations, they will be revealed by a fade-in transition from 0% to 100% opacity</p>
              
              <div className="flex"> 
                <img data-src={typesConversation1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6">Animation timeframe (approx): 0.4 sec.</p> 
                </div>
              </div>   
            </div> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Menu
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Animation for when Astro menu is opening and closing.</p> 

              <div className="flex mb-12"> 
                <img data-src={typesMenu1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6"><span className="as-type-medium">Opening</span> - Animation timeframe (approx): 0.4 sec.</p>
                  <Accordion className="as-accordion">
                    <AccordionItem >
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          1. Microphone Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out of the screen.</p>
                        </div>              
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          2. Keyboard Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.02 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out of the screen.</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          3. Hamburger Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.04 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-400">Persistent</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Hamburger button transitions to a close button (X).</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          4. Background
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out of the screen.</p>
                        </div>    
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          5. Menu Buttons
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.06 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Items enters the screen by fade in from below the screen.</p>
                        </div>    
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>   

              <div className="flex"> 
                <img data-src={typesMenu2} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6"><span className="as-type-medium">Closing</span> - Animation timeframe (approx): 0.4 sec.</p>
                  <Accordion className="as-accordion">
                    <AccordionItem >
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          1. Microphone Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out of the screen.</p>
                        </div>              
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          2. Keyboard Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.02 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out of the screen.</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          3. Hamburger Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.04 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-400">Persistent</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Hamburger button transitions to a close button (X).</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          4. Background
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out of the screen.</p>
                        </div>    
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          5. Menu Buttons
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.06 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Items enters the screen by fade in from below the screen.</p>
                        </div>    
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>   
            </div> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Keyboard
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Animation for when Astro keyboard is opening and closing.</p> 

              <div className="flex mb-12"> 
                <img data-src={typesKeyboard1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6"><span className="as-type-medium">Opening</span> - Animation timeframe (approx): 0.4 sec.</p>
                  <Accordion className="as-accordion">
                    <AccordionItem >
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          1. Microphone Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out of the screen.</p>
                        </div>              
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          2. Keyboard Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out of the screen.</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          3. Hamburger Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.04 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-400">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">From center of icon button placement, icon will scale into full size.</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          3. Hamburger Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out of the screen.</p>
                        </div>  
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                       <AccordionItemButton className="as-accordion__button">
                          4. Keyboard
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.1 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item enters the screen from the bottom of the screen.</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          5. Input Field
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.1 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Items enters the screen by fade in.</p>
                        </div>   
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          6. Background
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades into of the screen.</p>
                        </div>   
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>   

              <div className="flex"> 
                <img data-src={typesKeyboard2} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6"><span className="as-type-medium">Closing</span> - Animation timeframe (approx): 0.6 sec.</p>
                  <Accordion className="as-accordion">
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          1. Microphone Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.5 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.1 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">(Active State) Mic button scale into full size.</p>
                        </div>              
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          2. Keyboard Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.1 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">From center of icon button placement, icon will scale into full size.</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          3. Hamburger Button
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0.1 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">From center of icon button placement, icon will scale into full size.</p>
                        </div>     
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          4. Background
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-100">Outgoing</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item exits the screen to the bottom of the screen.</p>
                        </div>    
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          5. Input Field
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out.</p>
                        </div>    
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="as-accordion__button">
                          6. Background
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex mb-6">
                          <div className="mr-10">
                            <p className="uppercase text-xs">Duration</p>
                            <p className="text-sm">0.3 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Easing</p>
                            <p className="text-sm">Ease Both</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Delay</p>
                            <p className="text-sm">0 sec</p>
                          </div>
                          <div className="mr-10">
                            <p className="uppercase text-xs">Action</p>
                            <p className="text-sm text-status-300">Incoming</p>
                          </div>
                        </div>  
                        <div className="">
                          <p className="uppercase text-xs">Behavior</p>
                          <p className="text-sm">Item fades out.</p>
                        </div>    
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>   
            </div> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Overlay
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Animation for when Astro overlays are opening, closing or scrolling.</p>
              
              <div className="flex mb-12"> 
                <img data-src={typesOverlays1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6"><span className="as-type-medium">Opening</span> - Animation timeframe (approx): 0.4 sec.</p> 
                </div>
              </div>   
              <div className="flex mb-12"> 
                <img data-src={typesOverlays2} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6"><span className="as-type-medium">Closing</span> - Animation timeframe (approx): 0.4 sec.</p> 
                </div>
              </div>   
              <div className="flex"> 
                <img data-src={typesOverlays3} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                <div className="as-accordion-container ml-10">
                  <p className="mb-6"><span className="as-type-medium">Scrolling</span> - Animation timeframe (approx): 0.4 sec.</p> 
                </div>
              </div>   
            </div> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Press States
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Animations for the different pressed states of buttons.</p>
              
              <div class="flex flex-wrap -mx-5">
                <div class="w-half px-5 mb-8">
                  <div class="h-355 mb-5 py-8 px-10 bg-placeholder-400 flex flex-wrap items-center justify-center">
                    <img data-src={typesPressStates1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" />
                  </div>
                  <p className=""><span className="as-type-medium">Card</span> - On press, the background color changes to #F2F2F2.</p> 
                </div>
                <div class="w-half px-5 mb-8">
                  <div class="h-355 mb-5 py-8 px-10 bg-placeholder-400 flex flex-wrap items-center justify-center">
                    <img data-src={typesPressStates2} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                  </div>
                  <p className=""><span className="as-type-medium">Closing</span> - On press, the background color changes to #575757.</p> 
                </div>
              </div>
            </div>  

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Mic States
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Animations for the different states of the microphone button.</p>
                
              <div className="flex flex-wrap -mx-4 mb-12">
                <div className="w-grid px-5 mb-5">
                  <div class="bg-placeholder-400 flex justify-center">
                    <img data-src={typesMicrophone1} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" /> 
                  </div>
                  <div className="flex mb-3"> 
                    <p className="mb-6"><span className="as-type-medium">Active</span></p>  
                  </div>
                </div>
                <div className="w-grid px-5 mb-5">
                  <div class="bg-placeholder-400 flex justify-center">               
                    <img data-src={typesMicrophone2} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" /> 
                  </div>
                  <div className="flex mb-3"> 
                    <p className="mb-6"><span className="as-type-medium">Listening</span></p> 
                  </div>
                </div>
                <div className="w-grid px-5 mb-5">
                  <div class="bg-placeholder-400 flex justify-center">
                    <img data-src={typesMicrophone3} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" /> 
                  </div>
                  <div className="flex mb-3"> 
                    <p className="mb-6"><span className="as-type-medium">Speaking</span></p> 
                  </div>
                </div>
                <div className="w-grid px-5 mb-5">
                  <div class="bg-placeholder-400 flex justify-center">
                    <img data-src={typesMicrophone4} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" /> 
                  </div>
                  <div className="flex mb-3"> 
                    <p className="mb-6"><span className="as-type-medium">Thinking</span></p> 
                  </div>
                </div>
                <div className="w-grid px-5 mb-5">
                  <div class="bg-placeholder-400 flex justify-center">
                    <img data-src={typesMicrophone5} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" />
                  </div>
                  <div className="flex mb-3"> 
                    <p className="mb-6"><span className="as-type-medium">Delay</span></p> 
                  </div>
                </div> 
              </div>
            </div>                       
            
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default DesignMotionPage;
