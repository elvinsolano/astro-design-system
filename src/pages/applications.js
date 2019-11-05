import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function ApplicationsPage() {
  return (
    <Layout>
      <SEO
        title="Applications"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      
      <aside className="fixed overflow-y-auto pt-20 bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className="">  
            <li><a href="applications/story-examples" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Story Examples</a></li> 
            <li><a href="applications/menu-navigation" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Menu/Navigation</a></li>
            <li><a href="applications/nudges" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Nudges</a></li>
            <li><a href="applications/discover" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Discover</a></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto pt-20 w-full pb-5.5">  
        <main className="ml-64 pl-16 pr-16 pt-16">
          <section className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:mr-8">
              <blockquote className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
                Design

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

export default ApplicationsPage;
