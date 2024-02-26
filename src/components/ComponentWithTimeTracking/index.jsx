import React from 'react';
import { withTimeTracking } from '../withTimeTracking';


const ComponentWithTimeTracking = ({ timeSpent }) => (
  <div>
    <h2>Component with Time Tracking</h2>
    <p>Time Spent: {timeSpent} seconds</p>
  </div>
);

export default withTimeTracking(ComponentWithTimeTracking);
