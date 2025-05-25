export const dollarToSyp = 10000;

export const filterProperties = (properties, filter) => {
  return properties.filter((property) => {
    // Type filter
    if (filter.type !== "الكل" && property.type !== filter.type) {
      return false;
    }

    // Location filter
    if (filter.location !== "الكل") {
      if (property.city !== filter.location) {
        return false;
      }
    }

    // Status filter
    if (filter.status !== "الكل") {
      const statusMap = {
        "جديد": "new",
        "مستعمل": "used",
        "قيد الإنشاء": "under_construction"
      };
      if (property.state !== statusMap[filter.status]) {
        return false;
      }
    }

    // Bedrooms filter
    if (filter.bedrooms !== "أي") {
      if (filter.bedrooms === "5+") {
        // For "5+" case, show properties with 5 or more bedrooms
        if (property.bedrooms < 5) {
          return false;
        }
      } else {
        // For specific numbers (1, 2, 3, 4), show properties with exactly that number
        const requiredBedrooms = parseInt(filter.bedrooms);
        if (property.bedrooms !== requiredBedrooms) {
          return false;
        }
      }
    }

    // Bathrooms filter
    if (filter.bathrooms !== "أي") {
      const requiredBathrooms = filter.bathrooms === "4+" ? 4 : parseInt(filter.bathrooms);
      if (property.bathrooms < requiredBathrooms) {
        return false;
      }
      // For "4+" case, ensure property has at least 4 bathrooms
      if (filter.bathrooms === "4+" && property.bathrooms < 4) {
        return false;
      }
    }

    // Area filter
    if (property.area < filter.areaRange[0] || property.area > filter.areaRange[1]) {
      return false;
    }

    // Price range filter with currency conversion
    const propertyPrice = Number(property.price);
    const propertyCurrency = property.currency;
    const [minPrice, maxPrice] = filter.priceRange;
    const filterCurrency = filter.currency;

    let priceInFilterCurrency = propertyPrice;

    if (propertyCurrency !== filterCurrency) {
      if (propertyCurrency === "usd") {
        // Convert property price from USD to filterCurrency (SYP)
        priceInFilterCurrency = propertyPrice * dollarToSyp;
      } else if (propertyCurrency === "syp") {
        // Convert property price from SYP to filterCurrency (USD)
        priceInFilterCurrency = propertyPrice / dollarToSyp;
      }
    }

    if (priceInFilterCurrency < minPrice || priceInFilterCurrency > maxPrice) {
      return false;
    }

    // Features filter
    if (filter.features.length > 0) {
      const hasAllFeatures = filter.features.every(selectedFeatureName => 
        property.features.some(propertyFeature => 
          propertyFeature.name === selectedFeatureName && propertyFeature.has
        )
      );
      if (!hasAllFeatures) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    // Sort by
    switch (filter.sortBy) {
      case "price_asc":
      case "price_desc": {
        const priceA = Number(a.price);
        const priceB = Number(b.price);
        const currencyA = a.currency;
        const currencyB = b.currency;
        
        // Convert both prices to the same currency (SYP) for comparison
        const priceAInSYP = currencyA === "usd" ? priceA * dollarToSyp : priceA;
        const priceBInSYP = currencyB === "usd" ? priceB * dollarToSyp : priceB;
        
        return filter.sortBy === "price_asc" ? priceAInSYP - priceBInSYP : priceBInSYP - priceAInSYP;
      }
      case "area_asc":
        return a.area - b.area;
      case "area_desc":
        return b.area - a.area;
      case "date":
      default:
        // Sort by date (newest first)
        const dateA = new Date(a.createdAt || a.id);
        const dateB = new Date(b.createdAt || b.id);
        return dateB - dateA;
    }
  });
}; 