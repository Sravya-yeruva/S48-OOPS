import Sravya from "./Sravya";

class Indu extends Sravya{
    constructor(){
        super();
        console.log("About Indu");
    }
    FavouriteFood=()=>{
        console.log("Indu Likes to Eat Ice Cream")
    }
    WorkingTime=()=>{
        console.log("Indu works atleast 9 hours per day")
    }
    Hobbies=()=>{
        console.log("Indu Likes to Play Cricket")
    }
    SleepingTime=()=>{
        console.log("Indu Sleeps at 8pm")
    }

    Calculate=()=>{
        console.log("0 parameters")
    }
    Calculate=(a)=>{
        console.log("1 parameters")
    }
    Calculate=(a,b)=>{
        console.log("2 parameters")
    }
    Calculate=(a,b,c)=>{
        console.log("3 parameters")
    }
    

}

export default Indu;