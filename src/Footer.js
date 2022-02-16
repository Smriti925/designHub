import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Footer(props) {
  const [msg, setMsg] = useState("");
  function submit(e) {
    e.preventDefault();
    console.log("submitted");

    axios.post("https://retoolapi.dev/mEn6s2/data", details).then((res) => {
      if (res.status === 201) {
        setMsg("");
      }
    });
  }
  const details = {
    Message: msg,
  };
  console.log(details);
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 p-5">
        <div className="p-5">
          <p className="text-4xl font-medium font-yan">Glad to see you!</p>
          <p className="text-xl font-medium py-2 font-yan">
            DO YOU LIKE OUR DESIGN?
          </p>
          <div className="my-2">
            <textarea
              type="text"
              value={msg}
              placeholder="Write your message here!"
              className="rounded-lg p-2 border-2 border-black bg-white w-full sm:w-72"
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            className="rounded-lg bg-yellow-400 px-3 py-1 border-2 border-black"
            onClick={submit}
          >
            Submit
          </button>
        </div>

        <div className="p-5 font-exo">
          <img src="/logo2.png" className="h-28 p-1" />

          <div className="flex ">
            <a
              href="https://www.linkedin.com/in/smriti-92a88a218/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/material-outlined/48/000000/linkedin--v1.png"
                alt="li"
              />
            </a>
            <a href="https://www.instagram.com/smriti_925/" target="_blank">
              <img
                src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png"
                alt="ig"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100055302942384"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/000000/facebook.png"
                alt="fb"
              />
            </a>
          </div>
          <div className="text-sm p-1 text-gray-800">
            Kangra, Himachal Pradesh
          </div>
          <div className="text-sm p-1 text-gray-800">India (177114)</div>
        </div>
        <div className="absolute left-[85vw] hidden lg:flex ">
          <img
            src="https://assets.website-files.com/6195d42211697f1d00f00c31/61970c599669ea37db1ef972_Yellow%20Sun.svg"
            className="object-contain h-64"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
