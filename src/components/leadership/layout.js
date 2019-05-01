import React from 'react';
import {
  Link,
} from "react-router-dom";

const Layout = props => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      {props.title}
    </h4>
    <div>

      <div className="col-lg-5 col-sm-12" style={{ margin: 'auto 0'}}>
        <ul>
        {props.list && props.list.map(list => <li>{list}</li>)}
        </ul>
      </div>
    </div>
    <Link style={{ justifyContent: 'flex-end'}} to={props.to}>
      <h5 style={{
        color: `#565347`,
      }}>
          back
      </h5>
    </Link>

  </div>
);

export default Layout;
