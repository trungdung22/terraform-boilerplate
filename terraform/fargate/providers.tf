terraform {
  backend "s3" {
    bucket  = "demo-tf-backend-store"
    encrypt = true
    key     = "terraform.tfstate"
    region  = "eu-central-1"
    # dynamodb_table = "terraform-state-lock-dynamo" - uncomment this line once the terraform-state-lock-dynamo has been terraformed
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