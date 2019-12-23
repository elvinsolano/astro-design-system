import React, { Component } from "react"; 
import Scrollspy from 'react-scrollspy'; 
import {CopyToClipboard} from 'react-copy-to-clipboard';  
import {Link} from 'gatsby';
import 'lazysizes'; 

import Layout from "../../components/layout";
import SEO from "../../components/seo";  
import Heading from '../../components/atoms/heading'; 
import Download from "../../components/download";
import Copy from "../../components/copy";

import applyingTypeScale1 from "../../assets/design/typography/01 Type Scale.png"; 
import applyingTypeScale2 from "../../assets/design/typography/02 Actual Sizes.png"; 
  
import guidance1 from "../../assets/design/typography/01 Guidance.png";
import guidance2 from "../../assets/design/typography/02 Guidance.png";  
import guidance3 from "../../assets/design/typography/03 Guidance.png";  
import guidance4 from "../../assets/design/typography/04 Guidance.png";  
import guidance5 from "../../assets/design/typography/05 Guidance.png";  

class Code extends Component {  
  state = {value: 'some\ntext', copied: false};
  onChange = ({target: {value}}) => {
    this.setState({value, copied: false});
  };
  onCopy = () => {
    this.setState({copied: true});
  }; 

  render() {   
    if(this.state.copied===true){
      setTimeout(function(){
        this.setState({copied:false});
      }.bind(this),1000);
    }      
    return (  
      <span>
        <span className="as-tooltip-wrapper">{this.state.copied ? <span className="as-tooltip"><svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path><path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path></svg> Code Copied</span> : null}</span>
        <CopyToClipboard onCopy={this.onCopy} text={`
            @font-face {
              font-family: 'HelveticaNeueLTW10-55Roman';
              src: url('/assets/fonts/HelveticaNeueLTW10-55Roman.woff2') format('woff2'),
                  url('/assets/fonts/HelveticaNeueLTW10-55Roman.woff') format('woff'),
                  url('/assets/fonts/HelveticaNeueLTW10-55Roman.ttf') format('truetype');
            }
            font-face {
              font-family: 'HelveticaNeueLTW10-65Medium'
              src: url('/assets/fonts/HelveticaNeueLTW10-65Medium.woff2') format('woff2'),
                  url('/assets/fonts/HelveticaNeueLTW10-65Medium.woff') format('woff'),
                  url('/assets/fonts/HelveticaNeueLTW10-65Medium.ttf') format('truetype');
            }
          `}>  
          <svg className="fill-current cursor-pointer copy-code inline-block ml-2" width="20" height="20" viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.364 0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM8.727 32c1.94 0 7.274 0 16 0 1.6 0 2.895-1.309 2.895-2.909l0.015-20.364c0-1.6-1.295-2.909-2.895-2.909h-16.015c-1.6 0-2.909 1.309-2.909 2.909 0 12.62 0 19.408 0 20.364 0 1.764 1.046 2.909 2.909 2.909zM8.727 29.091v-20.364h16v20.364h-16z"></path>
          </svg>                      
        </CopyToClipboard>   
      </span>
    );
  }
}

class DesignTypographyPage extends Component {  

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
              <li><Link to="design/typography" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100">Typography</Link>
                <Scrollspy items={ ['typeface', 'type-scale', 'applying-type-scale', 'guidance', 'compliance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="design/typography#typeface-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Typeface</Link></li>
                  <li><Link to="design/typography#type-scale-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Scale</Link></li>                
                  <li><Link to="design/typography#applying-type-scale-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Applying Type Scale</Link></li>
                  <li><Link to="design/typography#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
                  <li><Link to="design/typography#compliance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Compliance</Link></li>
                </Scrollspy>              
              </li>
              <li><Link to="design/icons" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Icons</Link></li>
              <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Pictograms</Link> </li>
              <li><Link to="design/screen-anatomy" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
              <li><Link to="design/motion" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Motion</Link></li>
              <li><Link to="design/sound" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sound</Link></li>
              <li><Link to="design/haptics" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Haptics</Link></li>
            </ul> 
          </nav>
        </aside>
   
        <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
          <main className=" pl-16 pr-16 pt-16">
  
            <div className="block md:block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
              <Heading level="1" className="as-h1 as-type-medium">Typography</Heading>
              <Download />
            </div> 
            
            <section id="typeface" name="typeface" className="as-section">
              <span id="typeface-anchor" className="page-anchor"></span>
              <p className="mb-16 text-greyStatus-600 tracking-wider">The design system contains typographical protocols that encourage information to be structured and visualized in a way that best communicates to users.</p>
              <Heading level="2" className="as-h2 as-type-medium mb-3">Typeface  
                <Copy id="typeface" />
              </Heading> 
              <p className="mb-4 text-greyStatus-600 tracking-wider">Astro’s primary typeface is Helvetica Neue. It is a modern and versatile font that is legible in various styles, sizes and weights. Helvetica Neue is the only font used in the Astro design system, and only the regular and medium weights are used.</p>
              <div className="flex w-full my-8">
                <div className="w-1/3 mr-16">
                  <p className="text-sm uppercase as-type-medium">Helvetica Neue Regular</p>
                  <p className="as-h0 as-type-regular">Aa</p>
                  <p className="text-xl break-words as-type-regular">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890#+-@=%/>(&#123;[?1]&#125;)</p>
                </div>
                <div className="w-1/3">
                  <p className="text-sm uppercase as-type-medium">Helvetica Neue Medium</p>
                  <p className="as-h0 as-type-medium">Aa</p>
                  <p className="text-xl break-words as-type-medium">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890#+-@=%/>(&#123;[?1]&#125;)</p>
                </div> 
              </div>
              <div className="border border-grey-500 border-solid mb-16">
                <div className="bg-grey-200 py-2 px-6">
                  <p>Helvetica Neue</p>
                </div>
                <div className="py-2 px-6 relative">
                <Code id="" /> 
                  <pre>{`
                    @font-face {
                      font-family: 'HelveticaNeueLTW10-55Roman';
                      src: url('/assets/fonts/HelveticaNeueLTW10-55Roman.woff2') format('woff2'),
                          url('/assets/fonts/HelveticaNeueLTW10-55Roman.woff') format('woff'),
                          url('/assets/fonts/HelveticaNeueLTW10-55Roman.ttf') format('truetype');
                    }
                    font-face {
                      font-family: 'HelveticaNeueLTW10-65Medium'
                      src: url('/assets/fonts/HelveticaNeueLTW10-65Medium.woff2') format('woff2'),
                          url('/assets/fonts/HelveticaNeueLTW10-65Medium.woff') format('woff'),
                          url('/assets/fonts/HelveticaNeueLTW10-65Medium.ttf') format('truetype');
                    }
                      `}
                  </pre> 
                </div>
              </div> 
            </section>
  
            <section id="type-scale" name="type-scale-anchor" className="as-section">
              <span id="type-scale-anchor" className="page-anchor"></span>
  
              <Heading level="2" className="as-h2 as-type-medium mb-3">Scale
                <Copy id="scale" />
              </Heading> 
  
              <p className="mb-5 text-greyStatus-600 tracking-wider">The Astro type scale includes a range of contrasting styles that provide consistency, rhythm, hierarchy, and contrast. The goal is to present content in the simplest and most efficient way possible. The Astro type scale consists of 13 type styles, each with its own unique application and meaning.</p>
              <div className="mb-8">
                <table className="w-full">
                  <thead className="">
                    <tr className="bg-grey-200">
                      <td className="p-4">Scale</td>
                      <td className="p-4">Font</td>
                      <td className="p-4">Weight</td>
                      <td className="p-4">Size</td>
                      <td className="p-4">Line Height</td>
                      <td className="p-4">Case</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 pt-4 pb-2 border-r border-grey-105"><p className="as-type-jumbo as-type-medium uppercase">Jumbo</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Medium</td>
                      <td className="p-4 border-r border-grey-105">50 px</td>
                      <td className="p-4 border-r border-grey-105">55 px</td>
                      <td className="p-4">Upper Case</td>
                    </tr>
                    <tr className="bg-grey-100">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-title1 as-type-regular">Title 1</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Regular</td>
                      <td className="p-4 border-r border-grey-105">28 px</td>
                      <td className="p-4 border-r border-grey-105">34 px</td>
                      <td className="p-4">Sentence</td>
                    </tr>
                    <tr className="">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-title2 as-type-medium">Title 2</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Medium</td>
                      <td className="p-4 border-r border-grey-105">24 px</td>
                      <td className="p-4 border-r border-grey-105">30 px</td>
                      <td className="p-4">Sentence</td>
                    </tr>
                    <tr className="bg-grey-100">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-title2 as-type-regular">Title 2R</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Regular</td>
                      <td className="p-4 border-r border-grey-105">24 px</td>
                      <td className="p-4 border-r border-grey-105">30 px</td>
                      <td className="p-4">Sentence</td>
                    </tr>                  
                    <tr className="">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-title3 as-type-medium">Title 3</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Medium</td>
                      <td className="p-4 border-r border-grey-105">18 px</td>
                      <td className="p-4 border-r border-grey-105">24 px</td>
                      <td className="p-4">Sentence</td>
                    </tr>
                    <tr className="bg-grey-100">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-title4 as-type-regular">Title 4</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Regular</td>
                      <td className="p-4 border-r border-grey-105">18 px</td>
                      <td className="p-4 border-r border-grey-105">24 px</td>
                      <td className="p-4">Sentence</td>
                    </tr>
                    <tr className="">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-subtitle as-type-medium">Subtitle 1</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Regular</td>
                      <td className="p-4 border-r border-grey-105">16 px</td>
                      <td className="p-4 border-r border-grey-105">22 px</td>
                      <td className="p-4">Sentence</td>
                    </tr>
                    <tr className="bg-grey-100">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-subtitle as-type-regular">Subtitle 2</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Regular</td>
                      <td className="p-4 border-r border-grey-105">16 px</td>
                      <td className="p-4 border-r border-grey-105">22 px</td>
                      <td className="p-4">Sentence</td>
                    </tr>
                    <tr className="">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-body as-type-regular">Body</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Regular</td>
                      <td className="p-4 border-r border-grey-105">14 px</td>
                      <td className="p-4 border-r border-grey-105">23 px</td>
                      <td className="p-4">Sentence</td>
                    </tr> 
                    <tr className="bg-grey-100">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-body as-type-medium">Body Medium</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Regular</td>
                      <td className="p-4 border-r border-grey-105">14 px</td>
                      <td className="p-4 border-r border-grey-105">23 px</td>
                      <td className="p-4">Sentence</td>
                    </tr>
                    <tr className="">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-label as-type-medium uppercase">Label</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Medium</td>
                      <td className="p-4 border-r border-grey-105">12 px</td>
                      <td className="p-4 border-r border-grey-105">18 px</td>
                      <td className="p-4">Upper Case</td>
                    </tr>
                    <tr className="bg-grey-100">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-small as-type-regular">Small</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Regular</td>
                      <td className="p-4 border-r border-grey-105">12 px</td>
                      <td className="p-4 border-r border-grey-105">18 px</td>
                      <td className="p-4">Sentence</td>
                    </tr>
                    <tr className="">
                      <td className="p-4 border-r border-grey-105"><p className="as-type-badge as-type-medium uppercase">Badge</p></td>
                      <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                      <td className="p-4 border-r border-grey-105">Medium</td>
                      <td className="p-4 border-r border-grey-105">10 px</td>
                      <td className="p-4 border-r border-grey-105">16 px</td>
                      <td className="p-4">Upper Case</td>
                    </tr>
                  </tbody>
                </table>
              </div> 
  
              <div className="as-dyk flex justify-between bg-black rounded-sm">
                <div className="flex items-start">
                  <div className="mr-4 -mt-1">
                    <div className="DarkAndLightRectangleStyle">
                      <div className="darkrectangle"></div>
                      <div className="lightrectangle"></div>
                    </div>
                  </div> 
                  <p className="as-type-regular leading-relaxed text-white tracking-wider">Did you know my typography system uses a single font (Helvetica Neue) and only 2 weights: Regular and Medium?</p>
                </div> 
              </div> 
  
            </section>
  
            <section id="applying-type-scale" name="applying-type-scale" className="as-section">
              <span id="applying-type-scale-anchor" className="page-anchor"></span>
  
              <Heading level="2" className="as-h2 as-type-medium mb-3">Applying Type Scale 
                <Copy id="applying-type-scale" /> 
              </Heading> 
              <div className="mb-16">
                <p className="mb-5 text-greyStatus-600 tracking-wider">The type scale appears as text in components and the overall layout.</p>
                <ol className="mb-5 py-16 pl-20 pr-10 bg-placeholder-300 flex flex-wrap items-center justify-start">
                  <li className="as-grid-10 relative"><span className="list-circle">1</span><img data-src={applyingTypeScale1} className="lazyload inline-block" width="335" height="332" alt="Typography Applying Type Scale Scale Categories"/> </li>
                  <li className="as-grid-10 relative"><span className="list-circle">2</span><img data-src={applyingTypeScale2} className="lazyload inline-block" width="335" height="332" alt="Typography Applying Type Scale Actual Values"/> </li>
                </ol> 
                <p className="as-type-regular text-sm text-greyStatus-600">1. Scale Categories</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Actual Values</p>
              </div>
            </section>
  
            <section id="guidance" name="guidance" className="as-section">
              <span id="guidance-anchor" className="page-anchor"></span>
  
              <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
                <Copy id="guidance-scale" /> 
              </Heading> 
  
              <p className="mb-5 text-greyStatus-600 tracking-wider">Below is a list of guidelines for typography to adhere to.</p>
              <div className="flex flex-wrap -mx-5 mb-16">    
  
                <div className="w-grid px-5 mb-5">
                  <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Typography Guidance 1" />           
                  <div className="flex mb-3">
                    <div className="as-guidance">
                      <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                      </svg> 
                    </div>
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use any weight that is not regular or medium.</p>
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
                    <p className="text-sm text-greyStatus-600 ml-3">Do not use adjust kerning or tracking.</p>
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
                    <p className="text-sm text-greyStatus-600 ml-3">Do not make different levels of hierarchy the same weight.</p>
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
                    <p className="text-sm text-greyStatus-600 ml-3">Do not make any level of hierarchy the same size or scale as another.</p>
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
                    <p className="text-sm text-greyStatus-600 ml-3">Do not separate chunks of text.</p>
                  </div>    
                </div>  
              </div> 
            </section>
  
            <section id="compliance" name="compliance" className="as-section mb-64"> 
              <span id="compliance-anchor" className="page-anchor"></span>
  
              <Heading level="2" className="as-h2 as-type-medium mb-3">Compliance
                <Copy id="compliance" /> 
              </Heading> 
  
              <p className="mb-4 text-greyStatus-600 tracking-wider">Astro’s type scale system is AA Compliant. Each category has been tested and approved to meet the AA Compliance standards.</p>  
   
            </section>   
  
          </main>
        </div>
      </Layout>
    ); 
  }
}

export default DesignTypographyPage;
