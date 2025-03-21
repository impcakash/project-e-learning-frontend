import Sidebar from "./components/Sidebar";
import AdobePrototype from "./components/AdobePrototype";

const CourseCalender = () => {
  return (
    <div className=" scroll-smooth">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar component on the left */}
        <div className="md:w-1/3">
          <Sidebar />
        </div>

        {/* AdobePrototype component on the right */}
        <div className="md:w-2/3">
          <AdobePrototype />
        </div>
      </div>
    </div>
  );
};

export default CourseCalender;
