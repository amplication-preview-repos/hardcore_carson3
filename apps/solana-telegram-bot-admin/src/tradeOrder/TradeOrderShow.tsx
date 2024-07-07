import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TOKEN_TITLE_FIELD } from "../token/TokenTitle";
import { WALLET_TITLE_FIELD } from "../wallet/WalletTitle";

export const TradeOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="jitoFee" source="jitoFee" />
        <TextField label="price" source="price" />
        <TextField label="priorityFee" source="priorityFee" />
        <TextField label="slippage" source="slippage" />
        <TextField label="status" source="status" />
        <ReferenceField label="Token" source="token.id" reference="Token">
          <TextField source={TOKEN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Wallet" source="wallet.id" reference="Wallet">
          <TextField source={WALLET_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
