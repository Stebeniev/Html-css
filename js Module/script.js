// function addNewTodo() {
//     let title = document.getElementById("title").value;
//     let body = document.getElementById("body").value;
//     if (title.length === 0 || body.length === 0) {
//         alert('Fields are empty');
//         return;
//     }
//     let data = {
//         title: title,
//         body: body
//     }
//
//     let json = JSON.stringify(data);
//
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "http://127.0.0.1:8080/todo");
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(json);
// }
async function addNewTodo(todo) {
    let response = await fetch("http://127.0.0.1:8080/todo", {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {'Content-Type': 'application/json; charset=utf-8'},
    });
    if (response.ok) {
        let result = await response.json();
        addTodo(result.id, result.title, result.body, result.completed);
        document.getElementById("form").reset();
    }
}
let submit = document.getElementById("submit");
submit.onclick = () => {
    return false
};
submit.addEventListener("click", () => {
    // let title = document.getElementById("title").value;
    // let body = document.getElementById("body").value;
    let todo = {
        title: document.getElementById("title").value,
        body: document.getElementById("body").value,
        completed: document.getElementById("completed").checked,
    };
    if (todo.title.length === 0 || todo.body.length === 0) {
        return alert("Input ERROR!! All fields must be filled")
    } else {
        addNewTodo(todo);
    }
});
