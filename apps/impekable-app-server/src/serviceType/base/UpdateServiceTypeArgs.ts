/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceTypeWhereUniqueInput } from "./ServiceTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ServiceTypeUpdateInput } from "./ServiceTypeUpdateInput";

@ArgsType()
class UpdateServiceTypeArgs {
  @ApiProperty({
    required: true,
    type: () => ServiceTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServiceTypeWhereUniqueInput)
  @Field(() => ServiceTypeWhereUniqueInput, { nullable: false })
  where!: ServiceTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ServiceTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => ServiceTypeUpdateInput)
  @Field(() => ServiceTypeUpdateInput, { nullable: false })
  data!: ServiceTypeUpdateInput;
}

export { UpdateServiceTypeArgs as UpdateServiceTypeArgs };
