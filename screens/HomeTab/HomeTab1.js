import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, SectionList, AsyncStorage } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>Item #{item.id}</Text>
    </TouchableOpacity>
);

const HomeTab1 = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [DDATA, setDDATA] = useState(
        [
            {
                id: '1',
                liked: false,
            },
            {
                id: '2',
                liked: true,
            },
            {
                id: '3',
                liked: false,
            },
            {
                id: '4',
                liked: true,
            },
            {
                id: '5',
                liked: false,
            },
            {
                id: '6',
                liked: true,
            },
            {
                id: '7',
                liked: false,
            },
            {
                id: '8',
                liked: true,
            },
            {
                id: '9',
                liked: false,
            },
            {
                id: '10',
                liked: true,
            },
            {
                id: '11',
                liked: false,
            },
            {
                id: '12',
                liked: true,
            },
            {
                id: '13',
                liked: false,
            },
        ]
    );

    const setItemSelected = ( item ) => {
        const DDATAmap=DDATA;
        setDDATA(DDATAmap.map(banner => banner === item ? { id: item.id, liked: !(item.liked) } : banner));
    };

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress= {() => setItemSelected(item)}>
                    <Ionicons
                        name={item.liked ? 'ios-star' : 'ios-star-outline'}
                        size={30}
                        color={'gold'}
                        style={{ marginLeft: 10 }}
                    />
                </TouchableOpacity>
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
                data={DDATA}
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