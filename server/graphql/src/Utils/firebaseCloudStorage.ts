import { Storage } from '@google-cloud/storage'
import { randomStr } from '../lib/auth'

// Create new storage instance with Firebase project credentials
const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  keyFilename: `${process.env.GCLOUD_APPLICATION_CREDENTIALS}.json`,
})

const bucket = storage.bucket(
  process.env.GCLOUD_STORAGE_BUCKET_URL
    ? process.env.GCLOUD_STORAGE_BUCKET_URL
    : 'spav5-ed370.appspot.com',
)

const generateReadSignedUrl = async (filename: string) => {
  if (!filename) {
    throw new Error('Error data to get in firebase')
  }
  try {
    // These options will allow temporary uploading of the file with outgoing
    // Content-Type: application/octet-stream header.
    const uuid = randomStr()
    // Get a v4 signed URL for uploading file
    if (filename.trim().length !== 0) {
      const [url] = await bucket.file(filename).getSignedUrl({
        version: 'v2',
        action: 'read',
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      })

      return { url, uuid }
    }

    return { url: '', uuid: '' }
  } catch (e) {
    throw new Error(e)
  }
}
module.exports = {
  generateReadSignedUrl,
}
