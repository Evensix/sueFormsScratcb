
import PageFour from '@/components/shad/page-four';
import * as Camera from "expo-camera";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, View } from 'react-native';

export default function FormFour() {
  const [facing, setFacing] = useState<Camera.CameraType>('back');
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (process.env.EXPO_OS === "web") {
    return (
      <PageFour
        navigate={router}
        onCameraButtonClick={(size) => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
        onButtonClick={(size) => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
      />
    )
  }
  
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera mobile</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  
  return (
    <View style={styles.container}>
      <Camera.CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera.CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});