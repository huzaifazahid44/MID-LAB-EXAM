

const button = document.getElementById("inbtn");




button.addEventListener("click", function(){



    const ul = document.getElementById("todos");
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    const editbutton = document.createElement("button");
    editbutton.textContent = "edit";
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "delete";
    li.appendChild(t);
    li.appendChild(editbutton);
    li.appendChild(deletebutton);

      ul.appendChild(li);


      deletebutton.addEventListener("click", function(){


        const ul = document.getElementById("todos");

        ul.removeChild(li);


      })


      editbutton.addEventListener("click", function(){


        var inputbox = document.createElement("input");
        inputbox.setAttribute("type","text");


        li.appendChild(inputbox);
        var listel = document.getElementById(li);
        listel.innerText = inputbox.value;
        
      })



    }
)





