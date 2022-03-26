import React from "react";
import { PageProps } from "../../../types";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import architects from "../../db/architects";
import ContactItem from "./components/contactItem";

const Contacts: React.FC<PageProps> = ({ navigation }) => {
  return (
    <ContainerScrollView>
      <PaddedView>
        {architects.map((item, id) => (
          <ContactItem
            key={id}
            src={item.src}
            name={`${item.firstName} ${item.lastName}`}
            navigation={navigation}
          />
        ))}
      </PaddedView>
    </ContainerScrollView>
  );
};

export default Contacts;
