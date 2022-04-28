class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        const score = explorer.score;
        if(score % 3 === 0 && score % 5 === 0){
            explorer.trick = "FIZZBUZZ";
        } else if(score % 5 === 0){
            explorer.trick = "BUZZ";
        } else if(score % 3 === 0){
            explorer.trick = "FIZZ";
        } else {
            explorer.trick = explorer.score;
        }
    }
}
module.exports = FizzbuzzService;