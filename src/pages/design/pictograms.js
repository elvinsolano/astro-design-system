import React, { Component } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {Link} from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo";  
import Heading from '../../components/atoms/heading';
import Download from "../../components/download";
import Copy from "../../components/copy";

import typesSystem1 from "../../assets/design/pictograms/types/system/01 Voice.png";
import typesSystem2 from "../../assets/design/pictograms/types/system/02 History.png";
import typesSystem3 from "../../assets/design/pictograms/types/system/03 Keyboard.png";
import typesSystem4 from "../../assets/design/pictograms/types/system/04 Menu.png";
import typesSystem5 from "../../assets/design/pictograms/types/system/05 No result.png";
import typesSystem6 from "../../assets/design/pictograms/types/system/06 Empty.png";

import typesAnimated1 from "../../assets/design/pictograms/types/animated/01 Activities_@2X.gif";
import typesAnimated2 from "../../assets/design/pictograms/types/animated/02 Nudges_@2X.gif";
import typesAnimated3 from "../../assets/design/pictograms/types/animated/03 Discover_@2X.gif";
import typesAnimated4 from "../../assets/design/pictograms/types/animated/04 Loading Profile_@2X.gif";
import typesAnimated5 from "../../assets/design/pictograms/types/animated/05 Checked Profile_@2X.gif";

import usageSystem1 from "../../assets/design/pictograms/usage/system/01 System.png";
import usageSystem2 from "../../assets/design/pictograms/usage/system/02 System.png";
import usageAnimated1 from "../../assets/design/pictograms/usage/animated/01 Animated.png";
import usageAnimated2 from "../../assets/design/pictograms/usage/animated/02 Animated.png";

import guidance1 from "../../assets/design/pictograms/guidance/01 Guidance.png";
import guidance2 from "../../assets/design/pictograms/guidance/02 Guidance.png";
import guidance3 from "../../assets/design/pictograms/guidance/03 Guidance.png";
import guidance4 from "../../assets/design/pictograms/guidance/04 Guidance.png";
import guidance5 from "../../assets/design/pictograms/guidance/05 Guidance.png";
import guidance6 from "../../assets/design/pictograms/guidance/06 Guidance.png"; 

class DesignPictogramsPage extends Component {   
  render() {  
    return (
      <Layout>
        <SEO
          title="Astro"
          keywords={[``]}
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
              <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100">Pictograms</Link>
                <Scrollspy items={ ['types', 'usage', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="design/pictograms#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Types</Link></li>
                  <li><Link to="design/pictograms#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100">Usage</Link></li>
                  <li><Link to="design/pictograms#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li> 
                </Scrollspy>                 
              </li>
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
              <Heading level="1" className="as-h1 as-type-medium">Pictograms</Heading>
              <Download />
            </div> 
            <p className="mb-16 text-greyStatus-600 tracking-wider">Pictograms are visual symbols used to represent objects or to help simplify and communicate complex ideas. The variations contained within the design system show how you can apply them to Astro.</p>
            <section id="types" name="types" className="as-section">
              <span id="types-anchor" className="page-anchor"></span>
              <Heading level="2" className="as-h2 as-type-medium mb-12">Types
                <Copy id="types" />                 
              </Heading> 

              <div className="mb-16">
                <span id="system-pictograms-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-1">System Pictograms
                  <Copy id="system-pictograms" />                  
                </Heading> 
                <p className="mb-3 text-greyStatus-600 tracking-wider">System pictograms help tell our story by visualizing key concepts and information in an approachable and human way. Used in a supportive role, pictograms help emphasize and navigate important information to make concepts easy to understand.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-8 relative mb-16"><span className="list-circle">1</span><img data-src={typesSystem1} className="lazyload inline-block" width="96" height="84" alt="Pictograms Types System Pictograms 1" /> </li> 
                  <li className="as-grid-8 relative mb-16"><span className="list-circle">2</span><img data-src={typesSystem2} className="lazyload inline-block" width="53" height="99" alt="Pictograms Types System Pictograms 2" /> </li> 
                  <li className="as-grid-8 relative mb-16"><span className="list-circle">3</span><img data-src={typesSystem3} className="lazyload inline-block" width="137" height="77" alt="Pictograms Types System Pictograms 3" /> </li> 
                  <li className="as-grid-8 relative mb-16"><span className="list-circle">4</span><img data-src={typesSystem4} className="lazyload inline-block" width="225" height="68" alt="Pictograms Types System Pictograms 4" /> </li> 
                  <li className="as-grid-8 relative"><span className="list-circle">5</span><img data-src={typesSystem5} className="lazyload inline-block" width="133" height="149" alt="Pictograms Types System Pictograms 5" /> </li> 
                  <li className="as-grid-8 relative"><span className="list-circle">6</span><img data-src={typesSystem6} className="lazyload inline-block" width="149" height="201" alt="Pictograms Types System Pictograms 6" /> </li> 
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Voice</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">2. History</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">3. Keyboard</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">4. Menu</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">5. No Results</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">6. Empty Nudges</p>   
              </div> 

              <div className="mb-16">
                <span id="animated-pictograms-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-1">Animated Pictograms
                  <Copy id="animated-pictograms" />                
                </Heading> 
                <p className="mb-3 text-greyStatus-600 tracking-wider">Animated pictograms can enable a pictogram to perform in a way that adds polish and delight. They can use simple or complex motion based on the level of emphasis preferred.</p>
                
                <div className="flex flex-wrap -mx-4">  
                  <div className="w-grid px-4 mb-8"> 
                    <div className="bg-placeholder-400 as-picto flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesAnimated1} className="lazyload mb-3" width="290" alt="Pictograms Guidance 1" />
                    </div> 
                    <p className="text-sm mb-3 text-greyStatus-600">Activities</p>
                  </div>
                  <div className="w-grid px-4 mb-8"> 
                    <div className="bg-placeholder-400 as-picto flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesAnimated2} className="lazyload mb-3" width="290" alt="Pictograms Guidance 2" />
                    </div>
                    <p className="text-sm mb-3 text-greyStatus-600">Nudges</p>
                  </div>
                  <div className="w-grid px-4 mb-8"> 
                    <div className="bg-placeholder-400 as-picto flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesAnimated3} className="lazyload mb-3" width="290" alt="Pictograms Guidance 3" />
                    </div>
                    <p className="text-sm mb-3 text-greyStatus-600">Discover</p>
                  </div>
                  <div className="w-grid px-4 mb-8"> 
                    <div className="bg-placeholder-400 as-picto flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesAnimated4} className="lazyload mb-3" width="290" alt="Pictograms Guidance 4" />
                    </div>                  
                    <p className="text-sm mb-3 text-greyStatus-600">Loading Profile</p>
                  </div>
                  <div className="w-grid px-4 mb-8"> 
                    <div className="bg-placeholder-400 as-picto flex flex-wrap items-center justify-center mb-3">
                      <img data-src={typesAnimated5} className="lazyload mb-3" width="290" alt="Pictograms Guidance 5" />
                    </div>
                    <p className="text-sm mb-3 text-greyStatus-600">Check Mark</p>
                  </div> 
                </div>  
              </div>  
            </section>

            <section id="usage" name="usage" className="as-section"> 
              <span id="usage-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
                <Copy id="usage" />                      
              </Heading>  
              <p className="mb-4 text-greyStatus-600 tracking-wider">Logo usage is based on applying the specific logo variations based on device type, presentation surface and communications objective</p>  
              <Tabs>
                <TabList>
                  <Tab>System</Tab> 
                  <Tab>Animated</Tab> 
                </TabList>
            
                <TabPanel>
                  <div className="mb-16 py-16 px-20 bg-placeholder-300 flex justify-center">
                    <img data-src={usageSystem1} className="lazyload mr-10" width="375px" alt="Logo Usage Full Lock Up" />
                    <img data-src={usageSystem2} className="lazyload" width="375px" alt="Logo Usage Full Lock Up" />
                  </div> 
                </TabPanel> 
                <TabPanel>
                  <div className="mb-16 py-16 px-20 bg-placeholder-300 flex justify-center">
                    <img data-src={usageAnimated1} className="lazyload mr-10" width="375px" alt="Logo Usage Full Lock Up" />
                    <img data-src={usageAnimated2} className="lazyload" width="375px" alt="Logo Usage Full Lock Up" />
                  </div> 
                </TabPanel> 
              </Tabs>
            </section> 

            <section id="guidance" name="guidance" className="as-section mb-48">
              <span id="guidance-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
                <Copy id="guidance" />         
              </Heading> 

              <p className="mb-4 text-greyStatus-600 tracking-wider">Below is a list of guidelines for pictograms to adhere to.</p>
              <div className="flex flex-wrap -mx-5">   

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Typography Guidance 1" />           
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use unapproved colors.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Typography Guidance 1" />           
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use soft drop shadows.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance3} className="lazyload mb-3" width="290" alt="Typography Guidance 1" />           
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use gradients.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance4} className="lazyload mb-3" width="290" alt="Typography Guidance 1" />           
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use loading profile as a real loader. Only animation.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance5} className="lazyload mb-3" width="290" alt="Typography Guidance 1" />           
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not loop any animations.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance6} className="lazyload mb-3" width="290" alt="Typography Guidance 1" />           
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not make too small.</p>
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

export default DesignPictogramsPage;
