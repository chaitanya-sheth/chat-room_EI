class ChatRoom {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    removeUser(user) {
      const index = this.users.indexOf(user);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    }
  
    broadcast(message, sender) {
      for (const user of this.users) {
        if (user !== sender) {
          user.receiveMessage(message);
        }
      }
    }
  }
  
  module.exports = ChatRoom;