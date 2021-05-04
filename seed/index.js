
const mongoose = require('mongoose')
const CampGround = require('../models/campground.js')
const cities = require('./cities')
const { places, descriptors } = require('./seedHelper');



mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await CampGround.deleteMany()
    for (let i = 0; i < 50; i++) {
        const random = Math.floor(Math.random() * 1000)
        const camp = new CampGround({
            author: '6058e3865f2b9f25201fb7f1',
            location: `${cities[random].city},${cities[random].state}`,
            geometry: { coordinates: [cities[random].longitude, cities[random].latitude], type: 'Point' },
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eius delectus harum consequatur quidem esse, maiores rem in fugiat eaque? Veritatis molestiae ratione illo? Quia nobis porro repellat neque accusantium?',
            images: [
                {
                    url: 'https://res.cloudinary.com/shobhit-kr/image/upload/v1616588459/YelpCamp/fifiytex6eocbk6c7tw5.jpg',
                    filename: 'c1.jpg'
                },
                {
                    url: 'https://res.cloudinary.com/shobhit-kr/image/upload/v1616588459/YelpCamp/w4zmvb7khl8zst3lpjp0.jpg',
                    filename: 'c2.jpg'
                }
            ],
            price: Math.floor(Math.random() * 501)
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})

