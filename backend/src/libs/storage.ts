import aws from "aws-sdk"

const credentials = new aws.SharedIniFileCredentials({profile: 'b2'})
var ep = new aws.Endpoint('s3.us-west-002.backblazeb2.com')
var s3 = new aws.S3({endpoint: ep})

