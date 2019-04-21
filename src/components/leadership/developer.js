import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      Mentor
    </h4>
    <div>
      <ul>
        <li>You should devote time to developing your people.Be aware of the four learning styles-doing; watching; thinking; experimenting.</li>
        <li>Plans for developing people can be made either during the annual (appraisal) interview, or at any mutually agreed time.</li>
        <li>Development can be done partly by identifying suitable training courses</li>
        <li>More importantly, you should develop people on-the-job. This is often the most effective approach if done well. Look out for opportunities.</li>
        <li>Delegating, consulting and coaching are all relevant techniques.</li>
        <li>Make sure you have created your own personal development plan and be on the lookout for your maximising your own opportunities for learning.
        </li>
        <li>Continually review your personal network and use it to make sure you remain up to date with technical and organisational developments.</li>
      </ul>
    </div>
    <Link style={{ justifyContent: 'flex-end'}} to="/leadership-skills/">
    <h5 style={{
      color: `#565347`,
    }}>
        back
    </h5></Link>

  </div>
);

export default Index;
