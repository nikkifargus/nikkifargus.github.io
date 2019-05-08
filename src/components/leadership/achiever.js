import React from 'react';
import Layout from './layout'
import image from '../../images/LAT/achiever.jpg'

const Index = () => (
  <Layout
    title="ACHIEVER - most important."
    image={image}
    list={[
      'Manage performance through agreeing aims,regular reviews and appraisals. The objectives set should link with each other and those of your manager. Make time to agree aims - good ones do not happen automatically.',
      'When agreeing aims consider the motivation, morale and competency of team members - somemay be able to create a first draft themselves.',
      'Objectives should be SMART: Specific, Measurable (or verifiable), Attainable, Relevant (to your overall team objective) and Timed.',
      'Delegate work by agreeing suitable objectives - consider the need for coaching.',
      'Two insurance policies: `plan for action,but check with me before acting` or `plan and act, but let me know what you have done.`',
      'It is always necessary to agree a system to `follow up` and provide feedback.',
    ]}
    to='/leadership-skills/'
  />
);

export default Index;
