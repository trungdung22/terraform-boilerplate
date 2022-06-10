terraform {
  required_version = ">0.14.7"
  backend "s3" {}

  required_providers {
    aws = {
      version = ">= 3.66.0"
      source  = "hashicorp/aws"
    }
  }
}
