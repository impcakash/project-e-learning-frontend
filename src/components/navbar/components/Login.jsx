import  { useState } from 'react';

export default function App() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
    //   console.log(${isLogin ? 'Login' : 'Register'} Form Submitted, formData);
    console.log(`${isLogin ? 'Login' : 'Register'} Form Submitted`, formData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
     
      {/* <div
        className="hidden md:block md:w-1/2 h-1/3 md:h-full bg-cover bg-center"
        style={{ backgroundImage: url('https://your-image-url.com') }}
      > */}
      <div
  className="w-1/2 h-full bg-cover bg-center h-4/5 w-5/12 rounded-3xl mt-16 ml-14"
  style={{ backgroundImage: `url('http://127.0.0.1:5500/E-learning-Team2-/assest/media/log-bg.jpeg')` }}
>

        {/* Replace 'https://your-image-url.com' with the actual URL of the image you want to display */}
      </div>

      <div className="flex items-center justify-center w-full md:w-1/2 bg-white">
        <div className="w-full max-w-md p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl text-center">Welcome to lorem..!</h2>
          <div className="flex justify-center mb-4 space-x-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 font-medium rounded-md ${
                isLogin ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 font-medium rounded-md ${
                !isLogin ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Register
            </button>
          </div>
          <p className="text-center text-gray-600 text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>
            {isLogin ? (
              <div className="flex items-center justify-between">
                <div>
                  <input type="checkbox" name="remember" className="mr-1" />
                  <label className="text-sm text-gray-600">Reminder</label>
                </div>
                <a href="#" className="text-sm text-teal-500">Forgot password?</a>
              </div>
            ) : (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            )}
            <button type="submit" className="w-full p-3 font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600">
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}