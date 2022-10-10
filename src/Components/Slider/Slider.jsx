import React, {useEffect, useState} from 'react';
import './Slider.css';
import {LeftArrow, RightArrow} from "../../Materials/SVG/SVG";
const slides = [
    {id: 1, url: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Doraemon_drop_Hero_JULY2022_2000x.jpg?v=1659109102', title: 'ANIMEIJIN'},
    {id: 2, url: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/titan_banner_2000x.jpg?v=1652194760', title: 'ANIMEIJIN'},
    {id: 3, url: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_evangelion_drop_Hero_JULY2022_2000x.jpg?v=1659027210', title: 'ANIMEIJIN'},
    {id: 4, url: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_SOCKS_drop_Hero_AUG2022_2000x.jpg?v=1659994842', title: 'ANIMEIJIN'},

];

const Slider = () => {
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        const delay = setTimeout(()=> {
            current < slides.length ? setCurrent(current + 1): setCurrent(1)
        }, 5000);
        return () => {clearTimeout(delay);}
    }, [current]);

    const handleClick = (direction) => {
        if(direction === 'right') {
            current < slides.length ? setCurrent(current + 1): setCurrent(1)
        } else {
            current <= 1? setCurrent(slides.length): setCurrent(current - 1)
        }
    }

     return (
        <div className='slider'>
            {slides.map(slide => {
                if(slide.id === current) return(
                    <div className='slide' key={slide.id}>
                        <img src={slide.url} alt={slide.title}/>
                        <div className='info'>
                            <h2 className='title'>{slide.title}</h2>
                        </div>
                        <div className='info2'>
                        </div>
                    </div>)
            })}
            <div className='navigation'>
                <span className='prev-btn' onClick={() => handleClick('left')}>{LeftArrow}</span>
                <span className='next-btn' onClick={() => handleClick('right')}>{RightArrow}</span>
            </div>
        </div>
    );
};

export default Slider;