import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Draggable from './Draggable';
import {ImageThumbnail, FolderThumbnail} from './Thumbnails';
import style from './Homepage.module.css'
import { StylingContext } from '../../contexts/StylingContext.js'


const Home = ({data}) => {

    //state
    const [highestZ, setMaxZ] = useState(2);
    //context
    const isStyling = useContext(StylingContext)

    const stories = data.stories;
    const thumbs = [];

    data.stories.forEach((story) =>{

        if(story.content.thumbnails){
            story.content.thumbnails.forEach((thumb) => {
                    thumbs.push({thumb: thumb, slug: story.slug, role: story.content.role});
            })
        }
    })

    return(
        <div className={style.Homepage}>
            {
                /*------------image thumbnails--------------*/
                stories.map((story, i) => {

                    return ((story.content.role == 'Styling' && isStyling == true) ||
                    (story.content.role == 'Assisting' && isStyling == false)) && 
                    
                    <div key={i} >
                            <Draggable xPos={40} ypos={50} initZIndex={1} highestZ={highestZ} setMaxZ={setMaxZ}>
                            <Link href={{pathname: `/projects`, query:{slug:story.slug}}}>
                                <FolderThumbnail text={story.name}/>
                            </Link>
                            </Draggable>
                        </div>
                })
            }
            {   
            /*------------image thumbnails--------------*/
                thumbs.map((thumb, i) => { 
                    return  ((thumb.role == 'Styling' && isStyling == true) ||
                    (thumb.role == 'Assisting' && isStyling == false)) && 

                    <div key={i}>
                        <Draggable xPos={40} ypos={50} initZIndex={1} highestZ={highestZ} setMaxZ={setMaxZ}>
                            <Link href={{pathname: `/projects`, query:{slug: thumb.slug}}}>
                                <ImageThumbnail text={`${thumb.slug}-${i}.jpg`} img={thumb.thumb.filename}/>
                            </Link>
                        </Draggable>
                    </div>
                })
            }
       </div>
    )
}


export default Home;

// export { Home, ...}
