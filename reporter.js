var template = require('./template');
var path = require('path');
var fs = require('fs');
var util = require('util');


 var errorTplFilename = 'errorlist.tpl'; 

// 编码buffer为string
function decoder(buffer){

    var StringDecoder = require('string_decoder').StringDecoder;
    var decoder = new StringDecoder('utf8');
    return decoder.write(buffer);

}

exports.reporter = function(errors){

    // 当前module要在其它目录里面调用必须用绝对路径
    var errorTplPath = path.resolve(__dirname, errorTplFilename);

    var errortpl = fs.readFileSync(errorTplPath);
    var errortpl = decoder(errortpl);

    var render = template.compile(errortpl);
    var html = render({errors: errors});

    //console.log(render.toString());
    //console.log('errors:' + util.inspect(errors) + errors.length + errors[0].file + errors[0].error.id);
    
    // 外部的grunt的jshint插件reporterOutput捕捉的是标准输出stdout。
    console.log(html);

};

//exports.reporter({});

