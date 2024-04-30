import Playas from './data/playa.json'

const Single = () => {

     const currentRoute = window.location.pathname;
     const playas = Playas.find(it => currentRoute.includes(it.slug))

     return (<>
         <center><h1>{playas.name}</h1></center>
           <hr></hr>
           <img src={playas.picture}></img> <br></br>
           <br></br><center><p>{playas.description}</p></center>
         
     </>);

}

export default Single;