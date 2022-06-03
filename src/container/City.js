import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CityName: 'Surat'
        }
    }
    ChangeCity = () => {
        this.setState({
            CityName: 'Gandhinagar'
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.CityName}</p>
                <button onClick = { () => this.ChangeCity()}>Change City</button>
            </div>
        );
    }
}

export default City;