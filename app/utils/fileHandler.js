import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

const mantraDir = FileSystem.documentDirectory + "mantra/";

const downloadDummy = async () => {
  // prettier-ignore
  const fileUri = "C:Documents\Mantra\resources\meme.jpg"
  const download = FileSystem.createDownloadResumable(fileUri, mantraDir);
  const downloadUri = await download.downloadAsync();
  console.log(`File created @ ${downloadUri}`);
};

export const handleDirectory = async () => {
  const dirInfo = await FileSystem.getInfoAsync(mantraDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(mantraDir);
  }
  downloadDummy();
};

export const audioFileList = async () => {
  let audioList = [];
  let dir = await FileSystem.readDirectoryAsync(mantraDir);

  dir.forEach((file) => {
    audioList.push({ file });
  });
};
