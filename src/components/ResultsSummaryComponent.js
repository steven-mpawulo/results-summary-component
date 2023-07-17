import React from 'react'
import IconMemory from './IconMemory'
import IconReaction from './IconReaction'
import IconVerbal from './IconVerbal'
import IconVisual from './IconVisual'

const ResultsSummaryComponent = () => {
    return (
        <main>
            <div className="main-container">
                <div className="first-container">
                    <p>Your Result</p>
                    <div className="result-container">
                        <p>76</p>
                        <p>of</p>
                        <p>100</p>
                    </div>
                    <p>Great
                        <p>You have scored higher than 65% of the people that have taken this tests.</p>
                    </p>
                </div>
                <div className="seconf-container">
                    <p>Summary</p>
                    <div className="reaction-container">
                        <IconReaction/>
                        <p>Reaction</p>
                        <p>80/100</p>
                    </div>
                    <div className="memory-container">
                        <IconMemory/>
                        <p>Memory</p>
                        <p>92/100</p>
                    </div>
                    <div className="verbal-container">
                        <IconVerbal/>
                        <p>Verbal</p>
                        <p>61/100</p>
                    </div>
                    <div className="visual-container">
                        <IconVisual/>
                        <p>Visual</p>
                        <p>72/100</p>
                    </div>
                </div>

            </div>
        </main>

    )
}

export default ResultsSummaryComponent