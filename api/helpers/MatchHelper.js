const Match = require('models').Match;
const Player = require('models').Player;
const MatchPlayer = require('models').MatchPlayer;
const User = require('models').User;
var MatchHelper = function () {};

MatchHelper.prototype.loadMatch = async (ctx, next) => {
  match = await Match.findOne({
    where: {
      id: ctx.params.id
    },
    include: [{
      model: MatchPlayer,
      include: [{
        model: Player,
        include: [User]
      }]
    }]
  })
  
  if (!match) ctx.throw(404)
  ctx.state.currentMatch = match
  await next()
}

module.exports = new MatchHelper();
