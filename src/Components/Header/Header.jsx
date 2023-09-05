import Display from "../Display/Display";
import "./Header.css";
import "./Navbar.css";

function Header() {
  return (
    <>
      <div className="header_container">
        <LeftNav />
        <Display/>
      </div>
    </>
  );
}

export default Header;

export function LeftNav() {
  return (
    <>
      <div className="main_nav">
        <nav className="navleft">
          <Logo />
          <div className="twoIcon">
            <a href="@">
              <i class="fa-solid fa-comment-dots"></i>
            </a>
            <a href="@">
              <i class="fa-solid fa-bars"></i>
            </a>
          </div>
        </nav>
        <span className="state_line"></span>
        <nav className="navright">
          <div className="navlogoname">
             <Logo />
             <div className="nameactivity">

          <h4>user fnd</h4>
          <p>online <span className="active"><i class="fa-solid fa-circle"></i></span></p>
             </div>
          </div>
         
          <div className="twoIcon righticons">
            <a href="@">
            <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a href="@">
            <i class="fa-solid fa-paperclip"></i>
            </a>
            <a href="@">
              <i class="fa-solid fa-bars"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export function Logo() {
  return (
    <>
      <div className="logo">
        <a href="@">
          <i class="fa-solid fa-user"></i>
        </a>
      </div>
    </>
  );
}

