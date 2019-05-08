import React from 'react';
import Layout from './layout'
import image from '../../images/LAT/problem.png'

const Index = () => (
  <Layout
    title="PROBLEM SOLVER AND DECIDER OPTIONS"
    image={image}
    list={[
      'There are correct and incorrect times to consult. Make sure you consult when you need the support of your team members – e.g. to make a change',
      'Even when you do consult you should retain the right to decide - if you decide to do something against the views of your people, be prepared to explain why.',
      'ACE thinking: Know when to use Analyse, Create and Evaluate',
      'Searchforproblems:definetheproblem-gatherdata-analysethe data- generateoptions-choosethebestoption. Thenimplementandmonitor.',
      'Managers often need to make quick decisions using incomplete information, but where possible use a systematic decision-making process',
      'Choose your approach to resolving disagreement wisely: avoid, confront, negotiate or accommodate.',
    ]}
    to='/leadership-skills/'
  />
);

export default Index;
