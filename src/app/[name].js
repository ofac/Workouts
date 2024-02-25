import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json';
import { Link } from 'expo-router';

export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams();
    const exercise = exercises.find(item => item.name === params.name);
    if (!exercise) {
        return (
            <Text>Exercise not found!</Text>
        )
    }
    return (
        <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={{color: 'dimgray', textTransform: 'capitalize'}}>
                {exercise.muscle} | {exercise.equipment}
            </Text>
            <Link href={'/'}>
                <Text>Back</Text>
            </Link>
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