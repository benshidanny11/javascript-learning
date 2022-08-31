const EventEmitter=require('events');

class Logger extends EventEmitter {

    log(){
        console.log('I am logging');
        this.emit('logging',{id:1,message:'Hey danny',time:'2:00 pm'})
    }
}

module.exports=new Logger();
