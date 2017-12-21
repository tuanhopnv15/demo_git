class TuanHo extends React.Component{
        render(){
          return  <h1 className="mauvang">Tuanho</h1>;
        }
}

function TuanHo2 (){
        return  <h1 className="mauvang">Demo Reactjs function </h1>;    
}
const element = <TuanHo2 /> 

ReactDOM.render( 
        <div><TuanHo /></div>  //Cách 1: Class

, document.getElementById("root"));﻿