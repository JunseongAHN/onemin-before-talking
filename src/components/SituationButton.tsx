import type { TemplateCategoryKey, TemplateSection } from "../data/templates";
import { PictogramClash } from "./pictograms/PictogramClash";
import { PictogramDistance } from "./pictograms/PictogramDistance";
import { PictogramReturn } from "./pictograms/PictogramReturn";

const pictograms = {
  push: PictogramClash,
  avoid: PictogramDistance,
  repair: PictogramReturn,
} satisfies Record<TemplateCategoryKey, () => React.JSX.Element>;

type SituationButtonProps = {
  categoryKey: TemplateCategoryKey;
  label: string;
  section: TemplateSection;
  onSelect: (categoryKey: TemplateCategoryKey) => void;
};

export function SituationButton({
  categoryKey,
  label,
  section,
  onSelect,
}: SituationButtonProps) {
  const Pictogram = pictograms[categoryKey];

  return (
    <button
      className={`situation-button situation-button--${section}`}
      type="button"
      onClick={() => onSelect(categoryKey)}
    >
      <Pictogram />
      <span className="situation-button__label">{label}</span>
    </button>
  );
}
