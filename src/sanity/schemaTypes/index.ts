import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import {authorType} from "@/sanity/schemaTypes/authorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, postType],
}
