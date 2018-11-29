import React from 'react'

import CarInfo from './CarInfo'

export default function CarRegister(props) {
  return (
    <div className="fleet-register">
      <h4>Registered Cars</h4>
      <div className="controls">
        <button onClick={props.onAddCar}>Add car</button>
      </div>
      <ul className="car-list">
      { props.cars.filter(car => car.number ).map((car, index) => (
        <CarInfo car={car} key={index}/>
      )) }
      </ul>
    </div>
  )
}
