import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
     return (
          <>
               <nav>
                    <h1>Navbar</h1>
                    <Link to='/'>Home</Link>
                    <Link to='/myfoods'>My Foods</Link>
                    <Link to='/addfood'>Add Food</Link>
                    <Link to='/auth'>Sign-in</Link>
               </nav>
               <Outlet />
          </>
     )
}

export default Navbar