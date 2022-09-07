import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { CreateStudentInput } from "./dto/input/create-student-input.dto";
import { Student } from "./models/student.model";
import { StudentService } from "./student.service";

@Resolver(() => Student)
export class StudentResolver{
    constructor(private readonly studentService: StudentService){}

    @Query(() => String )
    sayHello(): string {
        return "Hello world!";
    }

    @Mutation(() => Student)
    async createStudent(
        @Args('createStudentData') createStudentData: CreateStudentInput
    ){
        return this.studentService.createStudent(createStudentData)
    }
}