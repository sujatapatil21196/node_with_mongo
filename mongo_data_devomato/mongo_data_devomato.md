////city collection in devomato database
 db.city.find().pretty()
{
        "_id" : ObjectId("63b426b96081f4b9c983aa71"),
        "location_id" : 1,
        "location_name" : "New Delhi",
        "state_id" : "1",
        "state" : "Delhi",
        "country_name" : "India"
}
{
        "_id" : ObjectId("63b426b96081f4b9c983aa72"),
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : "2",
        "state" : "Maharastra",
        "country_name" : "India"
}

// restaurant collection in devomato database
db.restaurant.find().pretty()
{
        "_id" : ObjectId("63b42d3a6081f4b9c983aa73"),
        "restaurant_id" : 1,
        "restaurant_name" : "Domino's Pizza",
        "location_id" : 1,
        "location_name" : "New Delhi",
        "state_id" : "1",
        "Address" : "Ashok Vihar Phase 3, New Delhi",
        "restaurant_thumb" : "https://i.ibb.co/YT7d10g/Dominis.jpg",
        "avg_rating" : "4.5",
        "cost" : "Rs.300-Rs.800",
        "state" : "Delhi",
        "country_name" : "India",
        "cuisine_type" : [
                {
                        "cuisine_id" : 1,
                        "cuisine_name" : "veg"
                },
                {
                        "cuisine_id" : 2,
                        "cuisine_name" : "non-veg"
                }
        ]
}
{
        "_id" : ObjectId("63b42d3a6081f4b9c983aa74"),
        "restaurant_id" : 2,
        "restaurant_name" : "Hotel Dreamland",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : 2,
        "Address" : "Near Railway Station,Pune",
        "restaurant_thumb" : "https://i.ibb.co/9vnjMBD/dreamland.jpg",
        "avg_rating" : "3.5",
        "cost" : "Rs.500-Rs.800",
        "state" : "Maharashtra",
        "country_name" : "India",
        "cuisine_type" : [
                {
                        "cuisine_id" : 3,
                        "cuisine_name" : "north indian"
                },
                {
                        "cuisine_id" : 4,
                        "cuisine_name" : "south indian"
                }
        ]
}
{
        "_id" : ObjectId("63b42d3a6081f4b9c983aa75"),
        "restaurant_id" : 3,
        "restaurant_name" : "Radisson Blu Hotel",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : 2,
        "Address" : "Kharadi,Pune",
        "restaurant_thumb" : "https://i.ibb.co/SBgYm29/Radisson-blue.jpg",
        "avg_rating" : "4.0",
        "cost" : "Rs.300-Rs.1000",
        "state" : "Maharashtra",
        "country_name" : "India",
        "cuisine_type" : [
                {
                        "cuisine_id" : 3,
                        "cuisine_name" : "north indian"
                },
                {
                        "cuisine_id" : 4,
                        "cuisine_name" : "south indian"
                },
                {
                        "cuisine_id" : 5,
                        "cuisine_name" : "chinese"
                }
        ]
}
{
        "_id" : ObjectId("63b42d3a6081f4b9c983aa76"),
        "restaurant_id" : 4,
        "restaurant_name" : "Hotel Lemon Tree",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : 2,
        "Address" : "Near Pune Railway Station,Shaniwar wada,Pune",
        "restaurant_thumb" : "https://i.ibb.co/9HPNMg7/lemon-tree.jpg",
        "avg_rating" : "5.0",
        "cost" : "Rs.1000-Rs.1500",
        "state" : "Maharashtra",
        "country_name" : "India",
        "cuisine_type" : [
                {
                        "cuisine_id" : 6,
                        "cuisine_name" : "italian"
                },
                {
                        "cuisine_id" : 7,
                        "cuisine_name" : "turkish"
                },
                {
                        "cuisine_id" : 5,
                        "cuisine_name" : "chinese"
                }
        ]
}
{
        "_id" : ObjectId("63b42d3a6081f4b9c983aa77"),
        "restaurant_id" : 5,
        "restaurant_name" : "Hotel StayBird",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : 2,
        "Address" : "Hinjewadi,Pune",
        "restaurant_thumb" : "https://i.ibb.co/vz1nRFr/staybird.jpg",
        "avg_rating" : "3.5",
        "cost" : "Rs.300-Rs.700",
        "state" : "Maharashtra",
        "country_name" : "India",
        "cuisine_type" : [
                {
                        "cuisine_id" : 6,
                        "cuisine_name" : "italian"
                },
                {
                        "cuisine_id" : 7,
                        "cuisine_name" : "turkish"
                }
        ]
}
//cuisine_type(quick serach) collection in devomato database
> db.cuisine_type.find().pretty()
{
        "_id" : ObjectId("63b433686081f4b9c983aa78"),
        "cuisine_id" : 1,
        "cuisine_name" : "veg",
        "location_id" : 1,
        "location_name" : "New Delhi",
        "state_id" : "1",
        "state" : "Delhi",
        "country_name" : "India"
}
{
        "_id" : ObjectId("63b433686081f4b9c983aa79"),
        "cuisine_id" : 2,
        "cuisine_name" : "non-veg",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : "2",
        "state" : "Maharashtra",
        "country_name" : "India"
}
{
        "_id" : ObjectId("63b433686081f4b9c983aa7a"),
        "cuisine_id" : 3,
        "cuisine_name" : "north indian",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : "2",
        "state" : "Maharashtra",
        "country_name" : "India"
}
{
        "_id" : ObjectId("63b433686081f4b9c983aa7b"),
        "cuisine_id" : 4,
        "cuisine_name" : "south indian",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : "2",
        "state" : "Maharashtra",
        "country_name" : "India"
}
{
        "_id" : ObjectId("63b433686081f4b9c983aa7c"),
        "cuisine_id" : 5,
        "cuisine_name" : "chinese",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : "2",
        "state" : "Maharashtra",
        "country_name" : "India"
}
{
        "_id" : ObjectId("63b433686081f4b9c983aa7d"),
        "cuisine_id" : 6,
        "cuisine_name" : "italian",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : "2",
        "state" : "Maharashtra",
        "country_name" : "India"
}
{
        "_id" : ObjectId("63b433686081f4b9c983aa7e"),
        "cuisine_id" : 7,
        "cuisine_name" : "turkish",
        "location_id" : 2,
        "location_name" : "Pune",
        "state_id" : "2",
        "state" : "Maharashtra",
        "country_name" : "India"
}
////Meal collection in devomato database
{
        "_id" : ObjectId("63b5387dad06697c9a123a06"),
        "meal_id" : 1,
        "restaurant_id" : 1,
        "restaurant_name" : "Domino's Pizza",
        "state_id" : 1,
        "location_id" : 1,
        "location_name" : "new Delhi",
        "state_name" : "New Delhi",
        "restaurant_img" : "https://i.ibb.co/YT7d10g/Dominis.jpg",
        "menu_id" : 1
}
{
        "_id" : ObjectId("63b5387dad06697c9a123a07"),
        "meal_id" : 2,
        "restaurant_id" : 2,
        "restaurant_name" : "Hotel Dreamland",
        "state_id" : 2,
        "location_id" : 2,
        "location_name" : "pune",
        "state_name" : "Maharashtra",
        "restaurant_img" : "https://i.ibb.co/9vnjMBD/dreamland.jpg",
        "menu_id" : 2
}
{
        "_id" : ObjectId("63b5387dad06697c9a123a08"),
        "meal_id" : 3,
        "restaurant_id" : 3,
        "restaurant_name" : "Radisson Blu Hotel",
        "state_id" : 2,
        "location_id" : 2,
        "location_name" : "pune",
        "state_name" : "Maharashtra",
        "restaurant_img" : "https://i.ibb.co/SBgYm29/Radisson-blue.jpg",
        "menu_id" : 3
}
{
        "_id" : ObjectId("63b5387dad06697c9a123a09"),
        "meal_id" : 4,
        "restaurant_id" : 4,
        "restaurant_name" : "Hotel Lemon Tree",
        "state_id" : 2,
        "location_id" : 2,
        "location_name" : "pune",
        "state_name" : "Maharashtra",
        "restaurant_img" : "https://i.ibb.co/9HPNMg7/lemon-tree.jpg",
        "menu_id" : 4
}
{
        "_id" : ObjectId("63b5387dad06697c9a123a0a"),
        "meal_id" : 5,
        "restaurant_id" : 5,
        "restaurant_name" : "Hotel StayBird",
        "state_id" : 2,
        "location_id" : 2,
        "location_name" : "pune",
        "state_name" : "Maharashtra",
        "restaurant_img" : "https://i.ibb.co/vz1nRFr/staybird.jpg",
        "menu_id" : 5
}
//Menu collection in devomato database
> db.menu.find().pretty()
{
        "_id" : ObjectId("63b54903ad06697c9a123a0b"),
        "menu_id" : 1,
        "restaurant_id" : 1,
        "restaurant_name" : "Domino's Pizza",
        "state_id" : 1,
        "location_id" : 1,
        "location_name" : "new Delhi",
        "state_name" : "New Delhi",
        "meal_id" : 1,
        "menu_type" : [
                {
                        "menu_type" : 1,
                        "cuisine_id" : 1,
                        "cuisine_name" : "veg",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Peppy Paneer",
                                        "price" : "RS.450"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Farmhouse",
                                        "price" : "RS.350"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Mexican Green Wave",
                                        "price" : "RS.500"
                                }
                        ]
                },
                {
                        "menu_type" : 2,
                        "cuisine_id" : 2,
                        "cuisine_name" : "non-veg",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Chicken Pepperoni",
                                        "price" : "RS.700"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Chicken Sausage",
                                        "price" : "RS.650"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Chicken Dominator",
                                        "price" : "RS.560"
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63b54903ad06697c9a123a0c"),
        "menu_id" : 2,
        "restaurant_id" : 2,
        "restaurant_name" : "Hotel Dreamland",
        "state_id" : 2,
        "location_id" : 2,
        "location_name" : "Pune",
        "state_name" : "New Maharashtra",
        "meal_id" : 2,
        "menu_type" : [
                {
                        "menu_type" : 1,
                        "cuisine_id" : 3,
                        "cuisine_name" : "North Indian",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Rogan Josh",
                                        "price" : "RS.550"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Chole Bature",
                                        "price" : "RS.500"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Butter Chicken",
                                        "price" : "RS.600"
                                }
                        ]
                },
                {
                        "menu_type" : 2,
                        "cuisine_id" : 4,
                        "cuisine_name" : "South Indian",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Hyderabadi Biryani",
                                        "price" : "RS.650"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Chicken Chettinad",
                                        "price" : "RS.500"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Masala Dosa",
                                        "price" : "RS.500"
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63b54903ad06697c9a123a0d"),
        "menu_id" : 3,
        "restaurant_id" : 3,
        "restaurant_name" : "Raddison blue Hotel",
        "state_id" : 2,
        "location_id" : 2,
        "location_name" : "Pune",
        "state_name" : "Maharashtra",
        "meal_id" : 3,
        "menu_type" : [
                {
                        "menu_type" : 1,
                        "cuisine_id" : 3,
                        "cuisine_name" : "North Indian",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Chicken Dum Biryani",
                                        "price" : "RS.550"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Dal Bati Churama",
                                        "price" : "RS.600"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Aloo Samosa",
                                        "price" : "RS.300"
                                }
                        ]
                },
                {
                        "menu_type" : 2,
                        "cuisine_id" : 4,
                        "cuisine_name" : "South Indian",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Gonguru Mamsam",
                                        "price" : "RS.910"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Pongal",
                                        "price" : "RS.820"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Appams",
                                        "price" : "RS.850"
                                }
                        ]
                },
                {
                        "menu_type" : 3,
                        "cuisine_id" : 5,
                        "cuisine_name" : "Chinese",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Chow Mein",
                                        "price" : "RS.850"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Kung Pao Chicken",
                                        "price" : "RS.800"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Hot Pot",
                                        "price" : "RS.900"
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63b54903ad06697c9a123a0e"),
        "menu_id" : 4,
        "restaurant_id" : 4,
        "restaurant_name" : "Hotel Lemon Tree",
        "state_id" : 2,
        "location_id" : 2,
        "location_name" : "Pune",
        "state_name" : "Maharashtra",
        "meal_id" : 4,
        "menu_type" : [
                {
                        "menu_type" : 1,
                        "cuisine_id" : 6,
                        "cuisine_name" : "Italian",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Manti",
                                        "price" : "RS.1000"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Ravioli",
                                        "price" : "RS.1250"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Osso buco",
                                        "price" : "RS.1100"
                                }
                        ]
                },
                {
                        "menu_type" : 2,
                        "cuisine_id" : 7,
                        "cuisine_name" : "Turkish",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Yaprak dolma",
                                        "price" : "RS.1350"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Gozleme",
                                        "price" : "RS.1150"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Pide",
                                        "price" : "RS.1050"
                                }
                        ]
                },
                {
                        "menu_type" : 3,
                        "cuisine_id" : 5,
                        "cuisine_name" : "Chinese",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Ma Po Tofu",
                                        "price" : "RS.1450"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Peking duck",
                                        "price" : "RS.1050"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Chow Mein",
                                        "price" : "RS.1450"
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("63b54903ad06697c9a123a0f"),
        "menu_id" : 5,
        "restaurant_id" : 5,
        "restaurant_name" : "Hotel Stay Bird",
        "state_id" : 2,
        "location_id" : 2,
        "location_name" : "Pune",
        "state_name" : "Maharashtra",
        "meal_id" : 5,
        "menu_type" : [
                {
                        "menu_type" : 1,
                        "cuisine_id" : 6,
                        "cuisine_name" : "Italian",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Lasagna",
                                        "price" : "RS.550"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Osso buco",
                                        "price" : "RS.350"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Polenta",
                                        "price" : "RS.500"
                                }
                        ]
                },
                {
                        "menu_type" : 2,
                        "cuisine_id" : 7,
                        "cuisine_name" : "Turkish",
                        "menu" : [
                                {
                                        "menu_type_id" : 1,
                                        "menu_name" : "Perde pilav",
                                        "price" : "RS.550"
                                },
                                {
                                        "menu_type_id" : 2,
                                        "menu_name" : "Scallion Pancakes",
                                        "price" : "RS.350"
                                },
                                {
                                        "menu_type_id" : 3,
                                        "menu_name" : "Iskender kebab",
                                        "price" : "RS.500"
                                }
                        ]
                }
        ]
}
>
