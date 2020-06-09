// EXERCISE-1:
// 1) создать модуль product, и создать файл в котором создает const products = [{id:1, name:'product 1'}, {id: 2, name: 'Product 2' }, {id:3 , name: 'Product 3'} ]
// 2) создать сервис в этом модуле в котором будет 2 метода getProduct(id: number), getProducts() где первый возвращает юзера по айди используя const products, а второй все продукты
// 3) создать контроллер в этом модуле и заинжектить созданный сервис в контроллер(использовать короткую запись, но показать закоменченую длинную запись)
// 4) добавляем роуты /products - получение всех продуктов, /products/:id - получение одного
// SOLUTION:

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => console.log('Server is listening on port 3000'));
}
bootstrap();
