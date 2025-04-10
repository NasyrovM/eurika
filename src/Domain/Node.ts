import { EcTuple } from "./EcTuple";

export class Node {
    constructor(
        public ecValues: EcTuple,
        public parent: Node | null = null
    ) { }
}
