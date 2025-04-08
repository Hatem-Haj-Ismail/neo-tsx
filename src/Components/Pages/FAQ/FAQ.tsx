import React from 'react';
import Frequentlyaskedquestions from './Frequentlyaskedquestions/Frequentlyaskedquestions';
import Generalquestions from './Generalquestions/Generalquestions';

const FAQ: React.FC = () => {
  return (
    <div>
      <Frequentlyaskedquestions />
      <Generalquestions />
    </div>
  );
}

export default FAQ;