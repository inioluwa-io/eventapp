import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import Colors from "../../../constants/Colors";
import appValues from "../../../constants/appValues";
import globalStyles from "../../../constants/global.styles";
import { TransactionComponent } from "../../../../types";
import BlockButton from "../../../components/BlockButton";

const Transactions: React.FC<TransactionComponent> = ({ transactions }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {transactions.map((transaction, id) => (
        <TouchableOpacity
          activeOpacity={0.6}
          key={transaction}
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            },
          ]}
          onPress={() => setShowModal(true)}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={[
                globalStyles.text,
                {
                  fontSize: appValues.font.h3,
                  fontFamily: "DMSans_500Medium",
                },
              ]}
              numberOfLines={1}
            >
              Fund wallet Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Ab minus odio temporibus at quam corporis sed laboriosam
              velit tempore est libero nulla possimus, repellat earum distinctio
              error enim unde repudiandae.
            </Text>
            <Text
              style={[
                globalStyles.text,
                { color: Colors.darkGrayText, fontSize: appValues.font.h4 },
              ]}
            >
              4 March
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", marginLeft: 10 }}>
            <Text
              style={[
                globalStyles.text,
                {
                  color: id % 2 === 0 ? Colors.success : Colors.danger,
                  fontSize: appValues.font.h3,
                  fontFamily: "DMSans_500Medium",
                },
              ]}
            >
              {id % 2 === 0 ? "+" : "-"}$553
            </Text>
          </View>
        </TouchableOpacity>
      ))}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={[styles.title]}>
              <Text
                style={[
                  globalStyles.boldText,
                  {
                    color: Colors.success,
                  },
                ]}
              >
                +$553
              </Text>
              <Text style={[globalStyles.text]}>4 March 2021</Text>
            </View>
            <View style={[globalStyles.marginTopLg]}>
              <Text
                style={[
                  globalStyles.semiBoldText,
                  { fontSize: appValues.font.h3 },
                ]}
              >
                Action Type
              </Text>
              <Text style={[globalStyles.text]}>Wallet Deposit</Text>
            </View>
            <View style={[globalStyles.marginTop]}>
              <Text
                style={[
                  globalStyles.semiBoldText,
                  { fontSize: appValues.font.h3 },
                ]}
              >
                Description
              </Text>
              <Text style={[globalStyles.text]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
                quae repellat, dolores unde maiores adipisci cupiditate
                praesentium vel quod nulla at! Natus ducimus, recusandae ipsum
                eos rem velit in quod.
              </Text>
            </View>
            <View style={[globalStyles.marginTop]}>
              <BlockButton onPress={() => setShowModal(!showModal)}>
                Close
              </BlockButton>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#00000099",
    padding: 20,
  },
  modalView: {
    width: "100%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  title: {
    position: "relative",
    textAlign: "center",
    alignItems: "center",
  },
});

export default Transactions;
