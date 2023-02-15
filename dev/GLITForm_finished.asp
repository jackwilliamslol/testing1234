<!DOCTYPE html>
<html lang="en">

	<head>

		<!--

			Form and corresponding files created by Dave Simonds Nov-2018

		-->


		<!-- Boot Strap Includes!-->

			<!-- Latest compiled and minified CSS -->
			<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
			<link rel="stylesheet" href="bootstrapV4files/bootstrap.min.css">
			
			<!-- Latest compiled JavaScript files -->
			<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
			<script src="bootstrapV4files/jquery-3.3.1.slim.min.js"></script>
			<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> -->
			<script src="bootstrapV4files/popper.min.js"></script>
			<!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
			<script src="bootstrapV4files/bootstrap.min.js"></script>

		<!-- Boot Strap Includes!-->


		<title>GNR Investgation Intranet Form v2.0.0 - Dave Simonds</title>
		<link rel="stylesheet" href="ds_style.css?5">


	</head>

	<body class="container col-md-10 offset-md-1 col-lg-8 offset-lg-2">
		
		<div class="row container" style="padding-top:20px;padding-bottom:30px">
			<img src="images/shopdirectlogo.jpg" class="rounded mx-auto d-block" width="auto" height="100px">
			<img src="images/webhelplogo.jpg" class="rounded mx-auto d-block" width="auto" height="100px">
		</div>

		<h1>GNR Referal Form Post Delivery</h1>

		<div class="alert alert-<% response.write(request.querystring("alertType")) %>"><% response.write(request.querystring("msg")) %></div>

		<%

			If Request.querystring("userID") <> "" Then
			
				querystring = "?userID=" & Request.querystring("userID")
			
			Else
			
				querystring = ""
			
			End If

		%>

		<a href='GLITForm.htm<% response.write(querystring) %>' class="btn btn-block btn-lg btn-primary" type="button">Back To Form</a>

	</body>

	
	<!-- crappy standard intranet footer!-->

	<div id="timeStamp2" style="padding: 40px;text-align: center;">
		<script>
			var author = "Dave Simonds (Blue Prism)";
			var contact = "<a href='mailto:dave.simonds@shopdirect.com'>Dave Simonds</a>";
			if (contact == "") {
				document.write("Author: " + author + ", Last Updated: ");
			} else {
				document.write("Author: " + author + ", " + contact + ", Last Updated: ");
			}
		</script>
		<!--webbot bot="Timestamp" S-Type="EDITED" S-Format="%d/%m/%Y %I:%M:%S %p" startspan -->15/04/2019 03:11:57 PM<!--webbot bot="Timestamp" i-checksum="29546" endspan -->
		<br>
		<!--webbot bot="HitCounter" i-image="4" I-ResetValue="0" I-Digits="0" U-Custom startspan --><img src="../../../../_vti_bin/fpcount.exe/?Page=process_improvement/Blue%20Prism/glit_form/prod/GLITForm_finished.asp|Image=4" alt="Hit Counter"><!--webbot bot="HitCounter" i-checksum="43250" endspan -->
	</div><!-- comment: replaced redundant code 4 -->

	<!-- crappy standard intranet footer!-->


</html>