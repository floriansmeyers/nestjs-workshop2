import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  /*const app = await NestFactory.create(AppModule);*/
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({  // wrong!  in my case, anyway
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  const config = new DocumentBuilder()
  .setTitle('Todo App')
  .setDescription('API Description')
  .setVersion('1.0')
  .addTag('todos')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
