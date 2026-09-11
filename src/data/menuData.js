/**
 * ============================================================================
 * Gourmet Palmer — Menu Data (menuData.js)
 * ============================================================================
 * NOTE: Contains 36 curated menu items across 6 categories.
 * All 7 original legacy menu items are preserved and flagged with `isOriginal: true`.
 * Prices, descriptions, and dietary notes are placeholder data for presentation.
 * ============================================================================
 */

export const menuCategories = [
  { id: "starters", name: "Starters & Soups" },
  { id: "seafood", name: "Seafood & Raw Bar" },
  { id: "mains", name: "Mains & Prime Cuts" },
  { id: "pasta", name: "Handmade Pasta" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages & Cellar" },
];

export const menuItems = [
  // --------------------------------------------------------------------------
  // 1. Starters & Soups
  // --------------------------------------------------------------------------
  {
    id: "artichoke-salad",
    name: "Artichoke Salad",
    description: "Tender baby artichoke hearts, shaved parmesan reggiano, wild arugula, lemon-thyme vinaigrette.",
    price: "$18",
    category: "starters",
    dietary: ["GF", "VG"],
    isOriginal: true,
  },
  {
    id: "crispy-brussel-sprouts",
    name: "Crispy Brussel Sprouts",
    description: "Flash-crisped brussels sprouts, pomegranate glaze, toasted pine nuts, smoked sea salt.",
    price: "$16",
    category: "starters",
    dietary: ["GF", "VG"],
    isOriginal: true,
  },
  {
    id: "mushroom-soup",
    name: "Mushroom Soup",
    description: "Velvety blend of wild forest mushrooms, black truffle oil, fresh chives, sourdough crisps.",
    price: "$17",
    category: "starters",
    dietary: ["VG"],
    isOriginal: true,
  },
  {
    id: "burrata-caprese",
    name: "Heirloom Burrata Caprese",
    description: "Creamy artisanal burrata, heirloom garden tomatoes, aged balsamic reduction, basil oil.",
    price: "$20",
    category: "starters",
    dietary: ["GF", "VG"],
    isOriginal: false,
  },
  {
    id: "truffle-arancini",
    name: "Truffle Arancini",
    description: "Crispy risotto bites stuffed with fontina cheese, black truffle aioli, micro greens.",
    price: "$19",
    category: "starters",
    dietary: ["VG"],
    isOriginal: false,
  },
  {
    id: "hamachi-crudo-starter",
    name: "Hamachi Crudo",
    description: "Yellowtail sashimi, white ponzu, jalapeño rings, crispy shallots, citrus pearls.",
    price: "$22",
    category: "starters",
    dietary: ["GF"],
    isOriginal: false,
  },

  // --------------------------------------------------------------------------
  // 2. Seafood & Raw Bar
  // --------------------------------------------------------------------------
  {
    id: "salmon",
    name: "Salmon",
    description: "Pan-roasted wild king salmon, celery root purée, braised fennel, saffron reduction.",
    price: "$38",
    category: "seafood",
    dietary: ["GF"],
    isOriginal: true,
  },
  {
    id: "omakase",
    name: "Omakase",
    description: "Chef’s daily selection of premium coastal sashimi and nigiri with house-pickled ginger.",
    price: "$58",
    category: "seafood",
    dietary: ["GF"],
    isOriginal: true,
  },
  {
    id: "lobster-tail-ceviche",
    name: "Lobster Tail Ceviche",
    description: "Poached Maine lobster tail, key lime marinade, avocado mousse, pickled shallot, plantain chips.",
    price: "$32",
    category: "seafood",
    dietary: ["GF"],
    isOriginal: true,
  },
  {
    id: "chilean-sea-bass",
    name: "Chilean Sea Bass",
    description: "Miso-glazed sea bass, sautéed baby bok choy, ginger dashi broth, lotus root crisp.",
    price: "$46",
    category: "seafood",
    dietary: ["GF"],
    isOriginal: false,
  },
  {
    id: "pan-seared-scallops",
    name: "Pan-Seared Scallops",
    description: "Jumbo Hokkaido diver scallops, sweet corn purée, crispy pancetta, herb oil.",
    price: "$42",
    category: "seafood",
    dietary: ["GF"],
    isOriginal: false,
  },
  {
    id: "oysters-half-shell",
    name: "Pacific Oysters on the Half Shell",
    description: "Half dozen freshly shucked oysters, champagne mignonette, house cocktail sauce, lemon.",
    price: "$28",
    category: "seafood",
    dietary: ["GF"],
    isOriginal: false,
  },

  // --------------------------------------------------------------------------
  // 3. Mains & Prime Cuts
  // --------------------------------------------------------------------------
  {
    id: "prime-ribeye",
    name: "Prime Dry-Aged Ribeye",
    description: "14oz center-cut prime ribeye, roasted bone marrow butter, grilled asparagus, rosemary jus.",
    price: "$54",
    category: "mains",
    dietary: ["GF"],
    isOriginal: false,
  },
  {
    id: "braised-short-ribs",
    name: "Braised Short Ribs",
    description: "Slow-cooked Angus beef short ribs, creamy polenta, honey-glazed heirloom carrots, red wine glaze.",
    price: "$44",
    category: "mains",
    dietary: ["GF"],
    isOriginal: false,
  },
  {
    id: "duck-breast-confit",
    name: "Roasted Duck Breast",
    description: "Pan-seared Sonoma duck breast, blackberry port reduction, parsnip purée, wilted chard.",
    price: "$40",
    category: "mains",
    dietary: ["GF"],
    isOriginal: false,
  },
  {
    id: "rack-of-lamb",
    name: "Herb-Crusted Rack of Lamb",
    description: "New Zealand lamb chops, garlic confit crust, roasted fingerling potatoes, mint chimichurri.",
    price: "$48",
    category: "mains",
    dietary: ["GF"],
    isOriginal: false,
  },
  {
    id: "roasted-organic-chicken",
    name: "Farmhouse Roasted Chicken",
    description: "Free-range half chicken, black truffle jus, wild mushroom ragù, roasted garlic mashed potatoes.",
    price: "$34",
    category: "mains",
    dietary: ["GF"],
    isOriginal: false,
  },
  {
    id: "charred-cauliflower-steak",
    name: "Charred Cauliflower Steak",
    description: "Spiced roasted cauliflower, romesco sauce, toasted hazelnuts, chimichurri, pomegranate.",
    price: "$26",
    category: "mains",
    dietary: ["GF", "VG", "V"],
    isOriginal: false,
  },

  // --------------------------------------------------------------------------
  // 4. Handmade Pasta & Gnocchi
  // --------------------------------------------------------------------------
  {
    id: "butternut-gnocchi",
    name: "Butternut Gnocchi",
    description: "Handcrafted pillow gnocchi, browned butter sage sauce, candied walnuts, aged pecorino.",
    price: "$28",
    category: "pasta",
    dietary: ["VG"],
    isOriginal: true,
  },
  {
    id: "truffle-tagliolini",
    name: "Truffle Tagliolini",
    description: "Fresh egg pasta, shaved black Périgord truffles, cultured French butter, 24-month parmesan.",
    price: "$36",
    category: "pasta",
    dietary: ["VG"],
    isOriginal: false,
  },
  {
    id: "lobster-ravioli",
    name: "Lobster Ravioli",
    description: "House-made squid ink ravioli filled with fresh lobster, tarragon bisque, micro chervil.",
    price: "$38",
    category: "pasta",
    dietary: [],
    isOriginal: false,
  },
  {
    id: "wild-mushroom-risotto",
    name: "Wild Mushroom Risotto",
    description: "Acquerello carnaroli rice, chanterelles, porcini broth, mascarpone, crispy sage.",
    price: "$30",
    category: "pasta",
    dietary: ["GF", "VG"],
    isOriginal: false,
  },
  {
    id: "pappardelle-bolognese",
    name: "Hand-Cut Pappardelle Bolognese",
    description: "Slow-simmered veal and heritage pork ragù, san marzano tomatoes, ricotta salata.",
    price: "$32",
    category: "pasta",
    dietary: [],
    isOriginal: false,
  },
  {
    id: "linguine-vongole",
    name: "Linguine alle Vongole",
    description: "Manila clams, white wine garlic sauce, calabrian chili flakes, fresh parsley, extra virgin olive oil.",
    price: "$34",
    category: "pasta",
    dietary: [],
    isOriginal: false,
  },

  // --------------------------------------------------------------------------
  // 5. Desserts & Confections
  // --------------------------------------------------------------------------
  {
    id: "chocolate-lava-cake",
    name: "Valrhona Chocolate Lava Cake",
    description: "Warm molten dark chocolate center, vanilla bean gelato, raspberry coulis.",
    price: "$16",
    category: "desserts",
    dietary: ["VG"],
    isOriginal: false,
  },
  {
    id: "pistachio-souffle",
    name: "Pistachio Soufflé",
    description: "Light Sicilian pistachio soufflé, warm white chocolate pouring crème, crushed pistachios.",
    price: "$18",
    category: "desserts",
    dietary: ["VG"],
    isOriginal: false,
  },
  {
    id: "espresso-tiramisu",
    name: "Classic Espresso Tiramisu",
    description: "Espresso-soaked ladyfingers, whipped mascarpone crème, dark cocoa powder, amaretto hint.",
    price: "$15",
    category: "desserts",
    dietary: ["VG"],
    isOriginal: false,
  },
  {
    id: "meyer-lemon-tart",
    name: "Meyer Lemon Meringue Tart",
    description: "Local California meyer lemon curd, toasted torched meringue, shortbread crust.",
    price: "$14",
    category: "desserts",
    dietary: ["VG"],
    isOriginal: false,
  },
  {
    id: "artisanal-gelato",
    name: "Artisanal Gelato Trio",
    description: "Trio of seasonal flavors: Tahitian Vanilla, Dark Chocolate Gianduja, and Blood Orange Sorbetto.",
    price: "$13",
    category: "desserts",
    dietary: ["GF", "VG"],
    isOriginal: false,
  },
  {
    id: "vanilla-creme-brulee",
    name: "Tahitian Vanilla Crème Brûlée",
    description: "Caramelized sugar crust, rich Madagascar vanilla custard, fresh coastal berries.",
    price: "$15",
    category: "desserts",
    dietary: ["GF", "VG"],
    isOriginal: false,
  },

  // --------------------------------------------------------------------------
  // 6. Beverages & Cellar
  // --------------------------------------------------------------------------
  {
    id: "palmer-old-fashioned",
    name: "Palmer Reserve Old Fashioned",
    description: "Small-batch bourbon, smoked demerara syrup, orange bitters, luxardo cherry.",
    price: "$20",
    category: "beverages",
    dietary: [],
    isOriginal: false,
  },
  {
    id: "malibu-sunset-spritz",
    name: "Malibu Coastal Spritz",
    description: "Aperol, prosecco, blood orange liqueur, rosemary sprig, sparkling mineral water.",
    price: "$18",
    category: "beverages",
    dietary: [],
    isOriginal: false,
  },
  {
    id: "reserve-pinot-noir",
    name: "Santa Barbara Pinot Noir (Glass)",
    description: "Notes of bright red cherry, earthy forest floor, and delicate French oak spice.",
    price: "$22",
    category: "beverages",
    dietary: [],
    isOriginal: false,
  },
  {
    id: "napa-valley-chardonnay",
    name: "Napa Valley Reserve Chardonnay (Glass)",
    description: "Crisp green apple, Meyer lemon zest, subtle toasted brioche and creamy vanilla finish.",
    price: "$20",
    category: "beverages",
    dietary: [],
    isOriginal: false,
  },
  {
    id: "coastal-citrus-mocktail",
    name: "Pacific Citrus Cooler (Non-Alcoholic)",
    description: "Fresh pressed yuzu, cucumber ribbons, sparkling elderflower tonic, garden mint.",
    price: "$12",
    category: "beverages",
    dietary: ["VG", "V"],
    isOriginal: false,
  },
  {
    id: "single-origin-espresso",
    name: "Artisan Espresso & Tea Selection",
    description: "Locally roasted espresso, cappuccino, or organic loose-leaf herbal tea infusion.",
    price: "$8",
    category: "beverages",
    dietary: ["VG", "V"],
    isOriginal: false,
  },
];
