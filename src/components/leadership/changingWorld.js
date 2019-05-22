import React from 'react';
import Layout from './layout'
import image from '../../images/LAT/changing_world.jpg'

const Index = () => (
  <Layout
    title="CHANGING WORLD"
    image={image}
    list={[
      'The world is changing, and we need to constantly review the challenges we face.',
      'Our organisation is also changing, requiring a more systematic set of leadership / management roles.',
    ]}
    to='/leadership-skills/'
  />
);

export default Index;
