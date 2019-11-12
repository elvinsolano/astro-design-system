import React, { useState } from "react"; 

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import dogIllustration from "../../images/dog-illustration.svg";
import { Row, Col, Button } from 'tailwind-react-ui';
import Heading from '../../components/atoms/heading';

function ApplicationsDiscoverPage() { 

  return (
    <Layout>
      <SEO
        title="Design"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
 
      <aside className="fixed overflow-y-auto pt-20 bg-white top-auto h-full border-r border-grey-500 border-solid">
        <nav>
        <ul className="">  
            <li><a href="story-examples" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Story Examples</a></li> 
            <li><a href="menu-navigation" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Menu/Navigation</a></li>
            <li><a href="nudges" className="block text-sm text-grey-400 pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Nudges</a></li>
            <li><a href="discover" className="block text-sm text-grey-400 pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Discover</a></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto pt-20 w-full pb-5.5">
        <main className=" pl-16 pr-16 pt-16">
          <section className="">

            <div className="flex justify-between rounded py-1 px-3 bg-grey-100 mb-16">
              <Heading level="2" className="gw-h1">Discover</Heading>
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

export default ApplicationsDiscoverPage;
