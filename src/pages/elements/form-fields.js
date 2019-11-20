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

import usageInputField1 from "../../assets/elements/form/usage/Input Fields/01 Single Text.png";
import usageInputField2 from "../../assets/elements/form/usage/Input Fields/02 Multiple Text.png";
import usageInputField3 from "../../assets/elements/form/usage/Input Fields/03 Password.png";
import usageInputField4 from "../../assets/elements/form/usage/Input Fields/04 Number Field.png";
import usageFeedback1 from "../../assets/elements/form/usage/feedback/01 Feedback.png";

import usagePickerFields1 from "../../assets/elements/form/usage/Picker Fields/01 List_Time.png";
import usagePickerFields2 from "../../assets/elements/form/usage/Picker Fields/02 Calendar.png";

import usageSelectFields1 from "../../assets/elements/form/usage/Select Fields/01 Strikethrough.png";
import usageSelectFields2 from "../../assets/elements/form/usage/Select Fields/02 Radio Button.png";
import usageSelectFields3 from "../../assets/elements/form/usage/Select Fields/03 Check Box.png";

import guidance1 from "../../assets/elements/form/guidance/01 Guidance.png";
import guidance2 from "../../assets/elements/form/guidance/02 Guidance.png";
import guidance3 from "../../assets/elements/form/guidance/03 Guidance.png";
import guidance4 from "../../assets/elements/form/guidance/04 Guidance.png";

function ElementsFormFieldsPage() { 

  return (
    <Layout>
      <SEO
        title="Element"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
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
            <li><Link to="elements/buttons" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</Link></li>
            <li><Link to="elements/dividers" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</Link></li>
            <li><Link to="elements/alerts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Alerts and Notifications</Link></li>
            <li><Link to="elements/badges" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</Link></li>
            <li><Link to="elements/charts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</Link></li>
            <li><Link to="elements/form-fields" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100" activeClassName="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</Link>
              <Scrollspy items={ ['types', 'usage', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="elements/charts#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li> 
                <li><Link to="elements/charts#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">Usage</Link></li> 
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

          <section id="types" name="types" className="as-section"> 
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
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Radio:</span> Used when there is a list of 2 or more options but user can only select one.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="as-grid-8 relative"><span className="list-circle">1</span><img data-src={typesSelectFieldsRadio1} className="lazyload inline-block" width="108" /> </li>
                  <li className="as-grid-8 relative"><span className="list-circle">2</span><img data-src={typesSelectFieldsRadio2} className="lazyload inline-block" width="108" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Active.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Inactive.</p>
              </div>
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Check:</span> Used when there is a list of 2 or more options and user can make multiple selections.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="as-grid-8 relative"><span className="list-circle">1</span><img data-src={typesSelectFieldsCheck3} className="lazyload inline-block" width="135" /> </li>
                  <li className="as-grid-8 relative"><span className="list-circle">2</span><img data-src={typesSelectFieldsCheck4} className="lazyload inline-block" width="135" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Active.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Inactive.</p>
              </div>
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Check Strikethrough:</span> Used to imply a state of completion in tasks.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="as-grid-8 relative"><span className="list-circle">1</span><img data-src={typesSelectFieldsStrike5} className="lazyload inline-block" width="156" /> </li>
                  <li className="as-grid-8 relative"><span className="list-circle">2</span><img data-src={typesSelectFieldsStrike6} className="lazyload inline-block" width="156" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Active.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Inactive.</p>
              </div>
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Toggles:</span> The toggle switch represents a physical switch that allows users to turn things on or off.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="as-grid-8 relative"><span className="list-circle">1</span><img data-src={typesSelectFieldsToggle7} className="lazyload inline-block" width="144" /> </li>
                  <li className="as-grid-8 relative"><span className="list-circle">2</span><img data-src={typesSelectFieldsToggle8} className="lazyload inline-block" width="144" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Active.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Inactive.</p>
              </div>
            </div>  
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Input Fields
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>
              </Heading>
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Single Text:</span> A text field is a basic text control that enables the user to type a small amount of text. Maximum character count: 50.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="mr-8 mb-12 relative"><span className="list-circle">1</span><img data-src={typesInputFieldSingle1} className="lazyload inline-block" width="335" /> </li>
                  <li className="mb-12 relative"><span className="list-circle">2</span><img data-src={typesInputFieldSingle2} className="lazyload inline-block" width="335" /> </li>
                  <li className="mr-8 mb-12 relative"><span className="list-circle">3</span><img data-src={typesInputFieldSingle3} className="lazyload inline-block" width="335" /> </li>
                  <li className="mb-12 relative"><span className="list-circle">4</span><img data-src={typesInputFieldSingle4} className="lazyload inline-block" width="335" /> </li>
                  <li className="mr-8 relative"><span className="list-circle">5</span><img data-src={typesInputFieldSingle5} className="lazyload inline-block" width="335" /> </li>
                  <li className="relative"><span className="list-circle">6</span><img data-src={typesInputFieldSingle6} className="lazyload inline-block" width="335" /> </li>
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Unfilled.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Focused.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">3. Filled.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">4. Mandatory - Text w/ Asterisk.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">5. Succesful - Green Alert.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">6. Error - Red Alert.</p>
              </div> 
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Number Field:</span> Is a field that is commonly used for numeric input types such as date, time or telephone number.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="mr-12 relative"><span className="list-circle">1</span><img data-src={typesInputFieldNumber1} className="lazyload inline-block" width="110" /> </li>
                  <li className="mr-12 relative"><span className="list-circle">2</span><img data-src={typesInputFieldNumber2} className="lazyload inline-block" width="110" /> </li>
                  <li className="relative"><span className="list-circle">3</span><img data-src={typesInputFieldNumber3} className="lazyload inline-block" width="110" /> </li> 
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Unfilled.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Focused.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">3. Filled.</p> 
              </div> 
            </div>   
            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Feedback Field
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>
              </Heading>
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Feedback Field:</span> A text field is a basic text area that enables the user to type a small amount of text. Maximum character count: 50.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-300 flex flex-wrap items-start justify-start">
                  <li className="as-grid-10 relative"><span className="list-circle">1</span><img data-src={typesFeedbackFields1} className="lazyload inline-block" width="218" /> </li>
                  <li className="relative"><span className="list-circle">2</span><img data-src={typesFeedbackFields2} className="lazyload inline-block" width="284" /> </li> 
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Unfilled.</p> 
                <p className="as-type-regular text-sm text-greyStatus-600">3. Filled.</p> 
              </div>  
            </div> 

            <div className="mb-16">
              <Heading level="3" className="as-h3 as-type-medium mb-3">Pickers Fields
                <CopyToClipboard text={'http://localhost:8000/elements/buttons#types-primary-button'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>
              </Heading>
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Date:</span> A field used to pick from a list of dates.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="mr-8 relative"><span className="list-circle">1</span><img data-src={typesPickerFieldsDate1} className="lazyload inline-block" width="335" /> </li>
                  <li className="relative"><span className="list-circle">2</span><img data-src={typesPickerFieldsDate2} className="lazyload inline-block" width="335" /> </li> 
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Unfilled.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Filled.</p> 
              </div>  
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">Time:</span> A field used to pick from a list of times.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="mr-8 relative"><span className="list-circle">1</span><img data-src={typesPickerFieldsDate1} className="lazyload inline-block" width="335" /> </li>
                  <li className="relative"><span className="list-circle">2</span><img data-src={typesPickerFieldsDate2} className="lazyload inline-block" width="335" /> </li> 
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Unfilled.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Filled.</p> 
              </div>  
              <div className="mb-12">
                <p className="mb-5 text-greyStatus-600 tracking-wider"><span className="as-type-medium">List:</span> A field used to pick from a list of selections.</p>
                <ol className="mb-5 py-16 px-20 bg-placeholder-200 flex flex-wrap items-start justify-start">
                  <li className="mr-8 relative"><span className="list-circle">1</span><img data-src={typesPickerFieldsDate1} className="lazyload inline-block" width="335" /> </li>
                  <li className="relative"><span className="list-circle">2</span><img data-src={typesPickerFieldsDate2} className="lazyload inline-block" width="335" /> </li> 
                </ol>  
                <p className="as-type-regular text-sm text-greyStatus-600">1. Unfilled.</p>
                <p className="as-type-regular text-sm text-greyStatus-600">2. Filled.</p> 
              </div>   
            </div>             
          </section> 

          <section id="usage" name="usage" className="as-section"> 
            <span id="usage-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
              <CopyToClipboard text={'http://localhost:8000/elements/buttons#types'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">Use Form Fields as designated input areas for users. The forms can be used to capture a user’s text data or the user’s selection of a choice.</p>
            <Tabs>
              <TabList>
                <Tab>Select Field</Tab>
                <Tab>Input Field</Tab>
                <Tab>Pickers Field</Tab>
                <Tab>Feedback Field</Tab> 
              </TabList> 
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex flex-col">
                  <div className="flex"> 
                    <img data-src={usageSelectFields1} className="lazyload mb-12 mr-12" width="375px" alt="Usage Select Field" /> 
                    <img data-src={usageSelectFields2} className="lazyload mb-12" width="375px" alt="Usage Select Field" />  
                  </div> 
                  <div className="flex">  
                    <img data-src={usageSelectFields3} className="lazyload" width="375px" alt="Usage Select Field" /> 
                  </div> 
                </div> 
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex flex-col">
                  <div className="flex"> 
                    <img data-src={usageInputField1} className="lazyload" width="375px" alt="Usage Input Field" /> 
                    <img data-src={usageInputField2} className="lazyload" width="375px" alt="Usage Input Field" /> 
                  </div>
                  <div class="flex">
                    <img data-src={usageInputField3} className="lazyload" width="375px" alt="Usage Input Field" /> 
                    <img data-src={usageInputField4} className="lazyload" width="375px" alt="Usage Input Field" /> 
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                  <img data-src={usagePickerFields1} className="lazyload " width="375px" alt="Usage Picker Field" />
                  <img data-src={usagePickerFields2} className="lazyload " width="375px" alt="Usage Picker Field" />
                </div>
              </TabPanel> 
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                  <img data-src={usageFeedback1} className="lazyload " width="375px" alt="Usage Feedback" />
                </div>
              </TabPanel>  
            </Tabs>
          </section> 

          <section id="guidance" name="guidance" className="as-section mb-48">
            <span id="guidance-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
              <CopyToClipboard text={'http://localhost:8000/design/typography#guidance-anchor'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading>  
            <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of guidelines for Form Fields to adhere to.</p>
            <div className="flex flex-wrap -mx-4 mb-12">  

              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Form Fields Guidance 1" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use input fields in a card.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg> 
                <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Form Fields Guidance 2" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use radio over black canvas.</p>
              </div>
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img data-src={guidance3} className="lazyload mb-3" width="290" alt="Form Fields Guidance 3" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not use the number field left positioned.</p>
              </div>  
              <div className="w-grid px-4 mb-8">
                <svg className="fill-current mb-3" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                </svg>
                <img data-src={guidance4} className="lazyload mb-3" width="290" alt="Form Fields Guidance 4" />
                <p className="text-sm mb-3 text-greyStatus-600">Do not position check, radio or toggle to right of text.</p>
              </div>  
            </div> 
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default ElementsFormFieldsPage;
