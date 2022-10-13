import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from '@modules/user.module';
import { UserEntity } from '@entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:
        process.env.NODE_ENV === 'dev'
          ? process.env.DEV_MYSQL_HOST
          : process.env.PROD_MYSQL_HOST,
      port: 3306,
      username:
        process.env.NODE_ENV === 'dev'
          ? process.env.DEV_MYSQL_USERNAME
          : process.env.PROD_MYSQL_USERNAME,
      password:
        process.env.NODE_ENV === 'dev'
          ? process.env.DEV_MYSQL_PASSWORD
          : process.env.PROD_MYSQL_PASSWORD,
      database:
        process.env.NODE_ENV === 'dev'
          ? process.env.DEV_MYSQL_DB
          : process.env.PROD_MYSQL_DB,
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
