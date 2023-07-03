import React from 'react'
import { Link ,BrowserRouter as Router} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <div className='Container'>
         {/* <!-- Topbar --> */}
         <nav className=" navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
         
         <Nav className="me-auto">
        
         <div className=' text-center' style={{fontSize: 'xx-large'}}>
         <Badge bg="primary">Movie Application</Badge>
            </div>
         <div className=' text-center ' style={{fontSize: 'x-large'}}>
            <Nav.Link>
            <Link to="/">Home
            </Link>
            </Nav.Link>
            </div>
            <div className='text-center ' style={{fontSize: 'x-large'}}>
            <Nav.Link>
            <Link to="/addmovie">
              Add Movie
            </Link>
            </Nav.Link>
            </div>
            
           </Nav>
      
         </nav>
        {/* <!-- End of Topbar --> */}
        </div>
      
   
  )
}

export default Header