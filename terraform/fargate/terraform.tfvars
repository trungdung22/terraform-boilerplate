name                = "demo-project"
environment         = "dev"
availability_zones  = ["eu-central-1a", "eu-central-1b"]
private_subnets     = ["10.0.0.0/20", "10.0.32.0/20"]
public_subnets      = ["10.0.16.0/20", "10.0.48.0/20"]
tsl_certificate_arn = "arn:aws:acm:eu-central-1:841902977158:certificate/c11d47c9-480f-408b-a8bd-062f5fa3abc5"
container_memory    = 512
