import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

import appStore from "../assets/app-store.webp";
import googlePlay from "../assets/google-play.webp";
import qr from "../assets/qr.png";

function Footer() {
  return (
    <div className="bg-white p-10 sm:text-center lg:px-20 xl:px-24 2xl:px-32">
      <div className="flex flex-col lg:grid grid-cols-3 lg:text-left">
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2">Yardim</h1>
          <a href="" className="hover:underline">
            Frequently Asked Questions
          </a>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2">Legal</h1>
          <ul>
            <li className="flex flex-col gap-2">
              <a href="" className="hover:underline">
                Telif Hakki Uyarisi
              </a>
              <a href="" className="hover:underline">
                Müsteri Aydinlatma Metni
              </a>
              <a href="" className="hover:underline">
                Cerez Aydinlatma Metni
              </a>
              <a href="" className="hover:underline">
                Cerez Ayarlari
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center mb-4">
          <button className="bg-blue-900 text-white p-3 rounded-xl hover:opacity-80">
            Canli Destek
          </button>
          <ul className="flex justify-center mt-4 gap-2 ">
            <li className="hover:opacity-80 cursor-pointer">
              <AiFillTwitterCircle size="50" />
            </li>
            <li className="hover:opacity-80 cursor-pointer">
              <AiFillFacebook size="50" />
            </li>
            <li className="hover:opacity-80 cursor-pointer">
              <AiFillInstagram size="50" />
            </li>
            <li className="hover:opacity-80 cursor-pointer">
              <AiFillYoutube size="50" />
            </li>
            <li className="hover:opacity-80 cursor-pointer">
              <AiFillLinkedin size="50" />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="mt-4">
        <div className="flex flex-col text-center justify-center gap-1 lg:flex-row lg:justify-between">
          <div className="my-auto">
            <p>STREAM bir X MEDIA GROUP kuruluşudur.</p>
            <p>2023 Her Hakki saklidir</p>
          </div>
          <div>
            <ul className="flex gap-10 my-4 justify-center">
              <li className="my-auto">
                <img
                  src={appStore}
                  alt=""
                  className="lg:h-16 hover:opacity-80 cursor-pointer"
                />
              </li>
              <li className="my-auto">
                <img
                  src={googlePlay}
                  alt=""
                  className="lg:h-16 hover:opacity-80 cursor-pointer "
                />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={qr} alt="QR" className="mx-auto w-32" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
