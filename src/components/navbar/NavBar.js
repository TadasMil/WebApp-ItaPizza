import React, { Component } from 'react'
import NavBarLinks from './NavBarLinks'
import NavBarMobile from './NavBarMobile'

export default class NavBar extends Component {
    state = {
        backgroundColor: 'nav-bar',
        layoutMode: this.getLayoutMode()
    };
 
    componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent)
      window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount = () => {
      window.removeEventListener('scroll', this.listenScrollEvent);
      window.removeEventListener('resize', this.onResize);
    }

    onResize = ()  => {
      this.setState({
          layoutMode: this.getLayoutMode(),
      });
    }

    getLayoutMode() {
      return window.innerWidth > 800 ?
          'desktop'
          : 'mobile';
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
  
    render() {
        return (
            <nav className={this.state.backgroundColor}>
               {
                 this.state.layoutMode === 'desktop' ? <NavBarLinks /> : <NavBarMobile />
               }       
            </nav>
        )
    }
}

