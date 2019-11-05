import React, { useState } from "react"; 

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import dogIllustration from "../../images/dog-illustration.svg";
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading';

function DesignLogoPage() { 

  return (
    <Layout>
      <SEO
        title="Design"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <aside className="fixed overflow-y-auto pt-20 bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className=""> 
            <li><a href="logo" className="block text-sm text-black pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="block text-sm text-black pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Logo</a>
              <ul className="block">
                <li><a href="logo#overview" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Overview</a></li>
                <li><a href="logo#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="logo#construction" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Construction</a></li>
                <li><a href="logo#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="logo#clearspace" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Clearspace</a></li>
                <li><a href="logo#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>
            </li>
            <li><a href="color" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Color</a>
              <ul className="hidden">
                <li><a href="color#primary" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Primary</a></li>
                <li><a href="color#secondary" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Secondary</a></li>
                <li><a href="color#greys" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Greys</a></li>
                <li><a href="color#status" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Status</a></li>
                <li><a href="color#data-visualization" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Data Visualization</a></li>
              </ul>                 
            </li>
            <li><a href="typography" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Typography</a>
              <ul className="hidden">
                <li><a href="typography#typeface" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Typeface</a></li>
                <li><a href="typography#type-scale" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Type Scale</a></li>
                <li><a href="typography#applying-type-scale" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Applying Type Scale</a></li>
                <li><a href="typography#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
                <li><a href="typography#accessibility" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Accessibility</a></li>
              </ul>
            </li>
            <li><a href="icons" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Icons</a></li>
            <li><a href="pictograms" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Pictograms</a>
              <ul className="hidden">
                <li><a href="pictograms#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="pictograms#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>             
            </li>
            <li><a href="screen-anatomy" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Screen Anatomy</a></li>
            <li><a href="motion" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Motion</a></li>
            <li><a href="sound" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Sound</a></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto pt-20 w-full pb-5.5">
        <main className="ml-64 pl-16 pr-16 pt-16">
          <section className="">

            <div className="flex justify-between rounded py-1 px-3 bg-grey-100 mb-16">
              <Heading level="2" className="gw-h1">Logo</Heading>
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

export default DesignLogoPage;
