import React, { useState } from "react"; 

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Heading from '../../components/atoms/heading';

function ElementsFormFieldsPage() { 

  return (
    <Layout>
      <SEO
        title="Element"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
 
      <aside className="fixed overflow-y-auto as-nav bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className="">  
            <li><a href="buttons" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Buttons and CTA's</a></li>
            <li><a href="dividers" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Dividers</a></li>
            <li><a href="alerts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Alerts and Notifications</a></li>
            <li><a href="badges" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Badges</a></li>
            <li><a href="charts" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Charts</a></li>
            <li><a href="form-fields" className="block text-sm text-grey-400 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Form Fields</a></li>
            <li><a href="loaders" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Loaders</a></li>
          </ul> 
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">
        <main className="ml-64 pl-16 pr-16 pt-16">
          <section className="">

            <div className="flex justify-between rounded py-1 px-3 bg-grey-100 mb-16">
              <Heading level="2" className="gw-h1">Form Fields</Heading>
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

export default ElementsFormFieldsPage;
