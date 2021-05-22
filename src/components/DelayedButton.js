// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist();
        const delaying = this.props.delay

        window.setTimeout(() => {this.props.onDelayedClick(event)}, delaying)}

    render(props){
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )

    }



}