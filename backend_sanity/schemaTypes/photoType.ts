import {defineField, defineType} from 'sanity'

export const photoType = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'imageAddress',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required().error('Required to generate a page on website'),
      hidden: ({document}) => !document?.title,
    }),
    /* defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['landscape', 'portraits', 'wedding'],
        layout: 'radio',
      },
    }), */
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'Landscape', value: 'landscape'},
          {title: 'Portraits', value: 'portraits'},
          {title: 'Wedding', value: 'wedding'},
        ],
        layout: 'grid',
      },
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
