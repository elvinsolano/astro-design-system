import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {Link} from 'gatsby'; 
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading';
import Download from "../../components/download";
import Copy from "../../components/copy";
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
 

class Block extends Component {
  render() {  
    return (  
      <Accordion className="as-accordion" allowZeroExpanded={true}>
        <AccordionItem>
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
              <p className="text-sm">Item fades into the screen from below (60px).</p>
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
              <p className="text-sm">Item fades into the screen from below (60px).</p>
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
              <p className="text-sm">Item fades into the screen from below (60px).</p>
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
              <p className="text-sm">Item fades into the screen from below (60px).</p>
            </div>   
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    ); 
  }
}
 
class DesignMotionPage extends Component {  

  render() { 
    return (
      <Layout>
        <SEO
          title="Astro"
          keywords={['']}
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
                <Scrollspy items={ ['types', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="design/motion#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Types &amp; Details</Link></li>
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
            <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Motion</Heading>
              <Download />
            </div>
            <p className="mb-16 text-greyStatus-600 tracking-wider">Motion uses multiple images presented in rapid sequence in order to create the perception of real-time action.</p>
            
            <section id="types" name="types" className="as-section">             
              <span id="types-anchor" className="page-anchor"></span>      
              <Heading level="2" className="as-h2 as-type-medium mb-3">Types
                <Copy id="types" /> 
              </Heading> 
              <p className="mb-12 text-greyStatus-600 tracking-wider">These animations help users register that a transition is taking place or provide additional delight to an experience.</p>

              <div className="mb-16">
                <span id="card-incoming-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Card Incoming
                  <Copy id="card-incoming" />           
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Animation for when a card is appearing on screen.</p>
                
                <div className="flex"> 
                  <img data-src={typesCardIncoming1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                  <div className="as-accordion-container ml-10">
                    <p className="mb-6">Animation timeframe (approx): 0.4 sec.</p>
                    <Block />
                  </div>
                </div>
              </div> 

              <div className="mb-16">
                <span id="card-outgoing-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Card Outgoing
                  <Copy id="card-outgoing" />            
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Animation for when a card is departing screen and Astro is taking in a response.</p>
                
                <div className="flex mb-12"> 
                  <img data-src={typesCardOutgoing1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                  <div className="as-accordion-container ml-10">
                    <p className="mb-6"><span className="as-type-medium">Part 1</span> - Animation timeframe (approx): 0.4 sec.</p>
                    <Accordion className="as-accordion" allowZeroExpanded={true}>
                      <AccordionItem uuid={'voice-answer'}>
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
                            <p className="text-sm">Item moves vertically and fades to 40%.</p>
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
                            <p className="text-sm">Item moves vertically and fades to 40%.</p>
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
                            <p className="text-sm">Item moves vertically and fades to 40%.</p>
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
                            <p className="text-sm">Item moves vertically and fades to 40% - 60px above the Voice Line.</p>
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
                    <Accordion className="as-accordion" allowZeroExpanded={true}>
                      <AccordionItem uuid={'voice-answer'}>
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
                            <p className="text-sm">Item moves vertically out of the screen and fades to 0%.</p>
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
                            <p className="text-sm">Item moves vertically out of the screen and fades to 0%.</p>
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
                            <p className="text-sm">Item moves vertically out of the screen and fades to 0%.</p>
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
                            <p className="text-sm">Item moves vertically out of the screen and fades to 0%.</p>
                          </div>   
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>    
              </div> 

              <div className="mb-16">
                <span id="conversation-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Conversation
                  <Copy id="conversation" />          
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Scrolling down from the top of the screen will allow the user to access previous conversations; they will be revealed by a fade-in transition from 0% to 100% opacity.</p>
                
                <div className="flex"> 
                  <img data-src={typesConversation1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                  <div className="as-accordion-container ml-10">
                    <p className="mb-6">Animation timeframe (approx): 0.4 sec.</p> 
                  </div>
                </div>   
              </div> 

              <div className="mb-16">
                <span id="menu-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Menu
                  <Copy id="menu" />              
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Animation for when Astro menu is opening and closing.</p> 

                <div className="flex mb-12"> 
                  <img data-src={typesMenu1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                  <div className="as-accordion-container ml-10">
                    <p className="mb-6"><span className="as-type-medium">Opening</span> - Animation timeframe (approx): 0.4 sec.</p>
                    <Accordion className="as-accordion" allowZeroExpanded={true} >
                      <AccordionItem uuid={'microphone-button'}>
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
                    <Accordion className="as-accordion" allowZeroExpanded={true} >
                      <AccordionItem uuid={'microphone-button'}>
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
                <span id="keyboard-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Keyboard
                  <Copy id="keyboard" />              
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Animation for when Astro keyboard is opening and closing.</p> 

                <div className="flex mb-12"> 
                  <img data-src={typesKeyboard1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                  <div className="as-accordion-container ml-10">
                    <p className="mb-6"><span className="as-type-medium">Opening</span> - Animation timeframe (approx): 0.4 sec.</p>
                    <Accordion className="as-accordion" allowZeroExpanded={true} >
                      <AccordionItem uuid={'microphone-button'}>
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
                    <Accordion className="as-accordion" allowZeroExpanded={true}>
                      <AccordionItem uuid={'microphone-button'}>
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
                <span id="overlays-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Overlays
                  <Copy id="overlays" />              
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
                <span id="press-states-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Press States
                  <Copy id="press-states" />                 
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Animations for the different pressed states of buttons.</p>
                
                <div className="flex flex-wrap -mx-5">
                  <div className="w-half px-5 mb-8">
                    <div className="h-355 mb-5 py-8 px-10 bg-placeholder-400 flex flex-wrap items-center justify-center">
                      <img data-src={typesPressStates1} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" />
                    </div>
                    <p className=""><span className="as-type-medium">Card</span> - On press, the background color changes to #F2F2F2.</p> 
                  </div>
                  <div className="w-half px-5 mb-8">
                    <div className="h-355 mb-5 py-8 px-10 bg-placeholder-400 flex flex-wrap items-center justify-center">
                      <img data-src={typesPressStates2} className="lazyload " width="375px" alt="Loaders Usage Pull Down Loader 1" /> 
                    </div>
                    <p className=""><span className="as-type-medium">Closing</span> - On press, the background color changes to #575757.</p> 
                  </div>
                </div>
              </div>  

              <div className="mb-16">
                <span id="mic-states-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Mic States
                  <Copy id="mic-states" />             
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Animations for the different states of the microphone button.</p>
                  
                <div className="flex flex-wrap -mx-4 mb-12">
                  <div className="w-grid px-5 mb-5">
                    <div className="bg-placeholder-400 flex justify-center">
                      <img data-src={typesMicrophone1} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" /> 
                    </div>
                    <div className="flex mb-3"> 
                      <p className="mb-6"><span className="as-type-medium">Active</span></p>  
                    </div>
                  </div>
                  <div className="w-grid px-5 mb-5">
                    <div className="bg-placeholder-400 flex justify-center">               
                      <img data-src={typesMicrophone2} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" /> 
                    </div>
                    <div className="flex mb-3"> 
                      <p className="mb-6"><span className="as-type-medium">Listening</span></p> 
                    </div>
                  </div>
                  <div className="w-grid px-5 mb-5">
                    <div className="bg-placeholder-400 flex justify-center">
                      <img data-src={typesMicrophone3} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" /> 
                    </div>
                    <div className="flex mb-3"> 
                      <p className="mb-6"><span className="as-type-medium">Speaking</span></p> 
                    </div>
                  </div>
                  <div className="w-grid px-5 mb-5">
                    <div className="bg-placeholder-400 flex justify-center">
                      <img data-src={typesMicrophone4} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" /> 
                    </div>
                    <div className="flex mb-3"> 
                      <p className="mb-6"><span className="as-type-medium">Thinking</span></p> 
                    </div>
                  </div>
                  <div className="w-grid px-5 mb-5">
                    <div className="bg-placeholder-400 flex justify-center">
                      <img data-src={typesMicrophone5} className="lazyload " width="200px" alt="Loaders Usage Pull Down Loader 1" />
                    </div>
                    <div className="flex mb-3"> 
                      <p className="mb-6"><span className="as-type-medium">Delay</span></p> 
                    </div>
                  </div> 
                </div>
              </div>                       
              
            </section>

            <section id="guidance" name="guidance" className="as-section mb-48">
              <span id="guidance-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
                <Copy id="guidance" />      
              </Heading> 

              <p className="mb-4 text-greyStatus-600 tracking-wider">Below is a list of guidelines to adhere to.</p>
              <div className="flex flex-wrap -mx-5">   

                <div className="w-grid px-5 mb-5">  
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not loop animations. They should only play once.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">          
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not alter the speed of animations. They should be played at a fixed speed.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">      
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Only use an animation with the scenario it was designed for.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">          
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Only use the colors identified for the pressed states.</p>
                  </div>    
                </div>  
              </div> 
            </section>          
          </main>
        </div>
      </Layout>
    );
  }
}

export default DesignMotionPage;
