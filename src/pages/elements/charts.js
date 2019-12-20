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
import Download from "../../components/download";

import typesCircleChart1 from "../../assets/elements/charts/types/circle-chart/01 Circle Chart.png";
import typesHorizontalChart1 from "../../assets/elements/charts/types/horizontal-chart/01 Horizontal Chart.png";
import typesDoughnutChart1 from "../../assets/elements/charts/types/doughnut-chart/01 Doughnut Chart.png";
import typesStrengthChart1 from "../../assets/elements/charts/types/strength-chart/01 Zero.png";
import typesStrengthChart2 from "../../assets/elements/charts/types/strength-chart/02 Low.png";
import typesStrengthChart3 from "../../assets/elements/charts/types/strength-chart/03 Med Low.png";
import typesStrengthChart4 from "../../assets/elements/charts/types/strength-chart/04 Medium.png";
import typesStrengthChart5 from "../../assets/elements/charts/types/strength-chart/05 Med High.png";
import typesStrengthChart6 from "../../assets/elements/charts/types/strength-chart/06 High.png";
import typesStrengthChart7 from "../../assets/elements/charts/types/strength-chart/07 Very High.png";
import typesTimelineChart1 from "../../assets/elements/charts/types/timeline-chart/01 Filled.png";
import typesTimelineChart2 from "../../assets/elements/charts/types/timeline-chart/02 Empty.png";

import usage1 from "../../assets/elements/charts/usage/01 Circle Chart.png";  
import usage2 from "../../assets/elements/charts/usage/02 Doughnut Chart.png";
import usage3 from "../../assets/elements/charts/usage/03 Horizontal Chart.png"; 
import usage4 from "../../assets/elements/charts/usage/04 Strength Chart.png"; 
import usage5 from "../../assets/elements/charts/usage/05 Timeline Chart.png"; 

import specsCircleChart1 from "../../assets/elements/charts/specs/circle-chart/01 Circle Chart.png";
import specsDoughnutChart1 from "../../assets/elements/charts/specs/doughnut-chart/01 Doughnut Chart.png";
import specsHorizontalChart1 from "../../assets/elements/charts/specs/horizontal-chart/01 Horizontal Chart.png";
import specsStrengthChart1 from "../../assets/elements/charts/specs/strength-chart/01 Zero.png";
import specsStrengthChart2 from "../../assets/elements/charts/specs/strength-chart/02 Low.png";
import specsStrengthChart3 from "../../assets/elements/charts/specs/strength-chart/03 Med Low.png";
import specsStrengthChart4 from "../../assets/elements/charts/specs/strength-chart/04 Medium.png";
import specsStrengthChart5 from "../../assets/elements/charts/specs/strength-chart/05 Med High.png";
import specsStrengthChart6 from "../../assets/elements/charts/specs/strength-chart/06 High.png";
import specsStrengthChart7 from "../../assets/elements/charts/specs/strength-chart/07 Very high.png";

import specsTimelineChart1 from "../../assets/elements/charts/specs/timeline-chart/01 Filled.png";
import specsTimelineChart2 from "../../assets/elements/charts/specs/timeline-chart/02 Empty.png";

import guidance1 from "../../assets/elements/charts/guidance/01 Guidance.png";  
import guidance2 from "../../assets/elements/charts/guidance/02 Guidance.png";  
import guidance3 from "../../assets/elements/charts/guidance/03 Guidance.png";  
import guidance4 from "../../assets/elements/charts/guidance/04 Guidance.png";  
import guidance5 from "../../assets/elements/charts/guidance/05 Guidance.png";  
import guidance6 from "../../assets/elements/charts/guidance/06 Guidance.png";  

function ElementsChartsPage() { 

  return (
    <Layout>
      <SEO
        title="Astro"
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
            <li><Link to="elements/buttons" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</Link></li>
            <li><Link to="elements/dividers" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</Link></li>
            <li><Link to="elements/alerts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Alerts and Notifications</Link></li>
            <li><Link to="elements/badges" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</Link></li>
            <li><Link to="elements/charts" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100" activeClassName="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</Link>
              <Scrollspy items={ ['types', 'usage', 'specs', 'guidance'] } offset={-80} className="block" currentClassName="is-current">
                <li><Link to="elements/charts#types-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Types</Link></li> 
                <li><Link to="elements/charts#usage-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">Usage</Link></li>
                <li><Link to="elements/charts#specs-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 " activeClassName="active-link">Specs</Link></li>
                <li><Link to="elements/charts#guidance-anchor" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100" activeClassName="active-link">Guidance</Link></li>
              </Scrollspy>   
            </li>
            <li><Link to="elements/form-fields" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</Link></li>
            <li><Link to="elements/loaders" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Loaders</Link></li>
          </ul> 
        </nav>
      </aside>

      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">

          <div className="block md:flex justify-between pb-2 border-b border-greyStatus-200 mb-5">
            <Heading level="1" className="as-h1 as-type-medium">Charts</Heading>
            <Download />
          </div> 

          <section id="types" name="types" className="as-section"> 
            <span id="types-anchor" className="page-anchor"></span> 
            <p className="mb-16 text-greyStatus-600 tracking-wider">Charts are graphics structured to tell a story of about a collected set of information.</p> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Types
              <CopyToClipboard text={window.location.href + '#types-anchor'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-12 text-greyStatus-600 tracking-wider">The design system contains a variety of charts to help illustrate concepts, data and data comparisons for users.</p>
            
            <div className="mb-16">
              <span id="types-circle-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-1">Circle Charts
                <CopyToClipboard text={window.location.href + '#types-circle-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-3 text-greyStatus-600 tracking-wider">A representation of percentages. <br/>*Uses primary red as highlighted color.</p>
              <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesCircleChart1} className="lazyload inline-block" width="150" height="150" alt="Charts Types Circle Charts" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Circle Chart</p>
            </div> 

            <div className="mb-16">
              <span id="types-doughnut-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-1">Doughnut Charts
                <CopyToClipboard text={window.location.href + '#types-doughnut-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-3 text-greyStatus-600 tracking-wider">A graphic used to display several sets of data* to make up the whole. <br/>*Uses data among 1-10 colors.</p>
              <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesDoughnutChart1} className="lazyload inline-block" width="150" height="150" alt="Charts Types Doughnut Charts" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Doughnut Chart</p>
            </div> 

            <div className="mb-16">
              <span id="types-horizontal-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-1">Horizontal Charts
                <CopyToClipboard text={window.location.href + '#types-horizontal-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-3 text-greyStatus-600 tracking-wider">A graphic representing percentage values horizontally.</p>
              <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesHorizontalChart1} className="lazyload inline-block" width="335" height="37" alt="Charts Types Horizontal Charts" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Horizontal Chart</p>
            </div> 

            <div className="mb-16">
              <span id="types-strength-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-1">Strength Charts
                <CopyToClipboard text={window.location.href + '#types-strength-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-3 text-greyStatus-600 tracking-wider">A chart used to show levels of strength, from low to very high, through 7 levels. <br/>Uses green as highlighted color.</p>
              <ol className="mb-5 py-16 pl-20 pr-10 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative mb-12"><span className="list-circle">1</span><img data-src={typesStrengthChart1} className="lazyload inline-block" width="30" height="8" alt="Charts Types Strength Charts Zero" /> </li>
                <li className="as-grid-4 relative mb-12"><span className="list-circle">2</span><img data-src={typesStrengthChart2} className="lazyload inline-block" width="30" height="8" alt="Charts Types Strength Charts Low" /> </li>
                <li className="as-grid-4 relative mb-12"><span className="list-circle">3</span><img data-src={typesStrengthChart3} className="lazyload inline-block" width="30" height="8" alt="Charts Types Strength Charts Med Low" /> </li>
                <li className="as-grid-4 relative mb-12"><span className="list-circle">4</span><img data-src={typesStrengthChart4} className="lazyload inline-block" width="30" height="8" alt="Charts Types Strength Charts Medium" /> </li>
                <li className="as-grid-4 relative"><span className="list-circle">5</span><img data-src={typesStrengthChart5} className="lazyload inline-block" width="30" height="8" alt="Charts Types Strength Charts Med High" /> </li>
                <li className="as-grid-4 relative"><span className="list-circle">6</span><img data-src={typesStrengthChart6} className="lazyload inline-block" width="30" height="8" alt="Charts Types Strength Charts High" /> </li>
                <li className="as-grid-4 relative"><span className="list-circle">7</span><img data-src={typesStrengthChart7} className="lazyload inline-block" width="30" height="8" alt="Charts Types Strength Charts Very High" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Zero</p>
              <p className="as-type-regular text-sm text-greyStatus-600">2. Low</p>
              <p className="as-type-regular text-sm text-greyStatus-600">3. Med Low</p>
              <p className="as-type-regular text-sm text-greyStatus-600">4. Medium</p>
              <p className="as-type-regular text-sm text-greyStatus-600">5. Med High</p>
              <p className="as-type-regular text-sm text-greyStatus-600">6. High</p>
              <p className="as-type-regular text-sm text-greyStatus-600">7. Very High</p>
            </div>  

            <div className="mb-16">
              <span id="types-timeline-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-3">Timeline Charts
                <CopyToClipboard text={window.location.href + '#types-timeline-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <p className="mb-3 text-greyStatus-600 tracking-wider">A chart to show an active step or milestone within a span of time. <br/>Uses primary red as highlighted color.</p>
              <ol className="mb-5 py-16 pl-20 pr-10 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={typesTimelineChart2} className="lazyload inline-block" width="10" height="98" alt="Charts Types Timeline Charts 1" /> </li>
                <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={typesTimelineChart1} className="lazyload inline-block" width="10" height="97" alt="Charts Types Timeline Charts 2" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Timeline Empty</p> 
              <p className="as-type-regular text-sm text-greyStatus-600">2. Timeline Filled</p> 
            </div>  
          </section> 

          <section id="usage" name="usage" className="as-section"> 
            <span id="usage-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Usage
              <CopyToClipboard text={window.location.href + '#usage-anchor'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-5 text-greyStatus-600 tracking-wider">Charts are used to visualize data or concepts for users. They are typically placed throughout the UI. Here are examples of how they’re used within Astro.</p>
            <Tabs>
              <TabList>
                <Tab>Circle Charts</Tab>
                <Tab>Doughnut Charts</Tab> 
                <Tab>Horizontal Charts</Tab> 
                <Tab>Strength Charts</Tab> 
                <Tab>Timeline Charts</Tab>  
              </TabList>
          
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                  <img data-src={usage1} className="lazyload " width="375px" alt="Charts Usage Circle Chart" /> 
                </div> 
              </TabPanel>
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                  <img data-src={usage2} className="lazyload " width="375px" alt="Charts Usage Doughnut Chart" /> 
                </div>
              </TabPanel> 
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                  <img data-src={usage3} className="lazyload " width="375px" alt="Charts Usage Horizontal Chart" /> 
                </div>
              </TabPanel> 
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                  <img data-src={usage4} className="lazyload " width="375px" alt="Charts Usage Strength Chart" /> 
                </div>
              </TabPanel> 
              <TabPanel>
                <div className="mb-12 py-16 px-20 bg-placeholder-300 flex">
                  <img data-src={usage5} className="lazyload " width="375px" alt="Charts Usage Timeline Chart" /> 
                </div>
              </TabPanel> 
            </Tabs>
          </section>

          <section id="specs" name="specs" className="as-section"> 
            <span id="specs-anchor" className="page-anchor"></span> 
            <Heading level="2" className="as-h2 as-type-medium mb-3">Specs
              <CopyToClipboard text={window.location.href + '#specs-anchor'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading> 
            <p className="mb-12 text-greyStatus-600 tracking-wider">Charts present data within a certain context or in a comparison. Here are size, color and typography details to help you apply them within Astro.</p> 
            
            <div className="mb-16">
              <span id="specs-circle-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-3">Circle Charts
                <CopyToClipboard text={window.location.href + '#specs-circle-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={specsCircleChart1} className="lazyload inline-block" width="505" height="228" alt="Charts Specs Circle Chart" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Circle Chart</p> 
            </div> 
             
            <div className="mb-16">
              <span id="specs-doughnut-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-3">Doughnut Charts
                <CopyToClipboard text={window.location.href + '#specs-doughnut-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={specsDoughnutChart1} className="lazyload inline-block" width="420" height="190" alt="Charts Specs Doughnut Chart" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Doughnut Chart</p> 
            </div> 

            <div className="mb-16">
              <span id="specs-horizontal-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-3">Horizontal Charts
                <CopyToClipboard text={window.location.href + '#specs-horizontal-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative"><span className="list-circle">1</span><img data-src={specsHorizontalChart1} className="lazyload inline-block" width="489" height="147" alt="Charts Specs Horizontal Chart" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Horizontal Chart</p> 
            </div> 

            <div className="mb-16">
              <span id="specs-strength-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-3">Strength Charts
                <CopyToClipboard text={window.location.href + '#specs-strength-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-16 pl-20 pr-10 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">1</span><img data-src={specsStrengthChart1} className="lazyload inline-block" width="136" height="46" alt="Charts Specs Strength Chart" /> </li>
                <li className="as-grid-4 relative mr-12 mb-12"><span className="list-circle">2</span><img data-src={specsStrengthChart2} className="lazyload inline-block" width="40" height="47" alt="Charts Specs Strength Chart" /> </li>
                <li className="as-grid-4 relative mb-12"><span className="list-circle">3</span><img data-src={specsStrengthChart3} className="lazyload inline-block" width="32" height="47" alt="Charts Specs Strength Chart" /> </li>
                <li className="as-grid-4 relative mb-12 mr-12"><span className="list-circle">4</span><img data-src={specsStrengthChart4} className="lazyload inline-block" width="152" height="46" alt="Charts Specs Strength Chart" /> </li>
                <li className="as-grid-4 relative mb-12 mr-12"><span className="list-circle">5</span><img data-src={specsStrengthChart5} className="lazyload inline-block" width="30" height="8" alt="Charts Specs Strength Chart" /> </li>
                <li className="as-grid-4 relative mb-12"><span className="list-circle">6</span><img data-src={specsStrengthChart6} className="lazyload inline-block" width="30" height="8" alt="Charts Specs Strength Chart" /> </li>
                <li className="as-grid-4 relative mr-12"><span className="list-circle">7</span><img data-src={specsStrengthChart7} className="lazyload inline-block" width="171" height="46" alt="Charts Specs Strength Chart" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Empty</p>
              <p className="as-type-regular text-sm text-greyStatus-600">2. Low</p> 
              <p className="as-type-regular text-sm text-greyStatus-600">3. Medium Low</p> 
              <p className="as-type-regular text-sm text-greyStatus-600">4. Medium</p> 
              <p className="as-type-regular text-sm text-greyStatus-600">5. Medium High</p> 
              <p className="as-type-regular text-sm text-greyStatus-600">6. High</p> 
              <p className="as-type-regular text-sm text-greyStatus-600">7. Very High</p>
            </div> 

            <div className="mb-16">
              <span id="specs-timeline-charts-anchor" className="page-anchor"></span>
              <Heading level="3" className="as-h3 as-type-medium mb-3">Timeline Charts
                <CopyToClipboard text={window.location.href + '#specs-timeline-charts-anchor'}>
                  <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                  </svg> 
                </CopyToClipboard>            
              </Heading> 
              <ol className="mb-5 py-16 px-20 bg-placeholder-100 border border-grey-200 border-solid flex flex-wrap items-start justify-start">
                <li className="as-grid-4 relative mr-12"><span className="list-circle">1</span><img data-src={specsTimelineChart2} className="lazyload inline-block" width="165" height="106" alt="Charts Specs Timeline Chart" /> </li>
                <li className="as-grid-4 relative"><span className="list-circle">2</span><img data-src={specsTimelineChart1} className="lazyload inline-block" width="164" height="98" alt="Charts Specs Timeline Chart" /> </li>
              </ol>  
              <p className="as-type-regular text-sm text-greyStatus-600">1. Timeline Empty</p> 
              <p className="as-type-regular text-sm text-greyStatus-600">2. Timeline Filled</p> 
            </div>  
          </section> 

          <section id="guidance" name="guidance" className="as-section mb-48">
            <span id="guidance-anchor" className="page-anchor"></span>

            <Heading level="2" className="as-h2 as-type-medium mb-3">Guidance
              <CopyToClipboard text={window.location.href + '#specs-#guidance-anchor'}>
                <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
                </svg> 
              </CopyToClipboard>
            </Heading>  
            <p className="mb-12 text-greyStatus-600 tracking-wider">Below is a list of chart guidelines to adhere to.</p>
            <div className="flex flex-wrap -mx-5 mb-12">  
              <div className="w-grid px-5 mb-5">
                <img data-src={guidance1} className="lazyload mb-3" width="290" alt="Guidance 1" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use unapproved colors for doughnut charts. Use only data visualization colors.</p>
                </div>
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidance2} className="lazyload mb-3" width="290" alt="Guidance 2" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use data visualization colors out of numerical order for doughnut charts.</p>
                </div>
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidance3} className="lazyload mb-3" width="290" alt="Guidance 1" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use anything but status green color in strength chart.</p>
                </div>
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidance4} className="lazyload mb-3" width="290" alt="Guidance 2" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use any hard endpoints. Use round end points.</p>
                </div>
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidance5} className="lazyload mb-3" width="290" alt="Guidance 1" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not use any colors besides #2D2D2D for the values on all charts.</p>
                </div>
              </div>

              <div className="w-grid px-5 mb-5">
                <img data-src={guidance6} className="lazyload mb-3" width="290" alt="Guidance 2" />
                <div className="flex mb-3">
                  <div className="as-guidance">
                    <svg className="fill-current mt-1" width="14" height="14" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#c52a1a" d="M28.586 0.586l2.828 2.828-12.584 12.586 12.584 12.586-2.828 2.828-12.586-12.584-12.586 12.584-2.828-2.828 12.584-12.586-12.584-12.586 2.828-2.828 12.586 12.584z"></path>
                    </svg> 
                  </div>
                  <p className="text-sm text-greyStatus-600 ml-3">Do not put any of these charts on a black background.</p>
                </div>
              </div>
 

            </div>
          </section>

        </main>
      </div>
    </Layout>
  );
}

export default ElementsChartsPage;
