import Vue from 'vue'

const MAX_UPLOAD_SIZE = 5 * 1000 * 1000 // byte * 1000 (kb) * 1000 (mb) = X megabyte
Vue.prototype.$_MAX_UPLOAD_SIZE = MAX_UPLOAD_SIZE

const ALLOWED_FILE_FORMATS = {
  csv: 'text/csv',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  pdf: 'application/pdf',
  // ppt: 'application/vnd.ms-powerpoint',
  // pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
}
Vue.prototype.$_ALLOWED_FILE_FORMATS = ALLOWED_FILE_FORMATS

const findFileExtension = (fileName) => {
  const index = fileName.lastIndexOf('.')
  return fileName.slice(index + 1).toLowerCase()
}
Vue.prototype.$_findFileExtension = findFileExtension

const checkAllowedFileFormat = (fileExt, fileType) => {
  return Object.keys(ALLOWED_FILE_FORMATS).includes(fileExt) ?
    fileType === ALLOWED_FILE_FORMATS[fileExt] :
    false
}
Vue.prototype.$_checkAllowedFileFormat = checkAllowedFileFormat