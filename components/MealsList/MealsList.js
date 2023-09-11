import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../MealItem";


function MealsList({displayMeals, mealSelected}) {
    function mealSelected(mealId) {
        navigation.navigate("MealDetail", {
          mealId: mealId,
        });
        console.log("meal selected");
      }
      
    function renderMealItem(itemData) {
        const mealItemProps = {
          id: itemData.item.id,
          title: itemData.item.title,
          imageUrl: itemData.item.imageUrl,
          duration: itemData.item.duration,
          complexity: itemData.item.complexity,
          affordability: itemData.item.affordability,
          onPress: mealSelected,
        };
        return <MealItem {...mealItemProps} />;
      }

    return (
        <View style={styles.container}>
          <FlatList
            data={displayMeals}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });