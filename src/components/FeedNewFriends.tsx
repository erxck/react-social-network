import ImgProfile from "../assets/img/bart-profile.jpg";
import { iconUser } from "./Icons";

export default function FeedNewFriends(): JSX.Element {
  return (
    <section className="hidden lg:block w-full max-w-[250px] h-fit bg-gray-800 border border-gray-700 rounded-lg py-4 px-2">
      <h1 className="text-xl font-bold px-2 text-white">Novos usuários</h1>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex justify-between items-center gap-2 hover:bg-gray-700/60 p-2 rounded-lg duration-300">
          <a className="flex items-center gap-2 w-full" href="/">
            <img
              src={ImgProfile}
              alt="Profile"
              className="rounded-full w-10 h-10"
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold hover:text-blue-400 duration-300">
                Neymar N10
              </h1>
              <p className="text-gray-400 text-xs">@neymar</p>
            </div>
          </a>
          <button className="hover:text-emerald-600 duration-300 w-7 h-7">
            {iconUser}
          </button>
        </div>

        <div className="flex justify-between items-center gap-2 hover:bg-gray-700/60 p-2 rounded-lg duration-300">
          <a className="flex items-center gap-2 w-full" href="/">
            <img
              src={ImgProfile}
              alt="Profile"
              className="rounded-full w-10 h-10"
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold hover:text-blue-400 duration-300">
                Cristiano Ronaldo
              </h1>
              <p className="text-gray-400 text-xs">@cristiano</p>
            </div>
          </a>
          <button className="hover:text-emerald-500 duration-300 w-7 h-7">
            {iconUser}
          </button>
        </div>

        <div className="flex justify-between items-center gap-2 hover:bg-gray-700/60 p-2 rounded-lg duration-300">
          <a className="flex items-center gap-2 w-full" href="/">
            <img
              src={ImgProfile}
              alt="Profile"
              className="rounded-full w-10 h-10"
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold hover:text-blue-400 duration-300">
                Lionel Messi
              </h1>
              <p className="text-gray-400 text-xs">@messi</p>
            </div>
          </a>
          <button className="hover:text-emerald-500 duration-300 w-7 h-7">
            {iconUser}
          </button>
        </div>
      </div>
    </section>
  );
}
