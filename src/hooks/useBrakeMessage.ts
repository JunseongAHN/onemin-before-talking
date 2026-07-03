import { useCallback, useEffect, useRef, useState } from "react";
import {
  templates,
  type TemplateCategoryKey,
} from "../data/templates";
import { copyToastMessages } from "../data/toastMessages";
import { copyText } from "../logic/clipboard";
import {
  pickDifferentMessage,
  pickInitialMessage,
} from "../logic/messagePicker";
import { pickCopyToastMessage } from "../logic/toastPicker";

const COPY_FAILURE_MESSAGE =
  "복사하지 못했어요. 문장을 길게 눌러 직접 복사해 주세요.";

export type UseBrakeMessageResult = {
  selectedCategoryKey: TemplateCategoryKey | null;
  currentMessage: string | null;
  isSheetOpen: boolean;
  toastMessage: string | null;
  openCategory: (categoryKey: TemplateCategoryKey) => void;
  closeSheet: () => void;
  showAnotherMessage: () => void;
  copyCurrentMessage: () => Promise<void>;
};

export function useBrakeMessage(): UseBrakeMessageResult {
  const [selectedCategoryKey, setSelectedCategoryKey] =
    useState<TemplateCategoryKey | null>(null);
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }

    setToastMessage(message);
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
      toastTimerRef.current = null;
    }, 2400);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSheetOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSheetOpen]);

  const openCategory = useCallback((categoryKey: TemplateCategoryKey) => {
    setSelectedCategoryKey(categoryKey);
    setCurrentMessage(pickInitialMessage(templates[categoryKey]));
    setIsSheetOpen(true);
  }, []);

  const closeSheet = useCallback(() => {
    setIsSheetOpen(false);
  }, []);

  const showAnotherMessage = useCallback(() => {
    if (selectedCategoryKey === null || currentMessage === null) {
      return;
    }

    setCurrentMessage(
      pickDifferentMessage(templates[selectedCategoryKey], currentMessage),
    );
  }, [currentMessage, selectedCategoryKey]);

  const copyCurrentMessage = useCallback(async () => {
    if (currentMessage === null) {
      return;
    }

    const copied = await copyText(currentMessage);
    const toast = copied
      ? pickCopyToastMessage(copyToastMessages)
      : COPY_FAILURE_MESSAGE;
    showToast(toast);
  }, [currentMessage, showToast]);

  return {
    selectedCategoryKey,
    currentMessage,
    isSheetOpen,
    toastMessage,
    openCategory,
    closeSheet,
    showAnotherMessage,
    copyCurrentMessage,
  };
}
