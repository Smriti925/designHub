import React from "react";
import Form from "./Form";
import SliderPage from "./SliderPage";
import Footer from "./Footer";

function Main() {
  return (
    <div className="bg-rose-200">
      <div className="h-[100vh]">
        <marquee className="scroller p-2">
          <ul className="flex font-exo">
            <li>Click to work with us * </li>
            <li>Bookings open in March *</li>
            <li>Click to work with us * </li>
            <li>Bookings open in March *</li>
            <li>Click to work with us * </li>
            <li>Bookings open in March *</li>
            <li>Click to work with us * </li>
            <li>Bookings open in March *</li>
            <li>Click to work with us * </li>
            <li>Bookings open in March *</li>
            <li>Click to work with us * </li>
            <li>Bookings open in March *</li>
          </ul>
        </marquee>
        <div className="flex justify-end p-2">
          <h1 className="w-full lg:w-3/5 text-5xl md:text-6xl lg:text-8xl mt-14 p-2 lg:pr-20 text-right font-yan">
            The design studio for brands who break the{" "}
            <span className="text-red-500 font-shi">bi</span>
            <span className="text-blue-500 font-shi">na</span>
            <span className="text-green-500 font-shi">rY</span>
          </h1>
        </div>
        <div className="flex justify-end p-2">
          <p className=" text-lg py-10 w-full lg:w-3/5 p-2 lg:pr-20 md:text-right font-exo text-justify">
            We get it, you're different...and so are we henny! The norm is
            overrated...amirite? We push innovation to the front of the line
            with our brand & web design services. Let us change the game for
            your business & kick those competitors to the back.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="row-span-2 border-2 border-black flex justify-center items-center block1 overflow-hidden">
          <div className="row-span-2 absolute z-10 sticker">
            <img
              src="/avatar.png"
              className="w-72 h-96 lg:w-96 lg:h-[100vh] object-cover border-2 border-black rounded-full "
            ></img>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:space-y-20 justify-end sticker">
            <div className="">
              <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/61970c599669ea37db1ef972_Yellow%20Sun.svg"></img>
            </div>
            <div className="">
              <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/61970c59839ce560e78b8d8f_Blue%20Almond.svg"></img>
            </div>
            <div className="">
              <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/61970c59733ba125963bbefe_Green%20Triangle.svg"></img>
            </div>
            <div className="">
              <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/61970c59f6ae6d7aae49a2f2_Purple%20Lasagna.svg"></img>
            </div>
            <div>
              <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/61970c59f6ae6d56af49a2f3_Red%20Bean.svg"></img>
            </div>
            <div>
              <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/61970c59e737e74b5b6de5df_Pink%20Triangle.svg"></img>
            </div>
            <div>
              <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/61970c592bbea61c3360b511_Yellow%20Rainbow.svg"></img>
            </div>
          </div>
        </div>
        <div className="border-2 border-black hover:bg-violet-400 overflow-hidden p-10 lg:py-0">
          <div className="svgrotate relative left-48 bottom-28 lg:flex lg:justify-center hidden ">
            <svg
              className=""
              width="400px"
              height="400px"
              viewBox="0 0 305 309"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.6057 104.762C22.5187 54.8317 63.1716 18.8683 119.899 30.5475C127.506 10.0923 144.132 0.965473 164.083 0.0546617C185.384 -0.917826 200.612 11.1626 209.26 30.1625C254.76 21.1784 290.292 62.3655 276.36 107.589C293.642 118.749 307.603 132.825 304.588 156.058C301.909 176.709 295.201 195.012 271.943 200.507C284.701 222.51 286.593 243.743 272.481 263.62C254.592 288.818 247.299 294.22 205.274 283.527C177.948 319.96 127.853 316.128 111.776 279.591C91.2445 282.489 68.689 289.399 52.699 271.705C39.203 256.771 28.8353 237.996 39.2949 216.169C14.4321 204.519 -3.06025 187.965 0.447785 158.836C3.30299 135.153 9.35656 112.188 37.6057 104.762Z"
                fill="gold"
              />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl text-green-900 font-yan">
            Websites
          </h1>
          <p className="py-5 text-lg ">
            Custom-built websites that push design boundaries and make straight
            people cry ... in a good way!
          </p>
        </div>
        <div className="border-2 border-black hover:bg-green-400 overflow-hidden p-10 lg:py-0">
          <div className="svgrotate relative left-48 bottom-28 lg:flex lg:justify-center hidden ">
            <svg
              className=""
              width="400px"
              height="400px"
              viewBox="0 0 305 309"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.6057 104.762C22.5187 54.8317 63.1716 18.8683 119.899 30.5475C127.506 10.0923 144.132 0.965473 164.083 0.0546617C185.384 -0.917826 200.612 11.1626 209.26 30.1625C254.76 21.1784 290.292 62.3655 276.36 107.589C293.642 118.749 307.603 132.825 304.588 156.058C301.909 176.709 295.201 195.012 271.943 200.507C284.701 222.51 286.593 243.743 272.481 263.62C254.592 288.818 247.299 294.22 205.274 283.527C177.948 319.96 127.853 316.128 111.776 279.591C91.2445 282.489 68.689 289.399 52.699 271.705C39.203 256.771 28.8353 237.996 39.2949 216.169C14.4321 204.519 -3.06025 187.965 0.447785 158.836C3.30299 135.153 9.35656 112.188 37.6057 104.762Z"
                fill="cyan"
              />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl text-green-900 font-yan">
            Branding
          </h1>
          <p className="py-5 text-lg ">
            Support the gay agenda by giving your business the personality only
            Dolly Parton could dream of.
          </p>
        </div>
        <div className="border-2 border-black hover:bg-yellow-400 overflow-hidden p-10 lg:py-0">
          <div className="svgrotate relative left-48 bottom-28 lg:flex lg:justify-center hidden ">
            <svg
              className=""
              width="400px"
              height="400px"
              viewBox="0 0 305 309"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.6057 104.762C22.5187 54.8317 63.1716 18.8683 119.899 30.5475C127.506 10.0923 144.132 0.965473 164.083 0.0546617C185.384 -0.917826 200.612 11.1626 209.26 30.1625C254.76 21.1784 290.292 62.3655 276.36 107.589C293.642 118.749 307.603 132.825 304.588 156.058C301.909 176.709 295.201 195.012 271.943 200.507C284.701 222.51 286.593 243.743 272.481 263.62C254.592 288.818 247.299 294.22 205.274 283.527C177.948 319.96 127.853 316.128 111.776 279.591C91.2445 282.489 68.689 289.399 52.699 271.705C39.203 256.771 28.8353 237.996 39.2949 216.169C14.4321 204.519 -3.06025 187.965 0.447785 158.836C3.30299 135.153 9.35656 112.188 37.6057 104.762Z"
                fill="violet"
              />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl text-green-900 font-yan">
            Templates
          </h1>
          <p className="py-5 text-lg">
            Want a quality site but don't have the time? Don't spill your iced
            coffee, Judy - the OK Market will be open in February.
          </p>
        </div>
        <div className="border-2 border-black hover:bg-blue-400 overflow-hidden p-10 lg:py-0">
          <div className="svgrotate relative left-48 bottom-28 lg:flex lg:justify-center hidden ">
            <svg
              className=""
              width="400px"
              height="400px"
              viewBox="0 0 305 309"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.6057 104.762C22.5187 54.8317 63.1716 18.8683 119.899 30.5475C127.506 10.0923 144.132 0.965473 164.083 0.0546617C185.384 -0.917826 200.612 11.1626 209.26 30.1625C254.76 21.1784 290.292 62.3655 276.36 107.589C293.642 118.749 307.603 132.825 304.588 156.058C301.909 176.709 295.201 195.012 271.943 200.507C284.701 222.51 286.593 243.743 272.481 263.62C254.592 288.818 247.299 294.22 205.274 283.527C177.948 319.96 127.853 316.128 111.776 279.591C91.2445 282.489 68.689 289.399 52.699 271.705C39.203 256.771 28.8353 237.996 39.2949 216.169C14.4321 204.519 -3.06025 187.965 0.447785 158.836C3.30299 135.153 9.35656 112.188 37.6057 104.762Z"
                fill="green"
              />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl text-green-900 font-yan">
            Development
          </h1>
          <p className="py-5 text-lg">
            Is building too butch for you? Hand over those designs and we'll do
            all the hard work for you. You're welcome.
          </p>
        </div>
      </div>

      <div className="h-32 bg-violet-300 flex justify-between overflow-hidden ">
        <div className="invisible md:visible">
          <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f79a23c75cf1a6ecce1f_Pink%20Decoration.svg"></img>
          <img
            src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f7ee6783d0288cff4fd8_Yellow-Decoration.svg"
            className="relative bottom-36"
          ></img>
        </div>
        <div className="invisible md:visible">
          <img
            src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f88fb188388a08bc1de5_Green%20Decoration.svg"
            className="relative left-52"
          ></img>
          <img
            src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f84a5c00e71d098c8a81_Blue%20Decoration.svg"
            className="relative bottom-44"
          ></img>
        </div>
      </div>

      <div className="bg-violet-300">
        <marquee>
          <div className="flex gap-20">
            <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f4d61fb0de46b8501399_Paper%20Magazine.svg" />
            <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f4d6a0076336ff19ed85_Huffpost.svg" />
            <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f4d6a9edfe0f6c867b7b_Essence%20Magazine.svg" />
            <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f4d66ce6370ab438f125_InStyle%20Magazine.svg" />
            <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f4d68797475828378d3d_Vogue%20Magazine.svg" />
            <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f4d610029e3f1bc621f0_Allure%20Magazine.svg" />
            <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f4d623c75c8ac9ecbe4b_Teen%20Vogue%20Magazine.svg" />
            <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/6195f4d6a007633f4719ed86_Men%27s%20Health%20Magazine.svg" />
          </div>
        </marquee>
        <p className="flex relative bottom-32 justify-center text-2xl p-2 text-center font-yan">
          OUR CLIENT WORK HAS BEEN FEATURED IN
        </p>
      </div>

      <Form />
      <SliderPage />

      <section className="border-2 border-black">
        <div className="">
          <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/61969f8850eec51eac808cea_Scallop-Top.svg"></img>
        </div>
        <div className="flex justify-center my-10">
          <p className="text-xl font-bold bg-green-800 rounded-full px-3 py-1 text-white font-yan">
            LET US BLOW UP YOUR FEEDS
          </p>
        </div>
        <marquee>
          <div className="flex gap-5">
            <img
              src="https://assets.website-files.com/6195d42211697f1d00f00c31/619686a63c53030221b30ec6_Instagram%2006-p-500.png"
              className="h-72 border-2 border-black rounded-3xl"
            ></img>
            <img
              src="https://assets.website-files.com/6195d42211697f1d00f00c31/619686a417ee6d3f9189c374_Instagram%2001-p-500.png"
              className="h-72 border-2 border-black rounded-3xl"
            ></img>
            <img
              src="https://assets.website-files.com/6195d42211697f1d00f00c31/6196857714e0e33996e23963_Rectangle%2059-p-500.png"
              className="h-72 border-2 border-black rounded-3xl"
            ></img>
            <img
              src="https://assets.website-files.com/6195d42211697f1d00f00c31/61968577e99868bd49f8c42d_Frame%203-p-500.png"
              className="h-72 border-2 border-black rounded-3xl"
            ></img>
            <img
              src="https://assets.website-files.com/6195d42211697f1d00f00c31/619686a40be55c9523936844_Instagram%2003-p-500.png"
              className="h-72 border-2 border-black rounded-3xl"
            ></img>
            <img
              src="https://assets.website-files.com/6195d42211697f1d00f00c31/619685770ffe97cc09bbaafd_Mask%20Group-3-p-500.png"
              className="h-72 border-2 border-black rounded-3xl"
            ></img>
            <img
              src="https://assets.website-files.com/6195d42211697f1d00f00c31/619686a51d8cb65dd980e64f_Instagram%2004-p-500.png"
              className="h-72 border-2 border-black rounded-3xl"
            ></img>
            <img
              src="https://assets.website-files.com/6195d42211697f1d00f00c31/61968577920e8a5a0f75f73a_Mask%20Group-1-p-500.png"
              className="h-72 border-2 border-black rounded-3xl"
            ></img>
          </div>{" "}
        </marquee>
        <div className="flex justify-around text-xl font-bold text-white my-10 font-yan">
          <button className="px-3 py-1 rounded-xl bg-green-800 border-2 border-black">
            Instagram
          </button>
          <button className="px-3 py-1 rounded-xl bg-green-800 border-2 border-black">
            Facebook
          </button>
          <button className="px-3 py-1 rounded-xl bg-green-800 border-2 border-black">
            LinkedIn
          </button>
        </div>
        <div className="mt-10">
          <img src="https://assets.website-files.com/6195d42211697f1d00f00c31/61969f6964fa1291970e7fd9_Scallop-Bottom.svg"></img>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Main;
