import React from 'react'
import { Link ,BrowserRouter as Router} from 'react-router-dom'
function Header() {
  return (
    <div>
         {/* <!-- Topbar --> */}
         <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <h1>Movie Application</h1>
            {/* <Link to="/addmovie">
            <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i> Add New Movie
            </button>
            </Link> */}
            {/* <Link to="/all-movies">
            <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i> All Movies
            </button>
            </Link> */}
         </nav>
        {/* <!-- End of Topbar --> */}
    </div>
  )
}

export default Header