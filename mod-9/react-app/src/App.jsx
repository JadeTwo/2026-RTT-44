// a function that returns a React element

export default function App() {
  return (
    <div id="app">
      Hello World!!!!
      <NavBar />
      <Footer />
      <Section />
    </div>
  )
}

// Rule #1 of React: the component should return one element (a wrapper element that wraps everything else inside it)
function NavBar() {
  return (
    <nav id="nav">
      nav
      <ul>
        <li>link 2</li>
        <li>link 2</li>
      </ul>
    </nav>
  )
}

// Rule #2 of React: the component should start with a capital first letter (when you define them and use them)
function Footer() {
  return (
    <footer id="footer">
      foot
      <Button />
    </footer>
  )
}

function Button() {
  return (
    <button id="button">Click</button>
  )
}

function Section() {
  return (
    <section>Section</section>
  )
}



