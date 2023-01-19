import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import VideoSection from 'components/VideoSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import YoutubeVideo from 'components/YoutubeVideo';
import Hero from 'views/HomePage/Hero';
import SectionTitle from 'components/SectionTitle';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Automating the dull feedback types of code reviews using deep learning in order to let humans focus on the stimulating parts."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <VideoSection youtubeUrl="https://www.youtube.com/watch?v=rR4n-0KYeKQ" title="Lorem ipsum dolor sit amet consectetur." overTitle="sit amet gogo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </p>
          </VideoSection>
          <VideoWrapper>
            <SectionTitle>Section title</SectionTitle>
            <YoutubeVideo title="Video title" url="https://www.youtube.com/watch?v=rR4n-0KYeKQ" />
          </VideoWrapper>
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const VideoWrapper = styled.div`
  & > *:not(:first-child) {
    margin-left: 15rem;
    margin-right: 15rem;
  }
`;

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
