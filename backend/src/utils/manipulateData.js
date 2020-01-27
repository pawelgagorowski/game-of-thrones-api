
export default class ManipulateData {

  constructor () {}

    insertName (clan, req) {
      let name;
      if(req.body.name && req.body.surname) {
        name = `${req.body.name} ${req.body.surname}`;
      } else if (req.body.name) {
        name = `${req.body.name}`;
      } else {
        name = `${req.body.surname}`;
      }

      if(clan.members.indexOf(name) == -1) {
        console.log(clan.members.indexOf(name))
        clan.members.push(name)
      } else {
        return false
      }
       return clan
    }

    deleteMemeber (clan, req) {
      console.log("jesteśmy w deleteMemeber")
      console.log(req.params)
      const member = req.params.name;
      console.log(clan.members.indexOf(member))
      if(clan.members.indexOf(member) !== -1) {
        const index = clan.members.indexOf(member);
        console.log("sprawdzamy index")
        console.log(index)
        clan.members.splice(index, 1);
        console.log("sprawdzamy clan po modyfikacji")
        console.log(clan)
        return clan;
      } else {
        return false;
      }
  }
}
