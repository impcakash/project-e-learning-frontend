import "../styles/Home_box3.css";

export const Home_box3 = () => {
  return (
    <div className="m-auto mt-12 lg:w-9/12 sm:w-11/12">
      <div className="grid gap-12 lg:grid-cols-3 sm:grid-cols-1">
        <div className="text-center p-8 hb3_box_shadow">
          <img
            className="w-14 mx-auto items-center"
            src="https://cdn-icons-png.freepik.com/256/4366/4366902.png?ga=GA1.1.1926881922.1726951578&semt=ais_hybrid"
          />
          <div className="mt-4 hb3_box_head">
            Online Billing, Invoicing, & Contracts
          </div>
          <p className="mt-4 hb3_box_text">
            Simple and secure control of your organization’s financial and legal
            transactions. Send customized invoices and contracts
          </p>
        </div>
        <div className="text-center p-8 hb3_box_shadow">
          <img
            className="w-14 mx-auto items-center"
            src="https://cdn-icons-png.freepik.com/256/12088/12088427.png?ga=GA1.1.1926881922.1726951578&semt=ais_hybrid"
          />
          <div className="mt-4 hb3_box_head">
            Easy Scheduling & Attendance Tracking
          </div>
          <p className="mt-4 hb3_box_text">
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance
          </p>
        </div>
        <div className="text-center p-8 hb3_box_shadow">
          <img
            className="w-14 mx-auto items-center"
            src="https://cdn-icons-png.freepik.com/256/10051/10051061.png?ga=GA1.1.1926881922.1726951578&semt=ais_hybrid"
          />
          <div className="mt-4 hb3_box_head">Customer Tracking</div>
          <p className="mt-12 p-1 hb3_box_text">
            Automate and track emails to individuals or groups. Skilline’s
            built-in system helps organize your organization
          </p>
        </div>
      </div>
    </div>
  );
};
