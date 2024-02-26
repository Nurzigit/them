import React, { useState, useEffect } from 'react';

export const withTimeTracking = (WrappedComponent) => {
  const WithTimeTracking = (props) => {
    const [timeSpent, setTimeSpent] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeSpent((prevTimeSpent) => prevTimeSpent + 1);
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return <WrappedComponent {...props} timeSpent={timeSpent} />;
  };

  return WithTimeTracking;
};


