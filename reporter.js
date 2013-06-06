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

exports.reporter = function(errors, data){

    // data数据转换处理，给前端使用
    var fileArray = [];
    data.forEach(function(fileObj){
        var temp = {
            file : fileObj.file,
            errorlength : fileObj.errors.length,
            anchor : path.basename(fileObj.file, '.js')
        };
        fileArray.push(temp);
    });

    // errors数据转换处理，给前端使用
    var errorsArray = [];
    errors.forEach(function(error){
        var temp = {
            file : error.file,
            anchor : path.basename(error.file, '.js'),
            error : error.error
        };
        errorsArray.push(temp);
    });

    // 当前module要在其它目录里面调用必须用绝对路径
    var errorTplPath = path.resolve(__dirname, errorTplFilename);

    var errortpl = fs.readFileSync(errorTplPath);
    var errortpl = decoder(errortpl);

    var render = template.compile(errortpl);
    var html = render({errors : errorsArray, files : fileArray});

    //console.log( util.inspect(errorsArray) + util.inspect(fileArray));
    //console.log(render.toString());
   
    //fs.writeFileSync(path.resolve(__dirname, 'reporter-data2.json'), util.inspect(data[0].errors, {depth : null}));
    //fs.writeFileSync(path.resolve(__dirname, 'reporter-data.json'), util.inspect(data, {depth : null}));
    //fs.writeFileSync(path.resolve(__dirname, 'reporter-errors.json'), util.inspect(errors, {depth : null}));

    // 外部的grunt的jshint插件reporterOutput捕捉的是标准输出stdout。
    console.log(html);

};

//exports.reporter({});

