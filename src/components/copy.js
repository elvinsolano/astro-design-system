import React, { Component, useState } from "react"; 
import { Link } from "gatsby";
import PropTypes from "prop-types"; 
import {CopyToClipboard} from 'react-copy-to-clipboard'; 

class Copy extends Component { 
  constructor(){
    super();
    this.state = {
      Canonical: window.location.href,
      value: 'some\ntext', 
      copied: false
    }
  } 
  onChange = ({target: {value}}) => {
    this.setState({value, copied: false});
  };  
  onCopy = () => {
    this.setState({copied: true});
  };

  render() { 
    if(this.state.copied==true){
      setTimeout(function(){
        this.setState({copied:false});
      }.bind(this),1000);
    }  
    const url = "url";
    return (  
      <span>
        <CopyToClipboard onCopy={this.onCopy} text={window.location.href + '#' + this.props.id + '-anchor'}>
          <svg className="fill-current inline-block ml-2 cursor-pointer" width="13" height="13" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2D2D2D" d="M6.042 12.738c0.674-0.602 1.7-0.568 2.332 0.077s0.648 1.676 0.036 2.341v0l-3.298 3.309c-2.032 2.36-1.899 5.894 0.304 8.094s5.727 2.315 8.069 0.264v0l3.298-3.309c0.666-0.668 1.745-0.668 2.41 0s0.666 1.751 0 2.418v0l-3.341 3.352c-1.739 1.742-4.097 2.719-6.554 2.715-3.767-0.002-7.16-2.283-8.596-5.777s-0.63-7.511 2.041-10.176v0zM19.472 10.306c0.614-0.614 1.608-0.614 2.222 0s0.614 1.608 0 2.222v0l-9.16 9.16c-0.293 0.298-0.693 0.465-1.111 0.465s-0.818-0.168-1.111-0.465c-0.298-0.293-0.465-0.693-0.465-1.111s0.168-0.818 0.465-1.111v0zM15.573 2.81c3.749-3.746 9.825-3.746 13.574 0 1.818 1.796 2.845 4.244 2.853 6.8s-1.003 5.010-2.81 6.818v0l-2.75 2.75c-0.444 0.444-1.092 0.618-1.699 0.455s-1.081-0.637-1.244-1.244c-0.163-0.607 0.011-1.255 0.455-1.699v0l2.75-2.75c1.146-1.146 1.79-2.7 1.79-4.321s-0.644-3.175-1.79-4.321c-1.146-1.146-2.7-1.79-4.321-1.79s-3.175 0.644-4.321 1.79v0l-2.75 2.75c-0.687 0.687-1.801 0.687-2.488 0s-0.687-1.801 0-2.488v0z"></path>
          </svg>            
        </CopyToClipboard>
        <section className="as-tooltip-wrapper">{this.state.copied ? <span className="as-tooltip"><svg className="fill-current cursor-pointer inline-block align-bottom mr-2" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#4ead58" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path><path fill="#fff" d="M9.324 15.841l3.102 2.998 10.266-9.95 2.197 2.144-12.463 12.078-5.315-5.151z"></path></svg> URL Copied</span> : null}</section>  
      </span>
    );
  }
}

export default Copy;
 
