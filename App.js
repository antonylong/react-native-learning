import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView, // This is a better 'View' as it incorporates the notch on iPhone, etc
  Alert, // A .alert needs an Alert component
  Pressable, // Use this instead of Button because Button doesn't allow any bloody stylings
  TouchableHighlight, // We have TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight (shared x-platform)
} from "react-native";

export default function App() {
  const handlePress = () => {
    Alert.prompt("Good day", "Tell me a secret", (text) => console.log(text));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonLabel}>CLICK ME!</Text>
      </Pressable>

      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          style={styles.img}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "dodgerblue",
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  img: {
    borderRadius: 15,
  },
});

{
  /* SafeAreaView ensures you don't hit places like the notch in new iPhones */
}
{
  /* If we add prop 'numberOfLines' to Text, this will determine how many lines, if 1, it'll make it into 1 but it goes off the screen (doesn't appear accessible). */
}

// ****** EXAMPLE OF Alert.alert *********
//   const handlePress = () => {
//   Alert.alert("WOAH THERE", "What you up to?", [
//     { text: "Nada", onPress: () => console.log("what") },
//     {
//       text: "Up to no good",
//       onPress: () => console.log("bloody hell"),
//     },
//   ]);
// };

// ****** EXAMPLE OF Alert.prompt *********
// const handlePress = () => {
//   Alert.prompt("Good day", "Tell me a secret", (text) => console.log(text));
// this only works on iOS though.. so the .prompt api only works there
//
// };
