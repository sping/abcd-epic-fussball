const AuthenticationHelper = require('helpers/AuthenticationHelper');
const MatchHelper = require('helpers/MatchHelper');
const MatchController = require('controllers/MatchController');
const Router = require('koa-router');
var MatchRouter = new Router(
  {
    prefix: '/api/v1/matches'
  }
);

MatchRouter.use('/', AuthenticationHelper.authenticate)
MatchRouter.get('/', MatchController.getMatches)
MatchRouter.post('/', MatchController.createMatch)

MatchRouter.use('/:id', MatchHelper.loadMatch)
MatchRouter.get('/:id', MatchController.getMatch)
MatchRouter.put('/:id', MatchController.updateMatch)
MatchRouter.delete('/:id', MatchController.destroyMatch)
MatchRouter.put('/:id/setMatchPlayers', MatchController.setMatchPlayers)

module.exports = MatchRouter
