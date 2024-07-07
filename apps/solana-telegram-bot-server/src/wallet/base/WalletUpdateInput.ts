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
import { CsvExportUpdateManyWithoutWalletsInput } from "./CsvExportUpdateManyWithoutWalletsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { TradeOrderUpdateManyWithoutWalletsInput } from "./TradeOrderUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WalletUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CsvExportUpdateManyWithoutWalletsInput,
  })
  @ValidateNested()
  @Type(() => CsvExportUpdateManyWithoutWalletsInput)
  @IsOptional()
  @Field(() => CsvExportUpdateManyWithoutWalletsInput, {
    nullable: true,
  })
  csvExports?: CsvExportUpdateManyWithoutWalletsInput;

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
  privateKey?: string | null;

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
  publicKey?: string | null;

  @ApiProperty({
    required: false,
    type: () => TradeOrderUpdateManyWithoutWalletsInput,
  })
  @ValidateNested()
  @Type(() => TradeOrderUpdateManyWithoutWalletsInput)
  @IsOptional()
  @Field(() => TradeOrderUpdateManyWithoutWalletsInput, {
    nullable: true,
  })
  tradeOrders?: TradeOrderUpdateManyWithoutWalletsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { WalletUpdateInput as WalletUpdateInput };
