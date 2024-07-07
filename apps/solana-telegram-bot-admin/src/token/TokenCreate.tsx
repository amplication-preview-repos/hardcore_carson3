import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TradeOrderTitle } from "../tradeOrder/TradeOrderTitle";

export const TokenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="decimals" source="decimals" />
        <TextInput label="name" source="name" />
        <TextInput label="symbol" source="symbolField" />
        <ReferenceArrayInput
          source="tradeOrders"
          reference="TradeOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TradeOrderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
