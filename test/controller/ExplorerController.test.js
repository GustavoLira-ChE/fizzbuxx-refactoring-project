const ExplorerController = require("./../../lib/controllers/ExplorerController");
describe("ExplorerController class test", () => {
    test("1. getExplorersByMission function returns a list of explorer in function of the mission value passed", () => {
        //arrange and act
        const nodeExplorers = ExplorerController.getExplorersByMission("node");
        //asserts
        for(let i = 0; i < nodeExplorers.length; i++){
            expect(nodeExplorers[i].hasOwnProperty("name","mission")).toBeTruthy();
        }
    });
    test("2. getExplorersUsernamesByMission function returns a list of explorers name in function of the mission value passed", () => {
        //arrange and act
        const nodeExplorersUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        //asserts
        for(let i = 0; i < nodeExplorersUsernames.length; i++){
            expect(typeof nodeExplorersUsernames[i]).toBe("string");
        }
    });
    test("3. getExplorersAmountByMission function returns the number of explorer with the property mission value equals to the mission parameter passed", () => {
        const amountOfNodeExplorers = ExplorerController.getExplorersAmountByMission("node");
        //asserts
        expect(typeof amountOfNodeExplorers).toBe("number");
    });
});