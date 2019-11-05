import React, { useState } from "react"; 

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Heading from '../../components/atoms/heading';

function ElementsChartsPage() { 

  return (
    <Layout>
      <SEO
        title="Element"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      /> 
      
      <aside className="fixed overflow-y-auto pt-20 bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className="">  
            <li><a href="buttons" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="block text-sm text-black pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</a>
              <ul className="hidden">
                <li><a href="buttons#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li> 
                <li><a href="buttons#voice" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Voice Button</a></li>
                <li><a href="buttons#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="buttons#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>
                <li><a href="buttons#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>
            </li>
            <li><a href="dividers" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</a>
              <ul className="hidden">
                <li><a href="dividers#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="dividers#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="dividers#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>
                <li><a href="dividers#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>              
            </li>
            <li><a href="alerts" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Alerts and Notifications</a></li>
            <li><a href="badges" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</a>
              <ul className="hidden"> 
                <li><a href="badges#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="badges#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="badges#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>                  
              </ul>
            </li>
            <li><a href="charts" className="block text-sm text-black pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</a>
              <ul className="block"> 
                <li><a href="charts#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="charts#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="charts#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>
                <li><a href="charts#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>
            </li>
            <li><a href="form-fields" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</a></li>
            <li><a href="loaders" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Loaders</a>
              <ul className="hidden"> 
                <li><a href="loaders#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="loaders#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="loaders#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>
                <li><a href="loaders#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>              
            </li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto pt-20 w-full pb-5.5">
        <main className="ml-64 pl-16 pr-16 pt-16">
          <section className="">

            <div className="flex justify-between rounded py-1 px-3 bg-grey-100 mb-16">
              <Heading level="2" className="gw-h1">Charts</Heading>
              <div className="flex items-center">
                <p className="uppercase text-xs mr-4">Updated 11/25/19</p>
                <button className="bg-white border rounded-full border-solid px-4 py-2">Sketch File</button>
              </div>
            </div> 
            <p className="mb-2">Headline 2</p> 
            <p className="mb-2">Body Copy 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero ligula, elementum varius placerat at, semper vel ante. Integer malesuada ante vitae ante ultrices, quis vestibulum nisi facilisis.</p>
            <div className="rounded py-1 px-3 bg-grey-100 mb-16">
              content
            </div>

          </section>
        </main>
      </div>
    </Layout>
  );
}

export default ElementsChartsPage;
