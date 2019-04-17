import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      MOTIVATOR
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
          <td>Motivational climate questionnaire</td>
          <td></td>
        </tr>
        <tr>
          <td>Creating a motivational climate</td>
          <td>Your organisation's motivational climate - how to improve it (for senior managers)</td>
        </tr>
        <tr>
          <td>Managers' motivation toolkit</td>
          <td></td>
        </tr>
        <tr>
          <td>Motivating poor performers</td>
          <td></td>
        </tr>
        <tr>
          <td>Choosing a leadership style</td>
          <td>Improving self knowledge (includes emotional intelligence)</td>
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
