import { TreeNode } from "./TreeNode";

export interface ITree {
    uuid: string;
    get node(): TreeNode;
}
