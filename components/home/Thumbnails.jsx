import { useEffect, useState, useRef } from 'react'
import cx from 'classnames';
import style from './Thumbnails.module.css'

const ImageThumbnail = ({text, img}) => {

    const [vertical, setVertical] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        let {width, height} = ref.current.getBoundingClientRect()
        if(width > height){
            setVertical(false);
        }
        else {setVertical(true)}
    }, []);


    return(
        <div className={style.Thumbnail}>
            <div className={cx(style.imgContainer, vertical ? style.vertical : style.horizontal)}>
                <img ref={ref} src={img}/>
            </div>
          <p>{text}</p>  
        </div>
    )
}

const FolderThumbnail = ({text}) => {

    return(
        <div className={cx(style.Thumbnail, style.folder)}>
            <div className={cx(style.imgContainer)}>
                <img src="images/folder.png"/>
            </div>
          <p>{text}</p>  
        </div>
    )
}

export {ImageThumbnail, FolderThumbnail};