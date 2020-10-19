import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, SectionList, AsyncStorage } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
    {
        id: '6',
        title: 'Item #6',
        liked: 0,
    },
    {
        id: '5',
        title: 'Item #5',
        liked: 0,
    },
    {
        id: '4',
        title: 'Item #4',
        liked: 0,
    },
    {
        id: '3',
        title: 'Item #3',
        liked: 0,
    },
    {
        id: '2',
        title: 'Item #2',
        liked: 0,
    },
    {
        id: '1',
        title: 'Item #1',
        liked: 0,
    },
    {
        id: '7',
        title: 'Item #7',
        liked: 0,
    },
    {
        id: '8',
        title: 'Item #8',
        liked: 0,
    },
    {
        id: '9',
        title: 'Item #9',
        liked: 0,
    },
    {
        id: '10',
        title: 'Item #10',
        liked: 0,
    },
    {
        id: '11',
        title: 'Item #11',
        liked: 0,
    },
    {
        id: '12',
        title: 'Item #12',
        liked: 0,
    },
];

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const HomeTab1 = () => {
    const [selectedId, setSelectedId]=useState(null);

    /*for(var i=1;i<=12;++i) {
        AsyncStorage.setItem(i, JSON.stringify({id: i, title: 'ITEM', liked: 0}));
    }*/

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons
                    name={item.liked?'ios-star':'ios-star-outline'}
                    size={30}
                    color={'gold'}
                    onPress={() => setSelectedId(item.id)}
                    style={{ marginLeft: 10 }}
                />
                <Item
                    item={item}
                    onPress={() => setSelectedId(item.id)}
                    style={{ backgroundColor }}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
});

export default HomeTab1;