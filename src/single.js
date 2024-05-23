import Playas from './data/playa.json'

const Single = () => {

     const currentRoute = window.location.pathname;
     const playas = Playas.find(it => currentRoute.includes(it.slug))

     return (<>
         <center><h1>{playas.name}</h1></center>
           <hr></hr>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
           <img 
              src={playas.picture} 
              alt={playas.name} 
              style={{ marginBottom: '10px', width: '900px', height: 'auto' }} 
            />
            </div>
           <center><p style={{ marginTop: '10px', fontSize: '16px' }}>{playas.description}</p></center>
         
     </>);

}

export default Single;