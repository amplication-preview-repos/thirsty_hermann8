/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RatingWhereInput } from "./RatingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RatingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RatingWhereInput,
  })
  @ValidateNested()
  @Type(() => RatingWhereInput)
  @IsOptional()
  @Field(() => RatingWhereInput, {
    nullable: true,
  })
  every?: RatingWhereInput;

  @ApiProperty({
    required: false,
    type: () => RatingWhereInput,
  })
  @ValidateNested()
  @Type(() => RatingWhereInput)
  @IsOptional()
  @Field(() => RatingWhereInput, {
    nullable: true,
  })
  some?: RatingWhereInput;

  @ApiProperty({
    required: false,
    type: () => RatingWhereInput,
  })
  @ValidateNested()
  @Type(() => RatingWhereInput)
  @IsOptional()
  @Field(() => RatingWhereInput, {
    nullable: true,
  })
  none?: RatingWhereInput;
}
export { RatingListRelationFilter as RatingListRelationFilter };
