import jeff_zine_footer from '../assets/img/jeff_zine_footer.png'

function Footer() {
    return (
        <>
            <hr style={{width: '40%'}}/>
            <img src={jeff_zine_footer} alt='jeff zine footer' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '5%', height: 'auto'}} />
        </>
    );
}

export default Footer;