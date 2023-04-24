
import React, { Component } from "react";


class ComposantClass extends Component{

render(){
return(


    <h1>
        je suis {this.props.name}  

        j'ai {this.props.age} ans
     </h1>

)

}

}
export default ComposantClass;