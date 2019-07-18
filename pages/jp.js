/* eslint-disable standard/object-curly-even-spacing */
import React from 'react'
import styled from 'styled-components'
import { Row, Container, Col, ResponsiveEmbed, Button } from 'react-bootstrap'

const ProjectList = styled.ul`
  padding-top: 50px;
  padding-left: 0;
  list-style-type: none;
  margin: 0 -10px;
  a {
    color: #f26c50;
    font-style: italic;
  }
  @media (min-width: 540px) {
    display: flex;
    justify-content: center;
    align-content: flex-start;
  }
`

const NewsList = styled.ul`
  a {
    color: #f26c50;
    font-style: italic;
  }
`

export default () => (
  <div>
    <Container
      fluid
      style={{
        height: '100vh',
        backgroundColor: '#fff',
        display: 'table',
        textAlign: 'center'
      }}
    >
      <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <img width="160" height="80" src="/static/images/boostio-img.svg" />
        <h1 style={{ fontSize: '56px', paddingTop: '20px' }}>BoostIO</h1>
      </Row>
    </Container>

    <Container
      fluid
      style={{ height: '100vh', backgroundColor: '#f8f9fa', display: 'table' }}
    >
      <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <Container>
          <ProjectList>
            <Row>
              <Col md={5}>
                <img
                  width="80%"
                  src="/static/images/issuehunt-image.png"
                  float="center"
                />
              </Col>
              <Col md={7}>
                <h1>
                  IssueHunt
                  <img
                    width="60"
                    height="60"
                    src="/static/images/img-issuehunt.png"
                  />
                </h1>

                <a href="https://issuehunt.io" className="url" target="_blank">
                  issuehunt.io
                </a>
                <p>
                  オープンソースプロジェクトの為の資金調達サービス。誰でもGitHub
                  Issueに対して報奨金を付けることができ、それらが開発者と貢献者へ分配されます。
                </p>
                <p>
                  現在ユーザーは170ヶ国を超えており、世界中の著名なOSSがIssueHuntに参加しています。
                </p>
                <a href="https://issuehunt.io/jp/sponsors">
                  スポンサープログラムについて
                </a>
              </Col>
            </Row>
          </ProjectList>
        </Container>
      </Row>
    </Container>

    <Container
      fluid
      style={{ height: '100vh', backgroundColor: '#fff', display: 'table' }}
    >
      <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <Container>
          <ProjectList>
            <Row>
              <Col md={7}>
                <h1>
                  Boostnote
                  <img
                    width="60"
                    height="60"
                    src="/static/images/img-bnote.png"
                    float="center"
                  />
                </h1>
                <a href="https://boostnote.io" className="url" target="_blank">
                  boostnote.io
                </a>
                <p>
                  オープンソースの開発者向けのノートアプリ。GitHub Star
                  13,000以上を獲得し、ユーザーはほぼ全世界へ拡がっています。
                </p>
                <p>
                  日本を代表するオープンソースプロジェクトとして世界で広く認知されています。
                </p>
              </Col>
              <Col md={5}>
                <img
                  width="100%"
                  src="/static/images/boostnote-image.png"
                  float="center"
                />
              </Col>
            </Row>
          </ProjectList>
        </Container>
      </Row>
    </Container>

    <Container
      fluid
      style={{ height: '100vh', backgroundColor: '#f8f9fa', display: 'table' }}
    >
      <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <Container>
          <ProjectList>
            <Row>
              <Col md={5}>
                <img
                  width="80%"
                  src="/static/images/github.png"
                  float="center"
                />
              </Col>
              <Col md={7}>
                <h1>オープンソース開発支援</h1>

                <p>
                  日本を代表するオープンソースであるBoostnoteの開発や、IssueHuntを通じて多くのオープンソースコミュニティと関わってきた経験を活かし、企業様のオープンソース開発をサポートさせて頂きます。
                </p>
                <p>
                  御社が独自に開発されているライブラリやプロジェクトのオープンソース化に際し、ライセンスの選定や実際にGitHub上に公開するところまでサポートさせて頂きます。
                </p>
                <a href="https://forms.gle/a2am78gBTenmzAoj6">
                  お問い合わせはこちらから
                </a>
              </Col>
            </Row>
          </ProjectList>
        </Container>
      </Row>
    </Container>

    <Container
      fluid
      style={{ height: '100vh', backgroundColor: '#fff', display: 'table' }}
    >
      <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <Container>
          <NewsList>
            <Row>
              <Col lg={4}>
                <h4 style={{ textAlign: 'center', padding: '30px 0' }}>NEWS</h4>
              </Col>
              <Col xs={2} sm={2} lg={2}>
                <Col>
                  <p style={{ textAlign: 'right' }}>2019</p>
                </Col>
              </Col>
              <Col xs={8} sm={8} lg={6}>
                <p>
                  エンジニアtypeに、CTOのChoiとDMM社松本様、ZEIT社金澤との対談が掲載されました。
                  <br />
                  <a
                    href="https://type.jp/et/feature/9888"
                    className="url"
                    target="_blank"
                    style={{ textAlign: 'left' }}
                  >
                    『IssueHunt』によってエンジニアの未来はどう変わる？
                    オープンソースの新たな可能性に迫る
                  </a>
                </p>
              </Col>

              <Col lg={4} />
              <Col xs={2} sm={2} lg={2}>
                <Col>
                  <p style={{ textAlign: 'right' }}>2019</p>
                </Col>
              </Col>
              <Col xs={8} sm={8} lg={6}>
                <p>
                  BusinessInsiderに、CEO横溝のインタビューが掲載されました。
                  <br />
                  <a
                    href="https://www.businessinsider.jp/post-184830"
                    className="url"
                    target="_blank"
                    style={{ textAlign: 'left' }}
                  >
                    エンジニアの評価を可視化する25歳起業家が惚れ込んだ高校生
                  </a>
                </p>
              </Col>

              <Col lg={4} />
              <Col xs={2} sm={2} lg={2}>
                <Col>
                  <p style={{ textAlign: 'right' }}>2019</p>
                </Col>
              </Col>
              <Col xs={8} sm={8} lg={6}>
                <p>
                  CodeZineに、CEOの横溝とProgate社加藤様、STUDIO社甲斐様との対談が掲載されました。
                  <br />
                  <a
                    href="https://codezine.jp/article/detail/11319"
                    className="url"
                    target="_blank"
                    style={{ textAlign: 'left' }}
                  >
                    オープンソースだけで生きていくエンジニアが活躍する世界に――BoostIO
                    横溝氏ら若き創業者が語る、それぞれが目指す世界
                  </a>
                </p>
              </Col>

              <Col lg={4} />
              <Col xs={2} sm={2} lg={2}>
                <Col>
                  <p style={{ textAlign: 'right' }}>2019</p>
                </Col>
              </Col>
              <Col xs={8} sm={8} lg={6}>
                <p>
                  日経産業新聞紙面に、CEO横溝のインタビューが掲載されました。「オープンソースに対価を。BoostIO
                  - 開発者支援の波、日本から」
                </p>
              </Col>

              <Col lg={4} />
              <Col xs={2} sm={2} lg={2}>
                <Col>
                  <p style={{ textAlign: 'right' }}>2018</p>
                </Col>
              </Col>
              <Col xs={8} sm={8} lg={6}>
                <p>
                  CodeZineに、CEOの横溝とDMM社松本様との対談が掲載されました。
                  <br />
                  <a
                    href="https://codezine.jp/article/detail/11256"
                    className="url"
                    target="_blank"
                    style={{ textAlign: 'left' }}
                  >
                    IssueHuntが目指す、OSSが正当に評価される世界とは
                  </a>
                </p>
              </Col>

              <Col lg={4} />
              <Col xs={2} sm={2} lg={2}>
                <Col>
                  <p style={{ textAlign: 'right' }}>2018</p>
                </Col>
              </Col>
              <Col xs={8} sm={8} lg={6}>
                <p>
                  第三者割当増資を実施し、詳報がTechCrunchに掲載されました。
                  <br />
                  <a
                    href="https://jp.techcrunch.com/2018/12/03/issuehunt-fundraising/"
                    className="url"
                    target="_blank"
                    style={{ textAlign: 'left' }}
                  >
                    オープンソースの貢献者が報われる文化を——報賞金サービス「IssueHunt」運営が1億円を資金調達
                  </a>
                </p>
              </Col>

              <Col lg={4} />
              <Col xs={2} sm={2} lg={2}>
                <Col>
                  <p style={{ textAlign: 'right' }}>2018</p>
                </Col>
              </Col>
              <Col xs={8} sm={8} lg={6}>
                <p>
                  creiveに、CEO横溝のインタビューが掲載されました。
                  <br />
                  <a
                    href="https://creive.me/archives/17156/"
                    className="url"
                    target="_blank"
                    style={{ textAlign: 'left' }}
                  >
                    スタートアップなのに開発者は数百人!?「IssueHunt」によって開発者の未来が変わるかもしれない。
                  </a>
                </p>
              </Col>
            </Row>
          </NewsList>
        </Container>
      </Row>
    </Container>

    <Container
      fluid
      style={{ height: '100vh', backgroundColor: '#f8f9fa', display: 'table' }}
    >
      <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <Container>
          <Row>
            <Col lg={4}>
              <h4 style={{ textAlign: 'center' }}>RECRUIT</h4>
            </Col>
            <Col lg={8}>
              <h4>全ての人へ、公平な評価を。共創を、どこでも、誰とでも。</h4>
              <p>
                日本で唯一無二と言っても過言ではない、オープンソースとグローバルがテーマのスタートアップ企業です。開発しているIssueHunt,
                Boostnoteといったプロダクトは既に200ヶ国以上へ拡がり、更に拡大を続けています。
              </p>
              <p>
                地球上の全ての人が公平に評価され、どこでも誰とでも共創することが出来るプラットフォームを作ることに、全力を挙げて取り組んでいます！
              </p>
              <Button
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '0',
                  border: '2px solid red',
                  float: 'right'
                }}
              >
                <a
                  href="https://www.wantedly.com/companies/boostio"
                  className="url"
                  target="_blank"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  Wantedly 🥊
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>

    <Container
      fluid
      style={{ height: '100vh', backgroundColor: '#fff', display: 'table' }}
    >
      <ResponsiveEmbed
        aspect="a16by9"
        style={{
          height: '100vh',
          position: 'absolute',
          filter: 'gray',
          webkitFilter: 'grayscale(100%)',
          filter: 'grayscale(100%)'
        }}
      >
        <embed
          type="image/svg+xml"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.700503849805!2d139.70579771512433!3d35.6597498801994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5ee8bea177%3A0x935a6bb0746ce85!2sGood+Morning+Building+by+anri!5e0!3m2!1sen!2sjp!4v1551032313688"
        />
      </ResponsiveEmbed>
      <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <Container>
          <Row>
            <Col
              lg={10}
              style={{
                textAlign: 'left',
                backgroundColor: '#fff',
                padding: '40px'
              }}
            >
              <h4 style={{ paddingBottom: '20px' }}>ABOUT</h4>
              <p>
                会社名　　　BoostIO株式会社（アメリカ子会社：IssueHunt Inc.）
              </p>
              <p>
                ミッション　
                <i>
                  "Empower every person to co-create with anyone from anywhere,
                  anytime."
                </i>
              </p>
              <p>代表者　　　横溝一将</p>
              <p>所在地　　　東京都渋谷区渋谷2-6-6 GoodMorningBuilding 201</p>
              <p>設立日　　　2014年4月1日</p>
              <p>
                事業内容　　オープンソース開発者支援、オープンソースプロジェクト運営、ソフトウェア開発
              </p>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>

    <Container
      fluid
      style={{ height: '100vh', backgroundColor: '#f8f9fa', display: 'table' }}
    >
      <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <Container>
          <Row>
            <Col lg={4}>
              <h4 style={{ textAlign: 'center' }}>CONTACT</h4>
            </Col>
            <Col lg={8}>
              <p>
                取材依頼や提供サービスなどにつきまして、こちらからお気軽にお問い合わせください。
              </p>
              <Button
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '0',
                  border: '2px solid yellow',
                  float: 'right'
                }}
              >
                <a
                  href="https://goo.gl/forms/dhou74z7zS4sXVmq2"
                  className="url"
                  target="_blank"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  問い合わせフォーム 💁
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>

    <Container
      fluid
      style={{
        marginTop: '20px',
        backgroundColor: '#fff',
        display: 'table',
        textAlign: 'center'
      }}
    >
      <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <p>© 2019 BoostIO</p>
      </Row>
    </Container>
  </div>
)
