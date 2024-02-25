import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import exercises from '../../assets/data/exercises.json';
import ExcerciseListItem from '../../src/components/ExcerciseListItem';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Workout App</Text>
        <Image
          style={styles.logo}
          source={require('../../assets/icon-dumbell.png')}
        />
      </View>
      <FlatList 
        data={exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item, index}) => <ExcerciseListItem item = {item} index={index} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    padding: 10
  },
  containerHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    color: '#ccc',
    fontSize: 40,
  },
  logo: {
    width: 141,
    height: 99,
    margin: 20
  }
});
