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


    For i = 1 To 5

        If Request.Form("upiNumber" & i) <> "" AND Request.Form("upiNumber" & i) <> "UPI No" Then

            Set Mail = Server.CreateObject("Persits.MailSender")

            Mail.Host = "mailhost.littlewoods.co.uk"
            Mail.From = "BluePrismAutomationTeam@theverygroup.com"
            Mail.From = ""
            Mail.Subject = "GLIT Intranet Form Submission" 
            Mail.FromName = "Daves Amazing Intranet Form Sender Script"

            F2MTo = "robot6.blueprism@theverygroup.com"
            'F2MTo = "dave.simonds@shopdirect.com"
            'F2MTo = "andrew.hardman3@shopdirect.com"
            F2MToName = "Blue Prism Forms"
            Mail.AddAddress F2MTo, F2MToName

            If Request.Form("upiGeoCode" & i) <> "" Then

                upiCode = Request.Form("upiGeoCode" & i)

            Else

                upiCode = "n/a"
                
            End if

            mailBody = "email_account_number:" & vbCrLf & postAccNo & vbCrLf
            mailBody = mailBody & vbCrLf & "email_userID:" & vbCrLf & userID & vbCrLf
            mailBody = mailBody & vbCrLf & "email_upi_number:" & vbCrLf & Request.Form("upiNumber" & i) & vbCrLf
            mailBody = mailBody & vbCrLf & "email_geo_code:" & vbCrLf & upiCode & vbCrLf

            Mail.Body = mailBody
        
            Mail.Send
            Set Mail = nothing

        End If 

    Next

    reportBack "The form was submitted successfully, Thank you", false, userID


    Sub reportBack(msg, isError, userID)

        If isError = true Then

            destination = "GLITForm_finished.asp?msg=" & msg & "&alertType=danger"

        Else

            destination = "GLITForm_finished.asp?msg=" & msg & "&alertType=success"

        End If


        If userID <> "" Then

            destination = destination & "&userID=" & userID

        End If

        Response.Redirect(destination)

    End Sub

%>