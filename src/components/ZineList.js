import Zine from "./Zine";
import jz1 from '../assets/img/jeff_zine_vol_1_cover.png'
//component representing a list of zines
//make this dynamic at some point, doesnt really have to be but would be nice project
//ideally this should pull all of the zines and then display each one by one
function ZineList() {
    return (
        <>
            <div style={{paddingBottom: '10px'}}>
                <Zine title='JEFF ZINE VOLUME 1' cover={jz1} description='Volume 1 of Jeff Zine - released November 5th, 2023' />
            </div>
        </>
    );
}

export default ZineList;