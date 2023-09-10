const wines = [
  { title: "Chapel Hill Shiraz", price: "$56", tag: "AU | Bottle" },
  { title: "Catena Malbec", price: "$59", tag: "AR | Bottle" },
  { title: "La Vieille Rosé", price: "$44", tag: "FR | 750 ml" },
  { title: "Rhino Pale Ale", price: "$31", tag: "CA | 750 ml" },
  { title: "Irish Guinness", price: "$26", tag: "IE | 750 ml" },
];

const cocktails = [
  { title: "Aperol Spritz", price: "$20", tag: "Aperol | Villa Marchesi prosecco | soda | 30ml" },
  { title: "Dark 'N' Stormy", price: "$16", tag: "Dark rum | Ginger beer | Slice of lime. " },
  { title: "Daiquiri", price: "$10", tag: "Rum | Citrus juice | Sugar" },
  { title: "Old Fashioned", price: "$31", tag: "Bourbon | Brown sugar | Angostura Bitters" },
  { title: "Negroni", price: "$26", tag: "Gin | Sweet Vermouth | Campari | Orange garnish" },
];

const awards = [
  { image: require("../assets/award02.png"), title: "Bib Gourmond", description: "Lorem ipsum dolor sit amet, consectetur." },
  { image: require("../assets/award01.png"), title: "Rising Star", description: "Lorem ipsum dolor sit amet, consectetur." },
  { image: require("../assets/award05.png"), title: "AA Hospitality ", description: "Lorem ipsum dolor sit amet, consectetur." },
  { image: require("../assets/award03.png"), title: "Outstanding Chef", description: "Lorem ipsum dolor sit amet, consectetur." },
];

const data = { wines, cocktails, awards };

export default data;