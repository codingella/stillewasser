import Link from 'next/link';
import { useState } from 'react';
import style from './Homepage.module.css'
import cx from 'classnames';

const Homepage = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const [activeImage, setActiveImage] = useState(0);
    const [nextImage, setNextImage] = useState(1);
    const [nextImageOpacity, setNextImageOpacity] = useState(0);

    const [supportVisible, setSupportVisible] = useState(false);

    const imagesForSlides = [
        {slide: 0, image:0},//intro 2
        {slide: 1, image:1},//intro 2
        {slide: 2, image:2},// intro 3

        {slide: 3, image:3}, // story 1
        {slide: 4, image:4}, // story 2

        {slide: 5, image:5}, // crew 1
        {slide: 6, image:5}, // crew 2
        {slide: 7, image:5}, // crew 2
        {slide: 8, image:5}, // crew 2
    ]

    const setSlide = (slide) => {

        setActiveSlide(slide);

        let nextImage = imagesForSlides[slide].image;

        if(nextImage !== activeImage){
            setNextImage(nextImage);
            setNextImageOpacity(1);
            //next image visible 1.3s
            
            setTimeout(()=>{
                setActiveImage(nextImage);
                setNextImageOpacity(0);
            }, 1300); 
        }
        else {
            
        }
    }

    const increaseSlide = () => {
        if(activeSlide < 8){
            setSlide(activeSlide+1)
        }
        else if (activeSlide == 8){
            setSlide(0)
        }
    }

    const decreaseSlide = () => {
        if(activeSlide > 0){
            setSlide(activeSlide-1)
        }
        else if (activeSlide == 0){
            setSlide(8)
        }
    }


/*
    const setSlide = () => {
        setActiveSlide(activeSlide+1);
    }*/

    return(
        <div className={style.Page}>
            <div className={style.header}>Stille Wasser</div>
            <div className={style.subheader}>a short film by Renée Marie Klöffer </div>
            <div className={style.support} style={{width: supportVisible ? '310px' : '200px'}} onClick={() => setSupportVisible(!supportVisible)}>
               <p>Projekt unterstützen</p> <p style={{display: supportVisible ? 'block' : 'none'}}>x</p> 
            </div>

            <div className={style.navigation}>
                <p className={ activeSlide < 3 ? style.selected : ''} onClick={() => setSlide(0)}>intro</p>
                <p onClick={() => setSlide(3)}>story</p>
                <p className={ activeSlide == 3 ? style.selected : ''} onClick={() => setSlide(3)}>{'_logline'}</p>
                <p className={ activeSlide == 4 ? style.selected : ''} onClick={() => setSlide(4)}>{'_synopsis'}</p>
                <p className={ activeSlide > 4 ? style.selected : ''} onClick={() => setSlide(5)}>crew</p>
            </div>

            <div className={style.imgContainer}>
                <div className={style.activeImage}>
                   <img src={`/images/${activeImage}.jpg`}/>
                </div>

                <div className={style.nextImage} style={{opacity: nextImageOpacity, transition: 'opacity 1.3s ease-in'}}>
                    <img src={`/images/${nextImage}.jpg`}/>
                </div>

                <div className={style.blurer} style={{opacity: 0.8, backdropFilter: 'blur(15px)'}}></div>
            </div>

            <div className={style.slides} >
            {/*Slide 0: Intro 1*/}
                <Slide slide={0} title={'Intro'} pager={'1/3'} activeSlide={activeSlide}>
                    <span>
                    {'"Stille Wasser" [Arbeitstitel] ist ein Kurzfilm, über zwei junge Frauen in Sinnkrise. Mit einer Mischung aus Humor und subtilem Zynismus erkundet der Film die Wahrnehmung von schmerzhaften Erinnerungen und die Suche nach Heilung. Der Film möchte das Bewusstsein für mentale Gesundheit, die Bedeutung der Selbstannahme und Selbstreflexion stärken.'}
                    </span>
                </Slide>

                <Slide slide={1} title={'Intro'} pager={'2/3'} activeSlide={activeSlide}>
                    <span>
                   {'Eine leise Liebeserklärung an die Freund*innenschaft, die Suche, den Weg und alles, was dazwischen liegt. Verzweiflung und Orientierungslosigkeit haben mich fast schicksalhaft auf diesen Weg und zu diesem Filmprojekt geführt: Immer mehr junge Menschen zweifeln stark an ihrer Welt, den Systemen, die sie umgeben, und vor allem an sich selbst. Sich auf diesem holprigen Weg der Zwanziger an irgendeinem Punkt nicht selbst als das störende Problem im System wahrzunehmen und ein Stück weit zu verlieren - scheint fast unmöglich.'} 
                    </span>
                </Slide>
      

                <Slide slide={2} title={'Intro'} pager={'3/3'}activeSlide={activeSlide}>
                    <span>
                   <p> 
                    {'Wenn die eigene Lebensgestaltung zur Sinnkrise wird, bleiben auch mentale Verstimmungen und destruktive Verhaltensweisen nicht fern. Auch mir ist es vor einiger Zeit so ergangen, auf diesem Weg waren tiefgehende Beziehungen und platonische Liebe wegweisend."Stille Wasser" [Arbeitstitel] möchte durch die Porträtierung einer tiefen Verbundenheit in all ihren Facetten einen zärtlichen Blick auf platonische Liebe und die Psyche junger Frauen werfen. Denn besonders in Zeiten mentaler Herausforderung sind es oft unsere engsten Vertrauten, die uns einfühlsamer und wahrheitsgetreuer wahrnehmen als wir selbst.'} 
                    </p>
                    </span>
                </Slide>

                <Slide slide={3} title={'Story_logline'} pager={'1/2'} activeSlide={activeSlide}>
                    <span>
                        <p>
                        {'Zwei Freundinnen - Flori & Mara - in ihrer Quarterlife-Crisis entziehen sich immer mehr ihrer Lebensrealität. Auf der Suche nach Orientierung, Trost und Heilung treffen sie auf sich, ihre Probleme und Prägungen, und das ausgerechnet in einem Jagdhaus irgendwo in den Bergen.'}
                        </p>
                    </span>
                </Slide>

                <Slide slide={4} title={'Story_synopsis'} pager={'2/2'} activeSlide={activeSlide}>
                    <span>
                    <p>
                   {'Zwei junge Frauen in ihren Mittzwanzigern treffen sich in einem alten Jagdhaus in einem kleinen Ort irgendwo in den Bergen. Beide befinden sich vermeintlich in ihrer Quarterlife-Crisis: Desillusioniert und von Eskapismus getrieben, sehnen sie sich nach Orientierung, Verständnis und Zugehörigkeit. Gemeinsam versuchen sie, während ihres Aufenthalts herauszufinden, was sie an diesen Ort zu diesem Zeitpunkt ihres Lebens gebracht hat. Durch einzelne Gespräche oder auch Gesprächsfetzen tauchen sie in ihre Vergangenheit ein, dabei flüchten sie immer wieder in ihre realitätsferne Gegenwart. Die Gespräche lösen bei den Figuren unerwartete Emotionen und Erinnerungen aus. Sind sie wirklich stark genug, der anderen Person und damit auch sich selbst zu zeigen, was sie tatsächlich umtreibt?'}
                    </p>
                    </span>
                </Slide>

                <Slide slide={5} title={'Crew'} pager={'1/4'} activeSlide={activeSlide}>
                    <span>
                    <h1><em>{'Producer, Writer & Director /'}</em><br/>{'Renée Klöffer'}</h1>
                    <p>
                   {' Designerin & angehende Filmemacherin. Dabei konzentriert sie sich stark auf konzeptionelles und tiefgründiges Storytelling mit dem Fokus auf psychologische & philosophische Fragen, Feminismus & Frausein in der Gesellschaft.'}
                    </p>
                    <img className={style.crew1} src={'/images/crew1.png'}/>
                    </span>
                </Slide>

                <Slide slide={6} title={'Crew'} pager={'2/4'} activeSlide={activeSlide}>
                    <span>
                    <h1><em>{'Producer /'}</em><br/>{'Moritz Michl'}</h1>
                    <p>
                    {'Producer & Regisseur, hat vor einiger Zeit seine Rolle als DoP verlassen. Nun konzentriert er sich darauf, Geschichten auf spielerisch-charmante Weise zu erzählen. Dennoch ist die visuelle Komponente für ihn immer noch ein Schlüsselfaktor.'}
                    </p>
                    <img className={style.crew2} src={'/images/crew2.png'}/>
                    </span>
                </Slide>

                <Slide slide={7} title={'Crew'} pager={'3/4'} activeSlide={activeSlide}>
                    <span>
                    <h1><em>{'Directors of Photography'}</em> <br/>
                    {'Henrike Thiel & Finn Fredeweß'}</h1>
                    <p>
                    {'Das Kamera-Duo hat zusammen in Berlin Design studiert & arbeitet seither als eingespieltes Team zusammen an diversen Filmprojekten konzeptionell sowie visuell. Gemeinsam schaffen sie stimmungsvolle Bilder, die von starken Gefühlen getragen werden.'}
                    </p>
                    <img className={style.crew3} src={'/images/crew3.png'}/>
                    </span>
                </Slide>

                <Slide slide={8} title={'Crew'} pager={'4/4'} activeSlide={activeSlide}>
                    <span>
                    <p>
                    {'Wir suchen besonders in der Phase der Postproduktion noch nach weiterer Unterstützung, die Lust hat, ein Teil des Projekts zu werden! Meldet euch gerne an hello@reneekloeffer.com'}
                    </p>
                    <p className={style.smallText}>
                    {'AD / Alexander Urban'} <br/>
                    {'BTS Video / Jessica Dietrich'}<br/>
                    {'Set-Ton / Vincent Klöffer'}<br/>
                    {'BTS / Anna Franziska Herrmann'}<br/>
                    {'Gaffer / Phillip Weber'}<br/>
                    {'Runner / Lea Gadner'}<br/>
                    <br/>
                    {'Website / Elena Rudolph'}<br/>
                    {'Skript Beratung / Manuela Bastian'}<br/>
                    {'BA Betreuung / Prof. Andreas Ingerl'}
                    </p>
                    </span>
                </Slide>
                <div className={style.next} onClick={() => increaseSlide()}/>
                <div className={style.prev} onClick={() => decreaseSlide()}/>

            </div>


            <div className={cx(style.supportWindow, supportVisible ? style.visible : '')}>
                <div className={style.supportScroll}>
                <div className={style.supportInner}>
                    <p>
                    Leider kann sich so ein Abschluss & Herzensprojekt, wie dieses sich nicht gänzlich ohne fremde Hilfe finanzieren. Wir sind für jede Art & Form von Unterstützung ob groß oder klein, herzlichst dankbar!! 
                   </p>
                   <p>
                   Das Spenden-Ziel sind 1000€ - 1400€. Jeder Cent fließt in Equipment, Reisekosten, Ausstattung & Verpflegung. 
                   Falls wir das Mindest-Ziel der 1000€ überschreiten wollen wir den Rest in die zusätzliche Postproduktion und Festivalauswertung setzen, 
                   um dem Projekt auch ein bestmögliches Publikum geben zu können. Die Spendenaktion ist bis zum 10.07.2023 offen. 
                   </p>
                    <br/>
                    {'Freie Spenden sind natürlich möglich. Doch als Dank für Eure Spendenbeiträge haben wir uns auch diverse Goodies überlegt:'}
                    <br/>
                    <a href={'https://www.paypal.com/pools/c/8V28DPsZkv'}>
                        <h2>{'Artprint 15-20€'}</h2>
                        <p>
                        {'Ein Art-Film-Print vom Dreh. A4 schwarz/weiß nachhaltiger Risodruck auf Designpapier. Versandadresse bitte im Verwendungszweck angeben. Der Versand erfolgt ab Oktober.'}
                        </p>
                    </a>
                    <a href={'https://www.paypal.com/pools/c/8V28DPsZkv'}>
                        <h2>{'Fabric 30-40€'}</h2>
                        <p>
                        {'Ein T-Shirt oder Geschirrtuch mit dem Kurzfilm Design & Name im Abspann unter DANKE! Screen Print auf 100% Baumwolle.'}<br/>
                        {'Bitte gebt im Verwendungszweck an, ob ihr ein Geschirrtuch oder ein T-Shirt (Größen: M/L/XL) wünscht & die Adresse für den Versand. Der Versand erfolgt ab Mitte Oktober.'}
                        </p>
                    </a>

                    <a href={'https://www.paypal.com/pools/c/8V28DPsZkv'}>
                        <h2>{'Super Supportis 50-500€'}</h2>
                        <p>
                        {'Supporter Bundle: Zugang zum Film vor Premiere, Behind the scenes Bilder, Geschirrhandtuch, Name im Abspann unter SUPPORT & A3 Filmplakat.'}
                        <br/>
                        {'Bitte gebt im Verwendungszweck an, ob ihr ein Geschirrtuch oder ein T-Shirt (Größen: M/L/XL) wünscht & die Adresse für den Versand. Der Versand erfolgt ab Mitte Oktober.'}
                        </p>
                    </a>
                    <br/>
                    <br/>
                    <a href={'https://www.paypal.com/pools/c/8V28DPsZkv'} className={style.paypal}>
                    <p className={style.emphazize}>
                   {'Hier geht es zu Paypal'}
                    </p>
                    </a>
                    <br/><br/>
                    <p >
                   {'*Die Bilder dienen zur vorläufigen Visualisierung und stellen nicht das reale Endprodukt dar.'}
                    <br/><br/>
                   {'Uns ist bewusst, dass es vor allem in aktuellen Zeiten sehr schwierig ist, ein Budget zusammen zu bekommen, um alle Mitwirkenden fair bezahlen zu können, deswegen wollen wir nur ein bestimmtes Ziel erreichen, mit dem wir das Projekt mit den nötigsten Mitteln zur bestmöglichen Qualität realisieren können.'}
                    </p>
                    
                </div>
                
                </div>
                <div className={style.fader}></div>
            </div>
        </div>
    )
}

        //start: active slide blur, text noblur opactiy 1, display block, next slide display block opacity 0 noblur textblur

        //transition 1: activeSlide opacity 0 display block textblur , nextSlide opacity 1 noblur textblur

        // start: activeSlide==nextSlide


const Slide = ({title, pager, children, slide, activeSlide}) => {

    return(
        <div className={style.slide} style={{opacity: activeSlide == slide ? 1 : 0, transition: activeSlide == slide ? 'all 1s linear 0.5s' : 'all 1s linear' }}>
            <div className={style.text} style={{}}>
                <p className={style.title}>{title}</p>
                
                    {children}
                
                <div className={style.pager}><p>{pager}</p></div>
            </div>
    </div>

    )
}


export default Homepage;

// export { Home, ...}