define([
    "controllers/modules",
    "../../lib/codemirror/lib/codemirror",
    "../../lib/codemirror/mode/javascript/javascript",
    "jquery",
    "../../lib/codemirror/addon/hint/show-hint",
    "../../lib/codemirror/addon/hint/javascript-hint"
], function(controllers, CodeMirror){
    controllers.controller("bmController", function($rootScope, $scope){
        const editor = CodeMirror.fromTextArea($("#code")[0], {
            lineNumbers: true,//是否显示行号
            indentUnit: 4,
            styleActiveLine: true, // 当前行背景高亮
            matchBrackets: true,   // 括号匹配
            mode: "javascript",　//默认脚本编码
            lineWrapping: true, //是否强制换行
            spellcheck: true,
        });

        //设置编辑器的背景色
        $(".CodeMirror-gutters").css("backgroundColor", "transparent");
        $(".CodeMirror").css("backgroundColor", "transparent");

        editor.on("cursorActivity", () => {
            let val = editor.getValue() + "";
            val = val.replace(/[a-z]+[\-|\']+[a-z]+/ig, '').match(/([a-z]+)/ig);    //利用正则取出用户输入的所有的英文的字母

            CodeMirror.ukeys = val;
            editor.showHint();
        });

        editor.setSize(400,600);    //设置编辑框的尺寸
        editor.setOption("theme", "3024-night");    //editor.setOption()为codeMirror提供的设置风格的方法

        window.res = "";
        console.oldLog = console.log;
        console.log = function(str){
            console.oldLog(str);
            window.res += str + "\r\n";
        };

        function add() {
            const a = 1;
            const b = 2;

            return a + b;
        }

        $scope.addTest = function(){
            editor.setValue(add.toString());
        };

        $scope.runCode = function(){
            const val = eval(editor.getValue());
            console.log(val, "执行结果");
            window.res += val + "\r\n";
        };

        $scope.clearCode = function(){
            editor.setValue("")
        };

        $scope.changeFontSize = function(flag){
            let fontSize = $(".CodeMirror").css("font-size");
            let sizeNum = Number(fontSize.substring(0, fontSize.length-2));

            sizeNum += flag;
            $(".CodeMirror").css("fontSize", sizeNum);
        }
    });
});