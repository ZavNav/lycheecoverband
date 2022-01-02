import React, { Component } from 'react';
import {NavLink, Route, Routes, BrowserRouter} from "react-router-dom";
import girls from './images/girlsLogo.jpeg'
import logo from './images/mainLogo.jpg'
import './styles/GirlsLogoStyle.css';
import Repertoire from "./Repertoire";
import Girls from "./Girls";
import Promo from "./Promo";
import Gallery from "./Gallery";
import About from "./About";
import Orgs from "./Orgs";

class Main extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <ul className={"header"}>
                        <li><NavLink to={"/"}><img className={'logo'} src={logo} alt={'#'}/></NavLink></li>
                        <li><NavLink to={"/repertoire"}>Репертуар</NavLink></li>
                        <li><NavLink to={"/promo"}>Промо</NavLink></li>
                        <li><NavLink to={"/gallery"}>Галерея</NavLink></li>
                        <li><NavLink to={"/about"}>О нас</NavLink></li>
                        <li><NavLink to={"/orgs"}>Организаторам</NavLink></li>
                    </ul>
                    <Routes>
                        <Route exact path={'/'} element={<Girls/>}/>
                        <Route path={'/repertoire'} element={<Repertoire/>}/>
                        <Route path={'/promo'} element={<Promo/>}/>
                        <Route path={'/gallery'} element={<Gallery/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/orgs'} element={<Orgs/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;