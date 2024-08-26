import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[60vw] leading text-center">
          JOIN THE ASTRONAUT CORE OR{" "}
          <span className="text-purple">GET REKT!</span>
        </h1>

        {/* Social media icons centered below the heading */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-16">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              className="flex items-center justify-center"
            >
              <div className="w-16 h-16 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={32} height={32} />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-base text-sm font-light">
        <p className="md:font-normal">Copyright © 2024 VidyaVerse</p>
      </div>
    </footer>
  );
};

export default Footer;
