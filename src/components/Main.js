import React from 'react'
import Link from 'gatsby-link'
import './Profile.css'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

var divStyle = {
  flexDirection: 'row',
  height: '200px',
  width: '200px',
  alignSelf: 'center',
}
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Hello!</h2>
          <span className="image main">
            
          </span>
          <p>
            I live in Denver Colorado, I'm a recent graduate of Galvanize's Full
            Stack Web Development Immersive. HIRE ME! I am currently seeking new
            software developer roles. Check out my{' '}
            <a href="http://josh.leo.ng/blog">Blog</a>, I write about Tech,
            Travel, and sometimes Food!. Also my{' '}
            <a href="http://github.com/leodotng"> Github</a> |{' '}
            <a href="http://www.linkedin.com/in/joshleong">LinkedIN</a>.
          </p>
          <p />
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src="" alt="" />
          </span>
          <p>
            Backpackerpoints is a new travel rewards points platform for
            backpackers to book hostels and tours abroad. Tech used: React,
            Google Maps
            <a href="http://www.backpackerpoints.com">
              http://www.backpackerpoints.com
            </a>
          </p>

          <p>
            Roofstops is a new app to find rooftop bars and patios nearest you!
            Tech used: React Native, Roofstops API, OpenWeatherMaps API, React
            Native Elements
            <br />
            <a href="https://github.com/Roofstops/Roofstops">
              https://github.com/Roofstops/Roofstops
            </a>
          </p>

          <p>
            Langlang.io <a href="https://github.com/leodotng/langlang" />
            helps you learn multiple languages at the same time. Langlang
            translates english words into 9 different languages, and then speaks
            them in the corresponding accent. Furthermore a matching picture is
            provided for added memorization support. Tech used: HTML, CSS,
            Javascript. Translations were Powered by Yandex. Spoken Text to
            Speech Powered by ResponsiveVoiceJS Pixabay Photo API Pixabay Front
            End Framework: Semantic-UI.com
            <br />
            <a href="http://www.langlang.io">http://www.langlang.io</a>
          </p>
          <p>
            For additional projects check{' '}
            <a href="http://josh.leo.ng/projects">
              http://josh.leo.ng/projects
            </a>
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            
          </span>
          <p>
            I am a recent graduate of Galvanize's Full Stack Web Development
            Immersive Program in Denver, CO. I love JavaScript, especially
            front-end frameworks React.js and Vuejs! I also enjoy working with
            APIs, UI/UX, modern typography! I aspire to be a programming Polygot
            in JavaScript, Python, Ruby and Java. I’m currently actively seeking
            new developer opportunities! I can be reached by email josh@leo.ng!
          </p>
          {close}
        </article>

<article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <span className="image main">
            
          </span>
          <p>
            Click <a href="http://josh.leo.ng/Resume-Josh-Leong-SoftwareDeveloper.pdf">here</a> for my most updated Resume!
           
          </p>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

          <a href="http://www.linkedin.com/in/joshleong">
            <h3 className="major">LinkedIN</h3>
          </a>
          <h3 className="major">Email josh@leo.ng</h3>

          <ul className="icons">
            <li>
              <a href="http://twitter.com/leodotng" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="http://facebook.com/leodotng"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/leodotng"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="http://github.com/leodotng" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
