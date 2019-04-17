import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      DEVELOPER
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
          <td>Analysing team members' development needs</td>
          <td></td>
        </tr>
        <tr>
          <td>Approaches to developing your people</td>
          <td></td>
        </tr>
        <tr>
          <td>The skills of coaching and mentoring</td>
          <td>Coaching skills</td>
        </tr>
        <tr>
          <td>Managing your own development</td>
          <td>Psychological assessment and career goals</td>
        </tr>
        <tr>
          <td>Consolidating learning from this programme</td>
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
