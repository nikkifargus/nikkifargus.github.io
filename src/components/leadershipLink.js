import React from 'react';
import { Link } from "react-router-dom";

const LeadershipLink = props => (
  <div style={{
  }}>
    <Link
      to={props.link}
    >
    <p
      style={{
        textAlign: 'center',
        marginTop: '1rem',
        marginBottom: '1rem',
        padding: '1rem',
        border: '2px solid #565347'
      }}
    >
      {props.title}
      </p>
    </Link>
  </div>
);

export default LeadershipLink;
