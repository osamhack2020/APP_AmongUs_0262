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
  Item,
  CheckBox,
  Input,
} from 'native-base';
import { Image } from 'react-native';

class SearchScreen extends React.Component {
  state = {
    check1: false,
    check2: true,
    check3: false,
    check: [],
    searchKey: '',
  };

  search = () => {
    alert('asdf');
  };

  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: '#2c6e49' }}
          androidStatusBarColor='#2c6e49'>
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
        <Header searchBar rounded style={{ backgroundColor: '#2c6e49' }}>
          <Item>
            <Button transparent onPress={() => {}}>
              <Icon name='ios-search' />
            </Button>
            <Input
              placeholder='검색어를 입력해주세요'
              onChangeText={(text) =>
                this.setState({ searchKey: text })
              }></Input>
            <Icon name="ios-build-outline" />
          </Item>
        </Header>
        <Content style={{ backgroundColor: '#fefee3' }}>
          <Separator bordered>
            <Text style={{ fontSize: 12 }}>검색 결과</Text>
          </Separator>
          <ListItem>
            <Icon
              name={this.state.check1 ? 'ios-star' : 'ios-star-outline'}
              style={{ paddingRight: 10 }}></Icon>
            <Image
              source={require('../a.png')}
              style={{
                flex: 1,
                resizeMode: 'stretch',
                aspectRatio: 4 / 1,
              }}></Image>
          </ListItem>
          <ListItem>
            <Icon
              name={this.state.check2 ? 'ios-star' : 'ios-star-outline'}
              style={{ paddingRight: 10 }}></Icon>
            <Image
              source={require('../b.png')}
              style={{
                flex: 1,
                resizeMode: 'stretch',
                aspectRatio: 4 / 1,
              }}></Image>
          </ListItem>
          <ListItem>
            <Icon
              name={this.state.check3 ? 'ios-star' : 'ios-star-outline'}
              style={{ paddingRight: 10 }}></Icon>
            <Image
              source={require('../x.png')}
              style={{
                flex: 1,
                resizeMode: 'stretch',
                aspectRatio: 4 / 1,
              }}></Image>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default SearchScreen;
