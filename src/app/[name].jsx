import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json';
import { Link } from 'expo-router';
import { Stack } from 'expo-router'
import { useState } from 'react'

export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams()
    const [isInstructionsExpanded, setIsInstructionsExpanded] = useState(false)
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
                <Text style={{color: 'white'}} numberOfLines={isInstructionsExpanded ? 0 : 8}>
                    {exercise.instructions}
                </Text>
                <Text onPress={() => setIsInstructionsExpanded(!isInstructionsExpanded) } style={styles.seeMore}>
                    {isInstructionsExpanded ? 'See less' : 'See more'}
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
    seeMore: {
        alignSelf: 'center',
        padding: 10,
        color: 'gray',
        fontWeight: '700'
    },
    backButton: { 
        marginTop: 10, 
        color: 'white', 
        padding: 10, 
        backgroundColor: '#333',
        width: 100
    }
  });