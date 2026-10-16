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

  // const test = <h2>testing</h2>

  // if (true) {}

  // for ( ; false; ) {}

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


function Activity() {
  return (
    <>
      {/* React Fragment */}


      <div className="profile">

        <img src="avatar.png" alt="User Avatar" />

        <h2>User Profile</h2>

        <label htmlFor="username">Username:</label>

        <input type="text" id="username" name="username" readOnly />

        <br />

        <p>Bio: A short bio goes here.</p>

      </div>

      <button className="btn primary">Save Changes</button>
    </>
  )
}


function closeWidget() {}
function updateRange() {}
function handleFilter() {}

function Activity2() {
  return (
    <div className="dashboard-widget">
      <header className="widget-header">
        <h3 className="widget-title">User Statistics</h3>
        <button className="btn-close" onClick={closeWidget} aria-label="Close widget">×</button>
      </header>
      <div className="widget-body">
        <form className="filter-form" onSubmit={handleFilter}>
          <label htmlFor="dateRange">Date Range:</label>
          <select id="dateRange" className="form-select" onChange={updateRange}>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          {/* this input element is self-closing */}
          <input type="checkbox" id="includeInactive" />
          <label htmlFor="includeInactive">Include inactive users</label>
        </form>
        {/* this hr is also self-closing */}
        <hr />
          <table className="stats-table" cellPadding="8">
            <thead>
              <tr>
                <th colSpan="2">Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="highlight-row" tabIndex="0">
                <td>
                  {/* this img is self-closing */}
                  <img src="users-icon.png" alt="Users" />
                </td>
                <td>Active Users</td>
                <td>1,234</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  )
}