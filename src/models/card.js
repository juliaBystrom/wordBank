export default class Card {
    constructor(id, commentOnS, leftS, rightS, givenTag) {

        this.id = id;
        this.comment = commentOnS;
        this.tag = givenTag;
        this.leftSentence = leftS;
        this.rightSentence = rightS;
        this.showCard();
    }
  
    setComment() { }
  
    showCard() {
      this.show = true;
    }
  
    // If the card have a tag ( not null, "", false or undefined) this method will update the checked value depnding on the tag
    // If the card does not have an tag the checked value will be set to false
    filterOnTags(tags) {
      if (this.tag) {
        const tagInfo = tags.find((tagInfo) => {
          return tagInfo.tag === this.tag
  
        })
        this.checked = tagInfo.checked;
      } else {
        this.checked = false;
      }
    }
    
  
  }
  