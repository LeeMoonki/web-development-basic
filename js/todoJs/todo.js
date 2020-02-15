function Todo(title, options) {
  this.title = title ? title : '';
  this.description = options && options.description;
  this.dueDate = (options && options.dueDate) ? options.dueDate : new Date();
  this.do = !!(options && options.do);
}

Todo.prototype.toggleTodo = function() {
  this.do = !this.do;
};

Todo.prototype.setTitle = function(newTitle) {
  this.title = newTitle;
};

function TodoTeam(title, team, members, options) {
  if (!(members instanceof Array)) {
    throw new Error('The members must be an array type.');
  }

  Todo.call(this, title, options);
  this.team = team;
  this.members = members;
}

TodoTeam.prototype = Object.create(Todo.prototype);

Object.defineProperty(TodoTeam.prototype, 'constructor', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: TodoTeam
});

TodoTeam.prototype.appendMember = function(member) {
  this.members.push(member);
};

TodoTeam.prototype.removeMember = function(member) {
  const foundIndex = this.members.findIndex((m) => {
    return m === member;
  });

  if (foundIndex > -1) {
    this.members.splice(foundIndex, 1);
  }
};

module.exports = {Todo, TodoTeam};
