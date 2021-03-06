import React, { Component } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {Link} from 'gatsby';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo";  
import Heading from '../../components/atoms/heading';
import Download from "../../components/download";
import Copy from "../../components/copy";

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
 
class DesignScreenAnatomyPage extends Component {   
  
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
              <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Pictograms</Link></li>
              <li><Link to="design/haptics" className="block text-sm text-grey-400 w-full active font-semibold bg-grey-700">Screen Anatomy</Link>
                <Scrollspy items={ ['types', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="design/sound#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types &amp; Details</Link></li>
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

            <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Screen Anatomy</Heading>
              <Download />
            </div>  

            <section id="types" name="types" className="as-section">
              <span id="types-anchor" className="page-anchor"></span>
              <p className="mb-16 text-greyStatus-600 tracking-wider">A breakdown of the components and spacing on screen and how they fit together to display content.</p>
              <Heading level="2" className="as-h2 as-type-medium mb-3">Types
                <Copy id="types" />    
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Standards for the placement and structuring of content on different screen areas.</p>
              
              <div className="mb-16">
                <span id="card-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Card
                  <Copy id="card" />            
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">How to display content within the conversation canvas.</p>
                <ol className="mb-5 flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mb-10 mr-10">
                    <img data-src={typesCard1} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Content Area Specs.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10">
                    <img data-src={typesCard2} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Content Area Sample.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10 mr-10">
                    <img data-src={typesCard3} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Text Area Specs.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10">
                    <img data-src={typesCard4} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Text Area Sample.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10 mr-10">
                    <img data-src={typesCard5} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Controls Specs.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10">
                    <img data-src={typesCard6} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Controls Sample.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10 mr-10">
                    <img data-src={typesCard7} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Combined Specs.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10">
                    <img data-src={typesCard8} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Combined Sample.</p>
                  </li>
                </ol>   
              </div>     
              
              <div className="mb-16">
                <span id="overlays-anchor" className="overlays-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Overlays
                  <Copy id="overlays" />              
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">How to display content within overlays.</p>
                <ol className="mb-5 flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative mb-10 mr-10">
                    <img data-src={typesOverlay3} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Header Area Specs.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10">
                    <img data-src={typesOverlay4} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Header Area Sample.</p>
                  </li>              
                  <li className="as-grid-4 relative mb-10 mr-10">
                    <img data-src={typesOverlay1} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Text Area Specs.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10">
                    <img data-src={typesOverlay2} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Text Area Sample.</p>
                  </li> 
                  <li className="as-grid-4 relative mb-10 mr-10">
                    <img data-src={typesOverlay7} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Small Header Specs.</p>
                  </li>
                  <li className="as-grid-4 relative mb-10">
                    <img data-src={typesOverlay8} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Small Header Sample.</p>
                  </li>                
                  <li className="as-grid-4 relative mb-10 mr-10">
                    <img data-src={typesOverlay5} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Combined with Max Header Specs</p>
                  </li>
                  <li className="as-grid-4 relative mb-10">
                    <img data-src={typesOverlay6} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Combined with Max Header Sample</p>
                  </li>
                  <li className="as-grid-4 relative mb-10 mr-10">
                    <img data-src={typesOverlay9} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Combined with Small Header Specs</p>
                  </li>
                  <li className="as-grid-4 relative mb-10">
                    <img data-src={typesOverlay10} className="lazyload inline-block mb-4" width="375" alt="Alerts System Validation" /> 
                    <p className="as-type-regular text-sm text-greyStatus-600">Combined with Small Header Sample</p>
                  </li>
                </ol>   
              </div>     
            </section>  

            <section id="guidance" name="guidance" className="as-section mb-48">
              <span id="guidance-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
                <Copy id="guidance" />   
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of guidelines for the screen anatomy to adhere to.</p>
              <div className="flex flex-wrap -mx-5">   

                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Typography Guidance 1" />           
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not allow card to overlap the controls area.</p>
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
                    <p className="text-sm text-greyStatus-600 ml-3">Controls should never appear over an overlay.</p>
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
                    <p className="text-sm text-greyStatus-600 ml-3">Do not show an overlay without a header.</p>
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

export default DesignScreenAnatomyPage;
