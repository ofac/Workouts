import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Workout App</Text>
        <Image
          style={styles.logo}
          source={require('./assets/icon-dumbell.png')}
        />
      </View>
      <FlatList 
        data={exercises}
        renderItem={({item, index}) => (
            <View style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{index + 1}. {item.name}</Text>
              <Text style={{color: 'dimgray'}}>
                {item.muscle.charAt(0).toUpperCase() + item.muscle.slice(1)} | {item.equipment.charAt(0).toUpperCase() + item.equipment.slice(1)}
              </Text>
            </View>
        )}
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
    padding: 10,
    paddingTop: 100
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
  },
  exerciseContainer: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    gap: 5,
    marginBottom: 10
  },
  exerciseName: {
    color: '#ccc',
    fontSize: 24, 
    fontWeight: '500'
  }
});
