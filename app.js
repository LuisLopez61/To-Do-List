
function createTodo(){
    var txt = $("#txtTodo").val(); // will get the txt of the input field
    console.log(txt);

    //create and li to display the todo
    var li = "<li>" + txt + "</li>";
    console.log("syntax",li);

    $(".list").append(li);
    $("#txtTodo").val(" ");
    $("#txtTodo").focus();
    

}


function init(){
    console.log("page is ready!");

    //setup events
    $("#btnAdd").click(createTodo);

    $("#txtTodo").keypress(function(args){
        if(args.key == "Enter"){
            createTodo();
        }
    });
}

//onload gets called when the browser finishes rendering the HTML 
//pass a funtion name to it
window.onload = init;

