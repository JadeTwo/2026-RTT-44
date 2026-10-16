function closeWidget() {}
function updateRange() {}
function handleFilter() {}

export default function Activity2() {
  return (
    <div className="dashboard-widget">
      <header className="widget-header">
        <h3 className="widget-title">User Statistics</h3>
        <button className="btn-close" onClick={closeWidget} aria-label="Close widget">×</button>
      </header>
      <div className="widget-body">
        <form className="filter-form" onSubmit={handleFilter}>
          <label htmlFor="dateRange">Date Range:</label>
          <select id="dateRange" className="form-select" onChange={updateRange} defaultValue="30d">
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          {/* this input element is self-closing */}
          <input type="checkbox" id="includeInactive" defaultChecked />
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