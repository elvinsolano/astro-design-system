import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { TailwindThemeProvider } from 'tailwind-react-ui';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-black fixed w-full z-50 as-header">
      <nav>
        <div className="flex flex-wrap items-center justify-between as-header-link-wrapper">
          <Link to="/" className="flex self-start no-underline text-white">
            <svg
              className="fill-current mr-2"
              width="103"
              height="20"
              viewBox="0 0 165 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#fff" d="M48.972 0c8.177 0 9.686 6.286 9.741 8.781l0.002 0.142v2.029h-4.897v-2.029c0-2.479-1.551-4.462-4.849-4.462-3.155 0-5.235 1.713-5.235 4.281 0 2.854 2.689 4.067 5.682 5.13l0.669 0.234c4.461 1.533 9.116 3.245 9.116 9.555 0 3.967-2.227 8.339-9.794 8.339-10.451 0-10.982-7.286-11.005-8.953l-0.001-2.18h4.851v2.028c0 2.479 1.6 4.643 6.158 4.643 4.315 0 4.897-2.614 4.897-3.877 0-2.685-2.606-3.847-5.548-4.904l-0.658-0.234c-4.461-1.622-9.26-3.335-9.26-9.781 0-2.433 1.503-8.743 10.132-8.743zM92.8 0v4.525h-7.984v27.475h-4.832v-27.475h-7.984v-4.525h20.8zM154.331 0c9.234 0 10.469 7.209 10.469 16s-1.234 16-10.469 16c-9.083 0-10.293-6.974-10.33-15.569v-0.862c0.037-8.595 1.247-15.569 10.33-15.569zM13.494 0l8.906 32h-4.631l-6.592-24.653-6.546 24.653h-4.632l8.906-32h4.587zM118.304 0c9.053 0 10.47 6.125 10.47 10.925 0.001 3.611-0.946 8.827-5.508 9.394v0l6.334 11.682h-5.169l-7.888-14.662 1.761-0.055c5.12-0.183 5.898-2.228 5.853-6.354-0.040-3.52-0.732-6.399-5.853-6.399v0h-4.886v27.465h-4.618v-31.996zM154.331 4.462c-5.211 0-5.714 4.55-5.714 11.535 0 7.029 0.503 11.536 5.714 11.536 5.258 0 5.851-4.506 5.851-11.536 0-6.985-0.594-11.535-5.851-11.535z"></path>
            </svg>   
          </Link>

          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto`}
          >
            <div className="text-sm text-grey-600">
              {/* <Link
                to="/content"
                className="as-header-link block md:inline-block mt-6 md:mt-0 no-underline"
                activeClassName="as-header-link-active text-white border-b-5 border-red-600 border-solid as-type-medium"
                partiallyActive="true"
              >
                Content
              </Link> */}

              <Link
                to="/design/logo"
                className="as-header-link block md:inline-block mt-6 md:mt-0 no-underline hover:text-white"
                activeClassName="as-header-link-active text-white border-b-5 border-red-600 border-solid as-type-medium"
                partiallyActive="true"
              >
                Design
              </Link>

              <Link
                to="/elements/buttons"
                className="as-header-link block md:inline-block mt-6 md:mt-0 no-underline hover:text-white"
                activeClassName="as-header-link-active text-white border-b-5 border-red-600 border-solid as-type-medium"
                partiallyActive="true"
              >
                Elements
              </Link>

              <Link
                to="/components/cards/single-item"
                className="as-header-link block md:inline-block mt-6 md:mt-0 no-underline hover:text-white"
                activeClassName="as-header-link-active text-white border-b-5 border-red-600 border-solid as-type-medium"
                partiallyActive="true"
              >
                Components
              </Link>

              {/* <Link
                to="/applications"
                className="as-header-link block md:inline-block mt-6 md:mt-0 no-underline"
                activeClassName="as-header-link-active text-white border-b-5 border-red-600 border-solid as-type-medium"
                partiallyActive="true"
              >
                Applications
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
