import { Unit } from "./Unit";

export class AssignDomain extends Unit {}
export class AssignElement extends Unit {}

export class Assign extends Map<AssignDomain, AssignElement> { } 