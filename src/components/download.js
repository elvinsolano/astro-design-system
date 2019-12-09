import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Download() {
  return ( 
  <div className="flex items-center">
    <p className="uppercase text-grey-400 text-xs mr-4">Updated 12/05/19</p>
    <a href="https://drive.google.com/open?id=1P7pbVb12su1NdGuxTSO_BzuxTLNzwZox" target="_blank" className="bg-white text-red-600 text-sm as-type-medium border rounded-full border-red-600 border-solid px-4 py-2"> 
      <svg className="fill-current inline-block mr-1 cursor-pointer" width="13" height="10" viewBox="0 0 23 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="#e0301e" d="M11.636 26.182l-11.636-14.545h23.273z"></path>
        <path fill="#e0301e" d="M5.818 0h11.636v14.545h-11.636v-14.545z"></path>
        <path fill="#e0301e" d="M0 29.091h23.273v2.909h-23.273v-2.909z"></path>  
      </svg> 
      Sketch File
    </a>
  </div> 
  );
} 

export default Download;
