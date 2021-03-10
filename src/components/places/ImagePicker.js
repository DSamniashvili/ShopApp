import React, { useState, useEffect } from 'react';
import { View, Text, Button, Platform, PermissionsAndroid, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = ({ saveFilePath }) => {
    const [filePath, setFilePath] = useState({});

    useEffect(() => {
        saveFilePathBound()
    }, [filePath])

    const saveFilePathBound = () => {
        saveFilePath(filePath);
    }


    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const getResponse = response => {
        if (response.didCancel) {
            console.log('User cancelled camera picker');
            return;
        } else if (response.errorCode == 'camera_unavailable') {
            console.log('Camera not available on device');
            return;
        } else if (response.errorCode == 'permission') {
            console.log('Permission not satisfied');
            return;
        } else if (response.errorCode == 'others') {
            console.log(response.errorMessage);
            return;
        }
    }

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();

        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);

                getResponse(response);
                setFilePath(response);
            });
        }
    };

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            getResponse(response);
            setFilePath(response);
        });
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.titleText}>Choose your image</Text>

            <View style={styles.container}>
                {
                    filePath && Object.keys(filePath).length > 0 ?
                        <Image
                            source={{ uri: filePath.uri }}
                            style={styles.imageStyle}
                        /> :
                        null
                }

                <Text style={styles.textStyle}>{filePath.uri}</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonStyle}
                    onPress={() => captureImage('photo')}>
                    <Text style={styles.textStyle}>
                        Launch Camera for Image
              </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonStyle}
                    onPress={() => captureImage('video')}>
                    <Text style={styles.textStyle}>
                        Launch Camera for Video
              </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonStyle}
                    onPress={() => chooseFile('photo')}>
                    <Text style={styles.textStyle}>Choose Image</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonStyle}
                    onPress={() => chooseFile('video')}>
                    <Text style={styles.textStyle}>Choose Video</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 5,
        marginVertical: 10,
        width: 250,
    },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
    },
});

export default ImagePicker;

//     const takeImageHandler = () => {

//     }

//     return (
//         <View>
//             <View><Text>No Image picked.</Text></View>
//             <Button
//                 title="Add an image"
//                 onPress={takeImageHandler}
//                 color={COLORS.NAVYBLUE}
//             />
//         </View>
//     )
// }

