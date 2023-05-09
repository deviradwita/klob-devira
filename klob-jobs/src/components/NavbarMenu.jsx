import { Link } from "react-router-dom";




export default function NavbarMenu() {


  return (
    <header>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
    <div className="container px-5">
      <Link to={"/"} className="navbar-brand fw-bold" href="#page-top">
        <img src="https://static.klob.id/img/logo-klob-text-og.png" alt="Klob Logo" width="100" height="45" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li className="nav-item">
            <Link to={"/buat-lowongan-kerja"} className="nav-link me-lg-3" href="#download">
              Buat Lowongan
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/lamaran-terkirim"} className="nav-link me-lg-3" href="#download">
              Lamaran Terkirim
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  );
}
