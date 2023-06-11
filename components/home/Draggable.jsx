import { useEffect, useState, useRef } from 'react'
import style from './Draggable.module.css'
import cx from 'classnames';

const Draggable = ({highestZ, setMaxZ, initZIndex, children}) => {

    const ref = useRef(null);
    const padding = 10;
    
    const [zIndex, setZIndex] = useState(initZIndex);
    const [dragging, setDragging] = useState(false);
    const [top, setTop] = useState(padding);
    const [left, setLeft] = useState(padding);
    const [offsetX, setX] = useState(0);
    const [offsetY, setY] = useState(0);
    const [maxX, setMaxX] = useState(190);
    const [maxY, setMaxY] = useState(175);
    const [isMoving, setMoving] = useState(false);

    //initThumb
    useEffect(() => {
        let posX = Math.random() * (window.innerWidth - maxX) + padding;
        let posY = Math.random() * (window.innerHeight - maxY) + padding;
          
        //convert px to percentage
        posX = posX / window.innerWidth * 100;
        posY = posY / window.innerHeight * 100;
            
        setTop(posY);
        setLeft(posX);
        
    }, [])

    //dragging
    useEffect(() => {
        const dragObject = (e) => {
            if(dragging){
                setMoving(true);
                let posX = e.clientX - offsetX;
                let posY = e.clientY - offsetY;
                //limit to screen
                posX = Math.min(posX, window.innerWidth - maxX);
                posX = Math.max(posX, padding);
                posY = Math.min(posY, window.innerHeight - maxY);
                posY = Math.max(posY, padding);
                //convert px to percentage
                posX = posX / window.innerWidth * 100;
                posY = posY / window.innerHeight * 100;

                setTop(posY);
                setLeft(posX);
            }    
        }

        const disableDragging = () => {
            if(dragging){
            setDragging(false); 
            setMoving(false);
            }    
        }

        window.addEventListener('mousemove', dragObject);
        window.addEventListener('mouseup', disableDragging);

        return () => {
            window.removeEventListener('mousemove', dragObject);
           window.removeEventListener('mouseup', disableDragging);
        };

    }, [dragging]);

    //without [] renders on every change, Empty [] only on first render, or fill in dependencies [zIndex]
    //cleanup function cleans up values of prev useEffect before the next time it gets executed
 
    const enableDragging = (e) => {
        if(ref.current){
            const { left, top, height, width} = ref.current.getBoundingClientRect()
            setX(e.clientX - left);
            setY(e.clientY - top);
            setMaxX(width+padding);
            setMaxY(height+padding);
        } 
        let newZ = highestZ + 1;
        setZIndex(newZ);
        setMaxZ(newZ);
        setDragging(true); 
    }

    return(
        <div onMouseDown={enableDragging} ref={ref} className={cx(style.Draggable, isMoving ? style.moving : "")} style={{top: `${top}vh`, left: `${left}vw`, zIndex: zIndex}}>
            {children}
        </div>
    )
}


export default Draggable;

// export { Home, ...}