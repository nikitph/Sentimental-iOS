// @flow
import React from "react";
import {ScrollView, Text, KeyboardAvoidingView, View, Clipboard} from "react-native";
import {connect} from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// external libs
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Fumicust from "../Components/fumicust";
// Styles
import styles from "./Styles/TextInputScreenStyle";
import RoundedButton from "../Components/RoundedButton";
// I18n

class TextInputScreen extends React.Component {

  constructor(props) {
    super(props);
    this.clearText = this.clearText.bind(this);
    this.state = {
      desc: '',
      val: ''
    };
  }

  clearText() {
    this.refs['desc'].setNativeProps({value: ''});
  }

  setText() {
    this.setState({val: 'alpha'});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Fumicust
            ref="desc"
            iconClass={FontAwesomeIcon}
            iconName={'exclamation-circle'}
            iconColor={'#f95a25'}
            placeholder={'Enter or paste analysis text here'}
            value={this.state.val}
            onChangeText={(val) => this.setState({desc: val, val:val})}
          />
        </KeyboardAvoidingView>
        <View style={styles.analycontainer}>
        <View style={{backgroundColor:'white',justifyContent:'center', alignItems:'center'}}>

          <RoundedButton onPress={()=>this.setText()}>
            Paste text
          </RoundedButton>

        </View>

        <View style={{backgroundColor:'#F7EDD3',justifyContent:'center', alignItems:'center'}}>
          <Text>
            Results appear here

          </Text>

        </View>

        <View style={{backgroundColor:'#F7EDD3',justifyContent:'center', alignItems:'center'}}>

          <RoundedButton onPress={()=>this.setText()}>
            Submit
          </RoundedButton>
        </View>
        </View>


      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputScreen)
