import Reader from './lib/utils/Reader'

describe("Reader class test", () => {
    test("", () => {
        //arrange and act
        const explorers = Reader.readJsonFile('./../../explorers.json')
        //assert
        expect(explorers[1]).toEqual(
            expect.objectContainig({
                name: 'Woopa1'
            })
        )
    });
})