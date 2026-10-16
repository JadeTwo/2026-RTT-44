import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Section from './components/Section';
import Activity from './components/Activity';
import Activity2 from './components/Activity2';

// a function that returns a React element

export default function App() {

  const greeting = <h1>Hello World!</h1>;

  const product = { name: 'Laptop', price: 1200, quantity: 3 };

  const productElement = (
    <div>
      Product: {product.name},
      Price: {product.price},
      Total Cost: {product.price * product.quantity}
    </div>
  )

  const arrayOfStrings = ["bob", "billy", "sally"];
  const arrayOfNumbers = [1, 10, 15]

  // Rule #1 of React: the component should return one element (a wrapper element that wraps everything else inside it)

  // Rule #2 of React: the component should start with a capital first letter (when you define them and use them)

  return (
    <>

      {greeting}

      <p>
        This product is: {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
      </p>


      <NavBar />
      {productElement}
      <p>
        {arrayOfStrings}, {arrayOfNumbers}
      </p>
      <Footer />
      <Section />
      <Activity />
      <Activity2 />
    </>
  )
}





