import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {Icon} from 'react-native-elements';

// Svgs Constant
import svg from '../constants/svgs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SelectCityScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      CityName: 'Lahore',
      CityCode: '42',
    },
    {
      id: 2,
      CityName: 'Islamabad',
      CityCode: '51',
    },
    {
      id: 3,
      CityName: 'FaisalAbad',
      CityCode: '41',
    },
    {
      id: 4,
      CityName: 'Peshawar',
      CityCode: '91',
    },
    {
      id: 5,
      CityName: 'Multan',
      CityCode: '61',
    },
    {
      id: 6,
      CityName: 'Gujranwala',
      CityCode: '55',
    },
    {
      id: 7,
      CityName: 'Rawalpindi',
      CityCode: '51',
    },
    {
      id: 8,
      CityName: 'Sialkot',
      CityCode: '52',
    },
    {
      id: 9,
      CityName: 'Karachi',
      CityCode: '21',
    },
    {
      id: 10,
      CityName: 'Quetta',
      CityCode: '82',
    },
    {
      id: 11,
      CityName: 'Sargodha',
      CityCode: '52',
    },
    {
      id: 12,
      CityName: 'Gujrat',
      CityCode: '53',
    },
    {
      id: 13,
      CityName: 'Lahore',
      CityCode: '23',
    },
  ];

  const CountryScreenGoBack = () => {
    navigation.navigate('CountryScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f8f9fa'} barStyle="dark-content" />

      <View style={styles.headerNav}>
        <TouchableOpacity
          onPress={CountryScreenGoBack}
          style={{paddingLeft: 15}}>
          <svg.LeftArrowSvgWhite width={17} height={17} />
        </TouchableOpacity>
        <Text
          style={styles.h3Bold}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          Select city code
        </Text>
      </View>

      {/* ---------------------------------------------------------- */}

      <View style={styles.SelectCitytSearcBox}>
        <Icon type="fontawesome" name="search" size={25} color="#70747D" />
        <TextInput
          placeholder="Search"
          style={styles.SelectCitySearchtextInput}
          autoCapitalize="none"
        />
      </View>

      {/* ---------------------------------------------------------- */}
      <ScrollView>
        {data.map((item, index) => (
          <View style={styles.CitiesList}>
            <TouchableOpacity>
              <View style={styles.LogAndTextView}>
                <svg.LocationCircleSvgSelectCity width={40} height={40} />

                <Text
                  style={styles.text1}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  {item.CityName}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.CityCode}>
              <Text
                style={styles.text1}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {item.CityCode}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    flexDirection: 'column',
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'space-between',
  },

  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },

  text1: {
    paddingLeft: 15,
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    fontWeight: '600',
    color: '#2C3131',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerNav: {
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 90,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    marginTop: 20,
    marginRight: 8,
  },

  h3Bold: {
    paddingLeft: 15,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    fontWeight: '700',
    color: '#212529',
  },

  SelectCitytSearcBox: {
    height: (windowHeight / 100) * 6,
    width: (windowWidth / 100) * 90,
    backgroundColor: '#EAECEE',
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    borderRadius: 50,
    paddingLeft: 15,
    marginBottom: 10,
  },

  SelectCitySearchtextInput: {
    height: (windowHeight / 100) * 6,
    //backgroundColor: 'red',
    flex: 1,
    color: '#70747D',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    paddingLeft: 15,
  },

  CitiesList: {
    height: (windowHeight / 100) * 6,
    width: (windowWidth / 100) * 90,
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 50,
  },

  CityCode: {
    width: (windowWidth / 100) * 20,
    height: (windowHeight / 100) * 5,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    //backgroundColor: 'red',
  },

  LogAndTextView: {
    width: (windowWidth / 100) * 70,
    height: (windowHeight / 100) * 5,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },
});

export default SelectCityScreen;
