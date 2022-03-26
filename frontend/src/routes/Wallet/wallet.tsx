import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  RefreshControl,
  View,
} from "react-native";
import { PageProps } from "../../../types";
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import appValues from "../../constants/appValues";
import Colors from "../../constants/Colors";
import globalStyles from "../../constants/global.styles";
import Transactions from "./components/transaction";
//"#AAAADD", "#6D6DC5", "#AAAADD"
//"#FDE24B", "#DEBD02", "#FDE24B"
const Wallet: React.FC<PageProps> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <ContainerScrollView
      refreshControl={
        <RefreshControl
          progressBackgroundColor="red"
          refreshing={refreshing}
          colors={["red", "blue"]}
          onRefresh={() => {
            setTimeout(() => {
              setRefreshing(false);
            }, 2000);
          }}
        />
      }
    >
      <PaddedView>
        <View>
          <LinearGradient
            colors={["#AAAADD", "#6D6DC5", "#AAAADD"]}
            style={styles.wallet}
            locations={[0.2, 0.9, 0.9]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.7, y: 0.6 }}
          >
            <Text
              style={[
                globalStyles.semiBoldText,
                { color: Colors.black, fontSize: appValues.font.h3 },
              ]}
            >
              Total Balance
            </Text>
            <Text
              style={[
                globalStyles.boldText,
                globalStyles.marginTopSm,
                {
                  color: Colors.black,
                  fontSize: appValues.font.h1 + 5,
                  lineHeight: appValues.font.h1 + 7,
                },
              ]}
            >
              $290,098
            </Text>
          </LinearGradient>
        </View>
        <View style={[globalStyles.marginTop, { flexDirection: "row" }]}>
          <View style={{ flex: 1 }}>
            <BlockButton>Deposit</BlockButton>
          </View>
          <View style={[globalStyles.marginLeftSm, { flex: 1 }]}>
            <BlockButton outline>Withdraw</BlockButton>
          </View>
        </View>
        <View style={[globalStyles.marginTopLg]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text
              style={[
                globalStyles.semiBoldText,
                { fontSize: appValues.font.h3 },
              ]}
            >
              Recent Transactions
            </Text>
            <Pressable
              onPress={() => {
                navigation?.navigate("AllTransactionScreen");
              }}
            >
              <Text
                style={[
                  globalStyles.text,
                  { color: Colors.primary, marginLeft: 10 },
                ]}
              >
                See all
              </Text>
            </Pressable>
          </View>
          <Transactions transactions={[1, 2, 3, 4, 5, 6, 7, 8]} />
        </View>
      </PaddedView>
    </ContainerScrollView>
  );
};
export default Wallet;

const styles = StyleSheet.create({
  wallet: { height: 155, padding: 20, borderRadius: 10, paddingVertical: 25 },
});
