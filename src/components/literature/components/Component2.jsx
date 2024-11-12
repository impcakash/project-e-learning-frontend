import { useState } from "react";
import Component2Book from './Component2Book';

const images = {
    About: "./../assests/image3.png",
    Course: "http://127.0.0.1:5501/assest/media/Rectangle%2032.png",
    Notes: "http://127.0.0.1:5501/assest/media/Rectangle%2033.png",
    Project: "http://127.0.0.1:5501/assest/media/Rectangle%2032%20(5).png",
    Podcast: "http://127.0.0.1:5501/assest/media/Rectangle%2032%20(3).png",
    Book: "http://127.0.0.1:5501/assest/media/Rectangle%20196.png",
    Review: "http://127.0.0.1:5501/assest/media/Rectangle%2032%20(4).png",
};

const books = [
    {
        title: "Build Your Dream Network",
        price: "$24",
        image: "./../assests/image3.png"
    },
    {
        title: "Visible Learning for Literacy",
        price: "$24",
        image: "http://127.0.0.1:5501/assest/media/Rectangle%20196%20(1).png"
    },
    {
        title: "The New Rules of Work",
        price: "$24",
        image: "http://127.0.0.1:5501/assest/media/Rectangle%20196%20(2).png"
    },
    {
        title: "Pivot",
        price: "$24",
        image: "http://127.0.0.1:5501/assest/media/Rectangle%20196%20(3).png"
    },
    {
        title: "Learning & Development",
        price: "$24",
        image: "http://127.0.0.1:5501/assest/media/Rectangle%20196%20(4).png"
    },
    {
        title: "Learning & Development",
        price: "$24",
        image: "http://127.0.0.1:5501/assest/media/Rectangle%20196.png"
    },
];

function App() {
    const [firstCardImage, setFirstCardImage] = useState(images["About"]);

    const handleButtonClick = (button) => {
        setFirstCardImage(images[button]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            {/* Button Group */}
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

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 ml-10 sm:ml-20 md:ml-40">
                Literature Course
            </h1>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ml-5 sm:ml-10 md:ml-40 mr-5 sm:mr-10 md:mr-40">
                {/* First Card with Dynamic Image */}
                <Component2Book
                    book={{
                        ...books[0],
                        image: firstCardImage,
                    }}
                />
                {/* Remaining Cards */}
                {books.slice(1).map((book, index) => (
                    <Component2Book key={index} book={book} />
                ))}
            </div>
        </div>
    );
}

export default App;
