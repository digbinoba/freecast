'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../styles';
import client from '@/sanity/sanity.client';
import { getProjects } from '@/sanity/sanity.query';
import { ProjectType } from './Card';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useState, useEffect } from 'react';
import Card from './Card';


const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      const projects: ProjectType[] = await getProjects();
      setProjects(projects);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className={`${styles.paddings} relative z-10 `} id="projects">
      <div className="absolute w-[50%] inset-0 gradient-03" />

      <div className="flex justify-center flex-col items-center ">
        <h1 className={`${styles.sectionHeader}`}>Projects</h1>
        <h1 className={`${styles.sectionSubtitle} mb-4`}>
          “If a picture is worth a thousand words, a prototype is worth a
          thousand meetings” -- IDEO.org
        </h1>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={1000}
      centerMode
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        projects.map((project, index) => {
          return (
            <div className="" key={index}>
              <Card
                projectDescription={project.projectDescription}
                projectPic={urlFor(project.projectPic).width(400).url()}
                title={project.title}
                projectLink={project.projectLink}
                projectTags={project.projectTags}
              />
            </div>
          );
        })
      )}
    </Carousel>;
      </div>
    </section>
  );
}
