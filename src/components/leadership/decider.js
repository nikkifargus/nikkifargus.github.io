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
    <div>
      <ul>
        <li>There are correct and incorrect times to consult. Make sure you consult when you need the support of your team members – e.g. to make a change</li>
        <li>Even when you do consult you should retain the right to decide - if you decide to do something against the views of your people, be prepared to explain why.</li>
        <li>ACE thinking: Know when to use Analyse, Create and Evaluate</li>
        <li>Searchforproblems:definetheproblem-gatherdata-analysethe data- generateoptions-choosethebestoption. Thenimplementandmonitor.</li>
        <li>Managers often need to make quick decisions using incomplete information, but where possible use a systematic decision-making process</li>
        <li>Choose your approach to resolving disagreement wisely: avoid, confront, negotiate or accommodate.</li>
        <li></li>
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
