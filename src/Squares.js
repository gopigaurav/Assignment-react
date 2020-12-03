import React, {useState, useEffect} from 'react';
import Output from './Output';
import'./Squares.css';



let rows__ = []
function Squares({product,setfiop}) {
    const [row, setRow] = useState();
    const[cardindex,seCardIndex] = useState(1);
    const[cardheight,setCardHeight] = useState(0);
    const[cardwidth,setCardWidth] = useState(0)

    useEffect(() => {
        console.log(product);
        
       let card__properties = {
           card_index: cardindex,
           card_height:cardheight,
           card_width: cardwidth
       }
       
       rows__.push(card__properties)
       console.log("rows", rows__)
       var output = [<Output rows_= {rows__}/>];

    },[cardwidth,cardheight])


    return (
        <div className="boxes">
            <div className="boxes__input">
           <input className= "box__input" onChange = {event => setCardHeight(event.target.value)} type="number" placeholder="Enter width" />
            <br/>
             <input type="number" onChange = {event => setCardWidth(event.target.value)} placeholder="Enter height "/>
             </div>
             {cardheight}<br></br>
             {cardwidth}
        </div>
    )
}
export default Squares
