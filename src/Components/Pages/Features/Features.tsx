import React from 'react';
import Whatwedo from './Whatwedo/Whatwedo';
import AllFeatures from './AllFeatures/AllFeatures';
import FloatingContainer from "../../Uitily/Footer/FloatingContainer";

// Die Komponenten benötigen keine Props, daher verwenden wir den Typ 'React.FC' (Functional Component)
const Features: React.FC = () => {
  return (
    <div>
      <Whatwedo />
      <AllFeatures />
      <FloatingContainer />
    </div>
  );
};

export default Features;