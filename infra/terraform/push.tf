resource "aws_sns_platform_application" "mobile" {
  name = "${var.app_name}-push"
  platform = "APNS"
  platform_credential = "TODO: APNs cert"
}
