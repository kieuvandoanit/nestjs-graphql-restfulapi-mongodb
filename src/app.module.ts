import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://doankv:doan1999@doankv.s9mmf.mongodb.net/baseDB?retryWrites=true&w=majority'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver
    }),
    StudentModule
  ]
})
export class AppModule {}
