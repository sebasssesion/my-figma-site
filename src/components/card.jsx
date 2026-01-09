function Card({ children }) {
  return (
    <div className="card-border">
      <div className="card">
        <div className="card-top">
          <div className="card-left">
            {children}
          </div>

          <div className="card-right">
            {/* Big number */}
            <div className="card-value">0.89</div>

            {/* Bottom row: 1% + $650.00 */}
            <div className="card-price-container">
              <span className="card-change">1%</span>
              <span className="card-price">$650.00</span>
            </div>
          </div>
        </div>

        {/* Remove the old card-bottom div since price is now in card-right */}
      </div>
    </div>
  );
}

export default Card;
