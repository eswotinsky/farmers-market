import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return (
    <div className="day">
      <style jsx>{`
          div.day{
            border: 5px solid black;
            background-color: ghostwhite;
            display: inline-block;
            margin: 5%;
            height: 150px;
            width: 150px;
            padding: 5%;
          }
          h3 {
            font-size: 2vw;
            color: blue;
            font-family: 'Gamja Flower';
          }
        `}</style>
      <h3>{props.dayOfWeek}</h3>
      <hr/>
      <p><em>{props.location} - booth {props.booth}</em></p>
      <hr/>
      <p>{props.hours}</p>
    </div>
  );
}

Day.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired
};

export default Day;
