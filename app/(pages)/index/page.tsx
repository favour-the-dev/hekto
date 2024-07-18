import React from 'react';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Latest from './components/latest';
import Offer from './components/offer';
import FeaturedTrending from './components/featuredTrending';
import Trending from './components/Trending';
const HomePage = () => {
    return (
        <>
            <div>
                <Hero/> 
                <Featured/>
                <Latest/>
                <Offer/>
                <FeaturedTrending/>
                <Trending/>
            </div>
        </>
    )
}

export default HomePage