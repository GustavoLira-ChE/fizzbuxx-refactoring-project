const ExplorerController = require('./../../lib/controllers/ExplorerController')
describe("ExplorerController class test", () => {
    test("1. getExplorersByMission function returns a list of explorer in function of the mission value passed", () => {
        //arrange and act
        const nodeExplorers = ExplorerController.getExplorersByMission('node');
        //asserts
        for(let i = 0; i < nodeExplorers.length; i++){
            expect(nodeExplorers[i].hasOwnProperty('name','mission')).toBeTruthy()
        }
    })
});