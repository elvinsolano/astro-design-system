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

import guidance1 from "../../assets/elements/dividers/guidance/01 Dividers Guidance.png";   
import guidance2 from "../../assets/elements/dividers/guidance/02 Dividers Guidance.png";   
import guidance3 from "../../assets/elements/dividers/guidance/03 Dividers Guidance.png"; 
 
class ElementsDividersPage extends Component {   
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
              <li><Link to="elements/buttons" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</Link></li>
              <li><Link to="elements/dividers" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</Link>
                <Scrollspy items={ ['types', 'usage', 'specs', 'guidance'] } offset={-80} className="block" currentClassName="is-current">  
                  <li><Link to="elements/dividers#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</Link></li>              
                  <li><Link to="elements/dividers#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</Link></li>
                  <li><Link to="elements/dividers#specs-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</Link></li>
                  <li><Link to="elements/dividers#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</Link></li>
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

            <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Dividers</Heading>
              <Download />
            </div> 

            <section id="types" name="types" className="as-section"> 
              <span id="types-anchor" className="page-anchor"></span> 
              <p className="mb-16 text-greyStatus-600 tracking-wider">Horizontal lines used to visually group or segment clusters of content to improve readability.</p> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Types
                <Copy id="types" />
              </Heading> 
              <p className="mb-12 text-greyStatus-600 tracking-wider">Different types of dividers are available depending on content use.</p>

              <div className="mb-16">
                <span id="types-light-dividers-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Light Dividers
                  <Copy id="types-light-dividers" />           
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Light dividers are used to divide different content lists and categories over white in cards and overlays.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">1</span><img data-src={typesLightDividers1} className="lazyload inline-block" width="295" height="1" alt="Dividers Types Light Dividers Small" /> </li>
                  <li className="as-grid-4 relative mb-12"><span className="list-circle">2</span><img data-src={typesLightDividers2} className="lazyload inline-block" width="295" height="1" alt="Dividers Types Light Dividers Large" /> </li>
                  <li className="as-grid-4 relative mr-12"><span className="list-circle">3</span><img data-src={typesLightDividers3} className="lazyload inline-block" width="295" height="1" alt="Dividers Types Light Dividers XL" /> </li>
                  <li className="as-grid-4 relative"><span className="list-circle">4</span><img data-src={typesLightDividers4} className="lazyload inline-block" width="295" height="1" alt="Dividers Types Light Dividers XXL" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Light Divider - Small.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Light Divider - Large.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">3. Light Divider - XL.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">4. Light Divider - XXL.</p>
              </div> 
              
              <div className="mb-16">
                <span id="types-dark-dividers-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Dark Dividers
                  <Copy id="types-dark-dividers" />                     
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Dark dividers are used to divide different content lists and categories over black in main canvas area.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesDarkDividers1} className="lazyload inline-block" width="295" height="1" alt="Dividers Types Dark Dividers Large" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Dark Divider - Large.</p> 
              </div> 
            </section> 

            <section id="usage" name="usage" className="as-section"> 
              <span id="usage-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
                <Copy id="usage" />           
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Dividers communicate that a new section or area is starting. They are typically placed throughout the UI. Here are examples of how they’re used within Astro.</p>
              <Tabs>
                <TabList>
                  <Tab>Light Dividers</Tab>
                  <Tab>Dark Dividers</Tab> 
                </TabList>
            
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageLightDividers1} className="lazyload mr-12" width="375px" alt="Dividers Usage Light Dividers 1" />
                    <img data-src={usageLightDividers2} className="lazyload " width="375px" alt="Dividers Usage Light Dividers 2" /> 
                  </div> 
                </TabPanel>
                <TabPanel>
                  <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                    <img data-src={usageDarkDividers1} className="lazyload " width="375px" alt="Dividers Usage Dark Dividers 1" /> 
                  </div>
                </TabPanel> 
              </Tabs>
            </section>

            <section id="specs" name="specs" className="as-section"> 
              <span id="specs-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Specs
                <Copy id="specs" />
              </Heading> 
              <p className="mb-12 text-greyStatus-600 tracking-wider">Details about measurements, stroke weight, bleed, color and alignment for dividers.</p> 
              
              <div className="mb-16">
                <span id="specs-light-dividers-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Light Dividers
                  <Copy id="specs-light-dividers" />
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Used to segment content within a card container. They can also be set to bleed or as a non bleed to segment content against the width of the phone screen.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mb-12"><span className="list-circle">1</span><img data-src={specsLightDividers1} className="lazyload inline-block" width="445" height="82" alt="Dividers Specs Light Dividers Small" /> </li>
                  <li className="as-grid-4 relative mb-12"><span className="list-circle">2</span><img data-src={specsLightDividers2} className="lazyload inline-block" width="485" height="82" alt="Dividers Specs Light Dividers Large" /> </li>
                  <li className="as-grid-4 relative mb-12"><span className="list-circle">3</span><img data-src={specsLightDividers3} className="lazyload inline-block" width="475" height="82" alt="Dividers Specs Light Dividers XL" /> </li>
                  <li className="as-grid-4 relative"><span className="list-circle">4</span><img data-src={specsLightDividers4} className="lazyload inline-block" width="469" height="82" alt="Dividers Specs Light Dividers XXL" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Light Divider - Small.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Light Divider - Large.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">3. Light Divider - XL.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">4. Light Divider - XXL.</p>
              </div> 
              
              <div className="mb-16">
                <span id="specs-dark-dividers-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Dark Dividers
                  <Copy id="specs-dark-dividers" />
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Uses a stronger stroke weight to create a more visually distinct divide between segments of content.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={specsDarkDividers1} className="lazyload inline-block" width="485" height="81" alt="Dividers Specs Dark Dividers Large" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Dark Divider - Large.</p> 
              </div> 
              
            </section>  

            <section id="guidance" name="guidance" className="as-section mb-48">
              <span id="guidance-anchor" className="page-anchor"></span>

              <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
                <Copy id="guidance" />
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of guidelines for dividers to adhere to.</p>
              <div className="flex flex-wrap -mx-5 mb-12">  
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Guidance 1" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use dividers on forms.</p>
                  </div>
                </div>

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Guidance 2" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use a dark divider on a card.</p>
                  </div>
                </div>

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance3} className="lazyload mb-3" width="290" alt="Guidance 1" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use a light divider on a black background.</p>
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

export default ElementsDividersPage;
