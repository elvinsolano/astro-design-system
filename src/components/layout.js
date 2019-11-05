import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import { TailwindThemeProvider } from 'tailwind-react-ui';

import Header from "./header";
import Sidebar from "./sidebar";

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <TailwindThemeProvider
    theme={{
      brandColors: {
        "primary": "blue-200",
        "secondary": "grey-dark",
        "success": "green",
        "danger": "red",
        "warning": "orange-light",
        "info": "blue-lighter"
      },
      "textColors": {
        "body": "grey-darkest",
        "link": "blue-dark",
        "linkDark": "blue-darker",
        "emphasis": "black",
        "on": {
          "primary": "black",
          "secondary": "white",
          "success": "white",
          "danger": "white",
          "warning": "black",
          "info": "black",
          "dark": "white"
        }
      }
    }}
  >
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header siteTitle={data.site.siteMetadata.title} />

      {/* 
      <div className="flex flex-col flex-1 mx-auto pt-20 w-full pb-5.5">
        <Sidebar />

        <main className="ml-64 pl-16 pr-16 pt-16">
          {children}
        </main>
      </div> 
      */}

      {children}

      {/* <footer className="bg-blue-700">
        <p>Footer</p>
      </footer> */}
    </div>
  </TailwindThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
