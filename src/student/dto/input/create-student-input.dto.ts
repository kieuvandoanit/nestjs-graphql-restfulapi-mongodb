import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class CreateStudentInput {
    @Field()
    @IsString()
    readonly name: string;
}