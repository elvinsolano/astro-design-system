import React, { useState } from "react"; 
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function DesignPage() {
  const [isExpandedLogo, toggleExpansionLogo] = useState(true);
  const [isExpandedColor, toggleExpansionColor] = useState(false);
  const [isExpandedTypography, toggleExpansionTypography] = useState(false);
  const [isExpandedPictograms, toggleExpansionPictograms] = useState(false);

  return (
    <Layout>
      <SEO
        title="Design"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
 
      <aside className="fixed overflow-y-auto pt-20 bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
        <nav>
          <ul className=""> 
            <li><Link to="design/logo" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Logo</Link></li>
            <li><Link to="design/color" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Color</Link></li>
            <li><Link to="design/typography" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Typography</Link></li>
            <li><Link to="design/icons" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Icons</Link></li>
            <li><Link to="design/pictograms" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Pictograms</Link></li>
            <li><Link to="design/screen-anatomy" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Screen Anatomy</Link></li>
            <li><Link to="design/motion" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Motion</Link></li>
            <li><Link to="design/sound" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Sound</Link></li>
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

export default DesignPage;
