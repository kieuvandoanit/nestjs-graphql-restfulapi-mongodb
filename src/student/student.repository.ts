import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/common/abstract.repository";
import { Student } from "./models/student.model";
import { StudentDocument } from "./models/student.schema";

@Injectable()
export class StudentRepository extends AbstractRepository<StudentDocument>{
    protected readonly logger = new Logger(StudentRepository.name);

    constructor(@InjectModel(Student.name) studentModel: Model<StudentDocument>){
        super(studentModel)
    }
}