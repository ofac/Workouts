
import { StyleSheet, Text, Image, View } from 'react-native';


export default function ExcerciseListItem({item, index}) {
    return (
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{index + 1}. {item.name}</Text>
        <Text style={{color: 'dimgray', textTransform: 'capitalize'}}>
          {item.muscle} | {item.equipment}
        </Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
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