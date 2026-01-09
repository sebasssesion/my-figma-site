function Card({ children }) {
  return (
    <div className="card-border">
      <div className="card">
        <div className="card-top">
          {/* Left: BTC badge */}
          <div className="card-left">
            {children}
          </div>

          {/* Right: values */}
          <div className="card-right">
            {/* Top value */}
            <div className="card-value">0.89</div>

            {/* Bottom row: 1% + price */}
            <div className="card-bottom-row">
              <span className="card-change">1%</span>

              <span className="card-price">
                <span className="currency">$</span>
                <span className="amount">650.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
