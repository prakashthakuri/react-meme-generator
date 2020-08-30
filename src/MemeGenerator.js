import React, { Component } from 'react'


/*
Initialize state to save the following data"
            top text
            bottom text
            random image
*/
class MemeGenerator extends Component {

    //initializtin state
    constructor(){
        super()
        this.state = {
            topText: "",
            bottonText: "",
            img: "http://i.imgflip.com/1bij.jpg" 
        }
    }
    
    com

    /*
    * use of API to get the meme images
    * tasks
    *  make a api call 
    * https://api.imgflip.com/get_memes
    * save the data thatcomes back  with 'response.data.memes' to new state property
    * 
    * 
    
    */
     

    render () {
        return(
            <div>
                    {this.state.img}
                </div>
        )
    }
}

export default MemeGenerator