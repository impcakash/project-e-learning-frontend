import courseImage1 from "../assests/courseimage.png";
import courseImage2 from "../assests/courseimg.png";
import instructorImage from "../assests/Lina.png";

const CourseCard = ({
  title,
  instructor,
  duration,
  price,
  discountedPrice,
  description,
  image,
}) => (
  <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
    </div>

    <div className="p-6">
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2H6V6H2V2ZM10 2H14V6H10V2ZM2 10H6V14H2V10ZM10 10H14V14H10V10Z"
              stroke="#6B7280"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-gray-600">Design</span>
        </div>
        <div className="flex items-center text-gray-600">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {duration}
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <img
            src={instructorImage}
            alt={instructor}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <span className="font-medium">{instructor}</span>
        </div>

        <div className="flex items-center">
          <span className="line-through text-gray-500 mr-2">${price}</span>
          <span className="text-2xl text-teal-500 font-bold">
            ${discountedPrice}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const StudentsView = () => {
  const courses = [
    {
      title: "AWS Certified Solutions Architect",
      instructor: "Lina",
      duration: "3 Month",
      price: "100",
      discountedPrice: "80",
      description:
        "An AWS Certified Solutions Architect is a professional who designs scalable, cost-effective, and secure cloud solutions using Amazon Web Services.",
      image: courseImage1,
    },
    {
      title: "Data Science Certified",
      instructor: "Lina",
      duration: "3 Month",
      price: "100",
      discountedPrice: "80",
      description:
        "A Data Science Certified professional is an expert in analyzing complex data, using statistical models, and applying machine learning to extract insights and inform decision-making.",
      image: courseImage2,
    },
    {
      title: "Full Stack Web Developer Certified",
      instructor: "Lina",
      duration: "3 Month",
      price: "100",
      discountedPrice: "80",
      description:
        "A Full Stack Web Developer Certified professional is skilled in developing both client-side (front-end) and server-side (back-end) web applications, managing databases, and creating complete web solutions.",
      image: courseImage1,
    },
    {
      title: "Data Analyst Certified",
      instructor: "Lina",
      duration: "3 Month",
      price: "100",
      discountedPrice: "80",
      description:
        "A Data Analyst Certified professional specializes in collecting, processing, and analyzing data to identify trends, generate insights, and support data-driven decision-making.",
      image: courseImage2,
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Student are viewing
          </h1>
          <button className="text-teal-500 hover:text-teal-600 font-medium">
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsView;
