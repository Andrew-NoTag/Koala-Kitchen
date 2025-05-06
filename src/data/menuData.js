import tiramisuImage from "../assets/menu/tiramisu.jpg";
import coldNoodleImage from "../assets/menu/cold_noodles.jpg";
import saltedBeefRibsImage from "../assets/menu/salted_beef_ribs.jpg";
import oystersImage from "../assets/menu/oysters.png";
import spicyFishFilletImage from "../assets/menu/spicy_fish_fillet.jpg";
import shrimpTofuCasseroleImage from "../assets/menu/shrimp_tofu_casserole.jpg";
import filetMignonImage from "../assets/menu/filet_mignon.jpg";
import cilantroBeefSaladImage from "../assets/menu/cilantro_beef_salad.jpg";
import fishHeadCasseroleImage from "../assets/menu/fish_head_casserole.jpg";
import beefBrisketStewImage from "../assets/menu/beef_brisket_stew.png";
import baconAlfredoPastaImage from "../assets/menu/bacon_alfredo_pasta.jpg";

const menuData = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Cold Noodles",
        description: "Chilled soba noodles.",
        image: coldNoodleImage,
        ingredients: [
          "noodles",
          "sesame sauce",
          "cucumber",
          "chili oil",
          "sprite",
        ],
      },
      {
        name: "Salted Beef Ribs",
        description: "Grilled beef ribs seasoned with salt and green onions.",
        image: saltedBeefRibsImage,
        ingredients: ["beef ribs", "green onions", "salt"],
      },
      {
        name: "Oysters",
        description: "Fresh oysters served with lemon.",
        image: oystersImage,
        ingredients: ["oysters", "lemon"],
      },
      {
        name: "Cilantro Beef Salad",
        description:
          "Thinly sliced beef tossed with fresh cilantro and spices.",
        image: cilantroBeefSaladImage,
        ingredients: ["beef", "cilantro", "chili oil", "soy sauce"],
      },
    ],
  },
  {
    category: "Entree",
    items: [
      {
        name: "Spicy Fish Fillet",
        description: "Tender fish fillets cooked in a spicy Sichuan broth.",
        image: spicyFishFilletImage,
        ingredients: ["fish fillet", "Sichuan peppercorns", "chili oil"],
      },
      {
        name: "Shrimp Tofu Casserole",
        description:
          "A hearty casserole with shrimp and tofu in a savory sauce.",
        image: shrimpTofuCasseroleImage,
        ingredients: ["shrimp", "tofu", "soy sauce", "ginger"],
      },
      {
        name: "Filet Mignon",
        description: "Grilled filet mignon served with a side of asparagus.",
        image: filetMignonImage,
        ingredients: ["beef filet", "butter", "garlic", "asparagus"],
      },
      {
        name: "Fish Head Casserole",
        description:
          "A flavorful casserole featuring fish head and vegetables.",
        image: fishHeadCasseroleImage,
        ingredients: ["fish head", "tofu", "ginger", "green onions"],
      },
      {
        name: "Beef Brisket Stew",
        description: "Slow-cooked beef brisket with radish in a savory broth.",
        image: beefBrisketStewImage,
        ingredients: ["beef brisket", "radish", "soy sauce", "ginger"],
      },
      {
        name: "Bacon Alfredo Pasta",
        description: "Creamy Alfredo pasta topped with crispy bacon.",
        image: baconAlfredoPastaImage,
        ingredients: ["pasta", "bacon", "cream", "Parmesan cheese"],
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        description:
          "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
        image: tiramisuImage,
        ingredients: ["ladyfingers", "mascarpone", "coffee", "cocoa powder"],
      },
    ],
  },
];

export default menuData;
