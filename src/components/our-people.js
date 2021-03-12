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
        <p className="text-orange"> HUMAN CAPITAL REPORT </p>
        <p className="text-orange"> PORTRAYING YOUR HUMAN CAPITAL QUALITY </p>

      </div>
      <div className="col-lg-5 col-sm-12" style={{ margin: 'auto 0'}}>
        <p> Reviews of workforce quality before scale-up, transformation, merger or aquisition. Annual reviews of workforce strategy </p>
        <p> We help clients portray the quality of their Human Capital: </p>
        <p> - During strategic planning </p>
        <p> - Before transformation </p>
        <p> - Before mergers and acquisitions </p>
        <p> - Visit <a href="http://www.ourpeoplereview.com">ourpeoplereview.com</a> for more information</p>
      </div>
    </div>
  </div>
);

export default Index;
