import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cityName: 'Surat'
        }
    }
    changeCity = () => {
        this.setState({
            cityName: 'Gandhinagar'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button onClick = { () => this.changeCity()}>Change City</button>
            </div>
        );
    }
}

export default City;