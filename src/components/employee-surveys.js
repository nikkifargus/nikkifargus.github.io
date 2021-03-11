import React from 'react';
import logo from '../images/OPR.png'

const Index = () => (
  <div className="">
    <div className="row">
      <div
        className="col-lg-4 offset-lg-2 col-sm-12"
        style={{textAlign: 'center'}}
      >
        <img alt="logo" style={{width: '60%'}} src={logo}/>
        <p className="text-orange"> SCALEUP-GUIDE ENHANCING YOUR LEADERSHIP </p>

      </div>
      <div className="col-lg-5 col-sm-12" style={{ margin: 'auto 0'}}>
        <p> Our approach to enabling you to improve your scaleup leadership involves: </p>
        <p> - Your judgement on the importance, in your organisation, of 12 leadership activities. </p>
        <p> -  Your judgement on how well you are carrying out those activities. </p>
        <p> - And provides you with: A report indicating your priorities for improved leadership. </p>
        <p> - Vist <a href="https://www.scaleup-leader.guide/" >Scaleup-Leader.Guide</a> for more information</p>
      </div>
    </div>
  </div>
);

export default Index;
