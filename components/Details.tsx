import useDetailedFetch from '@/hooks/useDetailedFetch';
import { StyleSheet, Text, TouchableOpacity, ViewProps, View } from 'react-native';
import { useEffect } from 'react';

type DetailsType = ViewProps & {
  navigation:any,
  route:any
}

export function Details({navigation, route}: DetailsType) {

  const {height, weight, name, types, loading, error} = useDetailedFetch(route.params.url)
  useEffect(() => {
     console.log(height, weight, name, types, loading, error?.message)
  }, [loading])
    console.log(route?.params)
    useDetailedFetch(route?.params)

  return (

    <View >
        <Text>Name: {name}</Text>
        <Text>{"Type(s):"} {types}</Text>
        <Text>Height: {height}m</Text>
        <Text>Weight: {weight}kg</Text>

    </View>
    
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
