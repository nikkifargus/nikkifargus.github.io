import React from 'react';
import {
  Link,
} from "react-router-dom";

const Layout = props => (
  <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
    <h4 style={{
      color: `#565347`,
    }}>
      {props.title}
    </h4>
    <div>
    <div className="row">
      <div
        className="col-lg-6 col-sm-12"
        style={{textAlign: 'center', justifyContent: 'center',  margin: 'auto 0'}}
      >
        <img alt="logo" style={{width: '100%', paddingBottom: '1rem', paddingTop: '1rem'}} src={props.image}/>
      </div>
      <div className="col-lg-6 col-sm-12" style={{ margin: 'auto 0', justifyContent: 'center'}}>
        <ul style={{ paddingInlineStart : '15px'}}>
        {props.list && props.list.map((list, index) =>
          <li key={index.toString()}>
            <p>
              {list}
            </p>
          </li>)}
        </ul>
      </div>
      </div>
    </div>
    <Link style={{ justifyContent: 'flex-end'}} to={props.to}>
      <p>
          BACK
      </p>
    </Link>

  </div>
);

export default Layout;
