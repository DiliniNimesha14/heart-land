// Blog data store. Each post powers both the /blog listing cards and the
// /blog/[slug] page.
//
// A post's `content` is an array of blocks. Each block is either:
//   - a plain string                       -> rendered as a paragraph
//   - { type: "heading", text }            -> section heading
//   - { type: "paragraph", text }          -> paragraph
//   - { type: "list", items: [...] }       -> bulleted list

export const blogs = [
  {
    slug: "authentic-sri-lankan-spices-in-uae",
    title: "Authentic Sri Lankan Spices in UAE: Bringing Island Flavor to Every Kitchen",
    excerpt:
      "From rich volcanic soils to UAE kitchens — how Heartland brings the true aroma and heritage of Sri Lankan spices to every home and business.",
    category: "Spices",
    date: "June 23, 2026",
    image: "/blog/authentic-sri-lankan-spices-hero.jpg",
    content: [
      { type: "heading", text: "The True Taste of Sri Lanka in the UAE" },
      "Sri Lankan cuisine is known worldwide for its bold aroma, rich spices, and deep cultural heritage. At the heart of this identity are its spices — carefully cultivated, sun-dried, and blended through generations of tradition.",
      "Heartland General Trading Co LLC brings this authenticity directly to the UAE, ensuring households and businesses experience the true flavor of Sri Lanka.",
      { type: "heading", text: "Why Sri Lankan Spices Are Unique" },
      "Sri Lankan spices stand out because of:",
      {
        type: "list",
        items: [
          "Rich volcanic soil that enhances natural aroma",
          "Tropical climate ideal for spice cultivation",
          "Traditional harvesting and processing methods",
          "Strong flavor concentration compared to mass-produced alternatives",
        ],
      },
      "Spices like cinnamon, cardamom, cloves, and curry powder are globally recognized for their quality and intensity.",
      { type: "heading", text: "Heartland's Premium Spice Selection" },
      "Heartland carefully sources and distributes:",
      {
        type: "list",
        items: [
          "Ceylon Cinnamon (world-renowned for purity)",
          "Curry Powders (traditional and blended varieties)",
          "Turmeric (natural anti-inflammatory properties)",
          "Chili powders and spice mixes",
        ],
      },
      "Each product goes through strict quality checks under ISO and HACCP standards.",
      { type: "heading", text: "From Sri Lankan Farms to UAE Kitchens" },
      {
        type: "image",
        src: "/blog/authentic-sri-lankan-spices-farms.jpg",
        alt: "Cardamom, coriander and other whole Sri Lankan spices",
      },
      "Heartland plays a key role in connecting small scale farmers in Sri Lanka to international markets. This ensures:",
      {
        type: "list",
        items: [
          "Fair trade opportunities for farmers",
          "Sustainable agricultural practices",
          "Consistent quality for global customers",
        ],
      },
      { type: "heading", text: "Bringing Authentic Cooking Home" },
      "Whether you are preparing traditional Sri Lankan curry or experimenting with fusion cuisine, authentic spices make all the difference. Heartland ensures that every product carries the essence of home-cooked island flavor.",
      "Sri Lankan spices are more than ingredients. They are culture, tradition, and identity. Heartland General Trading ensures that this heritage continues to thrive in every UAE kitchen.",
    ],
  },
  {
    slug: "ceylon-cinnamon-the-unique-sri-lankan-spice",
    title: "Ceylon Cinnamon: The Unique Sri Lankan Spice Loved Around the World",
    excerpt:
      "Why Ceylon cinnamon from Sri Lanka is prized worldwide for its delicate aroma, mild sweetness and premium quality — and how to bring it into your kitchen.",
    category: "Spices",
    date: "June 23, 2026",
    image: "/blog/ceylon-cinnamon-hero.jpg",
    content: [
      "Cinnamon is one of the most famous and widely used spices in the world. Among all varieties, Ceylon cinnamon from Sri Lanka is considered the finest due to its delicate aroma, mild sweetness, and premium quality.",
      "Sri Lanka has a long-standing reputation for producing authentic cinnamon through traditional farming and harvesting methods passed down through generations.",
      "For customers searching for Ceylon cinnamon in Dubai, this spice is an essential ingredient that enhances both traditional Sri Lankan dishes and modern international recipes.",
      { type: "heading", level: 1, text: "What Makes Ceylon Cinnamon Special?" },
      { type: "heading", text: "1. Unique Flavor Profile" },
      "Ceylon cinnamon is known for its:",
      {
        type: "list",
        items: [
          "Sweet and mild taste",
          "Smooth, delicate aroma",
          "Less intense and more refined flavor compared to cassia cinnamon",
        ],
      },
      "This makes it ideal for both sweet and savory dishes.",
      { type: "heading", text: "2. Rich Sri Lankan Heritage" },
      "Sri Lanka is globally recognized as the original source of true cinnamon. The cultivation of cinnamon is deeply rooted in Sri Lankan agriculture and cultural tradition, making it one of the country's most valuable export spices.",
      { type: "heading", text: "3. Versatile Culinary Use" },
      "Ceylon cinnamon can be used in a wide variety of recipes, including:",
      {
        type: "list",
        items: [
          "Tea and herbal drinks",
          "Desserts and baked goods",
          "Curries and traditional Sri Lankan dishes",
          "Smoothies and health drinks",
          "Everyday cooking for added aroma",
        ],
      },
      {
        type: "image",
        src: "/blog/ceylon-cinnamon-culinary.jpg",
        alt: "Ceylon cinnamon sticks and ground cinnamon",
      },
      { type: "heading", level: 1, text: "The Importance of Using High-Quality Spices" },
      "Using authentic and natural spices significantly improves the taste, aroma, and nutritional value of food.",
      "High-quality spices like Ceylon cinnamon ensure:",
      {
        type: "list",
        items: [
          "Better flavor consistency",
          "Richer aroma in cooking",
          "A more authentic culinary experience",
        ],
      },
      "This is why premium spices are essential in both home kitchens and professional food preparation.",
      { type: "heading", text: "Add Authentic Flavor to Your Kitchen" },
      "A simple spice can completely transform a dish. With authentic Sri Lankan cinnamon, you can experience the true taste of tradition, culture, and heritage in every meal.",
      "Whether you are preparing traditional Sri Lankan recipes or experimenting with global cuisine, Ceylon cinnamon adds depth and richness to your cooking.",
      "Ceylon cinnamon is more than just a spice. It is a symbol of Sri Lanka's heritage and natural richness. For customers in Dubai, choosing authentic cinnamon ensures a premium culinary experience.",
      "Discover Heartland's range of authentic Sri Lankan spices in Dubai and bring real island flavor into your kitchen.",
    ],
  },
  {
    slug: "how-heartland-connects-sri-lankan-farmers-to-the-world",
    title: "How Heartland Connects Sri Lankan Farmers to the World",
    excerpt:
      "Ethical sourcing, strict quality standards and a transparent supply chain — how Heartland links Sri Lankan farmers to international markets.",
    category: "Sourcing",
    date: "June 23, 2026",
    image: "/blog/heartland-farmers-hero.jpg",
    content: [
      { type: "heading", level: 1, text: "Building a Responsible Global Food Network" },
      "In today's global food industry, ethical sourcing is no longer optional — it is essential. Consumers want transparency, sustainability, and fairness in what they consume.",
      "Heartland General Trading Co LLC is committed to building a responsible supply chain that connects Sri Lankan farmers to international markets.",
      { type: "heading", text: "Supporting Local Farmers in Sri Lanka" },
      "Heartland works directly with:",
      {
        type: "list",
        items: ["Small-scale farmers", "Agricultural cooperatives", "Rural producers"],
      },
      "This ensures:",
      {
        type: "list",
        items: [
          "Stable income for farming communities",
          "Reduced exploitation by middle traders",
          "Encouragement of sustainable farming practices",
        ],
      },
      { type: "heading", text: "Ensuring Quality and Safety Standards" },
      {
        type: "image",
        src: "/blog/heartland-farmers-quality.jpg",
        alt: "Quality inspection of Sri Lankan produce before export",
      },
      "Every product is handled under strict international certifications:",
      {
        type: "list",
        items: [
          "ISO standards for quality management",
          "HACCP for food safety control",
        ],
      },
      "This guarantees that all products entering UAE markets are safe, clean, and high-quality.",
      { type: "heading", text: "A Transparent Supply Chain" },
      "Heartland ensures traceability at every stage:",
      {
        type: "list",
        ordered: true,
        items: [
          "Farm sourcing in Sri Lanka",
          "Quality inspection and packaging",
          "International shipping",
          "UAE distribution network",
          "Retail availability",
        ],
      },
      "This transparency builds trust with both customers and partners.",
      { type: "heading", text: "Sustainability and Long Term Impact" },
      "Ethical sourcing is also about the future. Heartland focuses on:",
      {
        type: "list",
        items: [
          "Reducing waste in supply chains",
          "Supporting eco-friendly farming methods",
          "Promoting long-term agricultural growth",
        ],
      },
      { type: "heading", text: "Bridging Cultures Through Food" },
      "Beyond business, Heartland serves as a cultural bridge — bringing Sri Lankan heritage to global communities while strengthening economic ties between Sri Lanka and the UAE.",
      "Ethical sourcing is the foundation of Heartland's success. By supporting farmers and ensuring transparency, the company delivers not just food but trust, culture, and sustainability.",
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug);
}
