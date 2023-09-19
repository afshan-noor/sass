import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
 
      <div className="navbar">
        <div className="logo">
          <img
            src="https://raw.githubusercontent.com/bradtraversy/huddle_styled_components/6033c3b282d305910a8b1424f80e2f31f629d653/public/images/logo.svg"
            alt="logo"
          />
        </div>
        <div className="links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/profile">Profile</a>
          <a href="/contact">Contact</a>
          <button>Try It Free</button>
        </div>
      </div>
  
  );
};
export default Navbar;
