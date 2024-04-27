import './App.css';
import Form from './components/Form';
import Scoops from './components/Scoops';
import Toppings from './components/Toppings';

function App() {
  return (
    <div>
      {/* Ürün Çeşitleri */}
      <Scoops/>
      {/* Sos Çeşitleri */}
      <Toppings/>
      {/* Form */}
      <Form/>
      
    </div>

  );
}

export default App;