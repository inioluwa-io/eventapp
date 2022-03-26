import React from "react";
import { View, Text, Modal as RNModal, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";
import appValues from "../../../../constants/appValues";
import globalStyles from "../../../../constants/global.styles";
import BlockButton from "../../../../components/BlockButton";

export type ModalProps = {
  showModal: boolean;
  setShowModal: (val: boolean) => any;
};

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  return (
    <RNModal
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
              praesentium vel quod nulla at! Natus ducimus, recusandae ipsum eos
              rem velit in quod.
            </Text>
          </View>
          <View style={[globalStyles.marginTop]}>
            <BlockButton onPress={() => setShowModal(!showModal)}>
              Close
            </BlockButton>
          </View>
        </View>
      </View>
    </RNModal>
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

export default Modal;
