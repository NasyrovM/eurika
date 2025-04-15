import { v4 as uuidv4 } from 'uuid';

export class IdService
{
    public static getUid() : string {
        return uuidv4();
    }
}