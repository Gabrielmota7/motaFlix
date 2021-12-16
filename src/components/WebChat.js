import * as FlexWebChat from "@twilio/flex-webchat-ui";
import React from 'react';
import brandedColors from '../config/webchat-branding';
class WebChat extends React.Component {

  appConfig = {
    //  change the your AccountSid
    accountSid: "AC92a9d5a0fb9c19c40232122c95f799ae",
    // change to your Flex Flow SID
    flexFlowSid: "FO2a4982bbba8e78fe4c431cd01355d92e",
    colorTheme: {
      overrides: brandedColors
    }
  }

  state = {};

  constructor(props) {
    super(props);

    FlexWebChat.Manager.create(this.appConfig)
      .then(manager => this.setState({ manager }))
      .catch(error => this.setState({ error }));
  }

  // eslint-disable-next-line
  render() {
    const { manager, error } = this.state;
    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
};

export default WebChat;