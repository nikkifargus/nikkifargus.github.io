import React from 'react';
import {
  Link,
} from "react-router-dom";
import Layout from './layout'

const Index = () => (
  <Layout
    title="MOTIVATOR"
    list={[
      'You will motivate your people to `achieve`. Use all the personal roles.',
      'Motivators are actions that encourage people to achieve.',
      'Motivators include pride in belonging, understanding of role, establishing friendships; recognition and reward for good work and opportunities to learn.',
      'Satisfiers are actions which provide basic resources: they will not motivate, but a lack of them can de-motivate',
      'Satisfiers include good basic pay, good organisation, good personal safely, enough tools to do the job, decent food etc.',
      'If one of your people is under-achieving there is usually a good reason. Taketimetofindoutwhy.Theremaybeworkorpersonal problems.',
      'Consult your manager if you need to discipline one of your people. There may be significant legal implications.'
    ]}
    to='/leadership-skills/'
  />
);

export default Index;

// <div className="">
//   <h4 style={{
//     color: `#565347`,
//   }}>
//     MOTIVATOR
//   </h4>
//   <div>
//     <ul>
//       <li>You will motivate your people to 'achieve'. Use all the personal roles.</li>
//       <li>Motivators are actions that encourage people to achieve.</li>
//       <li>Motivators include pride in belonging, understanding of role, establishing friendships; recognition and reward for good work and opportunities to learn.
//       </li>
//       <li>Satisfiers are actions which provide basic resources: they will not motivate, but a lack of them can de-motivate</li>
//       <li>Satisfiers include good basic pay, good organisation, good personal safely, enough tools to do the job, decent food etc.</li>
//       <li>If one of your people is under-achieving there is usually a good reason. Taketimetofindoutwhy.Theremaybeworkorpersonal problems.</li>
//       <li>Consult your manager if you need to discipline one of your people. There may be significant legal implications.</li>
//     </ul>
//   </div>
//   <Link style={{ justifyContent: 'flex-end'}} to="/leadership-skills/">
//   <h5 style={{
//     color: `#565347`,
//   }}>
//       back
//   </h5></Link>
//
// </div>
