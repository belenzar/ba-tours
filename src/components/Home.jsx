import { Link } from "react-router-dom";
import pin from "../assets/pin-point.svg";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col-reverse sm:flex-row items-center gap-8">
        <div className="sm:w-1/2 lg:w-2/5 flex flex-col justify-center text-center sm:text-left">
          <span className="w-20 h-2 bg-orange-500 dark:bg-white mb-6 mx-auto sm:mx-0"></span>

          <h1 className="uppercase text-5xl sm:text-7xl font-black flex flex-col leading-none dark:text-white">
            BA -<span className="text-4xl sm:text-6xl">Tours</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
            Explorá la ciudad que nunca duerme: desde los históricos cafés de
            San Telmo hasta los modernos barrios de Palermo. Experiencias
            únicas, tours culturales, gastronómicos y nocturnos que harán de tu
            viaje algo inolvidable.
          </p>

          <div className="flex mt-6 justify-center sm:justify-start">
            <Link
              to="/tours"
              className="uppercase py-2 px-4 rounded-lg bg-orange-500 border-2 border-transparent text-white text-md mr-4 hover:bg-orange-400 transition"
            >
              Ver Tours
            </Link>
          </div>
        </div>

        <div className="sm:w-1/3 lg:w-3/5 flex justify-center items-center">
          <img
            src={pin}
            alt="Imagen pin point del home"
            className="max-w-xs md:max-w-sm max-h-[350px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
