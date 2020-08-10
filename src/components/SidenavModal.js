import React, {Component} from 'react';
import { render } from 'react-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import bgbarra from "../images/3253.jpg";           


class SidenavModal extends Component{

                               
                    componentDidMount(){
                        
                        document.addEventListener('DOMContentLoaded', function() {
                            var elems = document.querySelectorAll('.sidenav');
                            var instances = M.Sidenav.init(elems, {});
                                 });
                      
                           }
        render(){

            return(

                <div>
                        <nav className="white darken-4"> 
                            <div className="nav-wrapper ">
                            <a href="#" class="brand-logo center cyan-text darken-4">Administrator</a>
                            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons cyan-text"> dehaze </i></a> 
                                <a href="#" className="brand-logo"></a>
                                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><a href="sass.html">Sass</a></li>
                                    <li><a href="badges.html">Components</a></li>
                                    <li><a href="collapsible.html">JavaScript</a></li>
                                    </ul>
                            </div>
                        </nav>  
     <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
      <img src={bgbarra} ></img>     
      </div>
      <a href="#name"><span className="white-text name">Juan Perez</span></a>
      <a href="#email"><span className="white-text email">JuanPerez@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i className="material-icons">cloud</i>Primer link con Icono</a></li>
    <li><a href="#!">Segundo Link</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><a className="waves-effect" href="#!">Tercer link</a></li>
  </ul>
 
                      </div>
            );

        }

    }
    export default SidenavModal;
    
