import { Unit } from "./Unit";

export class AssignDomain extends Unit {}
export class AssignElement extends Unit {}

export class FcAssign extends Map<AssignDomain, AssignElement> { } 