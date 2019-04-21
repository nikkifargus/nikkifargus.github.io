import React from 'react';
import {
  Link,
} from "react-router-dom";

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      ACHIEVER - most important.
    </h4>
    <div>
      <ul>
      <li>Manageperformancethroughagreeing aims,regularreviewandappraisal. The
objectivessetshould linkwitheachotherandthoseofyourmanager. Make
time to agree aims - good ones do not happen automatically.</li>
      <li>When agreeing aims consider the motivation, morale and competency of team members-somemaybeabletocreatea firstdraft themselves.
</li>
      <li>Objectives should be SMART: Specific, Measurable (or verifiable), Attainable, Relevant (to your overall team objective) and Timed.</li>
      <li>Delegate work by agreeing suitable objectives - consider the need for coaching.</li>
      <li> Two insurance policies: 'plan for action,but check with me before acting'or 'plan and act,but let me know what you have done'.</li>
      <li> It is always necessary to agree a system to 'follow up' and provide feedback.</li>
      <li></li>
      </ul>
    </div>    <Link style={{ justifyContent: 'flex-end'}} to="/leadership-skills/">
    <h5 style={{
      color: `#565347`,
    }}>
        back
    </h5></Link>

  </div>
);

export default Index;
