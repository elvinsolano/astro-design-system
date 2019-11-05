import React, { useState } from "react"; 

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function ElementsPage() { 

  return (
    <Layout>
      <SEO
        title="Element"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
 
      <aside className="fixed overflow-y-auto pt-20 bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className="">  
            <li><a href="elements/buttons" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="block text-sm text-grey-400 pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</a>
              <ul className="hidden">
                <li><a href="elements/buttons#types" className="block text-sm text-grey-400 pl-16 py-2 w-full bg-grey-200 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li> 
                <li><a href="elements/buttons#voice" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Voice Button</a></li>
                <li><a href="elements/buttons#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="elements/buttons#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>
                <li><a href="elements/buttons#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>
            </li>
            <li><a href="elements/dividers" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</a>
              <ul className="hidden">
                <li><a href="elements/dividers#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="elements/dividers#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="elements/dividers#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>
                <li><a href="elements/dividers#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>              
            </li>
            <li><a href="elements/alerts" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Alerts and Notifications</a></li>
            <li><a href="elements/badges" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</a>
              <ul className="hidden"> 
                <li><a href="elements/badges#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="elements/badges#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="elements/badges#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>                  
              </ul>
            </li>
            <li><a href="elements/charts" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</a>
              <ul className="hidden"> 
                <li><a href="elements/charts#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="elements/charts#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="elements/charts#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>
                <li><a href="elements/charts#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>
            </li>
            <li><a href="elements/form-fields" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</a></li>
            <li><a href="elements/loaders" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Loaders</a>
              <ul className="hidden"> 
                <li><a href="elements/loaders#types" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Types</a></li>
                <li><a href="elements/loaders#usage" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Usage</a></li>
                <li><a href="elements/loaders#specs" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Specs</a></li>
                <li><a href="elements/loaders#guidance" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Guidance</a></li>
              </ul>              
            </li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto pt-20 w-full pb-5.5">
        <main className="ml-64 pl-16 pr-16 pt-16">
          <section className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:mr-8">
              <blockquote className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
                Elements

                The point is... to live one's life in the full complexity of what
                one is, which is something much darker, more contradictory, more of
                a maelstrom of impulses and passions, of cruelty, ecstacy, and
                madness, than is apparent to the civilized being who glides on the
                surface and fits smoothly into the world.
              </blockquote>

              <cite className="font-bold mt-4 text-right text-xs uppercase block">
                – Thomas Nagel
              </cite>
            </div>

            <figure className="w-2/3 md:w-1/3">
              <img src={dogIllustration} alt="A dog relaxing" />
            </figure>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default ElementsPage;
