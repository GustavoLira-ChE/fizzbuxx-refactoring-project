
describe("FizzbuzzService class test", () => {
    test("applyValidationInExplorer function apply a validation over 'score' property and add a new property 'trick' in function of 'score' value", () => {
        //arrange and act
        explorers = Reader.readJsonFile('./../../explorers.json')
        FizzbuzzService.applyValidationInExplorer(explorers[1])
        //assert
        expect(explorers[1].hasOwnProperty('trick')).toBeTruthy();
    });
})