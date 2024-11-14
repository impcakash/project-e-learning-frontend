import "../styles/Rightbox_01.css";

export const Rightbox_01 = () => {
  return (
    <div className="bg-white">
      <div className="bg-teal-500 p-6 py-2 text-white">
        <h1 className="text-3xl mt-6">Learn about Adobe XD & Prototyping</h1>
        <p className="text-md mt-3">Introduction about XD</p>
        <div className="flex justify-end items-center">
          <span className="text-md">
            <i className="fa-regular fa-clock mr-4 mb-4"></i>1 hour
          </span>
        </div>
      </div>
      <div className="bg-blue-50 pb-16">
        <div className="pt-8 pl-4 rb1_text_head">Create new event</div>
        <p className="p-4 rb1_text_detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
          eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
          eiusmodLorem
        </p>
        <div className="p-4">
          <div className="bg-white rounded p-8 lg:p-16 text-justify">
            <form>
              <div>
                <div className="flex flex-col">
                  <label className="text-sm text-slate-600 font-medium">
                    Event Name
                  </label>
                  <input
                    className="p-2 mt-2 text-sm border border-slate-300 rounded-md"
                    type="text"
                    placeholder="Adobe XD Auto - Animate : Your Guide to Creating"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="mt-4 flex flex-col md:w-1/2">
                  <label className="text-sm text-slate-600 font-medium">
                    Start date / Time
                  </label>
                  <input
                    className="p-2 mt-2 text-sm border border-slate-300 rounded-md "
                    type="text"
                    placeholder="September 24, 2017 07:59 am"
                  />
                </div>
                <div className="mt-4 flex flex-col md:w-1/2">
                  <label className="text-sm text-slate-600 font-medium">
                    End Date / Time
                  </label>
                  <input
                    className="p-2 mt-2 text-sm border border-slate-300 rounded-md "
                    type="text"
                    placeholder="September 24, 2017 07:59 am"
                  />
                </div>
              </div>
              <div>
                <div className="mt-4 flex flex-col">
                  <label className="text-sm text-slate-600 font-medium">
                    Location
                  </label>
                  <input
                    className="p-2 mt-2 text-sm border border-slate-300 rounded-md"
                    type="text"
                    placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="mt-4 flex flex-col md:w-1/2">
                  <label className="text-sm text-slate-600 font-medium">
                    Notification
                  </label>
                  <input
                    className="p-2 mt-2 text-sm border border-slate-300 rounded-md "
                    type="text"
                    placeholder="30 mins"
                  />
                </div>
                <div className="mt-4 flex flex-col md:w-1/2">
                  <label className="text-sm text-slate-600 font-medium">
                    Email
                  </label>
                  <input
                    className="p-2 mt-2 text-sm border border-slate-300 rounded-md "
                    type="text"
                    placeholder="jessica.hansome@example.com"
                  />
                </div>
              </div>
              <div>
                <div className="mt-4 flex flex-col">
                  <label className="text-sm text-slate-600 font-medium">
                    Comments
                  </label>
                  <textarea
                    className="p-2 mt-2 text-sm border border-slate-300 rounded-md h-36"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet"
                  ></textarea>
                </div>
              </div>
              <div className="pb-12 pt-4">
                <div className="rb1_btn mt-4">
                  <button>Sign in</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
