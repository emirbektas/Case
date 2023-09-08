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
    <div className="p-10">
      <div className="flex flex-col">
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2">Yardim</h1>
          <a href="">Frequently Asked Questions</a>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2">Legal</h1>
          <ul>
            <li className="flex flex-col gap-2">
              <a href="">Telif Hakki Uyarisi</a>
              <a href="">Müsteri Aydinlatma Metni</a>
              <a href="">Cerez Aydinlatma Metni</a>
              <a href="">Cerez Ayarlari</a>
            </li>
          </ul>
        </div>
        <div className="text-center mb-4">
          <button className="bg-blue-900 text-white p-3 rounded-xl">
            Canli Destek
          </button>
          <ul className="flex justify-center mt-4 gap-2 ">
            <li>
              <AiFillTwitterCircle size="50" />
            </li>
            <li>
              <AiFillFacebook size="50" />
            </li>
            <li>
              <AiFillInstagram size="50" />
            </li>
            <li>
              <AiFillYoutube size="50" />
            </li>
            <li>
              <AiFillLinkedin size="50" />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex flex-col text-center justify-center gap-1">
          <p>Digiturk bir beIN MEDIA GROUP kuruluşudur.</p>
          <p>2023 Her Hakki saklidir</p>
        </div>
        <div>
          <ul className="flex gap-2 my-2">
            <li>
              <img src={appStore} alt="" />
            </li>
            <li>
              <img src={googlePlay} alt="" />
            </li>
          </ul>
          <div>
            <img src={qr} alt="QR" className="mx-auto w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
