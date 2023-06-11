import { useState, useEffect, useContext, useRef } from "react";
import { StylingContext } from "../../contexts/StylingContext.js";
import style from './Project.module.css'
import Link from 'next/link'
import cx from 'classnames';
import { useRouter } from 'next/router'


const Project = ({projects}) => {

   
    const router = useRouter();
    
    const isStyling = useContext(StylingContext);

    const [data, setData] = useState({
        selectedSlug: router.query.slug ? router.query.slug : projects[0].slug,
        selectedImg: 0
    })

    const selectProject = (slug) => {
        setData({selectedSlug: slug, selectedImg: 0});
    }

    useEffect(() => {
        // change url
        router.push(`/projects`, `/projects`, { shallow: true });
      }, []);


    const editorial = [];
    const commercial = [];

    projects.forEach((project) =>{
        if(project.content.type == "Editorial"){
            editorial.push({slug: project.slug, role: project.content.role});
        }

        else if(project.content.type == "Commercial"){
            commercial.push({slug: project.slug, role: project.content.role});
        }
    })


    return(
        <div className={style.Project}>

        <div className={style.ProjectList}>
            <div className={style.folders}>
            {
                editorial.length > 0 && <p className={style.entryHeader}>editorial</p>}
                <div style={{marginBottom: "10px"}}>
                    {
                    editorial.map((entry, i) => {
                    return ((entry.role == 'Styling' && isStyling) || (entry.role == 'Assisting' && !isStyling)) &&
                    
                    <div key={i} className={cx(style.entry, entry.slug == data.selectedSlug ? style.active : "")} onClick={(e) => selectProject(entry.slug)}>
                            <div className={style.entryInner} >
                                <div className={style.listImg}><img src="/images/folder.png"/></div>
                                <p>{entry.slug}</p>
                                <div className={style.arrowImg}><img src="/images/arrow.png"/></div>
                            </div>
                    </div>
                     })
                } 
                </div> 

                {
                commercial.length > 0 && <p className={style.entryHeader}>commercial</p>}
                <div> 
                {
                    commercial.map((entry, i) => {
                    return ((entry.role == 'Styling' && isStyling) || (entry.role == 'Assisting' && !isStyling)) &&

                    <div key={i} className={cx(style.entry, entry.slug == data.selectedSlug ? style.active : "")} onClick={(e) => selectProject(entry.slug)}>
                            <div className={style.entryInner} key={i}>
                                <div className={style.listImg}><img src="/images/folder.png"/></div>
                                <p>{entry.slug}</p>
                                <div className={style.arrowImg}><img src="/images/arrow.png"/></div>
                            </div>
                    </div>
                    })
                }
                </div>

            </div>

            { 
            projects.map((project, i) => {
            return (project.slug == data.selectedSlug) &&
                    
            <div key={i} className={style.files}>
                <p className={style.entryHeader}>{project.name}</p>

                {
                /*------------image thumbnails--------------*/

                project.content.images.map((image, j) => {
                return <div key={j} className={cx(style.entry)}>
                            <div className={style.entryInner}>
                                <div className={style.listImg}><img className={style.img} src={image.filename}/></div>
                                        <p>{image.name != "" ? image.name : "project-img"}</p>
                                <div className={style.arrowImg}><img src="/images/arrow.png"/></div>
                            </div>
                        </div>
                    })
                }


            </div>
            })}
            </div>
                
           
            <div className={style.imageDisplay}>
                {
                    projects.map((project, i) => {
                        return project.slug === data.selectedSlug &&
                        <div className={style.rows} key={i}>
                        {
                            project.content.images.map((image, j) => {
                                return <ProjectImage key={j} src={image.filename}/>
                            })
                        }
                        </div>
                    })
                }
            </div>
                
        </div>
    )
}


const ProjectImage = ({src}) => {

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
            <div className={cx(style.projectImage, vertical ? style.vertical : style.horizontal)}>
                <div>
                <img ref={ref} src={src}/>
                </div>
            </div>
        )
    
}


export default Project;

