const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jey',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Ann',
      room: 'Node Course'
    }]
  });

  it('should add new users', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Kevin',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '4';
    var user = users.removeUser(userId);
    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3);
  });

  it('should get a user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not get a user', () => {
    var userId = '4';
    var user = users.getUser(userId);
    expect(user).toBeUndefined();
  });

  it('should return name for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Ann']);
  });

  it('should return name for react course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jey']);
  });
})
