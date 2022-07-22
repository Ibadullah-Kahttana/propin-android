import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';

import axios from 'axios';
import {BASE_URL} from '../../../../config';

import svg from '../../../../constants/svgs';
import color from '../../../../constants/colors';

//------  Netwrok logger
import NetworkLogger from 'react-native-network-logger';
import {AuthContext} from '../../../../context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EmployeeInfoScreen = ({navigation}) => {
  const [employeData, setEmployeData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const pullMe = () => {
    setRefresh(true);
    getAllEmployess();
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  const addEmployee = () => {
    navigation.navigate('AddEmployee');
  };

  const EditEmployee = id => {
    navigation.navigate('EditEmployee', {
      keyID: id,
    });
  };

  const {userToken} = useContext(AuthContext);

  const getAllEmployess = () => {
    axios
      .get(`${BASE_URL}/employee`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(response => {
        let employeData = response.data.data;
        setEmployeData(employeData);
        console.log('Employee Data = ', JSON.stringify(employeData, null, 2));
      })
      .catch(error => {
        console.log('Employe Info Error = ', error);
      });
  };

  console.log('-----------------------------------', employeData);
  useEffect(() => {
    getAllEmployess();
  }, []);

  const deleteEmploye = id => {
    axios
      .delete(`${BASE_URL}/employee/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(response => {
        let employeData = response.data.data;
        console.log(
          'Employee Delete Data = ',
          JSON.stringify(employeData, null, 2),
        );
        alert('Employee Deleted Successfull');
      })
      .catch(error => {
        console.log('Employe Delete Daata Error = ', error);
      });
  };

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

        <Text
          style={styles.h2White}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          {'       '}Employee Info
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
            paddingRight: 20,
          }}
          onPress={addEmployee}>
          <Text
            style={styles.h1White}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            + Add
          </Text>
        </TouchableOpacity>
      </View>

      {/**   Scroll View Horizontal   */}

      <View style={styles.HorizontalScrollView}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {/*  Filters BOX */}
          <TouchableOpacity>
            <View style={styles.GrayBoxFilter}>
              <svg.filterSvgPd
                height={15}
                width={15}
                alignItems={'center'}
                justifyContent={'center'}
              />
              <Text
                style={styles.h4Black}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {' '}
                {'  '}Filters{' '}
              </Text>
            </View>
          </TouchableOpacity>

          {/*  Sort BOX */}
          <TouchableOpacity>
            <View style={styles.GrayBoxSort}>
              <svg.sortSvgPd
                height={20}
                width={20}
                alignItems={'center'}
                justifyContent={'center'}
              />
              <Text
                style={styles.h4Black}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {'  '}Sort{' '}
              </Text>
            </View>
          </TouchableOpacity>

          {/*  Designation BOX */}
          <TouchableOpacity>
            <View style={styles.GrayBoxDesignation}>
              <Text
                style={styles.h4Black}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {' '}
                Designation {'  '}
              </Text>
              <svg.downArrowSvgDarkGray
                height={9}
                width={9}
                alignItems={'center'}
                justifyContent={'center'}
              />
            </View>
          </TouchableOpacity>

          {/*  Date BOX */}
          <TouchableOpacity style={{marginRight: 25}}>
            <View style={styles.GrayBoxDate}>
              <Text
                style={styles.h4Black}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {' '}
                Date{'  '}{' '}
              </Text>
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
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
          }>
          <FlatList
            data={employeData}
            renderItem={({item}) => (
              <View elevation={8} style={styles.plotDescriptionBox}>
                <View style={styles.plotDescriptionBoxInner}>
                  <View style={styles.profyleInfo}>
                    <View style={styles.profileImage}>
                      <svg.UserSvg width={40} height={40} />
                      <View style={styles.YellowCameraIcon}></View>
                    </View>

                    <View style={styles.profyleNameEmail}>
                      <Text
                        style={styles.h1blackBold}
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Text
                        style={styles.h4Grey}
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}>
                        {item.email}
                      </Text>
                    </View>

                    <View style={styles.profyleSwitch}></View>
                  </View>
                  <View style={styles.PhoneDesignation}>
                    <View style={styles.PhoneBox}>
                      <svg.phoneSvg width={17} height={17} />
                      <Text
                        style={styles.h5Grey}
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}>
                        {' '}
                        {item.phone}
                      </Text>
                    </View>
                    <View style={styles.DesignationBox}>
                      <svg.bagSvg width={17} height={17} />
                      <Text
                        style={styles.h5Grey}
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}>
                        {item.designation === null
                          ? ' '
                          : item.designation.name}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.DateButton}>
                    <View style={styles.DateBox}>
                      <svg.DateSvg width={17} height={17} fill={'#7D8088'} />
                      <Text
                        style={styles.h5Grey}
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}>
                        {'    '}
                        {item.date_of_joining}
                      </Text>
                    </View>
                    <View style={styles.ButtonBox}>
                      <TouchableOpacity onPress={() => EditEmployee(item.id)}>
                        <View style={styles.EditButton}>
                          <svg.penIconSvgPd width={15} height={15} />
                          <Text
                            style={styles.h5White}
                            adjustsFontSizeToFit={true}
                            numberOfLines={1}>
                            Edit
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => deleteEmploye(item.id)}>
                        <View style={styles.DeleteButton}>
                          <svg.deleteboxSvgPd width={15} height={15} />
                          <Text
                            style={styles.h5White}
                            adjustsFontSizeToFit={true}
                            numberOfLines={1}>
                            Delete
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />

          {/**  ---  LOOP --- */}

          {/* {employeData.map((item, index) => (
            <View elevation={8} style={styles.plotDescriptionBox}>
              <View style={styles.plotDescriptionBoxInner}>
                <View style={styles.profyleInfo}>
                  <View style={styles.profileImage}>
                    <svg.UserSvg width={40} height={40} />
                    <View style={styles.YellowCameraIcon}></View>
                  </View>

                  <View style={styles.profyleNameEmail}>
                    <Text
                      style={styles.h1blackBold}
                      adjustsFontSizeToFit={true}
                      numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Text
                      style={styles.h4Grey}
                      adjustsFontSizeToFit={true}
                      numberOfLines={1}>
                      {item.email}
                    </Text>
                  </View>

                  <View style={styles.profyleSwitch}></View>
                </View>

                <View style={styles.PhoneDesignation}>
                  <View style={styles.PhoneBox}>
                    <svg.phoneSvg width={17} height={17} />
                    <Text
                      style={styles.h5Grey}
                      adjustsFontSizeToFit={true}
                      numberOfLines={1}>
                      {' '}
                      {item.phone}
                    </Text>
                  </View>
                  <View style={styles.DesignationBox}>
                    <svg.bagSvg width={17} height={17} />
                    <Text
                      style={styles.h5Grey}
                      adjustsFontSizeToFit={true}
                      numberOfLines={1}>
                      {item.employeeDesignation}
                    </Text>
                  </View>
                </View>

                <View style={styles.DateButton}>
                  <View style={styles.DateBox}>
                    <svg.DateSvg width={17} height={17} fill={'#7D8088'} />
                    <Text
                      style={styles.h5Grey}
                      adjustsFontSizeToFit={true}
                      numberOfLines={1}>
                      {'    '}
                      {item.Dateemploye}
                    </Text>
                  </View>
                  <View style={styles.ButtonBox}>
                    <TouchableOpacity onPress={EditEmployee}>
                      <View style={styles.EditButton}>
                        <svg.penIconSvgPd width={15} height={15} />
                        <Text
                          style={styles.h5White}
                          adjustsFontSizeToFit={true}
                          numberOfLines={1}>
                          Edit
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.DeleteButton}>
                        <svg.deleteboxSvgPd width={15} height={15} />
                        <Text
                          style={styles.h5White}
                          adjustsFontSizeToFit={true}
                          numberOfLines={1}>
                          Delete
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))} */}

          <NetworkLogger />
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

  GrayBoxDesignation: {
    width: (windowWidth / 100) * 30,
    height: (windowHeight / 100) * 5,
    backgroundColor: '#EBECEC',
    borderRadius: 10,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  GrayBoxDate: {
    width: (windowWidth / 100) * 20,
    height: (windowHeight / 100) * 5,
    backgroundColor: '#EBECEC',
    borderRadius: 10,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //   Text Color and Styles  -------------------------------------------------------------------

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

  h1blackBold: {
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#000000',
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

  h5Gray: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    color: '#949494',
    paddingBottom: 2,
    //paddingLeft: 15,
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
    padding: 10,
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

  plotDescriptionBoxInner: {
    width: (windowWidth / 100) * 85,
    height: (windowHeight / 100) * 18,
    backgroundColor: '#FFFFFF',
    //backgroundColor: 'yellow',
  },

  //----    Profile ------------------

  profyleInfo: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 8,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
  },

  profileImage: {
    width: (windowWidth / 100) * 14,
    height: (windowHeight / 100) * 7,
    backgroundColor: '#F2F2F2',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profyleNameEmail: {
    width: (windowWidth / 100) * 49,
    height: (windowHeight / 100) * 7,
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 15,
  },

  profyleSwitch: {
    width: (windowWidth / 100) * 22,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'black',
  },

  //  ------   Phone Designation   ------

  PhoneDesignation: {
    width: (windowWidth / 100) * 85,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  PhoneBox: {
    width: (windowWidth / 100) * 30,
    height: (windowHeight / 100) * 5,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  DesignationBox: {
    width: (windowWidth / 100) * 45,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  // ----- Date Button
  DateButton: {
    width: (windowWidth / 100) * 85,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  DateBox: {
    width: (windowWidth / 100) * 30,
    height: (windowHeight / 100) * 3,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },

  ButtonBox: {
    width: (windowWidth / 100) * 45,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  EditButton: {
    width: (windowWidth / 100) * 17,
    height: (windowHeight / 100) * 3.5,
    backgroundColor: '#FDC32D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
  },

  DeleteButton: {
    width: (windowWidth / 100) * 22,
    height: (windowHeight / 100) * 3.5,
    backgroundColor: '#E42025',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
  },
});

export default EmployeeInfoScreen;
