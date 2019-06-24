import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import { Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

// get array of 25
let itemArray = new Array(25).fill("empty");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: "",
      isScratched: false,
      totalClicked: 0
    };
  }

  // when app loads up
  componentDidMount() {
    this.setState({
      randomNumber: this.generateRandomNumber()
    });
  }
  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({
      randomNumber: randomNumber,
      isScratched: true
    });
    return randomNumber;
  };

  secratchItem = itemNumber => {
    // TODO: decide lucky and unlucky
    if (this.state.totalClicked < 5) {
      if (this.state.randomNumber === itemNumber) {
        itemArray[itemNumber] = "lucky";
        Alert.alert("Congratulations You Won!!!");
      } else {
        itemArray[itemNumber] = "unlucky";
      }
    } else {
      Alert.alert("Oops Sorry You have only 5 Moves...");
    }
    this.setState({ totalClicked: this.state.totalClicked + 1 });
    this.forceUpdate();
  };

  secratchItemIcon = itemNumber => {
    // TODO: generate Icon
    if (itemArray[itemNumber] === "lucky") {
      return "dollar";
    } else if (itemArray[itemNumber] == "unlucky") {
      return "frown-o";
    }

    return "circle";
  };

  secratchItemColor = itemNumber => {
    // TODO: find right color
    if (itemArray[itemNumber] === "lucky") {
      return "green";
    } else if (itemArray[itemNumber] === "unlucky") {
      return "red";
    }

    return "black";
  };

  showAllItem = () => {
    //TODO: Button ---

    itemArray.fill("unlucky");
    itemArray[this.state.randomNumber] = "lucky";
    this.forceUpdate();
  };

  resetGame = () => {
    //TODO: Button --- resetThe Game
    this.setState(
      {
        randomNumber: this.generateRandomNumber(),
        totalClicked: 0
      },
      () => {
        itemArray.fill("empty");
        this.forceUpdate;
      }
    );
  };

  // TODO:
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scratch And Win Game</Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(0);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(0)}
                color={this.secratchItemColor(0)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(1);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(1)}
                color={this.secratchItemColor(1)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(2);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(2)}
                color={this.secratchItemColor(2)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(3);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(3)}
                color={this.secratchItemColor(3)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(4);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(4)}
                color={this.secratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          {/* 6 - 10 */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(6);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(6)}
                color={this.secratchItemColor(6)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(7);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(7)}
                color={this.secratchItemColor(7)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(8);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(8)}
                color={this.secratchItemColor(8)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(9);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(9)}
                color={this.secratchItemColor(9)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(10);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(10)}
                color={this.secratchItemColor(10)}
              />
            </TouchableOpacity>
          </View>
          {/* 6 to 10 */}

          {/* 11 - 15 */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(11);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(11)}
                color={this.secratchItemColor(11)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(12);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(12)}
                color={this.secratchItemColor(12)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(13);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(13)}
                color={this.secratchItemColor(13)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(14);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(14)}
                color={this.secratchItemColor(14)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(15);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(15)}
                color={this.secratchItemColor(15)}
              />
            </TouchableOpacity>
          </View>
          {/* 11 to 15*/}

          {/* 16 - 20 */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(16);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(16)}
                color={this.secratchItemColor(16)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(17);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(17)}
                color={this.secratchItemColor(17)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(18);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(18)}
                color={this.secratchItemColor(18)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(19);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(19)}
                color={this.secratchItemColor(19)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(20);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(20)}
                color={this.secratchItemColor(20)}
              />
            </TouchableOpacity>
          </View>
          {/* 16 to 20 */}

          {/* 21 - 25 */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(21);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(21)}
                color={this.secratchItemColor(21)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(22);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(22)}
                color={this.secratchItemColor(22)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(23);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(23)}
                color={this.secratchItemColor(23)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(24);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(24)}
                color={this.secratchItemColor(24)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.secratchItem(25);
              }}
            >
              <FontAwesome
                size={50}
                name={this.secratchItemIcon(25)}
                color={this.secratchItemColor(25)}
              />
            </TouchableOpacity>
          </View>
          {/* 20 to 25 */}
        </View>

        <Button
          full
          success
          style={{ margin: 4 }}
          onPress={() => {
            this.showAllItem();
          }}
        >
          <Text style={{ color: "#fff", fontSize: 28 }}>Show All Coupen</Text>
        </Button>

        <Button
          full
          danger
          style={{ margin: 4 }}
          onPress={() => {
            this.resetGame();
          }}
        >
          <Text style={{ color: "#fff", fontSize: 28 }}>Try Again</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {},
  row: {
    flexDirection: "row"
  },
  item: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#111",
    minWidth: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    backgroundColor: "#FF3031",
    color: "#fff",
    width: Dimensions.get("window").width,
    marginBottom: 4,
    textAlign: "center",
    padding: 7
  }
});
