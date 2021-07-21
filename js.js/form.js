class bb {
    constructor(){
        this.input = createInput("enter answer number", "number");
        this.input1 = createInput("enter name");
        this.title=createElement("h2")
        this.title1= createElement('h2');
        this.title2 = createElement('h2');
        this.title3 = createElement('h2');
        this.title4= createElement('h2');
        this.title5= createElement('h2');
        this.button=createButton("sudmit")
    }
    display(){


this.input.position(600,200)
this.input1.position(300,200)

this.title.html("what is the full form iss")
this.title.position(100,50)
this.title1.html("1:instudy sun service")
this.title1.position(100,100)
this.title2.html("2:ice sun sit")
this.title2.position(100,150)
this.title3.html("3:ice sun service")
this.title3.position(100,200)
this.title4.html("4:international space station")
this.title4.position(100,250)
this.button.position(100,300)
this.title5.position(500,250)



this.button.mousePressed(()=>{
    var playerIndex = "players/player";

    console.log(this.input1);
    
    database.ref(playerIndex).set({
        name:this.input1.value(),
        answer:this.input.value()
      });
      if(this.input.value()==4){
        this.title5.show()
        this.title5.html("coroct")
      }else{
        this.title5.show()
        this.title5.html("wronk")
      }

})


    }
}

















































































































































































































































































































