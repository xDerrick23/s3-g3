window.onload = () => {

    const task = document.getElementById("task");
    const btnAddTask = document.getElementById("addTask");
    const main = document.getElementsByTagName("main")[0];

    const listDiv = document.createElement("div");

    const list = document.createElement("ul");

    main.appendChild(listDiv);
    listDiv.appendChild(list);
  
    btnAddTask.onclick = function () {

      const listElement = document.createElement("li");
      listElement.innerText = task.value;
  
      if (task.value !== "") {

        task.value = "";
  

        const btnRemoveTask = document.createElement("i");
        btnRemoveTask.classList.add("fas");
        btnRemoveTask.classList.add("fa-trash-alt");
        btnRemoveTask.style.fontSize = ".7rem";
        btnRemoveTask.style.marginLeft = ".3rem";
  

        listElement.appendChild(btnRemoveTask);
  

        list.appendChild(listElement);
  

        listDiv.classList.add("output-block");
  

        listElement.onclick = function (e) {
          const clickedElement = e.target;
          clickedElement.classList.add("task-done");
        };
  
        btnRemoveTask.onclick = function (e) {
          const clickedElement = e.target;
          clickedElement.closest("li").remove();
  

          if (list.childElementCount === 0) {
            //console.log("Vero");
            listDiv.remove();
          }
        };
      } else {
        alert("No task");
      }
    };
  };