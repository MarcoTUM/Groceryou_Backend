const shops =  [
    {
        id: "store_id_01",
        name: "Test Store",
        adress: "Test Adress",
        products: [{
            id: "item_id_01",
            name: 'Bio Speisekartoffeln festkochend 1,5kg',
            category: 'Potato',
            image: './images/potato.png',
            price: 4.5,
            brand: ' Nike',
            rating: 3,
            numReviews: 10
        },{
            id: "item_id_02",
            name: 'Beste Wahl Kartoffeln festkochend 2,5kg',
            category: 'Potato',
            image: './images/potato.png',
            price: 5,
            brand: ' Nike',
            rating: 4.5,
            numReviews: 5
        },{
            id: "item_id_03",
            name: 'Speisekartoffeln festkochend 1,5kg',
            category: 'Potato',
            image: './images/potato.png',
            price: 2.5,
            brand: ' Nike',
            rating: 2,
            numReviews: 7
        }]
    },
    {
        id: "store_id_02",
        name: "Test Store2",
        adress: "Test Adress2",
        products: [{
            id: "item_id_01",
            name: 'Slim Shirt',
            category: 'Shirts',
            image: './images/d1.jpeg',
            price: 60,
            brand: ' Nike',
            rating: 3,
            numReviews: 10
        },{
            id: "item_id_02",
            name: 'Fit Shirt',
            category: 'Shirts',
            image: './images/d1.jpeg',
            price: 50,
            brand: ' Nike',
            rating: 4.5,
            numReviews: 5
        }]
    }
        
]

module.exports ={
    shops
}