import { Factory, faker } from 'ember-cli-mirage';

const { lorem: { sentence, paragraphs }, date: { past } } = faker;

export default Factory.extend({
  title() {
    return sentence();
  },

  content() {
    return paragraphs();
  },

  createdAt() {
    return past();
  }
});
