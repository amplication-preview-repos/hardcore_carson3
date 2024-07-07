import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TradeOrderList } from "./tradeOrder/TradeOrderList";
import { TradeOrderCreate } from "./tradeOrder/TradeOrderCreate";
import { TradeOrderEdit } from "./tradeOrder/TradeOrderEdit";
import { TradeOrderShow } from "./tradeOrder/TradeOrderShow";
import { WalletList } from "./wallet/WalletList";
import { WalletCreate } from "./wallet/WalletCreate";
import { WalletEdit } from "./wallet/WalletEdit";
import { WalletShow } from "./wallet/WalletShow";
import { TokenList } from "./token/TokenList";
import { TokenCreate } from "./token/TokenCreate";
import { TokenEdit } from "./token/TokenEdit";
import { TokenShow } from "./token/TokenShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { CsvExportList } from "./csvExport/CsvExportList";
import { CsvExportCreate } from "./csvExport/CsvExportCreate";
import { CsvExportEdit } from "./csvExport/CsvExportEdit";
import { CsvExportShow } from "./csvExport/CsvExportShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TradeSettingsList } from "./tradeSettings/TradeSettingsList";
import { TradeSettingsCreate } from "./tradeSettings/TradeSettingsCreate";
import { TradeSettingsEdit } from "./tradeSettings/TradeSettingsEdit";
import { TradeSettingsShow } from "./tradeSettings/TradeSettingsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SolanaTelegramBot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TradeOrder"
          list={TradeOrderList}
          edit={TradeOrderEdit}
          create={TradeOrderCreate}
          show={TradeOrderShow}
        />
        <Resource
          name="Wallet"
          list={WalletList}
          edit={WalletEdit}
          create={WalletCreate}
          show={WalletShow}
        />
        <Resource
          name="Token"
          list={TokenList}
          edit={TokenEdit}
          create={TokenCreate}
          show={TokenShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="CsvExport"
          list={CsvExportList}
          edit={CsvExportEdit}
          create={CsvExportCreate}
          show={CsvExportShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="TradeSettings"
          list={TradeSettingsList}
          edit={TradeSettingsEdit}
          create={TradeSettingsCreate}
          show={TradeSettingsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
