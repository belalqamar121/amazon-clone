import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">

        <img 
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="No pic"/>
            
            {/* Product id,title,price,rating, image*/}
        <div className="home__row">
            <Product 
                id="1"
                title="xxx"
                price={5.55}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            />
        
        
            <Product 
                id="2"
                title="yyy"
                price={2.55}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            />
        </div>
        <div className="home__row">
            <Product 
                id="3"
                title="ccc"
                price={3.55}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            />
        
        
            <Product 
                id="4"
                title="xxx"
                price={4.55}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            />
             <Product 
                id="55"
                title="xxx"
                price={5.55}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            />
        </div>
        
        <div className="home__row">
            <Product 
                id="77"
                title="xxx"
                price={77.55}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            />
        </div>
            {/* Product */}
</div>
    ) 
}

export default Home
