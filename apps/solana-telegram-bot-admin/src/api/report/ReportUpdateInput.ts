import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
