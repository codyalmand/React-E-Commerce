import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button className="sidebar-open-button" oncLick="openMenu()">
          &#9776;
        </button>
        <a href="index.html">ShopStop</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onclick="closeMenu()">x</button>
      <ul>
        <li>
          <a href="index.html">Shirts</a>
        </li>
        <li>
          <a href="index.html">Pants</a>
        </li>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li className="product">
            <img className="product-image" src="../images/slimshirt.jpg" alt="Product"/>
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">$60</div>
            <div className="product-rating">4.5 Stars (10 reviews)</div>
          </li>
          <li className="product">
            <img className="product-image" src="../images/slimshirt.jpg" alt="Product"/>
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">$60</div>
            <div className="product-rating">4.5 Stars (10 reviews)</div>
          </li>
          <li className="product">
            <img className="product-image" src="../images/slimshirt.jpg" alt="Product"/>
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">$60</div>
            <div className="product-rating">4.5 Stars (10 reviews)</div>
          </li>
          <li className="product">
            <img className="product-image" src="../images/slimshirt.jpg" alt="Product"/>
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">$60</div>
            <div className="product-rating">4.5 Stars (10 reviews)</div>
          </li>
          <li className="product">
            <img className="product-image" src="../images/slimshirt.jpg" alt="Product"/>
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">$60</div>
            <div className="product-rating">4.5 Stars (10 reviews)</div>
          </li>
          <li className="product">
            <img className="product-image" src="../images/slimshirt.jpg" alt="Product"/>
            <div className="product-name">
              <a href="product.html">Slim Shirt</a>
            </div>
            <div className="product-brand">Nike</div>
            <div className="product-price">$60</div>
            <div className="product-rating">4.5 Stars (10 reviews)</div>
          </li>
        </ul>
      </div>
    </main>
    <footer className="footer">
      Footer
    </footer>


  </div>
  );
}

export default App;
