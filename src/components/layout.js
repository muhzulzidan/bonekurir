import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { StaticImage } from "gatsby-plugin-image"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="footer">
          <a href="https://www.instagram.com/bonekurirapp/">
            <StaticImage
              src="../images/ig.svg"
              width={30}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "SVG  "]}
              alt="instagram"
              className="instagram"
            />
          </a>
          
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
