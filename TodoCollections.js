"use strict";
exports.__esModule = true;
var TodoItem_1 = require("./TodoItem");
var TodoCollection = /** @class */ (function () {
    function TodoCollection(userName, todoItems) {
        if (todoItems === void 0) { todoItems = []; }
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    TodoCollection.prototype.getTodoById = function (id) {
        return this.todoItems.find(function (item) { return item.id === id; });
    };
    TodoCollection.prototype.addTodo = function (task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new TodoItem_1["default"](this.nextId, task));
        return this.nextId;
    };
    TodoCollection.prototype.markComplete = function (id, complete) {
        var todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    };
    return TodoCollection;
}());
exports["default"] = TodoCollection;
