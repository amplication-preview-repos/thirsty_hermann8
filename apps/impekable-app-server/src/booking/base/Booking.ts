/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsEnum,
  IsDate,
  IsInt,
  ValidateNested,
  IsBoolean,
} from "class-validator";

import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { EnumBookingBookingSource } from "./EnumBookingBookingSource";
import { EnumBookingBookingStatus } from "./EnumBookingBookingStatus";
import { Type } from "class-transformer";
import { Office } from "../../office/base/Office";
import { Property } from "../../property/base/Property";
import { Report } from "../../report/base/Report";
import { Request } from "../../request/base/Request";
import { Service } from "../../service/base/Service";
import { EnumBookingSynchronizationStatus } from "./EnumBookingSynchronizationStatus";
import { Transaction } from "../../transaction/base/Transaction";

@ObjectType()
class Booking {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  additionalInformation!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  additionalServices!: JsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bookingNotes!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  bookingPrice!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumBookingBookingSource,
  })
  @IsEnum(EnumBookingBookingSource)
  @IsOptional()
  @Field(() => EnumBookingBookingSource, {
    nullable: true,
  })
  bookingSource?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumBookingBookingStatus,
  })
  @IsEnum(EnumBookingBookingStatus)
  @IsOptional()
  @Field(() => EnumBookingBookingStatus, {
    nullable: true,
  })
  bookingStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  checkInDatetime!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  checkOutDatetime!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  client!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberOfGuests!: number | null;

  @ApiProperty({
    required: false,
    type: () => Office,
  })
  @ValidateNested()
  @Type(() => Office)
  @IsOptional()
  office?: Office | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  platformBookingId!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  platformCommissions!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  platformSource!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  principalService!: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  productsReposition!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => Property,
  })
  @ValidateNested()
  @Type(() => Property)
  @IsOptional()
  property?: Property | null;

  @ApiProperty({
    required: false,
    type: () => [Report],
  })
  @ValidateNested()
  @Type(() => Report)
  @IsOptional()
  reports?: Array<Report>;

  @ApiProperty({
    required: false,
    type: () => [Request],
  })
  @ValidateNested()
  @Type(() => Request)
  @IsOptional()
  requests?: Array<Request>;

  @ApiProperty({
    required: false,
    type: () => [Service],
  })
  @ValidateNested()
  @Type(() => Service)
  @IsOptional()
  services?: Array<Service>;

  @ApiProperty({
    required: false,
    enum: EnumBookingSynchronizationStatus,
  })
  @IsEnum(EnumBookingSynchronizationStatus)
  @IsOptional()
  @Field(() => EnumBookingSynchronizationStatus, {
    nullable: true,
  })
  synchronizationStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => [Transaction],
  })
  @ValidateNested()
  @Type(() => Transaction)
  @IsOptional()
  transactions?: Array<Transaction>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Booking as Booking };
