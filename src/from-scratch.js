const coolGreeting = (person) => {
  if (person.isCool) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${[person.name]}, how have you been lately?`
  }
};
const haveBirthday = (person) => {
  person.age += 1
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle
};

const carMaker = (name, maker, year) => {
  const vehicle = {
    'name': name,
    'maker': maker,
    'year': year,
    needsOilChange: false
  }
  return vehicle
};

const weAreNotFriends = (person) => {
  return person.friends.pop()
};

const listHobbies = (person) => {
  person.hobbies.forEach(element => console.log(`${person.name} likes ${element}.`));
};

const getNextOpponent = (team) => {
  if (team.matches.length <= 0) {
    return null;
  };
  return team.matches[0].teamName;
}
const listAllKeys = (obj) => {
  return Object.keys(obj);
};

const listAllValues = (obj) => {
  return Object.values(obj)
};

const convertToMatrix = (users) => {
  if (users.length === 0) {
    return [];
  }
  const matrix = [];
  const keys = Object.keys(users[0]);
  matrix.push(keys);
  for (const obj of users) {
    const values = keys.map(key => obj[key]);
    matrix.push(values);
  }
  return matrix;
};
module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
