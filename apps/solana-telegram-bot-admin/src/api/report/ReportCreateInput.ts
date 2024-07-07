import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportCreateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
