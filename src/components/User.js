import React, { useState } from 'react';
import './User.css'; // Import a CSS file for styling

const User = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <p>Location: India</p>
            <h4>Contact: @karan</h4>
            <button onClick={toggleExpand} className="expand-button">
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
            {isExpanded && (
                <div className="additional-info">
                    <p>Age: 25</p>
                    <p>Occupation: Software Engineer</p>
                    <p>Interests: Coding, Traveling, Photography</p>
                    <p>Bio: Passionate about building scalable web applications and exploring new technologies.</p>
                </div>
            )}
        </div>
    );
};

export default User;