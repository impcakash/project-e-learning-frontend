import Sidebar from "../Course_Calender/components/Sidebar";
import { Rightbox_02 } from "./components/Rightbox_02";

export const Calendar_02 = () => {
  return (
    <div className="scroll-smooth">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar component on the left */}
        <div className="p-2 lg:w-3/12 md:w-1/3">
          <Sidebar />
        </div>

        {/* Right-Box component on the right */}
        <div className="lg:w-9/12 md:w-2/3">
          <Rightbox_02 />
        </div>
      </div>
    </div>
  );
};
