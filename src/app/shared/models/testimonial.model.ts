import { FireCrudModelAbstract } from '../abstracts/fire-crud-model.abstract';

export class Testimonial implements FireCrudModelAbstract {
  constructor(
    public uid?: string,
    public description?: string,
  ) { }

  collection(): string {
    return 'testimonials';
  }

  static collection(): string {
    return this.collection();
  }
}
