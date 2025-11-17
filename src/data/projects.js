const projects = [
  {
    slug: 'hey-canbot',
    title: '시나리오 기반 AI 학습 챗봇',
    summary: 'LLM 기반 멀티턴 학습 챗봇 PoC→정식 구조 설계·개발(단독). 상태 기반 흐름, 예외·힌트 모듈, 프롬프트 최적화로 품질·속도 개선',
    results: '예외 흐름 실패율 <5%, 응답 속도 15% 개선, 목표 100% 충족',
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
    stack: ['React', 'LLM', 'Vector DB'],
    role: ['Fullstack'],
    tags: ['generation', 'pipeline'],
    links: { github: '#', demo: '#' }
  }
]

export default projects


