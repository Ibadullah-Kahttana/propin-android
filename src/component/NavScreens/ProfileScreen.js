import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';

import ListDrawerIcon from '../../assets/Svgs/ProfileScreenSvgs/ListDrawerIcon';
import ImageGrayVector from '../../assets/Svgs/ProfileScreenSvgs/UserVectorGray';

import CameraIconProfileYellwo from '../../assets/Svgs/ProfileScreenSvgs/CameraIconProfile';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      {/**                    Header                    */}

      <View style={styles.LoginHeader}>
        <TouchableOpacity underlayColor={'transparent'}>
          <ListDrawerIcon width={20} height={20} />
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
            <Text style={styles.h2Black}>John Doe</Text>
            <Text style={styles.h4Grey}>john@example.com</Text>
          </View>
        </View>
      </View>

      {/**                    Profile List View MID SECTION                   */}

      <View style={styles.MidSection}></View>
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

  h4Grey: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#949494',
  },

  // MID Section -------------------------------------------------------------------
  MidSection: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 27,
    backgroundColor: 'yellow',
    marginTop: (windowHeight / 100) * 6,
  },

  AppSettingSection: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 43,
    //backgroundColor: 'red',
  },
});

export default ProfileScreen;
