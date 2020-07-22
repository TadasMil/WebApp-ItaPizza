import React, { Component } from 'react'
import NavBarLinks from './NavBarLinks'

export default class NavBar extends Component {
    state = {
        backgroundColor: 'nav-bar'

    };
 
    componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent)
    }

    listenScrollEvent = event => {
      if (window.scrollY < 450) {
       this.setState({
         backgroundColor: 'nav-bar'
       })
       console.log('scrolled')
      } else if (window.scrollY > 500) {
        this.setState({
          backgroundColor: 'nav-bar-scrolled'
        })
      }
    };

    componentWillUnmount = () => {
      window.removeEventListener('scroll', this.listenScrollEvent);
    }
  
    render() {
        return (
            <nav className={this.state.backgroundColor}>
                <NavBarLinks />       
            </nav>
        )
    }
}

