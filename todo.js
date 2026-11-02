const todos = [];

function tambahTodo(teks) { todos.push(teks); }
function hapusTodo(i) { todos.splice(i, 1); }

if (typeof module !== 'undefined') module.exports = { todos, tambahTodo, hapusTodo };
