import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container" >
        <div className="navbar-wrapper" position = "sticky">
          <div className=" links-wrapper">
            <button onClick={() => scrollTo("#home")} tabIndex = {0}> Home </button>
          </div>
          {/* <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="links-wrapper"
            tabIndex={0}
          >
            Portfolio.
          </div> */}
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#about")}>CV/Resume</button>
            <button onClick={() => scrollTo("#about")}>Personal</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
