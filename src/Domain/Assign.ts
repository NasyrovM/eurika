import { Unit } from "./Unit";

export class AssignmentDomain extends Unit {}
export class AssignmentElement extends Unit {}

export class Assignment extends Map<AssignmentDomain, AssignmentElement> { } 