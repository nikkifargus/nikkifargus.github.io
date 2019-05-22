import React from 'react';
import Layout from './layout'
import image from '../../images/LAT/coach.jpg'

const Index = () => (
  <Layout
    title="COACH"
    image={image}
    list={[
      'You should devote time to developing your people.Be aware of the four learning styles-doing; watching; thinking; experimenting.',
      'Plans for developing people can be made either during the annual (appraisal) interview, or at any mutually agreed time.',
      'Development can be done partly by identifying suitable training courses.',
      'More importantly, you should develop people on-the-job. This is often the most effective approach if done well. Look out for opportunities.',
      'Delegating, consulting and coaching are all relevant techniques.',
      'Make sure you have created your own personal development plan and be on the lookout for your maximising your own opportunities for learning.',
      'Continually review your personal network and use it to make sure you remain up to date with technical and organisational developments.',
    ]}
    to='/leadership-skills/'
  />
);

export default Index;
