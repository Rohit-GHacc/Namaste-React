import React from 'react';
import ReactDOM from 'react-dom/client'
{/* 
    <div id ="parent">
        <div id = "child">
            <h1>Hello Rohit learn react quickly</h1>
            <h1> Ok Boss !!</h1>   
        </div>
    </div> 
*/}

// this is JSX, HTML-like syntax
// JSX => Babel converts it to React.createElement => It returns a React Element object => Parcel converts it to HTML element before sending it to the browser
// const jsxHeading = <h1 className = "heading">Namaste Rohit Ji!! 🙏🙏</h1>
// const heading1 = React.createElement('h1', {key:'heading1'}, [jsxHeading, "Rohit! Learn React quickly!"])
// const heading2 = React.createElement('h2', {key:'heading2'}, "Ok Boss !!")
// const child = React.createElement('div',{id: "child"},[heading1, heading2])
// const parent = React.createElement('div',{id:"parent",},child)

// const Title = ()=><h1> 🙏 Namaste React - Akshay Saini 🙏</h1>
// const Parent = ()=>(
//     <div id='parent' className = 'parent'>
//         <Title/>
//         <h1> 🙏 Namaste Rohit !🙏</h1>
//         <h2> Learn React quickly</h2>
//     </div>
// )
// // <Parent/> === Parent() => false
// console.log("<Parent/> ",<Parent/>)
// console.log("Parent() ",Parent())
// console.log(<Parent/> === Parent())
const resList = [
    {
      "info": {
        "id": "101350",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/56f12dec-affc-4dd9-bf8b-29b924adedbc_101350.jpg",
        "locality": "Sector - 6",
        "areaName": "Fun City Mall",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4,
        "parentId": "721",
        "avgRatingString": "4.0",
        "totalRatingsString": "1.7K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/pizza-hut-sector-6-fun-city-mall-rest101350",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "428408",
        "name": "Burger Singh(Big Punjabi Burgers)",
        "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
        "locality": "Ekta Vihar",
        "areaName": "HUDA Sector 25",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Snacks",
          "Indian",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "375065",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.5K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹149",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/burger-singh-big-punjabi-burgers-ekta-vihar-huda-sector-25-rest428408",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "139884",
        "name": "The Pizzolives",
        "cloudinaryImageId": "336fe848fa16c04d15ab144e994f5309",
        "locality": "Fatehpuri Chowk",
        "areaName": "Fatehpuri Chowk",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "American",
          "Beverages",
          "Pastas",
          "Burgers",
          "Chinese"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "212686",
        "avgRatingString": "4.4",
        "totalRatingsString": "18K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 21:50:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/the-pizzolives-fatehpuri-chowk-rest139884",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "111810",
        "name": "Thakral Hotel (Sardar ji ka dhaba)",
        "cloudinaryImageId": "yhbxsloix4yxudt5blvg",
        "locality": "Dayal Chowk",
        "areaName": "100 No. Chowk",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Tandoor",
          "Punjabi"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "204016",
        "avgRatingString": "4.4",
        "totalRatingsString": "6.6K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 16:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/thakral-hotel-sardar-ji-ka-dhaba-dayal-chowk-100-no-chowk-rest111810",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "144401",
        "name": "Guru Kirpa Chole Bhature",
        "cloudinaryImageId": "d1554cb5dd6cff05ea849aa36e4de2f7",
        "locality": "Geeta Colony",
        "areaName": "NK Tower",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Street Food"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "92026",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.9K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 18:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹300 OFF",
          "subHeader": "ABOVE ₹1499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/guru-kirpa-chole-bhature-geeta-colony-nk-tower-rest144401",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "100237",
        "name": "Ahuja Sweets",
        "cloudinaryImageId": "2a82a8fab59d21750bad47426c50188a",
        "locality": "Dayal Chowk",
        "areaName": "100 No. Chowk",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "Desserts",
          "Continental",
          "Bakery",
          "Sweets",
          "Snacks",
          "Chinese"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "28067",
        "avgRatingString": "4.3",
        "totalRatingsString": "24K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/ahuja-sweets-dayal-chowk-100-no-chowk-rest100237",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "261188",
        "name": "Hangries",
        "cloudinaryImageId": "nycirvufofftmegjnrmm",
        "locality": "Gold Gym Road",
        "areaName": "Model Town",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Chinese",
          "Fast Food",
          "Burgers",
          "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "93241",
        "avgRatingString": "4.1",
        "totalRatingsString": "2.9K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/hangries-gold-gym-road-model-town-rest261188",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "227978",
        "name": "Amritsari Kulcha Hut",
        "cloudinaryImageId": "clp2njy3eko2okp7phz3",
        "locality": "Skylark Road",
        "areaName": "Skylark Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Street Food"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "32145",
        "avgRatingString": "4.3",
        "totalRatingsString": "474",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 17:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/amritsari-kulcha-hut-skylark-road-rest227978",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "110758",
        "name": "Pyramid",
        "cloudinaryImageId": "qb2mhtfivoalxucmlpy0",
        "locality": "Assandh Road",
        "areaName": "Model Town",
        "costForTwo": "₹1000 for two",
        "cuisines": [
          "Tandoor",
          "Chinese",
          "Italian",
          "Continental",
          "Snacks"
        ],
        "avgRating": 4.2,
        "parentId": "9044",
        "avgRatingString": "4.2",
        "totalRatingsString": "3.2K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/pyramid-assandh-road-model-town-rest110758",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "101907",
        "name": "Pasta La Vista",
        "cloudinaryImageId": "kexco0lvqlathggl2qu8",
        "locality": "Sector 11",
        "areaName": "Sector 12",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pastas",
          "Pizzas",
          "Italian",
          "Burgers"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "2372",
        "avgRatingString": "4.3",
        "totalRatingsString": "6.0K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/pasta-la-vista-sector-11-sector-12-rest101907",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "139883",
        "name": "The Dhaba",
        "cloudinaryImageId": "ig3vhlczswrrxqhvpbzz",
        "locality": "Sector 11",
        "areaName": "Sector 11",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tandoor",
          "Punjabi",
          "Chinese",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "207676",
        "avgRatingString": "4.3",
        "totalRatingsString": "9.1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/the-dhaba-sector-11-rest139883",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "666870",
        "name": "Cheesecake & co.",
        "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
        "locality": "Shivaji Market",
        "areaName": "Model Town",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Desserts"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "387417",
        "avgRatingString": "4.4",
        "totalRatingsString": "382",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/cheesecake-and-co-shivaji-market-model-town-rest666870",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "668457",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "9222019938518b7ebe87fa1c2ae382e4",
        "locality": "Gurudwara Rd",
        "areaName": "MODEL TOWN",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.7",
        "totalRatingsString": "136",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/grameen-kulfi-gurudwara-rd-model-town-rest668457",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "101329",
        "name": "Hot & Spicy",
        "cloudinaryImageId": "zxgwxbstbf8czcz97hix",
        "locality": "Fatehpuri Chowk",
        "areaName": "Captain Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "South Indian",
          "Biryani"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "97088",
        "avgRatingString": "4.3",
        "totalRatingsString": "8.9K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/hot-and-spicy-fatehpuri-chowk-captain-nagar-rest101329",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "297737",
        "name": "PVR Cafe",
        "cloudinaryImageId": "jzp2chluv5akessoslo1",
        "locality": "Unity Mall",
        "areaName": "Tehsil Camp",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Snacks",
          "Fast Food",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "11664",
        "avgRatingString": "4.2",
        "totalRatingsString": "77",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹79"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/pvr-cafe-unity-mall-tehsil-camp-rest297737",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "861499",
        "name": "Pastas By Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/5185b1ae-ac58-42a4-9fb3-9561798aa458_861499.jpg",
        "locality": "Fun City Mall",
        "areaName": "Captain Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pastas"
        ],
        "avgRating": 3.4,
        "parentId": "306806",
        "avgRatingString": "3.4",
        "totalRatingsString": "30",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/pastas-by-pizza-hut-fun-city-mall-captain-nagar-rest861499",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "563568",
        "name": "Amritsari Kulcha Hub",
        "cloudinaryImageId": "uq2f0savptdsmhrjs3lz",
        "locality": "Ring Road",
        "areaName": "Model Town",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "North Indian",
          "Street Food"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "4548",
        "avgRatingString": "4.5",
        "totalRatingsString": "295",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 17:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/amritsari-kulcha-hub-ring-road-model-town-rest563568",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "631321",
        "name": "Pizza Wings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/ebdf270d-8e2b-43de-ae89-03bdfd6ece46_631321.JPG",
        "locality": "Angel Prime Mall",
        "areaName": "Sector 11",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Rolls & Wraps",
          "Italian",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "159048",
        "avgRatingString": "4.2",
        "totalRatingsString": "3.6K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/pizza-wings-angel-prime-mall-sector-11-rest631321",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "456770",
        "name": "Burgrill - The Win Win Burger",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/50b45607-79db-45e1-a6d4-b61f06b9fb2c_456770.jpg",
        "locality": "Ring Road",
        "areaName": "Model Town",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Burgers",
          "Healthy Food",
          "American",
          "Salads",
          "Beverages",
          "Desserts",
          "Snacks"
        ],
        "avgRating": 4.3,
        "parentId": "302366",
        "avgRatingString": "4.3",
        "totalRatingsString": "3.0K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 02:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/burgrill-the-win-win-burger-ring-road-model-town-rest456770",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "100118",
        "name": "Pizza Galleria",
        "cloudinaryImageId": "9671e24edf2666fd05315d6b210f459e",
        "locality": "Lal Tanki Market",
        "areaName": "Model Town",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "American",
          "Beverages",
          "Pastas",
          "Burgers"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "6557",
        "avgRatingString": "4.2",
        "totalRatingsString": "13K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-e9013d04-0b14-4f92-853e-eb147dc2f946"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/panipat/pizza-galleria-lal-tanki-market-model-town-rest100118",
        "type": "WEBLINK"
      }
    }
  ];
const Header = ()=>(
    <div className = 'nav'>
        <img src='https://logodix.com/logo/852975.jpg' className = 'logo'/>
        <ul className = 'nav-list'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
)
const RestaurantCard = (props)=>{
    const {resData} = props;
    return (<div className = 'res-card'>
        <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.cloudinaryImageId}></img>
        <h3>{resData?.name}</h3>
        <h4> {resData.cuisines.join(', ')}</h4>
        <h4>{resData.avgRating} stars</h4>
        <h4>10 minutes</h4>
    </div>)
}
console.log(resList[0].info.name)
const Body = ()=>(
    <div>
        <input className ='search' type = 'text' placeholder='Search'/>
        <div className = 'res-card-container'>
            {
                resList.map((restaurant)=>(
                    <RestaurantCard resData = {restaurant.info}/>
                ))
            }
        </div>
    </div>
)
const Footer = ()=>(
    <div>

    </div>
)
const AppLayout = ()=>(
    <div className = 'layout'>
        <Header/>
        <Body/>
        <Footer/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>);


