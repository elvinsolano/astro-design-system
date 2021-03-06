import React, { Component } from "react"; 
import { Link } from "gatsby"; 
import Layout from "../components/layout";
import SEO from "../components/seo"; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LineTo from 'react-lineto';

import 'lazysizes';
import Lottie from 'react-lottie'

import animationHero from '../assets/home/hero.json'
import animationWhat from '../assets/home/whatis.js'
 
import designsystem from "../assets/home/ds illustration.png"; 

import worksStep1 from "../assets/home/define task.png";
import worksStep2 from "../assets/home/billing goal.png";
import worksStep3 from "../assets/home/create-compon.png";
import worksStep4 from "../assets/home/apply-component.png";

import vid1 from "../assets/home/designer.mp4";
import vid2 from "../assets/home/product_owner.mp4";
import vid3 from "../assets/home/qa.mp4";
import vid4 from "../assets/home/developer.mp4";


class Block extends Component {
  render() {  
    

    return (
      <div className="layer-icons">
        <div className="left-offset">
          <svg className="fill-current cursor-pointer" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e0301e" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="2" d="M31 16c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-8.284 6.716-15 15-15s15 6.716 15 15z"></path>
          </svg>
        </div> 
        <div className="small-circle">
          <svg className="fill-current cursor-pointer" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e0301e" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="2" d="M31 16c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-8.284 6.716-15 15-15s15 6.716 15 15z"></path>
          </svg> 
        </div>
        {(typeof document !== 'undefined') ? ( <LineTo from="left-offset" to="small-circle" borderColor="#5A130C" delay={true} /> ) : null}
        <div className="small-cross">
          <svg className="fill-current cursor-pointer " width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e0301e" d="M31.216 9.761l-6.43 6.43 6.43 6.432-8.575 8.575-6.43-6.432-6.432 6.432-8.575-8.575 6.432-6.432-6.432-6.43 8.575-8.575 6.432 6.43 6.43-6.43 8.575 8.575z"></path>
          </svg>
        </div>
        {(typeof document !== 'undefined') ? ( <LineTo from="small-circle" to="small-cross" borderColor="#5A130C" delay={true} /> ) : null}
        <div className="small-square">
          <svg className="fill-current cursor-pointer" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e0301e" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="3.5556" d="M1.778 1.778h28.444v28.444h-28.444v-28.444z"></path>
          </svg> 
        </div> 
        {(typeof document !== 'undefined') ? ( <LineTo from="small-cross" to="small-square" borderColor="#5A130C" delay={true} /> ) : null}
        <div className="small-triangle">
          <svg className="fill-current cursor-pointer " width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e0301e" d="M16.031 2.309l14.999 26.249h-29.695z"></path>
          </svg>  
        </div> 
        {(typeof document !== 'undefined') ? ( <LineTo from="small-square" to="small-triangle" borderColor="#5A130C" delay={true} /> ) : null}
        <div className="right-offset">
          <svg className="fill-current cursor-pointer " width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e0301e" d="M16.031 2.309l14.999 26.249h-29.695z"></path>
          </svg>  
        </div> 
        {(typeof document !== 'undefined') ? ( <LineTo from="small-triangle" to="right-offset" borderColor="#5A130C" delay={true} /> ) : null}
      </div>
    ); 
  }
}

function IndexPage() { 

  const heroOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationHero,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  };
  const whatOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationWhat,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  };

  return (
    <Layout>
      <SEO
        title="Astro"
        keywords={[``, ``]}
      /> 
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className="as-home">
          <section className="as-hero-section bg-placeholder-400">
            <div className="as-hero-background"> 
              <div className="layer-shapes">
                <div className="large-circle"></div> 
                <div className="large-triangle"></div> 
                <svg className="fill-current cursor-pointer pattern-light-left" width="250" height="250" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> 
                  <path fill="#e0301e" d="M31.81 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647z"></path>
                </svg> 
                <svg className="fill-current cursor-pointer pattern-light-bottom" width="250" height="250" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> 
                  <path fill="#e0301e" d="M31.81 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 31.163l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 28.574l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 25.986l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 23.397l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 20.809l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 18.22l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 15.632l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 13.043l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 10.454l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 7.866l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 5.277l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 2.689l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM31.81 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM29.222 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM26.633 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM24.044 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM21.456 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM18.867 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM16.279 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM13.69 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM11.102 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM8.513 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM5.924 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM3.336 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647zM0.747 0.1l0.090 0.090-0.647 0.647-0.090-0.090 0.647-0.647z"></path>
                </svg>
              </div>
              <Block />
            </div>
            <div className="as-hero-foreground">
              <Lottie options={heroOptions} width={650} />
              <div className="as-hero-scroll text-center">
                <p className="text-sm text-white pb-4">Scroll to Explore</p>
                <svg className="fill-current mx-auto cursor-pointer" width="22" height="32" viewBox="0 0 22 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#e0301e" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="1" d="M11 1c5.523 0 10 4.477 10 10v10c0 5.523-4.477 10-10 10s-10-4.477-10-10v-10c0-5.523 4.477-10 10-10z"></path>
                  <path fill="none" stroke="#e0301e" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" strokeWidth="1" d="M11 6c1.105 0 2 0.895 2 2v2c0 1.105-0.895 2-2 2s-2-0.895-2-2v-2c0-1.105 0.895-2 2-2z"></path>
                </svg>  
              </div>
            </div>
          </section>
          <div className="as-home-wrapper relative">
            <div className="as-home-foreground flex flex-col">
              <section className="as-home-section">
                <div className="mx-32 flex justify-center items-center">
                  <div className="w-1/2">
                    <p level="2" className="as-h2 as-type-medium mb-3">What is Astro?</p>
                    <p className="pb-12 as-home-copy">As your voice-enabled cognitive agent, I help to simplify your work day by bringing together 300+ of the firm’s systems, saving you time and energy on administrative tasks and information searches. </p> 
                    <p className="pb-4 text-sm uppercase text-greyStatus-600">How to communicate with Astro</p>
                    <div className="flex">
                      <div className="">
                        <div className="flex mb-4 pr-8 border-r border-grey mr-8">
                          <svg className="fill-current mx-auto cursor-pointer" width="60" height="80" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">  
                            <path fill="#e0301e" d="M12 0c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12s-12-5.373-12-12v-8c0-6.627 5.373-12 12-12z"></path>
                            <path fill="#fff" d="M12.2 10c0.994 0 1.8 0.806 1.8 1.8v8.4c0 0.994-0.806 1.8-1.8 1.8s-1.8-0.806-1.8-1.8v-8.4c0-0.994 0.806-1.8 1.8-1.8zM7.4 12.4c0.773 0 1.4 0.627 1.4 1.4v4.8c0 0.773-0.627 1.4-1.4 1.4s-1.4-0.627-1.4-1.4v-4.8c0-0.773 0.627-1.4 1.4-1.4zM17 12.4c0.773 0 1.4 0.627 1.4 1.4v4c0 0.773-0.627 1.4-1.4 1.4s-1.4-0.627-1.4-1.4v-4c0-0.773 0.627-1.4 1.4-1.4z"></path>
                          </svg>
                        </div>
                        <p className="pl-3">Voice</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-placeholder-400 px-3 h-20 mb-4 flex items-center">  
                          <svg className="fill-current mx-auto cursor-pointer" width="30" height="30" viewBox="0 0 77 32" xmlns="http://www.w3.org/2000/svg">    
                            <path fill="#ababab" d="M77.333 26.667v5.333h-77.333v-5.333h77.333zM56 13.333v5.333h-13.333v-5.333h13.333zM34.667 13.333v5.333h-13.333v-5.333h13.333zM13.333 13.333v5.333h-13.333v-5.333h13.333zM77.333 13.333v5.333h-13.333v-5.333h13.333zM56 0v5.333h-13.333v-5.333h13.333zM77.333 0v5.333h-13.333v-5.333h13.333zM34.667 0v5.333h-13.333v-5.333h13.333zM13.333 0v5.333h-13.333v-5.333h13.333z"></path>
                          </svg>
                        </div>
                        <p className="">Text</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <Lottie options={whatOptions} width={420} />
                  </div>
                </div> 
              </section>
              <section className="as-home-section"> 
                <div className="flex justify-center items-center my-14">
                  <div className="w-1/2">
                    <img data-src={designsystem} className="lazyload inline-block" width="523" alt="" /> 
                  </div>              
                  <div className="w-1/2">
                    <p level="2" className="as-h2 as-type-medium mb-3">The Design System</p>
                    <p className="as-home-copy pb-12">This design system functions as a strategic and technological repository for all components of Astro. It contains guides on the vision, content and development of the software through a system of repeatable patterns that are clustered in a consistent, responsive grid for future reference. Astro's design system uses PwC Brand Simplification.</p>
                  </div>
                </div>
              </section>
              <section className="as-home-section "> 
                <div className="mx-32 flex justify-center items-center"> 
                  <div className="w-2/3 text-center">
                    <p level="2" className="as-h2 as-type-medium mb-3">Getting Started</p>
                    <p className="pb-12">Use this resource when designing any future components of Astro to ensure consistency and uniformity in Astro’s look, feel and overall scope.</p>
                  </div>
                </div>
                <div className="mx-16 flex justify-center items-center as-home-tab">
                  <Tabs>
                    <TabList>
                      <Tab>Product Owners</Tab>  
                      <Tab>Designers</Tab>  
                      <Tab>Developers</Tab>  
                      <Tab>QA</Tab>  
                    </TabList>
                    <TabPanel>                  
                      <div className="flex items-start justify-center">
                        <div className="w-1/2 pt-2 pb-4 pr-12">
                          <p className="pb-4">View usage examples and become familiar with <Link to="content" className="inline text-status-100 hover:text-red-900 underline">Content</Link> rules for insights on how to best organize and display your requirements.</p>
                          <p className="pb-4">The content rules are scalable and allow for different information hierarchies to be displayed.</p>
                        </div>
                        <div className="w-1/2 flex items-center justify-center mt-2">
                          <video className="lazyload" autoPlay={true} muted={true} loop>
                            <source src={vid2} type="video/mp4" />
                          </video>   
                        </div>
                      </div> 
                    </TabPanel>
                    <TabPanel>                  
                      <div className="flex items-start justify-center">
                        <div className="w-1/2 pt-2 pb-4 pr-12"> 
                          <p className="pb-4">Explore the <Link to="design" className="inline text-status-100 hover:text-red-900 underline">Design</Link> section in order to learn the Astro design system and patterns.</p>
                          <p className="pb-4">Then, review the <Link to="design" className="inline text-status-100 hover:text-red-900 underline">Components</Link> section. There you can download Sketch file design samples to help you to become familiar with existing components and incorporate them into your designs.</p>                  
                        </div>
                        <div className="w-1/2 flex items-center justify-center mt-2">
                          <video className="lazyload" autoPlay={true} muted={true} loop>
                            <source src={vid1} type="video/mp4" />
                          </video>                         
                        </div>
                      </div> 
                    </TabPanel>  
                    <TabPanel>                  
                      <div className="flex items-start justify-center">
                        <div className="w-1/2 pt-2 pb-4 pr-12">
                          <p className="pb-4">Explore Astro’s rules and guidelines to help build your solution.</p>
                          <p className="pb-4">The support resources available will give you the tools and knowledge you need.</p>
                          <p className="pb-4">Access and find <Link to="design/screen-anatomy" className="inline text-status-100 hover:text-red-900 underline">Screen Anatomy</Link> and structure, padding specs, <Link to="design/icons" className="inline text-status-100 hover:text-red-900 underline">Icon</Link> files, and code snippets for <Link to="design/typography" className="inline text-status-100 hover:text-red-900 underline">Typography</Link>.</p>
                        </div>
                        <div className="w-1/2 flex items-center justify-center mt-2">
                          <video className="lazyload" autoPlay={true} muted={true} loop>
                            <source src={vid4} type="video/mp4" />
                          </video>   
                        </div>
                      </div> 
                    </TabPanel>  
                    <TabPanel>                  
                      <div className="flex items-start justify-center">
                        <div className="w-1/2 pt-2 pb-4 pr-12">
                          <p className="pb-4">View all of Astro’s rules, guidelines, <Link to="elements" className="inline text-status-100 hover:text-red-900 underline">Elements</Link> and <Link to="components" className="inline text-status-100 hover:text-red-900 underline">Components</Link> to help execute a level of QA that ensures current build outputs are up to our design standards.</p>
                        </div>
                        <div className="w-1/2 flex items-center justify-center mt-2">
                            <video className="lazyload" autoPlay={true} muted={true} loop>
                            <source src={vid3} type="video/mp4" />
                          </video>   
                        </div>
                      </div> 
                    </TabPanel>  
                  </Tabs>        
                </div>
              </section>
              <section className="as-home-section"> 
                <div className="mx-32 flex justify-center items-center">
                  <div className="w-2/3 text-center">
                    <p level="2" className="as-h2 as-type-medium mb-3">How It Works</p>
                    <p className="pb-12">Anyone can and should use this resource when designing future components of Astro to ensure consistency and uniformity of the product in look, feel, and overall scope.</p>
                  </div>
                </div>
                <div className="mx-32 mb-32 flex justify-center items-start">            
                  <div className="w-1/2">
                    <p level="2" className="text-sm uppercase mb-3 text-greyStatus-600">Step 1</p>
                    <p level="2" className="as-h2 as-type-medium mb-3">Define Task or Objective</p>
                    <p className="pb-12">We start with clearly identifying the desired business or user objective. Once defined, we strategically research relevant data points and formulate content to best satisfy that goal.</p>
                  </div>
                  <div className="w-1/2 pl-10 text-center">
                    <img data-src={worksStep1} className="lazyload inline-block" width="458" alt="" /> 
                  </div>  
                </div>
                <div className="mx-32 mb-32 flex justify-center items-start">            
                  <div className="w-1/2">
                    <p level="2" className="text-sm uppercase mb-3 text-greyStatus-600">Step 2</p>
                    <p level="2" className="as-h2 as-type-medium mb-3">Solve through Design</p>
                    <p className="pb-12">Once the strategy and content are agreed upon, design focuses on how to best present this information clearly and precisely via wireframe format. Design also ensures this effort is consistent with the Astro Design System.</p>
                  </div>
                  <div className="w-1/2 pl-10 text-center">
                    <img data-src={worksStep2} className="lazyload inline-block" width="411" alt="" /> 
                  </div>  
                </div>
                <div className="mx-32 mb-32 flex justify-center items-start">            
                  <div className="w-1/2">
                    <p level="2" className="text-sm uppercase mb-3 text-greyStatus-600">Step 3</p>
                    <p level="2" className="as-h2 as-type-medium mb-3">Create Component</p>
                    <p className="pb-12">Once a wireframe is complete, we now leverage the visual design system to refine this structured information component. This phase integrates brand elements into the component such as color, typography and icons to give the entire experience a consistent look and feel.</p>
                  </div>
                  <div className="w-1/2 pl-10 text-center">
                    <img data-src={worksStep3} className="lazyload inline-block" width="337" alt="" /> 
                  </div>  
                </div>
                <div className="mx-32 flex justify-center items-start">            
                  <div className="w-1/2">
                    <p level="2" className="text-sm uppercase mb-3 text-greyStatus-600">Step 4</p>
                    <p level="2" className="as-h2 as-type-medium mb-3">Apply Component</p>
                    <p className="pb-12">Once a component is complete, we then use it within Astro's application framework. This process brings the component to life with full functionality.</p>
                  </div>
                  <div className="w-1/2 pl-10">
                    <img data-src={worksStep4} className="lazyload inline-block" width="621" style={{ marginLeft: -55 + 'px' }} alt="" /> 
                  </div>  
                </div>  
              </section>
            </div>
            <div className="as-home-background"> 
              <svg className="fill-current home-pattern" width="250" height="250" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#e0301e" d="M31.253 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
              </svg>
              <svg className="fill-current home-diamond" width="500" height="500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> 
                <path fill="#f2f2f2" d="M0.020 16l15.98-15.98 15.98 15.98-15.98 15.98-15.98-15.98z"></path>
              </svg>
              <svg className="fill-current home-pattern-2" width="250" height="250" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#e0301e" d="M31.253 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
              </svg> 
              <svg className="fill-current home-circle" width="500" height="500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#f2f2f2" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
              </svg>
              <svg className="fill-current home-pattern-3" width="250" height="250" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#e0301e" d="M31.253 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
              </svg> 
              <svg className="fill-current home-triangle" width="500" height="500" viewBox="0 0 41 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#f2f2f2" d="M17.885 0.017l18.237 31.926-36.123 0.010z"></path>
              </svg> 
              <svg className="fill-current home-pattern-4" width="250" height="250" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#e0301e" d="M31.253 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M31.253 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M28.664 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M26.076 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M23.487 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M20.898 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M18.31 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M15.721 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M13.133 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M10.544 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M7.956 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M5.367 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M2.778 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 0.837l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 3.426l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 6.014l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 8.603l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 11.191l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 13.78l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 16.368l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 18.957l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 21.546l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 24.134l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 26.723l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 29.311l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
                <path fill="#e0301e" d="M0.19 31.9l0.647-0.647c0.025-0.025 0.025-0.065 0-0.090s-0.065-0.025-0.090 0l-0.647 0.647c-0.025 0.025-0.025 0.065 0 0.090s0.065 0.025 0.090 0z"></path>
              </svg>  
              <svg className="fill-current home-cross" width="500" height="500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#f2f2f2" d="M22.869 0.048l9.102 9.102-22.833 22.833-9.102-9.102z"></path>
                <path fill="#f2f2f2" d="M31.972 22.881l-9.102 9.102-22.833-22.833 9.102-9.102z"></path>
              </svg>  
            </div>
          </div>
        </main>
        <div className="footer bg-placeholder-400 p-16">
          <p className="text-white text-sm mb-4">&copy; 2020 PwC. All rights reserved.</p>
          <p className="text-white text-sm">PwC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. Please see www.pwc.com/structure for further details.</p>
        </div>
      </div>

    </Layout>
  );
}  

export default IndexPage;
 