// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    paddingTop: 16,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  textInput: {
    flex: 1,
    color: 'black',
    fontSize: 18,
    padding: 7,
    paddingLeft: 0
  },
  separator: {
    position: 'absolute',
    width: 1,
    backgroundColor: 'orange',
    marginTop: -8
  }
})
