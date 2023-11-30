//TODO
//fully move component to material ui styling

function Header() {
    //TODO
    //pull this dynamically
    var jeff_zine_header = "https://storage.googleapis.com/zines-jeff/resources/jeff_zine_header.png";

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