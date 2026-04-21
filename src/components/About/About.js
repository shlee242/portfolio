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
              커리어 전반을 통해 일관되게 유지해온 방향은 ‘블록체인 기반 자산
              처리와 트랜잭션 관리’입니다. 블록체인은 되돌릴 수 없다는 특성
              때문에, 단 한 번의 실수가 실제 자산 손실로 이어질 수 있습니다.
              이러한 환경에서 입출금 시스템을 운영하며 장애 대응과 자산 처리
              과정에서의 책임을 직접 경험했습니다. 운영팀과의 협업, 고객 이슈,
              그리고 실제 리스크 상황을 겪으면서 단순한 기능 구현이 아닌, 신뢰할
              수 있는 자산 처리와 안정적인 시스템 운영의 중요성을 체감했습니다.
              이 경험은 이후 모든 시스템을 설계할 때 가장 우선적으로 고려하는
              기준이 되었습니다.
            </p>
            <p>
              최근에는 데이터 사이언스 석사 과정을 통해 데이터 분석과 모델링
              역량을 보완했습니다. 블록체인 환경에서는 온체인 데이터가 단순
              기록을 넘어 리스크 관리와 의사결정의 핵심 자산으로 활용된다고
              생각합니다. 이러한 흐름 속에서 트랜잭션 처리 시스템뿐 아니라,
              데이터를 기반으로 시스템을 이해하고 개선할 수 있는 역량을 함께
              갖추고자 했습니다.
            </p>
            <p>
              제 이름, &apos;서로 상(相)&apos;과 &apos;빛날 휘(輝)&apos;, 서로
              빛난다는 의미처럼 같이 일할 수 있는 사람이 되어 함께 목표를 이루는
              것을 중요하게 생각합니다. 또한 특정 기술이나 방식에 스스로를
              한정하지 않고, 상황에 맞는 최선의 선택을 찾기 위해 열린 태도로
              접근합니다. 다양한 환경과 요구사항 속에서 문제를 정의하고 해결해온
              경험을 바탕으로, 블록체인 시스템에서 요구되는 안정성과 실용성을
              동시에 고려하는 엔지니어로 기여하고자 합니다.
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
