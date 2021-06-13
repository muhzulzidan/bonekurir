import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import addToMailchimp from 'gatsby-plugin-mailchimp'


class IndexPage extends React.Component{

  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }


render(){
  // const [value, setValue] = useState("");
  // const [listFields, setListFields] = useState("diingatkan");


  return(



  <Layout>
  <Seo title="Home" />

      <div className="content">
        <div className="comingSoon">
          <div className="hr"></div><p>Coming Soon</p>
        </div>
        <h1 className="home-h1">Dapatkan berita ketika kami sudah siap</h1>
        <form className="form" onSubmit={this._handleSubmit}>
          <input
            type="email"
            // value={value}
            name="email"
            className="email"
            placeholder="Email Anda"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="ingatkan"
            className="submit" />
        </form>
      </div>
       <div className="images">

        <StaticImage
          src="../images/motor.svg"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF", "SVG"]}
          alt="motor"
          className="motor"
        />
        <StaticImage
          src="../images/kurir.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Kurir"
          className="kurir"
        />
      </div>
  
   </Layout>
  )}}

export default IndexPage