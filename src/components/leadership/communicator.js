import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
    Communicator Options
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
          <td>A communications model</td>
          <td></td>
        </tr>
        <tr>
          <td>Communication styles</td>
          <td>Improving personal assertiveness</td>
        </tr>
        <tr>
          <td>Communicating in diversity</td>
          <td></td>
        </tr>
        <tr>
          <td>Key communication skills</td>
          <td></td>
        </tr>
        <tr>
          <td>Situational communications</td>
          <td>Managing meetings <br/> Report writing skills <br/> Presentation skills <br/> Influencing skills <br/> (See also Problem Solver linked modules)</td>
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
