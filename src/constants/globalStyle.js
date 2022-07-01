import {StyleSheet} from 'react-native';
import dimensions from './dimensions';
import color from './colors';

const globalStyle = StyleSheet.create({
  Header: {
    width: dimensions.width / 1,
    height: dimensions.rem * 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.blue,
    paddingTop: 20,
    paddingLeft: 20,
    marginBottom: 15,
  },

  textInput: {
    backgroundColor: color.red,
    flex: 1,
    alignItems: 'center',
    height: dimensions.width / 10,
    justifyContent: 'center',
    fontSize: 16,
  },

  h1White: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  h1Black: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: '#000000',
  },

  h1GrayBold: {
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#70747D',
  },

  h1Gray: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: '#70747D',
  },

  h1blackBold: {
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#000000',
  },

  h2black: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  h2BlackLight: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  h2White: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  h3BlackBold: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  h3Grey: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: '#949494',
  },

  h4Grey: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#949494',
  },

  h4Pink: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#DF3034',
    paddingLeft: 20,
    paddingTop: 5,
  },

  h4Black: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#000000',
    paddingBottom: 2,
    //paddingLeft: 15,
  },

  h4White: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    paddingBottom: 2,
    //paddingLeft: 15,
  },

  h4Yellow: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#F6C000',
    paddingLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  h5White: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    paddingBottom: 2,
    //paddingLeft: 15,
  },

  h5Grey: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#949494',
  },

  BoldText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  textfontsize1: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  CurrencyText: {
    fontSize: 27,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#000000',
    paddingLeft: 7,
  },

  PersonName: {
    alignItems: 'center',
  },

  // Logo Circle View and Circle ----------------------------------

  LogoFiled: {
    width: dimensions.width / 10,
    height: dimensions.height / 13,
    // backgroundColor: color.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoCircle: {
    width: dimensions.width / 10,
    height: dimensions.height / 20,
    backgroundColor: color.lightGrayMedium,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightArrow: {
    flex: 1,
    width: dimensions.width / 6,
    height: dimensions.height / 13,
    //backgroundColor: color.blue,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },

  rightArrowText: {
    width: dimensions.width / 5,
    height: dimensions.height / 13,
    //backgroundColor: color.red,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  twoBoxArea: {
    marginTop: 12,
    width: dimensions.width / 1.1,
    height: dimensions.height / 15,
    // backgroundColor: color.red,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  BoxAreaLeft: {
    width: dimensions.width / 1.6,
    height: dimensions.height / 15,
    flexDirection: 'row',
    backgroundColor: color.lightGrayMedium,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    paddingLeft: 10,
  },

  BoxAreaRight: {
    width: dimensions.width / 4,
    height: dimensions.height / 15,
    flexDirection: 'row',
    backgroundColor: color.lightGrayMedium,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
  },

  GrayBox: {
    width: dimensions.width / 5,
    height: dimensions.height / 18,
    backgroundColor: color.lightGrayMedium,
    borderRadius: 5,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  HorizontalScrollView: {
    width: dimensions.width / 1.1,
    height: dimensions.height / 15,
    //backgroundColor: color.red,
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default globalStyle;
