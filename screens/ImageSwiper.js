import React, { useState, useEffect } from 'react';
import { PaperProvider, Card, Text } from 'react-native-paper';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import RoundProgressBar from './RoundProgressBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ImageSwiper() {
  const progress = 24;

  const img = [
    { uri: require('../assets/images/1.jpg'), key: '1' },
    { uri: require('../assets/images/2.jpg'), key: '2' },
    { uri: require('../assets/images/3.jpg'), key: '3' },
    { uri: require('../assets/images/4.jpg'), key: '4' },
    { uri: require('../assets/images/5.jpg'), key: '5' },
    { uri: require('../assets/images/6.jpg'), key: '6' },
  ];
  const [timer, setTimer] = useState({
    days: 78,
    hours: 24,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        const { days, hours, minutes, seconds } = prevTimer;

        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.swiperContainer}>
            <Swiper
              loop={false}
              dotStyle={styles.paginationDot}
              activeDotStyle={styles.activePaginationDot}>
              {img.map((image, index) => (
                <View style={styles.slide} key={image.key}>
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={image.uri}
                  />
                  <View style={styles.timerContainer}>
                    <View style={styles.timercolumncontainer}>
                      <Text style={styles.timer}>{timer.days}</Text>
                      <Text style={styles.timerText}>DAYS</Text>
                    </View>

                    <View style={styles.timercolumncontainer}>
                      <Text style={styles.timer}>{timer.hours}</Text>
                      <Text style={styles.timerText}>HOURS</Text>
                    </View>
                    <View style={styles.timercolumncontainer}>
                      <Text style={styles.timer}>{timer.minutes}</Text>
                      <Text style={styles.timerText}>MINUTES</Text>
                    </View>
                    <View style={styles.timercolumncontainer}>
                      <Text style={styles.timer}>{timer.seconds}</Text>
                      <Text style={styles.timerText}>SECONDS</Text>
                    </View>
                  </View>
                  <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                      name="arrow-right-top"
                      color="#fff"
                      size={30}
                    />
                    <Icon name="heart" color="red" size={30} />
                  </View>
                </View>
              ))}
            </Swiper>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>
                <RoundProgressBar
                  progress={progress}
                  size={40}
                  strokeWidth={4}
                  backgroundColor="#fff"
                  progressColor="rgba(121, 111, 1, 0.7)"
                />
                <View style={styles.progressLabelContainer}>
                  <Text style={styles.progressLabel}>{progress}%</Text>
                </View>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>£5,000,000 GBD</Text>
              </View>
              <View style={styles.sothebysContainer}>
                <Text style={styles.sothebysText}>Sotheby's</Text>
                <View style={styles.sothebysSubtitleContainer}>
                  <Text style={styles.sothebysSubtitle}>
                    International Reality
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.address}>SHELTON STREET</Text>
              <Text style={styles.address}>COVENT GARDEN</Text>
              <Text style={styles.address}>LONDON</Text>
              <Text style={styles.address}>WC2H</Text>
              <Text style={styles.address}>UNITED KINGDOM</Text>
            </View>
            <View style={styles.idContainer}>
              <Text style={styles.id}>#ZM7861234567</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.button}>
              <View style={styles.buttonContentContainer}>
                <Text style={styles.buttonText}>£25.00 GBD</Text>
              </View>
              <View style={styles.buttonLabelContainer}>
                <Text style={styles.buttonLabel}>BUY ENTRY NOW</Text>
                <View style={styles.buttonIdContainer}>
                  <Text style={styles.buttonId}>#ZM7861234567</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    shadowColor: 'white',
    margin: 10,
    height: '45%',
    borderRadius:40,
  },
  swiperContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  paginationDot: {
    width: 35,
    height: 3,
    borderRadius: 5,
    left: '10%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  activePaginationDot: {
    width: 35,
    height: 3,
    borderRadius: 5,
    left: '10%',
    backgroundColor: 'rgba(543, 345, 76, 0.3)',
  },
  timerContainer: {
    position: 'absolute',
    top: '2%',
    width: '100%',
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'space-evenly',
  },
  timer: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
  },
  timerText: {
    color: '#eee',
    fontSize: 12,
  },
  timercolumncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: '10%',
    top: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  progressBarContainer: {
    bottom: '10%',
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  progressBar: {
    right: '40%',
  },
  progressLabelContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '33%',
  },
  progressLabel: {
    color: '#fff',
    fontSize: 9,
  },
  amountContainer: {
    left: '40%',
  },
  amount: {
    color: '#fff',
    fontSize: 13,
  },
  sothebysContainer: {
    left: '40%',
  },
  sothebysText: {
    fontSize: 18,
    color: '#fff',
  },
  sothebysSubtitleContainer: {},
  sothebysSubtitle: {
    color: '#aaa',
    fontSize: 9,
  },
  addressContainer: {
    bottom: '3%',
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  address: {
    fontSize: 9,
    color: '#fff',
    fontWeight: '700',
  },
  idContainer: {
    alignItems: 'flex-end',
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: '0%',
    right: '3%',
  },
  id: {
    fontSize: 7,
    color: '#fff',
  },
  buttonContainer: {},
  button: {
    backgroundColor: '#000',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    padding: 15,
    top: '1%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContentContainer: {
    marginHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonLabelContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    top: '1%',
    marginHorizontal: '4%',
  },
  buttonText: {
    fontSize: 15,
    alignItems: 'center',
    alignSelf: 'center',
    color: '#fff',
  },
  buttonLabel: {
    fontSize: 15,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIdContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  buttonId: {
    fontSize: 7,
    color: '#fff',
  },
});
