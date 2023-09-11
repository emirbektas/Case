import { SlMenu } from "react-icons/sl";
import { SiStreamlit } from "react-icons/si";

function Header() {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between p-5 md:px-14 xl:px-24 2xl:px-40">
        <div className="my-auto">
          <ul className="flex gap-5">
            <li className="flex text-purple-800 gap-2 drop-shadow-glow">
              <SiStreamlit size="30" className="my-auto" />
              <span className="my-auto ">STREAM</span>
            </li>
            <li className="hidden md:flex">
              <button className="bg-purple-950 p-2 rounded-2xl text-sm text-white">
                Content
              </button>
            </li>
          </ul>
        </div>

        <button
          data-dropdown-toggle="dropdownDivider"
          className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          <SlMenu size="18" className="md:hidden" />
        </button>

        <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDividerButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-600 dark:hover:text-white"
              >
                Contents
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Log in
            </a>
          </div>
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
            >
              Sign up
            </a>
          </div>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-4">
            <li>
              <button className="bg-purple-950 p-2 rounded-2xl text-sm">
                Sign Up
              </button>
            </li>
            <li>
              <button className="bg-purple-950 p-2 rounded-2xl text-sm">
                Log in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
