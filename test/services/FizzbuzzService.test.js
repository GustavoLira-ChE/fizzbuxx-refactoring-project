import Reader from './../../lib/utils/Reader'
import FizzbuzzService from '../../lib/services/FizzbuzzService';

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
        for(let i = 0; i < explorers.length; i++){
            if(explorers[i].score % 3 === 0 && explorers[i].score % 5 === 0){
                expect(explorers[i].trick).toBe('FIZZBUZZ')
            } else if(explorers[i].score % 3 === 0){
                expect(explorers[i].trick).toBe('FIZZ')
            }
            else if(explorers[i].score % 5 === 0){
                expect(explorers[i].trick).toBe('BUZZ')
            } else{
                expect(typeof explorers[i].trick).toBe('number')
            }
        }
        
    });
})