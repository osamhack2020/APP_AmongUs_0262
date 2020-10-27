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
} from 'native-base';
import { Image } from 'react-native';

class SettingsScreen extends React.Component {
  state = {
    check1: true,
    check2: true,
    check3: false,
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
        <Content>
          <Separator bordered>
            <Text style={{ fontSize: 12 }}>개인정보</Text>
          </Separator>
          <ListItem>
            <Item stackedLabel>
              <Label style={{ fontSize: 12 }}>이름</Label>
              <Text style={{ fontSize: 14 }}>홍길동</Text>
            </Item>
          </ListItem>
          <ListItem>
            <Item stackedLabel>
              <Label style={{ fontSize: 12 }}>E-mail</Label>
              <Text style={{ fontSize: 15 }}>osam@osam.kr</Text>
            </Item>
          </ListItem>
          <ListItem>
            <Text style={{ fontSize: 14 }}>비밀번호 변경</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{ fontSize: 12 }}>알림 설정</Text>
          </Separator>
          <ListItem>
            <CheckBox
              checked={this.state.check1}
              color='#4c956c'
              onPress={() =>
                this.setState({ check1: !this.state.check1 })
              }></CheckBox>
            <Body>
              <Text style={{ fontSize: 14 }}>새로운 혜택 등장시 알림</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.check2}
              color="#4c956c"
              onPress={() =>
                this.setState({ check2: !this.state.check2 })
              }></CheckBox>
            <Body>
              <Text style={{ fontSize: 14 }}>
                즐겨찾기한 혜택 마감 임박시 알림
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.check3}
              color='#4c956c'
              onPress={() =>
                this.setState({ check3: !this.state.check3 })
              }></CheckBox>
            <Body>
              <Text style={{ fontSize: 14 }}>야간 알림 수신</Text>
            </Body>
          </ListItem>
          <Separator bordered>
            <Text style={{ fontSize: 12 }}>앱 정보</Text>
          </Separator>
          <ListItem>
            <Text style={{ fontSize: 14 }}>고객 센터</Text>
          </ListItem>
          <ListItem>
            <Text style={{ fontSize: 14 }}>도움말</Text>
          </ListItem>
          <ListItem>
            <Text style={{ fontSize: 14 }}>이용 약관</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
