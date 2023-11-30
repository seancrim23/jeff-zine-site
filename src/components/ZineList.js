import Zine from "./Zine";
import style from './ZineList.module.css';

//TODO
//fully move over to material ui styling
//make zine list dynamic, db driven
//should ideally be able to load all zine info in a form

function ZineList() {
    //TODO
    //make both of these dynamic
    var jz1 = "https://storage.googleapis.com/zines-jeff/cover/jeff_zine_vol_1_cover.png";
    var jz1pdf = "https://storage.googleapis.com/zines-jeff/fullzine/jeff_zine_vol_1.pdf";

    return (
        <>
            <div className={style.zineListContainer}>
                <Zine title='JEFF ZINE VOLUME 1' cover={jz1} description='Volume 1 of Jeff Zine - released November 5th, 2023' pdfLink={jz1pdf} />
            </div>
        </>
    );
}

export default ZineList;