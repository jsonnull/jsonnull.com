// @flow
export type RenderProps = {
  content: string,
  template: string,
  siteMeta: SiteMeta
}

export type SiteMeta = {
  files: Array<FilePreview>
}

export type FilePreview = {
  pathname: string,
  snippet: string,
  data: Object
}
