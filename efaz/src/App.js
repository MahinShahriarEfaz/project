import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">PROJECT: Resell</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {data.products.map((products) => (
          <div>
            <img src={products.image} alt={products.name} />
            <p>{products.name}</p>
            <p>{products.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
