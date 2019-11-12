import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'gatsby'; 

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading'; 

function DesignColorPage() { 

  return (
    <Layout>
      <SEO
        title="Design"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <aside className="fixed overflow-y-auto as-nav bg-white top-auto h-full border-r border-grey-500 border-solid">
        <nav>
          <ul className=""> 
            <li><Link to="design/logo" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Logo</Link></li>
            <li><Link to="design/color" className="block text-sm text-grey-400 w-full active font-semibold bg-grey-700">Color</Link>
              <Scrollspy items={ ['primary', 'secondary', 'greys', 'status', 'data-visualization'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="design/color#primary-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="block text-sm text-grey-400 pl-16 py-2 w-full bg-grey-200 font-semibold hover:bg-grey-100">Primary</Link></li>
                <li><Link to="design/color#secondary-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Secondary</Link></li>
                <li><Link to="design/color#greys-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Greys</Link></li>
                <li><Link to="design/color#status-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Status</Link></li>
                <li><Link to="design/color#data-visualization-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Data Visualization</Link></li>
              </Scrollspy>           
            </li>
            <li><Link to="design/typography" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Typography</Link></li>
            <li><Link to="design/icons" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Icons</Link></li>
            <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Pictograms</Link></li>
            <li><Link to="design/screen-anatomy" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Screen Anatomy</Link></li>
            <li><Link to="design/motion" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Motion</Link></li>
            <li><Link to="design/sound" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Sound</Link></li>
          </ul> 
        </nav>
      </aside>




      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">
 
          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Color</Heading>
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

          <section id="primary" name="primary" className="mb-24"> 
            <span id="primary-anchor" className="page-anchor"></span> 

            <Heading level="2" className="as-h2 as-type-medium mb-3">Primary
              <CopyToClipboard text={'http://localhost:8000/design/color#primary'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 

            <p className="mb-5 text-greyStatus-600 tracking-wider">Astro’s primary palette is red, black and white. It is the base of the application and is displayed most frequently across the components. The palette is used to provide accessibility, simplicity and consistency throughout the application.</p>  
            <div className="flex flex-wrap -mx-4 mb-12">
              <div className="px-4 mb-8">
                <div className="bg-red-600 color-sample"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Red</p>
                  <p className="text-sm text-grey-400 ">HEX - #E0301E</p>
                  <p className="text-sm text-grey-400 ">RGB - 224 48 30</p>
                  <p className="text-sm text-grey-400 ">CMYK - 0 79 87 12</p> 
                </div>
              </div>
              <div className="px-4 mb-8">
                <div className="bg-black color-sample"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Black</p>
                  <p className="text-sm text-grey-400 ">HEX - #000000</p>
                  <p className="text-sm text-grey-400 ">RGB - 0 0 0</p>
                  <p className="text-sm text-grey-400 ">CMYK - 0 0 0 100</p>  
                </div>
              </div>
              <div className="px-4 mb-8">
                <div className="bg-white color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">White</p>
                  <p className="text-sm text-grey-400 ">HEX - #FFFFFF</p>
                  <p className="text-sm text-grey-400 ">RGB - 225 225 225</p>
                  <p className="text-sm text-grey-400 ">CMYK - 0 0 0 0</p>  
                </div>
              </div>              
            </div> 
          </section> 

          <section id="secondary" name="secondary" className="mb-24"> 
            <span id="secondary-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Secondary
              <CopyToClipboard text={'http://localhost:8000/design/color#secondary'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 

            <p className="mb-5 text-greyStatus-600 tracking-wider">Astro’s secondary palette is light green and blue. It is a complementary color to the primary colors but does not compete with them. </p>  
            <div className="flex flex-wrap -mx-4 mb-12">
              <div className="px-4 mb-8">
                <div className="bg-green-800 color-sample"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Light Green</p>
                  <p className="text-sm text-grey-400 ">HEX - #22992E</p>
                  <p className="text-sm text-grey-400 ">RGB - 33 129 45</p> 
                </div>
              </div>
              <div className="px-4 mb-8">
                <div className="bg-blue-600 color-sample"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Blue</p>
                  <p className="text-sm text-grey-400 ">HEX - #3F88C5</p>
                  <p className="text-sm text-grey-400 ">RGB - 63 136 197</p> 
                </div>
              </div>             
            </div> 
          </section>

          <section id="greys" name="greys" className="mb-24"> 
            <span id="greys-anchor" className="page-anchor"></span>
 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Grey Colors
              <CopyToClipboard text={'http://localhost:8000/design/color#greys'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 

            <p className="mb-5 text-greyStatus-600 tracking-wider">Astro’s grey color palette provides the design system with an element of flexibility. The greys are used for background surfaces, text, icons, divider lines and disabled states.</p>  
            <div className="flex flex-wrap -mx-4 mb-12"> 
              <div className="px-4 mb-8">
                <div className="bg-greyStatus-100 color-sample"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Grey 1</p>
                  <p className="text-sm text-grey-400 ">HEX - #F2F2F2</p>
                  <p className="text-sm text-grey-400 ">RGB - 118 118 118</p> 
                </div>
              </div>
              <div className="px-4 mb-8">
                <div className="bg-greyStatus-200 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Grey 2</p>
                  <p className="text-sm text-grey-400 ">HEX - #D5D5D5</p>
                  <p className="text-sm text-grey-400 ">RGB - 213 213 213</p> 
                </div>
              </div>  
              <div className="px-4 mb-8">
                <div className="bg-greyStatus-300 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Grey 3</p>
                  <p className="text-sm text-grey-400 ">HEX - #ABABAB</p>
                  <p className="text-sm text-grey-400 ">RGB - 171 171 171</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-greyStatus-400 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Grey 4</p>
                  <p className="text-sm text-grey-400 ">HEX - #7D7D7D</p>
                  <p className="text-sm text-grey-400 ">RGB - 125 125 125</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-greyStatus-500 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Grey 5</p>
                  <p className="text-sm text-grey-400 ">HEX - #575757</p>
                  <p className="text-sm text-grey-400 ">RGB - 87 87 87</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-greyStatus-600 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Grey 6</p>
                  <p className="text-sm text-grey-400 ">HEX - #333333</p>
                  <p className="text-sm text-grey-400 ">RGB - 51 51 51</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-greyStatus-700 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Grey 7</p>
                  <p className="text-sm text-grey-400 ">HEX - #2D2D2D</p>
                  <p className="text-sm text-grey-400 ">RGB - 45 45 45</p> 
                </div>
              </div>              
            </div> 
          </section>  
  
          <section id="status" name="status" className="mb-24"> 
            <span id="status-anchor" className="page-anchor"></span>
 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Status Colors
              <CopyToClipboard text={'http://localhost:8000/design/color#status'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 

            <p className="mb-5 text-greyStatus-600 tracking-wider">The status colors are used for badges, statuses, alerts and within forms and toasts. They are used to let the user know the status of content or of a particular process.</p>  
            <div className="flex flex-wrap -mx-4 mb-12"> 
              <div className="px-4 mb-8">
                <div className="bg-status-100 color-sample"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Status 1</p>
                  <p className="text-sm text-grey-400 ">HEX - #C52A1A</p>
                  <p className="text-sm text-grey-400 ">RGB - 197 42 26</p> 
                </div>
              </div>
              <div className="px-4 mb-8">
                <div className="bg-status-200 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Status 2</p>
                  <p className="text-sm text-grey-400 ">HEX - #FFBF1F</p>
                  <p className="text-sm text-grey-400 ">RGB - 255 191 31</p> 
                </div>
              </div>  
              <div className="px-4 mb-8">
                <div className="bg-status-300 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Status 3</p>
                  <p className="text-sm text-grey-400 ">HEX - #4EAD58</p>
                  <p className="text-sm text-grey-400 ">RGB - 78 173 88</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-status-400 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Status 4</p>
                  <p className="text-sm text-grey-400 ">HEX - #3872A4</p>
                  <p className="text-sm text-grey-400 ">RGB - 56 114 64</p> 
                </div> 
              </div>              
            </div> 
          </section>   

          <section id="data-visualization" name="greys" className="mb-24"> 
            <span id="data-visualization-anchor" className="page-anchor"></span>
 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Data Visualization Colors
              <CopyToClipboard text={'http://localhost:8000/design/color#data-visualization'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 

            <p className="mb-5 text-greyStatus-600 tracking-wider">The data visualization palette is used to interpret data. Within a particular graph, each color is assigned a data point and the infographic reflects each value.</p>  
            <div className="flex flex-wrap -mx-4 mb-12"> 
              <div className="px-4 mb-8">
                <div className="bg-data-100 color-sample"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 1</p>
                  <p className="text-sm text-grey-400 ">HEX - #FFC42C</p>
                  <p className="text-sm text-grey-400 ">RGB - 255 196 44</p> 
                </div>
              </div>
              <div className="px-4 mb-8">
                <div className="bg-data-200 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 2</p>
                  <p className="text-sm text-grey-400 ">HEX - #D5D5D5</p>
                  <p className="text-sm text-grey-400 ">RGB - 219 83 106</p> 
                </div>
              </div>  
              <div className="px-4 mb-8">
                <div className="bg-data-300 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 3</p>
                  <p className="text-sm text-grey-400 ">HEX - #B579CE</p>
                  <p className="text-sm text-grey-400 ">RGB - 181 121 206</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-data-400 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 4</p>
                  <p className="text-sm text-grey-400 ">HEX - #2E7BF8</p>
                  <p className="text-sm text-grey-400 ">RGB - 46 123 248</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-data-500 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 5</p>
                  <p className="text-sm text-grey-400 ">HEX - #008387</p>
                  <p className="text-sm text-grey-400 ">RGB - 0 131 135</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-data-600 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 6</p>
                  <p className="text-sm text-grey-400 ">HEX - #FFE08F</p>
                  <p className="text-sm text-grey-400 ">RGB - 225 224 143</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-data-700 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 7</p>
                  <p className="text-sm text-grey-400 ">HEX - #E27588</p>
                  <p className="text-sm text-grey-400 ">RGB - 226 117 136</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-data-800 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 8</p>
                  <p className="text-sm text-grey-400 ">HEX - #D3B0E2</p>
                  <p className="text-sm text-grey-400 ">RGB - 211 176 226</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-data-900 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 9</p>
                  <p className="text-sm text-grey-400 ">HEX - #6CA2FA</p>
                  <p className="text-sm text-grey-400 ">RGB -  108 162 250</p> 
                </div>
              </div>              
              <div className="px-4 mb-8">
                <div className="bg-data-1000 color-sample border-grey-500 border-solid border"></div>
                <div className="color-description p-2">
                  <p className="text-grey-400 mb-2">Data 10</p>
                  <p className="text-sm text-grey-400 ">HEX - #4CA8AB</p>
                  <p className="text-sm text-grey-400 ">RGB - 76 168 171</p> 
                </div>
              </div>              
            </div> 
          </section>  
  
        </main>
      </div>
    </Layout>
  );
}

export default DesignColorPage;
