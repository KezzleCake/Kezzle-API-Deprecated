import { Module } from '@nestjs/common';
import { CakeModule } from './cake/cake.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';
import { UploadModule } from './upload/upload.module';
import { APP_FILTER } from '@nestjs/core';
import { CustomExceptionFilter } from './config/custom-exception.filter';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    CakeModule,
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      user: process.env.MONGODB_USERNAME,
      pass: process.env.MONGODB_PASSWORD,
      dbName: process.env.MONGODB_DBNAME,
    }),
    OrderModule,
    UserModule,
    StoreModule,
    UploadModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
  ],
})
export class AppModule {}
