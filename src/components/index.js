import React from 'react';
import logo from '../images/fcp.png'

const Index = () => (
    <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4 offset-lg-4 col-sm-12">
        <img style={{ width: '100%'}} alt="logo" src={logo}/>
      </div>
    </div>
    <div style={{color: '#565347', textAlign: 'center'}}>
      <div> Managing Motivation in Business </div>
      <div> The Fargus Consulting Partnership (FCP) is a family business. We specialise in measuring and improving motivation in business. Our approach is detailed in our Executive Briefing entitled Measuring and Improving Employee Motivation available <a href="https://books.google.co.uk/books/about/Measuring_and_Improving_Employee_Motivat.html?id=-0VYAAAAYAAJ&redir_esc=y">here</a>. </div>
    </div>
    </div>
);

export default Index;
