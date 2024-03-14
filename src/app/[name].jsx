import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json';
import { Link } from 'expo-router';
import { Stack } from 'expo-router'

export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams();
    const exercise = exercises.find(item => item.name === params.name);
    if (!exercise) {
        return (
            <Text>Exercise not found!</Text>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <Stack.Screen options={{ title: exercise.name}} />
            <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={{color: 'dimgray', textTransform: 'capitalize'}}>
                    {exercise.muscle} | {exercise.equipment}
                </Text>
                <Text style={{color: 'dimgray', textTransform: 'capitalize', marginBottom: 20}}>
                    {exercise.difficulty}
                </Text>
                <Text style={{color: 'white'}}>
                    {exercise.instructions}
                </Text>
                <Link href={'/'} style={styles.backButton}>
                    <Text> &larr; Back</Text>
                </Link>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111',
        padding: 10
    },
    exerciseContainer: {
        padding: 20,
        borderRadius: 10,
        gap: 5,
        marginBottom: 10
      },
    exerciseName: {
      color: '#ccc',
      fontSize: 24, 
      fontWeight: '500'
    },
    backButton: { 
        marginTop: 120, 
        color: 'white', 
        padding: 10, 
        backgroundColor: '#333',
        width: 100
    }
  });