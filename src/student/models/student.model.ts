import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "src/common/abstract.model";

@ObjectType()
export class Student extends AbstractModel{
    @Field()
    readonly name: string;
}