/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CsvExport } from "./CsvExport";
import { CsvExportCountArgs } from "./CsvExportCountArgs";
import { CsvExportFindManyArgs } from "./CsvExportFindManyArgs";
import { CsvExportFindUniqueArgs } from "./CsvExportFindUniqueArgs";
import { CreateCsvExportArgs } from "./CreateCsvExportArgs";
import { UpdateCsvExportArgs } from "./UpdateCsvExportArgs";
import { DeleteCsvExportArgs } from "./DeleteCsvExportArgs";
import { User } from "../../user/base/User";
import { Wallet } from "../../wallet/base/Wallet";
import { CsvExportService } from "../csvExport.service";
@graphql.Resolver(() => CsvExport)
export class CsvExportResolverBase {
  constructor(protected readonly service: CsvExportService) {}

  async _csvExportsMeta(
    @graphql.Args() args: CsvExportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CsvExport])
  async csvExports(
    @graphql.Args() args: CsvExportFindManyArgs
  ): Promise<CsvExport[]> {
    return this.service.csvExports(args);
  }

  @graphql.Query(() => CsvExport, { nullable: true })
  async csvExport(
    @graphql.Args() args: CsvExportFindUniqueArgs
  ): Promise<CsvExport | null> {
    const result = await this.service.csvExport(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CsvExport)
  async createCsvExport(
    @graphql.Args() args: CreateCsvExportArgs
  ): Promise<CsvExport> {
    return await this.service.createCsvExport({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        wallet: args.data.wallet
          ? {
              connect: args.data.wallet,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CsvExport)
  async updateCsvExport(
    @graphql.Args() args: UpdateCsvExportArgs
  ): Promise<CsvExport | null> {
    try {
      return await this.service.updateCsvExport({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          wallet: args.data.wallet
            ? {
                connect: args.data.wallet,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CsvExport)
  async deleteCsvExport(
    @graphql.Args() args: DeleteCsvExportArgs
  ): Promise<CsvExport | null> {
    try {
      return await this.service.deleteCsvExport(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: CsvExport): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Wallet, {
    nullable: true,
    name: "wallet",
  })
  async getWallet(@graphql.Parent() parent: CsvExport): Promise<Wallet | null> {
    const result = await this.service.getWallet(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
