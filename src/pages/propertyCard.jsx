import { FaBuilding, FaMapMarkerAlt, FaStar, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

const PropertyCard = (props) => {
  return (
    <div style={{
      color: "#0F2460"
    }} className="w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <div className="h-48 sm:h-56 md:h-64 bg-gray-200 overflow-hidden">
          <img
            src={props.img}
            alt={props.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <span style={{
          
          fontSize: "14px",
          fontWeight: "500",
          backgroundColor: "#0f2560da",
          color: "#fff",
          padding: "5px 10px",

        }} className="absolute top-2 right-2 bg-yellow-100  px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <FaStar className="text-yellow-300" />
          {props.type}
        </span>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{props.title}</h3>
        <p className="text-gray-600 mb-4 flex items-center gap-1">
          <FaMapMarkerAlt />
          {props.location}
        </p>

        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4  text-sm md:text-base">
          <div className="flex items-center gap-1 md:gap-2">
            <FaBed className="" />
            <span>{props.bedrooms} غرفة</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <FaBath className="" />
            <span>{props.bathrooms} حمامات</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <FaRulerCombined className="" />
            <span>{props.area} m²</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="text-sm  mb-4">
            <h4 className="font-semibold mb-2">مميزات:</h4>
            <div className="flex flex-wrap gap-2">
              {props.features?.map((feature, index) => (
                <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs md:text-sm">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <span className=" font-semibold text-lg md:text-xl">ل.س {Number(props.price).toLocaleString()}</span>
            <a
              href={`/property/${props.id}`}
              className="w-full sm:w-auto bg-sky-900  hover:bg-sky-700 px-4 py-2 rounded-lg text-white transition-colors duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              عرض التفاصيل
              <FaBuilding className=" text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;