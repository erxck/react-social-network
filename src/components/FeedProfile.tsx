import ImgBg from "../assets/img/bg.jpg";
import ImgProfile from "../assets/img/bart-profile.jpg";

export default function FeedProfile(): JSX.Element {
  return (
    <section className="hidden w-full md:block max-w-[250px] h-fit">
      <div className="bg-gray-800 border border-gray-700 rounded-lg">
        <div className="flex flex-col items-center">
          <img src={ImgBg} alt="Background" className="rounded-t-lg" />
          <div className="flex items-center justify-center flex-col -mt-5">
            <img
              src={ImgProfile}
              alt="Profile"
              className="rounded-full w-16 h-16"
            />
            <a
              className="text-xl font-bold mt-3 hover:text-blue-400 duration-300"
              href="/profile"
            >
              Erick Rian
            </a>
            <p className="text-gray-400">@erick</p>
          </div>
        </div>
        <div className="px-4 py-3 space-y-4">
          <p className="text-xs text-center text-gray-400">
            Desenvolvedor Full-Stack | TypeScript, React, Next.js, Node.js
          </p>
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center flex-col">
              <h1 className="text-sm font-bold text-white">Seguindo</h1>
              <p className="text-gray-400 text-xs">100</p>
            </div>
            <div className="flex items-center flex-col">
              <h1 className="text-sm font-bold text-white">Seguidores</h1>
              <p className="text-gray-400 text-xs">100</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-center">
        <p className="font-bold text-base text-gray-300">
          <span className="text-emerald-500">E</span>rick{" "}
          <span className="text-emerald-500">R</span>ian 2023
        </p>
      </div>
    </section>
  );
}
