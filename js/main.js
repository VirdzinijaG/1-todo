"use strict";

import { Form as Forma } from "./components/form/Form.js";
import { Todo } from "./components/todo/Todo.js";
// importavimas failo 

const form = new Forma("body");
form.init();

// console.log(form);

const tasks = new Todo('body');
tasks.init();

form.saveButtonCallback = tasks.createCard.bind(tasks);

// console.log(tasks);

// tasks.createCard('Kortele veikia', '#36f', '2030-12-31', true);
