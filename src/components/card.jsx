function Card({ children }) {
  return (
    <div className="card-border">
      <div className="card">
        {/* =========================
            Top section (badge + values)
        ========================== */}
        <div className="card-top">
          {/* Left: BTC badge */}
          <div className="card-left">
            <div className="card-left-inner">
              {children}
            </div>
          </div>

          {/* Right: main values */}
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

        {/* =========================
            Bottom section (action cards)
        ========================== */}
        <div className="calculate-container">
          {/* Top flipped card — INPUT PREVIEW */}
          <div className="calculate-card calculate-card--flipped">
            <div className="inputs-preview">
        <div className="input-col">
          <div className="input-label input-label--muted">Entry Price</div>
            <div className="input-value">90,000</div>
          </div>

        <div className="input-col">
          <div className="input-label input-label--active">Balance</div>
            <div className="input-value input-value--positive">90,000</div>
          </div>

        <div className="input-col">
          <div className="input-label input-label--muted">Stop Loss</div>
            <div className="input-value">90,000</div>
              </div>
            </div>
          </div>

          {/* Bottom normal card — CALCULATE */}
          <div className="calculate-card">
            <button className="calculate-button">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
