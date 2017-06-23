export class Case {
    constructor(
        readonly caseId: number,
        readonly site: string,
        readonly description: string,
        readonly creationDate: string,
    ) { }
}