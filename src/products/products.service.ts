import { Injectable, BadRequestException } from '@nestjs/common';
import { products } from './consts';
import { IProducts } from './interfaces/products.interfaces';
import { AdressDoesntExist } from './errors/adress-doesnt-exist.error';
import { ProductIdDoesntExist } from './errors/product-id-doesnt-exist.error';

export const errors = [ AdressDoesntExist, ProductIdDoesntExist ];

@Injectable()
export class ProductsService {
  public getProduct(id: number): IProducts {
    try {
      const productId = products.find(product => product.id === id);
      if (!productId) throw new ProductIdDoesntExist(id);
      return productId;
    } catch (err) {
      const foundError = errors.some(error => err instanceof error);
      if (foundError) throw new BadRequestException(err.message);
      throw new BadRequestException('Uknown error');
    }
  }

  public getProducts(): IProducts[] {
    return products;
  }
}
