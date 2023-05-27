import { StyleSheet, Platform, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const isSmallScreen = width <= 375;

export const gStyles = StyleSheet.create({
  wallpaper: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  header: {
    marginTop: Platform.OS === "android" ? 50 : 30,
  },
  headerTitle: {
    fontSize: isSmallScreen ? 20 : 25,
    textAlign: "center",
    fontFamily: "ArvoBold",
  },
  headerButton: {
    padding: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
  },
  todoPanelContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 15,
    fontFamily: "ArvoRegular",
  },
  todoPanelSection: {
    height: 40,
    marginVertical: 10,
  },
  input: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
  todoItemText: {
    fontSize: 15,
    marginBottom: 15,
    fontFamily: "ArvoRegular",
  },
  todoItemButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  button: {
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonRed: {
    borderColor: "rgba(210, 25, 25, 0.5)",
  },
  buttonRedText: {
    color: "#d21919",
  },
  buttonGreen: {
    borderColor: "rgba(25, 189, 60, 0.5)",
  },
  buttonGreenText: {
    color: "#32a31e",
  },
  buttonBlue: {
    borderColor: "rgba(25, 118, 210, 0.5)",
  },
  buttonBlueText: {
    color: "#1976d2",
  },
});
