import { SlMenu } from "react-icons/sl";

function Header() {
  return (
    <div className="mb-20 bg-purple-800">
      <div className="flex justify-between p-5">
        <div>
          <ul className="flex ">
            <li>LOGO</li>
            {/* <li>
              <button className="text-purple-800">İçerikler</button>
            </li> */}
          </ul>
        </div>

        <SlMenu size="18" />
        {/* <div>
          <ul className="flex ">
            <li>Kayit Ol</li>
            <li>Giriş Yap</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
