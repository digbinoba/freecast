export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      title: 'Project Name',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Project Picture',
      name: 'projectPic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'project-link',
      name: 'projectLink',
      type: 'url',
    },
    {
      title: 'project-description',
      name: 'projectDescription',
      type: 'string',
    },
    {
      title: 'project-tags',
      name: 'projectTags',
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
};
