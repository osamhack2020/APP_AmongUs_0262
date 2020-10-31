import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity, Animated, Dimensions } from 'react-native';

const { height } = Dimensions.get("window");

class HomeTab1 extends React.Component {
  static defaultProps = {
    draggableRange: { top: height + 0 - 64, bottom: 0 }
  };
  state = {
    selectedId: 0,
    data: [
      { id: 0, banner: require('./a.png'), liked: false, keyWord: '에버랜드' },
      { id: 1, banner: require('./b.png'), liked: false, keyWord: '서울랜드' },
      {
        id: 2,
        banner: require('./x.png'),
        liked: false,
        keyWord: '',
      },
      { id: 3, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 4, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 5, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 6, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 7, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 8, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 9, banner: require('./x.png'), liked: false, keyWord: '' },
    ],
  }

  setItemSelected = (item) => {
    const datamap = this.state.data;
    this.setState({
      data: datamap.map((e) => (e === item ? { ...e, liked: !item.liked } : e)),
    });
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
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
          <TouchableOpacity onPress={() => this.setItemSelected(item)}>
            <Ionicons
              name={item.liked ? 'ios-star' : 'ios-star-outline'}
              size={30}
              color={'gold'}
              style={{ marginLeft: 10, marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedId: item });
              this._panel.show(height + 100);
            }}>
            <Image
              source={this.state.data[item.id].banner}
              style={{
                width: 320,
                height: 80,
                resizeMode: 'stretch',
                //aspectRatio: 4 / 1,
              }}></Image>
          </TouchableOpacity>
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
                <Text>Details</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.panelDetailBtn1} onPress={() => { }}>
                  <Text>즐겨찾기에 추가</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelDetailBtn} onPress={() => { }}>
                  <Text>자세히(웹)</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

class HomeTab2 extends React.Component {
  static defaultProps = {
    draggableRange: { top: height + 0 - 64, bottom: 0 }
  };
  state = {
    selectedId: 0,
    data: [
      { id: 0, banner: require('./c.png'), liked: false, keyWord: '롯데시네마' },
      { id: 1, banner: require('./d.png'), liked: false, keyWord: 'CGV' },
      {
        id: 2,
        banner: require('./x.png'),
        liked: false,
        keyWord: '',
      },
      { id: 3, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 4, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 5, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 6, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 7, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 8, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 9, banner: require('./x.png'), liked: false, keyWord: '' },
    ],
  }

  setItemSelected = (item) => {
    const datamap = this.state.data;
    this.setState({
      data: datamap.map((e) => (e === item ? { ...e, liked: !item.liked } : e)),
    });
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
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
          <TouchableOpacity onPress={() => this.setItemSelected(item)}>
            <Ionicons
              name={item.liked ? 'ios-star' : 'ios-star-outline'}
              size={30}
              color={'gold'}
              style={{ marginLeft: 10, marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedId: item });
              this._panel.show(height + 100);
            }}>
            <Image
              source={this.state.data[item.id].banner}
              style={{
                width: 320,
                height: 80,
                resizeMode: 'stretch',
                //aspectRatio: 4 / 1,
              }}></Image>
          </TouchableOpacity>
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
                <Text>Details</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.panelDetailBtn1} onPress={() => { }}>
                  <Text>즐겨찾기에 추가</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelDetailBtn} onPress={() => { }}>
                  <Text>자세히(웹)</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

class HomeTab3 extends React.Component {
  static defaultProps = {
    draggableRange: { top: height + 0 - 64, bottom: 0 }
  };
  state = {
    selectedId: 0,
    data: [
      { id: 0, banner: require('./e.png'), liked: false, keyWord: '빕스' },
      { id: 1, banner: require('./f.png'), liked: false, keyWord: '아웃백' },
      {
        id: 2,
        banner: require('./x.png'),
        liked: false,
        keyWord: '',
      },
      { id: 3, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 4, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 5, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 6, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 7, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 8, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 9, banner: require('./x.png'), liked: false, keyWord: '' },
    ],
  }

  setItemSelected = (item) => {
    const datamap = this.state.data;
    this.setState({
      data: datamap.map((e) => (e === item ? { ...e, liked: !item.liked } : e)),
    });
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
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
          <TouchableOpacity onPress={() => this.setItemSelected(item)}>
            <Ionicons
              name={item.liked ? 'ios-star' : 'ios-star-outline'}
              size={30}
              color={'gold'}
              style={{ marginLeft: 10, marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedId: item });
              this._panel.show(height + 100);
            }}>
            <Image
              source={this.state.data[item.id].banner}
              style={{
                width: 320,
                height: 80,
                resizeMode: 'stretch',
                //aspectRatio: 4 / 1,
              }}></Image>
          </TouchableOpacity>
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
                <Text>Details</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.panelDetailBtn1} onPress={() => { }}>
                  <Text>즐겨찾기에 추가</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelDetailBtn} onPress={() => { }}>
                  <Text>자세히(웹)</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

class HomeTabO extends React.Component {
  static defaultProps = {
    draggableRange: { top: height + 0 - 64, bottom: 0 }
  };
  state = {
    selectedId: 0,
    data: [
      { id: 0, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 1, banner: require('./x.png'), liked: false, keyWord: '' },
      {
        id: 2,
        banner: require('./x.png'),
        liked: false,
        keyWord: '',
      },
      { id: 3, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 4, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 5, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 6, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 7, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 8, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 9, banner: require('./x.png'), liked: false, keyWord: '' },
    ],
  }

  setItemSelected = (item) => {
    const datamap = this.state.data;
    this.setState({
      data: datamap.map((e) => (e === item ? { ...e, liked: !item.liked } : e)),
    });
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
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
          <TouchableOpacity onPress={() => this.setItemSelected(item)}>
            <Ionicons
              name={item.liked ? 'ios-star' : 'ios-star-outline'}
              size={30}
              color={'gold'}
              style={{ marginLeft: 10, marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedId: item });
              this._panel.show(height + 100);
            }}>
            <Image
              source={this.state.data[item.id].banner}
              style={{
                width: 320,
                height: 80,
                resizeMode: 'stretch',
                //aspectRatio: 4 / 1,
              }}></Image>
          </TouchableOpacity>
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
                <Text>Details</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.panelDetailBtn1} onPress={() => { }}>
                  <Text>즐겨찾기에 추가</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelDetailBtn} onPress={() => { }}>
                  <Text>자세히(웹)</Text>
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
    backgroundColor: "#fffffc",
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
    체험: {
      screen: HomeTab1,
    },
    문화: {
      screen: HomeTab2,
    },
    외식: {
      screen: HomeTab3,
    },
    숙박: {
      screen: HomeTabO,
    },
    레저: {
      screen: HomeTabO,
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