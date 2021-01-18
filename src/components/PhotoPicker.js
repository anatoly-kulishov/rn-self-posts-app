import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {AppButton} from "./ui/AppButton";

export const PhotoPicker = (props, {onPick}) => {
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
            aspect: [16, 9],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            onPick(img.uri)
        }
    };

    return (
        <View style={{...styles.default, ...props.style}}>
            {image && <Image style={styles.image} source={{uri: image}}/>}
            <AppButton onPress={pickImage}>Загрузить фото</AppButton>
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
    }
})