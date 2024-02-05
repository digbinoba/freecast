import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type ProjectType = {
  _id: string;
  title: string;
  projectPic: SanityImageSource;
  projectLink: string;
  projectDescription: string;
  projectTags: string[];
};
