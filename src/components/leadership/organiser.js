import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      ORGANISER
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
          <td>First steps when moving jobs</td>
          <td></td>
        </tr>
        <tr>
          <td>Self organisation</td>
          <td></td>
        </tr>
        <tr>
          <td>Appointing team members</td>
          <td>Selection methods</td>
        </tr>
        <tr>
          <td>Defining work procedures</td>
          <td>Identifying and mapping business processes (for senior managers)</td>
        </tr>
        <tr>
          <td>Designing jobs</td>
          <td></td>
        </tr>
        <tr>
          <td>Organising the physical environment</td>
          <td></td>
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
