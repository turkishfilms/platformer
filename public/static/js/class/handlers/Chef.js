class Chef{
  constructor({recipes=["bread"]}={}){
    //properties
    this.recipes = recipes
    this.measurements = "EMP"
    this.name = "Mr.Chef"
  }
  //methods
  cook(recipe){
    console.log("I am cooking ", recipe)
  }
  cut(){}
  blend(){}
  mix(){}
  pour(){}

}
