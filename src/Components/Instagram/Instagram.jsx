import React from 'react';
import './Instagram.css'
import {InstagramIcon} from "../../Materials/SVG/SVG";
const photos = [{id:1, name:'T-SHIRT', img: 'https://scontent.cdninstagram.com/v/t51.2885-15/298157788_185630087167843_2234257315136696934_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=NphNaNfwi-oAX8bQNeW&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-Z_tvKCIAIE_zFa2c_RWFfkIUfavlvO3Vpn-jpOsR-5g&oe=62F901B5'},
    {id:2, name:'ACCESSORIES', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Baseball_drop_Hero_AUG2022_2000x.jpg?v=1659982993'},
    {id:3, name:'JERSEYS', img: 'https://scontent.cdninstagram.com/v/t51.2885-15/297430381_784286736349268_4527543214109097261_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=7qUlRCydG9oAX-dicrv&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_iNcub2c7LkufNu31uZ-5co3pXc4BpuEtyjsDWv_6I5g&oe=62F93AD8'},
    {id:4, name:'SOCKS', img: 'https://scontent.cdninstagram.com/v/t51.2885-15/298571847_386178886979036_7228591003358985943_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Jf4ikd8pYWoAX8rMBil&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-1DHy0AApd6nbs6mSn0wWOu6no5tJW2v0lyfKQN_DKNA&oe=62F981C3'},
    {id:5, name:'JACKETS', img: 'https://scontent.cdninstagram.com/v/t51.2885-15/297707150_760266248733769_7955033805725916767_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=48apEfyt5Q4AX_QVzrs&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8zPLNAAKH_m4IoiuvA1HzeGsRqvHFMIqOTvA80PCIOfQ&oe=62F9CFE7'},
    {id:6, name:'HOODIE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_SpyFamily_drop_Hero_JULY2022_2000x.jpg?v=1658938075'},
    {id:7, name:'JACKETS', img: 'https://scontent.cdninstagram.com/v/t51.29350-15/297637682_853266389394547_7210154758513796966_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=9xYNSxXMBv8AX89kpZp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-RcnwtfAxWOaPQbG2QXFvUSUInb_dJoQ8XvQnEgocQJg&oe=62F8EB65'},
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