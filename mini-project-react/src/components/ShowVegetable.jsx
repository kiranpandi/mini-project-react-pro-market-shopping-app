import React, { Component } from 'react'


export default class ShowVegetable extends Component {


    render() {
        const detail = this.props.imageDetails;
        console.log('show veggie',detail);
        return (
            <div className="show-vegetable">
                
                <div><img src={detail.image}></img></div>
                <div className="image-details">
                    <div className="image-name">{detail.name}</div>
                    <div className="image-name">{detail.description}</div>
                </div>

            </div>
        )
    }
}
