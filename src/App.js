import './App.css';
import React , { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import Squares from './Squares';
import Output from './Output';



const HandleComponents = (event) =>{

}

function App() {
const [rows , setRows] = useState(0);
const [columns, setColumns] = useState(0);
const [finaloutput, setFinalOutput] = useState(0);

// ReactDOM.render(<Squares/>,document.getElementById('root'));

useEffect(() => {

}, [])

const HandleComponents=() =>{
  let product = rows*columns;
  console.log(product);
  var squares=[<App/>]
  for(let i= 0 ; i<product ; i++){
    squares.push(<Squares product={product} />);
  }
  squares.push(<Output/>)
  ReactDOM.render(squares,document.getElementById('root'));
}

const DisplayHW = () =>{
  setFinalOutput(finaloutput+1)
  let op = [<Squares setfiop = {finaloutput}/>,<Output setfiop2={finaloutput}/>]
}


  return (
    <div className="app">

      <div className="Input__field">
      Enter No. of Rows : <input type="number"  onChange = {event => setRows(event.target.value)} placeholder="Enter the number of rows" />
      <br/><br/>
      Enter No. of columns: <input type="number" onChange = {event => setColumns(event.target.value)} placeholder="Enter the number of columns"/>
      </div>
      <div className="buttons">
                 <button onClick={() => HandleComponents()} className="button__border" type="submit">
                     Add
                 </button>
                 <button onClick={() => DisplayHW()} className="button__border" type="submit">
                     Display
                 </button>
             </div>
    </div>
  );
}

export default App;
