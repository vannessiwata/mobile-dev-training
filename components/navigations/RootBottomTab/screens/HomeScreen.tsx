import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen: React.FC = () => {
    const insets = useSafeAreaInsets();

    function renderRows() {
        const data: string[] = ['Hello World', 'Singa', "Europe", "Truck", "Simulator", 'Test123', 'Duar', 'Apa aja', 'Train 2023', 'Exposure', 'Zomboid']

        const rowDataComponent = data.map((value, index) =>
            <View key={index} style={styles.row}>
                <Text style={styles.text}>{value}</Text>
            </View>
        );

        return rowDataComponent;
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{
                ...styles.container,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingStart: insets.left,
                paddingEnd: insets.right
            }}>
                {renderRows()}
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
    },
    row: {
        flex: 1,
        borderColor: 'grey',
        borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 20
    }
});
