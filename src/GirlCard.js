import React, { Component } from 'react';
import './styles/GirlCardStyle.css'

class GirlCard extends Component {
    render () {
        return (
            <div className={'girlCard'}>
                <h1>{this.props.nameAndRole}</h1>
                <div className={'girlBlock'}>
                    <img className={'girlPhoto'} src={this.props.photo} alt="#"/>
                    <h3 className={'girlDescribe'}>{this.props.describe}</h3>
                </div>
            </div>
        );
    }
}

export default GirlCard;