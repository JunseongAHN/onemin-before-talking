import type { TemplateCategory } from "../data/templates";

function pickRandom(messages: string[]): string {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index] ?? "";
}

export function pickInitialMessage(category: TemplateCategory): string {
  if (!category.randomize || category.messages.length <= 1) {
    return category.messages[0] ?? "";
  }

  return pickRandom(category.messages);
}

export function pickDifferentMessage(
  category: TemplateCategory,
  currentMessage: string,
): string {
  if (!category.randomize || category.messages.length <= 1) {
    return category.messages[0] ?? "";
  }

  const alternatives = category.messages.filter(
    (message) => message !== currentMessage,
  );

  return pickRandom(alternatives.length > 0 ? alternatives : category.messages);
}

