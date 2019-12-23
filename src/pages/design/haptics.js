import React, { Component } from "react"; 
import Scrollspy from 'react-scrollspy'; 
import Copy from "../../components/copy";
import {Link} from 'gatsby';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo";  
import Heading from '../../components/atoms/heading';
import Download from "../../components/download";

import typesLight1 from "../../assets/design/haptics/types/Light/Light.png";
import typesWarning1 from "../../assets/design/haptics/types/Warning/Warning.png";
import typesSuccess1 from "../../assets/design/haptics/types/Success/Success.png";
 
class DesignHapticsPage extends Component {  

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
              <li><Link to="design/screen-anatomy" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
              <li><Link to="design/motion" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Motion</Link></li>
              <li><Link to="design/sound" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sound</Link></li>
              <li><Link to="design/haptics" className="block text-sm text-grey-400 w-full active font-semibold bg-grey-700">Haptics</Link>
                <Scrollspy items={ ['types', 'usage', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="design/sound#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li>
                  <li><Link to="design/sound#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Usage</Link></li>     
                  <li><Link to="design/sound#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
                </Scrollspy>  
              </li>
            </ul> 
          </nav>
        </aside>
        <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">  
          <main className=" pl-16 pr-16 pt-16">

            <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Haptics</Heading>
              <Download />
            </div>  
            <p className="mb-16 text-greyStatus-600 tracking-wider">Haptics are sensory feedback that an interface delivers to the user. They often expand user engagement by stimulating the user's sense of pressure, touch or ability to detect motion or action.</p>
            <section id="types" name="types" className="as-section mb-16">
              <span id="types-anchor" className="page-anchor"></span>
              <Heading level="2" className="as-h2 as-type-medium mb-3">Types
                <Copy id="types" />               
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Haptic feedback can be used 1) to bring an event to the user’s attention, 2) to confirm a state is now active or 3) to enhance the experience of a selected state or task.</p>
              
              <div className="mb-16">
                <span id="success-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Success
                  <Copy id="success" />                 
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Indicates a task or action has been successfully completed.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative"><img data-src={typesSuccess1} className="lazyload inline-block" width="140" alt="Alerts System Validation" /> </li>
                </ol>   
              </div>  
              <div className="mb-16">
                <span id="warnings-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Warnings
                  <Copy id="warnings" />                
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Sensory notification that alerts the user about an event or state that could adversely affect the task or experience.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative"><img data-src={typesWarning1} className="lazyload inline-block" width="140" alt="Alerts System Validation" /> </li>
                </ol>   
              </div>  
              <div className="">
                <span id="light-anchor" className="page-anchor"></span>
                <Heading level="3" className="as-h3 as-type-medium mb-3">Light
                  <Copy id="light-anchor" />                 
                </Heading> 
                <p className="mb-5 text-greyStatus-600 tracking-wider">Metaphorically presents feedback of weight or level of intensity that complements the visual experience.</p>
                <ol className="py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                  <li className="as-grid-4 relative"><img data-src={typesLight1} className="lazyload inline-block" width="140" alt="Alerts System Validation" /> </li>
                </ol>   
              </div>  
            </section>

            <section id="usage" name="usage" className="as-section mb-16">
              <span id="usage-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
                <Copy id="usage" />           
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Use haptic feedback to add additional sensory information to a piece of information shared with a user. Here are examples of how they’re used within Astro.</p>
              <div className="">
                <table className="w-full">
                  <thead className="border border-grey-200">
                    <tr className="bg-grey-200">
                      <td className="p-4">Haptic</td>
                      <td className="p-4">Action</td>
                      <td className="p-4">State</td> 
                    </tr>
                  </thead>
                  <tbody className="border border-grey-105">        
                    <tr className="border border-b border-grey-105">
                      <td className="p-4 border-r border-grey-105">    
                        <div className="flex flex-wrap items-center justify-start">     
                          <p className="mr-4">Success</p>
                          <img data-src={typesSuccess1} className="lazyload inline-block" width="140" alt="Alerts System Validation" />
                        </div>
                      </td>                  
                      <td className="p-4 border-r border-grey-105">
                        <p className="mb-4">Homepage</p>
                        <p className="">Confetti</p>
                      </td>
                      <td className="p-4">
                        <p className="mb-4">When user finishes onboarding and sees homepage for first time.</p>
                        <p className="">When confetti has been animated.</p>
                      </td> 

                    </tr>

                    <tr className="border border-b border-grey-105">
                      <td className="p-4 border-r border-grey-105">    
                        <div className="flex flex-wrap items-center justify-start">     
                          <p className="mr-4">Warnings</p>
                          <img data-src={typesWarning1} className="lazyload inline-block" width="140" alt="Alerts System Validation" />
                        </div>
                      </td>                  
                      <td className="p-4 border-r border-grey-105">
                        <p className="mb-4">Delayed State</p>
                        <p className="mb-4">Form Fields</p>
                        <p className="">Pop Over</p>
                      </td>
                      <td className="p-4">
                        <p className="mb-4">When delayed status is triggered in the mic button.</p>
                        <p className="mb-4">When a form field doesn’t meet the requirements.</p>
                        <p className="">When a form field doesn’t meet the requirements.</p>
                      </td> 
                    </tr>

                    <tr className="border border-b border-grey-105">
                      <td className="p-4 border-r border-grey-105">    
                        <div className="flex flex-wrap items-center justify-start">     
                          <p className="mr-4">Light</p>
                          <img data-src={typesLight1} className="lazyload inline-block" width="140" alt="Alerts System Validation" />
                        </div>
                      </td>                  
                      <td className="p-4 border-r border-grey-105">
                        <p className="mb-4">Nudges Refresh</p>
                        <p className="">Deleting a Nudge</p>
                      </td>
                      <td className="p-4 border-r border-grey-105">
                        <p className="mb-4">When user pulls down to refresh nudges.</p>
                        <p className="">When user deletes a nudge from the nudge board.</p>
                      </td> 
                    </tr> 
                  </tbody>
                </table>
              </div>
            </section>   

            <section id="guidance" name="guidance" className="as-section mb-16">
              <span id="guidance-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
                <Copy id="guidance" />           
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of guidelines for sounds to adhere to.</p>
              <div className="flex flex-wrap -mx-5 mb-12">  

                <div className="w-grid px-5 mb-5">
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not distract users. Haptics should only enhance a user’s experience in completing the intended task.</p>
                  </div>
                </div> 
                <div className="w-grid px-5 mb-5">
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not overuse a haptic.</p>
                  </div>
                </div> 
                <div className="w-grid px-5 mb-5">
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not create custom haptic patterns.</p>
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

export default DesignHapticsPage;
