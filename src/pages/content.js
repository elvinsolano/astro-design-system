import React, { Component } from "react"; 
import Scrollspy from 'react-scrollspy';   
import {Link} from 'gatsby';
import 'lazysizes';

import Layout from "../components/layout";
import SEO from "../components/seo"; 
import Heading from '../components/atoms/heading';
import Copy from "../components/copy";

import ctaBoard1 from "../assets/content/Call to Action/01 Board of Directors/01 Board of Directors.png"; 
import ctaBoard2 from "../assets/content/Call to Action/01 Board of Directors/02 Board of Directors.png"; 
import ctaSalesforce1 from "../assets/content/Call to Action/02 Salesforce/01 Salesforce.png"; 
import ctaSalesforce2 from "../assets/content/Call to Action/02 Salesforce/02 Salesforce.png"; 
import ctaTaskList1 from "../assets/content/Call to Action/03 Task List/01 Remind.png"; 
import ctaTaskList2 from "../assets/content/Call to Action/03 Task List/02 Remind.png"; 

import nudgesConversational1 from "../assets/content/Nudges/Conversational/Conversational.png";
import nudgesNudge1 from "../assets/content/Nudges/Nudge/Nudge.png";
import nudgesUserUtterances1 from "../assets/content/User Utterances/User Utterances.png";

class ContentPage extends Component {   
  render() {  

    return (
      <Layout>
        <SEO
          title="Astro"
          keywords={[``, ``]}
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
              <li><Link to="content" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100" activeClassName="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Content</Link>
                <Scrollspy items={ ['voicetone','guidelines', 'utterances', 'cta', 'nudges', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="content#voicetone-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Voice and Tone</Link></li> 
                  <li><Link to="content#guidelines-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">Writing Guidelines</Link></li>
                  <li><Link to="content#utterances-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">User Utterances</Link></li>
                  <li><Link to="content#cta-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Call to Action (CTA)</Link></li>
                  <li><Link to="content#nudges-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Nudges</Link></li>
                  <li><Link to="content#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
                </Scrollspy>             
              </li> 
            </ul> 
          </nav>
        </aside>
        <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
          <main className=" pl-16 pr-16 pt-16">

            <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Content</Heading> 
            </div>  
            
            <section id="voicetone" name="voicetone" className="as-section"> 
              <span id="voicetone-anchor" className="page-anchor"></span> 
              <p className="mb-12 text-greyStatus-600 tracking-wider">Astro’s content is designed to create a seamless, efficient and intuitive experience for users. From voice to visual, Astro represents an evolution in the way users access information through a simple voice command or the touch of a button. Our style is sleek but unpretentious, information-driven, but not overwhelming. We seek to deliver insights that make users more efficient, knowledgeable and proactive throughout their day.</p>
              <p className="mb-8 text-greyStatus-600 tracking-wider">The full writing guide is <a className="inline text-status-100 hover:text-red-900 underline" rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1Kv4gH9Ki_0Bj3eEWKpDjdhuRUC_0KsMl-lXGHdiBxPo/edit#heading=h.t7nurv6jq2u1">here</a>.</p>
              <Heading level="2" className="as-h2 as-type-medium mb-6">Voice and Tone
                <Copy id="voicetone" />
              </Heading>  
              <p className="mb-6 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Voice</span> is what Astro says and does. As a user engagement point, Astro’s voice is <span className="as-type-medium">helpful, trustworthy and approachable.</span></p>
              <p className="mb-10 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Tone</span> is Astro’s character or attitude as it talks and behaves. Astro’s tone is <span className="as-type-medium">powerful, insightful and proactive.</span></p>
              <div className="mb-10">
                <p className="text-sm text-greyStatus-600 uppercase">Helpful</p>
                <p className="as-type-medium as-h3 text-greyStatus-600 tracking-wider">"How can I help you today, Mary?"</p>
              </div>        
              <div className="mb-10">
                <p className="text-sm text-greyStatus-600 uppercase">Insightful</p>
                <p className="as-type-medium as-h3 text-greyStatus-600 tracking-wider">"Your meeting is at 1:00 PM with the CEO of Target. Would you like to see this client’s company insights?"</p>
              </div>        
              <div className="mb-10">
                <p className="text-sm text-greyStatus-600 uppercase">Proactive</p>
                <p className="as-type-medium as-h3 text-greyStatus-600 tracking-wider">"Your opportunity is expiring on September 4, 2020. Update it now before it expires."</p>
              </div>        
            </section> 
            
            <section id="writing-guidelines" name="writing-guidelines" className="as-section"> 
              <span id="writing-guidelines-anchor" className="page-anchor"></span>  
              <Heading level="2" className="as-h2 as-type-medium mb-6">Writing Guidelines
                <Copy id="writing-guidelines" />
              </Heading>  
              <div className="mb-10"> 
                <p className="as-type-medium as-h3 text-greyStatus-600 tracking-wider">We create simple, elegant phrases.</p>
                <p className="mb-10 text-greyStatus-600 tracking-wider">Astro's voice responses are direct, conversational and matter-of-fact. Astro will never talk first. It waits for a question in order to surface information.</p>
              </div>        
              <div className="mb-10"> 
                <p className="as-type-medium as-h3 text-greyStatus-600 tracking-wider">We prefer white space.</p>
                <p className="mb-10 text-greyStatus-600 tracking-wider">Less is more. Short responses are a must. Information is presented with room to breathe. We aim to make the user’s experience easier –– including reading information in a digestible way.</p>
              </div>  
              <div className="mb-10"> 
                <p className="as-type-medium as-h3 text-greyStatus-600 tracking-wider">We always write with the next step in mind.</p>
                <p className="mb-10 text-greyStatus-600 tracking-wider">We surface information in order to propel users to the next step, keeping in mind that their end goal may not be just one answer.</p>
              </div>  
              <div className="mb-10">
                <p className="as-type-medium as-h3 text-greyStatus-600 tracking-wider">We protect confidentiality.</p>
                <p className="mb-10 text-greyStatus-600 tracking-wider">Astro does not speak any client or personal information aloud. Astro’s generic voice-first approach means responses should use generic language that does not contain sensitive information.</p>
              </div>                     
              <div className="mb-10">
                <p className="mb-5 text-sm text-greyStatus-600 uppercase">Examples</p>
                <div className="flex mb-6">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                    </svg>  
                  </div>
                  <p className="as-type-medium text-greyStatus-600 ml-3">"Here are your 15 open opportunities for Acme International."</p>
                </div>   
                <div className="flex mb-10">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="as-type-medium text-greyStatus-600 ml-3">"You have 15 open opportunities worth $45 million for Acme International."</p>
                </div>
                <div className="flex mb-6">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                    </svg>  
                  </div>
                  <p className="as-type-medium text-greyStatus-600 ml-3">"Here’s your elective contribution to your 401k for this year."</p>
                </div>   
                <div className="flex mb-6">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="as-type-medium text-greyStatus-600 ml-3">"Your maximum 401k contribution is $500,000. You’re currently contributing $20,000."</p>
                </div>
              </div>                     
            </section> 

            <section id="user-utterances" name="user-utterances" className="as-section"> 
              <span id="user-utterances-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-6">User Utterances
                <Copy id="user-utterances" />
              </Heading> 
              <div className="flex">
                <div className="w-1/2 pr-6">
                  <p className="mb-10 text-greyStatus-600 tracking-wider">Utterances are how a user asks a question to Astro. Create between 5-8 for each story. When creating utterances, specificity is key. The more specific the language, the higher the probability that the right conversation model will be triggered.</p>
                  <p className="mb-5 text-sm text-greyStatus-600 uppercase">Examples</p> 
                  <div className="mb-3">
                    <p className="as-type-medium text-greyStatus-600 mb-6">"Do I have any outstanding invoices?"</p>
                    <p className="as-type-medium text-greyStatus-600 mb-6">"Can I see my past due bills?"</p>
                    <p className="as-type-medium text-greyStatus-600 mb-6">"What are my past due ARs?"</p>
                    <p className="as-type-medium text-greyStatus-600 mb-6">"I need to see my past due receivables?"</p>
                    <p className="as-type-medium text-greyStatus-600">"Am I overdue in paying my bills?"</p>
                  </div>
                </div>
                <div className="w-1/2">
                  <img data-src={nudgesUserUtterances1} className="lazyload" width="494" alt="Hi, I'm Astro. Ask me about your Invoices" />
                </div>
              </div>
            </section>

            <section id="cta" name="cta" className="as-section"> 
              <span id="cta-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-6">Call to Action (CTA)
                <Copy id="cta" />
              </Heading> 
              <p className="mb-5 text-greyStatus-600 tracking-wider">Call to actions are buttons that exist at the end of each story and are designed to push users to the next actionable insight, redirect them outside of Astro or help them to navigate to related stories. There must at least be one CTA per conversation. There should generally be no more than 5 CTAs per story.</p> 
              <p className="mb-10 text-greyStatus-600 tracking-wider">A full list of CTAs can be found <a className="inline text-status-100 hover:text-red-900 underline"  rel="noopener noreferrer" target="_blank" href="https://docs.google.com/spreadsheets/d/1nSpKhP1FcBh8KrtV4GHOMqvY1cMbbbnv/edit#gid=1209391679">here</a>.</p> 
              <div className="flex mb-16">
                <div className="w-1/2 pr-6">
                  <p className="mb-10 text-greyStatus-600 as-h3 as-type-medium">Our CTAs are:</p> 
                  <div className="flex mb-10">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                      </svg>  
                    </div>
                    <p className="text-greyStatus-600 ml-3"><span className="as-type-medium">Short.</span> Only use a few words.</p>
                  </div>   
                  <div className="flex mb-10">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                      </svg>  
                    </div>
                    <p className="text-greyStatus-600 ml-3"><span className="as-type-medium">Specific.</span> Written with a specific action in mind.</p>
                  </div>   
                  <div className="flex">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                      </svg>  
                    </div>
                    <div className="block">
                      <p className="text-greyStatus-600 ml-3 mb-3"><span className="as-type-medium">Managing expectations.</span> Differentiate when a user needs to be taken outside of Astro.</p>
                      <p className="text-sm text-greyStatus-600 ml-3">CTAs that contain a link that takes the user out Astro for additional information are written as “More Info in X System.”</p>
                    </div>
                  </div>                                   
                </div> 
                <div className="w-1/2">
                  <p className="mb-10 text-greyStatus-600 as-h3 as-type-medium">Our CTAs are not:</p> 
                  <div className="flex mb-10">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-greyStatus-600 ml-3"><span className="as-type-medium">Long.</span> The words must be few, fit and be clear.</p>
                  </div>   
                  <div className="flex mb-10">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-greyStatus-600 ml-3"><span className="as-type-medium">Generic.</span>  Ambiguous words like “click,” “tap” or “see” do not add value to user actions.</p>
                  </div>   
                  <div className="flex">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-greyStatus-600 ml-3 mb-3"><span className="as-type-medium">Blindsiding.</span> A CTA should not surprise a user by taking them out of Astro unknowingly or without user permission.</p>
                  </div>     
                </div> 
              </div>
              <div className="mb-16">
                <Heading level="3" className="as-h3 as-type-medium mb-6">Examples</Heading> 
                <div className="mb-10">
                  <div className="mb-5 py-16 pl-20 pr-10 bg-placeholder-200 flex flex-wrap justify-start">
                    <div className="flex mb-6 as-grid-8">
                      <div className="as-guidance mr-4">
                        <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                        </svg>  
                      </div>
                      <img data-src={ctaBoard1} className="lazyload inline-block" width="145" alt="Buttons Specs Primary 1" />
                    </div> 
                    <div className="flex mb-6 as-grid-8">
                      <div className="as-guidance mr-4">
                        <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                        </svg> 
                      </div>
                      <img data-src={ctaBoard2} className="lazyload inline-block" width="227" alt="Buttons Specs Primary 3" />
                    </div>  
                  </div>
                  <p className="as-type-regular text-sm text-greyStatus-600">Action: CTA links to a list of a company's Board of Directors</p> 
                </div>
                <div className="mb-10">
                  <div className="mb-5 py-16 pl-20 pr-10 bg-placeholder-200 flex flex-wrap justify-start">
                    <div className="flex mb-6 as-grid-8">
                      <div className="as-guidance mr-4">
                        <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                        </svg>  
                      </div>
                      <img data-src={ctaSalesforce1} className="lazyload inline-block" width="175" alt="Buttons Specs Primary 1" />
                    </div> 
                    <div className="flex mb-6 as-grid-8">
                      <div className="as-guidance mr-4">
                        <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                        </svg> 
                      </div>
                      <img data-src={ctaSalesforce2} className="lazyload inline-block" width="203" alt="Buttons Specs Primary 3" />
                    </div>  
                  </div>
                  <p className="as-type-regular text-sm text-greyStatus-600">Action: CTA takes users outside of Astro to Salesforce</p> 
                </div>
                <div className="mb-10">
                  <div className="mb-5 py-16 pl-20 pr-10 bg-placeholder-200 flex flex-wrap justify-start">
                    <div className="flex mb-6 as-grid-8">
                      <div className="as-guidance mr-4">
                        <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                        </svg>  
                      </div>
                      <img data-src={ctaTaskList1} className="lazyload inline-block" width="102" alt="Buttons Specs Primary 1" />
                    </div> 
                    <div className="flex mb-6 as-grid-8">
                      <div className="as-guidance mr-4">
                        <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                        </svg> 
                      </div>
                      <img data-src={ctaTaskList2} className="lazyload inline-block" width="205" alt="Buttons Specs Primary 3" />
                    </div>  
                  </div>
                  <p className="as-type-regular text-sm text-greyStatus-600">Action: User gets taken to their task list</p> 
                </div>
              </div>  
            </section>          

            <section id="nudges" name="nudges" className="as-section"> 
              <span id="nudges-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-6">Nudges
                <Copy id="nudges" />
              </Heading> 
              <p className="mb-16 text-greyStatus-600 tracking-wider">Other apps have push notifications. We have <span className="as-type-medium">nudges:</span> a short message meant to gently guide the user through their day and help them stay ahead. Nudges are <span className="as-type-medium">personal, actionable and insightful</span>.</p> 
              <p className="mb-16 text-greyStatus-600 tracking-wider">Nudges should ideally draw from 2+ data points that are combined to give a user insight they wouldn’t otherwise receive. They are either scheduled nudges (i.e., tax payment reminders), ad-hoc (the new Apple iPhone is out and you’re eligible for an upgrade!) or triggered (Christmas is coming up. Set a reminder for vacation now)</p> 
              <div className="mb-16">
                <Heading level="3" className="as-h3 as-type-medium mb-3">Nudge Copy</Heading> 
                <div className="mb-5 py-16 pl-20 pr-10 bg-placeholder-200 flex flex-wrap justify-start">
                  <img data-src={nudgesNudge1} className="lazyload" width="699" alt="" />
                </div>
                <p className="as-type-regular text-sm text-greyStatus-600">For the notification screen, write a short call to action phrase followed by the basic information no more than 80 characters.</p> 
              </div>  
              <div className="mb-16">
                <Heading level="3" className="as-h3 as-type-medium mb-3">Conversational Copy</Heading> 
                <div className="mb-5 py-16 pl-20 pr-10 bg-placeholder-200 flex flex-wrap justify-start">
                  <img data-src={nudgesConversational1} className="lazyload" width="656" alt="" />
                </div>
                <p className="as-type-regular text-sm text-greyStatus-600">For the conversational copy, explain the corresponding card copy or the action a user can take to complete the action in no more than 140 characters.</p> 
              </div>  
            </section>          

            <section id="guidance" name="guidance" className="as-section mb-48">
              <span id="guidance-anchor" className="page-anchor"></span>

              <Heading level="2" className="as-h2 as-type-medium mb-6">Guidance
                <Copy id="guidance" />
              </Heading>  
              <p className="mb-12 text-greyStatus-600 tracking-wider">Principles to keep in mind when writing for Astro.</p> 
              <div className="flex -mx-5 mb-6">
                <div className="w-1/2 px-5"> 
                  <div className="flex"> 
                    <p className="as-h3 as-type-medium">Do:</p>
                  </div>
                </div>  
                <div className="w-1/2 px-5"> 
                  <div className="flex"> 
                    <p className="as-h3 as-type-medium">Don't:</p>
                  </div>
                </div> 
              </div>
              <div className="flex -mx-5 mb-6">
                <div className="w-full px-5 mb-5"> 
                  <div className="border-b border-grey-500 border-solid">  
                  </div>
                </div>   
              </div>
              <div className="flex -mx-5 mb-12">
                <div className="w-1/2 px-5 mb-5"> 
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                      </svg>  
                    </div>
                    <div>
                      <p className="mb-2 text-greyStatus-600 as-type-medium ml-3">Create personalized voice responses.</p>
                      <p className="mb-6 text-greyStatus-600 ml-3 tracking-wider">Use contractions like "here's", "I’ve" and "can't" to lend a conversational, less-robotic tone to Astro.</p>
                      <p className="mb-3 text-xs uppercase text-greyStatus-600 ml-3">For Example</p>
                      <p className="text-sm as-type-medium text-greyStatus-600 ml-3">Say, “Here’s what I found” instead of “Here is what I found.”</p>
                    </div>
                  </div>
                </div>  
                <div className="w-1/2 px-5 mb-5"> 
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <div>
                      <p className="mb-2 text-greyStatus-600 as-type-medium ml-3">Pretend Astro is human.</p>
                      <p className="mb-6 text-greyStatus-600 ml-3 tracking-wider">Don’t hide that Astro has limitations. Set expectations by telling users what Astro can and cannot do.</p>
                      <p className="mb-3 text-xs uppercase text-greyStatus-600 ml-3">For Example</p>
                      <p className="text-sm as-type-medium text-greyStatus-600 ml-3">User: "Astro, order me an Uber."<br /> Astro: "I can't do that yet. Here are some other things you can ask me."</p>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="flex -mx-5 mb-12">
                <div className="w-1/2 px-5 mb-5"> 
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                      </svg>  
                    </div>
                    <div>
                      <p className="mb-2 text-greyStatus-600 as-type-medium ml-3">Use “I, Me, You” for Astro’s responses.</p>
                      <p className="mb-6 text-greyStatus-600 ml-3 tracking-wider">As an agent, Astro refers to itself as  “I” and “me” and the user as “you.”</p>
                      <p className="mb-3 text-xs uppercase text-greyStatus-600 ml-3">For Example</p>
                      <p className="text-sm as-type-medium text-greyStatus-600 ml-3">“I’ve found these things for you.”<br />“Let me see if I can get that for you.”<br />“Thanks for your feedback. It helps me improve.”</p>
                    </div>
                  </div>
                </div>  
                <div className="w-1/2 px-5 mb-5"> 
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <div>
                      <p className="mb-2 text-greyStatus-600 as-type-medium ml-3">Use “We, Us or Astro.”</p>
                      <p className="mb-6 text-greyStatus-600 ml-3 tracking-wider">Only use language that helps users relate to Astro as a unique entity.</p>
                      <p className="mb-3 text-xs uppercase text-greyStatus-600 ml-3">Avoid using examples like these:</p>
                      <p className="text-sm as-type-medium text-greyStatus-600 ml-3">“Astro found these things for you.”<br />“Let’s see if we can get that for you.</p>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="flex -mx-5 mb-12">
                <div className="w-1/2 px-5 mb-5"> 
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                      </svg>  
                    </div>
                    <div>
                      <p className="mb-2 text-greyStatus-600 as-type-medium ml-3">Spell out client names, acronyms and roles fully.</p>
                      <p className="mb-6 text-greyStatus-600 ml-3 tracking-wider">The exception: when it’s a widely understood abbreviation (i.e., IBM, UPS, etc.).</p>
                      <p className="mb-3 text-xs uppercase text-greyStatus-600 ml-3">For Example</p>
                      <p className="text-sm as-type-medium text-greyStatus-600 ml-3">"Here is your revenue as Engagement Leader."<br />"Here are your outstanding invoices as Global Relationship Leader for IBM."</p>
                    </div>
                    
                  </div>
                </div>  
                <div className="w-1/2 px-5 mb-5"> 
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <div>
                      <p className="mb-2 text-greyStatus-600 as-type-medium ml-3">Abbreviate assuming users will naturally understand.</p> 
                      <p className="mb-3 text-xs uppercase text-greyStatus-600 ml-3">Avoid using examples like these:</p>
                      <p className="text-sm as-type-medium text-greyStatus-600 ml-3">"Here's your revenue as EL."<br /> "Here are your outstanding invoices as GRL for International Business Machines Corporation."</p>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="flex -mx-5 mb-12">
                <div className="w-1/2 px-5 mb-5"> 
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4ead58" d="M12 28.093l-12-11.517 3.721-3.827 8.208 7.832 16.28-16.581 3.791 3.756z"></path> 
                      </svg>  
                    </div>
                    <div>
                      <p className="mb-2 text-greyStatus-600 as-type-medium ml-3">Use date, month, year in voice responses.</p>
                      <p className="mb-3 text-xs uppercase text-greyStatus-600 ml-3">For Example</p>
                      <p className="text-sm as-type-medium text-greyStatus-600 ml-3">"I've scheduled your task for November 28, 2020."</p>
                    </div>
                  </div>
                </div>  
                <div className="w-1/2 px-5 mb-5"> 
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <div>
                      <p className="mb-2 text-greyStatus-600 as-type-medium ml-3">Use the day or alternative formats.</p>
                      <p className="mb-3 text-xs uppercase text-greyStatus-600 ml-3">Avoid using examples like these:</p>
                      <p className="text-sm as-type-medium text-greyStatus-600 ml-3">"I’ve scheduled your task for November 28."<br />"I've scheduled your task for Wed 28 Nov 2020."</p>
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
}

export default ContentPage;
