import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService] // сокращенная запись
  // providers: [ // полная запись
  //   { 
  //     provide: ProductsService,
  //     useClass: ProductsService
  //   }
  // ]
})
export class ProductsModule {}