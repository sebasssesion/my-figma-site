import btcLogo from '../assets/bitcoin.webp';

function BtcBadge() {
  return (
    <div className="btc-badge">
      <img
        src={btcLogo}
        alt="Bitcoin"
        className="btc-icon"
      />
    </div>
  );
}

export default BtcBadge;
