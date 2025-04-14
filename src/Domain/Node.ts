import { FcAssign } from "./FcAssign";

export class Node {
    constructor(
        public ecTuple: FcAssign,
        public parent: Node | null = null
    ) { }
}
