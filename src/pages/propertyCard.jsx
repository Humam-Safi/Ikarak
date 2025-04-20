import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PropertyCard = (props) => {
  return ( 
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-200"></div>
                <span className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaBuilding className="text-white" />
                  {props.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-blue-500" />
                  {props.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">{props.price}</span>
                  <Link
                    to="/property-details"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    عرض التفاصيل
                    <FaBuilding className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
   );
}
 
export default PropertyCard;