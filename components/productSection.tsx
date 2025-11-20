"use client";

import React, { useMemo, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  bestseller?: boolean;
};

const IMAGE_PATH = "/mnt/data/ef7e4b2c-5ce3-4538-ae22-ec106487c301.png";
// If you want to use a different uploaded file, replace IMAGE_PATH above with that file path.

const initialProducts: Product[] = [
  {
    id: 1,
    title: "Essential Electrolytes",
    price: 60,
    category: "Biscuits",
    image: "productImage1.png",
    bestseller: true,
  },
  {
    id: 2,
    title: "Supergreens Blend",
    price: 60,
    category: "Snacks",
    image: "productImage2.png",
    bestseller: false,
  },
  {
    id: 3,
    title: "Whey Protein",
    price: 60,
    category: "Dairy Products",
    image: "productImage3.png",
    bestseller: false,
  },
  {
    id: 4,
    title: "Herbal Tea Mix",
    price: 24,
    category: "Sweets",
    image: "productImage2.png",
    bestseller: false,
  },
  {
    id: 5,
    title: "Coconut Milk",
    price: 10,
    category: "Coconut milk",
    image: "productImage2.png",
    bestseller: false,
  },
  {
    id: 6,
    title: "Curry Powder Premium",
    price: 8,
    category: "Curry Powder",
    image: "productImage3.png",
    bestseller: true,
  },
];

export default function ProductsSection() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"bestselling" | "price-asc" | "price-desc" | "alpha">(
    "bestselling"
  );
  const [showImageOnly, setShowImageOnly] = useState(false);
  const [showImageOnlyToggle, setShowImageOnlyToggle] = useState(false);

  // derive categories from product data
  const categories = useMemo(() => {
    const set = new Set(initialProducts.map((p) => p.category));
    return ["View All", ...Array.from(set)];
  }, []);

  // toggle category selection
  function toggleCategory(cat: string) {
    if (cat === "View All") {
      setSelectedCategories([]); // clear filters = view all
      return;
    }
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  // filtered + sorted products
  const filtered = useMemo(() => {
    let list = initialProducts.slice();

    // category filter
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }

    // search
    const q = query.trim().toLowerCase();
    if (q.length > 0) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          String(p.price).includes(q)
      );
    }

    // sort
    if (sortBy === "bestselling") {
      list.sort((a, b) => Number(b.bestseller ? 1 : 0) - Number(a.bestseller ? 1 : 0));
    } else if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "alpha") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [query, selectedCategories, sortBy]);

  return (
    <div className="w-full max-w-[1200px] mx-auto py-8 px-4">
      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Left column: search + toggles */}
        <div className="flex-1 flex items-center gap-4">
          <label className="relative flex-1">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Search products"
            />
          </label>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm select-none">
              <input
                type="checkbox"
                checked={showImageOnly}
                onChange={(e) => setShowImageOnly(e.target.checked)}
                className="w-4 h-4"
              />
              <span>Show image only</span>
            </label>
          </div>
        </div>

        {/* Right controls: stats + sort */}
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">{`Show all products (${filtered.length})`}</div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option value="bestselling">Bestselling</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="alpha">A → Z</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
        {/* Categories (left) */}
        <aside className="hidden lg:block leading-14">
          <div className="space-y-3">
            <div className="flex items-center justify-between ">
              <h4 className="font-semibold">Categories</h4>
              <button
                onClick={() => setSelectedCategories([])}
                className="text-sm text-gray-600 underline"
              >
                View All
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {categories
                .filter((c) => c !== "View All")
                .map((cat) => {
                  const checked = selectedCategories.includes(cat);
                  return (
                    <label
                      key={cat}
                      className="flex items-center gap-2 text-sm cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4"
                      />
                      <span className={checked ? "font-medium" : "text-gray-600"}>{cat}</span>
                    </label>
                  );
                })}
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <main>
          <div className="mb-6">
            <h3 className="text-3xl font-extrabold tracking-tight">PICK YOUR FAVORITE FOOD</h3>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Discover our wide range of authentic Sri Lankan products, thoughtfully sourced
              and carefully packaged to meet international standards. This section is designed to
              help supermarket owners, distributors, and trade partners explore our product
              portfolio and gain insight into the quality and variety we deliver across the UAE and
              beyond.
            </p>
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-20">No products found.</div>
            ) : (
              filtered.map((p) => (
                <article
                  key={p.id}
                  className="bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  {/* image-only mode hides metadata but preserves card size */}
                  <div
                    className={`rounded-md overflow-hidden mb-3 bg-gray-50 flex items-center justify-center`}
                    style={{ height: 220 }}
                  >
                    {/* using <img> with the provided path */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="max-h-full w-auto object-contain transition-transform duration-300 transform hover:scale-105"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>

                  {!showImageOnly && (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{p.title}</h4>
                        <div className="text-sm font-bold">${p.price}</div>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">{p.category}</div>

                      <div className="flex items-center gap-3">
                        <button
                          className="flex-1 py-2 rounded-md bg-[#111827] text-white text-sm transition transform hover:-translate-y-0.5"
                          aria-label={`Add ${p.title} to cart`}
                        >
                          Add to cart
                        </button>
                        <button
                          className="py-2 px-3 rounded-md border border-gray-200 text-sm"
                          aria-label={`View ${p.title}`}
                        >
                          View
                        </button>
                      </div>
                    </>
                  )}
                </article>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
