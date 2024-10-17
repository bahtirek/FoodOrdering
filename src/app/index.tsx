import { View, Text } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { Link, Redirect } from 'expo-router';

export default function TabIndex() {
  return <Redirect href={'/(user)/'}/>
}