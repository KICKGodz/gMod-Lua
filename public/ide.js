//Document Elements
var input = document.getElementById("ide");
var runButton = document.getElementById("run")

//CodeMirror Editors
var ide = CodeMirror.fromTextArea(input, {
    lineNumbers: true,
    theme: "darcula",
    mode: "lua"
});
ide.setSize(document.body.clientWidth/2, 200);

//Button Events
runButton.onclick = function(e) {
    fengari.load(ide.getValue())()
}