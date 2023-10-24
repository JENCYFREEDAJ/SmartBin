import React, { useState, useEffect } from "react"
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, Dimensions, Animated } from "react-native";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;



const ProfilePage = ({ navigation }) => {

    const [positionAnim, setPositionAnim] = useState(new Animated.Value(30));

    useEffect(() => {
        // Start the fade-in and position animation with a delay
        Animated.timing(positionAnim, {
            toValue: 0,
            duration: 1250,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.bodycontainer}>
                <View style={styles.profileImgContainer}>
                    <View style={styles.profileImgMain}>
                        <Image source={require("../assets/recyclebin.png")} style={styles.profileImg} />
                    </View>
                </View>
                <View style={styles.profileContent}>
                    <Animated.View style={{ ...styles.mainContainer, transform: [{ translateY: positionAnim }] }}>
                        <View style={styles.dataContainer}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Name</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text>gokulashik</Text>
                            </View>
                        </View>
                        <View style={styles.dataContainer}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Address</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text>123 Main St</Text>
                            </View>
                        </View>
                        <View style={styles.dataContainer}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Redeemable Points</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text>500</Text>
                            </View>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('RedeemStore')} style={styles.btn}>
                                <Text style={styles.btnTxt}>Redeem Shop</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('LogHistory')} style={styles.btn}>
                                <Text style={styles.btnTxt}>Log History</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: '#EDF2F3',
    },
    headerContainer: {
        height: '15%',
        width: WIDTH,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        marginLeft: 20,
        fontWeight: 'bold',
        color: '#4D8C1C',
    },
    bodycontainer: {
        height: '85%',
    },
    profileImgContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    profileContent: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    mainContainer: {
        height: "70%",
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor: '#EDF2F3',
        borderRadius: 25,
        borderColor: "transparent",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 4
    },
    profileImg: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    profileImgMain: {
        height: 200,
        width: 200,
        borderWidth: 0,
        backgroundColor: "#EDF2F3",
        borderColor: "transparent",
        borderRadius: 100,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4.59,
        elevation: 4
    },
    dataContainer: {
        width: "80%",
        margin: 15,
    },
    inputContainer: {
        borderWidth: 1, // Create border
        borderColor: "#4D8C1C",
        borderRadius: 8, // Not needed. Just make it look nicer.
        padding: 8, // Also used to make it look nicer
        zIndex: 0, // Ensure border has z-index of 0
    },
    labelContainer: {
        backgroundColor: "#EDF2F3", // Same color as background
        alignSelf: "flex-start", // Have View be same width as Text inside
        paddingHorizontal: 3, // Amount of spacing between border and first/last letter
        marginStart: 10, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
        elevation: 1, // Needed for android
        shadowColor: "#EDF2F3", // Same as background color because elevation: 1 creates a shadow that we don't want
        position: "absolute", // Needed to be able to precisely overlap label with border
        top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
    },
    labelText: {
        color: "#4D8C1C"
    },
    btn: {
        padding: 15,
        margin: 5,
        borderWidth: 1,
        backgroundColor: "#4D8C1C",
        borderColor: "transparent",
        borderRadius: 25,
    },
    btnTxt: {
        color: "white"
    },
    btnContainer: {
        flexDirection: "row"
    }
})