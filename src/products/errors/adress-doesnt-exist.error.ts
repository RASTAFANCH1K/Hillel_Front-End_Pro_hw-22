export class AdressDoesntExist extends Error {
  constructor() {
    super('Following adress does not exist');
  }
}