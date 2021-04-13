export default class Card {
    constructor(id, commentOnS, leftS, rightS, givenTag) {

        this.cardID = id;
        this.comment = commentOnS;
        this.tag = givenTag;
        this.leftSentence = leftS;
        this.rightSentence = rightS;
        this.show = true;
    }
  
    setComment() { }
  
    setShowTrue() {
      this.show = true;
    }
  
    // If the card have a tag ( not null, "", false or undefined) this method will update the show value depnding on the tag
    // If the card does not have an tag the show value will be set to false
    filterOnTags(tags) {
      if (this.tag) {
        const tagInfo = tags.find((tagInfo) => {
          return tagInfo.tag === this.tag
  
        })
        this.show = tagInfo.show;
      } else {
        this.show = false;
      }
    }
    
  
  }
  