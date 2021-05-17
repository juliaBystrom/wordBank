
/*
 Card Class keep state information about a card
 A Card contains information about a translation
 
*/

export default class Card {
  constructor(id, commentOnS, leftS, rightS, tag) {
    this.id = id;
    this.comment = commentOnS;
    this.tag = tag;
    this.leftSentence = leftS;
    this.rightSentence = rightS;
    this.show = true;
  }

  setComment(newComment) {
    this.comment = newComment;
  }

  setLeftSentence(newSentence) {
    this.leftSentence = newSentence;
  }

  setRightSentence(newSentence) {
    this.rightSentence = newSentence;
  }

  setNewTag(newTag) {
    this.tag = newTag;
  }

  showCard() {
    this.show = true;
  }

  // If the card have a tag ( not null, "", false or undefined) this method will update the show value depnding on the tag
  // If the card does not have an tag the show value will be set to false
  filterOnTags(tags) {
    if (this.tag) {
      const tag = tags.find((tag) => {
        return tag.name === this.tag;
      });
      this.show = tag.checked;
    } else {
      this.show = false;
    }
  }
}
