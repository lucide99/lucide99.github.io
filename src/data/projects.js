const projects = [
  {
    slug: 'hey-canbot',
    title: '시나리오 기반 AI 학습 챗봇',
    summary: 'LLM 기반 멀티턴 학습 챗봇 PoC→정식 구조 설계·개발(단독). 상태 기반 흐름, 예외·힌트 모듈, 프롬프트 최적화로 품질·속도 개선',
    results: '예외 흐름 실패율 <5%, 응답 속도 15% 개선, 목표 100% 충족',
    period: '2024.10 ~ 2025.07',
    problem: '룰베이스 챗봇의 한계(유연성·예외 대응 부족)를 해결하고 학습 활동에 맞는 시나리오형 대화가 필요',
    approach: 'LLM 대화 엔진+상태 기반 멀티턴 구조 설계, 활동별 플로우/테스트 시나리오 작성, 예외/힌트 모듈, 프롬프트·토큰 최적화, 일부 파인튜닝 실험',
    features: [
      '대화 상태 기반 멀티턴 흐름 트래킹',
      '활동별 시나리오(7종) 및 테스트 케이스',
      '예외 처리 및 힌트 제공 모듈',
      '프롬프트 구조·토큰 최적화',
      'GPT 파인튜닝 실험(A1/B1/B2)'
    ],
    stack: ['React', 'LLM', 'RAG', 'Tailwind'],
    role: ['Fullstack'],
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
    stack: ['React', 'Node.js', 'Automation'],
    role: ['Lead'],
    tags: ['prompt', 'automation'],
    links: { github: '#', demo: '#' }
  },
  {
    slug: 'writing-eval',
    title: 'Writing AI Evaluation Tool',
    summary: 'Vision+LLM 기반 글쓰기 자동 평가. Outliner 인식, 초안·최종 평가/리포트 생성, 스키마 기반 확장 구조',
    results: '요구사항 충족도 98%, 핵심 기능 3종 구현',
    period: '2025.04 ~ 2025.06',
    problem: '학생 글쓰기 과정을 자동 평가/피드백하는 체계가 부재',
    approach: 'Vision AI로 아웃라이너 인식, LLM으로 초안/최종 평가 생성, Output schema 기반 구조로 다양한 평가에 대응',
    features: [
      'Outliner 이미지 인식 및 피드백 생성',
      '초안 에세이 문단·문장 단위 평가/제안',
      '최종 제출 에세이 분석·리포트 자동 생성'
    ],
    stack: ['React', 'Python', 'LLM'],
    role: ['Backend', 'Frontend'],
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
    approach: 'Apps Script+AI 통합으로 각 업무를 자동화, 배치/연동 처리',
    features: [
      'TTS 자동 생성(Polly/Google/OpenAI 통합)',
      '문항 생성 파이프라인(다중 모델·검수)',
      '메일 자동 발송 프로세스'
    ],
    stack: ['Python', 'Airflow', 'Playwright'],
    role: ['Automation'],
    tags: ['automation', 'ops'],
    links: { github: '#', demo: '#' }
  },
  {
    slug: 'further-practice',
    title: 'Further Practice',
    summary: '지문 생성→난이도 분석→문항 생성·검수 파이프라인. 3사 LLM 통합·지표 기반 품질 관리로 약 4배 속도 향상',
    results: '약 4배 속도 향상, 전체 소요 시간 75% 단축',
    period: '2025.06 ~ 2025.10',
    problem: '대규모 지문/문항 생산 공정을 품질·속도를 양립하며 자동화해야 함',
    approach: '전체 파이프라인 설계(생성→분석→필터링→리비전→생성→검수→메타), 3사 LLM 통합, 지표 기반 자동 분석, HITL 검수',
    features: [
      '엔드투엔드 자동화 파이프라인',
      'CEFR·문장길이·구문정보 지표 기반 분석',
      'Human-in-the-loop 검수 단계',
      '시트/DB 연동 배치 처리'
    ],
    stack: ['React', 'LLM', 'Vector DB'],
    role: ['Fullstack'],
    tags: ['generation', 'pipeline'],
    links: { github: '#', demo: '#' }
  }
]

export default projects


