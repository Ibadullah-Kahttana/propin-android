import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import svg from '../../../../constants/svgs';
import color from '../../../../constants/colors';
import dimensions from '../../../../constants/dimensions';
import globalStyle from '../../../../constants/globalStyle';

import {ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddProductScreen = ({navigation}) => {
  const ProductsListScreen = () => {
    navigation.navigate('ProductHome');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      {/** --------------------      Header       ----------------------*/}

      <View style={styles.Header}>
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => navigation.goBack()}>
          <svg.LeftArrowSvgWhite width={18} height={18} />
        </TouchableOpacity>

        <Text style={styles.h2White}>
          {'       '}
          Add Product
        </Text>
      </View>

      {/** --------------------      Scrol List      --------------------*/}

      <ScrollView>
        {/** ----------  Name  ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Name
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Enter employee name"
            />
          </View>
        </View>

        {/** ----------  Plot Number  ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            File / Plot Number
          </Text>
        </View>

        <View style={styles.ListBox}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Enter file or Plot number"
          />
        </View>

        {/** ----------  Product Type ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Product Type
          </Text>
        </View>

        <View style={styles.ListBox}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Select type"
          />
          <TouchableOpacity style={{paddingRight: 15}}>
            <svg.downArrowSvgGray width={10} height={10} fill={'#C4C4C4'} />
          </TouchableOpacity>
        </View>

        {/** ----------  Area Size and units----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Area Size & Unit
          </Text>
        </View>

        <View style={styles.ListMultipleBox}>
          <View style={styles.DropDown}>
            <Text style={styles.h4Grey}> Marla </Text>
            <TouchableOpacity>
              <svg.downArrowSvgGray width={10} height={10} fill={'#C4C4C4'} />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Enter Size"
          />
        </View>

        {/** ----------  Price ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Price
          </Text>
        </View>

        <View style={styles.ListMultipleBox}>
          <View style={styles.DropDown}>
            <Text style={styles.h4Grey}> PKR </Text>
            <TouchableOpacity>
              <svg.downArrowSvgGray width={10} height={10} fill={'#C4C4C4'} />
            </TouchableOpacity>
          </View>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Enter Price"
            />
          </View>
        </View>

        {/** ----------  Location  ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Location
          </Text>
        </View>

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Enter file or plot number"
            />
          </View>
        </View>

        {/** ----------  City ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            City
          </Text>
        </View>

        <View style={styles.ListBox}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Select city"
          />
          <TouchableOpacity style={{paddingRight: 15}}>
            <svg.downArrowSvgGray width={10} height={10} fill={'#C4C4C4'} />
          </TouchableOpacity>
        </View>

        {/** ----------  Area ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Area
          </Text>
        </View>

        <View style={styles.ListBox}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Select area"
          />
          <TouchableOpacity style={{paddingRight: 15}}>
            <svg.downArrowSvgGray width={10} height={10} fill={'#C4C4C4'} />
          </TouchableOpacity>
        </View>

        {/* -------------------------------------- */}

        <TouchableOpacity onPress={ProductsListScreen}>
          <View style={styles.SaveButton}>
            <View>
              <Text
                style={styles.BoldText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Save
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#f8f9fa',
  },

  Header: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4681F4',
    paddingTop: 20,
    paddingLeft: 20,
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

  h4Grey: {
    fontSize: 15,
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

  // -------------------------------------------------------------------

  Asteric: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: 'red',
  },

  ListBox: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 7,
    //marginTop: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 8,
    borderColor: '#DFE2E4',
    borderWidth: 1,
    paddingLeft: 5,
  },

  ListMultipleBox: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 7,
    //marginTop: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 8,
    borderColor: '#DFE2E4',
    borderWidth: 1,
    paddingLeft: 5,
  },

  DropDown: {
    width: (windowWidth / 100) * 25,
    height: (windowHeight / 100) * 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRightColor: '#DFE2E4',
    borderRightWidth: 1,
    paddingLeft: 5,
  },

  textInput: {
    // backgroundColor: 'blue',
    width: (windowWidth / 100) * 63,
    height: (windowHeight / 100) * 7,
    alignItems: 'center',
    fontSize: 16,
    paddingLeft: 20,
  },

  SaveButton: {
    width: (windowWidth / 100) * 85,
    height: (windowHeight / 100) * 7,
    flexDirection: 'row',
    backgroundColor: '#4681F4',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 30,
    borderRadius: 40,
    marginTop: 40,
    marginBottom: 30,
  },
});

export default AddProductScreen;
