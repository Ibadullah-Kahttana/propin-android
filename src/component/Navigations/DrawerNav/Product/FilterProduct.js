import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import svg from '../../../../constants/svgs';
import color from '../../../../constants/colors';
import dimensions from '../../../../constants/dimensions';
import globalStyle from '../../../../constants/globalStyle';
import SwitchToggle from '../../../../controles/switchToggle';

const FilterProduct = ({navigation}) => {
  const [activeList, setActiveList] = useState('Home');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      {/**   Header    */}
      <View style={globalStyle.Header}>
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => navigation.goBack()}>
          <svg.LeftArrowSvgWhite width={18} height={18} fill={'white'} />
        </TouchableOpacity>
        <Text
          style={globalStyle.h2White}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          {'       '}Filter
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {/** But Rent Switch ---------------------------------------------------*/}

        <View style={styles.CityLocationBox}>
          <View style={styles.switchButtons}>
            <Text>hello</Text>
          </View>
          {/** Container Text Logo */}
          <TouchableOpacity underlayColor={'transparent'}>
            <View style={styles.containerTextLogo}>
              <View style={globalStyle.LogoFiled}>
                <View style={globalStyle.logoCircle}>
                  <svg.LocationCircleSvgSelectCity width={40} height={40} />
                </View>
              </View>
              <View style={styles.cityheading}>
                <Text
                  style={globalStyle.h2BlackLight}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  City
                </Text>
                <Text
                  style={globalStyle.h4Grey}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  Islamabad
                </Text>
              </View>
              <View style={globalStyle.rightArrowText}>
                <svg.RightArrowBlack width={13} height={13} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/** Select Location ---------------------------------------------------*/}

        <View style={styles.CityLocationBox}>
          <View style={styles.containerTextLogo}>
            <View style={globalStyle.LogoFiled}>
              <View style={globalStyle.logoCircle}>
                <svg.selectLocationFilter width={17} height={17} />
              </View>
            </View>
            <View style={styles.cityheading}>
              <Text
                style={[globalStyle.h2BlackLight]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Select Location
              </Text>
            </View>
          </View>
          {/**  Search Input */}
          <View style={globalStyle.twoBoxArea}>
            <View style={globalStyle.BoxAreaLeft}>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Select Location "
              />
              <TouchableOpacity underlayColor={'transparent'}>
                <svg.searchSvgPd
                  width={17}
                  height={17}
                  style={{paddingLeft: 40}}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity underlayColor={'transparent'}>
              <View style={globalStyle.BoxAreaRight}>
                <svg.propertyFilter width={17} height={17} />
                <Text
                  style={globalStyle.h3Grey}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  {' '}
                  Map{' '}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/** Proprty type ---------------------------------------------------*/}

        <View style={styles.PropertyType}>
          <View style={styles.containerTextLogo}>
            <View style={globalStyle.LogoFiled}>
              <View style={globalStyle.logoCircle}>
                <svg.propertyFilter width={17} height={17} />
              </View>
            </View>
            <View style={styles.cityheading}>
              <Text
                style={[globalStyle.h2BlackLight]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Property Types
              </Text>
            </View>
          </View>

          {/**   Home  */}

          <View style={styles.ProductTypeSwitch}>
            <TouchableOpacity
              underlayColor={'transparent'}
              onPress={() => setActiveList('Home')}
              style={{
                ...styles.SwitchList,
                borderBottomColor: activeList === 'Home' ? '#4681F4' : 'white',
                borderBottomWidth: 3,
              }}>
              <Text
                style={globalStyle.h1Gray}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Home
              </Text>
            </TouchableOpacity>

            {/**   Plots  */}

            <TouchableOpacity
              underlayColor={'transparent'}
              onPress={() => setActiveList('Plots')}
              style={{
                ...styles.SwitchList,
                borderBottomColor: activeList === 'Plots' ? '#4681F4' : 'white',
                borderBottomWidth: 3,
              }}>
              <Text
                style={globalStyle.h1Gray}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Plots
              </Text>
            </TouchableOpacity>

            {/**   Comercial  */}

            <TouchableOpacity
              underlayColor={'transparent'}
              onPress={() => setActiveList('Commercial')}
              style={{
                ...styles.SwitchList,
                borderBottomColor:
                  activeList === 'Commercial' ? '#4681F4' : 'white',
                borderBottomWidth: 3,
                width: dimensions.width / 4,
              }}>
              <Text
                style={globalStyle.h1Gray}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Commercial
              </Text>
            </TouchableOpacity>
          </View>

          {activeList === 'Home' ? (
            <View style={{justifyContent: 'space-between', flex: 1}}>
              {/**   Scroll View Horizontal   */}

              <View style={globalStyle.HorizontalScrollView}>
                <ScrollView
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}>
                  {/*  All BOX */}
                  <TouchableOpacity underlayColor={'transparent'}>
                    <View style={{...globalStyle.GrayBox}}>
                      <svg.checkAllFilter
                        height={15}
                        width={15}
                        alignItems={'center'}
                        justifyContent={'center'}
                      />
                      <Text style={globalStyle.h3Grey}> {'  '}All </Text>
                    </View>
                  </TouchableOpacity>

                  {/*  House BOX */}
                  <TouchableOpacity underlayColor={'transparent'}>
                    <View
                      style={{
                        ...globalStyle.GrayBox,
                        width: dimensions.width / 4,
                      }}>
                      <svg.houseFilter
                        height={15}
                        width={15}
                        alignItems={'center'}
                        justifyContent={'center'}
                      />
                      <Text style={globalStyle.h3Grey}> {'  '}Filters </Text>
                    </View>
                  </TouchableOpacity>

                  {/*  Flat BOX */}
                  <TouchableOpacity underlayColor={'transparent'}>
                    <View
                      style={{
                        ...globalStyle.GrayBox,
                      }}>
                      <svg.propertyFilter
                        height={15}
                        width={15}
                        alignItems={'center'}
                        justifyContent={'center'}
                      />
                      <Text style={globalStyle.h3Grey}> {'  '}Flat </Text>
                    </View>
                  </TouchableOpacity>

                  {/*  Upper Portion */}
                  <TouchableOpacity underlayColor={'transparent'}>
                    <View
                      style={{
                        ...globalStyle.GrayBox,
                        width: dimensions.width / 3,
                      }}>
                      <svg.uperPortionFilter
                        height={15}
                        width={15}
                        alignItems={'center'}
                        justifyContent={'center'}
                      />
                      <Text style={globalStyle.h3Grey}>
                        {' '}
                        {'  '}Upper Portion{' '}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          ) : (
            <View style={{justifyContent: 'space-between'}}>
              <Text adjustsFontSizeToFit={true} numberOfLines={1}>
                {' '}
                plots
              </Text>
            </View>
          )}
        </View>

        {/** Price Range ---------------------------------------------------*/}

        <View style={styles.PropertyType}>
          <View style={styles.containerTextLogo}>
            <View style={globalStyle.LogoFiled}>
              <View style={globalStyle.logoCircle}>
                <svg.priceRangeFilter width={17} height={17} />
              </View>
            </View>
            <View style={styles.cityheading}>
              <Text
                style={[globalStyle.h2BlackLight]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Price Range
              </Text>
            </View>
            <TouchableOpacity underlayColor={'transparent'}>
              <View style={globalStyle.rightArrowText}>
                <Text
                  style={globalStyle.h3BlackBold}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  PKR
                </Text>
                <svg.downArrowSvgDarkGray width={11} height={11} />
              </View>
            </TouchableOpacity>
          </View>

          {/** Boxes */}
          <View style={globalStyle.twoBoxArea}>
            <View
              style={{
                ...globalStyle.BoxAreaLeft,
                width: dimensions.width / 2.7,
              }}>
              <Text style={globalStyle.h1Gray}>0</Text>
            </View>
            <Text style={globalStyle.h1Black}>To</Text>
            <View
              style={{
                ...globalStyle.BoxAreaRight,
                width: dimensions.width / 2.7,
                justifyContent: 'flex-start',
                paddingLeft: 10,
              }}>
              <Text style={globalStyle.h1Gray}>Any </Text>
            </View>
          </View>
        </View>

        {/** Area Range ---------------------------------------------------*/}

        <View style={styles.PropertyType}>
          <View style={styles.containerTextLogo}>
            <View style={globalStyle.LogoFiled}>
              <View style={globalStyle.logoCircle}>
                <svg.areaRangeFilter width={17} height={17} />
              </View>
            </View>
            <View style={styles.cityheading}>
              <Text
                style={[globalStyle.h2BlackLight]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Area Range
              </Text>
            </View>
            <TouchableOpacity underlayColor={'transparent'}>
              <View style={globalStyle.rightArrowText}>
                <Text
                  style={globalStyle.h3BlackBold}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  Sq.Ft.
                </Text>
                <svg.downArrowSvgDarkGray width={11} height={11} />
              </View>
            </TouchableOpacity>
          </View>

          {/** Boxes */}
          <View style={globalStyle.twoBoxArea}>
            <View
              style={{
                ...globalStyle.BoxAreaLeft,
                width: dimensions.width / 2.7,
              }}>
              <Text style={globalStyle.h1Gray}>0</Text>
            </View>
            <Text style={globalStyle.h1Black}>To</Text>
            <View
              style={{
                ...globalStyle.BoxAreaRight,
                width: dimensions.width / 2.7,
                justifyContent: 'flex-start',
                paddingLeft: 10,
              }}>
              <Text style={globalStyle.h1Gray}>Any </Text>
            </View>
          </View>

          <View style={globalStyle.HorizontalScrollView}>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              {/*  less than 100 sq.ft. */}
              <TouchableOpacity underlayColor={'transparent'}>
                <View
                  style={{
                    ...globalStyle.GrayBox,
                    width: dimensions.width / 2.6,
                  }}>
                  <Text style={globalStyle.h3Grey}>
                    {' '}
                    Less than 100 Sq. Ft.{' '}
                  </Text>
                </View>
              </TouchableOpacity>

              {/* 100-200 sq.ft  */}
              <TouchableOpacity underlayColor={'transparent'}>
                <View
                  style={{
                    ...globalStyle.GrayBox,
                    width: dimensions.width / 2.8,
                  }}>
                  <Text style={globalStyle.h3Grey}> 100-200 Sq. Ft. </Text>
                </View>
              </TouchableOpacity>

              {/*  200-300 sq.ft */}
              <TouchableOpacity underlayColor={'transparent'}>
                <View
                  style={{
                    ...globalStyle.GrayBox,
                    width: dimensions.width / 2.8,
                  }}>
                  <Text style={globalStyle.h3Grey}> 200-300 Sq. Ft. </Text>
                </View>
              </TouchableOpacity>

              {/*  300-400 sq.ft */}
              <TouchableOpacity underlayColor={'transparent'}>
                <View
                  style={{
                    ...globalStyle.GrayBox,
                    width: dimensions.width / 2.8,
                  }}>
                  <Text style={globalStyle.h3Grey}> 300-400 Sq. Ft. </Text>
                </View>
              </TouchableOpacity>

              {/*  400-500 sq.ft */}
              <TouchableOpacity underlayColor={'transparent'}>
                <View
                  style={{
                    ...globalStyle.GrayBox,
                    width: dimensions.width / 2.8,
                  }}>
                  <Text style={globalStyle.h3Grey}> 400-500 Sq. Ft. </Text>
                </View>
              </TouchableOpacity>

              {/*  500-600 sq.ft */}
              <TouchableOpacity underlayColor={'transparent'}>
                <View
                  style={{
                    ...globalStyle.GrayBox,
                    width: dimensions.width / 2.8,
                  }}>
                  <Text style={globalStyle.h3Grey}> 500-600 Sq. Ft. </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        {/** Show Verify Adds Only ---------------------------------------------------*/}

        <View style={styles.CityLocationBox}>
          <View style={styles.containerTextLogo}>
            <View style={globalStyle.LogoFiled}>
              <View style={globalStyle.logoCircle}>
                <svg.shieldFilter width={17} height={17} />
              </View>
            </View>
            <View style={styles.cityheading}>
              <Text
                style={[globalStyle.h2BlackLight]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Show Verify Adds Only
              </Text>
            </View>
            <View style={globalStyle.rightArrowText}>
              <SwitchToggle />
            </View>
          </View>
          {/**  Search Input */}
          <View style={globalStyle.twoBoxArea}>
            <Text style={{...globalStyle.h4Grey, fontSize: 18}}>
              Estate92.net verfies the location, size and advertiser information
              of these lisiting. T&Cs apply
            </Text>
          </View>
        </View>

        {/** Show Adds with video Only ---------------------------------------------------*/}

        <View style={styles.CityLocationBox}>
          <View style={styles.containerTextLogo}>
            <View style={globalStyle.LogoFiled}>
              <View style={globalStyle.logoCircle}>
                <svg.videoFilter width={17} height={17} />
              </View>
            </View>
            <View style={styles.cityheading}>
              <Text
                style={[globalStyle.h2BlackLight]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Show Ads With Video Only
              </Text>
            </View>
            <View style={globalStyle.rightArrowText}>
              <SwitchToggle />
            </View>
          </View>
        </View>

        {/** Bottom Tab*/}

        <View style={styles.BottomTabBtn}>
          <TouchableOpacity>
            <View
              style={{
                ...globalStyle.BoxAreaRight,
                width: dimensions.width / 3,
                backgroundColor: color.white,
              }}>
              <svg.rotateLeftFilter width={18} height={18} />
              <Text
                style={{
                  ...globalStyle.h1Gray,
                  fontSize: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Reset all
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                ...globalStyle.BoxAreaLeft,
                width: dimensions.width / 2.7,
                borderRadius: 50,
                backgroundColor: color.blue,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 0,
              }}>
              <Text style={globalStyle.h2White}>Show Result</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: color.white,
  },

  CityLocationBox: {
    width: dimensions.width / 1.1,
    height: dimensions.height / 5.8,
    marginLeft: 18,
    backgroundColor: color.white,
    borderBottomWidth: 1,
    borderBottomColor: color.lightGrayLow,
    marginTop: 15,
  },

  PropertyType: {
    width: dimensions.width / 1.1,
    height: dimensions.height / 4.1,
    marginLeft: 18,
    //backgroundColor: color.red,
    borderBottomWidth: 1,
    borderBottomColor: color.lightGrayLow,
    marginTop: 15,
  },

  switchButtons: {
    width: dimensions.width / 1.1,
    height: dimensions.height / 10,
    // backgroundColor: color.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerTextLogo: {
    width: dimensions.width / 1.1,
    height: dimensions.height / 16,
    //backgroundColor: color.red,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cityheading: {
    width: dimensions.width / 1.6,
    height: dimensions.height / 20,
    // backgroundColor: color.green,
    paddingLeft: 13,
    justifyContent: 'center',
  },

  // Product View ------------------

  ProductTypeSwitch: {
    width: dimensions.width / 1.1,
    height: dimensions.height / 15,
    //backgroundColor: 'yellow',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  SwitchList: {
    width: dimensions.width / 6,
    height: dimensions.height / 20,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  BottomTabBtn: {
    width: dimensions.width / 1.1,
    height: dimensions.height / 10,
    flexDirection: 'row',
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 18,
  },
});

export default FilterProduct;
