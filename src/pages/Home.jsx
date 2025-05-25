// Optimized Home Page
import React, {
  useState,
  useEffect,
  Suspense,
  lazy,
  useMemo,
  useCallback,
} from "react";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaClock,
  FaStar,
  FaSearch,
  FaArrowRight,
  FaPhone,
} from "react-icons/fa";
import propertiesData from "../data/properties.json";

const LazyPropertyCard = lazy(() => import("./propertyCard"));
const LazyWhatWeDo = lazy(() => import("./whatWeDo"));
const LazyAnimatedTitle = lazy(() => import("../components/common/AnimatedTitle"));

const PropertySection = React.memo(({ title, properties, link, animation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12" dir="rtl">
      <div className="flex items-center justify-center mb-8 relative">
        <span className="w-12 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full mr-4"></span>
        <Suspense fallback={<h2 className="text-center">جارٍ التحميل...</h2>}>
          <LazyAnimatedTitle
            text={title}
            tag="h2"
            animation={animation}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent"
          />
        </Suspense>
        <span className="w-12 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full ml-4"></span>
      </div>

      {properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 3).map((property) => (
            <Suspense
              fallback={
                <div
                  key={property.id}
                  className="animate-pulse h-64 bg-gray-200 rounded-lg"
                  aria-label="جارٍ التحميل"
                />
              }
              key={property.id}
            >
              <LazyPropertyCard {...property} />
            </Suspense>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-lg shadow-sm" role="alert">
          <p className="text-gray-600 text-lg">لا توجد عقارات متاحة حاليًا</p>
        </div>
      )}

      <Link
        to={link}
        className="mt-8 mx-auto bg-primary-600 text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit transition-all duration-300 hover:bg-primary-700"
      >
        عرض الكل
        <FaArrowRight className="transform transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
});

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [offers, setOffers] = useState([]);
  const [newProps, setNewProps] = useState([]);

  const filterProperties = useMemo(() => {
    const properties = propertiesData.properties || [];
    return {
      featured: properties.filter((p) => p.state === "featured"),
      offers: properties.filter((p) => p.state === "offer"),
      new: properties.filter((p) => p.state === "new"),
    };
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    try {
      const properties = propertiesData.properties || [];
      setFeaturedProperties(
        properties.filter((property) => property.state === "featured")
      );
      setOfferProperties(
        properties.filter((property) => property.state === "offer")
      );
      setNewProperties(
        properties.filter((property) => property.state === "new")
      );
    } catch (error) {
      console.error("Error loading properties:", error);
    } finally {
      setIsLoading(false);
      setIsLoaded(true); // Remove setTimeout for instant load
    }
=======
    setFeatured(filterProperties.featured);
    setOffers(filterProperties.offers);
    setNewProps(filterProperties.new);
  }, [filterProperties]);
>>>>>>> 8bdf4fc (upload)

  const handleScroll = useCallback(() => {
    let ticking = false;
    return () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          document.documentElement.style.setProperty(
            "--parallax",
            `${Math.min(scrollY * 0.1, 60)}px`
          );
          ticking = false;
        });
        ticking = true;
      }
    };
  }, [])();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const heroFeatures = useMemo(
    () => [
      { text: "موثوق", icon: <FaStar className="text-secondary-100" /> },
      { text: "سريع", icon: <FaClock className="text-secondary-100" /> },
      { text: "شفافية", icon: <FaCheck className="text-secondary-100" /> },
    ],
    []
  );

<<<<<<< HEAD
  const PropertySection = React.memo(
    ({ title, properties, link, animation, index }) => (
      <div
        style={sectionTransform(index)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        dir="rtl"
      >
        <div className="flex items-center justify-center mb-8 relative">
          <span className="w-12 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full mr-4"></span>
          <AnimatedTitle
            text={title}
            tag="h2"
            animation={animation}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent drop-shadow-md"
            style={{
              fontFamily: '"Tajawal", "Noto Sans Arabic", "Arial", sans-serif',
            }}
            aria-label={title}
          />
          <span className="w-12 h-1 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full ml-4"></span>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-pulse text-xl text-gray-600">
              جارٍ التحميل...
            </div>
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 3).map((property, idx) => (
              <div
                key={property.id}
                className="transform transition-all duration-300"
                style={{
                  transitionDelay: `${idx * 0.05}s`, // Reduced delay
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                <Suspense
                  fallback={
                    <div className="animate-pulse h-64 bg-gray-200 rounded-lg" />
                  }
                >
                  <LazyPropertyCard
                    img={property.image?.[0] || "/fallback-image.jpg"}
                    type={property.type}
                    kind={property.kind}
                    location={property.location}
                    title={property.title}
                    price={property.price}
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    area={property.area}
                    features={property.features}
                    id={property.id}
                  />
                </Suspense>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600 text-lg">لا توجد عقارات متاحة حاليًا</p>
          </div>
        )}
        <Link
          to={link}
          className="mt-8 mx-auto bg-primary-600  text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit transition-all duration-300 "
        >
          عرض الكل
          <FaArrowRight className="transform  transition-transform" />
        </Link>
      </div>
    )
  );
=======
  useEffect(() => {
    const img = new Image();
    img.src = "/images/estate.jpg";
    img.onload = () => {
      document.documentElement.style.setProperty("--hero-bg", `url('/images/estate.jpg')`);
    };
  }, []);
>>>>>>> 8bdf4fc (upload)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
          style={{
            backgroundImage: "var(--hero-bg, none)",
            transform: "translateY(var(--parallax)) scale(1.03)",
            filter: "brightness(0.65)",
<<<<<<< HEAD
          }}عُمرَانَك
          loading="lazy" // Suggest lazy loading attribute
=======
          }}
>>>>>>> 8bdf4fc (upload)
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-gray-900/90" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex flex-col justify-center items-center text-center">
          <Suspense fallback={<h1 className="text-white">مرحباً بكم</h1>}>
            <LazyAnimatedTitle
              text="مرحباً بكم في عُمرَانَك"
              animation="reveal"
              className="text-4xl sm:text-5xl font-bold text-white py-4"
            />
            <LazyAnimatedTitle
              text="شريكك الموثوق في مجال العقارات"
              tag="p"
              animation="glow"
              className="text-xl text-white mb-8 bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm"
              delay={0.6}
            />
          </Suspense>
          <Link
            to="/properties"
            className="group relative bg-secondary-500 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md transition hover:bg-secondary-600"
          >
<<<<<<< HEAD
            <div
              style={{ width: "100%", maxWidth: "500px", minWidth: "400px" }}
            >
              <AnimatedTitle
                text="مرحباً بكم في عُمرَانَك " 
                
                animation="reveal"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white py-4 mb-2"
              />
            </div>
          </div>

          <AnimatedTitle
            text="شريكك الموثوق في مجال العقارات"
            tag="p"
            animation="glow"
            className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-2xl bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm"
            delay={0.6}
          />

          <div
            className="transform transition-all duration-700 delay-900"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "scale(1)" : "scale(0.9)",
            }}
          >
            <Link
              to="/properties"
              className="group relative bg-secondary-500 text-gray-900 px-6 py-3 rounded-full text-base sm:text-lg font-semibold  transition-all duration-300 flex items-center gap-2 shadow-md"
            >
              <FaSearch className="text-lg transition-transform" />
              تصفح العقارات
              <FaArrowRight className="text-base  transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 sm:gap-6">
          {[
            { text: "موثوق", icon: <FaStar className="text-secondary-400" /> },
            { text: "سريع", icon: <FaClock className="text-secondary-400" /> },
            {
              text: "شفافية",
              icon: <FaCheck className="text-secondary-400" />,
            },
          ].map((item, index) => (
=======
            <FaSearch />
            تصفح العقارات
            <FaArrowRight className="transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="absolute bottom-8 w-full flex justify-center gap-4 sm:gap-6">
          {heroFeatures.map((item, i) => (
>>>>>>> 8bdf4fc (upload)
            <div
              key={i}
              className="px-4 py-2 bg-gray-900/30 backdrop-blur-sm rounded-full flex items-center gap-2 text-white text-sm transition hover:bg-gray-900/50"
            >
              {item.icon}
<<<<<<< HEAD
              <span className="text-white text-sm sm:text-base">
                {item.text}
              </span>
=======
              {item.text}
>>>>>>> 8bdf4fc (upload)
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
<<<<<<< HEAD
            className="w-full fill-white"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
=======
            className="w-full fill-gray-50 transform -mb-2"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L0,120Z"
              className="animate-wave"
            />
>>>>>>> 8bdf4fc (upload)
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <PropertySection
          title="عقارات مميزة"
          properties={featured}
          link="/featured-properties"
          animation="shimmer"
        />
        <PropertySection
          title="عروض حصرية"
          properties={offers}
          link="/offer-properties"
          animation="shadow"
        />
        <PropertySection
          title="عقارات قيد الإنشاء"
          properties={newProps}
          link="/new-properties"
          animation="shimmer"
        />
      </section>

<<<<<<< HEAD
      {/* Why Choose Us Section */}
      <Suspense
        fallback={
          <div className="py-16 text-center text-gray-600">جارٍ التحميل...</div>
        }
      >
=======
      <Suspense fallback={<div className="text-center py-16" aria-live="polite">جارٍ التحميل...</div>}>
>>>>>>> 8bdf4fc (upload)
        <LazyWhatWeDo />
      </Suspense>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white text-center">
        <Suspense fallback={<h2 className="text-2xl">هل تبحث عن عقار؟</h2>}>
          <LazyAnimatedTitle
            text="هل تبحث عن عقار أحلامك؟"
            tag="h2"
            animation="wave"
            className="text-3xl sm:text-4xl font-bold mb-4"
          />
        </Suspense>
        <p className="text-lg text-white mb-8">
          تواصل معنا اليوم واسمح لنا بمساعدتك في العثور على العقار المثالي
          <br />
          <span className="text-secondary-300">خبراء عقاريون في خدمتك</span>
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          <FaPhone className="inline-block mr-2" />
          اتصل بنا
        </Link>
      </section>
    </div>
  );
};

<<<<<<< HEAD
// Debounce function to limit scroll event frequency
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Home;
=======
export default Home;
>>>>>>> 8bdf4fc (upload)
