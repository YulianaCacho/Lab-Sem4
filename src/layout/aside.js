const Aside = ( ) => {
    return (
     <aside style={{ backgroundColor: '#b3e5fc', padding: '20px', borderRadius: '20px' }}>
     <br></br>
     <form>
         <center><h2>Rellene el formulario</h2></center>
     <br></br>
        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" class="form-label"><i data-feather="user"></i> Nombre de usuario:</label>
           <input type="text" required class="form-control" id="formGroupExampleInput" placeholder="Luis Cacho de la Torre"/>
        </div>
        <br></br>
        <div className="mb-3">
           <label for="validationDefault01 , formGroupExampleInput" className="form-label"><i data-feather="map-pin"></i> Dirección del usuario:</label>
           <input type="text" required class="form-control" id="formGroupExampleInput" placeholder="Psj. San Antonio A-124"/>
        </div>
        <br></br>
        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" className="form-label"><i data-feather="mail"></i> Correo Electrónico:</label>
           <input type="email" required className="form-control" id="formGroupExampleInput" placeholder="liliana_24@hotmail.com"/>
        </div>
        <br></br>
        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" class="form-label"><i data-feather="users"></i> Edad del usuario:</label>
           <input type="number" required class="form-control" id="formGroupExampleInput" placeholder="20"/>
        </div>
        <br></br>
        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" class="form-label"><i data-feather="slack"></i> Contraseña del usuario:</label>
           <input type="password" required class="form-control" id="formGroupExampleInput" placeholder="Debe tener números y características" />
        </div>
        <br></br>
        <br></br>
        <center><button className="btn btn-primary">
    <i data-feather="log-in"></i>  Ingresar</button></center>
    <br></br>
        </form>
           </aside>
    );
};
export default Aside;