const AwsS3 = require('@uppy/aws-s3')
const Uppy = require('@uppy/core')
const Dashboard = require('@uppy/dashboard')
require('@uppy/core/dist/style.css')
require('@uppy/dashboard/dist/style.css')

const uppy = new Uppy()
    .use(Dashboard, {
        trigger: '#select-files'
    })
    .use(AwsS3, {
        limit: 2,
        timeout: 1000 * 60,
        companionUrl: 'https://uppy-companion.myapp.com/'
    })

uppy.on('complete', (result) => {
    console.log('Upload complete! We’ve uploaded these files:', result.successful)
})
