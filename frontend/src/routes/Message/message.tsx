import React, { useState, useCallback, useEffect } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { PageProps } from "../../../types";
import Colors from "../../constants/Colors";
import globalStyles from "../../constants/global.styles";

const Messages: React.FC<PageProps> = ({ route, navigation }) => {
  const {
    params: { defaultMessage },
  } = route;

  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState(defaultMessage);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  useEffect(() => {
    setText(defaultMessage);
  }, [defaultMessage]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    navigation?.setParams({ defaultMessage: undefined });

    if (defaultMessage) {
      setTimeout(() => {
        // navigation?.goBack();
      }, 700);
    }
  }, []);

  const handleTextChange = useCallback((val: string) => {
    setText(val);
  }, []);

  const canShowDefaultMessage = () => {};

  return (
    <GiftedChat
      messages={messages}
      alwaysShowSend
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      text={text}
      onInputTextChanged={handleTextChange}
      renderBubble={(props) => (
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: Colors.primary,
            },
            left: {
              backgroundColor: Colors.white,
            },
          }}
        />
      )}
    />
  );
};
export default Messages;
