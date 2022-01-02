import React, { Component } from 'react';
import './styles/repertoireStyle.css'

class Repertoire extends Component {
    render () {
        return (
            <div className={'repertoire'}>
                <h1>Наш репертуар</h1>
                <div className={'songs'}>
                    <div className={'song'}>Song</div>
                    <div className={'song'}>Song</div>
                    <div className={'song'}>Song</div>
                    <div className={'song'}>Song</div>
                    <div className={'song'}>Song</div>
                    <div className={'song'}>Song</div>
                    <div className={'song'}>Song</div>
                    <div className={'song'}>Song</div>
                </div>
            </div>
        );
    }
}

export default Repertoire;