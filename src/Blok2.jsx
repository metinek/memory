import './Blok2.css';
import obr1 from './img/karta1.png';
import obr2 from './img/karta2.png';
import obr3 from './img/karta3.png';

function Blok2() {
  return (
    <div className="Blok2">
        <button><img src={obr1} alt="marchewka"/></button>
        <button><img src={obr2} alt="arbuz"/></button>
        <button><img src={obr3} alt="wiśnie"/></button>
    </div>
  );
}

export default Blok2;
