import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TokenTitle } from "../token/TokenTitle";
import { WalletTitle } from "../wallet/WalletTitle";

export const TradeOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="jitoFee" source="jitoFee" />
        <NumberInput label="price" source="price" />
        <NumberInput label="priorityFee" source="priorityFee" />
        <NumberInput label="slippage" source="slippage" />
        <TextInput label="status" source="status" />
        <ReferenceInput source="token.id" reference="Token" label="Token">
          <SelectInput optionText={TokenTitle} />
        </ReferenceInput>
        <TextInput label="type" source="typeField" />
        <ReferenceInput source="wallet.id" reference="Wallet" label="Wallet">
          <SelectInput optionText={WalletTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
