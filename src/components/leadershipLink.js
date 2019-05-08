import React from 'react';
import { Link } from "react-router-dom";

const LeadershipLink = props => (
  <div style={{
    padding: '0.5rem',
  }}>
    <Link
      to={props.link}
    >
    <p style={{
      padding: '0.5rem',
      width: '600px',
      backgroundColor:'purple',
      color: 'white'
    }}>
      {props.title.toUpperCase()}
      </p>
    </Link>
  </div>
);

export default LeadershipLink;
