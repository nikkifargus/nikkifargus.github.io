import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      ANTICIPATOR
    </h4>
    <div>
      <ul>
        <li>Added value activities help meet customer requirements</li>
        <li>Prevention activities include planning; training; establishing procedures; risk analysisetc. These anticipate and reduce failure activities.</li>
        <li>Inspection activities include audits; electronic monitoring etc.</li>
        <li>Failure activities include accidents, reworking, downtime etc.</li>
        <li>Many failure activities are caused by poor training, poor equipment, poor procedures or too much pressure.</li>
        <li>Continually seek opportunities for improvement. Sources of ideas include your people, your customers and internal audits.</li>
        <li>Manage change where necessary. Identify 'forces' supporting and resisting the proposed change. Set SMART objectives to strengthen the 'supporters' and weaken the 'resistors'.</li>
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
