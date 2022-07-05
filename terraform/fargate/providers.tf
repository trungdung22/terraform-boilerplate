terraform {
  backend "s3" {
    encrypt = true
    region  = var.region 
    bucket  = var.s3_bucket
    key     = var.s3_key
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