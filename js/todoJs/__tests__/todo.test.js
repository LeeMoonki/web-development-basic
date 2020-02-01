const Todo = require('../todo');

describe('Todo', () => {
  test('인스턴스화', () => {
    const todo1 = new Todo('운동하기');

    expect((new Todo('운동하기')).title).toBe('운동하기');
    expect((new Todo()).title).toBe('');
  });
});
