# PRD: AI Engineer Portfolio Website (React + Vite + TailwindCSS + Framer Motion)

본 문서는 AI 엔지니어 포트폴리오 웹사이트 구현을 위한 제품 요구사항서입니다. 독자는 주니어 개발자를 가정하며, 요구사항은 명확하고 실행 가능하도록 서술합니다.


## 1) 소개 / 개요
- 목적: 구직/이직용 포트폴리오 웹사이트를 구축하여 리크루터(HR)와 일반 대중에게 전문성, 프로젝트 성과, 기술 스택을 명확하고 세련되게 전달
- 스택: React + Vite + TailwindCSS + Framer Motion (+ 선택: react-three-fiber/three.js)
- 디자인: 미니멀/모노톤, Pretendard 폰트, 블랙/화이트/포인트(#6366f1) 팔레트
- 애니메이션: 프리미엄/다이내믹(시퀀스/스크롤 연동), 자연스러운 페이드·패럴랙스
- 3D: 라이트(파티클/노이즈) 배경 효과
- 배포: GitHub Pages (리포지토리: lucide99.github.io, 사용자 페이지)

참고 요구사항: `요구사항.md`


## 2) 목표 (Goals)
- HR/리크루터가 30초 내 핵심 역량과 대표 프로젝트를 파악 가능
- 모바일·태블릿·데스크톱에서 일관된 반응형 UX 제공
- 고급스러운 인터랙션으로 전문성과 신뢰도 향상
- GitHub Pages에 안정적으로 배포 및 접근 가능
- 기본 SEO 메타/OG 구성으로 검색·공유 친화성 확보
- ko/en 다국어 전환 제공


## 3) 사용자 스토리 (User Stories)
1. HR로서, 랜딩(Hero)에서 후보자의 역할·핵심 전문성을 즉시 파악하고 프로젝트 섹션으로 자연스럽게 이동하고 싶다.
2. HR로서, 5개의 메인 프로젝트를 한눈에 비교하고, 보다 자세한 내용을 위해 프로젝트 상세 페이지로 이동하고 싶다.
3. 일반 사용자로서, 후보자의 스킬 스택을 아이콘과 텍스트로 명확히 이해하고 싶다.
4. 일반 사용자로서, 이메일 또는 SNS 링크를 통해 쉽게 연락·팔로우하고 싶다.
5. 사용자로서, 한국어/영어를 토글하여 콘텐츠를 원하는 언어로 읽고 싶다.
6. 사용자로서, 스크롤 시 부드럽고 세련된 애니메이션으로 정보에 몰입하고 싶다.


## 4) 기능 요구사항 (Functional Requirements)
1. 프로젝트 구성/라우팅
   - React + Vite 기반 SPA 구성
   - 페이지/라우트: `/`(홈), `/projects`(프로젝트 리스트), `/projects/:slug`(프로젝트 상세), `/*`(NotFound)
   - i18n(ko/en) 토글(글로벌 네비게이션에 노출), 언어별 리소스 관리

2. 스타일/디자인 시스템
   - TailwindCSS 전면 적용, 색상 팔레트: 블랙/화이트/#6366f1
   - 폰트: Pretendard(가변폰트 우선, 폴백 지정)
   - 글래스모피즘 카드(Projects) 스타일 토큰화(blur, bg-opacity, border)
   - 다크/라이트 톤은 모노톤 베이스 유지(선택적으로 시스템 테마 연동 가능)

3. Hero 섹션
   - 이름·타이틀(AI Engineer)·간단 소개·CTA 버튼(Projects 섹션/페이지로 이동)
   - Framer Motion 기반 다이내믹 시퀀스/스크롤 연동 애니메이션
   - 패럴랙스 텍스트/오브젝트 연출(성능 저하 없는 범위)

4. About 섹션
   - 경력 요약, 성향, 전문 분야(LLM/Backend/Automation/Frontend 등) 텍스트
   - 간결한 타이포그래피, 아이콘 포인트 사용 가능

5. Projects 섹션(리스트)
   - 총 5개 메인 프로젝트 카드(틀만, 내용은 Placeholder)
     - 포함 필드: 제목, 한줄소개, 스택, 역할, 링크(깃허브/데모), 태그
   - 카드 UI: 글래스모피즘 + 호버 인터랙션(3D 틸트 미적용, 글래스 유지)
   - 클릭 시 상세 페이지로 이동

6. Project 상세 페이지
   - 머리글(타이틀, 한줄소개, 주요 스택/역할 태그)
   - 섹션: 문제정의, 해결접근(아키텍처/흐름), 핵심기능, 결과/성과(정량·정성), 링크(깃허브/데모)
   - 콘텐츠는 Placeholder 템플릿 구성(실 컨텐츠 후속 입력)
   - 공유를 위한 기본 OG 메타 세팅(페이지 공통 또는 동적 제목/설명)

7. Skills 섹션
   - 아이콘 + 텍스트 형태, 카테고리(Backend/LLM/Automation/Frontend)로 그룹화
   - 반응형 그리드, 키보드 포커스 가능

8. Contact 섹션
   - 이메일 링크(mailto:) 제공
   - SNS 아이콘 링크(깃허브 필수, LinkedIn/X 등은 Placeholder 또는 후속 입력)

9. 글로벌 네비게이션/푸터
   - 상단 고정 네비게이션: 로고/이름, 섹션 링크, 언어 토글
   - 푸터: 저작권, SNS, 이메일, 간단 소개

10. 애니메이션 정책
    - Framer Motion로 페이드·슬라이드·스태거 시퀀스, 스크롤 연동
    - 과도한 모션 회피(사용자 모션 감소 설정 respect)
    - 3D 배경은 라이트(파티클/노이즈), 성능 안전장치(해상도/밀도 조절)

11. 3D 배경(선택)
    - react-three-fiber 또는 three.js 기반 파티클/노이즈 배경
    - 인터랙션은 subtle(마우스 패럴랙스 정도), 콘텐츠 가독성 저해 금지

12. 반응형
    - 모바일(≤640px), 태블릿(641–1024px), 데스크톱(≥1025px) 브레이크포인트 대응
    - 터치/포인터 디바이스에서 호버 대체 처리

13. 접근성/i18n
    - a11y 기본 준수: 명도 대비, 포커스 스타일, 대체 텍스트, 키보드 탐색
    - 언어 토글 시 라우트/문구 일관성 유지, html lang 반영

14. SEO/메타
    - 기본 메타/OG 제공(타이틀, 설명, OG 이미지 템플릿/플레이스홀더)
    - sitemap/robots는 범위 외(필요 시 후속)

15. 설정/빌드/배포
    - Vite 설정: 사용자 페이지(lucide99.github.io)는 base="/" 유지
    - GitHub Pages: main 브랜치 배포(사용자 페이지 표준), 워크플로우 스크립트 선택적
    - 정적 자산 경로 확인(OG/폰트/아이콘)


## 5) 비범위 (Non-Goals)
- 백엔드 서버/DB 구축, 인증/권한, CMS 관리 화면
- 복잡한 3D/고사양 셰이더, 고밀도 파티클(퍼포먼스 저하 가능 요소)
- 폼 기반 문의(스팸 방지/CAPTCHA 포함) — 현재는 이메일 링크만
- 고급 분석(GA4/이벤트 트래킹) — 기본 메타/OG만
- 블로그/콘텐츠 시스템


## 6) 디자인 고려사항 (Design Considerations)
- 톤&무드: 미니멀/모노톤, 여백 중심 레이아웃, 타이포 위주
- 폰트: Pretendard(서브셋/디스플레이 최적화), 시스템 폴백
- 컬러: 배경 블랙/화이트 변형 + 포인트(#6366f1)로 링크/버튼 강조
- 글래스 카드: blur, 반투명, border(1px) + 미세한 그림자
- 아이콘: Lucide/Feather 등 심플 라인 아이콘 권장
- 에셋: 초기엔 Placeholder(이미지/OG), 추후 실자산 교체


## 7) 기술 고려사항 (Technical Considerations)
- Vite(React) + Tailwind 세팅, PostCSS 구성
- Framer Motion 애니메이션 시퀀싱(variants, staggerChildren, whileInView)
- 3D 배경: r3f + drei(선택) 사용 시 Canvas 오버레이 z-index/성능 관리
- i18n: 간단한 리소스 JSON/TS 모듈, 라우트 보존, 초기 언어 감지(브라우저/기본 ko)
- 접근성: 모션 감소 미디어쿼리 대응, 포커스 링 유효화
- 이미지 최적화: webp 사용, tailwind container·aspect-ratio 유틸
- 배포: 사용자 페이지(base="/"), Pages 설정에서 main 브랜치 루트 사용


## 8) 성공 지표 (Success Metrics)
- 배포: `https://lucide99.github.io` 정상 접속
- 접근성: Lighthouse Accessibility ≥ 90
- 성능(권장): Lighthouse Performance ≥ 90 또는 초기 로드 TTI < 2.5s
- 참여: 이메일 링크 클릭 가능, SNS 링크 노출(깃허브 필수)
- 사용성: 모바일·태블릿·데스크톱 반응형 레이아웃 정상


## 9) 수락 기준 (Acceptance Criteria)
1. 모든 섹션 구현: Hero, About, Projects(5개 카드/상세), Skills, Contact
2. 반응형 레이아웃(모바일/태블릿/데스크톱) 정상
3. GitHub Pages(lucide99.github.io)로 배포 및 접속 확인
4. Hero 다이내믹 애니메이션/스크롤 연동 정상 작동, 프레임 저하/지연 없음
5. i18n ko/en 토글 정상 작동, 주요 카피 양 언어 제공(초기 Placeholder 가능)
6. Projects 카드 글래스 스타일과 상세 페이지 라우팅 정상


## 10) 정보 구조 (IA) / 내비게이션
- 글로벌: Home, Projects, Skills(섹션 anchor), About(섹션 anchor), Contact(섹션 anchor), Language Toggle
- 홈 내 섹션 순서: Hero → About → Projects(5) → Skills → Contact
- 별도 라우트: Projects 리스트, Project 상세


## 11) 콘텐츠 템플릿/필드 정의
- Project 카드: 제목 | 한줄소개 | 스택(배지) | 역할 | 링크(깃허브/데모) | 태그
- Project 상세: 헤더(제목/소개/스택/역할/태그) → 문제정의 → 접근/아키텍처 → 핵심기능 → 결과/성과 → 링크
- Skills: 카테고리(Backend/LLM/Automation/Frontend)별 아이콘+텍스트 목록
- Contact: 이메일(mailto), SNS(깃허브 필수, 기타 Placeholder)


## 12) 페이지·컴포넌트(예시)
- Pages: `Home`, `Projects`, `ProjectDetail`, `NotFound`
- Components: `Navbar`, `Footer`, `Hero`, `AboutSection`, `ProjectsGrid`, `ProjectCard(Glass)`, `SkillsGrid`, `ContactBar`, `LangToggle`, `ParticleBackground(옵션)`


## 13) 리스크/제약
- 3D 배경 과도 사용 시 성능 저하 위험 → 밀도/해상도 조절 및 비활성화 옵션
- i18n 리소스 미비 시 초기 Placeholder 제공 필요
- 글래스 카드의 대비/가독성 저하 가능 → 배경 마스킹/레이어 분리


## 14) 오픈 이슈 / 확정 필요 사항 (Open Questions)
1. SNS 상세: LinkedIn, X, 기타 핸들/URL
2. 성능 지표 우선순위: Lighthouse Perf 90+ vs 60fps 고정(또는 둘 다)
3. TypeScript 적용 여부(현 문서는 JS 기준, TS 권장 가능)
4. 3D 라이브러리 최종 선택(r3f vs three.js 직접)
5. 프로젝트 상세 콘텐츠 수준(이미지/다이어그램/코드 스니펫 포함 여부)
6. OG 이미지 템플릿 스타일/텍스트 구성 확정


## 부록 A) 초기 프로젝트(틀) 정의
- Projects(5): 
  1) Hey Canbot – 시나리오 기반 AI 학습 챗봇
  2) Prompt Hub – 프롬프트 버전 관리·테스트 자동화 플랫폼
  3) Writing AI Evaluation Tool – 글쓰기 자동 평가 시스템
  4) AI 기반 내부 업무 자동화(3종)
  5) Further Practice – 지문/문항 생성 자동화 파이프라인

세부 내용은 Placeholder로 시작하고 후속 입력으로 보강합니다.


## 부록 B) 배포 메모
- 사용자 페이지(repo: lucide99.github.io) → Pages 설정에서 `main` 브랜치 루트 사용
- Vite `base: "/"` 유지
- 커스텀 도메인 미사용(필요 시 CNAME 후속)


