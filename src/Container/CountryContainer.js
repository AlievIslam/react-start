import React, { Component } from 'react';
import Country from '../Component/Country';
import './CountryContainer.css';

class CountryContainer extends Component {
    state = {
    data: []
    }

    function(f){
      f.style.display = 'none';  
    }
    
    componentWillMount = () => {
        fetch('http://restcountries.eu/rest/v2/all')
        .then(responce => responce.json())
        .then(result => this.setState({ data: result }))
        .catch(err => console.log(err));
    }
    
    
    render() {
        return (
            <ul className= 'country-list'>
                {this.state.data.map(item => <Country data={item} />)}
            </ul>
        );
    }
}
export default CountryContainer;