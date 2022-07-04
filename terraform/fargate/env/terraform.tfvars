name                = "demo-tf"
environment         = "dev"
availability_zones  = ["ap-southeast-1a", "ap-southeast-1b", "ap-southeast-1c"]
private_subnets     = ["10.0.0.0/20", "10.0.32.0/20"]
public_subnets      = ["10.0.16.0/20", "10.0.48.0/20"]
tsl_certificate_arn = "arn:aws:acm:ap-southeast-1:841902977158:certificate/3f908e84-7ac6-4bd4-947e-d4cf4596654b"
container_memory    = 512
