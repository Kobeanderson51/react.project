import React, { useState } from 'react';
import "./darkmode.css"

function DarkModeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <>
        <div className='flex justify-end -my-3'>
        <div className="container">
            <h2>Dark Mode</h2>
            <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider"></span>
            </label>
            </div>
        </div>
        </>
    );
}

export default DarkModeSwitch;
