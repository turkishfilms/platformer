class ScoreHandler {
    constructor({ score = 0 } = {}) {
    this.score = score;
  }

  increaseScore = (numberOfPoints) => {
    this.score += numberOfPoints;
  };

  decreaseScore = (numberOfPoints) => {
    this.score -= numberOfPoints;
  };
}
