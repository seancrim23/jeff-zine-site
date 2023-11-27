import jeff_zine_header from '../assets/img/jeff_zine_header.png';

function Header() {
    //style the header
    //grab the pic from google store
    return (
        <>
            <div style={{paddingBottom: '15px', paddingTop: '10px'}}>
                <img src={jeff_zine_header} alt='jeff zine header' style={{width: '40%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '5px'}} />
                <hr style={{width: '40%'}} />
            </div>
        </>
    );
}

export default Header;