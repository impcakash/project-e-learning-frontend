import { useState } from "react";
import Component2Book from './Component2Book';
import img3 from '../assests/image3.png';
import img4 from '../assests/image4.png';
import img5 from '../assests/image5.png';
import img6 from '../assests/image6.png';
import img7 from '../assests/image7.png';
import img8 from '../assests/img8.png';
import img9 from '../assests/img9.png';
import img10 from '../assests/img10.png';
import img11 from '../assests/img11.png';
import img12 from '../assests/img12.png';

const images = {
    About: img3,
    Course: img8,
    Notes: img9,
    Project: img10,
    Podcast: img11,
    Book: img3,
    Review: img12,
};

const books = [
    {
        title: "Build Your Dream Network",
        price: "$24",
        image: img3,
    },
    {
        title: "Visible Learning for Literacy",
        price: "$24",
        image: img4,
    },
    {
        title: "The New Rules of Work",
        price: "$24",
        image: img5,
    },
    {
        title: "Pivot",
        price: "$24",
        image: img6,
    },
    {
        title: "Learning & Development",
        price: "$24",
        image: img7,
    },
    {
        title: "Learning & Development",
        price: "$24",
        image: img3,
    },
];

function App() {
    const [firstCardImage, setFirstCardImage] = useState(images["About"]);

    const handleButtonClick = (button) => {
        setFirstCardImage(images[button]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="flex flex-wrap space-x-2 md:space-x-6 mb-8 ml-10 sm:ml-20 md:ml-40">
                {Object.keys(images).map((button) => (
                    <button
                        key={button}
                        onClick={() => handleButtonClick(button)}
                        className="px-4 sm:px-6 md:px-8 py-2 bg-gray-300 text-gray-700 rounded hover:bg-green-300 mb-2"
                    >
                        {button}
                    </button>
                ))}
            </div>


            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 ml-10 sm:ml-20 md:ml-40">
                Literature Course
            </h1>

  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ml-5 sm:ml-10 md:ml-40 mr-5 sm:mr-10 md:mr-40">

                <Component2Book
                    book={{
                        ...books[0],
                        image: firstCardImage,
                    }}
                />

                {books.slice(1).map((book, index) => (
                    <Component2Book key={index} book={book} />
                ))}
            </div>
        </div>
    );
}

export default App;
