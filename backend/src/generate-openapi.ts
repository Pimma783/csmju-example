// สร้าง openapi.json จาก decorator ของ controller จริง — API-01 เทียบไฟล์นี้กับโค้ด
// ถ้าเพิ่ม endpoint แล้วไม่รันคำสั่งนี้ CI จะจับได้ว่า contract ไม่ sync
import 'reflect-metadata';
import { writeFileSync } from 'node:fs';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.setGlobalPrefix('v1');
  const config = new DocumentBuilder()
    .setTitle('csmju-example')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  writeFileSync('openapi.json', JSON.stringify(document, null, 2) + '\n');
  await app.close();
}

main();
