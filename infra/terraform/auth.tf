resource "aws_cognito_user_pool" "users" {
  name = "${var.app_name}-users"
}

resource "aws_cognito_user_pool_client" "web" {
  name         = "web"
  user_pool_id = aws_cognito_user_pool.users.id
  allowed_oauth_flows_user_pool_client = true
  callback_urls = ["http://localhost"]
}
