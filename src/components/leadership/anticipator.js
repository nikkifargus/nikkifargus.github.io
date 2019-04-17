import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      ANTICIPATOR
    </h4>
    <table class="table table-bordered table-responsive-sm">
      <thead>
        <tr>
          <th scope="col">Core content</th>
          <th scope="col">Linked modules</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Our changing world</td>
          <td></td>
        </tr>
        <tr>
          <td>Preventing problems</td>
          <td></td>
        </tr>
        <tr>
          <td>Identifying opportunities for improvement</td>
          <td></td>
        </tr>
        <tr>
          <td>Managing change</td>
          <td>Practical change management</td>
        </tr>

      </tbody>
    </table>
    <Link style={{ justifyContent: 'flex-end'}} to="/leadership-skills/">
    <h5 style={{
      color: `#565347`,
    }}>
        back
    </h5></Link>

  </div>
);

export default Index;
