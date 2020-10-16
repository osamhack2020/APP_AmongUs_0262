import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DATA = [
    {
        id: "6",
        title: "Item #6",
    },
    {
        id: "5",
        title: "Item #5",
    },
    {
        id: "4",
        title: "Item #4",
    },
    {
        id: "3",
        title: "Item #3",
    },
    {
        id: "2",
        title: "Item #2",
    },
    {
        id: "1",
        title: "Item #1",
    },
    {
        id: "7",
        title: "Item #7",
    },
    {
        id: "8",
        title: "Item #8",
    },
    {
        id: "9",
        title: "Item #9",
    },
    {
        id: "10",
        title: "Item #10",
    },
    {
        id: "11",
        title: "Item #11",
    },
    {
        id: "12",
        title: "Item #12",
    },
];

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const HomeTab4 = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
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
    },
});

export default HomeTab4;