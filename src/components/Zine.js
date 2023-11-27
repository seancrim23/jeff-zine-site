//component representing one zine
//title of zine (vol 1 whatever)
//image of zine, links to pdf
import { Link } from "react-router-dom";
import style from './Zine.module.css';

function Zine(props) {
    return (
        <>
            <div>
                <Link to="pizza" className={style.coverLink}>
                    <img className={style.coverImage} src={props.cover} alt={props.title}/>
                    <h1 style={{textAlign: 'center', fontFamily: 'Roboto', marginBottom: '-10px', fontSize: '24px'}}>{props.title}</h1>
                    <p style={{textAlign: 'center', fontFamily: 'Roboto', fontSize: '12px'}}>{props.description}</p>
                </Link>
            </div>
        </>
    );
}

export default Zine;