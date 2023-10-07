import '../mision/mision.css'
import imagenEquipo from '../plantilla/teamvision.jpg'
import imagenBalon from '../plantilla/gol-1476.webp'
function Mision(){
    return(
        <div className='clearfix'>
              <img class="imagenEquipo" src={imagenEquipo} alt="imagenEquipo" width="900" height="700"/>
              <img class="imagenBalon" src={imagenBalon} alt="imagenBalon"  width="900" height="700"/>
            <p className='mision'>Como equipo ser cada vez mejores en este deporte que tanto nos apasiona, y así lograr participar 
                en competencias y torneos para afianzar nuestra unidad como grupo, recalcando la diversión y 
                participación de cada uno de nuestros compañeros en todas las actividades que se nos presenten.
            </p>
        </div>
    );
}
export {Mision};