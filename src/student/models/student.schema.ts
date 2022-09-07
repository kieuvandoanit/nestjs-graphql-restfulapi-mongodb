import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/common/abstract.schema";

@Schema({versionKey: false})
export class StudentDocument extends AbstractDocument{
    @Prop()
    name: string;
}

export const StudentSchema = SchemaFactory.createForClass(StudentDocument);