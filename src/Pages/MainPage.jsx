import React from 'react';
import Slider from "../Components/Slider";
import ProductSlider from "../Components/ProductSlider";
import Logos from "../Components/Logos";
import Gallary from "../Components/Gallary";
import Instagram from "../Components/Instagram";
import Button from "../Components/Button";

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
            <Button link={'/products'} name={'VIEW ALL PRODUCTS'}/>
        </div>
    );
};

export default MainPage;