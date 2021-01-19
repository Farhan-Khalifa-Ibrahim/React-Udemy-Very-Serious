import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig = {
    summer: { text: "Let's hit the beach", icon: 'sun' },
    winter: { text: 'Burr, it is chilly', icon: 'snowflake' }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth())
    const { text, icon } = SeasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i class={`icon-left massive ${icon} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`} />
        </div>
    )
}

export default SeasonDisplay;