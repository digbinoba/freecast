import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getProjects() {
  const projects = client.fetch(groq
    `*[_type == "project"]{
      _id,
      title,
      projectLink,
      projectDescription,
      projectTags,
      projectPic {
        asset -> {
          url
        }
      }
    }`
    );
  return projects;
}
