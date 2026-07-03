type BottomSheetProps = {
  topLabel: string;
  label: string;
  message: string;
  noteTitle: string;
  noteText: string;
  showAnotherButton: boolean;
  onCopy: () => void;
  onAnother: () => void;
  onClose: () => void;
};

export function BottomSheet({
  topLabel,
  label,
  message,
  noteTitle,
  noteText,
  showAnotherButton,
  onCopy,
  onAnother,
  onClose,
}: BottomSheetProps) {
  return (
    <div className="sheet-layer">
      <div
        className="sheet-backdrop"
        aria-hidden="true"
        onClick={onClose}
      />
      <section
        className="bottom-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-label"
        aria-describedby="sheet-message"
      >
        <div className="bottom-sheet__handle" aria-hidden="true" />
        <p className="bottom-sheet__eyebrow">{topLabel}</p>
        <h2 id="sheet-label">{label}</h2>
        <p key={message} id="sheet-message" className="bottom-sheet__message">
          {message}
        </p>
        <aside className="bottom-sheet__note">
          <p className="bottom-sheet__note-title">{noteTitle}</p>
          <p className="bottom-sheet__note-text">{noteText}</p>
        </aside>
        <div
          className={`bottom-sheet__actions${showAnotherButton ? "" : " bottom-sheet__actions--compact"}`}
        >
          <button className="action-button action-button--primary" type="button" onClick={onCopy}>
            복사하기
          </button>
          {showAnotherButton && (
            <button className="action-button action-button--secondary" type="button" onClick={onAnother}>
              다른 문장
            </button>
          )}
          <button className="action-button action-button--close" type="button" onClick={onClose}>
            닫기
          </button>
        </div>
      </section>
    </div>
  );
}
