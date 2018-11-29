import React from 'react'

export default class CarInfo extends React.PureComponent {
  render() {
   return (
      <li >
       <div className="car-info"> {this.props.car.name}
            <span className="car-registration">{this.props.car.number}</span>
        </div>
      </li>
    )
  }
}
