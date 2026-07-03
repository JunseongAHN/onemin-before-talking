import type {
  TemplateCategoryKey,
  TemplateSection,
} from "../data/templates";
import { Section, type SectionItem } from "./Section";

export type MainScreenSection = {
  key: TemplateSection;
  title: string;
  items: SectionItem[];
};

type MainScreenProps = {
  sections: MainScreenSection[];
  onSelectCategory: (categoryKey: TemplateCategoryKey) => void;
};

export function MainScreen({ sections, onSelectCategory }: MainScreenProps) {
  return (
    <main className="main-screen">
      <header className="app-header">
        <p className="wordmark">말전1분</p>
        <p className="app-header__tagline">나와 사랑하는 이를 지키는 1분</p>
      </header>

      <section className="main-prompt" aria-labelledby="main-prompt-title">
        <h1 id="main-prompt-title">
          괜찮아요.<br />
          지금은 설명하지 않아도 돼요.
        </h1>
        <p>가장 가까운 상태 하나만 골라주세요.</p>
      </section>

      <div className="sections">
        {sections.map((section) => (
          <Section
            key={section.key}
            sectionKey={section.key}
            title={section.title}
            items={section.items}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </div>
    </main>
  );
}
