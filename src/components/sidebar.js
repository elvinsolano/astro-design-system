import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Sidebar() {
  return ( 
    <aside className="fixed bg-white top-auto h-full border-r border-grey-500 border-solid w-64">
      <nav>
        <ul className="">
          <li><div className="block text-white uppercase text-sm pl-12 py-2 w-full bg-grey-300">Section 1 Header</div></li>
          <li><a href="#" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" >Section 1</a></li>
          <li><a href="#" className="block text-sm text-black pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Section 2 Active</a>
            <ul className="">
              <li><a href="#" className="block text-sm text-grey-400 pl-16 py-2 w-full bg-grey-200 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Subsection 1 Active</a></li>
              <li><a href="#" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Subsection 2</a></li>
              <li><a href="#" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Subsection 3</a></li>
              <li><a href="#" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold" activeClassName="active-link">Subsection 4</a></li>
            </ul>
          </li>
          <li><a href="#" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Section 3</a></li>
          <li><a href="#" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Section 4</a></li>
        </ul>
        <ul className="">
          <li><div className="block text-white uppercase text-sm pl-12 py-2 w-full bg-grey-300">Section 2 Header</div></li>
          <li><a href="#" className="block text-sm text-black pl-12 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Section 1</a></li>
          <li><a href="#" className="block text-sm text-black pl-12 py-2 w-full active bg-grey-700 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Section 2 Active</a>
            <ul className="">
              <li><a href="#" className="block text-sm text-grey-400 pl-16 py-2 w-full bg-grey-200 font-semibold hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Subsection 1 Active</a></li>
              <li><a href="#" className="block text-sm text-grey-400 pl-16 py-2 w-full hover:bg-grey-100 focus:bg-grey-800 focus:font-semibold">Subsection 2</a></li> 
            </ul>
          </li>
        </ul>        
      </nav>
    </aside>
  );
} 

export default Sidebar;
