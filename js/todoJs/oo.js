// OO(Object Oriented)

function Todo(title, options) {
  this.title = title;
  this.description = options && options.description;
  this.dueDate = (options && options.dueDate instanceof Date && !isNaN(options.dueDate)) ? options.dueDate : new Date();
  this.do = !!(options && options.do);
}

Todo.prototype.toggleDo = function() {
  this.do = !this.do;
};

Todo.prototype.setTitle = function(title) {
  this.title = title;
};

Todo.prototype.setDescription = function(description) {
  this.description = description;
};

Todo.prototype.setDueDate = function(year, month, day, hour, minutes) {
  if (year instanceof Date && !isNaN(year)) {
    this.dueDate = year;
  } else {
    this.dueDate = new Date(year, month, day, hour, minutes);
  }
};

function TodoTeam(title, name, options) {
  Todo.call(this, title, options);
  this.name = name;
  this.members = (options && options.members instanceof Array) ? options.members : [];
};

TodoTeam.prototype = Object.create(Todo.prototype);

Object.defineProperty(TodoTeam.prototype, 'constructor', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: TodoTeam
});

TodoTeam.prototype.changeTeam = function(name, members) {
  this.name = name;
  this.members = members instanceof Array ? members : [];

  return this;
};

TodoTeam.prototype.appendMember = function(memberName) {
  this.members.push(memberName);

  return this;
};

TodoTeam.prototype.removeMember = function(predicate) {
  const index = this.members.findIndex(predicate);

  if (index > -1) {
    this.members.splice(index, 1);
  }

  return this;
};

let ttodo = new TodoTeam('title', 'team name');

ttodo instanceof Todo // true
ttodo instanceof TodoTeam // true

Object.getPrototypeOf(TodoTeam.prototype) === Todo.prototype // true
Todo.prototype.isPrototypeOf(TodoTeam.prototype) // true
