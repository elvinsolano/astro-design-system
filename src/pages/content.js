import React from 'react';
import { Row, Col, Button } from 'tailwind-react-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Heading from '../components/atoms/heading';

function ContentPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`ServCo`, `GenWorth`]}
      />
 
      <aside className="fixed overflow-y-auto pt-20 bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className="">  
            <li><a href="content/intro" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Intro</a></li>
            <li><a href="content/guidelines" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Guidelines</a></li>
            <li><a href="content/voice-tone" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Voice and Tone</a></li>
            <li><a href="content/vocabulary" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Vocabulary (do's/don't)</a></li>
          </ul>
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto pt-20 w-full pb-5.5">  
        <main className="ml-64 pl-16 pr-16 pt-16">
          <section className="">

            <div className="flex justify-between rounded py-1 px-3 bg-grey-100 mb-16">
              <Heading level="2" className="gw-h1">Headline 1</Heading>
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

export default ContentPage;

