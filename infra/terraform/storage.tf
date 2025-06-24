resource "aws_s3_bucket" "static" {
  bucket = "${var.app_name}-static"
}

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.static.bucket_regional_domain_name
    origin_id   = "static"
  }
  enabled             = true
  default_root_object = "index.html"
}
