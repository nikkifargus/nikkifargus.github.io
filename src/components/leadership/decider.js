import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      Problem Solver and Decider options
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
          <td>The problem solving process</td>
          <td>Creative problem solving</td>
        </tr>
        <tr>
          <td>When and how to consult others</td>
          <td></td>
        </tr>
        <tr>
          <td>Thinking differently - thinking style questionnaire</td>
          <td></td>
        </tr>
        <tr>
          <td>Tools for problem solving and decision making</td>
          <td>Using key problem solving tools</td>
        </tr>
        <tr>
          <td>Resolving disagreement</td>
          <td>Negotiating skills</td>
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
