import Link from 'next/link';
import { useState } from 'react';
import style from './Menu.module.css'

const Menu = ({isStyling, setStyling}) => {

    //state
    const handleClick = () => {
        setStyling(!isStyling);
    };

    return(
        <div className={style.Menu}>
           <Link href={'/'}>
            <div className={style.sobo}>SOBO</div>
            </Link>
           <div className={style.switch}>
            <span className={style.movable} style={{right: isStyling ? '100%' : '0', left: isStyling ? '0' : '50%' }}></span>
            <p style={{color: isStyling ? 'white' : 'black'}} onClick={handleClick}>styling</p><p style={{color: isStyling ? 'black' : 'white'}} onClick={handleClick}>assisting</p>
           </div>
        </div>
    )
}


export default Menu;

// export { Home, ...}