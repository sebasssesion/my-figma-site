import './index.css';
import Card from './components/card';
import BtcBadge from './components/BtcBadge';

function App() {
  return (
    <div className="page">
      <Card>
        <BtcBadge />
      </Card>
    </div>
  );
}

export default App;
