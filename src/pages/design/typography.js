import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy'; 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip'
import {Link} from 'gatsby';

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading'; 

import applyingTypeScale1 from "../../assets/design/typography/01 Type Scale.png"; 
import applyingTypeScale2 from "../../assets/design/typography/02 Actual Sizes.png"; 
  
import guidance1 from "../../assets/design/typography/01 Guidance.png";
import guidance2 from "../../assets/design/typography/02 Guidance.png";  
import guidance3 from "../../assets/design/typography/03 Guidance.png";  
import guidance4 from "../../assets/design/typography/04 Guidance.png";  
import guidance5 from "../../assets/design/typography/05 Guidance.png";  

function DesignTypographyPage() {   
  const state = {value: 'some\ntext', copied: false};
  
  const onChange = ({target: {value}}) => {
    this.setState({value, copied: false});
  };

  const onClick = ({target: {innerHTML}}) => {
    console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
  };

  const onCopy = () => {
    this.setState({copied: true});
  };
  
  return (
    <Layout>
      <SEO
        title="Design"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      
      <aside className="fixed overflow-y-auto pt-20 bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className=""> 
            <li><Link to="design/logo" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100">Logo</Link></li>
            <li><Link to="design/color" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100">Color</Link></li>
            <li><Link to="design/typography" className="block text-sm text-black pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100">Typography</Link>
              <Scrollspy items={ ['typeface', 'type-scale', 'applying-type-scale', 'guidance', 'compliance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="design/typography#typeface-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Typeface</Link></li>
                <li><Link to="design/typography#type-scale-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Type Scale</Link></li>                
                <li><Link to="design/typography#applying-type-scale-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Applying Type Scale</Link></li>
                <li><Link to="design/typography#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
                <li><Link to="design/typography#compliance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Compliance</Link></li>
              </Scrollspy>              
            </li>
            <li><Link to="design/icons" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100">Icons</Link></li>
            <li><Link to="design/pictograms" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100">Pictograms</Link> </li>
            <li><Link to="design/screen-anatomy" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
            <li><Link to="design/motion" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100">Motion</Link></li>
            <li><Link to="design/sound" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100">Sound</Link></li>
          </ul> 
        </nav>
      </aside>
 
      <div className="flex flex-col flex-1 mx-auto pt-20 w-full pb-5.5">
        <main className="ml-64 pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Typography</Heading>
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
          
          <section id="typeface" name="typeface" className="mb-24">
            <span id="typeface-anchor" className="page-anchor"></span>
            
            <Heading level="2" className="as-h2 as-type-medium mb-3">Typeface  
              <CopyToClipboard text={'http://localhost:8000/design/typography#typeface-anchor'}>
                <svg data-tip='custom show' data-for='typeface' data-event='click' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg>            
              </CopyToClipboard> 
              <div class="tooltip">          
                <ReactTooltip id='typeface' place="right" type="success" effect="solid" globalEventOff='click'> 
                  <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                    <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                  </svg>
                  URL Copied
                </ReactTooltip>
              </div>              
            </Heading> 
            <p className="mb-4">Astro’s primary typeface is Helvetica Neue. It is a modern and versatile font that is legible in various styles, sizes and weights. Helvetica Neue is the only font used in the Astro design system, and only the regular and medium weights are used.</p>
            <div className="flex w-full my-8">
              <div className="w-1/3 mr-16">
                <p className="text-sm uppercase as-type-regular">Helvetica Neue Regular</p>
                <p className="as-h0 as-type-regular">Aa</p>
                <p className="text-xl break-words as-type-regular">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890#+-@=%/>(&#123;[?1]&#125;)</p>
              </div>
              <div className="w-1/3">
                <p className="text-sm uppercase as-type-medium">Helvetica Neue Medium</p>
                <p className="as-h0 as-type-medium">Aa</p>
                <p className="text-xl break-words as-type-medium">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890#+-@=%/>(&#123;[?1]&#125;)</p>
              </div> 
            </div>
            <div className="border border-grey-500 border-solid">
              <div className="bg-grey-200 py-2 px-6">
                <p>Helvetica Neue</p>
              </div>
              <div className="py-2 px-6 relative">
                <CopyToClipboard text={`
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
                    <svg data-tip='custom show' data-event='click' data-for='code' className="fill-current cursor-pointer copy-code inline-block ml-2" width="20" height="20" viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.364 0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM8.727 32c1.94 0 7.274 0 16 0 1.6 0 2.895-1.309 2.895-2.909l0.015-20.364c0-1.6-1.295-2.909-2.895-2.909h-16.015c-1.6 0-2.909 1.309-2.909 2.909 0 12.62 0 19.408 0 20.364 0 1.764 1.046 2.909 2.909 2.909zM8.727 29.091v-20.364h16v20.364h-16z"></path>
                    </svg>                      
                </CopyToClipboard>    
                <div class="tooltip">          
                  <ReactTooltip place="left" id='code' type="success" effect="solid" globalEventOff='click'> 
                    <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                      <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                    </svg>
                    Code Copied
                  </ReactTooltip>
                </div>
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

          <section id="type-scale" name="type-scale" className="mb-24">
            <span id="type-scale-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Type Scale
              <CopyToClipboard text={'http://localhost:8000/design/typography#type-scale'}>
                <svg data-tip='custom show' data-event='click' data-for='type-scale' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='type-scale' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>
            </Heading> 

            <p className="mb-5">The Astro type scale includes a range of contrasting styles that provide consistency, rhythm, hierarchy, and contrast. The goal is to present content in the simplest and most efficient way possible. The Astro type scale consists of 13 type styles, each with its own unique application and meaning.</p>
            <div className="mb-12">
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
                    <td className="p-4 border-r border-grey-105">53 px</td>
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
                    <td className="p-4 border-r border-grey-105">18 px</td>
                    <td className="p-4 border-r border-grey-105">24 px</td>
                    <td className="p-4">Sentence</td>
                  </tr>
                  <tr className="bg-grey-100">
                    <td className="p-4 border-r border-grey-105"><p className="as-type-subtitle as-type-regular">Subtitle 2</p></td>
                    <td className="p-4 border-r border-grey-105">Helvetica Neue</td>
                    <td className="p-4 border-r border-grey-105">Regular</td>
                    <td className="p-4 border-r border-grey-105">18 px</td>
                    <td className="p-4 border-r border-grey-105">24 px</td>
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

            <div className="flex justify-between bg-black p-10 rounded-sm">
              <div className="flex items-start mr-10 w-2/3">
                <div className="mr-4 -mt-1">
                  <div className="DarkAndLightRectangleStyle">
                    <div className="darkrectangle"></div>
                    <div className="lightrectangle"></div>
                  </div>
                </div> 
                <p className="as-type-regular text-white">Did you know my typography system uses a single font: Helvetica Neue and only 2 weights: Regular and Medium.</p>
              </div>
              <div className="pl-10 border-l border-grey-500"> 
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="35" height="35" viewBox="0 0 31 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#333" d="M31.111 15.762c0 8.591-6.964 15.556-15.556 15.556s-15.556-6.964-15.556-15.556c0-8.591 6.964-15.556 15.556-15.556s15.556 6.964 15.556 15.556z"></path>
                  <path fill="#e0301e" d="M21.333 16.444l-8 4.889v-9.778z"></path>
                </svg> 
              </div>
            </div> 
          </section>

          <section id="applying-type-scale" name="applying-type-scale" className="mb-24">
            <span id="applying-type-scale-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Applying Type Scale
              <CopyToClipboard text={'http://localhost:8000/design/typography#applying-type-scale-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='applying-type-scale' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='applying-type-scale' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>              
            </Heading> 

            <p className="mb-5">The type scale appears as text in components and the overall layout.</p>
            <ol className="mb-5 py-12 px-20 bg-placeholder-300 flex flex-wrap items-center justify-start">
              <li className="as-grid-10 relative"><span className="list-circle">1</span><img src={applyingTypeScale1} className="inline-block" width="335" height="332" /> </li>
              <li className="as-grid-10 relative"><span className="list-circle">2</span><img src={applyingTypeScale2} className="inline-block" width="335" height="332" /> </li>
            </ol> 
            <p className="as-type-regular text-sm">1. Scale Categories</p>
            <p className="as-type-regular text-sm">2. Actual Values</p>
          </section>

          <section id="guidance" name="guidance" className="mb-24">
            <span id="guidance-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
              <CopyToClipboard text={'http://localhost:8000/design/typography#guidance-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='guidance' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='guidance' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>               
            </Heading> 

            <p className="mb-4">Below is a list of guidelines for typography to adhere to.</p>
            <div className="flex flex-wrap -mx-4 mb-12">  

              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img src={guidance1} className="mb-3" width="290" />
                <p className="text-sm mb-3">Do not use any weight that is not regular or medium.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img src={guidance2} className="mb-3" width="290" />
                <p className="text-sm mb-3">Do not use adjust kerning or tracking.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidance3} className="mb-3" width="290" />
                <p className="text-sm mb-3">Do not make different levels of hierarchy the same weight.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidance4} className="mb-3" width="290" />
                <p className="text-sm mb-3">Do not make any level of hierarchy the same size or scale as another.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img src={guidance5} className="mb-3" width="290" />
                <p className="text-sm mb-3">Do not separate chunks of text.</p>
              </div>
            </div> 
          </section>

          <section id="compliance" name="compliance" className="mb-64"> 
            <span id="compliance-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Compliance
              <CopyToClipboard text={'http://localhost:8000/design/typography#compliance-anchor'}>
                <svg data-tip='custom show' data-event='click' data-for='compliance' className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
              <ReactTooltip id='compliance' place="right" type="success" effect="solid" globalEventOff='click'> 
                <svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                  <path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path>
                </svg>
                URL Copied
              </ReactTooltip>               
            </Heading> 

            <p className="mb-4">Astro’s type scale system is AA Compliant. Each category has been tested and approved to meet the AA Compliance standards.</p>  
 
          </section>   

            

        </main>
      </div>
    </Layout>
  );
}

export default DesignTypographyPage;
