resource "aws_ecr_repository" "api" {
  name = "${var.app_name}-api"
}

resource "aws_apprunner_service" "api" {
  service_name = "${var.app_name}-api"
  source_configuration {
    authentication_configuration {
      access_role_arn = aws_iam_role.apprunner.arn
    }
    image_repository {
      image_configuration { port = "3000" }
      image_identifier      = aws_ecr_repository.api.repository_url
      image_repository_type = "ECR"
    }
  }
}

resource "aws_iam_role" "apprunner" {
  name = "apprunner-role"
  assume_role_policy = jsonencode({
    Version: "2012-10-17",
    Statement: [{ Effect: "Allow", Principal: { Service: "build.apprunner.amazonaws.com" }, Action: "sts:AssumeRole" }]
  })
}
