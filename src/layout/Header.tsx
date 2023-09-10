import { SlMenu } from "react-icons/sl";

function Header() {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between p-5">
        <div className="my-auto">
          <ul className="flex gap-5">
            <li>LOGO</li>
            <li className="hidden md:flex">
              <button className="text-white">İçerikler</button>
            </li>
          </ul>
        </div>

        <SlMenu size="18" className="md:hidden" />
        <div className="hidden md:flex">
          <ul className="flex gap-4">
            <li>
              <button className="bg-slate-800 p-2 rounded-2xl text-sm">
                Kayit Ol
              </button>
            </li>
            <li>
              <button className="bg-yellow-900 p-2 rounded-2xl text-sm">
                Giriş Yap
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
