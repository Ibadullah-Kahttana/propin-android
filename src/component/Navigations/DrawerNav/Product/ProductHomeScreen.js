import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native';

import svg from '../../../../constants/svgs';
import color from '../../../../constants/colors';
import dimensions from '../../../../constants/dimensions';
import globalStyle from '../../../../constants/globalStyle';

import SwitchToggle from '../../../../controles/switchToggle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductHomeScreen = ({navigation}) => {
  // Add Product + Add
  const addProductNav = () => {
    navigation.navigate('AddProducts');
  };

  // Filter Product
  const FilterProductScreen = () => {
    navigation.navigate('FilterProduct');
  };
  const PropertyData = [
    {
      id: 1,
      HeadingDescp: 'Bahria Town 5 MARLA Plot',
      Currency: 'PKR',
      Amount: '100,000',
      Ratings: '4.5',
      LocationArea: 'Bahria Town',
      LocationCity: 'Islamabad',
      Marlas: '5',
    },
    {
      id: 2,

      HeadingDescp: 'Airport Housing Society',
      Currency: 'PKR',
      Amount: '100,000',
      Ratings: '4.0',
      LocationArea: 'Bahria Town',
      LocationCity: 'Islamabad',
      Marlas: '7',
    },
    {
      id: 3,

      HeadingDescp: 'A-17/2',
      Currency: 'PKR',
      Amount: '100,000',
      Ratings: '4.3',
      LocationArea: 'Bahria Town',
      LocationCity: 'Islamabad',
      Marlas: '9',
    },
    {
      id: 4,

      HeadingDescp: 'Bahria Town 5 MARLA Plot',
      Currency: 'PKR',
      Amount: '100,000',
      Ratings: '4.5',
      LocationArea: 'Bahria Town',
      LocationCity: 'Islamabad',
      Marlas: '5',
    },
    {
      id: 5,
      HeadingDescp: 'Bahria Town 5 MARLA Plot',
      Currency: 'PKR',
      Amount: '100,000',
      Ratings: '4.5',
      LocationArea: 'Bahria Town',
      LocationCity: 'Islamabad',
      Marlas: '5',
    },
    {
      id: 6,
      HeadingDescp: 'Bahria Town 5 MARLA Plot',
      Currency: 'PKR',
      Amount: '100,000',
      Ratings: '4.5',
      LocationArea: 'Bahria Town',
      LocationCity: 'Islamabad',
      Marlas: '5',
    },
    {
      id: 7,
      HeadingDescp: 'Bahria Town 5 MARLA Plot',
      Currency: 'PKR',
      Amount: '100,000',
      Ratings: '4.5',
      LocationArea: 'Bahria Town',
      LocationCity: 'Islamabad',
      Marlas: '5',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      {/**   Header    */}

      <View style={styles.Header}>
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => navigation.goBack()}>
          <svg.LeftArrowSvgWhite width={18} height={18} fill={'white'} />
        </TouchableOpacity>

        <Text style={styles.h2White}>{'       '}Products</Text>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
            paddingRight: 20,
          }}
          onPress={addProductNav}
          underlayColor={'transparent'}>
          <Text style={styles.h1White}>+ Add</Text>
        </TouchableOpacity>
      </View>

      {/**   Scroll View Horizontal   */}

      <View style={styles.HorizontalScrollView}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {/*  Filters BOX */}
          <TouchableOpacity
            onPress={FilterProductScreen}
            underlayColor={'transparent'}>
            <View style={styles.GrayBoxFilter}>
              <svg.filterSvgPd
                height={15}
                width={15}
                alignItems={'center'}
                justifyContent={'center'}
              />
              <Text style={styles.h4Black}> {'  '}Filters </Text>
            </View>
          </TouchableOpacity>

          {/*  Sort BOX */}
          <TouchableOpacity underlayColor={'transparent'}>
            <View style={styles.GrayBoxSort}>
              <svg.sortSvgPd
                height={20}
                width={20}
                alignItems={'center'}
                justifyContent={'center'}
              />
              <Text style={styles.h4Black}>{'  '}Sort </Text>
            </View>
          </TouchableOpacity>

          {/*  Location BOX */}
          <TouchableOpacity underlayColor={'transparent'}>
            <View style={styles.GrayBoxLocation}>
              <Text style={styles.h4Black}> Location {'  '}</Text>
              <svg.downArrowSvgDarkGray
                height={9}
                width={9}
                alignItems={'center'}
                justifyContent={'center'}
              />
            </View>
          </TouchableOpacity>

          {/*  Price Range BOX */}
          <TouchableOpacity
            style={{marginRight: 25}}
            underlayColor={'transparent'}>
            <View style={styles.GrayBoxPrice}>
              <Text style={styles.h4Black}> Price Range{'  '} </Text>
              <svg.downArrowSvgDarkGray
                height={10}
                width={10}
                alignItems={'center'}
                justifyContent={'center'}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.VerticalScrollView}>
        {/**   Scroll View Vertical   */}
        <ScrollView
          style={{paddingBottom: 30}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {PropertyData.map((item, index) => (
            <View elevation={8} style={styles.plotDescriptionBox}>
              {/** Heading Plot */}
              <View style={styles.Boxheading}>
                <Text style={styles.h1blackBold}>{item.HeadingDescp}</Text>
                <TouchableOpacity>
                  <View style={styles.PlotButton}>
                    <Text style={styles.h4Black}>Plot</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/** Currency */}
              <View style={styles.CurrencyStarBox}>
                <View style={styles.currencyStarText}>
                  <View style={styles.currencyLogo}>
                    <svg.noteSvgPd width={13} height={13} />
                    <Text style={styles.h1GrayBold}>{item.Currency}</Text>
                  </View>

                  <Text style={styles.CurrencyText}>{item.Amount}</Text>
                </View>
                <View style={styles.starsBox}>
                  <View style={styles.stars}></View>
                  <Text style={[styles.starsText, styles.h4Grey]}>
                    {item.Ratings}
                  </Text>
                </View>
              </View>

              {/** Locations */}
              <View style={styles.locationIDMarla}>
                <View style={styles.locationDetails}>
                  <svg.locationSvgPd width={17} height={17} />
                  <Text style={styles.h5Grey}>
                    {'  '}
                    {item.LocationArea}
                  </Text>
                  <Text style={styles.h5Grey}>
                    {' '}
                    {','}
                    {item.LocationCity}
                  </Text>
                </View>
                <View style={styles.searchId}>
                  <svg.searchSvgPd width={17} height={17} />
                  <Text style={styles.h5Grey}> ID:</Text>
                  <Text style={styles.h5Grey}> {item.id}</Text>
                </View>
                <View style={styles.MarlasDetails}>
                  <svg.houseSvgPd width={17} height={17} />
                  <Text style={styles.h5Grey}>
                    {'  '}
                    {item.Marlas}
                  </Text>
                  <Text style={styles.h5Grey}>{'  '}Marla</Text>
                </View>
              </View>

              {/** Buttons Switch */}
              <View style={styles.ButtonSwitchLine}>
                {/** Buttons */}
                <View style={styles.buttons}>
                  <TouchableOpacity underlayColor={'transparent'}>
                    <View style={styles.EditButton}>
                      <svg.penIconSvgPd width={15} height={15} />
                      <Text style={styles.h5White}>Edit</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity underlayColor={'transparent'}>
                    <View style={styles.DeleteButton}>
                      <svg.deleteboxSvgPd width={15} height={15} />
                      <Text style={styles.h5White}>Delete</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/** Switch */}
                <View style={styles.switches}>
                  <View style={styles.archivedSwitch}>
                    <Text style={styles.h4Black}>Archived</Text>
                    <SwitchToggle />
                  </View>
                  <View style={styles.listedSwitch}>
                    <Text style={styles.h4Grey}> Listed</Text>
                    <SwitchToggle />
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: color.white,
  },

  Header: {
    flex: 1,
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.blue,
    paddingTop: 20,
    paddingLeft: 20,
    marginBottom: 15,
  },

  HorizontalScrollView: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 6,
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 5,
  },

  VerticalScrollView: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 82,
    flexDirection: 'column',
    //backgroundColor: 'red',
  },

  GrayBoxFilter: {
    width: (windowWidth / 100) * 24,
    height: (windowHeight / 100) * 5,
    backgroundColor: color.lightGrayHigh,
    borderRadius: 10,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  GrayBoxSort: {
    width: (windowWidth / 100) * 21,
    height: (windowHeight / 100) * 5,
    backgroundColor: '#EBECEC',
    borderRadius: 10,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  GrayBoxLocation: {
    width: (windowWidth / 100) * 26,
    height: (windowHeight / 100) * 5,
    backgroundColor: '#EBECEC',
    borderRadius: 10,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  GrayBoxPrice: {
    width: (windowWidth / 100) * 30,
    height: (windowHeight / 100) * 5,
    backgroundColor: '#EBECEC',
    borderRadius: 10,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //   Text Color and Styles  -------------------------------------------------------------------

  h2Black: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  h2White: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  h1White: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  h1GrayBold: {
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '##70747D',
  },

  h1blackBold: {
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#000000',
  },

  CurrencyText: {
    fontSize: 27,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#000000',
    paddingLeft: 7,
  },

  h3BlackBold: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  PersonName: {
    alignItems: 'center',
  },

  h4Grey: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#949494',
  },

  h5Grey: {
    fontSize: 13,
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
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    paddingBottom: 2,
    //paddingLeft: 15,
  },

  h5White: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    paddingBottom: 2,
    //paddingLeft: 15,
  },

  h4Yellow: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#F6C000',
    paddingLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  BoldText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  headingText: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,

    // backgroundColor: 'yellow',
  },
  textfontsize1: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  //======================== Plot Box  ---------------------------------------------------

  plotDescriptionBox: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 20,
    margin: 10,
    marginLeft: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#808B96',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  Boxheading: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'yellow',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 15,
  },

  currencyLogo: {
    width: (windowWidth / 100) * 14,
    height: (windowHeight / 100) * 5,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  PlotButton: {
    width: (windowWidth / 100) * 15,
    height: (windowHeight / 100) * 3,
    backgroundColor: '#E4E4E4',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  CurrencyStarBox: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 15,
  },

  locationIDMarla: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 4,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 15,
  },

  ButtonSwitchLine: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 15,
  },

  buttons: {
    width: (windowWidth / 100) * 35,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  EditButton: {
    width: (windowWidth / 100) * 15,
    height: (windowHeight / 100) * 3.5,
    backgroundColor: '#FDC32D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
  },

  DeleteButton: {
    width: (windowWidth / 100) * 18,
    height: (windowHeight / 100) * 3.5,
    backgroundColor: '#E42025',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
  },

  switches: {
    width: (windowWidth / 100) * 44,
    height: (windowHeight / 100) * 4,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  archivedSwitch: {
    width: (windowWidth / 100) * 25,
    height: (windowHeight / 100) * 3,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRightWidth: 1,
    borderRightColor: '#D9D9D9',
    paddingLeft: 3,
  },

  listedSwitch: {
    width: (windowWidth / 100) * 19,
    height: (windowHeight / 100) * 3,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 5,
  },

  locationDetails: {
    width: (windowWidth / 100) * 40,
    height: (windowHeight / 100) * 4,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'row',
  },

  searchId: {
    width: (windowWidth / 100) * 20,
    height: (windowHeight / 100) * 4,
    //backgroundColor: 'pink',
    alignItems: 'center',
    flexDirection: 'row',
  },

  MarlasDetails: {
    width: (windowWidth / 100) * 20,
    height: (windowHeight / 100) * 4,
    //backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
  },
  currencyStarText: {
    width: (windowWidth / 100) * 50,
    height: (windowHeight / 100) * 5,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 3,
  },

  starsBox: {
    width: (windowWidth / 100) * 30,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  stars: {
    width: (windowWidth / 100) * 22,
    height: (windowHeight / 100) * 5,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  starsText: {
    width: (windowWidth / 100) * 10,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#70747D',
    padding: 7,
    paddingTop: 10,
  },
});

export default ProductHomeScreen;
