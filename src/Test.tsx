import React from 'react';
import {Alert, Button} from 'react-native';

const NewModuleButton = () => {
  const onPress = () => {
    const url =
      'https://devapi.qweather.com/v7/weather/now?location=101010100&key=a96be082a79341a48d2f1496185f3099';
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        Alert.alert('success', 'request succeed');
        console.log(res);
      })
      .catch(err => {
        Alert.alert('error', JSON.stringify(err));
      });
  };

  return <Button title="Button" color="#841584" onPress={onPress} />;
};

export default NewModuleButton;
