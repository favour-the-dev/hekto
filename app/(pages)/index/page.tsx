import React from 'react';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Latest from './components/latest';
const HomePage = () => {
    return (
        <>
            <div>
                <Hero/> 
                <Featured/>
                <Latest/>
            </div>
        </>
    )
}

export default HomePage