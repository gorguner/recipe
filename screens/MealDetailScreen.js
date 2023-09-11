import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const currentMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(currentMeal);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: currentMeal.imageUrl }} />
      <Text style={styles.title}>{currentMeal.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        duration={currentMeal.duration}
        affordability={currentMeal.affordability}
        complexity={currentMeal.complexity}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={currentMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={currentMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );

  <Text style={styles.title}>Meal Details - {mealId}</Text>;
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: "80%",
  },
});
