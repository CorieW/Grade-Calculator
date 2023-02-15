import { useState, useEffect } from 'react';
import './CreateAssessmentPage.scss';
import Nav from '../../components/Nav/Nav.js';
import SideGradeViewer from '../../components/SideGradeViewer/SideGradeViewer.js';
import AssessmentDetails from '../../components/AssessmentDetails/AssessmentDetails.js'
import $ from 'jquery';

function CreateAssessmentPage() {

  const [assessments, setAssessments] = useState([{id:0}]);
  const [calculatedPercent, setCalculatedPercent] = useState(0);
  const [grade, setGrade] = useState("Fail");

  useEffect(() => {
    updateRemoveBtn()
    updateOverallPercent()
  });

  // Disables/enables the remove button depending on number of current assessments
  function updateRemoveBtn()
  {
    if (assessments.length == 1) $("#remove-assessment")[0].disabled = true
    else $("#remove-assessment")[0].disabled = false

    return ( <></> );
  }

  function removeAssessment()
  {
    const newArr = [...assessments]
    newArr.pop()
    setAssessments(newArr)
  }

  function addAssessment()
  {
    const id = assessments.length;
    setAssessments([...assessments, {id}])
  }

  function updateOverallPercent()
  {
    let totPercent = 0
    let totWeighing = 0
    
    const studentMarkElements = $(".student-mark")
    const maxMarkElements = $(".max-mark")
    const weighingElements = $(".weighing")

    for (let i = 0; i < weighingElements.length; i++)
    {
      const weighing = weighingElements[i].value / 100
      totPercent += (studentMarkElements[i].value / maxMarkElements[i].value) * weighing
      totWeighing += weighing
    }

    let num = totPercent * (100 / totWeighing);
    num = Math.max(Math.min(num, 100), 0).toFixed(1)
    if (num == null || num == undefined || isNaN(num)) return;

    setCalculatedPercent(num)
    updateGrade(num)
  }

  function updateGrade(percent)
  {
    let grade = ""

    if (percent >= 70) grade = "First"
    else if (percent >= 60) grade = "2:1"
    else if (percent >= 50) grade = "2:2"
    else if (percent >= 45) grade = "Third"
    else if (percent >= 40) grade = "Pass"
    else if (percent >= 0) grade = "Fail"

    setGrade(grade)
  }

  function displayAllAssessments()
  {
    return (
      <>
        { 
          assessments.map((assessment) => {
            return (
              <li key={assessment.id}>
                <AssessmentDetails onChange={updateOverallPercent}/>
              </li>
            )
          })
        }
      </>
    )
  }

  return (
    <div id="create-assessment-page-container">
      <div className="assessment-container">
          <Nav/>
          <div className="scroll-container">
            <div className="centering-container">
              <div className="assessments-container">
                <h2>Fill assessment details</h2>
                <ul id="assessments-list">
                  {displayAllAssessments()}
                </ul>
                <div className="buttons-container">
                  <button id="add-assessment" onClick={addAssessment}>Add</button>
                  <button id="remove-assessment" onClick={removeAssessment}>Remove last</button>
                </div>
              </div>
            </div>
          </div>
      </div>
      <SideGradeViewer calculatedPercent={calculatedPercent} grade={grade}/>
    </div>
  );
}

export default CreateAssessmentPage;
