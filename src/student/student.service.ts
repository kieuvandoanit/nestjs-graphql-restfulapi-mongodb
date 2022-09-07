import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/input/create-student-input.dto';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
    constructor(private readonly studentRepository: StudentRepository){}

    async createStudent(createStudentData: CreateStudentInput){
        const studentDocument = await this.studentRepository.create(createStudentData);
        return studentDocument;
    }
}
