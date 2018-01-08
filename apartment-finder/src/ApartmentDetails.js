import React, { Component } from 'react'
import apartments from './store/Apartments'
import {Link} from 'react-router-dom'

class ApartmentDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: apartments
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({apartmentId: id})
    let apartment = this.state.apartments.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(apartment){
      this.setState({apartment: apartment})
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.apartments.name}</h2>
      </div>
    );
  }
}

export default ApartmentDetail;
