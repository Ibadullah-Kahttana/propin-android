import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';

// Icons SVG

import ListDrawerIconWhite from '../../assets/Svgs/ProfileScreenSvgs/ListDrawerIcon';
import ImageGrayVector from '../../assets/Svgs/ProfileScreenSvgs/UserVectorGray';
import RightArrowBlack from '../../assets/Svgs/ProfileScreenSvgs/VectorRightBlack';
import RightArrowWhite from '../../assets/Svgs/ProfileScreenSvgs/VectorRightWhite';
import EstimateIcon from '../../assets/Svgs/ProfileScreenSvgs/Estimate';
import CreditCardIcon from '../../assets/Svgs/ProfileScreenSvgs/Credit_card';
import PrivacyIcon from '../../assets/Svgs/ProfileScreenSvgs/Privacy';
import TermsIcon from '../../assets/Svgs/ProfileScreenSvgs/Terms_and_conditions';
import SheildIcon from '../../assets/Svgs/ProfileScreenSvgs/Shield';
import ContactusIcon from '../../assets/Svgs/ProfileScreenSvgs/Contact_us';
import LogoutIcon from '../../assets/Svgs/ProfileScreenSvgs/LogoutWhite';
import CameraIconProfileYellwo from '../../assets/Svgs/ProfileScreenSvgs/CameraIconProfile';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      {/** --------------------      Header       ----------------------*/}

      <View style={styles.LoginHeader}>
        <TouchableOpacity underlayColor={'transparent'}>
          <ListDrawerIconWhite width={20} height={20} />
        </TouchableOpacity>

        <View style={styles.ProfileCard}>
          <View style={styles.ProfileImage}>
            <ImageGrayVector width={28.35} height={28.35} />
            <View style={styles.YellowCameraIcon}>
              <TouchableOpacity>
                <CameraIconProfileYellwo width={21} height={21} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.ProfileInfo}>
            <Text style={[styles.h2Black, styles.PersonName]}>John Doe</Text>
            <Text style={[styles.h4Grey, styles.PersonEmail]}>
              john@example.com
            </Text>
          </View>
        </View>
      </View>

      {/**----------------------    Profile List View MID SECTION    ------------------------*/}

      <View style={styles.MidSection}>
        {/**   ---   ESTIMAET  --- */}
        <TouchableOpacity>
          <View style={styles.MidSectionView}>
            <View style={styles.InnerView1}>
              <EstimateIcon width={24} height={24} />
              <Text style={styles.h4Black}>Balance</Text>
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
                }}>
                <Text style={styles.h4Black}>RS. 400,0000</Text>
              </View>
              <TouchableOpacity>
                <RightArrowBlack width={12} height={12} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {/**   ---   SAVE CARD  --- */}
        <TouchableOpacity>
          <View style={styles.MidSectionView}>
            <View style={styles.InnerView1}>
              <CreditCardIcon width={24} height={24} />
              <Text style={styles.h4Black}>Save Card</Text>
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
                }}>
                <Text style={styles.h4Yellow}> Saved Card </Text>
              </View>
              <TouchableOpacity>
                <RightArrowBlack width={12} height={12} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {/**   ---   CHNAGE PASSWORD  --- */}
        <TouchableOpacity>
          <View style={styles.MidSectionView}>
            <View style={styles.InnerView1}>
              <PrivacyIcon width={24} height={24} />
              <Text style={styles.h4Black}>Change Password</Text>
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
      </View>
      <View style={styles.AppSettingSection}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#E5E5E5',
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

  ProfileInfo: {
    width: (windowWidth / 100) * 62,
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
    paddingLeft: 15,
  },

  h4Yellow: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#F6C000',
  },

  // MID Section -------------------------------------------------------------------
  MidSection: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 27,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'yellow',
    marginTop: (windowHeight / 100) * 6,
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
    height: (windowHeight / 100) * 43,
    //backgroundColor: 'red',
  },
});

export default ProfileScreen;
