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
            img: "http://i.imgflip.com/1bij.jpg" ,
            memeImg: []
        }
        this.handleChange = this.handleChange.bind(this)  //---->> Imp defines this,, i forgot to add it (prakash)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

     /*
    * use of API to get the meme images
    * tasks
    *  make a api call 
    * https://api.imgflip.com/get_memes
    * save the data thatcomes back  with 'response.data.memes' to new state property
    */
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {

            const {memes} = response.data
            // console.log(memes[0])
        
            this.setState({
                memeImg: memes

            })
        })
    }

    /**
     * craete the onChange Handler method
     * it should update the corresponding state on every change of the input box
     */

     handleChange(event) {

        const {name, value} = event.target
        this.setState({ [name]: value })
     }

   /**
    * create a method  that when gen button is click, 
    * chooses one of the memesfrom our array memeImages and makes it so that is is meme image htats
    * hoes up in the bottom portion of our meme generator site `url`
    */
     handleSubmit(event){
         event.preventDefault()
         //get a random int(index in the array)
         const randomNumber = Math.floor(Math.random() * this.state.memeImg.length)
         
         //get the meme for that index
         //set 'randomImg' to the .url 

         const randomMemeImg = this.state.memeImg[randomNumber].url 

         this.setState({ img : randomMemeImg})
        

     }

    render () {
        return(
            <div>
                <form className="meme-form" onSubmit= {this.handleSubmit}>
                    
                    <input type="text" name= "topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange}/>
                    <input type="text" name= "bottomText" placeholder="Buttom Text" value={this.state.bottomText} onChange={this.handleChange}/>
            


                    <button> Generate</button>

                </form>
                <div className="meme">
                    <img src={this.state.img} alt="" />
                    <h2 className= "top">{this.state.topText}</h2>
                    <h2 className= "bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator