import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {},
  containertwo: {
    flex: 1,
    height: Metrics.screenHeight,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F7EDD3'
  },

  analycontainer: {
    flex: 1,
    height: Metrics.screenHeight - 150 - 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F7EDD3'
  },
  slideContainer: {
    flex: 0.1,
    marginTop: 64, position: 'relative'
  },
  slide: {
    flex: 1
  },
  slide1: {
    backgroundColor: '#F4B459'
  },
  slide2: {
    backgroundColor: '#F4B459'
  },
  slide3: {
    backgroundColor: '#F4B459',
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    color: '#482e19',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'center'
  }
})
