import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity, Animated, Dimensions } from 'react-native';

const { height } = Dimensions.get("window");

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>Item #{item.id}</Text>
  </TouchableOpacity>
);

class HomeTab1 extends React.Component {

  static defaultProps = {
    draggableRange: { top: height + 0 - 64, bottom: 0 }
  };

  state = {
    data: [{ id: '1', liked: false, }, { id: '2', liked: false, }, { id: '3', liked: false, }, { id: '4', liked: false, }, { id: '5', liked: false, }, { id: '6', liked: false, }, { id: '7', liked: false, }, { id: '8', liked: false, }, { id: '9', liked: false, }, { id: '10', liked: false, }, { id: '11', liked: false, }, { id: '12', liked: false, }, { id: '13', liked: false, },],
    selectedId: 0,
  }

  setItemSelected = (item) => {
    const datamap = this.state.data;
    this.setState({ data: datamap.map(banner => banner === item ? { id: item.id, liked: !(item.liked) } : banner) });
  };

  _draggedValue = new Animated.Value(0);

  render() {
    const { top, bottom } = this.props.draggableRange;
    const textTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 8],
      extrapolate: "clamp"
    });
    const textTranslateX = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, -12],
      extrapolate: "clamp"
    });
    const textScale = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [1, 0.7],
      extrapolate: "clamp"
    });

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === this.state.selectedId ? '#6e3b6e' : '#f9c2ff';
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.setItemSelected(item)}>
            <Ionicons
              name={item.liked ? 'ios-star' : 'ios-star-outline'}
              size={30}
              color={'gold'}
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
          <Item
            item={item}
            onPress={() => { this.setState({ selectedId: item }); this._panel.show(height + 100) }}
            style={{ backgroundColor }}
          />
        </View>
      );
    };

    return (
      <View style={styles.newcontainer}>
        <StatusBar backgroundColor='#2c6e49' />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={this.state.selectedId} />
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          snappingPoints={[0]}
          height={height + 30}
          friction={0.9}>
          <View style={styles.panelpanel}>
            <View style={styles.panelpanelHeader}>
              <Animated.View
                style={{
                  transform: [
                    { translateY: textTranslateY },
                    { translateX: textTranslateX },
                    { scale: textScale }
                  ]
                }}>
                <Text style={styles.paneltextHeader}>Sliding Up Panel</Text>
              </Animated.View>
            </View>
            <View style={styles.panelcontainer}>
              <View style={{ height: height - 300 }}>
              <Text>Bottom sheet content</Text>
              <Text>Bottom sheet content</Text>
              <Text>Bottom sheet content</Text>
              <Text>Bottom sheet content</Text>
              <Text>Bottom sheet content</Text>
              <Text>Bottom sheet content</Text>
              <Text>Bottom sheet content</Text>
              <Text>Bottom sheet content</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.panelDetailBtn1} onPress={() => { }}>
                  <Text>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelDetailBtn} onPress={() => { }}>
                  <Text>Show Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  newcontainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    width: 300,
  },
  panelcontainer: {
    flex: 1,
    backgroundColor: "#fefee3",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
    marginTop: 50
  },
  panelpanel: {
    flex: 1,
    backgroundColor: "#fefee3",
    position: "relative"
  },
  panelpanelHeader: {
    height: 100,
    backgroundColor: "#4c956c",
    justifyContent: "flex-end",
    padding: 24
  },
  paneltextHeader: {
    fontSize: 28,
    color: "#fefee3"
  },
  panelDetailBtn1: {
    width: '35%',
    backgroundColor: '#ffc9b9',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    marginRight: 20
  },
  panelDetailBtn: {
    width: '35%',
    backgroundColor: '#ffc9b9',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  },
};

const HomeTabNav = createMaterialTopTabNavigator(
  {
    Cat1: {
      screen: HomeTab1,
    },
    Cat2: {
      screen: HomeTab1,
    },
    Cat3: {
      screen: HomeTab1,
    },
    Cat4: {
      screen: HomeTab1,
    },
    Cat5: {
      screen: HomeTab1,
    },
  },
  {
    defaultNavigationOptions: () => ({
      tabBarOptions: {
        style: {
          backgroundColor: '#2c6e49',
        },
      },
    }),
  },
);
const HomeContainer = createAppContainer(HomeTabNav);
class HomeScreen extends React.Component {

  render() {
    return <HomeContainer></HomeContainer>
  }
}
export default HomeScreen;