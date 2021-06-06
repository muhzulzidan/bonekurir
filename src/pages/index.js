// import  React from "react"
// // import { Link } from "gatsby"
// // import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

// import "../styles/styles.css"

// class IndexPage extends React.Components  { 
  
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {value: ""};
//   //   this.handleChange = this.handleChange.bind(this);
//   // }
//   // handleChange(event) {
//   //   this.setState({value: event.target.value});
//   // }

//   render(){
//   return(
//   <Layout>
//     <Seo title="Home" />
//     <h1>Dapatkan berita ketika sudah kami sudah siap</h1>
//     {/* <form className="form">
//         <input
//           type="text"
//           value={this.state.value}
//           name="email"
//           className="email"
//           placeholder="Your Email Address."
//           onChange={this.handleChange}
//         />
//         <input
//           type="submit"
//           value="Get Notified"
//           className="submit" />
//       </form> */}
//       {/* <StaticImage
//         src="../images/kurir.png"
//         // width={300}
//         // quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Kurir"
//         // className="kurir"
//         // style={{ marginBottom: `1.45rem` }}
//       /> */}

//   </Layout>
// )}}

// export default IndexPage


import React, {useState, } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return(
  <Layout>
  <Seo title="Home" />
  <div className="hr"></div><p>Coming Soon</p>
  <h1>Dapatkan berita ketika sudah kami sudah siap</h1>
        <form className="form">
          <input
            type="text"
            value={value}
            name="email"
            className="email"
            placeholder="Your Email Address."
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Get Notified"
            className="submit" />
        </form> 

        {value}
        <StaticImage
          src="../images/kurir.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Kurir"
          className="kurir"
       /> 
  
   </Layout>
  )}

export default IndexPage