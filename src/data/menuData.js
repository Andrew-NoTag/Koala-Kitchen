import sampleImage from "../assets/menu/sample_dish.jpg";

const menuData = [
    {
      category: "Appetizers",
      items: [
        {
          name: "Spring Rolls",
          description: "Crispy rolls filled with fresh vegetables and served with sweet chili sauce.",
          image: sampleImage,
        },
        {
          name: "Dumplings",
          description: "Steamed dumplings filled with pork and chives.",
          image: "/assets/menu/dumplings.jpg",
        },
      ],
    },
    {
      category: "Entree",
      items: [
        {
          name: "Kung Pao Chicken",
          description: "Spicy stir-fried chicken with peanuts and vegetables.",
          image: "/assets/menu/kung_pao_chicken.jpg",
        },
        {
          name: "Beef Chow Fun",
          description: "Flat rice noodles stir-fried with beef and vegetables.",
          image: "/assets/menu/beef_chow_fun.jpg",
        },
      ],
    },
    {
      category: "Dessert",
      items: [
        {
          name: "Mango Pudding",
          description: "Creamy mango pudding topped with fresh mango slices.",
          image: "/assets/menu/mango_pudding.jpg",
        },
        {
          name: "Egg Tarts",
          description: "Flaky pastry filled with creamy egg custard.",
          image: "/assets/menu/egg_tarts.jpg",
        },
      ],
    },
  ];
  
  export default menuData;