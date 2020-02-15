const {Todo} = require('../todo');

describe('Todo', () => {
  test('인스턴스화', () => {
    const title = '운동하기';
    const description = '매일 헬스장 가기';
    const due = new Date();

    expect((new Todo(title)).title).toBe(title);
    expect((new Todo()).title).toBe('');

    expect(
      new Todo(title, {description: description}).description
    ).toBe(description);
    expect(
      new Todo(title, {dueDate: due}).dueDate
    ).toBe(due);
    expect(
      new Todo(title).description
    ).toBeUndefined();
    expect(
      new Todo(title).dueDate
    ).toBeInstanceOf(Date);

    expect(
      new Todo(title, {do: true}).do
    ).toBe(true);
    expect(
      new Todo(title).do
    ).toBe(false);
  });

  test('toggleTodo', () => {
    let DO = false;
    const todo = new Todo('운동하기', {do: DO});

    expect(todo.do).toBe(DO);

    todo.toggleTodo();

    expect(todo.do).toBe(!DO);
  });

  test('setTitle', () => {
    let newTitle = '드라마 보기';
    let oldTitle = '운동하기';
    const todo = new Todo(oldTitle);

    todo.setTitle(newTitle);

    expect(todo.title).toBe(newTitle);
  });
});
