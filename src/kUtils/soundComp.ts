import { Asset, AudioPlay, AudioPlayOpt, SoundData } from "kaplay";
import k from "../kaplay";

export default function soundComp(
  src: string | SoundData | Asset<SoundData>,
  options?: AudioPlayOpt
): { sound: AudioPlay } {
  let sound = k.play(src, options);
  return {
    sound,
  };
}
