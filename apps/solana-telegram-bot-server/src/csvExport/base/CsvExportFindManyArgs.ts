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
import { CsvExportWhereInput } from "./CsvExportWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CsvExportOrderByInput } from "./CsvExportOrderByInput";

@ArgsType()
class CsvExportFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CsvExportWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CsvExportWhereInput, { nullable: true })
  @Type(() => CsvExportWhereInput)
  where?: CsvExportWhereInput;

  @ApiProperty({
    required: false,
    type: [CsvExportOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CsvExportOrderByInput], { nullable: true })
  @Type(() => CsvExportOrderByInput)
  orderBy?: Array<CsvExportOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CsvExportFindManyArgs as CsvExportFindManyArgs };
