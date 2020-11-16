import React from "react";
import c3ai from "../Assets/c3-ai.jpg";

const C3 = () => {
    return (
        <div className="container">
            <img src={c3ai} alt="c3.ai COVID-19 grand challenge" style={{"maxWidth": "700px"}} />
            
            <div className="text-height" style={{maxWidth: "700px", textAlign: "left", margin: "0 auto" }}><h3 className="profile-name">We are entering <a className="c3-ai-link " href="https://c3.ai/c3-ai-covid-19-grand-challenge/get-started/" target="_blank" rel="noreferrer">C3 AI COVID-19 Challenge.</a></h3>
                <p className="profile-name">Submission requirements</p>
                <ul className="c3-ul">✅ Questionnaire (200 words max.)
                    <li>Briefly describe the broader goals of your project. (40 words)</li>
                    <li>What specific problem are you trying to solve for this submission? (40 words)</li>
                    <li>Briefly describe your approach. (60 words)</li>
                    <li>What makes your project unique? (40 words)</li>
                    <li>What is the potential impact of your results in the fight against COVID-19? (20 words)</li>
                </ul>
                <ul className="c3-ul">✅ Non-Technical Abstract (100 words max.)
                    <li>A compelling summary of your submission, composed for a general audience.</li>
                </ul>
                <ul className="c3-ul">✅ Descriptive Paper (1,000 words max., suggested breakdown below)
                    <li>Introduction (100 words)</li>
                    <li>Problem Description (100 words)</li>
                    <li>Broad Approach (200 words)</li>
                    <li>Technical Details of Approach (400 words)</li>
                    <li>Results (100 words)</li>
                    <li>Impact (100 words)</li>
                </ul>
                <ul className="c3-ul">✅ Demo video (60-120 seconds)
                    <li>A creative expression of the solution, designed to sell it, while explaining: 1) Demo your project and the API’s used to run it. 2) Make sure to explain the problem being solved and walk-through how your solution works. 3)Touch on your results and the potential impact of these results on COVID-19.</li>
                </ul>
                <ul className="c3-ul">✅ Source Code (or link to GitHub Repository)
                    <li>The top 25 solutions will be code-reviewed to assure quality​.</li>
                </ul>
                <ul className="c3-ul">✅ List of Data Sources Used:
                    <li>At least two datasets used must be from the C3.ai COVID-19 Data Lake.</li>
                    <li>All datasets must be open-access and links to any external datasets must be provided.</li>
                </ul>
            </div>
        </div>
    )
}

export default C3;