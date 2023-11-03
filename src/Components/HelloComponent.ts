import k from '../kaboom'
import Matter from 'matter-js'

export default function HelloComponent (args) {
    return{
        add(){
            // This Runs When The Entity With This Component Is Created
            console.log("IM ALIVE!");
        },
        update(){
            // This Runs Every Frame
            console.log("IM STILL ALIVE :)");
            console.log(args);
        }
    }
}