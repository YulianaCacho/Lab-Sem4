const feather = require('feather-icons');
setTimeout (() =>{
    feather.replace();
}, 1000);
const Hearder= () => {
    return <hearder>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#001259'}}>
      <div className="container">
        <a className="navbar-brand" href="#" style={{ color: '#ffffff' }}><i data-feather="sun"></i> ¡Te mereces días de vacaciones!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link dropdown-toggle" href="#" style={{ color: '#afafaf' }} role="button" data-bs-toggle="dropdown" aria-expanded="false">Playas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#ffffff' }}><i data-feather="globe"></i>Latinoamerica</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" style={{ color: '#afafaf' }} role="button" data-bs-toggle="dropdown" aria-expanded="false">Lugares</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="buscar">
            <input className="form-control me-2" type="buscar" placeholder="Playa ..." aria-label="Buscar"></input>
            <button className="btn btn-outline-primary" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
    <div style={{ borderBottom: '1px solid #f5f5f5' }}></div> {/* Línea divisoria */}
    </hearder>
}
export default Hearder;