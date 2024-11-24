"use client";

import { useState } from "react";
import { items, Item } from "../data";
import Link from "next/link";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Item List</h1>

      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px" }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid #ddd", padding: "16px" }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={`/items/${item.id}`} legacyBehavior>
              <a>View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
