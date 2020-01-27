import { Clan } from '../db/models'
import ModifyAnswer from '../utils/modifyAnswer';
import ManipulateData from '../utils/manipulateData';

const answer = new ModifyAnswer();
const manipulate = new ManipulateData();

module.exports = {
  create(req, res) {
    return Clan
      .findAll({
        where: {
          clan: req.body.clan
        }
      })
      .then((clan) => {
        if(clan.length > 0) {
          return res.status(404).send({
            message: 'Clan already exists',
          });
        }
        return Clan
          .create({
            clan: req.body.clan,
          })
          .then((clan) => {
            const response = answer.modifyClan(clan)
            res.status(201).send(response)
          })
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));

  },
  list(req, res) {
    return Clan
      .findAll()
      .then((clans) => {
        const response = answer.modifyListOfClans(clans)
        res.status(200).send(response)
      })
      .catch((error) => res.status(400).send(error));
  },
  listMembers(req, res) {
    console.log("jesyeśmy w list members")
    console.log(req.params.clan)

    return Clan
      .findOne({
        where: {
          clan: req.params.clan
        }
      })
      .then((clan) => {
        console.log(clan)
        const response = answer.modifyClan(clan)
        res.status(200).send(response)
      })
      .catch((error) => res.status(400).send(error));
  },
   createMember(req, res) {
    console.log("jesteśmy w createMembers")
    console.log(req.params.clan)
    console.log(req.body.name)
    return Clan
    .findOne({
      where: {
        clan: req.params.clan
        }
      })
      .then((clan) => {
        if (!clan) {
          return res.status(404).send({
            message: 'Clan Not Found',
          });
        }
        const newMember = manipulate.insertName(clan, req)
        if(!newMember) {
          return res.status(404).send({
            message: 'That member already exists',
          });
        }
        return newMember
          .update({
            members: newMember.members
          })
          .then(() => {
            const data = answer.modifyClan(newMember)
            res.status(200).send(data)
          })
          .catch((error) => res.status(400).send(error))

      })

      .catch((error) => res.status(400).send(error));
  },
  destroyClan(req, res) {
    return Clan
      .findOne({
        where: {
          clan: req.params.name,
        },
      })
      .then(clan => {
        if (!clan) {
          return res.status(404).send({
            message: 'Clan Not Found',
          });
        }

        return clan
          .destroy()
          // alternatively you can send statut 204 with no-content
          .then(() => res.status(200).send({message: "Clan destroyed"}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroyMember(req, res) {
    return Clan
      .findOne({
        where: {
          clan: req.params.clan,
        },
      })
      .then(clan => {
        if (!clan) {
          return res.status(404).send({
            message: 'Clan Not Found',
          });
        }

        const response = manipulate.deleteMemeber(clan, req)
        if(!response) {
          return res.status(404).send({
            message: 'Member Not Found',
          });
        }
        return response
          .update({
            members: response.members
          })
          // alternatively you can send statut 204 with no-content
          .then((response) => res.status(200).send({message: "Member destroyed"}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
