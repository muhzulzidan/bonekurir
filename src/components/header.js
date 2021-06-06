import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Header = ({ siteTitle }) => (
  <header  >
    <StaticImage
      src="../images/logo.svg"
      formats={["AUTO", "WEBP", "AVIF"]}
      className="logo"
      
      /> 
  </header>
)

export default Header
