// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Clipboard } from 'react-native'
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
import RoundedButton from "../Components/RoundedButton";

// I18n
import I18n from 'react-native-i18n'

class TextInputScreen extends React.Component {

  constructor(props) {
    super(props);
    this.clearText = this.clearText.bind(this);
    this.state = {
      desc: '',
      val:''
    };
  }

  clearText() {
    this.refs['desc'].setNativeProps({value: ''});
  }

  setText() {
    this.setState({val: 'alpha'});
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
            value={this.state.val}
            onChangeText={(val) => this.setState({desc: val, val:val})}
          />
        </KeyboardAvoidingView>
        <View style={{backgroundColor:'#F7EDD3',justifyContent:'center', alignItems:'center'}}>

        <RoundedButton onPress={()=>this.setText()}>
          Paste text
        </RoundedButton>

        </View>
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
