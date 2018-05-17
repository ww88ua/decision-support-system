export class Criteria {
  constructor(
    public name: string,
    public subCriteria?: Array<Criteria>
  ) {}
}
