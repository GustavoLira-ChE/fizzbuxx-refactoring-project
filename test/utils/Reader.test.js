import Reader from './../../lib/utils/Reader'

describe("Reader class test", () => {
    test("The class function return a list of objects", () => {
        //arrange and act
        const explorers = Reader.readJsonFile('explorers.json')
        //assert
        for(let i = 0; i < explorers.length; i++){
            expect(typeof explorers[1]).toEqual('object')
        }
    });
})