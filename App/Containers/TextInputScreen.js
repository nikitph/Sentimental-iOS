// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Fumicust from '../Components/fumicust'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/TextInputScreenStyle'

// I18n
import I18n from 'react-native-i18n'

class TextInputScreen extends React.Component {

  constructor(props) {
    super(props);
    this.clearText = this.clearText.bind(this);
    this.state = {
      desc: ''
    };
  }

  clearText() {
    this.refs['desc'].setNativeProps({value: ''});
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Fumicust
            ref="desc"
            iconClass={FontAwesomeIcon}
            iconName={'exclamation-circle'}
            iconColor={'#f95a25'}
            placeholder={'Enter Dysfunctional Thought here'}
            onChangeText={(val) => this.setState({desc: val})}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputScreen)
