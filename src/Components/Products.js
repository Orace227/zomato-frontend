import React from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
      <div>
        <div>
          <div className="text-2xl mt-3 font-semibold">Order Online</div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              width="14"
              height="14"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="w-4 h-4"
            >
              <title>explore</title>
              <path d="M10 0.42c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.52 0 10-4.48 10-10v0c0-5.52-4.48-10-10-10v0zM10 18.98c-4.74 0-8.58-3.84-8.58-8.56s3.84-8.58 8.58-8.58c4.74 0 8.58 3.84 8.58 8.58v0c0 4.72-3.84 8.56-8.58 8.56v0zM14.28 5.84l-5.8 2.6c-0.2 0.1-0.36 0.26-0.46 0.46v0l-2.6 5.8c0 0.020 0 0.040 0 0.060 0 0.14 0.1 0.24 0.22 0.24 0.040 0 0.060 0 0.080-0.020v0l5.78-2.58c0.2-0.1 0.36-0.26 0.46-0.46v-0.020l2.62-5.8c0-0.020 0-0.040 0-0.060 0-0.12-0.1-0.22-0.22-0.22-0.020 0-0.060 0-0.080 0v0zM10 11.6c-0.66 0-1.18-0.52-1.18-1.18s0.52-1.2 1.18-1.2c0.66 0 1.2 0.54 1.2 1.2v0c0 0.66-0.54 1.18-1.2 1.18v0z"></path>
            </svg>
            <div className="flex items-center gap-1">
              Live track your order |
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              27 min
            </div>
          </div>
        </div>

        {/* products area  */}
        <div>
          <div id="Baked by Nini's" className="text-2xl mt-4 font-semibold">
            Baked by Nini's
          </div>
          <hr className="mt-1" />
          <div className="flex flex-col gap-2 items-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        <div>
          <div id="Combos" className="text-2xl mt-4 font-semibold">
            Combos
          </div>
          <hr className="mt-1" />
          <div className="flex flex-col gap-2 items-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div>
          <div
            id="Beverages With Benifits"
            className="text-2xl mt-4 font-semibold"
          >
            Beverages With Benifits
          </div>
          <hr className="mt-1" />
          <div className="flex flex-col gap-2 items-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}
