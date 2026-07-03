export type TemplateSection = "self";

export type TemplateCategoryKey =
  | "push"
  | "avoid"
  | "repair";

export type TemplateCategory = {
  label: string;
  section: TemplateSection;
  randomize: boolean;
  messages: string[];
};

export type TemplateSectionDefinition = {
  key: TemplateSection;
  title: string;
  categoryKeys: TemplateCategoryKey[];
};

export const templates: Record<TemplateCategoryKey, TemplateCategory> = {
  push: {
    label: "받아치고 싶어요",
    section: "self",
    randomize: true,
    messages: [
      "미안해. 지금 내가 너무 몰아붙일 것 같아. 너를 상처 주고 싶지 않아서 잠깐 멈추고 싶어. 내가 조금 차분해지면 함께 이야기해도 괜찮을까?",
      "미안해. 지금 계속 말하면 내가 공격적으로 말할 것 같아. 우리 사이를 더 다치게 하고 싶지 않아. 내가 차분해지면 함께 이야기해도 괜찮을까?",
      "미안해. 내 마음을 바로 말하고 싶은데 지금은 말이 세게 나갈 것 같아. 함께 잘 이야기하고 싶어. 내가 조금 가라앉은 다음에 말해도 괜찮을까?",
      "미안해. 지금은 내가 이기려고 말할 것 같아. 네가 틀렸다는 뜻은 아니고, 내가 차분해진 뒤에 함께 이야기하고 싶어. 괜찮을까?",
      "미안해. 지금 내 마음대로 말하다가 네게 상처 줄 것 같아. 이 얘기를 잘 풀고 싶어서 잠깐 멈추고 싶어. 내가 조금 가라앉은 다음에 함께 이야기해도 괜찮을까?"
    ],
  },

  avoid: {
    label: "피하고 싶어요",
    section: "self",
    randomize: true,
    messages: [
      "미안해. 지금은 말이 잘 안 나와. 너를 피하려는 건 아니야. 내가 조금 차분해지면 이야기하고 싶어. 괜찮을까?",
      "미안해. 지금 바로 말하면 내가 차갑게 피할 것 같아. 이 얘기를 버리려는 건 아니야. 내가 진정되면 다시 이야기해도 괜찮을까?",
      "미안해. 지금은 피하고 싶은 마음이 커서 제대로 말하기 어려워. 너를 밀어내려는 건 아니야. 내가 차분해지면 함께 이야기해도 괜찮을까?",
      "미안해. 지금은 내가 입을 닫아버릴 것 같아. 그래도 이 관계를 소중하게 생각해. 내 감정이 가라앉으면 이야기하고 싶어. 괜찮을까?",
      "미안해. 지금 말하면 내가 회피하거나 차갑게 말할 것 같아. 내가 조금 진정된 다음에 다시 이야기하고 싶어. 괜찮을까?"
    ],
  },

  repair: {
    label: "다시 말하고 싶어요",
    section: "self",
    randomize: true,
    messages: [
      "미안해. 아까 내 말투가 거칠었어. 문제를 피하자는 건 아니지만, 그렇게 말한 건 좋지 않았어. 내가 조금 차분해지면 함께 이야기해도 괜찮을까?",
      "미안해. 아까 내가 감정이 커져서 상처 주는 방식으로 말했어. 그건 좋지 않았어. 너를 상처 주고 싶지 않았어. 내가 조금 가라앉은 다음에 함께 이야기해도 괜찮을까?",
      "미안해. 방금 내가 너무 세게 반응했어. 내 감정은 컸지만 그렇게 표현한 건 좋지 않았어. 내가 차분해지면 함께 다시 말해도 괜찮을까?",
      "미안해. 아까 말이 너무 거칠게 나갔어. 문제와 별개로 그렇게 말한 건 좋지 않았어. 너를 소중하게 생각해. 내가 조금 진정되면 함께 이야기하고 싶어. 괜찮을까?",
      "미안해. 내가 방금 너무 몰아붙이며 말했어. 너를 이기려는 게 아니라, 이 얘기를 잘 풀고 싶어. 내가 차분해지면 함께 이야기하고 싶어. 괜찮을까?"
    ],
  },
};

export const templateSections: TemplateSectionDefinition[] = [
  { key: "self", title: "나는 지금…", categoryKeys: ["push", "avoid", "repair"] },
];
