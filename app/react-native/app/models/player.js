export default class Player {

  constructor(player) {
    if (player) {
      this.avatarUrl = player.avatarUrl;
      this.email = player.email;
      this.firstName = player.firstName
      this.lastName = player.lastName
    }
  }

  getPlayerImageUrl(player) {
    if (this.avatarUrl) {
      return this.avatarUrl;
    }
    return 'http://combonetwork.com/img/empty_profile.png';
  }
}
