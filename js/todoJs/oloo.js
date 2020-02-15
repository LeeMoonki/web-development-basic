// OLOO(Objects Linked to Other Objects)

let Todo = {
  init: function(title, options) {
    this.title = title;
    this.description = options && options.description;
    this.dueDate = (options && options.dueDate instanceof Date && !isNaN(options.dueDate)) ? options.dueDate : new Date();
    this.do = !!(options && options.do);
  },
  toggleDo: function() {
    this.do = !this.do;
  },
  setTitle: function(title) {
    this.title = title;
  },
  setDescription: function(description) {
    this.description = description;
  },
  setDueDate: function(year, month, day, hour, minutes) {
    if (year instanceof Date && !isNaN(year)) {
      this.dueDate = year;
    } else {
      this.dueDate = new Date(year, month, day, hour, minutes);
    }
  }
};

let TodoTeam = Object.create(Todo);

TodoTeam.set = function(title, name, options) {
  this.init(title, options);
  this.name = name;
  this.members = (options && options.members instanceof Array) ? options.members : [];
};

TodoTeam.changeTeam = function(name, members) {
  this.name = name;
  this.members = members instanceof Array ? members : [];

  return this;
};

TodoTeam.appendMember = function(memberName) {
  this.members.push(memberName);

  return this;
}

TodoTeam.removeMember = function(predicate) {
  const index = this.members.findIndex(predicate);

  if (index > -1) {
    this.members.splice(index, 1);
  }

  return this;
}

let ttodo = Object.create(TodoTeam);

ttodo.set('title', 'team name');

TodoTeam.isPrototypeOf(ttodo) // true
Todo.isPrototypeOf(ttodo) // true
