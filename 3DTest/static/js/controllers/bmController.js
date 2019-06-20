define([
    "controllers/modules",
    "../../lib/codemirror/lib/codemirror",
    "../../lib/codemirror/mode/javascript/javascript",
    "jquery"
], function(controllers, CodeMirror){
    controllers.controller("bmController", function($rootScope, $scope){
        const editor = CodeMirror.fromTextArea($("#script_once_code")[0], { //script_once_code为你的textarea的ID号
            lineNumbers: true,//是否显示行号
            indentUnit: 4,
            styleActiveLine: true, // 当前行背景高亮
            matchBrackets: true,   // 括号匹配
            mode:"javascript",　//默认脚本编码
            lineWrapping:true, //是否强制换行
            spellcheck: true,

        });

        //设置编辑器的背景色
        $(".CodeMirror-gutters").css("backgroundColor", "transparent");
        $(".CodeMirror").css("backgroundColor", "transparent");

        //设置编辑框的尺寸
        editor.setSize(400,600);

        //editor.setOption()为codeMirror提供的设置风格的方法
        editor.setOption("theme", "3024-night");

        $scope.setEditorValue = function(){
            const val = $("#script_once_code").val();
            editor.setValue(val);// editor.setValue()设置textarea中的值
        }
    });
});