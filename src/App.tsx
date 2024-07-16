import { AvailableProducts } from "./components/AvailableProducts";
import { Cart } from "./components/Cart";
import { Total } from "./components/TotalCart";

function App() {

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'90%', margin: '0 auto'}}>
        <div>
          <h2>Welcome to Vite React App</h2>
          <AvailableProducts />
        </div>
        <div>
          <h2>Cart</h2>
          <Cart />
        </div>
        <div>
          <Total />
        </div>
      </div>
    </>
  );
}

export default App;
