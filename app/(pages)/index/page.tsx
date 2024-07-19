import React from 'react';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Latest from './components/latest';
import Offer from './components/offer';
import FeaturedTrending from './components/featuredTrending';
import Trending from './components/Trending';
import Discount from './components/Discount';
import Topcategories from './components/Topcategories';
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
                <Discount/>
                <Topcategories/>
            </div>
        </>
    )
}

export default HomePage