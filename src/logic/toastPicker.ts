const FALLBACK_COPY_TOAST_MESSAGE =
  "복사했어요.\n지금은 여기까지만 해도 괜찮아요.";

export function pickCopyToastMessage(messages: readonly string[]): string {
  if (messages.length === 0) {
    return FALLBACK_COPY_TOAST_MESSAGE;
  }

  const index = Math.floor(Math.random() * messages.length);
  return messages[index] ?? FALLBACK_COPY_TOAST_MESSAGE;
}

