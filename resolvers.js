let users = {
    1: {
      id: '1',
      username: 'Olivia Graham',
    },
    2: {
      id: '2',
      username: 'Jack Swisher',
    },
  };
  
  const me = users[1];
  
  const resolvers = {
    Query: {
      users: () => {
        return Object.values(users);
      },
      user: (parent, { id }) => {
        return users[id];
      },
      me: (parent, args, { me }) => {
        return me;
      },
    },
  };
  
  exports.resolvers = resolvers;
  exports.me = me;
