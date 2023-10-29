import React from "react";

function ContactUs() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl p-4 m-4 items-start">Contact Us</h1>
        <form className="flex flex-col" action="">
          <input
            className="border-2  border-black p-2 m-4 rounded-lg w-[500px]"
            placeholder="Name"
            type="text"
          />
          <input
            className="border-2  border-black p-2 m-4 rounded-lg w-[500px]"
            placeholder="Message"
            type="text"
          />
          <button className="border-2 border-black w-[500px] p-2 m-4 rounded-lg font-bold text-2xl text-emerald-950">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
