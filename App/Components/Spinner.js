import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Modal
} from 'react-native'
import {CirclesLoader} from 'react-native-indicator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  textContent: {
    top: 80,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default class Spinner extends React.Component {
  constructor (props) {
    super(props)
    this.state = { visible: this.props.visible, textContent: this.props.textContent }
  }

  static propTypes = {
    visible: React.PropTypes.bool,
    cancelable: React.PropTypes.bool,
    textContent: React.PropTypes.string,
    dotRadius: React.PropTypes.number,
    color: React.PropTypes.string,
    size: React.PropTypes.number,
    overlayColor: React.PropTypes.string
  };

  static defaultProps = {
    visible: false,
    cancelable: false,
    textContent: '',
    color: 'white',
    dotRadius: 8,
    size: 40, // 'normal',
    overlayColor: 'rgba(0, 0, 0, 0.25)'
  };

  close () {
    this.setState({ visible: false })
  }

  componentWillReceiveProps (nextProps) {
    const { visible, textContent } = nextProps
    this.setState({ visible, textContent })
  }

  _handleOnRequestClose () {
    if (this.props.cancelable) {
      this.close()
    }
  }

  _renderDefaultContent () {
    return (
      <View style={styles.background}>
        <CirclesLoader
          color={this.props.color}
          size={this.props.size}
          dotRadius={this.props.dotRadius}

        />
        <View style={styles.textContainer}>
          <Text style={[styles.textContent, this.props.textStyle]}>{this.state.textContent}</Text>
        </View>
      </View>)
  }

  _renderSpinner () {
    const { visible } = this.state

    if (!visible) {
      return (
        <View />
      )
    }

    const spinner = (
      <View style={[
        styles.container,
        { backgroundColor: this.props.overlayColor }
      ]} key={`spinner_${Date.now()}`}>
        {this.props.children ? this.props.children : this._renderDefaultContent()}
      </View>
    )

    return (
      <Modal
        onRequestClose={() => this._handleOnRequestClose()}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={visible}>
        {spinner}
      </Modal>
    )
  }

  render () {
    return this._renderSpinner()
  }
}
