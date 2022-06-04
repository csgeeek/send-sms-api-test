<?php include('server.php') ?> 
<!DOCTYPE html>
<html>
<head>
	<title>Registration system PHP and MySQL</title>
	<link rel="stylesheet" type="text/css" href="reg-form.css">
</head>

<body background="bg3.png">
	<div class="login-panel">
		<div class="header">
				<h2>Register</h2>
		</div>
		<form method="post" action="register.php">
			<?php include('errors.php'); ?> 
			<div class="input-group">
			<label>Username</label> <br>
			<input type="text" name="username" >
			</div>
			<div class="input-group">
			<label>Email</label> <br>
			<input type="email" name="email">
			</div>
			<div class="input-group">
			<label>Password</label>  <br>
			<input type="password" name="password_1">
			</div>
			<div class="input-group">
			<label>Confirm password</label>
			<input type="password" name="password_2">
			</div>
			<div class="input-group">
			<button type="submit" class="sbtn" id="btn" name="reg_user">Register</button>
			</div>
			<p>
				Already a member? <a href="login.php">Sign in</a>
			</p>
		</form>
	</div>
</body>
</html>