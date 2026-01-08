function Card({ children }) {
  return (
    <div className="card-border">
      <div className="card">
        {children}
      </div>
    </div>
  );
}

export default Card;
