terraform {
  required_version = "~> 1.7"
  # backend "s3" {
  #   bucket = "TODO: your-terraform-state-bucket"
  #   key    = "state.tfstate"
  #   region = "ap-northeast-1"
  # }
}

provider "aws" {
  region = var.aws_region
}
