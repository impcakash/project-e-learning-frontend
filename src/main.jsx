import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Homepage } from "./components/home/Homepage.jsx";
import Courses_nav from "./components/courses/components/Courses_nav.jsx";
import Membership from "./components/membership/Membership.jsx";
import Blog from "./components/blog/Blog.jsx";
import Meeting from "./components/other_section/Meeting/Meeting";
import Course_Details from "./components/other_section/Course_Details2/Course_Details";
import { CheckoutMain } from "./components/other_section/Checkout/CheckoutMain.jsx";
import { Calendar_01 } from "./components/other_section/Calender_01/Calendar_01.jsx";
import { Calendar_02 } from "./components/other_section/Calender_02/Calendar_02.jsx";
import CourseCalender from "./components/other_section/Course_Calender/CourseCalender.jsx";
import Search from "./components/other_section/Search/Search.jsx";
import CourseDtl from "./components/other_section/Course_Details/CourseDtl.jsx";
import BlogDet from "./components/other_section/Blog_Detail/BlogDet.jsx";
import Literature from "./components/literature/components/Literature.jsx";
import Login from "./components/navbar/components/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Homepage />} />
      <Route path="courses" element={<Courses_nav />} />
      <Route path="membership" element={<Membership />} />
      <Route path="blog" element={<Blog />} />
      <Route path="literature" element={<Literature />} />
      <Route path="search" element={<Search />} />
      <Route path="meeting" element={<Meeting />} />
      <Route path="courseDetails" element={<Course_Details />} />
      <Route path="blogDetails" element={<BlogDet />} />
      <Route path="checkout" element={<CheckoutMain />} />
      <Route path="calendar1" element={<Calendar_01 />} />
      <Route path="calendar2" element={<Calendar_02 />} />
      <Route path="courseCalendar" element={<CourseCalender />} />
      <Route path="fullViewCalendar" element={<CourseDtl />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
