
describe("ExplorerService class test", () => {
    test("filterByMission function return a list of object that contain a specified property value", () => {
        //arrange and act
        const explorers = Reader.readJsonFile('./../../explorers.json')
        const nodeExplorers = ExplorerService.filterByMission(explorers,'node')
        //assert
        expect(nodeExplorers[1]).toEqual(
            expect.objectContainig({
                mission: 'node'
            })
        )
    });
    test("getAmountOfExplorersByMission function return the number of objects inside an list that contain a specified property value", () => {
        //arrange and act
        const explorers = Reader.readJsonFile('./../../explorers.json')
        const nodeExplorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers,'node')
        //assert
        expect(typeof nodeExplorersAmount).toBe('number')
    });
    test("getExplorersUsernamesByMission function return a list of username property value from a list of objects that contain a especified property value", () => {
        const explorers = Reader.readJsonFile('./../../explorers.json')
        const nodeExplorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, 'node')
        //assert
        const expected = /Woopa/
        expect(nodeExplorersUsernames[1]).stringContaining(expected)
    })
})