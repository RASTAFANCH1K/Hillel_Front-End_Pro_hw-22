import { Controller, Get, Param, Inject } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProducts } from './interfaces/products.interfaces';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {} // короткая запись
  // constructor(@Inject('ProductsService') private readonly productsService: ProductsService) {} // полная запись
   
  @Get(':id') // http://localhost:3000/products/1
  public getProduct(@Param('id') productId: string): IProducts {
    return this.productsService.getProduct(+productId);
  }

  @Get('') // http://localhost:3000/products
  public getProducts(): IProducts[] {
    return this.productsService.getProducts();
  }
}
