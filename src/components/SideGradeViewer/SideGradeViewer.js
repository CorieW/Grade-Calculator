import { useState } from 'react';
import './SideGradeViewer.scss';

function SideGradeViewer(props) {
    return (
        <div id="side-grade-viewer-container">
            <div>
                <h3>Your overall percentage is</h3>
                <p id="overall-percent" className="main-info">{props.calculatedPercent}%</p>
                <br/><br/><br/><br/><br/>
                <h3>This is a</h3>
                <p id="grade" className="main-info">{props.grade}</p>
            </div>
        </div>
    );
}

export default SideGradeViewer;
