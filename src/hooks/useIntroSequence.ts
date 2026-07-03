import { useEffect, useState } from "react";

export type IntroStage = "pause" | "breathe";

type IntroPhase = IntroStage | "leaving" | "complete";

export type UseIntroSequenceResult = {
  isIntroVisible: boolean;
  isIntroLeaving: boolean;
  introStage: IntroStage;
};

export function useIntroSequence(): UseIntroSequenceResult {
  const [phase, setPhase] = useState<IntroPhase>("pause");

  useEffect(() => {
    const breatheTimer = window.setTimeout(() => setPhase("breathe"), 3600);
    const leaveTimer = window.setTimeout(() => setPhase("leaving"), 7200);
    const completeTimer = window.setTimeout(() => setPhase("complete"), 8000);

    return () => {
      window.clearTimeout(breatheTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
    };
  }, []);

  return {
    isIntroVisible: phase !== "complete",
    isIntroLeaving: phase === "leaving",
    introStage: phase === "pause" ? "pause" : "breathe",
  };
}
