terraform {
  backend "s3" {
    region  = "ap-southeast-1"
    bucket  = "demo-tf-backend-store-dev"
    key     = "terraform.tfstate"
    encrypt = true
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.63.0"
    }
  }
}

provider "aws" {
  region = var.region
  default_tags {
    tags = {
      Environment = var.environment
      Application = var.project
      Platform    = var.platform
      Terraform   = "true"
    }
  }
}