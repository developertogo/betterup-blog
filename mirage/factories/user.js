import { Factory, faker } from 'ember-cli-mirage';

const { internet: { userName }, image: { avatar } } = faker;

export default Factory.extend({
  username() {
    return userName();
  },

  avatarUrl() {
    return avatar();
  },

  afterCreate(user, server) {
    server.createList('post', 5, { user });
  }
});
