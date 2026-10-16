export default function Activity() {
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