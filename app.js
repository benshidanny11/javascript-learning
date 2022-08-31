const logger=require('./Logger');

logger.on('logging',(e)=>{
    console.log(e)
})

logger.log();

