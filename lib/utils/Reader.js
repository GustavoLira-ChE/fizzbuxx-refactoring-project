import { readFileSync } from 'fs';

export default class Reader{
    static readJsonFile(path){
        const rawdata = readFileSync(path);
        const explorers = JSON.parse(rawdata);
        return explorers
    }
}