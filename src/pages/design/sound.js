import React, { Component } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {Link} from 'gatsby';
import 'lazysizes';
import ReactAudioPlayer from 'react-audio-player';

import Layout from "../../components/layout";
import SEO from "../../components/seo";  
import Heading from '../../components/atoms/heading';
import Download from "../../components/download";
import Copy from "../../components/copy";

import soundInput1 from '../../assets/design/sound/Confirmation/PwC_BNS_Confirm.wav';
import soundInput2 from '../../assets/design/sound/Notification/PwC_BNS_GeneralNotification_01.wav';
import soundInput3 from '../../assets/design/sound/Input/PwC_BNS_VoiceInput.wav';
import soundInput4 from '../../assets/design/sound/Output/PwC_BNS_VoiceOutput.wav';

class DesignSoundPage extends Component {   
  
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
              <li><Link to="design/sound" className="block text-sm text-grey-400 w-full active font-semibold bg-grey-700">Sound</Link>
                <Scrollspy items={ ['types', 'usage', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="design/sound#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li>
                  <li><Link to="design/sound#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Usage</Link></li>     
                  <li><Link to="design/sound#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
                </Scrollspy>  
              </li>
              <li><Link to="design/haptics" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Haptics</Link></li>
            </ul> 
          </nav>
        </aside>
        <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">  
          <main className=" pl-16 pr-16 pt-16">

            <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Sound</Heading>
              <Download />
            </div>  
            <p className="mb-16 text-greyStatus-600 tracking-wider">Sound allows Astro to communicate information in ways that improve the user experience. Use of sound can also help define Astro's personality and aesthetic.</p>
            <section id="types" name="types" className="as-section mb-16">
              <span id="types-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Types
                <Copy id="types" />            
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">A variety of audio resources designed to provide sensory feedback around an interface-related action or event.</p>
              
              <div className="flex flex-wrap -mx-5">
                <div className="w-half px-5 mb-8">
                  <div className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-center justify-center"> 
                    <ReactAudioPlayer
                      src={soundInput1}
                      controls
                    />
                  </div> 
                  <p className="as-type-regular text-sm text-greyStatus-600"><span className="as-type-medium">Confirmations</span> - Sound used to confirm actions.</p>
                </div>
                <div className="w-half px-5 mb-8">
                  <div className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-center justify-center"> 
                    <ReactAudioPlayer
                      src={soundInput2}
                      controls
                    />
                  </div>  
                  <p className="as-type-regular text-sm text-greyStatus-600"><span className="as-type-medium">Notifications</span> - Sound used when a notification is delivered to the user.</p>
                </div>
                <div className="w-half px-5">
                  <div className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-center justify-center"> 
                    <ReactAudioPlayer
                      src={soundInput3}
                      controls
                    />
                  </div>  
                  <p className="as-type-regular text-sm text-greyStatus-600"><span className="as-type-medium">Voice Input</span> - Sound used when Astro takes in an utterance..</p>
                </div>
                <div className="w-half px-5">
                  <div className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-center justify-center"> 
                  <ReactAudioPlayer
                      src={soundInput4}
                      controls
                    />
                  </div>  
                  <p className="as-type-regular text-sm text-greyStatus-600"><span className="as-type-medium">Voice Output</span> - Sound used when Astro responds.</p>
                </div>
              </div>  
            </section>

            <section id="usage" name="usage" className="as-section mb-16">
              <span id="usage-anchor" className="page-anchor"></span>

              <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
                <Copy id="usage" />    
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Use of these cues should be determined by the goal of providing audio feedback.</p>
              <div className="">
                <table className="w-full">
                  <thead className="border border-grey-200">
                    <tr className="bg-grey-200">
                      <td className="p-4">Sound</td> 
                      <td className="p-4">Screen</td>
                      <td className="p-4">Interaction</td>                    
                    </tr>
                  </thead>
                  <tbody className="border border-grey-105">        
                    <tr className="border border-b border-grey-105">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-regular">Confirmations</p></td>
                      <td className="p-4 border-r border-grey-105"><p className="as-type-regular">Onboarding</p></td> 
                      <td className="p-4">When user finishes Onboarding and sees Homepage for first time.</td>
                    </tr>
                    <tr className="border border-b border-grey-105">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-regular">Notifications</p></td>
                      <td className="p-4 border-r border-grey-105"><p className="as-type-regular">Notification</p></td>
                      <td className="p-4">Whenever a Nudge comes in.</td>
                      
                    </tr> 
                    <tr className="border border-b border-grey-105">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-regular">Voice Input</p></td>                  
                      <td className="p-4 border-r border-grey-105"><p className="as-type-regular">Voice Input</p></td>
                      <td className="p-4">Whenever utterance is entered.</td> 
                    </tr>
                    <tr className="border border-b border-grey-105">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-regular">Voice Output</p></td>
                      <td className="p-4 border-r border-grey-105"><p className="as-type-regular">Voice Output</p></td>
                      <td className="p-4">When Astro responds.</td> 
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
              <div className="flex flex-wrap -mx-5">    

                <div className="w-grid px-5 mb-5">         
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Play sounds once. Do not loop.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">         
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not alter length of sounds.</p>
                  </div>    
                </div> 
                <div className="w-grid px-5 mb-5">         
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Only use sounds for specified scenarios.</p>
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

export default DesignSoundPage;
