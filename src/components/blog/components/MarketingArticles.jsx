import React from 'react';
import Blog01 from "../assests/blog-01.png";
import Blog02 from "../assests/blog-02.png";
import Blog03 from "../assests/blog-03.png";
import Blog04 from "../assests/blog-04.png";
import Logo1 from "../assests/logo1.png";

const MarketingArticles = () => {
  const articles = [
    {
      id: 1,
      image: Blog01,
      category: 'Design',
      time: '3 Month',
      title: 'AWS Certified Solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      author: 'Lina',
      authorImage: Logo1,
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      id: 2,
      image: Blog02,
      category: 'Design',
      time: '3 Month',
      title: 'AWS Certified Solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      author: 'Lina',
      authorImage: Logo1,
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      id: 3, // Updated this id to 3
      image: Blog03,
      category: 'Design',
      time: '3 Month',
      title: 'AWS Certified Solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      author: 'Lina',
      authorImage: Logo1,
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      id: 4, // Updated this id to 4
      image: Blog04,
      category: 'Design',
      time: '3 Month',
      title: 'AWS Certified Solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      author: 'Lina',
      authorImage: Logo1,
      originalPrice: 100,
      discountedPrice: 80,
    },
  ];

  return (
    <section className="p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold">Marketing Articles</h2>
        <a href="#" className="text-teal-500 font-semibold">See all</a>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <div className="flex items-center space-x-1">
                  <i className="fa-solid fa-border-all"></i>
                  <span>{article.category}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <i className="fa-regular fa-clock"></i>
                  <span>{article.time}</span>
                </div>
              </div>
              <h1 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h1>
              <p className="text-sm text-gray-500 mb-4">{article.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={article.authorImage} alt="Author" className="w-10 h-10 rounded-full mr-2" />
                  <span className="text-gray-600">{article.author}</span>
                </div>
                <div className="text-right">
                  <p className="line-through text-gray-400">${article.originalPrice}</p>
                  <p className="text-teal-500 font-bold">${article.discountedPrice}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketingArticles;
