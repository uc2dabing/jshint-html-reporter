var template = require('./template');
var fs = require('fs');
var util = require('util');

var errorTplFilename = './errorlist.tpl'; 
var errorHtmlFilename = './errorlist.html';
console.log('init');

// 编码buffer为string
function decoder(buffer){

    var StringDecoder = require('string_decoder').StringDecoder;
    var decoder = new StringDecoder('utf8');
    return decoder.write(buffer);

}

exports.reporter = function(errors){

    var errortpl = fs.readFileSync(errorTplFilename);
    var errortpl = decoder(errortpl);


    var render = template.compile(errortpl);
    var html = render({errors: errors});

    //console.log(render.toString());
    //console.log('errors:' + util.inspect(errors) + errors.length + errors[0].file + errors[0].error.id);
    //console.log(html);
    
    fs.writeFileSync(errorHtmlFilename, html);

};

//exports.reporter({});
