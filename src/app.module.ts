import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FightsModule } from './modules/fights/fights.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FightsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'click123',
      database: 'fights',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, //set this to false in production
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
