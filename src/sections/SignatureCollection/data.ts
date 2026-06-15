import kesarBadam from "../../assets/kulfi/kesarbadam.jpeg";
import pistaGreen from "../../assets/kulfi/pistagreen.jpeg";
import kajuKishmish from "../../assets/kulfi/kajukishmish.jpeg";
import rose from "../../assets/kulfi/rose.jpeg";
import paan from "../../assets/kulfi/paan.jpeg";
import mango from "../../assets/kulfi/mango.jpeg";
import litchi from "../../assets/kulfi/litchi.jpeg";
import guava from "../../assets/kulfi/guava.jpeg";
import coconut from "../../assets/kulfi/coconuts.jpeg";
import biscoff from "../../assets/kulfi/biscoff.jpeg";
import hazelnut from "../../assets/kulfi/hazelnut.jpeg";
import choconuts from "../../assets/kulfi/choconuts.jpeg";
import brownie from "../../assets/kulfi/brownie.jpeg";
import blueberry from "../../assets/kulfi/blueberry.jpeg";
import matka from "../../assets/kulfi/matka.jpeg";

export interface FlavourItem {
  id: number;
  title: string;
  image: string;
  description: string;
  ingredients: string[];
  tagline: string;
}

export interface MenuSection {
  title: string;
  subtitle: string;
  items: FlavourItem[];
}

export const collection: MenuSection[] = [
  {
    title: "THE OG's",
    subtitle: "The Classics That Started It All",
    items: [
      {
        id: 1,
        title: "Kesar Badam",
        image: kesarBadam,
        description:
          "Rich saffron and almond kulfi with a creamy, traditional finish.",
        ingredients: ["Kesar", "Badam", "Pure Milk"],
        tagline: "A timeless classic",
      },
      {
        id: 2,
        title: "Pista Green",
        image: pistaGreen,
        description:
          "Bright pistachio kulfi with a smooth, nutty richness.",
        ingredients: ["Pista", "Pure Milk"],
        tagline: "Classic and creamy",
      },
      {
        id: 3,
        title: "Kaju Kishmish",
        image: kajuKishmish,
        description:
          "Creamy kulfi layered with cashews and sweet raisins for the classic OG taste.",
        ingredients: ["Cashew", "Raisin", "Pure Milk"],
        tagline: "The original favourite",
      },
      {
        id: 4,
        title: "Rose",
        image: rose,
        description:
          "Soft floral rose flavour folded into rich, handcrafted kulfi.",
        ingredients: ["Rose", "Pure Milk"],
        tagline: "Elegance in every bite",
      },
      {
        id: 5,
        title: "Paan",
        image: paan,
        description:
          "Refreshing paan flavour with the richness of slow-made kulfi.",
        ingredients: ["Paan", "Pure Milk"],
        tagline: "Tradition with a twist",
      },
    ],
  },

  {
    title: "FRUITY POP",
    subtitle: "Fresh, Fruity & Fun",
    items: [
      {
        id: 6,
        title: "Mango",
        image: mango,
        description:
          "Juicy mango kulfi with a bright tropical profile.",
        ingredients: ["Alphonso", "Pure Milk"],
        tagline: "Summer in every bite",
      },
      {
        id: 7,
        title: "Litchi",
        image: litchi,
        description:
          "Delicate litchi flavour with a cool, creamy finish.",
        ingredients: ["Litchi", "Pure Milk"],
        tagline: "Light and luscious",
      },
      {
        id: 8,
        title: "Guava",
        image: guava,
        description:
          "Sweet-tart guava kulfi with a fresh fruit-forward taste.",
        ingredients: ["Guava", "Pure Milk"],
        tagline: "Bright, juicy, bold",
      },
      {
        id: 9,
        title: "Coconut",
        image: coconut,
        description:
          "Creamy coconut kulfi with a smooth tropical finish.",
        ingredients: ["Coconut", "Pure Milk"],
        tagline: "Tropical and creamy",
      },
    ],
  },

  {
    title: "LIT LICKS",
    subtitle: "Modern Indulgence",
    items: [
      {
        id: 10,
        title: "Lotus Biscoff",
        image: biscoff,
        description:
          "Caramelized biscuit flavour blended into a rich, creamy kulfi.",
        ingredients: ["Biscoff", "Crunch"],
        tagline: "Modern indulgence",
      },
      {
        id: 11,
        title: "Hazelnut",
        image: hazelnut,
        description:
          "Smooth hazelnut kulfi with a roasted nut finish.",
        ingredients: ["Hazelnut", "Pure Milk"],
        tagline: "Nutty indulgence",
      },
      {
        id: 12,
        title: "Choconuts",
        image: choconuts,
        description:
          "Chocolate and nutty crunch coming together in a decadent kulfi.",
        ingredients: ["Chocolate", "Nuts"],
        tagline: "Bold and decadent",
      },
      {
        id: 13,
        title: "Brownie",
        image: brownie,
        description:
          "Fudgy brownie-inspired kulfi with a dessert-like finish.",
        ingredients: ["Brownie", "Pure Milk"],
        tagline: "Dessert in a scoop",
      },
      {
        id: 14,
        title: "Blueberry Cheesecake",
        image: blueberry,
        description:
          "Creamy blueberry cheesecake kulfi with a tangy-sweet bite.",
        ingredients: ["Blueberry", "Cheesecake"],
        tagline: "Creamy with a twist",
      },
    ],
  },

  {
    title: "MATKA KULFI",
    subtitle: "",
    items: [
      {
        id: 15,
        title: "Shahi Meva Matka Kulfi",
        image: matka,
        description:
          "A single premium matka kulfi loaded with meva richness and slow-crafted depth.",
        ingredients: ["Meva", "Royal", "Pure Milk"],
        tagline: "Royal. Rich. Indulgent.",
      },
    ],
  },
];
