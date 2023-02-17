import { useState } from 'react';
import './styles/AssessmentDetails.scss';

function AssessmentDetails(props) {
  return (
    <div className="assessment-details-container">
        <div className="inputs-container">
            <input className="student-mark" type="number" step="1" min="0" max="100" placeholder="your mark" onChange={props.onChange} required/>
            <p>out of</p>
            <input className="max-mark" type="number" step="1" min="0" defaultValue="100" onChange={props.onChange} required/>
        </div>
        <input className="weighing" type="number" step="1" min="0" max="100" placeholder="assessment weighing" onChange={props.onChange} required/>
    </div>
  );
}

export default AssessmentDetails;
