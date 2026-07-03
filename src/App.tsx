import { BottomSheet } from "./components/BottomSheet";
import { IntroScreen } from "./components/IntroScreen";
import {
  MainScreen,
  type MainScreenSection,
} from "./components/MainScreen";
import { Toast } from "./components/Toast";
import { adultSheetCopy } from "./data/sheetCopy";
import { templates, templateSections } from "./data/templates";
import { useBrakeMessage } from "./hooks/useBrakeMessage";
import { useIntroSequence } from "./hooks/useIntroSequence";

const mainScreenSections: MainScreenSection[] = templateSections.map((section) => ({
  key: section.key,
  title: section.title,
  items: section.categoryKeys.map((categoryKey) => ({
    key: categoryKey,
    label: templates[categoryKey].label,
  })),
}));

export default function App() {
  const { isIntroVisible, isIntroLeaving, introStage } = useIntroSequence();
  const {
    selectedCategoryKey,
    currentMessage,
    isSheetOpen,
    toastMessage,
    openCategory,
    closeSheet,
    showAnotherMessage,
    copyCurrentMessage,
  } = useBrakeMessage();

  const selectedCategory =
    selectedCategoryKey === null ? null : templates[selectedCategoryKey];

  if (isIntroVisible) {
    return <IntroScreen isLeaving={isIntroLeaving} stage={introStage} />;
  }

  return (
    <>
      <div className="app-shell main-stage">
        <MainScreen
          sections={mainScreenSections}
          onSelectCategory={openCategory}
        />
      </div>

      {isSheetOpen && selectedCategory && currentMessage && (
        <BottomSheet
          topLabel={adultSheetCopy.topLabel}
          label={selectedCategory.label}
          message={currentMessage}
          noteTitle={adultSheetCopy.noteTitle}
          noteText={adultSheetCopy.noteText}
          showAnotherButton={selectedCategory.randomize}
          onCopy={() => void copyCurrentMessage()}
          onAnother={showAnotherMessage}
          onClose={closeSheet}
        />
      )}

      <Toast message={toastMessage} />
    </>
  );
}
