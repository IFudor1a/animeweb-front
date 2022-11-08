let products = {
    "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        name: "I AM DORAEMON WHITE TEE",
        category: "HOODIE",
        text: "Футболка линейки Animeijin - первая единица контрбрендовой линии одежды. Потрясающие качество в\n" +
            "                совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые\n" +
            "                фирмы",
        composition: "95% cotton, 5% spandex. Плотность 170 г/м²",
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040",
        price: "16500",
        currency: "KZT"
    },
    "5c9qojr2d1738zlx09afby": {
        id: "5c9qojr2d1738zlx09afby",
        name: "I AM DORAEMON WHITE TEE",
        category: "HOODIE",
        text: "Футболка линейки Animeijin - первая единица контрбрендовой линии одежды. Потрясающие качество в\n" +
            "                совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые\n" +
            "                фирмы",
        composition: "95% cotton, 5% spandex. Плотность 170 г/м²",
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040",
        price: "16500",
        currency: "KZT"
    },
    "f4xzgapq7mu783k9t02ghx": {
        id: "f4xzgapq7mu783k9t02ghx",
        name: "I AM DORAEMON WHITE TEE",
        category: "HOODIE",
        text: "Футболка линейки Animeijin - первая единица контрбрендовой линии одежды. Потрясающие качество в\n" +
            "                совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые\n" +
            "                фирмы",
        composition: "95% cotton, 5% spandex. Плотность 170 г/м²",
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040",
        price: "16500",
        currency: "KZT"
    },
    "hbsc73kzqi75rg7v1e0i6a": {
        id: "hbsc73kzqi75rg7v1e0i6a",
        name: "I AM DORAEMON WHITE TEE",
        category: "HOODIE",
        text: "Футболка линейки Animeijin - первая единица контрбрендовой линии одежды. Потрясающие качество в\n" +
            "                совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые\n" +
            "                фирмы",
        composition: "95% cotton, 5% spandex. Плотность 170 г/м²",
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040",
        price: "16500",
        currency: "KZT"
    },
    "5w6k1n34dkp1x29cuzn2zn": {
        id: "5w6k1n34dkp1x29cuzn2zn",
        name: "I AM DORAEMON WHITE TEE",
        category: "HOODIE",
        text: "Футболка линейки Animeijin - первая единица контрбрендовой линии одежды. Потрясающие качество в\n" +
            "                совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые\n" +
            "                фирмы",
        composition: "95% cotton, 5% spandex. Плотность 170 г/м²",
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040",
        price: "16500",
        currency: "KZT"
    },
    "czpa59mg577x1oo45cup0d": {
        id: "czpa59mg577x1oo45cup0d",
        name: "I AM DORAEMON WHITE TEE",
        category: "HOODIE",
        text: "Футболка линейки Animeijin - первая единица контрбрендовой линии одежды. Потрясающие качество в\n" +
            "                совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые\n" +
            "                фирмы",
        composition: "95% cotton, 5% spandex. Плотность 170 г/м²",
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040",
        price: "16500",
        currency: "KZT"
    },"2mb6re13q842wu8n106bhk": {
        id: "2mb6re13q842wu8n106bhk",
        name: "I AM DORAEMON WHITE TEE",
        category: "HOODIE",
        text: "Футболка линейки Animeijin - первая единица контрбрендовой линии одежды. Потрясающие качество в\n" +
            "                совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые\n" +
            "                фирмы",
        composition: "95% cotton, 5% spandex. Плотность 170 г/м²",
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040",
        price: "16500",
        currency: "KZT"
    }
}

export async function _getProducts() {
    const options = {
        method: 'GET'
    }
    return await fetch('http://localhost:5000/api/product', options)
}
