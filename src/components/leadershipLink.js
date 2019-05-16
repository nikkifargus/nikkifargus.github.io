import React from 'react';
import { Link } from "react-router-dom";

const LeadershipLink = props => (
  <div>
    <Link
      to={props.link}
    >
    <p
      className="leadershipLink"
    >
      {props.title}
      </p>
    </Link>
  </div>
);

export default LeadershipLink;
