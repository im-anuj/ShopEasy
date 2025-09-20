import { Link } from 'react-router';
import { Header } from '../components/Header';
import './NotFoundPage.css';


export function NotFoundPage({ cart }) {
  return (
    <>
      <Header cart={cart} />

      <div className="not-found-container">
        <div className="not-found-content">
          {/* 404 Number */}
          <div className="error-number">
            <h1>404</h1>
          </div>

          {/* Main heading */}
          <h2 className="main-heading">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="description">
            The page you&apos;re looking for seems to have wandered off.
            It might have been moved, deleted, or you may have mistyped the URL.
          </p>

          {/* Action buttons */}
          <div className="action-buttons">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn btn-secondary"
            >
              Go Back
            </button>
          </div>

          {/* Search suggestion */}
          <div className="suggestion-box">
            <h3 className="suggestion-title">
              Looking for something specific?
            </h3>
            <p className="suggestion-text">
              Try searching for what you need using our search bar above, or browse our popular categories:
            </p>
            <div className="category-links">
              <Link to="/category/electronics" className="category-link">
                Electronics
              </Link>
              <Link to="/category/clothing" className="category-link">
                Clothing
              </Link>
              <Link to="/category/home" className="category-link">
                Home & Garden
              </Link>
              <Link to="/category/books" className="category-link">
                Books
              </Link>
            </div>
          </div>

          {/* Help text */}
          <p className="help-text">
            Need help? <Link to="/contact" className="contact-link">Contact our support team</Link>
          </p>
        </div>
      </div>
    </>
  );
}