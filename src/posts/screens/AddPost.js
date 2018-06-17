import React, {PureComponent} from 'react';
import {View, Text, TextInput} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';

class AddPost extends PureComponent {

  static propTypes = {
    componentId: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.onChangeText = this.onChangeText.bind(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Add Post'
        },
        rightButtons: [{
          id: 'saveBtn',
          title: 'Save',
          enabled: false
        }],
        leftButtons: [{
          id: 'cancelBtn',
          title: 'Cancel'
        }]
      }
    };
  }

  onNavigationButtonPressed(buttonId) {
    if (buttonId === 'cancelBtn') {
      Navigation.dismissModal(this.props.componentId);
    } else if (buttonId === 'saveBtn') {
      alert('saveBtn');
    }
  }

  onChangeText(text) {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [{
          id: 'saveBtn',
          title: 'Save',
          enabled: !!text
        }]
      }
    });
  }

  render() {
    return (
      <View flex center bg-green60>
        <TextInput
          placeholder="Start writing to enable the save btn"
          onChangeText={this.onChangeText}
          hideUnderline
        />
      </View>
    );
  }
}

export default AddPost;
