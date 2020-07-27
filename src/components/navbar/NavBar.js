import React, { Component } from 'react'
import NavBarLinks from './NavBarLinks'
import NavBarMobile from './NavBarMobile'

export default class NavBar extends Component {
    state = {
        backgroundColor: 'nav-bar',
        layoutMode: this.getLayoutMode(),
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
      if (window.scrollY < 250) {
       this.setState({
         backgroundColor: '#ffffff0a'
       })
      } else if (window.scrollY > 275) {
        this.setState({
          backgroundColor: '#000000'
        })
      }
    };

   
    render() {
        return (
        
              <>
                {
                this.state.layoutMode === 'desktop' ? <NavBarLinks styling={this.state.backgroundColor}/> : <NavBarMobile  styling={this.state.backgroundColor}/>
                }
              </>

  
      )
       
    }
}

