import React, { Component, useState } from "react"; 
import Scrollspy from 'react-scrollspy';  
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'gatsby';  
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'lazysizes';

import Layout from "../../components/layout";
import SEO from "../../components/seo"; 
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading';

import typesInputFieldNumber1 from "../../assets/elements/form/types/Input Fields/Number/01 Numbers.png";
import typesInputFieldNumber2 from "../../assets/elements/form/types/Input Fields/Number/02 Numbers.png";
import typesInputFieldNumber3 from "../../assets/elements/form/types/Input Fields/Number/03 Numbers.png";

import typesInputFieldSingle1 from "../../assets/elements/form/types/Input Fields/Single/01 Single.png";
import typesInputFieldSingle2 from "../../assets/elements/form/types/Input Fields/Single/02 Single.png";
import typesInputFieldSingle3 from "../../assets/elements/form/types/Input Fields/Single/03 Single.png";
import typesInputFieldSingle4 from "../../assets/elements/form/types/Input Fields/Single/04 Single.png";
import typesInputFieldSingle5 from "../../assets/elements/form/types/Input Fields/Single/05 Single.png";
import typesInputFieldSingle6 from "../../assets/elements/form/types/Input Fields/Single/06 Single.png";

import typesInputFieldMultiple1 from "../../assets/elements/form/types/Input Fields/Multiple/01 Multiple.png"; 
import typesInputFieldMultiple2 from "../../assets/elements/form/types/Input Fields/Multiple/02 Multiple.png"; 
import typesInputFieldMultiple3 from "../../assets/elements/form/types/Input Fields/Multiple/03 Multiple.png"; 
import typesInputFieldMultiple4 from "../../assets/elements/form/types/Input Fields/Multiple/04 Multiple.png"; 
import typesInputFieldMultiple5 from "../../assets/elements/form/types/Input Fields/Multiple/05 Multiple.png"; 
import typesInputFieldMultiple6 from "../../assets/elements/form/types/Input Fields/Multiple/06 Multiple.png"; 

import typesInputFieldPassword1 from "../../assets/elements/form/types/Input Fields/Password/01 Password.png";
import typesInputFieldPassword2 from "../../assets/elements/form/types/Input Fields/Password/02 Password.png";
import typesInputFieldPassword3 from "../../assets/elements/form/types/Input Fields/Password/03 Password.png";
import typesInputFieldPassword4 from "../../assets/elements/form/types/Input Fields/Password/04 Password.png";
import typesInputFieldPassword5 from "../../assets/elements/form/types/Input Fields/Password/05 Password.png";
import typesInputFieldPassword6 from "../../assets/elements/form/types/Input Fields/Password/06 Password.png";
import typesInputFieldPassword7 from "../../assets/elements/form/types/Input Fields/Password/07 Password.png";

import typesPickerFieldsDate1 from "../../assets/elements/form/types/Picker Fields/Date/01 Date.png";
import typesPickerFieldsDate2 from "../../assets/elements/form/types/Picker Fields/Date/02 Date.png";
import typesPickerFieldsDate3 from "../../assets/elements/form/types/Picker Fields/Date/03 Date.png";

import typesPickerFieldsDropdown1 from "../../assets/elements/form/types/Picker Fields/Dropdown/01 Dropdown.png";
import typesPickerFieldsDropdown2 from "../../assets/elements/form/types/Picker Fields/Dropdown/02 Dropdown.png";
import typesPickerFieldsDropdown3 from "../../assets/elements/form/types/Picker Fields/Dropdown/03 Dropdown.png";

import typesFeedbackFields1 from "../../assets/elements/form/types/Feedback Fields/01 Feedback.png";
import typesFeedbackFields2 from "../../assets/elements/form/types/Feedback Fields/02 Feedback.png";

import typesSelectFieldsRadio1 from "../../assets/elements/form/types/Select Fields/Radio/01 Radio.png";
import typesSelectFieldsRadio2 from "../../assets/elements/form/types/Select Fields/Radio/02 Radio.png";
import typesSelectFieldsCheck3 from "../../assets/elements/form/types/Select Fields/Check/03 Check.png";
import typesSelectFieldsCheck4 from "../../assets/elements/form/types/Select Fields/Check/04 Check.png";
import typesSelectFieldsStrike5 from "../../assets/elements/form/types/Select Fields/Strike/05 StrikeThrough.png";
import typesSelectFieldsStrike6 from "../../assets/elements/form/types/Select Fields/Strike/06 StrikeThrough.png";
import typesSelectFieldsToggle7 from "../../assets/elements/form/types/Select Fields/Toggle/07 Toggle.png";
import typesSelectFieldsToggle8 from "../../assets/elements/form/types/Select Fields/Toggle/08 Toggle.png";


function ElementsFormFieldsPage() { 

  return (
    <Layout>
      <SEO
        title="Element"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
 
      <aside className="fixed overflow-y-auto as-nav bg-white top-auto h-full border-r border-grey-500 border-solid">
        <nav>
          <ul className="">  
            <li><Link to="elements/buttons" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</Link></li>
            <li><Link to="elements/dividers" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</Link></li>
            <li><Link to="elements/alerts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Alerts and Notifications</Link></li>
            <li><Link to="elements/badges" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</Link></li>
            <li><Link to="elements/charts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</Link></li>
            <li><Link to="elements/form-fields" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100" activeClassName="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</Link>
              <Scrollspy items={ ['types', 'usage', 'specs', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="elements/charts#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li> 
                <li><Link to="elements/charts#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">Usage</Link></li>
                <li><Link to="elements/charts#specs-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">Specs</Link></li>
                <li><Link to="elements/charts#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
              </Scrollspy>               
            </li>
            <li><Link to="elements/loaders" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Loaders</Link></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">

          <div className="flex justify-between pb-2 border-b border-greyStatus-200 mb-16">
            <Heading level="1" className="as-h1 as-type-medium">Form Fields</Heading>
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

          <section id="types" name="types" className="mb-24"> 
            <span id="types-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-12">Types
              <CopyToClipboard text={'http://localhost:8000/elements/buttons#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Select Fields
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-12 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                {/* <li className="as-grid-10 relative"><span className="list-circle">1</span><img data-src={applyingTypeScale1} className="lazyload inline-block" width="335" height="332" /> </li> */}
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">Used when there is a list of 2 or more options but user can only select one.</p>
            </div> 
 
             
          </section> 

        </main>
      </div>
    </Layout>
  );
}

export default ElementsFormFieldsPage;
