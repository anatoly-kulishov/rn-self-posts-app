import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {AppButton} from "./ui/AppButton";
import {THEME} from "../theme";

export const PhotoPicker = ({onPick}) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            onPick(result.uri)
        }
    };

    const resetImage = async () => {
        setImage(null)
    }

    return (
        <View style={styles.default}>
            {image && <Image source={{uri: image}} style={styles.image}/>}
            <View style={styles.buttonWrap}>
                <AppButton onPress={pickImage}>Загрузить фото</AppButton>
            </View>
            <View style={styles.buttonWrap}>
                <AppButton onPress={resetImage}
                           color={THEME.DANGER_COLOR}>Удалить фото</AppButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        marginBottom: 15
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 15
    },
    buttonWrap: {
        marginBottom: 15
    }
})