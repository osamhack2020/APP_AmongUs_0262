import React from 'react';
import {
  Container,
  Header,
  Text,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  ListItem,
  Separator,
  Label,
  List,
  Item,
  CheckBox,
  Input,
} from 'native-base';
import { Image, Alert, StatusBar } from 'react-native';

class LikedScreen extends React.Component {
  state = {
    data: [
      { id: 0, banner: require('./a.png'), liked: false, keyWord: '에버랜드' },
      { id: 1, banner: require('./b.png'), liked: true, keyWord: '서울랜드' },
      { id: 2, banner: require('./c.png'), liked: true, keyWord: '롯데시네마' },
      { id: 3, banner: require('./d.png'), liked: true, keyWord: 'CGV' },
      { id: 4, banner: require('./e.png'), liked: false, keyWord: '빕스' },
      { id: 5, banner: require('./f.png'), liked: true, keyWord: '아웃백' },
      { id: 6, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 7, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 8, banner: require('./x.png'), liked: false, keyWord: '' },
      { id: 9, banner: require('./x.png'), liked: false, keyWord: '' },
    ],
    searchKey: '',
    showId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  search = () => {
    const newShowId = [];
    for (const item of this.state.data) {
      if (item.keyWord.indexOf(this.state.searchKey) > -1) {
        newShowId.push(item.id);
      }
    }
    this.setState({ showId: newShowId });
  };

  itemSelected = (item) => {
    const datamap = this.state.data;
    this.setState({
      data: datamap.map((e) => (e === item ? { ...e, liked: !item.liked } : e)),
    });
  };

  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="#2c6e49"
          style={{ backgroundColor: '#2c6e49' }}>
          <Left>
            <Image
              style={{ width: 30, height: 30, borderRadius: 10 }}
              source={require('../web_hi_res_512.png')}></Image>
          </Left>
          <Body>
            <Text style={{ color: '#fefee3', fontSize: 18 }}>군복</Text>
          </Body>
          <Right></Right>
        </Header>
        <Content style={{ backgroundColor: '#fffffc' }}>
          <Separator bordered>
            <Text style={{ fontSize: 12 }}>즐겨찾기한 혜택</Text>
          </Separator>
          <List
            dataArray={this.state.showId.filter(id => this.state.data[id].liked === true)}
            renderRow={(item) => (
              <ListItem>
                <Icon
                  name={this.state.data[item].liked ? 'ios-star' : 'ios-star-outline'}
                  style={{ color: 'gold', paddingRight: 10 }}
                  onPress={() => this.itemSelected(this.state.data[item])}></Icon>
                <Image
                  source={this.state.data[item].banner}
                  style={{
                    flex: 1,
                    resizeMode: 'stretch',
                    aspectRatio: 4 / 1,
                  }}></Image>
              </ListItem>
            )}></List>
        </Content>
        <StatusBar backgroundColor='#2c6e49' />
      </Container>
    );
  }
}

export default LikedScreen;