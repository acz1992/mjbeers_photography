/* import type {StructureResolver} from 'sanity/structure'
import {ImagesIcon, SparklesIcon, UserIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Landscape Photos')
        .schemaType('photo')
        .icon(ImagesIcon)
        .child(S.documentList().title('Landscape Photos').filter('category == "landscape"')),
      S.listItem()
        .title('Portait Photos')
        .schemaType('photo')
        .icon(UserIcon)
        .child(S.documentList().title('Portait Photos').filter('category == "portraits"')),
      S.listItem()
        .title('Wedding Photos')
        .schemaType('photo')
        .icon(SparklesIcon)
        .child(S.documentList().title('Wedding Photos').filter('category == "wedding"')),
      S.divider(),
    ])
 */
