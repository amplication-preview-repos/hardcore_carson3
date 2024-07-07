/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ReportService } from "../report.service";
import { ReportCreateInput } from "./ReportCreateInput";
import { Report } from "./Report";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportWhereUniqueInput } from "./ReportWhereUniqueInput";
import { ReportUpdateInput } from "./ReportUpdateInput";

export class ReportControllerBase {
  constructor(protected readonly service: ReportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Report })
  async createReport(@common.Body() data: ReportCreateInput): Promise<Report> {
    return await this.service.createReport({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Report] })
  @ApiNestedQuery(ReportFindManyArgs)
  async reports(@common.Req() request: Request): Promise<Report[]> {
    const args = plainToClass(ReportFindManyArgs, request.query);
    return this.service.reports({
      ...args,
      select: {
        createdAt: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async report(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    const result = await this.service.report({
      where: params,
      select: {
        createdAt: true,
        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReport(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() data: ReportUpdateInput
  ): Promise<Report | null> {
    try {
      return await this.service.updateReport({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          endDate: true,
          id: true,
          startDate: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReport(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport({
        where: params,
        select: {
          createdAt: true,
          endDate: true,
          id: true,
          startDate: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
