const Aside = ( ) => {
    return <aside>
     <br></br>
     <form>
         <center><h2>Rellene el formulario</h2></center>
     <br></br>
        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" class="form-label">Nombre de usuario:</label>
           <input type="text" required class="form-control" id="formGroupExampleInput" placeholder="Luis Cacho de la Torre"/>
        </div>
        <div className="mb-3">
           <label for="validationDefault01 , formGroupExampleInput" className="form-label">Dirección del usuario:</label>
           <input type="text" required class="form-control" id="formGroupExampleInput" placeholder="Psj. San Antonio A-124"/>
        </div>
        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" className="form-label">Correo Electrónico:</label>
           <input type="email" required className="form-control" id="formGroupExampleInput" placeholder="liliana_24@hotmail.com"/>
        </div>
        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" class="form-label">Edad del usuario:</label>
           <input type="number" required class="form-control" id="formGroupExampleInput" placeholder="20"/>
        </div>
        <div className="mb-3">
           <label  for="validationDefault01 , formGroupExampleInput" class="form-label">Contraseña del usuario:</label>
           <input type="password" required class="form-control" id="formGroupExampleInput" placeholder="Debe tener números y características" />
        </div>
        <br></br>
        <center><button class="btn btn-primary" type="submit">Submit form</button></center>
        </form>
           </aside>;
}
export default Aside;