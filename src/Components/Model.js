import React from 'react';

const Model = () => {
    return (
        <div className="container">
            <h1>Our Covid-19 Forecast Model</h1>
            <div style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto"}}>
                <h2 className="profile-name">Introduction</h2>
                <p className="text-height">Our ability to contain the coronavirus pandemic depends on being able to forecast potential outbreaks and on understanding its driving forces.</p>
                <p className="text-height">In this work, we develop scientifically-driven machine learning models to accurately predict the spread of Covid-19 infections using real-time data. </p>
                <p className="text-height"><a href="https://c3.ai/customers/covid-19-data-lake/" className="c3-ai-link">C3 AI Covid-19 Data Lake </a>collects and organizes various data sets that may bear on the spread of Covid-19 -- daily case reports, movement trends, weather reports, and economic changes. Our models use this data to make predictions about future increases in Covid-19 cases at the county, state, and national levels in the United States.</p>
                <h2 className="profile-name" style={{marginTop: "50px"}}>Problem Description</h2>
                <p className="text-height">As coronavirus cases surge across the country, epidemiology and data science communities have come together to generate more accurate forecasts. Accurate forecasts help government and public health officials prevent and control coronavirus outbreaks.</p>
                <p className="text-height"><a href="https://www.cdc.gov/coronavirus/2019-ncov/covid-data/mathematical-modeling.html" className="c3-ai-link">The official CDC Covid-19 forecast </a>uses an ensemble of models to predict the number of new cases that are likely to arise in different geographic locations. The CDC Covid-19 forecast currently predicts national, state, and county numbers of new Covid-19 cases per week for the next 4 weeks using forecasts from 21 modeling groups. To aid this effort, we develop and operationalize an accurate Covid-19 forecast using the available data from the C3 AI Covid-19 Data Lake.</p>
                <h2 className="profile-name" style={{marginTop: "50px"}}>Broad Approach</h2>
                <p className="text-height">Coronavirus is thought to spread from person to person. A typical case starts with a person coming into contact with a patient, who may not have symptoms. The virus has a chance to spread to the person during each contact. When the virus is successful, the person becomes infected and infectious to other people. The virus spreads exponentially in this way.</p>
                <p className="text-height">Epidemiological models use the structural knowledge of the spread of the virus to make predictions using the number of infected individuals and the number of transmittive contact. But it is difficult to measure how many infected individuals there really are and with whom they had close contact. Instead, we only have some imperfect measurements of a set of inputs that may have bearing on these components. On the other hand, it has also been difficult to apply machine learning models because we have limited historical data marred by structural changes from policy decisions and changes in public behavior.</p>
                <p className="text-height">In order to learn the useful relations between variables in a data efficient manner, we develop a methodology that augments scientific models with machine-learnable structures. Our models use temporal and spatial features of the daily case reports and movement trends data to accurately predict future Covid-19 cases. Our forecast based on these models achieves state-of-the-art accuracies.
</p>
            </div>
        </div>
    )
}

export default Model;