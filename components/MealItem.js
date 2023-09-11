import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "./MealDetails";

function MealItem({
    id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {

  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
        mealId : id
    }); 
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.mealImage}
                source={{
                  uri: imageUrl,
                }}
              />
            </View>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
          </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  imageContainer: {
    flex: 1,
    //padding: 32,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
 
  buttonPressed: {
    opacity: 0.5,
  },
});
