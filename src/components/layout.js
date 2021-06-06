import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"
import "../styles/styles.css"
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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="footer">
          <StaticImage
            src="../images/ig.svg"
            width={30}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF", "SVG  "]}
            alt="instagram"
            className="instagram"
          />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
