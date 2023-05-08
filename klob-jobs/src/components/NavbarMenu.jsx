import { Link } from "react-router-dom";




export default function NavbarMenu() {



  
  
  
  
  
  


    

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container px-5">
       
          <Link to={"/"} className="navbar-brand fw-bold" href="#page-top">
          <img src="https://static.klob.id/img/logo-klob-text-og.png" alt="Klob Logo" width="100" height="45" />
          </Link>
         
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item">
                <Link to={"/buat-lowongan-kerja"} className="nav-link me-lg-3" href="#download">
                  Buat Lowongan
                </Link>
              </li>
            </ul>

            
          

            
          </div>
        </div>
      </nav>



      
    </header>
  );
}
