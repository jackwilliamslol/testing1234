<% 

    'sanitise account no
    If Request.Form("accountNumber") <> "" Then
        postAccNo = Request.Form("accountNumber")
    Else
        reportBack "No Account Number Submitted", true, ""
    End If


    'attempt to grab the users ID
    If Request.Form("userID") <> "" Then
        userID = Request.Form("userID")
    End If


   
    Set Mail = Server.CreateObject("Persits.MailSender")

    Mail.Host = "mailhost.littlewoods.co.uk"
    'Mail.From = "BluePrismAutomationTeam@shopdirect.com"
    Mail.From = ""
    Mail.Subject = "GLIT Intranet Form Submission v2" 
    Mail.FromName = "Daves Amazing Intranet Form Sender Script"

    F2MTo = " robot6.blueprism@shopdirect.com"
    'F2MTo = "dave.simonds@shopdirect.com"
    'F2MTo = "dave.simonds@theverygroup.co.uk"
    F2MToName = "Blue Prism Forms"
    Mail.AddAddress F2MTo, F2MToName

    mailBody = "email_account_number:" & vbCrLf & postAccNo & vbCrLf
    mailBody = mailBody & vbCrLf & "email_userID:" & vbCrLf & userID & vbCrLf

    For i = 1 To 20

        If Request.Form("upiNumber" & i) <> "" AND Request.Form("upiNumber" & i) <> "UPI No" Then
            mailBody = mailBody & vbCrLf & "email_upi_number_" & i & ":" & vbCrLf & Request.Form("upiNumber" & i) & vbCrLf      
            mailBody = mailBody & vbCrLf & "email_geo_code_" & i & ":" & vbCrLf & Request.Form("upiGeoCode" & i) & vbCrLf
        Else
            mailBody = mailBody & vbCrLf & "email_upi_number_" & i & ":" & vbCrLf & "n/a" & vbCrLf
            mailBody = mailBody & vbCrLf & "email_geo_code_" & i & ":" & vbCrLf & "n/a" & vbCrLf
        End if
        
    Next

    Mail.Body = mailBody
    Mail.Send
    Set Mail = nothing

    reportBack "The form was submitted successfully, Thank you", false, userID
    

    Sub reportBack(msg, isError, userID)

        If isError = true Then
            destination = "GLITForm_v2_finished.asp?msg=" & msg & "&alertType=danger"
        Else
            destination = "GLITForm_v2_finished.asp?msg=" & msg & "&alertType=success"
        End If

        If userID <> "" Then
            destination = destination & "&userID=" & userID
        End If

        Response.Redirect(destination)

    End Sub

%>