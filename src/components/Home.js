import React from "react";
import "./styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home__banner__images"
        />
        <div className="home__row">
          <Product
            id="729762669"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful"
            price={10.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="292345802"
            title="NordicTrack Commercial Studio Cycle (S15i and S22i) Includes 1-Year iFit Membership"
            price={1779}
            image="https://m.media-amazon.com/images/I/712W+tWTcAL._AC_SX960_SY720_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="102873793"
            title="SereneLife Trampoline with Net Enclosure – ASTM Approved, Stable, Strong Kids and Adult Trampoline with Net – Outdoor Trampoline for Kids, Teens and Adults"
            price={357.89}
            image="https://m.media-amazon.com/images/I/51FJOakhWBL._SR190,190_.jpg"
            rating={5}
          />
          <Product
            id="620972968"
            title="GRECERELLE Women's Long Sleeve Loose Plain Maxi Dresses Casual Long Dresses Wite Pockets"
            price={25.99}
            image="https://images-na.ssl-images-amazon.com/images/I/715v1cVKeJL._AC_UL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="955116802"
            title="SAMSUNG 49-inch Odyssey G9 - QHD, 240hz, 1000R Curved Gaming Monitor, 1ms, NVIDIA G-SYNC & FreeSync, QLED (LC49G95TSSNXZA)"
            price={495.56}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="475756178"
            title="Echo Plus (2nd Gen) - Premium sound with built-in smart home hub - Heather Gray"
            price={33.62}
            image="https://m.media-amazon.com/images/I/71uB9tuw2JL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="777754580"
            title="Twelve South Curve for MacBooks and Laptops | Ergonomic desktop cooling stand for home or office (matte black)"
            price={35.56}
            image="https://images-na.ssl-images-amazon.com/images/I/71hXpGgnrgL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="509353070"
            title="Apple Smart Keyboard iPad Pro 11-inch (2nd Generation) and iPad Air (4th Generation) - US English"
            price={115.94}
            image="https://m.media-amazon.com/images/I/51tT1es78KL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
