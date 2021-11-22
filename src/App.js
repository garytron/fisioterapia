import { useState } from "react";
import './App.css';
import img1 from "./assets/img/femur.png";
import img2 from "./assets/img/tibia.png";
import img3 from "./assets/img/meniscus.png";
import img4 from "./assets/img/anterior-cruciate-ligament.png";
import img5 from "./assets/img/medial-collateral-ligament.png";
import img6 from "./assets/img/lateral-collateral-ligament.png";
import img7 from "./assets/img/fibula.png";
import img8 from "./assets/img/patella.png";

function App() {

  const onClickPatella = () => {
    onClickHidden(true); 
    setMouseOverPatella(false);
  }
  
  const setOnMouseOver= (tag) => {

    switch (tag) {
      case 'Patella':
        setMouseOverPatella(true);
        setMouseOverMCL(false);
        setMouseOverTibia(false);
        setMouseOverFemur(false);
        setMouseOverMeniscus(false);
        setMouseOverACL(false);
        setMouseOverLCL(false);
        setMouseOverFibula(false);
    
        setPositionMessage({top: "13%", bottom: "87%", left: "48%", right: "52%"});
        setMessage("También conocidad como rótula, es un hueso sesamoideo situado en el plano anterior de la articulación de la rodilla, engastada en el tendón del cuádriceps. Es aplanada, de forma triangular con vértice inferior, y su eje mayor mide unos 5 cm. El borde superior (base) y la cara anterior reciben las fibras del tendón del cuádriceps, y de su vértice parte el ligamento rotuliano que continúa al tendón del cuádriceps.");
        setTitle('Patella');
        setStyleTitle({top: "-46px"});
        setMouseOverFunction(() => setMouseOverPatella);
      break;

      case 'MCL':
        setMouseOverPatella(false);
        setMouseOverMCL(true);
        setMouseOverTibia(false);
        setMouseOverFemur(false);
        setMouseOverMeniscus(false);
        setMouseOverACL(false);
        setMouseOverLCL(false);
        setMouseOverFibula(false);
    
        setPositionMessage({top: "19%", bottom: "81%", left: "53%", right: "47%"});
        setMessage('Une el fémur con la tibia, su tamaño es 10 cm de largo y 25 mm de anchura. En la parte superior se inserta en la tuberosidad del cóndilo interno del fémur, mientras que en la parte inferior la hace en la porción superior de la cara interna de la tibia.');
        setTitle('Ligamento Colateral Tibial');
        setStyleTitle({top: "-123px"});
        setMouseOverFunction(() => setMouseOverMCL);
      break;
      
      case 'Femur':
        setMouseOverPatella(false);
        setMouseOverMCL(false);
        setMouseOverTibia(false);
        setMouseOverFemur(true);
        setMouseOverMeniscus(false);
        setMouseOverACL(false);
        setMouseOverLCL(false);
        setMouseOverFibula(false);
    
        setPositionMessage({top: "2%", bottom: "98%", left: "48%", right: "52%"});
        setMessage('Sse encuentra en la parte inferior de nuestro cuerpo; los músculos que se encuentran en el fémur son: bíceps femoral, las cuatro cabezas del cuádriceps (recto femoral, vasto lateral, vasto medial y vasto intermedio o crural), semitendinoso y semimembranoso.')
        setTitle('Femur');
        setStyleTitle({top: "-46px"});
        setMouseOverFunction(() => setMouseOverFemur);

      break;

      case 'Tibia':
        setMouseOverPatella(false);
        setMouseOverMCL(false);
        setMouseOverTibia(true);
        setMouseOverFemur(false);
        setMouseOverMeniscus(false);
        setMouseOverACL(false);
        setMouseOverLCL(false);
        setMouseOverFibula(false);
    
        setPositionMessage({top: "44%", bottom: "56%", left: "49%", right: "51%"});
        setMessage('Es un hueso largo de forma prisma triangular, par, situado en la parte anterior e interna de la pierna; presenta dos curvaturas de sentido contrario: la superior, cóncava hacia fuera; otra inferior, cóncava hacia dentro (en forma de S itálica).')
        setTitle('Tibia');
        setStyleTitle({top: "-46px"});
        setMouseOverFunction(() => setMouseOverTibia);
      break;
    
      case 'Meniscus':
        setMouseOverPatella(false);
        setMouseOverMCL(false);
        setMouseOverTibia(false);
        setMouseOverFemur(false);
        setMouseOverMeniscus(true);
        setMouseOverACL(false);
        setMouseOverLCL(false);
        setMouseOverFibula(false);
        
        setPositionMessage({top: "21%", bottom: "79%", left: "50%", right: "50%"});
        setMessage('Menisco Lateral. Este tiene forma de semiluna casi cerrada en forma de O. Su superficie lateral de su cara externa está adherida a la cápsula, pero no su porción posterior (la cual se encuentra libre). \r\n Menisco Medial. Este menisco está más abierto en comparación con el anterior menisco,  este tiene forma de C,  su cara periférica lateral se adhiere en su totalidad a la cápsula.');
        setTitle('Meniscos');
        setStyleTitle({top: "-46px"});
        setMouseOverFunction(() => setMouseOverMeniscus);
      break;

      case 'ACL':
        setMouseOverPatella(false);
        setMouseOverMCL(false);
        setMouseOverTibia(false);
        setMouseOverFemur(false);
        setMouseOverMeniscus(false);
        setMouseOverACL(true);
        setMouseOverLCL(false);
        setMouseOverFibula(false);
    
        setPositionMessage({top: "20%", bottom: "80%", left: "47%", right: "53%"});
        setMessage('Se inserta abajo, en al área intercondílea, por delante del tubérculo intercondíleo medial y medialmente al cuerno anterior del menisco lateral. Este se dirige hacia arriba, atrás y lateralmente, para que termine en la cara medial del cóndilo lateral del fémur, en la parte posterior, dando un recorrido vertical.');
        setTitle('Ligamento Cruzado Anterior');
        setStyleTitle({top: "-123px"});
        setMouseOverFunction(() => setMouseOverACL);
      break;
      
      case 'LCL':
        setMouseOverPatella(false);
        setMouseOverMCL(false);
        setMouseOverTibia(false);
        setMouseOverFemur(false);
        setMouseOverMeniscus(false);
        setMouseOverACL(false);
        setMouseOverLCL(true);
        setMouseOverFibula(false);
    
        setPositionMessage({top: "20%", bottom: "80%", left: "26%", right: "74%"});
        setMessage('Conecta el hueso del muslo (fémur) con la parte superior del hueso más pequeño de la espinilla (peroné) en la parte exterior de la rodilla.');
        setTitle('Ligamento Colateral Lateral');
        setStyleTitle({top: "-123px"});
        setMouseOverFunction(() => setMouseOverLCL);
      break;
     
      case 'Fibula':
        setMouseOverPatella(false);
        setMouseOverMCL(false);
        setMouseOverTibia(false);
        setMouseOverFemur(false);
        setMouseOverMeniscus(false);
        setMouseOverACL(false);
        setMouseOverLCL(false);
        setMouseOverFibula(true);
    
        setPositionMessage({top: "46%", bottom: "54%", left: "27%", right: "73%"});
        setMessage('Es un hueso de la parte inferior de la pierna, largo, par, asimétrico, formado por un cuerpo prismático circular, con tres caras (externa, interna y posterior), tres bordes (anterior y laterales) y dos extremos: superior o cabeza, donde se destaca la apófisis estiloides y el maléolo lateral.');
        setTitle('Fibula');
        setStyleTitle({top: "-46px"});
        setMouseOverFunction(() => setMouseOverFibula);
      break;
      
      default:
        break;
    }
  }

  const [isHidden,onClickHidden] = useState(false);
  const [isMouseDownPatella,setMouseOverPatella] = useState(false);
  const [isMouseDownMCL,setMouseOverMCL] = useState(false);
  const [isMouseDownTibia,setMouseOverTibia] = useState(false);
  const [isMouseDownFemur,setMouseOverFemur] = useState(false);
  const [isMouseDownMeniscus,setMouseOverMeniscus] = useState(false);
  const [isMouseDownACL,setMouseOverACL] = useState(false);
  const [isMouseDownLCL,setMouseOverLCL] = useState(false);
  const [isMouseDownFibula,setMouseOverFibula] = useState(false);
  const [position,setPositionMessage] = useState({top:0,bottom:0,left:0,right:0});
  const [styleTitle,setStyleTitle] = useState({top:"-46px"});
  const [mouseOverFunction,setMouseOverFunction] = useState(() => function(){});
  const [message,setMessage] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget tincidunt augue. Sed gravida velit id pretium interdum. Nam dictum ipsum ut aliquam porttitor. Cras in justo a urna tempor euismod a ut dui. Nunc blandit nec eros ac dapibus. Nulla bibendum et urna vitae sodales. Aliquam in hendrerit turpis. In luctus ipsum eleifend, ultricies ligula ac, commodo arcu. Duis vehicula leo eget lorem tristique fermentum.');
  const [title, setTitle] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={img1} className="femur" alt="Femur" onMouseOver={() => setOnMouseOver('Femur')}/>
        <img src={img4} className="acl" alt="Anterior Cruciate Ligament" onMouseOver={() => setOnMouseOver('ACL')}/>
        <img src={img3} className="meniscus" alt="Meniscus" onMouseOver={() => setOnMouseOver('Meniscus')}/>
        <img src={img2} className="tibia" alt="Tibia" onMouseOver={() => setOnMouseOver('Tibia')} />
        <img src={img5} className="mcl" alt="Medial Collateral Ligament" onMouseOver={() => setOnMouseOver('MCL')} />
        <img src={img6} className="lcl" alt="Lateral Collateral Ligament" onMouseOver={() => setOnMouseOver('LCL')} />
        <img src={img7} className="fibula" alt="Fibula" onMouseOver={() => setOnMouseOver('Fibula')} />
        <img src={img8} className={isHidden ? 'patella dissapear' : 'patella'} alt="Patella" onClick={() => onClickPatella()} onMouseOver={() => setOnMouseOver('Patella')} />

        { (isMouseDownPatella || isMouseDownMCL || isMouseDownTibia || isMouseDownFemur || isMouseDownMeniscus || isMouseDownMeniscus || isMouseDownACL) &&
          <div className="card" style={position} onMouseLeave={() => mouseOverFunction(false)}>
            <div className="titulo-card" style={styleTitle}>{ title }</div>
            <div className="card-text">
              { message }
            </div>
          </div>
        }

        { (isMouseDownLCL || isMouseDownFibula) &&
          <div className="card2" style={position} onMouseLeave={() => mouseOverFunction(false)}>
            <div className="titulo-card" style={styleTitle}>{ title }</div>
            <div className="card-text">
              { message }
            </div>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
