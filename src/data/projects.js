const projects = [
  {
    slug: 'hey-canbot',
    title: '시나리오 기반 AI 학습 챗봇',
    summary: 'LLM 기반 멀티턴 학습 챗봇 PoC→정식 구조 설계·개발(단독). 상태 기반 흐름, 예외·힌트 모듈, 프롬프트 최적화로 품질·속도 개선',
    results: '예외 흐름 실패율 <5%, 응답 속도 15% 개선, 목표 100% 충족',
    period: '2024.10 ~ 2025.03',
    problem: '룰베이스 챗봇의 한계(유연성·예외 대응 부족)를 해결하고 학습 활동에 맞는 시나리오형 대화 서비스가 신규 서비스로 필요',
    approach: '이 서비스의 핵심은 학습 활동별로 다양한 시나리오를 반영하고, 예외 상황에 유연하게 대응하는 챗봇을 만드는 것이었습니다. \n이를 위해 먼저 각 학습 활동이 실제로 어떤 흐름을 가져야 하는지, 어떤 조건에서 분기가 이루어지는지, \n이를 어떻게 하면 컨텍스트로 혹은 로직으로 적용할 수 있을지에 대해서 가장 많이 고민을 했습니다. \n먼저 활동별 요구사항들을 분석하고, 각각의 flow chart 를 그리면서 흐름과 조건을 정의 했고, \nLLM답변을 일관성 있게 받기 위해 대화 히스토리, 프롬프팅 기법, 파라미터들을 조정하며 테스트를 진행했습니다.\n이 테스트를 기반으로 LLM 중심의 시나리오 대화 모듈을 설계하고, 대화의 흐름을 안정적으로 제어하기 위해 state 기반 멀티턴 구조를 도입했습니다.\n또한 사용자 오답이나 비정상 응답에 자연스럽게 대응하기 위해 욕설필터, 예외 처리 로직과 힌트 제공 기능을 별도로 구축하여 대화 중단을 최소화하였습니다.\n이후 PoC 단계에서 테스트 시나리오를 반복적으로 검증하며, 흐름 오류·토큰 비용·응답 시간 등을 지속적으로 최적화 하였습니다',
    features: [
      '대화 상태 기반 멀티턴 흐름 트래킹',
      '활동별 시나리오(7종) 및 테스트 케이스',
      '예외 처리 및 힌트 제공 모듈',
      '프롬프트 구조·토큰 최적화',
      'GPT-4o 수준별 대화모델로 파인튜닝(A1/B1/B2)'
    ],
    resultsList: [
      "예외 흐름 실패율 5% 미만",
      "응답 시간 15% 개선",
      "핵심 구조 정식 서비스로 채택"
    ],
    en: {
      title: 'Scenario-based AI Learning Chatbot',
      summary: 'LLM-powered multi-turn learning chatbot from PoC to production design. State-based flow, exception/hint modules, and prompt optimization.',
      results: 'Exception failures <5%, 15% faster responses, hit all goals',
      problem: 'Rule-based bots lacked flexibility and exception handling; needed scenario-driven conversations for learning activities.',
      approach: 'Designed stateful multi-turn engine, authored flows/tests per activity, built exception/hint modules, optimized prompts/tokens, and tried fine-tuning.',
      features: [
        'State-tracked multi-turn flows',
        '7 activity-specific scenarios & test cases',
        'Exception handling and hint module',
        'Prompt structure and token optimization',
        'Level-specific fine-tuning (A1/B1/B2)'
      ],
      resultsList: [
        'Exception flows under 5% failure',
        '15% faster response time',
        'Architecture adopted for production'
      ]
    },
    images: [
    ],
    stack: ['LLM', 'RAG', 'Streamlit', 'FastAPI'],
    role: ['기술 기획', 'AI 모듈 개발', 'QA', 'Backend'],
    tags: ['chatbot', 'education'],
    links: { github: '#', demo: '#' }
  },
  {
    slug: 'prompt-hub',
    title: 'Prompt Hub',
    summary: '프롬프트 버전·변수 관리와 테스트 자동화 플랫폼. 에이전트 오케스트레이션·A/B 비교·비용 모니터링으로 검증 2주→1일',
    results: '검증·테스트 2주→1일, 첫 달 10명/30건 사용',
    period: '2025.07 ~ 2025.09',
    problem: '프로젝트 증가로 프롬프트/시나리오/테스트가 복잡화되어 관리·검증 효율이 급격히 저하',
    approach: '버전/변수/테스트 자동화 중심 플랫폼 설계, 오케스트레이션 기반 에이전트(테스트·평가·최적화·웹서치·슬랙), 비용/사용량 모니터링',
    features: [
      '프롬프트 버전/변수 관리',
      '테스트 자동화 및 결과 A/B 비교',
      '프롬프트 자동 최적화 에이전트',
      '토큰 비용·사용량 모니터링',
      '다국어 UI와 다크/라이트 모드'
    ],
    en: {
      title: 'Prompt Hub',
      summary: 'Prompt versioning and test automation platform with orchestration agents, A/B comparison, and cost tracking — reduces verification from 2 weeks to 1 day.',
      results: 'Cut verification from 2 weeks to 1 day; 10 users/30 runs in first month',
      problem: 'Rapidly growing projects made prompt/scenario/test management complex and slow.',
      approach: 'Designed version/variable/test automation core; built orchestration agents (test/eval/optimize/web-search/slack); added token cost and usage dashboards.',
      features: [
        'Prompt version and variable management',
        'Automated testing and A/B diff view',
        'Auto-optimization agent',
        'Token cost and usage monitoring',
        'Multilingual UI, dark/light modes'
      ]
    },
    stack: ['React', 'Node.js', 'Supabase', 'FastAPI', 'LangChain', 'LangGraph', 'Docker', 'GCP'],
    role: ['Lead', 'Backend', 'Frontend', 'QA', 'Deployment'],
    tags: ['prompt', 'Multi agent', 'automation'],
    links: { github: '#', demo: '#' }
  },
  {
    slug: 'writing-eval',
    title: 'Writing AI Evaluation Tool',
    summary: 'Vision+LLM 기반 글쓰기 자동 평가. Outliner 인식, 초안·최종 평가/리포트 생성, 스키마 기반 확장 구조',
    results: '요구사항 충족도 100%, 핵심 기능 3종 구현',
    period: '2025.04 ~ 2025.06',
    problem: '학생 글쓰기 과정을 자동 평가/피드백하는 체계가 부재',
    approach: '학생 글쓰기를 체계적으로 평가할 수 있는 자동화 도구가 필요했지만, 기존에는 단계별 평가 기준이 명확히 구조화되어 있지 않고 교사의 판단에 크게 의존하는 문제가 있었습니다. \n이를 해결하기 위해 먼저 글쓰기 과정 전반을 세분화하고, 각 단계에서 어떤 정보가 필요한지, 어떤 기준으로 평가가 이루어져야 하는지를 도메인 전문가와 함께 정리했습니다. 이때 외국인 동료와도 지속적으로 소통하면서 언어적 표현, 피드백 톤, 문단 구조 해석 방식에 대한 차이를 조율하는 과정을 거쳤습니다.\n이 기반 위에서 Vision AI로 아웃라이너 테이블 이미지를 인식해 구조를 추출, 학생이 쓴 글쓰기 개요에 대해 체크업하고 LLM이 학생 에세이 초안의 문단·문장을 평가할 수 있도록 Output schema 중심의 아키텍처를 설계했습니다. 다양한 과제 유형과 수준별 기준(A1~B2)에 대응하기 위해 프롬프트와 로직은 옵션화·모듈화하여 유연성을 확보했습니다. 또한 PoC 단계에서는 Streamlit을 활용해 신속히 프로토타입을 만들고, FastAPI 기반 API 구조로 확장해 실제 서비스 환경에 적용할 수 있도록 했습니다. \n이후 반복적인 테스트와 피드백 과정을 통해 평가 기준을 정교화하고, 잘못 해석되는 부분이나 표현의 과한 단순화가 발생하지 않도록 모델 출력 패턴을 조정했습니다. 이러한 일련의 설계·검증 과정을 통해 요구사항 충족도 100%를 달성했으며, 기획·도메인 전문가·개발팀 사이에서 기술적 해석과 의사소통을 연결하는 역할도 수행했습니다.',
    features: [
      'Outliner 이미지 인식 및 피드백 생성',
      '초안 에세이 문단·문장 단위 평가/제안',
      '최종 제출 에세이 분석·리포트 자동 생성'
    ],
    en: {
      title: 'Writing AI Evaluation Tool',
      summary: 'Automated writing evaluation using Vision + LLM: outliner detection, draft scoring/suggestions, final report generation with schema-based design.',
      results: '100% requirement fit; shipped 3 core features',
      problem: 'Needed an automated evaluation and feedback pipeline for student writing.',
      approach: 'Detect outliner via Vision AI; generate draft/final evaluations via LLM; used output schema to flexibly support different rubrics.',
      features: [
        'Outliner detection + feedback',
        'Draft-level paragraph/sentence scoring and suggestions',
        'Final essay analysis with auto-generated report'
      ]
    },
    stack: ['Streamlit', 'FastAPI', 'LLM'],
    role: ['AI'],
    tags: ['evaluation', 'nlp'],
    links: { github: '#', demo: '#' }
  },
  {
    slug: 'internal-automation',
    title: 'AI 기반 내부 업무 자동화',
    summary: 'TTS·문항 생성·메일 발송 3종 자동화. 최대 6.5배 속도·85% 시간 절감로 반복 업무 즉시 처리',
    results: '최대 6.5배 속도, 전체 업무 시간 85% 절감',
    period: '2025.06 ~ 2025.07',
    problem: '반복·대량 내부 작업으로 인해 인력 소모와 지연 발생',
    approach: '사내에서 반복적으로 발생하는 TTS 음원제작, 문항 생성, 메일 발송 업무는 모두 사람이 직접 처리해야 했기 때문에 작업 속도가 느리고 누적 피로도가 높다는 문제가 있었습니다. \n특히 처리량이 많을수록 팀 전체의 일정에 영향을 미치는 병목이 되었기 때문에, 기존 프로세스를 단계별로 분해해 어떤 부분을 자동화할 수 있는지 먼저 정리하는 작업을 진행했습니다.\n부서별, 업무별 요구사항이 모두 달랐기 때문에 요청자와 1:1로 소통하면서 실제로 어떤 입력과 출력이 필요하고, 업무가 어떤 흐름으로 진행되는지를 명확히 파악했습니다. \n그 후 반복 패턴을 기준으로 API와 Apps Script를 결합한 자동화 구조를 설계했습니다. \nTTS는 Amazon, Google TTS, OpenAI TTS를 모두 연동하여 다양한 사용자 환경에서도 일관된 출력이 가능하도록 했고, \n문항 생성은 3사 LLM(OpenAI·Google·Anthropic)을 조합해 안정성 있는 결과를 생성하고 이를 검증하는 파이프라인을 구축했습니다. \n메일 자동화는 Apps Script 기반의 트리거 구조를 활용해 실행 시점을 자동 제어할 수 있도록 구성했습니다. \n구조가 완성된 이후에는 반복적으로 테스트하며 결과 품질을 확인하고, 요청자가 실제로 사용하는 방식에 맞춰 UI·처리 로직을 조정했습니다. \n이 과정을 통해 업무 처리 속도를 크게 높였고, 팀 내부에서는 반복적인 작업에서 벗어나 더 중요한 업무에 집중할 수 있게 되었다는 피드백을 받을 수 있었습니다.',
    features: [
      'TTS 자동 생성(Polly/Google/OpenAI 통합)',
      '문항 생성 파이프라인(다중 모델·검수)',
      '메일 자동 발송 프로세스'
    ],
    en: {
      title: 'AI-powered Internal Automation',
      summary: 'Automated TTS, question generation, and email workflows — up to 6.5x faster and 85% less time.',
      results: 'Up to 6.5x faster; 85% total time reduction',
      problem: 'Large repetitive internal tasks consumed time and caused delays.',
      approach: 'Automated each workflow with Apps Script + AI; added batching and integrations.',
      features: [
        'TTS generation (Polly/Google/OpenAI)',
        'Question generation with multi-model pipeline',
        'Automated email sending process'
      ]
    },
    stack: ['Python', 'Apps Script', 'FastAPI', 'TTS', 'Playwright'],
    role: ['Automation'],
    tags: ['AI', 'automation', 'ops'],
    links: { github: '#', demo: '#' }
  },
  {
    slug: 'further-practice',
    title: 'Further Practice',
    summary: '지문 생성→난이도 분석→문항 생성·검수 파이프라인. 3사 LLM 통합·지표 기반 품질 관리로 약 4배 속도 향상',
    results: '약 4배 속도 향상, 전체 소요 시간 75% 단축',
    period: '2025.06 ~ 2025.10',
    problem: '대규모 지문/문항 생산 공정을 품질·속도를 양립하며 자동화해야 함',
    approach: '대규모 지문과 문항을 꾸준히 생산해야 하는 상황에서, 기존 방식은 사람이 모든 단계를 직접 수행해야 했기 때문에 품질은 유지되었지만 속도가 빠르게 한계에 부딪히고 있었습니다. \n사람이 수행하는 workflow를 기계 자동화 시키기위해서 어떤 요소를 자동화하고 어떤 단계에 사람이 개입해야 하는지를 먼저 구조적으로 정의하는 것이 필요했습니다.\n이를 위해 먼저 전체 작업 플로우를 지문 생성 → 난이도·지표 정량분석 → 토픽 필터링 → Revision → 문항 생성 → 검수 → 메타 태깅까지 단계별로 분해하고, \n각 단계에서 필요한 입력·출력·검증 기준을 정리했습니다. 이후 API 서버를 구축하고 Apps Script를 조합해 단계별 API 호출과 데이터 흐름을 통합한 파이프라인을 설계했습니다. \nLLM은 OpenAI, Google, Anthropic 세 모델을 병렬로 활용해 안정성·속도·표현 다양성을 균형 있게 확보하도록 구성했습니다. \n지문 품질 확인에는 CEFR, 문장 길이, 구문 정보 등 사내 분석기를 활용해 자동 평가를 적용하고, \n자동 분석만으로는 판단이 어려운 영역은 Human-in-the-loop 방식으로 검수 단계를 두어 품질을 보완했습니다. \n요구사항이 프로젝트 진행 과정에서 계속 구체화되는 만큼, 배치 단위로 기능을 고도화하며 모델 호출 전략·필터링 조건·Revision 로직 등을 반복적으로 개선했습니다. \n이러한 방식으로 구조화한 파이프라인은 전체 처리 시간을 기존 대비 약 4배 이상 단축하면서도 품질 기준을 유지할 수 있었고, \n운영 측면에서도 유지보수가 용이한 형태로 안정적으로 정착시킬 수 있었습니다.',
    features: [
      '엔드투엔드 자동화 파이프라인',
      'CEFR·문장길이·구문정보 지표 기반 분석',
      'Human-in-the-loop 검수 단계',
      '시트/DB 연동 배치 처리'
    ],
    en: {
      title: 'Further Practice',
      summary: 'End-to-end pipeline for passage generation → difficulty analysis → item generation and review. 3-vendor LLM integration and metric-based QA for ~4x speed.',
      results: '~4x faster; 75% reduction in total time',
      problem: 'Needed to automate large-scale passage/item production with both quality and speed.',
      approach: 'Designed the full pipeline, integrated three LLM vendors, applied metric-based analysis, and added human-in-the-loop review.',
      features: [
        'End-to-end automated pipeline',
        'CEFR/length/syntax metric analysis',
        'Human-in-the-loop review',
        'Batch jobs integrated with Sheets/DB'
      ]
    },
    stack: ['Apps Script', 'FastAPI', 'LLM'],
    role: ['자동화 Tool 개발'],
    tags: ['generation', 'pipeline', 'AI'],
    links: { github: '#', demo: '#' }
  }
]

export default projects


