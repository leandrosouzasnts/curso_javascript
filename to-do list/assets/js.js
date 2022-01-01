
function add() {
    var li = document.createElement("li");

    var input = document.createElement("input");
    input.type = "checkbox";
    
    var span = document.createElement("span");
    var text_span = document.querySelector("#task").value;
    span.innerText = text_span;

    li.appendChild(input);
    li.appendChild(span);

    var list = document.getElementsByTagName("ul")[0];
    if (text_span != '')
        list.appendChild(li);
    
    document.querySelector("#task").value = "";
}

// var list = document.getElementById("list");
// list.addEventListener("click", function checked(){
//     for (let i = 0; i < list.children.length; i++){
//         var item = list.children[i];
//        if (item.checked){
//            item.classList.toggle("checked");
//        }
//     }
// });
