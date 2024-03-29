import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pauloricks:crudpaulo1234@crudnest.p3fnhjh.mongodb.net/test',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
