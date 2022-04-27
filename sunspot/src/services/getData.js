const data = [
    {
        id: 1,
        name: "Girasol",
        scientificName: "Helianthus annuus",
        image: "https://images.freeimages.com/images/large-previews/b0f/sunflower-1546158.jpg",
        price: "100",
        stock: "3"
    },
    {
        id: 2,
        name: "Margarita",
        scientificName: "Bellis perennis",
        image: "https://images.freeimages.com/images/large-previews/0ea/lawn-daisy-1466598.jpg",
        price: "105",
        stock: "3"
    },
    {
        id: 3,
        name: "Zinnia",
        scientificName: "Zinnia",
        image: "https://images.freeimages.com/images/large-previews/1d1/butterfly-2-1375489.jpg",
        price: "102",
        stock: "10"
    },
    {
        id: 4,
        name: "Crisantemo",
        scientificName: "Chrysanthemum",
        image: "https://images.freeimages.com/images/large-previews/6e2/chrysanthemum-1367570.jpg",
        price: "120",
        stock: "5"
    },
    {
        id: 5,
        name: "Lavanda",
        scientificName: "Lavandula",
        image: "https://images.freeimages.com/images/large-previews/541/lavender-field-1410156.jpg",
        price: "99",
        stock: "1"
    },
    {
        id: 6,
        name: "Pensamiento",
        scientificName: "Viola × wittrockiana",
        image: "https://images.freeimages.com/images/large-previews/f4a/signs-of-spring-1309272.jpg",
        price: "105",
        stock: "15"
    },
];

const getData = new Promise((resolve) => {
    setTimeout(() => {
        resolve(data);
    }, 2000);
});

export default getData;