const test = require('node:test');
const assert = require('node:assert');
const { todos, tambahTodo, hapusTodo } = require('./todo');

test('tambahTodo menambah satu todo', () => {
  tambahTodo('Belajar Git');
  assert.strictEqual(todos.length, 1);
});

test('hapusTodo menghapus todo sesuai nomor', () => {
  hapusTodo(0);
  assert.strictEqual(todos.length, 0);
});
