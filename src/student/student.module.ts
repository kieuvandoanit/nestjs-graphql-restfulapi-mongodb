import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student } from './models/student.model';
import { StudentSchema } from './models/student.schema';
import { StudentRepository } from './student.repository';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Student.name, schema: StudentSchema}])
    ],
    providers: [StudentResolver, StudentService, StudentRepository]
})
export class StudentModule {}
