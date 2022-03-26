
import React from "react";
import { PageProps } from "../../../types";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import Transactions from "./components/transaction";
//"#AAAADD", "#6D6DC5", "#AAAADD"
//"#FDE24B", "#DEBD02", "#FDE24B"
const AllTransactions: React.FC<PageProps> = () => {
  return (
    <ContainerScrollView>
      <PaddedView>
        <Transactions transactions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      </PaddedView>
    </ContainerScrollView>
  );
};
export default AllTransactions;
