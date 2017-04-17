// @flow
import React, { PropTypes } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Clipboard } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// external libs
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Fumicust from '../Components/fumicust'
// Styles
import styles from './Styles/TextInputScreenStyle'
import RoundedButton from '../Components/RoundedButton'
import SentimentActions from '../Redux/SentimentRedux'
import Spinner from '../Components/Spinner'
// I18n

class TextInputScreen extends React.Component {
  constructor (props) {
    super(props)
    this.clearText = this.clearText.bind(this)
    this.state = {
      desc: '',
      val: ''
    }
  }

  clearText () {
    this.setState({val: ''})
  }

  setText () {
    this.setState({val: Clipboard.getString()})
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Spinner visible={this.props.isfetching}/>
        <KeyboardAvoidingView behavior='position'>
          <Fumicust
            ref='desc'
            iconClass={FontAwesomeIcon}
            iconName={'exclamation-circle'}
            iconColor={'#f95a25'}
            placeholder={'Enter or paste analysis text here'}
            value={this.state.val}
            onChangeText={(val) => this.setState({desc: val, val: val})}
          />
        </KeyboardAvoidingView>
        <View style={styles.analycontainer}>
          <View style={{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection:'row'}}>

            <RoundedButton onPress={() => this.setText()}>
              Paste text
            </RoundedButton>

            <RoundedButton onPress={() => this.clearText()}>
              Clear
            </RoundedButton>

          </View>

          <View style={{backgroundColor: '#F7EDD3', justifyContent: 'center', alignItems: 'center', margin:20}}>
            <Text style={styles.text}>{!this.props.isfetching && this.props.sentiment != null ? 'Magnitude : ' + this.props.sentiment.documentSentiment.magnitude : 'Nothing to show here. Enter some text above to get started' }</Text>
            <Text style={styles.text}>{!this.props.isfetching && this.props.sentiment != null ? 'Score : ' + this.props.sentiment.documentSentiment.score : '' }</Text>
            <Text style={styles.text}>{!this.props.isfetching && this.props.sentiment != null ?
            'Analysis : ' + getMessage(this.props.sentiment.documentSentiment.magnitude, this.props.sentiment.documentSentiment.score, this.props.sentiment.sentences.length)
              : '' }</Text>
          </View>

          <View style={{backgroundColor: '#F7EDD3', justifyContent: 'center', alignItems: 'center', marginBottom:20}}>

            <RoundedButton onPress={() => this.props.sentimentReq(this.state.desc)}>
              Analyze
            </RoundedButton>
          </View>
        </View>

      </ScrollView>
    )
  }
}

function getMessage (mag, score, sente) {

  let message = '';
  if (score < -0.6) {
    message = 'The overall sentiment from the text is strongly negative. Please consider a revision before sending it to anyone.';
  }
  else if (score < -0.3 && score >= -0.6) {
    message = 'The overall sentiment from the text is somewhat negative';

  }
  else if (score < 0.3 && score >= -0.3) {
    if (mag >= 3) {
      message = 'The overall sentiment from all of the text is neutral but there are sentences with high emotional content';
    }
    else {

      message = 'The overall sentiment from all of the text is neutral, individual sentences are low in emotional content';

    }

  }
  else if (score < 0.6 && score >= 0.3) {
    message = 'The overall sentiment from the text is positive';

  }

  else if (score >= 0.6) {

    message = 'The overall sentiment from the text is very positive';

  }

  return 'There are ' + sente + ' sentences in your selection.' + message;
}

TextInputScreen.propTypes = {

  sentimentReq: PropTypes.func,
  sentiment: PropTypes.object,
  isfetching: PropTypes.bool

}

const mapStateToProps = (state) => {
  console.tron.log(state.sentiment.payload)
  return {
    isfetching: state.sentiment.fetching,
    sentiment: state.sentiment.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    sentimentReq: (params) => dispatch(SentimentActions.sentimentRequest(params))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputScreen)
