import React from 'react'
import './Profile.css'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="">JL</span>
        </div>
        <div className="content">
            <div className="inner">
                <h2>Josh Leong</h2>
                <img src="https://josh.leo.ng/profile.jpg"/>
                <h3>Software Developer</h3>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Hello!</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('resume')}}>Resume</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
