import React, { useState } from 'react';
    import { BsCart, BsList, BsX, BsSearch, BsStarFill } from 'react-icons/bs';

    const notebooks = [
      {
        id: 1,
        name: 'GE76 Raider',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 4999.00,
        spec: 'CPU: 11th Gen Intel® Core™ processor',
        description: 'The GE76 Raider is configured with the latest 10th Gen Intel® Core™ i9 processor and NVIDIA® GeForce RTX™ 30 series graphics to raise the bar for performance on the next level. GE76 Raider stands out with an aggressive design with bevelled corners to match its high-performance.',
        rating: 4,
      },
      {
        id: 2,
        name: 'GE66 Raider',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 4399.00,
        spec: 'CPU: 12th Gen Intel® Core™ processor',
        description: 'The GE66 Raider is configured with the latest 10th Gen Intel® Core™ i9 processor and NVIDIA® GeForce RTX™ 30 series graphics to raise the bar for performance on the next level. GE66 Raider stands out with an aggressive design with bevelled corners to match its high-performance.',
        rating: 3,
      },
      {
        id: 3,
        name: 'Raider GE76 - 12U',
        image: 'https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 5699.00,
        spec: 'CPU: 12th Gen Intel® Core™ processor',
        description: 'The Raider GE76 - 12U is configured with the latest 10th Gen Intel® Core™ i9 processor and NVIDIA® GeForce RTX™ 30 series graphics to raise the bar for performance on the next level. Raider GE76 - 12U stands out with an aggressive design with bevelled corners to match its high-performance.',
        rating: 5,
      },
      {
        id: 4,
        name: 'Raider GE66 - 12U',
        image: 'https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 4799.00,
        spec: 'CPU: 12th Gen Intel® Core™ processor',
        description: 'The Raider GE66 - 12U is configured with the latest 10th Gen Intel® Core™ i9 processor and NVIDIA® GeForce RTX™ 30 series graphics to raise the bar for performance on the next level. Raider GE66 - 12U stands out with an aggressive design with bevelled corners to match its high-performance.',
        rating: 4,
      },
    ];

    function App() {
      const [cartCount, setCartCount] = useState(0);
      const [isDrawerOpen, setIsDrawerOpen] = useState(false);
      const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
      const [selectedProduct, setSelectedProduct] = useState(null);
      const [activeTab, setActiveTab] = useState('description');
      const [isCartOpen, setIsCartOpen] = useState(false);
      const [cartItems, setCartItems] = useState([]);

      const handleAddToCart = (product) => {
        console.log(`Add to cart button clicked for notebook ID: ${product.id}`);
        setCartCount(cartCount + 1);
        setCartItems([...cartItems, product]);
      };

      const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };

      const openProductDetail = (product) => {
        setSelectedProduct(product);
        setIsProductDetailOpen(true);
      };

      const closeProductDetail = () => {
        setIsProductDetailOpen(false);
      };

      const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
      };

      const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(
            <span key={i} style={{ color: i < rating ? '#64B5F6' : '#aaa' }}>
              <BsStarFill />
            </span>
          );
        }
        return stars;
      };

      return (
        <div>
          <div className="app-bar">
            <button className="drawer-button" onClick={toggleDrawer}>
              <BsList />
            </button>
            <h1>Notebook Store</h1>
            <div className="cart-icon" onClick={toggleCart}>
              <BsCart />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
          </div>
          <div className="home-bar">
            <p>Laptops <span>&gt; Gaming Series &gt; Raider GE</span></p>
          </div>
          <div className="container">
            <div className="search-bar">
              <BsSearch />
              <input type="text" placeholder="Search products..." />
            </div>
            <div className="notebook-list">
              {notebooks.map((notebook) => (
                <div key={notebook.id} className="notebook-item" onClick={() => openProductDetail(notebook)}>
                  <img src={notebook.image} alt={notebook.name} />
                  <h2>{notebook.name}</h2>
                  <p>{notebook.spec}</p>
                  <p>${notebook.price}</p>
                  <div className="rating">{renderStars(notebook.rating)}</div>
                  <div className="actions">
                    <button
                      className="add-to-cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(notebook);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
            <h2>
              Menu
              <button onClick={toggleDrawer}>
                <BsX />
              </button>
            </h2>
            <ul>
              <li>Laptops</li>
              <ul>
                <li>Gaming Series</li>
                <ul>
                  <li>Titan GT</li>
                  <li>Stealth GS</li>
                  <li>Raider GE</li>
                  <li>Vector GP</li>
                  <li>Pulse GL</li>
                  <li>Katana GF</li>
                  <li>Delta</li>
                  <li>Alpha</li>
                  <li>Bravo</li>
                </ul>
                <li>Content Creation</li>
                <li>Business & Productivity</li>
              </ul>
              <li>Accessories</li>
              <li>Desktops</li>
              <li>Screens</li>
              <li>Graphic cards</li>
              <li>Motherboards</li>
              <li>Periphery</li>
              <li>Components</li>
            </ul>
          </div>
          {selectedProduct && (
            <div className={`product-detail ${isProductDetailOpen ? 'open' : ''}`}>
              <button className="close-button" onClick={closeProductDetail}>
                <BsX />
              </button>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <h2>{selectedProduct.name}</h2>
              <p className="price">${selectedProduct.price}</p>
              <div className="rating">{renderStars(selectedProduct.rating)}</div>
              <div className="tab-buttons">
                <button
                  className={activeTab === 'description' ? 'active' : ''}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={activeTab === 'specifications' ? 'active' : ''}
                  onClick={() => setActiveTab('specifications')}
                >
                  Specifications
                </button>
              </div>
              {activeTab === 'description' && (
                <p className="description">{selectedProduct.description}</p>
              )}
              {activeTab === 'specifications' && (
                <p className="specifications">{selectedProduct.spec}</p>
              )}
              <button className="add-to-cart-button" onClick={() => handleAddToCart(selectedProduct)}>
                Add to cart
              </button>
            </div>
          )}
          <div className={`cart ${isCartOpen ? 'open' : ''}`}>
            <h2>
              Cart
              <button onClick={toggleCart}>
                <BsX />
              </button>
            </h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <p>{item.name}</p>
                    <p>{item.spec}</p>
                  </div>
                  <p className="item-price">${item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default App;
