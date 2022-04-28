
describe("FizzbuzzService class test", () => {
    test("applyValidationInExplorer function apply a validation over 'score' property and add a new property 'trick' in function of 'score' value", () => {
        //arrange and act
        const explorers = Reader.readJsonFile('explorers.json')
        for(let i = 0; i < explorers.length; i++){
            FizzbuzzService.applyValidationInExplorer(explorers[i])
        }
        //assert
        for(let i = 0; i < explorers.length; i++){
            expect(explorers[i].hasOwnProperty('trick')).toBeTruthy();
        }
    });
})