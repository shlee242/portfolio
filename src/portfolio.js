const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shlee242.github.io/portfolio',
  title: "242's Portfolio",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'SANG HUI LEE',
  role: 'Blockchain Engineer',
  description: ``,
  // resume: 'https://drive.google.com/file/d/',
  social: {
    // linkedin: 'https://www.linkedin.com/in/',
    // github: 'https://github.com/shlee242',
  },
}

const experience = [
  {
    position: '블록체인 엔지니어',
    company: '(주) 블록오디세이',
    points: [
      '기술 리서치 및 사업 지원',
      'CBDC 파일럿 프로젝트',
      '블록체인 플랫폼 구축 및 서비스 개발',
    ],
    dates: ['2021.10', '2024.06'],
    logo: `${process.env.PUBLIC_URL}/assets/bo.jpg`,
  },
  {
    position: '백엔드 개발자',
    company: '(주) 링카코리아',
    points: ['블록체인 결제 시스템 개발', 'LINKA Wallet 개발'],
    dates: ['2019.11', '2021.06'],
    logo: `${process.env.PUBLIC_URL}/assets/linka.png`,
  },
  {
    position: '백엔드 개발자',
    company: '(주) 빗썸',
    points: ['입출금 시스템 개발 및 구조 개선', '거래소 운영 기능 개발'],
    dates: ['2017.09', '2019.05'],
    logo: `${process.env.PUBLIC_URL}/assets/bithumb.png`,
  },
]

const projectCategories = {
  '(주) 블록오디세이': [
    {
      name: '블록체인 비즈니스 전략 리서치 및 기술 컨설팅',
      subtitle: '기술과 비즈니스 간의 간극을 좁히는 브릿지 역할 수행',
      description: [
        '가상자산 지갑 솔루션 인수 검토 과정에서 TSS-MPC와 SSS 아키텍처의 차이를 심층 분석하여 임원진의 전략적 의사결정을 위한 리서치 수행',
        'STO(증권형 토큰) 사업 추진을 위해 ERC-3643 표준 및 온체인 컴플라이언스 메커니즘을 분석하고, 비기술 부서가 규제 준수형 토큰 생태계를 이해할 수 있도록 사업 전략 수립 지원',
        '글로벌 메인넷 이전(Klaytn to Polygon)을 희망하는 파트너사를 대상으로 스마트 컨트랙트 설계와 배포 가이드를 제공하여, 비개발자 경영진이 직접 키를 관리할 수 있는 수준의 기술 온보딩 수행',
        'Sawtooth 내 ERC 표준 이식 방안 등 신규 비즈니스 모델의 기술적 타당성 검토(PoC) 주도',
      ],
    },
    {
      name: 'NH농협은행 CBDC 대응 파일럿 시스템 구축',
      subtitle:
        '중앙은행 디지털화폐(CBDC) 유통 환경 검증을 위한 클레이튼 기반 블록체인 인프라 및 데이터 파이프라인 구축',
      description: [
        'LG CNS가 총괄하는 CBDC 파일럿 프로젝트의 블록체인 파트 담당자로서, Klaytn 기반 네트워크 아키텍처 설계 및 네트워크 구축',
        '클레이튼 노드 데이터 수집을 위한 Prometheus Exporter 연동 및 Grafana 시각화를 통해 실시간 블록체인 상태 모니터링 환경 구축',
        'ethereum-etl을 벤치마킹하여 자체 ETL 시스템을 개발하고, 온체인 데이터를 관계형 DB(RDB)로 적재하는 파이프라인 완성',
        '디지털 화폐 유통 시나리오에 따른 블록체인 인프라의 가용성을 검증하고, 대형 금융권 시스템과의 연계 방안을 고려한 기술 지원 수행',
      ],
      stack: ['Python', 'Klaytn', 'Docker', 'Prometheus', 'Grafana', 'MySQL'],
      date: '2022.03 - 2022.09',
    },
    {
      name: 'Hyperledger Sawtooth 기반 블록체인 플랫폼 구축',
      subtitle: '이력 관리 서비스를 위한 블록체인 인프라 구축 및 운영',
      description: [
        '신세계 인터내셔널(정품인증), SK렌터카(차량이력), SK지오센트릭(폐플라스틱) 등 다양한 산업군의 요구사항에 맞춘 블록체인 아키텍처 설계 및 구축',
        '정부 과제 수행 시 TTA(한국정보통신기술협회) 성능 평가를 통과하여 초당 트랜잭션 처리량(TPS) 및 시스템 안정성에 대한 기술적 공인 확보',
        'Docker Compose를 활용하여 블록체인 노드 설치 및 네트워크 구성을 자동화함으로써, 중복되는 인프라 구축 작업을 효율화하고 서비스 전개 속도 향상',
        'Sawtooth 노드 데이터를 InfluxDB에 수집하고, 블록 및 트랜잭션 상세 데이터를 추출하는 자체 ETL 툴을 개발하여 모니터링 및 데이터 분석 파이프라인 구축',
      ],
      stack: [
        'Node.js',
        'Python',
        'Hyperledger Sawtooth',
        'Docker',
        'InfluxDB',
        'PostgreSQL',
        'Ubuntu',
      ],
      date: '2021.10 - 2023.12',
    },
  ],
  '(주) 링카코리아': [
    {
      name: 'NFT 상품권 발행 및 관리 시스템 구축',
      subtitle:
        '가상자산 교환, 외부 핀코드 연동까지 포함된 블록체인 서비스 개발',
      description: [
        'Klaytn 플랫폼을 활용한 NFT 발행 및 관리 시스템의 백엔드 아키텍처 설계와 DB 모델링 수행',
        '카카오 Klip API 및 한국선불카드 PIN 코드 발행 API를 연동하여 실물 자산과 온체인 데이터 간의 가용성 확보',
        '사용자의 가상자산 교환 요청을 처리하고 상품권 상태를 추적하는 백엔드 API 및 비즈니스 로직 개발',
        '온체인 트랜잭션의 성공 여부를 실시간으로 추적하고 상태를 동기화하는 데몬 프로세스 구축',
        '내/외부 보안 통신을 위한 OutlineVPN 환경 구축으로 서비스 보안 강화 및 안정성 확보',
      ],
      game: 'http://www.11st.co.kr/products/3455391978?trTypeCd=21&trCtgrNo=585021',
      stack: ['Java', 'Spring Boot', 'Node.js', 'MySQL', 'PM2', 'Ubuntu'],
      date: '2020.11 - 2021.03',
    },
    {
      name: '멀티 체인 지갑 서비스 신규 자산 연동',
      subtitle: 'Klaytn 및 Ethereum 기반 신규 가상자산 입출금 인터페이스 구현',
      description: [
        'Klay 및 OKB(ERC-20) 등 신규 자산 지원을 위한 메인넷 프로토콜 분석 및 RPC 통신 인터페이스 개발',
        'Node.js 환경에서 각 코인별 노드와 통신하여 실시간 입금을 감지하고 출금을 처리하는 데몬 프로세스 구축',
        '다양한 네트워크의 트랜잭션 상태를 표준화된 데이터 형식으로 변환하여 내부 데이터베이스 정합성 확보',
      ],
      stack: ['Node.js', 'Express', 'MySQL', 'Ubuntu'],
      date: '2020.06',
    },
    {
      name: 'EVM 기반 NFT PG 시스템',
      subtitle:
        '신용카드를 활용한 NFT 구매 및 전송 시스템 설계와 Solidity 스마트 컨트랙트 개발',
      description: [
        '사용자가 블록체인 지갑 없이도 법정화폐로 NFT를 소유할 수 있도록 복잡한 온체인 상호작용을 백엔드 서비스로 추상화',
        'Solidity를 활용하여 NFT 구매와 사용자 전송을 단일 트랜잭션으로 처리하는 컨트랙트를 개발하고, ECDSA 알고리즘 기반의 전자서명을 적용하여 결제/환불 프로세스 유연성 강화',
        'OpenSea, Mintbase 등 글로벌 NFT 오픈마켓의 스마트 컨트랙트를 분석하여 신용카드 결제와 온체인 구매를 연동하는 프로세스 설계',
        '블록체인 노드와 연동하여 자산 출금 트랜잭션의 상태를 실시간으로 추적하고 관리하는 백엔드 데몬 프로세스 구축',
      ],
      stack: ['Solidity', 'Node.js', 'Express', 'MySQL', 'PM2', 'Ubuntu'],
      sourceCode: 'https://github.com/shlee242/token-payment-gateway',
      date: '2020.04 - 2020.05',
    },
    {
      name: '픽션네트워크 가상자산 결제(PG) 서비스',
      subtitle:
        '클레이튼 기반 토큰 결제 시스템 구축 및 Redis 비동기 큐를 활용한 결제 처리 최적화',
      description: [
        '클레이튼 메인넷 기반의 픽션토큰 결제 모델을 분석하여 신용카드로 가상자산 상품을 구매할 수 있는 결제 브릿지 시스템 구축',
        '블록체인 트랜잭션의 지연 시간을 고려하여 Redis 기반의 순서가 보장된 비동기 결제 큐 시스템을 설계하고, 결제 요청과 온체인 처리 간의 병목 현상 해결',
        '온체인 상의 토큰 출금 트랜잭션을 실시간으로 추적하고 상태 변화를 서비스 DB에 동기화하는 안정적인 데몬 프로세스 개발',
        '클레이튼 노드 운영 및 퍼블릭 노드와의 하이브리드 연동을 통해 인프라 가용성을 확보하고 서비스 연속성 보장',
        'JMeter를 활용한 결제 성능 테스트를 수행하여 고부하 상황에서의 시스템 안정성을 검증하고 백엔드 처리 로직 최적화 수행',
      ],
      stack: [
        'Node.js',
        'Express',
        'Redis',
        'MySQL',
        'PM2',
        'JMeter',
        'Ubuntu',
      ],
      date: '2020.01 - 2020.03',
    },
    {
      name: '가상자산 입출금 인프라 고도화 및 운영 자동화',
      subtitle:
        '노드 가용성 확보를 위한 인프라 개선 및 자산 집금 프로세스 자동화 시스템 구축',
      description: [
        '이더리움 클라이언트(Geth)의 버전 업그레이드 및 최적화 옵션 적용을 통해 노드 동기화 안정성 및 RPC 응답 속도 개선',
        '사용자 지갑으로 입금된 자산을 관리용 지갑으로 취합하는 집금(Sweeping) 프로세스를 자동화하여 운영 효율성 제고',
        'Infura, Alchemy 등 퍼블릭 노드를 활용한 백업 및 Fallback 기능을 추가하여 자체 노드 장애 시에도 서비스 연속성 보장',
        '블록체인 노드의 상태를 실시간으로 관리할 수 있는 모니터링 시스템을 구축하여 장애 대응 체계 마련',
        '서버 접근 보안을 위한 SSH OTP 인증 도입으로 인프라 보안 강화',
      ],
      date: '2019.11 - 2020.01',
    },
  ],
  '(주) 빗썸': [
    {
      name: '가상자산 거래소 입출금 인터페이스 구현 및 서비스 고도화',
      subtitle: '신규 코인 입출금 프로세스 구축',
      description: [
        'XEM, STEEM, BHP 등 다수 메인넷 노드 리서치 및 RPC 분석을 통한 입금 감지 및 출금 프로세스 개발',
        '반복되는 코인 추가 작업의 효율을 높이기 위해 파편화된 입/출금 프로세스 공통부분 모듈화',
        '온체인 트랜잭션 상태를 내부 DB와 동기화하여 회계 정산을 위한 데이터 정합성 확보',
        'ISMS 인증 보안 기준에 따라 기존 단일 서명 방식을 멀티시그 기반의 출금 API 연동 체계로 전환 및 구현(ETH, ERC-20, STEEM)',
      ],
      stack: ['PHP', 'CodeIgniter', 'JavaScript', 'Oracle', 'CentOS'],
      date: '2018.06 - 2019.05',
    },
    {
      name: '가상자산 거래소 백엔드 시스템 유지보수 및 운영 도구 개발',
      subtitle: '서비스 운영 효율화를 위한 백엔드 로직 구현',
      description: [
        '기획, 마케팅 등의 부서 사용자가 가변 조건으로 필요한 데이터를 직접 엑셀로 추출할 수 있는 사내 데이터 관리자 툴 개발',
        '대량 메일 솔루션과 연동하여 회원 마케팅 수신 정보를 주기적으로 동기화하는 배치 프로그램 개발',
        'KYC(본인인증) 강화 정책에 따른 회원 거주지 수집 및 미등록 사용자 서비스 제한 프로세스 구현',
        'MySQL에서 Oracle DB로의 전환 프로젝트에 참여하여 기존 쿼리 마이그레이션 및 서비스 로직 연동 지원',
      ],
      stack: ['PHP', 'CodeIgniter', 'JavaScript', 'Oracle', 'MySQL', 'CentOS'],
      date: '2017.09 - 2018.06',
    },
  ],
}

// Keep projects array for backward compatibility
const projects = Object.values(projectCategories).flat()

const education = [
  {
    university: 'University of Colorado Boulder',
    school: 'College of Engineering and Applied Science',
    degrees: ['Master of Science in Data Science'],
    dates: ['January 2022', 'August 2025'],
    logo: `${process.env.PUBLIC_URL}/assets/boulder.png`,
    article:
      'https://drive.google.com/file/d/1hNjcJ8kkGPoHmhCErPVjg_CRlE25HQbY/view?usp=drive_link',
  },
  {
    university: 'Holy Angel University',
    school: 'College of Business and Accountancy',
    degrees: ['Bachelor of Science in Accounting Technology'],
    dates: ['June 2010', 'April 2014'],
    logo: `${process.env.PUBLIC_URL}/assets/hau.png`,
    article:
      'https://drive.google.com/file/d/1tLELkJc0bTqh_xkOdhBeSGv93jgiS4f0/view?usp=drive_link',
  },
  {
    university: 'Brightwoods School',
    school: 'High School',
    degrees: [''],
    dates: ['June 2007', 'April 2009'],
    logo: `${process.env.PUBLIC_URL}/assets/brightwoods.png`,
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'TypeScript',
  'Node.js',
  'Redis',
  'SQL',
  'Docker',
  'AWS',
  'Git',
  'Github Actions',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'windmill131@naver.com',
}

export {
  header,
  about,
  experience,
  projects,
  projectCategories,
  education,
  skills,
  contact,
}
