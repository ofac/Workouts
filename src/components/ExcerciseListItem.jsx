
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function ExcerciseListItem({item, index}) {
    return (
      <Link href={`/${item.name}`} asChild>
        <Pressable style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{index + 1}. {item.name}</Text>
          <Text style={{color: 'dimgray', textTransform: 'capitalize'}}>
            {item.muscle} | {item.equipment}
          </Text>
        </Pressable>
      </Link>
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