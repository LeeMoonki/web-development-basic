const {TodoTeam} = require('../todo');

describe('TodoTeam', () => {
  test('instanceiation', () => {
    let title = '업무보고 잘하기';
    let team = '프론트엔드 팀';
    let description = '업무보고는 매주 월요일에';
    let teamMembers = ['Tom'];

    expect(new TodoTeam(title, team, teamMembers).team).toBe(team);
    expect(new TodoTeam(title, team, teamMembers).members).toBe(teamMembers);
    expect(new TodoTeam(title, team, teamMembers, {description}).description).toBe(description);

    expect(() => new TodoTeam(title, team, 'foo')).toThrow();
  });

  test('appendMember', () => {
    let title = '업무보고 잘하기';
    let team = '프론트엔드 팀';
    let description = '업무보고는 매주 월요일에';
    let teamMembers = ['Tom'];
    let newMember = 'Jessy';
    let newMembers = ['Tom', 'Jessy'];

    const todoTeam = new TodoTeam(title, team, teamMembers, {description});

    todoTeam.appendMember(newMember);

    expect(todoTeam.members).toEqual(newMembers);
  });

  test('removeMember', () => {
    let title = '업무보고 잘하기';
    let team = '프론트엔드 팀';
    let description = '업무보고는 매주 월요일에';
    let newMembers = ['Tom'];
    let teamMembers = ['Tom', 'Jessy'];
    let targetMember = 'Jessy';

    const todoTeam = new TodoTeam(title, team, teamMembers, {description});

    todoTeam.removeMember(targetMember);

    expect(todoTeam.members).toEqual(newMembers);
  });
});