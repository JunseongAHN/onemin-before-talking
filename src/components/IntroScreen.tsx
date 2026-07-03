import type { IntroStage } from "../hooks/useIntroSequence";

type IntroScreenProps = {
  isLeaving: boolean;
  stage: IntroStage;
};

export function IntroScreen({ isLeaving, stage }: IntroScreenProps) {
  return (
    <main className={`intro-screen${isLeaving ? " intro-screen--leaving" : ""}`}>
      <div className="intro-screen__breath" aria-hidden="true">
        <div className="intro-screen__circle" />
      </div>

      <div className="intro-screen__stage" aria-live="polite">
        <p key={stage}>
          {stage === "pause" && (
            <>
              괜찮아요.<br />
              우리 조금 멈춰볼까요?
            </>
          )}
          {stage === "breathe" && (
            <>
              숨을 한 번 들이쉬고<br />
              천천히 내쉬어봐요.
            </>
          )}
        </p>
      </div>
    </main>
  );
}
