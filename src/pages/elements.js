import React, { useState } from "react"; 
import { Link } from "gatsby";

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
 
      <aside className="fixed overflow-y-auto as-nav bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className="">  
            <li><Link to="elements/buttons" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</Link></li>
            <li><Link to="elements/dividers" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</Link></li>
            <li><Link to="elements/alerts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Alerts and Notifications</Link></li>
            <li><Link to="elements/badges" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</Link></li>
            <li><Link to="elements/charts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</Link></li>
            <li><Link to="elements/form-fields" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</Link></li>
            <li><Link to="elements/loaders" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Loaders</Link></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
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
