export class ProductIdDoesntExist extends Error {
  constructor(id: number) {
    super(`Product with following id (${id}) does not exist`);
  }
}