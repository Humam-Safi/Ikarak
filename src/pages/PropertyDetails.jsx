import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropertyGallery from "../components/properties/PropertyGallery";
import PropertyInfo from "../components/properties/PropertyInfo";
import ContactForm from "../components/forms/ContactForm";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch the property data from an API
    const sampleProperty = {
      id: 1,
      title: "شقة عصرية في وسط المدينة",
      type: "شقة",
      location: "وسط المدينة، حمص",
      price: "150,000 دولار",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      images: [
        "/images/properties/apartment1.jpg",
        "/images/properties/apartment2.jpg",
        "/images/properties/apartment3.jpg",
      ],
      features: ["موقف سيارات", "شرفة", "حماية"],
      amenities: ["مسبح", "نادي رياضي", "حماية 24/7"],
      description:
        "هذه الشقة العصرية تقع في قلب وسط مدينة حمص. تتميز بغرف فسيحة ومطبخ عصري وشرفة جميلة مع إطلالة على المدينة. المبنى يشمل حماية على مدار الساعة وهو قريب من جميع المرافق.",
    };

    setProperty(sampleProperty);
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {property ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <PropertyGallery images={property.images} />
              <PropertyInfo property={property} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h3 className="text-xl font-bold mb-4 font-arabic">
                  اتصل بالوكيل
                </h3>
                <ContactForm propertyId={id} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold font-arabic">العقار غير موجود</h2>
          <p className="text-gray-600 font-arabic">
            العقار الذي تبحث عنه غير موجود أو تم إزالته.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
