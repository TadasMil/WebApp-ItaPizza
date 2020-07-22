import React, { Component } from 'react'
import NavBarLinks from './NavBarLinks'

export default class NavBar extends Component {
    state = {
        navBackground: "nav-bar"
      };

      componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 1000 ? "nav-bar" : "nav-bar-scrolled";
    
          this.setState({ navBackground: backgroundcolor });
        });
      }

    render() {
        return (
            <nav className={this.state.navBackground}>
                <NavBarLinks/>         
            </nav>
        )
    }
}

