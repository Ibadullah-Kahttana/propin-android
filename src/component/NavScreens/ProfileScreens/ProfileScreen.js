import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';

// Svg Constants
import svg from '../../../constants/svgs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      {/** --------------------      Header       ----------------------*/}

      <View style={styles.LoginHeader}>
        <TouchableOpacity underlayColor={'transparent'}>
          <svg.listDrawerSvgWhite width={20} height={20} />
        </TouchableOpacity>

        <View style={styles.ProfileCard}>
          <View style={styles.ProfileImage}>
            <svg.ProfileSvg width={28.35} height={28.35} />
            <View style={styles.YellowCameraIcon}>
              <TouchableOpacity>
                <svg.cameraSvgProfile width={21} height={21} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.ProfileInfo}>
            <Text
              style={[styles.h2Black, styles.PersonName]}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              John Doe
            </Text>
            <Text
              style={[styles.h4Grey, styles.PersonEmail]}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              john@example.com
            </Text>
          </View>

          <TouchableOpacity
            style={{paddingLeft: 5}}
            onPress={() => navigation.navigate('ProfileSettings')}>
            <svg.settingsSvg height={30} width={30} />
          </TouchableOpacity>
        </View>
      </View>

      {/**----------------------    Profile List View MID SECTION    ------------------------*/}

      <View style={styles.MidSection}>
        {/**   ---   ESTIMAET  --- */}
        <TouchableOpacity onPress={() => navigation.navigate('AddEmployee')}>
          <View style={styles.MidSectionView}>
            <View style={styles.InnerView1}>
              <svg.estimateSvgProfile width={24} height={24} />
              <Text
                style={[styles.h4Black, styles.cardText]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Balance
              </Text>
            </View>
            <View style={styles.InnerView2}>
              <View
                style={{
                  width: (windowWidth / 100) * 33,
                  height: (windowHeight / 100) * 6,
                  // backgroundColor: 'orange',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: (windowWidth / 100) * 10,
                    height: (windowHeight / 100) * 6,
                    //backgroundColor: 'red',
                    alignItems: 'flex-end',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text
                    style={styles.h4Black}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}>
                    RS.
                  </Text>
                </View>
                <View
                  style={{
                    width: (windowWidth / 100) * 23,
                    height: (windowHeight / 100) * 6,
                    //backgroundColor: 'yellow',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Text
                    style={styles.h4Black}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}>
                    400,0000
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <svg.RightArrowBlack width={12} height={12} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {/**   ---   SAVE CARD  --- */}
        <TouchableOpacity onPress={() => navigation.navigate('EditEmployee')}>
          <View style={styles.MidSectionView}>
            <View style={styles.InnerView1}>
              <svg.creditCardSvgProfile width={24} height={24} />
              <Text style={[styles.h4Black, styles.cardText]}>Save Card</Text>
            </View>
            <View style={styles.InnerView2}>
              <View
                style={{
                  width: (windowWidth / 100) * 33,
                  height: (windowHeight / 100) * 6,
                  //backgroundColor: 'orange',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.h4Yellow}> Saved Card </Text>
              </View>
              <TouchableOpacity>
                <svg.RightArrowBlack width={12} height={12} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {/**   ---   CHNAGE PASSWORD  --- */}
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <View style={styles.MidSectionView}>
            <View style={styles.InnerView1}>
              <svg.privacySvgProfile width={24} height={24} />
              <Text
                style={[styles.h4Black, styles.cardText]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Change Password
              </Text>
            </View>
            <View style={styles.InnerView2}>
              <View
                style={{
                  width: (windowWidth / 100) * 33,
                  height: (windowHeight / 100) * 6,
                  //backgroundColor: 'orange',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}></View>
              <TouchableOpacity>
                <svg.RightArrowBlack width={12} height={12} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Text
        style={[styles.h2Black, styles.AppSettingText]}
        adjustsFontSizeToFit={true}
        numberOfLines={1}>
        App Setting
      </Text>

      {/**----------------------    Profile App Setting Section   ------------------------*/}

      <View style={styles.AppSettingSection}>
        {/**   ---   Terms and Conditions  --- */}
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
          <View style={styles.MidSectionView}>
            <View style={styles.InnerView1}>
              <svg.termsSvgProfile width={24} height={24} />
              <Text
                style={[styles.h4Black, styles.cardText]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Terms & Conditions
              </Text>
            </View>
            <View style={styles.InnerView2}>
              <View
                style={{
                  width: (windowWidth / 100) * 33,
                  height: (windowHeight / 100) * 6,
                  //backgroundColor: 'orange',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}></View>
              <TouchableOpacity>
                <svg.RightArrowBlack width={12} height={12} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {/**   ---   Privacy Policy  --- */}
        <TouchableOpacity onPress={() => navigation.navigate('AddAgency')}>
          <View style={styles.MidSectionView}>
            <View style={styles.InnerView1}>
              <svg.sheildSvgProfile width={24} height={24} />
              <Text
                style={[styles.h4Black, styles.cardText]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Privacy Policy
              </Text>
            </View>
            <View style={styles.InnerView2}>
              <View
                style={{
                  width: (windowWidth / 100) * 33,
                  height: (windowHeight / 100) * 6,
                  //backgroundColor: 'orange',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}></View>
              <TouchableOpacity>
                <RightArrowBlack width={12} height={12} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {/**   ---   Contact  --- */}
        <TouchableOpacity>
          <View style={styles.MidSectionView}>
            <View style={styles.InnerView1}>
              <svg.contactUsSvgProfile width={24} height={24} />
              <Text
                style={[styles.h4Black, styles.cardText]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Contact
              </Text>
            </View>
            <View style={styles.InnerView2}>
              <View
                style={{
                  width: (windowWidth / 100) * 33,
                  height: (windowHeight / 100) * 6,
                  //backgroundColor: 'orange',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}></View>
              <TouchableOpacity>
                <svg.RightArrowBlack width={12} height={12} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {/**   ---   Log Out  --- */}
        <TouchableOpacity>
          <View style={styles.MidSectionViewYellow}>
            <View style={styles.InnerView1}>
              <svg.LogoutSvg width={24} height={24} />
              <Text
                style={[styles.h4White, styles.cardText]}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Log Out
              </Text>
            </View>
            <View style={styles.InnerView2}>
              <View
                style={{
                  width: (windowWidth / 100) * 33,
                  height: (windowHeight / 100) * 6,
                  //backgroundColor: 'orange',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}></View>
              <TouchableOpacity>
                <svg.RightArrowWhite width={12} height={12} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
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

  LoginHeader: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 16,
    backgroundColor: '#4681F4',
    paddingTop: 40,
    paddingLeft: 20,
  },

  ProfileCard: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 11,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'yellow',
    borderRadius: 10,
    position: 'absolute',
    bottom: -45,
    right: 20,
  },

  ProfileImage: {
    width: (windowWidth / 100) * 18,
    height: (windowHeight / 100) * 9,
    backgroundColor: '#F2F2F2',
    borderRadius: 100,
    marginLeft: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  YellowCameraIcon: {
    position: 'absolute',
    right: 1,
    bottom: 1,
  },

  cardText: {
    paddingLeft: 20,
  },

  ProfileInfo: {
    width: (windowWidth / 100) * 50,
    height: (windowHeight / 100) * 7,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
    marginLeft: 18,
  },

  //   Text Color and Styles  -------------------------------------------------------------------

  h2Black: {
    fontSize: 20,
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

  h4Black: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#000000',
    //paddingLeft: 15,
  },

  h4White: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
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

  AppSettingText: {
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },

  // MID Section -------------------------------------------------------------------
  MidSection: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 27,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'yellow',
    marginTop: (windowHeight / 100) * 7,
  },

  MidSectionView: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 7,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#DFE2E4',
    borderWidth: 1,
  },

  MidSectionViewYellow: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 7,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6C000',
    borderRadius: 10,
    borderColor: '#DFE2E4',
    borderWidth: 1,
  },

  InnerView1: {
    width: (windowWidth / 100) * 45,
    height: (windowHeight / 100) * 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    //backgroundColor: 'yellow',
  },

  InnerView2: {
    width: (windowWidth / 100) * 40,
    height: (windowHeight / 100) * 6,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },

  AppSettingSection: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 35,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default ProfileScreen;
