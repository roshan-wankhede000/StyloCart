import React, { useEffect, useState, useContext } from "react";
import line from "../assets/frontend_assets/line.png";
import { Link } from "react-router-dom";
import { productContext } from "../context/Products";
import search_icon from '../assets/frontend_assets/search_icon.png';

function Collection() {
  const { productsItems } = useContext(productContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");
  const [search, setSearch] = useState('');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    if (!Array.isArray(productsItems)) return;

    let filtered = [...productsItems];

    // Filter by category
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    // Filter by subcategory
    if (subCategory.length > 0) {
      filtered = filtered.filter((item) => subCategory.includes(item.subCategory));
    }

    // Search filter
    if (search.trim() !== '') {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort logic
    switch (sortType) {
      case "low-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProducts(filtered);
  }, [productsItems, category, subCategory, sortType, search]);

  return (
    <div className="container mb-5">
      <hr />
      <div className="input-group rounded bg-light p-2 border" style={{ maxWidth: '600px', margin: 'auto' }}>
        <input
          type="text"
          className="form-control border-0 bg-light"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          id="searchInput"
        />
        <span className="input-group-text bg-light border-0">
          <button className="bg-light p-1 m-0">
            <img src={search_icon} alt="" width="20px" />
          </button>
        </span>
      </div>
      <hr />

      <div className="row">
        {/* Filter Sidebar */}
        <div className="col-12 col-lg-3 mb-4">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="m-0 accordion-button px-2 pt-1 pb-0 d-flex justify-content-center align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <p className="fs-4">Filters</p>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="mb-3">
                    <p>Categories</p>
                    {["Men", "Women", "Kids"].map((cat,i) => (
                      <div className="form-check pb-1 text" key={i}>
                        <input
                          className="form-check-input text"
                          type="checkbox"
                          value={cat}
                          onChange={toggleCategory}
                          id={`cat-${cat}`}
                        />
                        <label className="form-check-label text" htmlFor={`cat-${cat}`}>
                          {cat}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <p>Type</p>
                    {["Topwear", "Bottomwear", "Winterwear"].map((type,i) => (
                      <div className="form-check pb-1" key={i}>
                        <input
                          className="form-check-input text"
                          type="checkbox"
                          value={type}
                          onChange={toggleSubCategory}
                          id={`type-${type}`}
                        />
                        <label className="form-check-label" htmlFor={`type-${type}`}>
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="col-12 col-lg-9">
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="text-secondary mx-2">ALL</h2>
              <h2>COLLECTIONS</h2>
              <img src={line} alt="" width="100" height="15" />
            </div>

            <div className="dropdown">
              <select
                className="form-select"
                onChange={(e) => setSortType(e.target.value)}
                aria-label="Sort options"
              >
                <option value="relevent">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3 mt-4">
            {filterProducts.length > 0 ? (
              filterProducts.map((product, i) => (
                <div key={i} className="col-md-6 col-xl-3 mb-4">
                  <Link
                    to={`/productDetail/${product._id}`}
                    className="product-card text-decoration-none"
                  >
                    <img
                      src={`https://stylocart.onrender.com/uploads/${product.image1}`}
                      className="img-fluid"
                      alt="product"
                    />
                    <p className="m-0 text">{product.name}</p>
                    <p className="fw-bold" style={{ color: '#374151' }}>
                      ${product.price}
                    </p>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
