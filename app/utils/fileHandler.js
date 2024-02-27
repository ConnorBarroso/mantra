import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

const mantraDir = FileSystem.documentDirectory + "mantra/";

export const audioFileList = async () => {
  let audioList = [];

  try {
    const { exists } = await FileSystem.getInfoAsync(mantraDir);

    if (exists) {
      console.log("Directory exists");
      const list = await FileSystem.readDirectoryAsync(mantraDir);
      console.log({ list });

      // Process each file in the directory
      audioList = list.map((file) => ({ file }));
    } else {
      console.error("Directory doesn't exist");
    }
  } catch (e) {
    console.error(e);
  }

  return audioList;
};

export const handleStartRecording = async (permission) => {
  if (!permission) {
    console.error("No permission to use microphone");
    return;
  }

  const recording = new Audio.Recording();

  try {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
      playThroughEarpieceAndroid: true,
    });

    await recording.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    await recording.startAsync();

    console.log("Recording Started");

    return recording;
  } catch (e) {
    console.error(e);
  }
};

const handlePauseRecording = async (recording) => {
  try {
    if (!recording) {
      console.error("No recording to stop");
      return;
    }

    await recording.pauseAsync();
  } catch (e) {
    console.error(e);
  }
};

const handleResumeRecording = async (recording) => {
  try {
    if (
      recording &&
      recording.getStatusAsync().then((status) => !status.isRecording)
    ) {
      await recording.startAsync();
      console.log("resumed");
    } else {
      console.warn("No recording to resume");
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const handleSaveRecording = async (recording) => {};

export const handleDirectory = async () => {
  try {
    const { exists } = await FileSystem.getInfoAsync(mantraDir);

    if (!exists) {
      console.error("Directory not found, creating directory...");
      await FileSystem.makeDirectoryAsync(mantraDir);
    }
  } catch (e) {
    console.error(e);
  }
};
