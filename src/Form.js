import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log("submitted");

    axios.post("https://retoolapi.dev/mEn6s2/data", details).then((res) => {
      if (res.status === 201) {
        setFirstName("");
        setEmail("");
      }
    });
  }

  const details = {
    Name: firstName,
    Email: email,
  };
  console.log(details);

  return (
    <>
      <div className="p-8 md:p-20 border-2 border-black ">
        <div className="flex justify-center">
          <p className="bg-black text-center rounded-full text-xl text-white font-bold px-3 py-1 relative top-4 font-yan">
            LET'S TALK ABOUT MONEY, HENNY!
          </p>
        </div>
        <div className="border-2 border-black p-2 sm:p-5 md:p-14 bg-sky-700">
          <div className="flex justify-center">
            <p className="text-center py-10 font-exo">
              So you're curious about pricing?
              <br /> Subscribe to our email list to receive instant access to
              our services & pricing guide.
            </p>
          </div>

          <div className="grid grid-cols-1 space-y-2 md:flex md:justify-center md:space-x-2 md:space-y-0 mb-10 md:mb-0">
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              className="h-12 rounded-lg p-2 border-2 border-black bg-white"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>
            <input
              type="text"
              value={email}
              placeholder="Email Address"
              className="h-12 rounded-lg p-2 border-2 border-black bg-white"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <button
              className="rounded-lg bg-yellow-400 px-3 py-2 border-2 border-black"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
