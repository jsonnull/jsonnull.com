// @flow
export type RenderProps = {
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
