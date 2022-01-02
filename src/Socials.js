import React, { Component } from 'react';

class Socials extends Component {
    render () {
        return (
            <div className={'socialBlock'}>
                <img className={'socialLogo'} src={this.props.socialLogo} alt="#"/>
                {/*<div className={'socialLink'}>Мы {this.props.socialName}</div>*/}
            </div>
        );
    }
}

export default Socials;