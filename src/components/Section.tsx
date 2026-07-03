import type {
  TemplateCategoryKey,
  TemplateSection,
} from "../data/templates";
import { SituationButton } from "./SituationButton";

export type SectionItem = {
  key: TemplateCategoryKey;
  label: string;
};

type SectionProps = {
  sectionKey: TemplateSection;
  title: string;
  items: SectionItem[];
  onSelectCategory: (categoryKey: TemplateCategoryKey) => void;
};

export function Section({
  sectionKey,
  title,
  items,
  onSelectCategory,
}: SectionProps) {
  return (
    <section className={`situation-section situation-section--${sectionKey}`}>
      <h2>{title}</h2>
      <div className="situation-section__buttons">
        {items.map((item) => (
          <SituationButton
            key={item.key}
            categoryKey={item.key}
            label={item.label}
            section={sectionKey}
            onSelect={onSelectCategory}
          />
        ))}
      </div>
    </section>
  );
}

