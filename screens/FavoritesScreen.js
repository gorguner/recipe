import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));
    if (favoriteMeals.length === 0) {
        return <View style={styles.container}>
            <Text style={styles.text}> 
                You do not have any favorites yet.
            </Text>
        </View>
    }
    return <MealsList displayMeals={favoriteMeals}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});