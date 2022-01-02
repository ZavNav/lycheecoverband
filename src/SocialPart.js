import React, { Component } from 'react';
import Socials from "./Socials";
import inst from './images/instagram.png'
import vk from './images/vkontakte.png'
import './styles/SocialPart.css'

class SocialPart extends Component {
    render () {
        return (
            <div className={'socialPart'}>
                <a href="https://vk.com/lychee.cover" target="_blank" rel="noreferrer"><Socials socialLogo={vk} socialName={"во ВКонтакте"}/></a>
                <a href="https://www.instagram.com/lychee.coverband" target="_blank" rel="noreferrer"><Socials socialLogo={inst} socialName={"в Instagram"}/></a>
            </div>
        );
    }
}

export default SocialPart;