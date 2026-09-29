import "./nav.css";

const Nav = () => {
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#f2f3f1" }}>
        <nav>
          <h2>Product Management</h2>
          <div className="links">
            <a href="https://www.youtube.com/">Home</a>
            <a>About</a>
            <a>Request to add your product</a>
          </div>
          <div className="userInfo"></div>
        </nav>
        <div className="nav2">
          <div className="head" style={{ display: "flex" }}>
            <p style={{ color: "gray" }}>Saas Innova /</p> <p> Products</p>
          </div>
          <div
            className="end-head"
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <div
              style={{ background: "white", padding: "5px" }}
            >
              <i className="fa-brands fa-sistrix"></i>
              <input
                style={{ border: "none", padding: "2px", outline: "none" }}
                type="text"
                placeholder="Search Products"
              />
            </div>
            <i className="fa-regular fa-bell"></i>
            <p
              style={{
                background: "#e7b89c",
                color: "#412f26",
                padding: "5px",
                borderRadius: "100px",
              }}
            >
              UC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
