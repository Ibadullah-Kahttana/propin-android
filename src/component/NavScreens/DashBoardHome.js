import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import QRIcon from '../../assets/Svgs/DashBoardHome/QRIcons.svg';
import SearchHomes from '../../assets/Svgs/DashBoardHome/SearchHome.svg';
import ProfileIconHome from '../../assets/Svgs/DashBoardHome/ProfileIconHome.svg';
import UpArrow from '../../assets/Svgs/DashBoardHome/UpArrow.svg';
import DownArrow from '../../assets/Svgs/DashBoardHome/DownArrow.svg';
import Bar from '../../assets/Svgs/DashBoardHome/Bar.svg';

import PropertySVGOrange from '../../assets/Svgs/DashBoardHome/PropertySVGOrange.svg';

import {TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DashBoardHome = ({navigation}) => {
  const [activeList, setActiveList] = useState('Watchlist');

  const Marketdata = [
    {
      id: 1,
      Currency: 'RS',
      Amount: '49,329.77',
      TextDesc: 'Make you first Investment today',
    },
    {
      id: 2,
      Currency: 'USD',
      Amount: '490',
      TextDesc: 'Make you first Investment today',
    },
    {
      id: 3,
      Currency: 'IND',
      Amount: '41,329.77',
      TextDesc: 'Make you first Investment today',
    },
    {
      id: 4,
      Currency: 'EUR',
      Amount: '102.77',
      TextDesc: 'Make you first Investment today',
    },
    {
      id: 5,
      Currency: 'RS',
      Amount: '49,329.77',
      TextDesc: 'Make you first Investment today',
    },
    {
      id: 6,
      Currency: 'RS',
      Amount: '49,329.77',
      TextDesc: 'Make you first Investment today',
    },
    {
      id: 7,
      Currency: 'RS',
      Amount: '49,329.77',
      TextDesc: 'Make you first Investment today',
    },
  ];

  const Propertydata = [
    {
      id: 1,
      PropertyNo: 'Property 1',
      PropertyDecp: 'Lorem ipsum',
      Currency: 'USD',
      Amount: '490',
      sighnPluMin: '+',
      valuePercentage: ' 9.77 %',
    },

    {
      id: 2,
      PropertyNo: 'Property 2',
      PropertyDecp: 'Lorem ipsum',
      Currency: 'RS',
      Amount: '49,232.0',
      sighnPluMin: '+',
      valuePercentage: ' 19.77 %',
    },

    {
      id: 3,
      PropertyNo: 'Property 3',
      PropertyDecp: 'Lorem ipsum',
      Currency: 'USD',
      Amount: '120',
      sighnPluMin: '+',
      valuePercentage: ' 22.77 %',
    },

    {
      id: 4,
      PropertyNo: 'Property 4',
      PropertyDecp: 'Lorem ipsum',
      Currency: 'EUR',
      Amount: '4390',
      sighnPluMin: '+',
      valuePercentage: ' 99.77 %',
    },

    {
      id: 5,
      PropertyNo: 'Property 5',
      PropertyDecp: 'Lorem ipsum',
      Currency: 'RS',
      Amount: '490',
      sighnPluMin: '+',
      valuePercentage: ' 9.77 %',
    },
    {
      id: 6,
      PropertyNo: 'Property 6',
      PropertyDecp: 'Lorem ipsum',
      Currency: 'RS',
      Amount: '490',
      sighnPluMin: '+',
      valuePercentage: ' 9.77 %',
    },
    {
      id: 7,
      PropertyNo: 'Property 7',
      PropertyDecp: 'Lorem ipsum',
      Currency: 'RS',
      Amount: '490',
      sighnPluMin: '+',
      valuePercentage: ' 9.77 %',
    },
    {
      id: 8,
      PropertyNo: 'Property 8',
      PropertyDecp: 'Lorem ipsum',
      Currency: 'RS',
      Amount: '490',
      sighnPluMin: '+',
      valuePercentage: ' 9.77 %',
    },
    {
      id: 9,
      PropertyNo: 'Property 9',
      PropertyDecp: 'Lorem ipsum',
      Currency: 'RS',
      Amount: '490',
      sighnPluMin: '+',
      valuePercentage: ' 9.77 %',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.HomeScreeenHeaderNav}>
        <View style={styles.HeaderNavTitle}>
          <Text
            style={styles.h1Boldblack}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Latest Market
          </Text>
        </View>
        <View style={styles.HeaderNavIcons}>
          <TouchableOpacity>
            <SearchHomes width={15} height={15} color="#70747D" />
          </TouchableOpacity>
          <TouchableOpacity>
            <QRIcon width={16} height={16} color="#70747D" />
          </TouchableOpacity>
          <TouchableOpacity>
            <ProfileIconHome width={28} height={34} />
          </TouchableOpacity>
        </View>
      </View>

      {/* --------------------------------------------------------------------------- */}

      <View style={styles.HorizontalScrollView}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {Marketdata.map((item, index) => (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#86B6FF', '#4681F4']}
              style={styles.linearGradientBox}>
              <View
                style={{
                  width: (windowWidth / 100) * 60,
                  height: (windowHeight / 100) * 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}>
                <Text
                  style={styles.h1Boldwhite}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  {item.Currency}
                </Text>
                <Text
                  style={styles.h1Boldwhite}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  {' '}
                  {item.Amount}
                </Text>
              </View>

              <Text
                style={styles.text2WhitePadding}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {item.TextDesc}
              </Text>

              <View
                style={{
                  width: (windowWidth / 100) * 50,
                  height: (windowHeight / 100) * 6,
                  //backgroundColor: 'yellow',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingLeft: 10,
                }}>
                <TouchableOpacity
                  style={styles.TouchableOpacityHeaderScrolViewBtn}>
                  <Text
                    style={styles.text2White}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}>
                    Deposit
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.TouchableOpacityHeaderScrolViewBtn}>
                  <Text
                    style={styles.text2White}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}>
                    Withdraw
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          ))}
        </ScrollView>
      </View>
      {/* --------------------------------------------------------------------------- */}

      <View style={styles.SwitchListsHomeScreen}>
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveList('Watchlist')}
          style={{
            ...styles.SwitchList,
            borderBottomColor:
              activeList === 'Watchlist' ? '#4681F4' : '#f8f9fa',
            borderBottomWidth: 3,
          }}>
          <Text
            style={styles.text1Gray}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Watchlist
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveList('Coin')}
          style={{
            ...styles.SwitchList,
            borderBottomColor: activeList === 'Coin' ? '#4681F4' : '#f8f9fa',
            borderBottomWidth: 3,
          }}>
          <Text
            style={styles.text1Gray}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Coin
          </Text>
        </TouchableOpacity>
      </View>

      {activeList === 'Watchlist' ? (
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <View style={styles.watchlistNav}>
            <Text
              style={styles.text2Gray}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Market Cap
            </Text>
            <Text
              style={styles.text2Gray}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Last Price
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={styles.text2Gray}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                24H{' '}
              </Text>
              <Text
                style={styles.text2Gray}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Change{'  '}
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity>
                  <UpArrow width={8} height={8} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <DownArrow width={8} height={8} />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={styles.WatclishNavText}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Volume
            </Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {Propertydata.map((item, index) => (
              <View elevation={2} style={styles.watchlistBoxView}>
                <PropertySVGOrange width={45} height={45} />

                <View style={styles.PropertyHeadingView}>
                  <Text
                    style={styles.h4Boldblack}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}>
                    {item.PropertyNo}
                  </Text>
                  <Text
                    style={styles.text2Gray}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}>
                    {item.PropertyDecp}
                  </Text>
                </View>

                <Bar width={90} height={90} />

                <View style={styles.CurrencyRateView}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={styles.h4Boldblack}
                      adjustsFontSizeToFit={true}
                      numberOfLines={1}>
                      {item.Currency}
                    </Text>
                    <Text
                      style={styles.h4Boldblack}
                      adjustsFontSizeToFit={true}
                      numberOfLines={1}>
                      {' '}
                      {item.Amount}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={styles.text2Green}
                      adjustsFontSizeToFit={true}
                      numberOfLines={1}>
                      {item.sighnPluMin}
                    </Text>
                    <Text
                      style={styles.text2Green}
                      adjustsFontSizeToFit={true}
                      numberOfLines={1}>
                      {item.valuePercentage}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={{justifyContent: 'space-between'}}>
          <Text adjustsFontSizeToFit={true} numberOfLines={1}>
            {' '}
            COIN
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },

  HomeScreeenHeaderNav: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 8,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
  },

  HeaderNavTitle: {
    width: (windowWidth / 100) * 60,
    height: (windowHeight / 100) * 8,
    // backgroundColor: 'green',
    justifyContent: 'center',
    paddingLeft: 15,
  },

  h1Boldwhite: {
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  h1Boldblack: {
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
    fontWeight: '700',
    color: '#212529',
  },

  h4Boldblack: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    fontWeight: '700',
    color: '#212529',
  },

  h4Boldblack: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    fontWeight: '700',
    color: '#212529',
  },

  text2White: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    fontWeight: '300',
    color: '#FFFFFF',
  },

  text2Gray: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    fontWeight: '300',
    color: '#70747D',
  },

  text2red: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    fontWeight: '300',
    color: 'red',
  },

  text2Green: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    fontWeight: '300',
    color: '#21BF73',
  },

  text2WhitePadding: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    fontWeight: '300',
    color: '#FFFFFF',
    paddingLeft: 10,
  },

  HeaderNavIcons: {
    width: (windowWidth / 100) * 40,
    height: (windowHeight / 100) * 8,
    // /backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    justifyContent: 'space-around',
  },

  HorizontalScrollView: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 20,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
  },

  linearGradientBox: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    width: (windowWidth / 100) * 70,
    height: (windowHeight / 100) * 18,
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 15,
  },

  TouchableOpacityHeaderScrolViewBtn: {
    width: (windowWidth / 100) * 20,
    height: (windowHeight / 100) * 4,
    backgroundColor: '#86B6FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  SwitchListsHomeScreen: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 7,
    //backgroundColor: 'yellow',
    marginTop: 10,
    borderBottomColor: '#DFE2E4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  SwitchList: {
    width: (windowWidth / 100) * 22,
    height: (windowHeight / 100) * 7,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },

  text1Gray: {
    fontFamily: 'Roboto-Regular',
    fontSize: 19,
    fontWeight: '500',
    color: '#6C757D',
  },

  WatclishNavText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '500',
    color: '#6C757D',
  },

  watchlistNav: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 6,
    //backgroundColor: 'yellow',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  watchlistBoxView: {
    width: (windowWidth / 100) * 95,
    height: (windowHeight / 100) * 10,
    backgroundColor: '#F8F9F9',
    flexDirection: 'row',
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    borderRadius: 15,
    marginBottom: 5,
    marginLeft: 10,
    shadowColor: '#808B96',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  PropertyHeadingView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: (windowWidth / 100) * 22,
    height: (windowHeight / 100) * 7,
    // /backgroundColor: 'green',
  },

  CurrencyRateView: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: (windowWidth / 100) * 23,
    height: (windowHeight / 100) * 6,
    //backgroundColor: 'green',
  },
});

export default DashBoardHome;
