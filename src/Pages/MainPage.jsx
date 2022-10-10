import React from 'react';
import Slider from "../Components/Slider/Slider";
import ProductSlider from "../Components/ProductSlider/ProductSlider";
import Logos from "../Components/Logos/Logos";
import Gallary from "../Components/Gallary/Gallary";
import Instagram from "../Components/Instagram/Instagram";
import Button from "../Components/Buttons/Button";

const MainPage = () => {
    return (
        <div>
<Slider/>
            <ProductSlider title='NEW ARRIVALS'/>
            <ProductSlider title='BEST SELLERS'/>
            <Logos/>
            <Gallary/>
            <ProductSlider title='LAST CHANCE'/>
            <Instagram/>
            <Button/>
        </div>
    );
};

export default MainPage;