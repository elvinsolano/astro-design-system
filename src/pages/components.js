import React, { useState } from "react";
import {Link} from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  const [isExpandedCardsSingleItem, toggleExpansionCardsSingleItem] = useState(true);   
  return (
    <Layout>
      <SEO
        title="Components"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      /> 
      
      <aside className="fixed overflow-y-auto as-nav bg-white top-auto h-full border-r border-grey-500 border-solid">
        <nav>
          <ul className="">
            <li><div className="block text-white uppercase text-sm w-full bg-grey-300">Cards</div></li> 
            <li><Link to="components/cards/single-item" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Single Item</Link></li>
            <li><Link to="components/cards/single-item-grouping" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Single item with Grouping</Link></li>
            <li><Link to="components/cards/list" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">List</Link></li>
            <li><Link to="components/cards/grouped-lists" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Grouped Lists</Link></li>
            <li><Link to="components/cards/two-column" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Two Columns</Link></li>
            <li><Link to="components/cards/mail" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Mail</Link></li>
            <li><Link to="components/cards/profile" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Profile</Link></li>
            <li><Link to="components/cards/information" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Information</Link></li>
            <li><Link to="components/cards/progress-bar" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Progress Bar</Link></li>
            <li><Link to="components/cards/highlighted-item-detail" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Highlighted Item &amp; Detail</Link></li>
            <li><Link to="components/cards/tasks" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Tasks</Link></li>
            <li><Link to="components/cards/circle-graph" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Circle Graph</Link></li>
            <li><Link to="components/cards/profile-list" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Profile List</Link></li>
            <li><Link to="components/cards/sliding-cards" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Sliding Cards***</Link></li>
          </ul>
          <ul className="">
            <li><div className="block text-white uppercase text-sm w-full bg-grey-300">Overlay</div></li>
            <li><Link to="components/overlays/single-item" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Single Item</Link></li>
            <li><Link to="components/overlays/single-item-grouping" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Single item with Grouping</Link></li>
            <li><Link to="components/overlays/list" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">List</Link></li>
            <li><Link to="components/overlays/grouped-lists" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Grouped Lists</Link></li>
            <li><Link to="components/overlays/two-columns" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Two Columns</Link></li>
            <li><Link to="components/overlays/mail" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Mail</Link></li>
            <li><Link to="components/overlays/profile" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Profile</Link></li>
            <li><Link to="components/overlays/information" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Information</Link></li>
            <li><Link to="components/overlays/progress-bar" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Progress Bar</Link></li>
            <li><Link to="components/overlays/highlighted-item-detail" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Highlighted Item &amp; Detail</Link></li>
            <li><Link to="components/overlays/tasks" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Tasks</Link></li>
            <li><Link to="components/overlays/circle-graph" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Circle Graph</Link></li>
            <li><Link to="components/overlays/profile-list" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Profile List</Link></li>
            <li><Link to="components/overlays/sliding-cards" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Sliding Cards***</Link></li>
          </ul> 
          <ul className="">
            <li><div className="block text-white uppercase text-sm w-full bg-grey-300">Popovers</div></li>
            <li><Link to="components/popovers/single-item" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Single Item</Link></li>
            <li><Link to="components/popovers/single-item-grouping" className="block text-sm text-grey-400 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Single item with Grouping</Link></li> 
          </ul>                   
        </nav>
      </aside>
      <div className="flex flex-col flex-1 mx-auto as-body w-full pb-5.5">  
        <main className=" pl-16 pr-16 pt-16">
          <section>
            <form className="mx-auto md:w-1/2">
              <p className="leading-loose mb-8">
                Here is an example of a form built using Tailwind. More form
                examples are available{" "}
                <a
                  href="https://tailwindcss.com/docs/examples/forms"
                  className="font-bold no-underline text-gray-700"
                >
                  here
                </a>
                .
              </p>

              <label
                className="block font-bold mb-2 text-xs uppercase"
                htmlFor="first-name"
              >
                First Name
              </label>

              <input
                className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
                id="first-name"
                type="text"
                placeholder="Bill"
              />

              <label
                className="block font-bold mb-2 text-xs uppercase"
                htmlFor="last-name"
              >
                Last Name
              </label>

              <input
                className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
                id="last-name"
                type="text"
                placeholder="Murray"
              />

              <label
                className="block font-bold mb-2 text-xs uppercase"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
                id="message"
                placeholder="Say something..."
                rows="8"
              />

              <button className="border-b-4 border-gray-800 hover:border-gray-700 bg-gray-700 hover:bg-gray-600 font-bold px-4 py-2 rounded text-sm text-white">
                Submit
              </button>
            </form>
          </section>
        </main>
      </div> 
    </Layout>
  );
}

export default ContactPage;
