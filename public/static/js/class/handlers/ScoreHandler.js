/* export default */ class ScoreHandler {
  constructor({ score = 0 } = {}) {
    this.score = score;
  }
  update(numberOfPoints) {
    if (numberOfPoints >= 0) this.increaseScore(numberOfPoints);
    else this.decreaseScore(numberOfPoints);
  }

  increaseScore = (numberOfPoints) => {
    this.score += numberOfPoints;
  };

  decreaseScore = (numberOfPoints) => {
    this.score -= numberOfPoints;
  };
}
