// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

    createArray = (event) => {
        const array = [event.clientX , event.clientY]
        this.props.onReceiveCoordinates(array)
    }

    render(props){
        return (
            <div>
                <button onClick={this.createArray}></button>
            </div>

        )

    }



}