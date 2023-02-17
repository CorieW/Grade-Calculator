import { useState } from 'react';
import './styles/GradeViewer.scss';

function SideGradeViewer(props) {
    const [toggled, setToggled] = useState(false);

    function toggle()
    {
        setToggled(!toggled)
    }

    function getCaretDirection()
    {
        if (toggled) return "left"
        else return "right"
    }

    return (
        <div id="grade-viewer-container" className={toggled ? "toggled" : ""}>
            <button id="toggleBtn" onClick={toggle}><i className={"fa-solid fa-caret-" + getCaretDirection()}></i></button>
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
