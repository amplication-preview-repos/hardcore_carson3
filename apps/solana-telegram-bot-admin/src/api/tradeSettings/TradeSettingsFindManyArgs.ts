import { TradeSettingsWhereInput } from "./TradeSettingsWhereInput";
import { TradeSettingsOrderByInput } from "./TradeSettingsOrderByInput";

export type TradeSettingsFindManyArgs = {
  where?: TradeSettingsWhereInput;
  orderBy?: Array<TradeSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
