import Banner from '../plantilla/banner.jpg'
import '../label/label.css'
function LabelMensaje(){
    return(
        <div>
            <img src={Banner} alt='banner'  width="600" height="150"/>
            <p className='labelBienvenido'>Panteras Fútbol Club</p>
        </div>
    );
}

export {LabelMensaje};