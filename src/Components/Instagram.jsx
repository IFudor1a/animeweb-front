import React from 'react';
import '../Styles/Instagram.css'
import {InstagramIcon} from "../Materials/SVG/SVG";
const photos = [{id:1, name:'T-SHIRT', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Gatchaman_drop_Hero_JULY2022_2000x.jpg?v=1658779601'},
    {id:2, name:'ACCESSORIES', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Baseball_drop_Hero_AUG2022_2000x.jpg?v=1659982993'},
    {id:3, name:'JERSEYS', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Gatchaman_drop_Hero_JULY2022_2000x.jpg?v=1658779601'},
    {id:4, name:'SOCKS', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Gatchaman_drop_Hero_JULY2022_2000x.jpg?v=1658779601'},
    {id:5, name:'JACKETS', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Gatchaman_drop_Hero_JULY2022_2000x.jpg?v=1658779601https://scontent.cdninstagram.com/v/t51.2885-15/297707150_760266248733769_7955033805725916767_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=48apEfyt5Q4AX_QVzrs&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8zPLNAAKH_m4IoiuvA1HzeGsRqvHFMIqOTvA80PCIOfQ&oe=62F9CFE7'},
    {id:6, name:'HOODIE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_SpyFamily_drop_Hero_JULY2022_2000x.jpg?v=1658938075'},
    {id:7, name:'JACKETS', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Gatchaman_drop_Hero_JULY2022_2000x.jpg?v=1658779601'},
    {id:8, name:'HOODIE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_DragonBallZ_drop_Hero2_JULY2022_2000x.jpg?v=1659539845'},
];

const Instagram = () => {
    return (
        <div className='instagram'>
            {photos.map(photo => (
                <div className='photo'>
                    <a>
                        <div className='info'>
                            <span>
                            {InstagramIcon}
                                </span>
                        </div>
                    </a>
                    <img src={photo.img} alt={photo.name}/>
                </div>
            ))}
        </div>
    );
};

export default Instagram;