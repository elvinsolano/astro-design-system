import React, { Component } from "react"; 
import Scrollspy from 'react-scrollspy';   
import {Link} from 'gatsby'; 

import Layout from "../../components/layout";
import SEO from "../../components/seo";  
import Heading from '../../components/atoms/heading'; 
import Download from "../../components/download";
import Copy from "../../components/copy";

class DesignColorPage extends Component {  

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
              <li><Link to="design/color" className="block text-sm text-grey-400 w-full active font-semibold bg-grey-700">Color</Link>
                <Scrollspy items={ ['primary', 'secondary', 'greys', 'status', 'data-visualization', 'compliance'] } offset={-80} className="block" currentClassName="is-current">
                  <li><Link to="design/color#primary-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="block text-sm text-grey-400 pl-16 py-2 w-full bg-grey-200 font-semibold hover:bg-grey-100">Primary</Link></li>
                  <li><Link to="design/color#secondary-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Secondary</Link></li>
                  <li><Link to="design/color#greys-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Grey</Link></li>
                  <li><Link to="design/color#status-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Status</Link></li>
                  <li><Link to="design/color#data-visualization-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Data Visualization</Link></li>
                  <li><Link to="design/color#compliance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Compliance</Link></li>
                </Scrollspy>           
              </li>
              <li><Link to="design/typography" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Typography</Link></li>
              <li><Link to="design/icons" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Icons</Link></li>
              <li><Link to="design/pictograms" className="block text-sm text-grey-400 w-full hover:bg-grey-100">Pictograms</Link></li>
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
              <Heading level="1" className="as-h1 as-type-medium">Color</Heading> 
              <Download /> 
            </div>         
            <p className="mb-16 text-greyStatus-600 tracking-wider">The design system uses a carefully considered and approved color palette. Use it to ensure Astro delivers a consistent and robustly branded experience.</p>
            
            <section id="primary" name="primary" className="as-section"> 
              <span id="primary-anchor" className="page-anchor"></span>             
              <Heading level="2" className="as-h2 as-type-medium mb-3">Primary
                <Copy id="primary" /> 
              </Heading> 

              <p className="mb-5 text-greyStatus-600 tracking-wider">Astro’s primary palette is red, black and white. It is the base of the application and is displayed most frequently across the components. The palette is used to provide accessibility, simplicity and consistency throughout the application.</p>  
              <div className="flex flex-wrap -mx-4 mb-12">
                <div className="px-4 mb-8">
                  <div className="bg-red-600 color-sample"></div>
                  <div className="color-description p-2">
                    <p className="text-grey-400 mb-2">Primary 1</p>
                    <p className="text-sm text-grey-400 ">HEX - #E0301E</p>
                    <p className="text-sm text-grey-400 ">RGB - 224 48 30</p>
                    <p className="text-sm text-grey-400 ">CMYK - 0 79 87 12</p> 
                  </div>
                </div>
                <div className="px-4 mb-8">
                  <div className="bg-black color-sample"></div>
                  <div className="color-description p-2">
                    <p className="text-grey-400 mb-2">Primary 2</p>
                    <p className="text-sm text-grey-400 ">HEX - #000000</p>
                    <p className="text-sm text-grey-400 ">RGB - 0 0 0</p>
                    <p className="text-sm text-grey-400 ">CMYK - 0 0 0 100</p>  
                  </div>
                </div>
                <div className="px-4 mb-8">
                  <div className="bg-white color-sample border-grey-500 border-solid border"></div>
                  <div className="color-description p-2">
                    <p className="text-grey-400 mb-2">Primary 3</p>
                    <p className="text-sm text-grey-400 ">HEX - #FFFFFF</p>
                    <p className="text-sm text-grey-400 ">RGB - 225 225 225</p>
                    <p className="text-sm text-grey-400 ">CMYK - 0 0 0 0</p>  
                  </div>
                </div>              
              </div> 
            </section> 

            <section id="secondary" name="secondary" className="as-section"> 
              <span id="secondary-anchor" className="page-anchor"></span> 
              <Heading level="2" className="as-h2 as-type-medium mb-3">Secondary
                <Copy id="secondary" /> 
              </Heading> 

              <p className="mb-5 text-greyStatus-600 tracking-wider">Astro’s secondary palette is light green and blue. It is a complementary color to the primary colors but does not compete with them. </p>  
              <div className="flex flex-wrap -mx-4 mb-12">
                <div className="px-4 mb-8">
                  <div className="bg-green-800 color-sample"></div>
                  <div className="color-description p-2">
                    <p className="text-grey-400 mb-2">Secondary 1</p>
                    <p className="text-sm text-grey-400 ">HEX - #22992E</p>
                    <p className="text-sm text-grey-400 ">RGB - 34 153 46</p> 
                  </div>
                </div>
                <div className="px-4 mb-8">
                  <div className="bg-blue-600 color-sample"></div>
                  <div className="color-description p-2">
                    <p className="text-grey-400 mb-2">Secondary 2</p>
                    <p className="text-sm text-grey-400 ">HEX - #3F88C5</p>
                    <p className="text-sm text-grey-400 ">RGB - 63 136 197</p> 
                  </div>
                </div>             
              </div> 
            </section>

            <section id="greys" name="greys" className="as-section"> 
              <span id="greys-anchor" className="page-anchor"></span>
  
              <Heading level="2" className="as-h2 as-type-medium mb-3">Grey
                <Copy id="greys" /> 
              </Heading> 

              <p className="mb-5 text-greyStatus-600 tracking-wider">Astro’s grey color palette provides the design system with an element of flexibility. The greys are used for background surfaces, text, icons, divider lines and disabled states.</p>  
              <div className="flex flex-wrap -mx-4"> 
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

              <div className="as-dyk flex justify-between bg-black rounded-sm">
                <div className="flex items-start">
                  <div className="mr-4 -mt-1">
                    <div className="DarkAndLightRectangleStyle">
                      <div className="darkrectangle"></div>
                      <div className="lightrectangle"></div>
                    </div>
                  </div> 
                  <p className="as-type-regular leading-relaxed text-white tracking-wider">Did you know all body copy in the Astro design system uses Grey 7 and not Black?</p>
                </div> 
              </div> 
            </section>  
  
            <section id="status" name="status" className="as-section"> 
              <span id="status-anchor" className="page-anchor"></span>
  
              <Heading level="2" className="as-h2 as-type-medium mb-3">Status
                <Copy id="status" /> 
              </Heading> 

              <p className="mb-5 text-greyStatus-600 tracking-wider">The status colors are used for badges, statuses, alerts and within forms and toasts. They are used to let the user know the status of content or a particular process.</p>  
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

            <section id="data-visualization" name="greys" className="as-section"> 
              <span id="data-visualization-anchor" className="page-anchor"></span>
  
              <Heading level="2" className="as-h2 as-type-medium mb-3">Data Visualization
                <Copy id="data-visualization" /> 
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
                    <p className="text-sm text-grey-400 ">HEX - #DB536A</p>
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

            <section id="compliance" name="compliance" className="as-section mb-64"> 
              <span id="compliance-anchor" className="page-anchor"></span>

              <Heading level="2" className="as-h2 as-type-medium mb-3">Compliance
                <Copy id="compliance" />            
              </Heading> 
              <p className="mb-4 text-greyStatus-600 tracking-wider">Astro's color pallette uses PwC Brand Simplification approved colors.</p>  
  
            </section>   
    
          </main>
        </div>
      </Layout>
    );
  }
}

export default DesignColorPage;
