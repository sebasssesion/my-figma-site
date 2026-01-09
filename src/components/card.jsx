function Card({ children }) {
  return (
    <div className="card-border">
      <div className="card">
        {/* Top section */}
        <div className="card-top">
          {/* Left: BTC badge */}
          <div className="card-left">
            <div className="card-left-inner">
              {children}
            </div>
          </div>

          {/* Right: values */}
          <div className="card-right">
            <div className="card-right-inner">
              <div className="card-value">0.89</div>

              <div className="card-bottom-inner">
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

        {/* Calculate button INSIDE the card */}
        <div className="calculate-container">
          <button className="calculate-button">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
