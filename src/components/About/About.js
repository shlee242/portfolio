import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, resume, social } = about

  return (
    <div className='about center'>
      <div className='about__container'>
        <div className='about__content'>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && <h2 className='about__role'>A {role}</h2>}
          <div className='about__desc'>
            <p>
              블록체인 도메인에서 거래소, 지갑, 인프라까지 다양한 환경을 경험한
              백엔드 엔지니어입니다. 가상자산 거래소에서 입출금 시스템을
              개발하며 블록체인 노드 연동, 트랜잭션 처리, 자산 관리 로직을
              실무에서 다뤘고, 이후 지갑 서비스와 결제 시스템을 개발하면서
              온체인 트랜잭션의 흐름과 구조에 대한 이해를 확장했습니다. 또한
              블록체인 네트워크 구축 및 운영, 모니터링, 데이터 파이프라인까지
              경험하며 단순 기능 개발을 넘어 전체 시스템을 바라보는 관점을
              갖추게 되었습니다.
            </p>
            <p>
              블록체인 서비스를 개발하면서 트랜잭션을 단순히 처리하는 것뿐
              아니라, 노드에서 생성되는 블록과 트랜잭션 데이터를 직접 수집하고
              조회할 수 있는 Explorer를 구축했습니다. 이 과정에서 온체인
              데이터의 구조와 생성 방식을 보다 구체적으로 이해하게 되었고, 개별
              블록과 트랜잭션을 넘어 주소별 거래 내역이나 자산 이동 흐름을
              데이터 관점에서 바라보는 영역에도 관심을 갖게 되었습니다. 이러한
              관심은 자연스럽게 온체인 데이터를 활용해 거래 흐름과 주소 간
              관계를 분석하는 데이터 분석 영역으로 확장되었습니다.
            </p>
            <p>
              데이터 사이언스 석사 과정을 통해 데이터 분석, 머신러닝 및 모델링
              역량을 보완했으며, 기존의 블록체인 개발 경험과 데이터 분석 역량을
              결합하는 방향으로 관심 영역을 확장하고 있습니다. 온체인 데이터
              수집 및 전처리, 거래 패턴 분석, 이상 탐지와 같은 데이터 분석뿐
              아니라 LLM과 AI Agent를 활용해 대량의 트랜잭션과 관련 정보를
              조사하고 분석하는 과정을 자동화하는 기술에도 관심을 가지고
              있습니다. 특히 AI 모델 자체의 연구보다는 블록체인 도메인 지식과
              Backend 개발 경험을 바탕으로 데이터 수집·검색·분석 Pipeline을
              구축하고, 분석 결과를 API나 Web 서비스와 연결하여 실제 사용자가
              활용할 수 있는 기능으로 구현하는 역할에 강점이 있다고 생각합니다.
              앞으로는 블록체인 어플리케이션을 직접 개발하고 운영하며 쌓은
              경험을 기반으로, 온체인 데이터를 통해 금융범죄와 이상 거래를 보다
              효율적으로 탐지하고 조사할 수 있는 서비스 개발에 기여하고자
              합니다.
            </p>
            <p>
              제 이름, &apos;서로 상(相)&apos;과 &apos;빛날 휘(輝)&apos;, 서로
              빛난다는 의미처럼 같이 일할 수 있는 사람이 되어 함께 목표를 이루는
              것을 중요하게 생각합니다. 또한 특정 기술이나 방식에 스스로를
              한정하지 않고, 상황에 맞는 최선의 선택을 찾기 위해 열린 태도로
              접근합니다. 다양한 환경과 요구사항 속에서 문제를 정의하고 해결해온
              경험을 바탕으로, 블록체인 시스템에서 요구되는 안정성과 실용성을
              동시에 고려하는 엔지니어가 되고자 합니다.
            </p>
          </div>

          <div className='about__contact center'>
            {resume && (
              <a href={resume} target='_blank' rel='noreferrer'>
                <span type='button' className='btn btn--outline'>
                  Resume
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='link link--icon'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        <div className='about__photo'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/bio-pic-formal.jpg`}
            alt={`${name}'s profile`}
            className='about__photo-img'
          />
        </div>
      </div>
    </div>
  )
}

export default About
