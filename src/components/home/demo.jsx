import "./styles/d1.css";

export const Demo = () => {
  return (
    <div>
      <h1 className="bg-slate-400 text-center">Inside Home Components</h1>
      <h2
        style={{
          color: "coral",
          backgroundColor: "teal",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Hello Main
      </h2>
      <hr />
      <br />

      {/* <h3 className="bg-slate-400">Tailwind CSS Testing</h3> */}
      <hr />

      <h1 className="bg-slate-400 text-3xl text-center p-4 font-semibold">
        Online Billing, Invoicing, & Contracts
      </h1>
    </div>
  );
};
