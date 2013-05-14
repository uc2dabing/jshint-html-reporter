exports.test = function(){
    try{

       var test1 = new Function('data', 'if(1){i=1;0=data.0;}');

    }catch(e){
        
        throw e;
        //console.log(e);

    };
};
exports.test();