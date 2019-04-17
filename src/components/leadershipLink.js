import React from 'react';
import { Link } from "react-router-dom";

const LeadershipLink = props => (
  <div style={{
    padding: '0.5rem',
  }}>
    <Link
      to={props.link}
      style={{
        padding: '0.5rem',
        width: '600px',
        backgroundColor:'purple',
      }}
    >
      {props.title.toUpperCase()}
    </Link>
  </div>
);

export default LeadershipLink;
