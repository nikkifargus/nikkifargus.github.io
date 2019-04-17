import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      ACHIEVER
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
          <td>Setting objectives</td>
          <td></td>
        </tr>
        <tr>
          <td>Delegating work</td>
          <td>Giving constructive feedback</td>
        </tr>
        <tr>
          <td>Creating team performance indicators</td>
          <td></td>
        </tr>
        <tr>
          <td>Ensuring follow up and feedback</td>
          <td>Managing stress</td>
        </tr>
        <tr>
          <td>Producing under pressure</td>
          <td>Managing stress</td>
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
