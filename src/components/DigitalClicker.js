// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    click = () => {
        this.setState(previousState => {
            return {
            timesClicked: previousState.timesClicked + 1
        }})
    }



    render(){
        return(
            <button onClick={this.click}>{this.state.timesClicked}</button>
        )
    }
}