import React, { Component } from "react"; 
import Scrollspy from 'react-scrollspy';   
import {Link} from 'gatsby'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'lazysizes';

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";  
import Heading from '../../../components/atoms/heading';
import Download from "../../../components/download";
import Copy from "../../../components/copy";

import uiexamplesProfileCard1 from "../../../assets/components/cards/Profile Card/UI Examples/Profile Card 01.png"; 
import detailsProfileCard1 from "../../../assets/components/cards/Profile Card/Details/Profile Card Detail.png";
import paddingProfileCard1 from "../../../assets/components/cards/Profile Card/Padding/Profile Card Padding.png"; 

import guidance1 from "../../../assets/components/cards/Profile Card/Guidance/01 Guidance.png";
import guidance2 from "../../../assets/components/cards/Profile Card/Guidance/02 Guidance.png";
import guidance3 from "../../../assets/components/cards/Profile Card/Guidance/03 Guidance.png"; 
import guidance4 from "../../../assets/components/cards/Profile Card/Guidance/04 Guidance.png"; 
import guidance5 from "../../../assets/components/cards/Profile Card/Guidance/05 Guidance.png";   

class ComponentsCardsProfilePage extends Component {   
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
              <li><div className="block text-white uppercase text-sm w-full font-semibold bg-grey-300">Cards</div></li> 
              <li><Link to="components/cards/single-item" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Single Item</Link></li>  
              <li><Link to="components/cards/single-item-grouping" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Single item with Grouping</Link></li>
              <li><Link to="components/cards/list" className="block text-sm text-grey-400 w-full hover:bg-grey-100">List</Link></li>
              <li><Link to="components/cards/grouped-lists" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Grouped Lists</Link></li>
              <li><Link to="components/cards/two-column" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Two Column</Link></li>
              <li><Link to="components/cards/mail" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Mail</Link></li>
              <li><Link to="components/cards/profile" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100">Profile</Link>
                <Scrollspy items={ ['ui-examples', 'padding', 'details', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="components/cards/list#ui-examples-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="block text-sm text-grey-400 w-full bg-grey-200 font-semibold hover:bg-grey-100">UI Examples</Link></li>
                  <li><Link to="components/cards/list#padding-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="active-link">Padding</Link></li>
                  <li><Link to="components/cards/list#details-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="active-link">Details</Link></li>
                  <li><Link to="components/cards/list#guidance-anchor" className="block text-sm text-grey-400 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
                </Scrollspy>             
              </li>
              <li><Link to="components/cards/information" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Information</Link></li>
              <li><Link to="components/cards/progress-bar" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Progress Bar</Link></li>
              <li><Link to="components/cards/highlighted-item-detail" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Highlighted Item &amp; Detail</Link></li>
              <li><Link to="components/cards/tasks" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Tasks</Link></li>
              <li><Link to="components/cards/circle-graph" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Circle Graph</Link></li>
              <li><Link to="components/cards/profile-list" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Profile List</Link></li>
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

            <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Profile Card</Heading>
              <Download />
            </div> 

            <section id="ui-examples" name="ui-examples" className="as-section"> 
              <p className="mb-4 text-greyStatus-600 tracking-wider">The profile card is used to display a subject’s information. It consists of an image with additional data points.</p>
              <p className="mb-2 text-greyStatus-600 tracking-wider as-type-medium text-sm">Use this card if:</p>
              <ul className="mb-16 py-5 px-20 bg-placeholder-200 flex flex-col items-start justify-start">
                <li className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                    </svg>  
                  </div>
                  <p className="text-greyStatus-600 ml-3">You are looking for a visual way to display a small amount of information about 1 topic (e.g., 2 to 3 data points).</p>
                </li>
                <li className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                    </svg>  
                  </div>
                  <p className="text-greyStatus-600 ml-3">You are only displaying text and an image.</p>
                </li>  
                <li className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                    </svg>  
                  </div>
                  <p className="text-greyStatus-600 ml-3">Your information can be displayed as a <Link to="components/cards/sliding-cards" className="inline text-status-100 hover:text-red-900 underline">Swipe Card</Link>.</p>
                </li>  
              </ul>  
              <span id="ui-examples-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">UI Examples
                <Copy id="ui-examples" />
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">How a profile card is expressed as part of the UI.</p> 
              <Tabs>
                <TabList>
                  <Tab>01</Tab> 
                </TabList>
            
                <TabPanel>                  
                  <div className="py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-center">
                    <img data-src={uiexamplesProfileCard1} className="lazyload " width="335" alt="Cards Profile UI Examples" />
                  </div> 
                </TabPanel> 
              </Tabs>
            </section>   

            <section id="padding" name="padding" className="as-section"> 
              <span id="padding-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Padding
                <Copy id="padding" />
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Card padding refers to the space between UI elements. Padding should be used in combination with the responsive layout grid to place elements consistently across a design.</p>
              <div className="py-16 px-20 bg-placeholder-300 flex flex-wrap items-center justify-center">
                <img data-src={paddingProfileCard1} className="lazyload " width="345" alt="Cards Profile Padding" />
              </div> 
            </section>   

            <section id="details" name="details" className="as-section"> 
              <span id="details-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Details
                <Copy id="details" />
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Card details refer to elements that make up the card surface areas.</p>
              <div className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-center justify-center">
                <img data-src={detailsProfileCard1} className="lazyload " width="375" alt="Cards Profile Details" />
              </div> 
              <div className="mb-6">
                <p className="as-type-regular text-sm text-greyStatus-600">1. <span className="as-type-medium">Profile Image</span> </p>
                <ol className="ml-3">
                  <li className="text-sm">
                    <div className="flex">
                      <div className=" ml-3">
                        <p className="w-3 text-sm">- </p>
                      </div>
                      <p className="text-sm text-greyStatus-600">Should use <Link to="../design/icons" className="inline text-status-100 hover:text-red-900 underline">Avatar 100</Link> or <Link to="../design/icons" className="inline text-status-100 hover:text-red-900 underline">Initial 100</Link> if no avatar photo is available</p>
                    </div>              
                  </li> 
                </ol>  
              </div> 
              <div className="mb-6">
                <p className="as-type-regular text-sm text-greyStatus-600">2. <span className="as-type-medium">Profile Title</span></p>
                <ol className="ml-3"> 
                  <li className="text-sm">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="w-3 text-sm">- </p>
                      </div>
                      <p className="text-sm text-greyStatus-600">May wrap to however long the content is</p>
                    </div>              
                  </li>  
                </ol> 
              </div>            
              <div className="mb-6">
                <p className="as-type-regular text-sm text-greyStatus-600">3. <span className="as-type-medium">Profile Label</span></p>
                <ol className="ml-3"> 
                  <li className="text-sm">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="w-3 text-sm">- </p>
                      </div>
                      <p className="text-sm text-greyStatus-600">Try to keep to one line</p>
                    </div>              
                  </li>  
                </ol> 
              </div>            
              <div className="mb-6">
                <p className="as-type-regular text-sm text-greyStatus-600">4. <span className="as-type-medium">Profile Subtitle</span></p>
                <ol className="ml-3"> 
                  <li className="text-sm">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="w-3 text-sm">- </p>
                      </div>
                      <p className="text-sm text-greyStatus-600">Content may wrap. Dates should be written out in longform</p>
                    </div>              
                  </li>  
                </ol> 
              </div>            
            </section>                       

            <section id="guidance" name="guidance" className="as-section mb-16">
              <span id="guidance-anchor" className="page-anchor"></span>

              <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
                <Copy id="guidance" />
              </Heading> 

              <p className="mb-4 text-greyStatus-600 tracking-wider">Below is a list of guidelines for profile cards to adhere to.</p>
              <div className="flex flex-wrap -mx-4 mb-12">  
                <div className="w-grid px-4 mb-8">
                  <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Logo Guidance 1" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use any other image than <Link to="../design/icons" className="inline text-status-100 hover:text-red-900 underline">Avatar 100</Link> or <Link to="../design/icons" className="inline text-status-100 hover:text-red-900 underline">Initial 100</Link>. Image must be present.</p>
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
                    <p className="text-sm text-greyStatus-600 ml-3">Do not add any other element to profile card.</p>
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
                    <p className="text-sm text-greyStatus-600 ml-3">Do not change the structure of the profile card.</p>
                  </div>                 
                </div>

                <div className="w-grid px-4 mb-8">
                  <img data-src={guidance4} className="lazyload mb-3" width="290" alt="Logo Guidance 4" />                
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                      </svg>  
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do replace an avatar with an <Link to="../design/icons" className="inline text-status-100 hover:text-red-900 underline">initial image</Link> if the user has no available profile image.</p>
                  </div>    
                </div>

                <div className="w-grid px-4 mb-8">
                  <img data-src={guidance5} className="lazyload mb-3" width="290" alt="Logo Guidance 5" />
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                      </svg>  
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do wrap the profile subtitle content.</p>
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

export default ComponentsCardsProfilePage;
