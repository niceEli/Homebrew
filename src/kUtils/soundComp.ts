import { Asset, AudioPlay, AudioPlayOpt, SoundData } from "kaplay-beta";
import k from "../kaboom";

export default function soundComp(
  src: string | SoundData | Asset<SoundData>,
  options?: AudioPlayOpt
): { sound: AudioPlay } {
  let sound = k.play(src, options);
  return {
    sound,
  };
}
