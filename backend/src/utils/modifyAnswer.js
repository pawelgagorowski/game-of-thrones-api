
export default class ModifyAnswer {

  constructor () {}

    modifyListOfClans (ob) {
    const myData = ob.map(function(el) {
      return {
        clan: el.clan,
        members: el.members
        }
      })
      const data = {};
      data.clans = myData;
      return data
    }

   modifyClan (data) {
    const myData = {}
    myData.clan = data.clan;
    myData.members = data.members;
    return myData;
  }
}
