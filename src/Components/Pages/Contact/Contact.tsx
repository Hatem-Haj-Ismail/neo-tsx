import React from 'react';
import Contactus from './Contactus/Contactus';
import GlobalPresence from './GlobalPresence/GlobalPresence';
import Placescard from './Places-card/Places-card';

const Contact: React.FC = () => {
  return (
    <div>
      <Contactus />
      <GlobalPresence />
      <Placescard />
    </div>
  );
};

export default Contact;