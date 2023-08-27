import './assets/App.css';
import Card from './components/Card';

const product = fetch('http://localhost:5001/api/10/products')
  .then(res => res.json())
  .then(product => (product));

console.log(product);

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
