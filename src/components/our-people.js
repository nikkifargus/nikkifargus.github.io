import React from 'react';
import logo from '../images/OPR_Logo.png'

const Index = () => (
  <div className="">
    <div className="row">
      <div
        className="col-lg-4 offset-lg-2 col-sm-12"
        style={{textAlign: 'center'}}
      >
        <img alt="logo" style={{width: '60%'}} src={logo}/>
      </div>
      <div className="col-lg-5 col-sm-12" style={{ margin: 'auto 0'}}>
        <p> We help clients assess the quality of Human Capital: </p>
        <p> - During strategic planning </p>
        <p> - Before transformation </p>
        <p> - Before mergers and acquisitions </p>
        <p> - Vist <a href="http://www.ourpeoplereview.com">ourpeoplereview.com</a> for more information</p>
      </div>
    </div>
  </div>
);

export default Index;
