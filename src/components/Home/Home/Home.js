import React from 'react';
import Header from '../Header/Header';
import PackagesService from '../PackagesServies/PackagesService';
import Review from '../Review/Review';


const Home = () => {
    return (
        <main>
            <Header></Header>
            <PackagesService></PackagesService>
            <Review></Review>

        </main>
    );
};

export default Home;