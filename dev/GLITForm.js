//validation and navigation functions for the GLITFormV2.htm - DS Feb-2019

function resetForm()
{
                
                //just a simple reload without re-hitting the server
                window.location.reload(false); 
                
}

function emailConfirmedRadioClicked()
{

                document.getElementById("userID").readOnly = true;

                if (document.getElementById("emailConfirmedRadio_yes").checked)
                {

                                document.getElementById("routeEndWarningDiv").hidden = true;
                                document.getElementById("courierDropdownDiv").hidden = false;

                }
                else if (document.getElementById("emailConfirmedRadio_no").checked)
                {

                                document.getElementById("routeEndWarningDiv").hidden = false;
                                document.getElementById("routeEndWarning").innerHTML = "Please ensure that you have confirmed the email address & valid mobile number with the customer and updated this in Connect if needed. If the customer does not have an email address or UK mobile number, then please transfer to Pre-Delivery <strong>161403</strong> via the warm transfer process.";
                                document.getElementById("courierDropdownDiv").hidden = true;

                }
                else
                {

                                document.getElementById("routeEndWarningDiv").hidden = true;
                                document.getElementById("courierDropdownDiv").hidden = true;

                }

}

function courierDropdownDidChange()
{

                switch (document.getElementById("courierDropdown").value)
                {

                                case "yodel":
                                                document.getElementById("geoCodeAndNotesQuesitonDiv").hidden = false;
                                                document.getElementById("geoCodeAndNotesQuesiton").innerHTML = "Have the Geocodes and Driver Notes been checked?<br><b>Remember Geocode match distance changed to 118 Ft on 03.09.2020</b>";
                                                document.getElementById("geoCodeAndNotesQuesitonWarning").innerText = "Before you can proceed please ensure that you have checked for the Geocodes using YODEL Easyview/Web Reporting and that you have also checked the driver notes before proceeding further.";
                                                document.getElementById("royalMailDropdownDiv").hidden = true;
                                                document.getElementById("SOTDropdownDiv").hidden = true;
												document.getElementById("tuffnellsDropdownDiv").hidden = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("emailConfirmedRadio_yes").disabled = true;
                                                document.getElementById("emailConfirmedRadio_no").disabled = true;
                                                document.getElementById("customerAdvice").innerHTML = "<strong>Please advise the customer:</strong><l><li>Investigation process has been started</li><li>We aim to send you an SMS within 24hrs (ensure E-Declaration scripting has been read)</li></l>";
                                                document.getElementById("jaywingQuesitonDiv").hidden = true;
                                                document.getElementById("FFMDropdownDiv").hidden = true;
                                                break;
                                case "FFM":
                                                document.getElementById("geoCodeAndNotesQuesitonDiv").hidden = true;
                                                document.getElementById("royalMailDropdownDiv").hidden = true;
                                                document.getElementById("SOTDropdownDiv").hidden = true;
                                                document.getElementById("tuffnellsDropdownDiv").hidden = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("emailConfirmedRadio_yes").disabled = true;
                                                document.getElementById("emailConfirmedRadio_no").disabled = true;
                                                document.getElementById("customerAdvice").innerHTML = "<strong>Please advise the customer:</strong><l><li>Investigation process has been started</li><li>We aim to send you an SMS within 24hrs (ensure E-Declaration scripting has been read)</li></l>";
                                                document.getElementById("jaywingQuesitonDiv").hidden = true;
                                                document.getElementById("FFMDropdownDiv").hidden = false;
                                                break;

                                case "collect+":
                                                document.getElementById("geoCodeAndNotesQuesitonDiv").hidden = true;
                                                document.getElementById("royalMailDropdownDiv").hidden = true;
                                                document.getElementById("SOTDropdownDiv").hidden = true;
												document.getElementById("tuffnellsDropdownDiv").hidden = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("emailConfirmedRadio_yes").disabled = true;
                                                document.getElementById("emailConfirmedRadio_no").disabled = true;
                                                document.getElementById("customerAdvice").innerHTML = "<strong>Please advise the customer:</strong><l><li>Investigation process has been started</li><li>As this hasn't been delivered directly to yourself I have raised an investigation with our Collect+ store</li><li>We aim to send you an SMS within 24hrs (ensure E-Declaration scripting has been read)</li></l>";
                                                document.getElementById("jaywingQuesitonDiv").hidden = false;
                                                document.getElementById("FFMDropdownDiv").hidden = true;
                                                break;

                                case "tuffnells":
                                                document.getElementById("geoCodeAndNotesQuesitonDiv").hidden = true;
												document.getElementById("geoCodeAndNotesQuesitonWarning").innerText = "Before you can proceed please ensure that you have checked the driver notes before proceeding further.";
                                                document.getElementById("royalMailDropdownDiv").hidden = true;
                                                document.getElementById("SOTDropdownDiv").hidden = true;
												document.getElementById("tuffnellsDropdownDiv").hidden = false;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("emailConfirmedRadio_yes").disabled = true;
                                                document.getElementById("emailConfirmedRadio_no").disabled = true;
                                                document.getElementById("customerAdvice").innerHTML = "<strong>Please advise the customer:</strong><l><li>Investigation process has been started</li><li>We aim to send you an SMS within 24hrs (ensure E-Declaration scripting has been read)</li></l>";
                                                document.getElementById("FFMDropdownDiv").hidden = true;
                                                break;
                                    
                                case "arrowXL":
                                                document.getElementById("geoCodeAndNotesQuesitonDiv").hidden = false;
                                                document.getElementById("geoCodeAndNotesQuesiton").innerText = "Have the Driver Notes been checked?";
                                                document.getElementById("geoCodeAndNotesQuesitonWarning").innerText = "Before you can proceed please ensure that you have checked the driver notes before proceeding further.";
                                                document.getElementById("royalMailDropdownDiv").hidden = true;
                                                document.getElementById("SOTDropdownDiv").hidden = true;
												document.getElementById("tuffnellsDropdownDiv").hidden = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("emailConfirmedRadio_yes").disabled = true;
                                                document.getElementById("emailConfirmedRadio_no").disabled = true;
                                                document.getElementById("customerAdvice").innerHTML = "<strong>Please advise the customer:</strong><l><li>Investigation process has been started</li><li>We aim to send you an SMS within 24hrs (ensure E-Declaration scripting has been read)</li></l>";
                                                document.getElementById("FFMDropdownDiv").hidden = true;
                                                break;
                                                
                                                //document.getElementById("routeEndWarning").innerHTML  = "As this is an ArrowXL parcel, please follow the BAU process and transfer to the 2-man team process via warm transfer<strong>161386</strong><br><br>Lines are open 08:00 - 20:00 Monday to Saturday (closed on Sundays)";
                                                // arrow xl was no in scope until 15th of october 2019

                                case "royalMail":
                                                document.getElementById("geoCodeAndNotesQuesitonDiv").hidden = true;
                                                document.getElementById("royalMailDropdownDiv").hidden = false;
                                                document.getElementById("SOTDropdownDiv").hidden = true;
												document.getElementById("tuffnellsDropdownDiv").hidden = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("emailConfirmedRadio_yes").disabled = true;
                                                document.getElementById("emailConfirmedRadio_no").disabled = true;
                                                //document.getElementById("customerAdvice").innerHTML  <----- set in function royalMailDropdownDidChange()
                                                document.getElementById("jaywingQuesitonDiv").hidden = true;
                                                document.getElementById("FFMDropdownDiv").hidden = true;
                                                break;
                                                
                                case "sot":
                                                document.getElementById("geoCodeAndNotesQuesitonDiv").hidden = true;
                                                document.getElementById("royalMailDropdownDiv").hidden = true;
                                                document.getElementById("SOTDropdownDiv").hidden = false;
												document.getElementById("tuffnellsDropdownDiv").hidden = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("emailConfirmedRadio_yes").disabled = true;
                                                document.getElementById("emailConfirmedRadio_no").disabled = true;
                                                document.getElementById("customerAdvice").innerHTML = "<strong>Please advise the customer:</strong><l><li>Investigation process started</li><li>This is Supplier parcel and can take up to 48 hours for supplier to carry out their investigation</li><li>We aim to provide an initial update via SMS within 24 hours</li></l>";                                                
                                                document.getElementById("jaywingQuesitonDiv").hidden = true;
                                                document.getElementById("FFMDropdownDiv").hidden = true;
                                                break;

                                default:
                                                document.getElementById("geoCodeAndNotesQuesitonDiv").hidden = true;
                                                document.getElementById("royalMailDropdownDiv").hidden = true;
                                                document.getElementById("SOTDropdownDiv").hidden = true;
												document.getElementById("tuffnellsDropdownDiv").hidden = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("emailConfirmedRadio_yes").disabled = false;
                                                document.getElementById("emailConfirmedRadio_no").disabled = false;
                                                document.getElementById("customerAdvice").innerHTML = "";
                                                document.getElementById("jaywingQuesitonDiv").hidden = true;
                                                document.getElementById("FFMDropdownDiv").hidden = true;
                                                break;
                                
                }

                switch (document.getElementById("courierDropdown").value)
                {

                                case "collect+":
                                case "arrowXL":
                                case "royalMail":
                                case "sot":
                                case "tuffnells":
                                case "FFM":

                                                lp = 1;
                                                while(document.getElementById("upiNumber" + lp)) {

                                                                document.getElementById("upiGeoCode" + lp).value = "n/a";
                                                                document.getElementById("upiGeoCode" + lp).disabled = true;
                                                                document.getElementById("upiGeoCodeValidationLabel" + lp).hidden = true;
                                                                lp++;

                                                }
                                                break;
                                
                                default:
                                                
                                                lp = 1;
                                                while(document.getElementById("upiNumber" + lp)) {
                                                
                                                                document.getElementById("upiGeoCode" + lp).value = "none";
                                                                document.getElementById("upiGeoCode" + lp).disabled = false;
                                                                document.getElementById("upiGeoCodeValidationLabel" + lp).hidden = false;
                                                                lp++;

                                                }
                                                break;
                
                                
                }

                formChanged();

}

function geoCodeAndNotesRadioClicked()
{

    document.getElementById("courierDropdown").disabled = true;

    if (document.getElementById("geoCodeAndNotesQuesitonRadios_yes").checked) {

        document.getElementById("geoCodeAndNotesQuesitonWarningDiv").hidden = true;
        document.getElementById("additionalYesNoQuesitonsDiv").hidden = false;

    } else if (document.getElementById("geoCodeAndNotesQuesitonRadios_no").checked) {

        document.getElementById("geoCodeAndNotesQuesitonWarningDiv").hidden = false;
        document.getElementById("additionalYesNoQuesitonsDiv").hidden = true;
        document.getElementById("accountNoDiv").hidden = true;

    } else {

        document.getElementById("geoCodeAndNotesQuesitonWarningDiv").hidden = true;
        document.getElementById("accountNoDiv").hidden = true;
    }

    formChanged();

}

function additionalYesNoQuesitonsRadioClicked() {

    document.getElementById("royalMailDropdown").disabled = true;
    document.getElementById("geoCodeAndNotesQuesitonRadios_yes").disabled = true;
    document.getElementById("geoCodeAndNotesQuesitonRadios_no").disabled = true;

    if (document.getElementById("photoExistsQuesitonRadios_no").checked) {
        document.getElementById("photoCompliantQuesitonRadios_na").checked = true;
    }

    if (
        (!document.getElementById("parcelCrossTheThresholdQuesitonRadios_yes").checked && !document.getElementById("parcelCrossTheThresholdQuesitonRadios_no").checked) || 
        (!document.getElementById("photoExistsQuesitonRadios_yes").checked && !document.getElementById("photoExistsQuesitonRadios_no").checked) ||
        (!document.getElementById("photoCompliantQuesitonRadios_yes").checked && !document.getElementById("photoCompliantQuesitonRadios_no").checked && !document.getElementById("photoCompliantQuesitonRadios_na").checked) ||
        (!document.getElementById("signatureCapturedQuesitonRadios_yes").checked && !document.getElementById("signatureCapturedQuesitonRadios_no").checked)
    ) {
            formChanged();
            return;
    }

    if (document.getElementById("geoCodeAndNotesQuesitonRadios_yes").checked) {

        document.getElementById("geoCodeAndNotesQuesitonWarningDiv").hidden = true;
        document.getElementById("accountNoDiv").hidden = false;

    } else if (document.getElementById("geoCodeAndNotesQuesitonRadios_no").checked) {

        document.getElementById("geoCodeAndNotesQuesitonWarningDiv").hidden = false;
        document.getElementById("accountNoDiv").hidden = true;

    } else {

        document.getElementById("geoCodeAndNotesQuesitonWarningDiv").hidden = true;
        document.getElementById("accountNoDiv").hidden = true;

    }

    if (document.getElementById("royalMailDropdown").value == "royalMailHomeDelivery") {
        document.getElementById("accountNoDiv").hidden = false;
    }

    formChanged();

}

function jaywingRadioClicked()
{

                document.getElementById("courierDropdown").disabled = true;

                if (document.getElementById("jaywingQuesitonRadios_yes").checked || document.getElementById("jaywingQuesitonRadios_no").checked)
                {

                                document.getElementById("accountNoDiv").hidden = false;

                }
                else
                {

                                document.getElementById("accountNoDiv").hidden = true;

                }

                formChanged();

}

function royalMailDropdownDidChange()
{

                switch (document.getElementById("royalMailDropdown").value)
                {

                                case "royalMailHomeDelivery":
                                                document.getElementById("courierDropdown").disabled = true;
                                                document.getElementById("accountNoDiv").hidden = true;
                                                document.getElementById("additionalYesNoQuesitonsDiv").hidden = false;
                                                document.getElementById("customerAdvice").innerHTML = "<strong>Please advise the customer:</strong><l><li>Investigation started with Royal Mail parcel</li><li>This can take up to 48 hours for them to carry out their investigation</li><li>We aim to provide an initial update via SMS within 24 hours</li></l>";
                                                break;
                                
                                case "royalMailLocalCollect":
                                                document.getElementById("courierDropdown").disabled = true;
                                                document.getElementById("accountNoDiv").hidden = false;
                                                document.getElementById("additionalYesNoQuesitonsDiv").hidden = true;
                                                document.getElementById("customerAdvice").innerHTML = "<strong>Please advise the customer:</strong><l><li>Parcel has not been delivered directly therefore investigation raised with Royal Mail</li><li>This can take up to 48 hours for them to carry out their investigation</li><li>We aim to provide an initial update via SMS within 24 hours</li></l>";
                                                break;

                                default:
                                                document.getElementById("courierDropdown").disabled = false;
                                                document.getElementById("accountNoDiv").hidden = true;
                                                break;

                }

                formChanged();
                
}

function SOTDropdownDidChange()
{
                
                switch (document.getElementById("SOTDropdown").value)
                {

                                case "deliveredTrack":
                                                document.getElementById("courierDropdown").disabled = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("accountNoDiv").hidden = false;
                                                break;

                                case "noDeliveredTrack":
                                                document.getElementById("courierDropdown").disabled = true;
                                                document.getElementById("routeEndWarningDiv").hidden = false;
                                                document.getElementById("routeEndWarning").innerHTML  = "As this is a Supplier own Transport (SOT) item without a Delivered track, please transfer to Pre-Delivery <strong>161403</strong> via the warm transfer process.";
                                                document.getElementById("accountNoDiv").hidden = true;
                                                break;

                                case "noDeliveredTrackDigitalDownload":
                                                document.getElementById("courierDropdown").disabled = true;
                                                document.getElementById("routeEndWarningDiv").hidden = false;
                                                document.getElementById("routeEndWarning").innerHTML  = "As this is a Digital Download, please transfer to Pre-Delivery <strong>161403</strong> via the warm transfer process";
                                                document.getElementById("accountNoDiv").hidden = true;
                                                break;

                                default:
                                                document.getElementById("courierDropdown").disabled = false;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("accountNoDiv").hidden = true;
                                                break;

                }

                formChanged();
}

function tuffnellsDropdownDidChange()
{
                
                switch (document.getElementById("tuffnellsDropdown").value)
                {

                                case "deliveredTrack":
                                                document.getElementById("courierDropdown").disabled = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("accountNoDiv").hidden = false;
                                                break;

                                case "noDeliveredTrack":
                                                document.getElementById("courierDropdown").disabled = true;
                                                document.getElementById("routeEndWarningDiv").hidden = false;
                                                document.getElementById("routeEndWarning").innerHTML  = "As this is a Tuffnells item without a Delivered track, please transfer to Pre-Delivery <strong>161403</strong> via the warm transfer process.";
                                                document.getElementById("accountNoDiv").hidden = true;
                                                break;

                                default:
                                                document.getElementById("courierDropdown").disabled = false;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("accountNoDiv").hidden = true;
                                                break;

                }

                formChanged();
}

function FFMDropdownDidChange()
{
                
                switch (document.getElementById("FFMDropdown").value)
                {

                                case "deliveredTrack":
                                                document.getElementById("courierDropdown").disabled = true;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("accountNoDiv").hidden = false;
                                                break;

                                case "noDeliveredTrack":
                                                document.getElementById("courierDropdown").disabled = true;
                                                document.getElementById("routeEndWarningDiv").hidden = false;
                                                document.getElementById("routeEndWarning").innerHTML  = "As this is an FFM item without a Delivered track, please transfer to Pre-Delivery <strong>161403</strong> via the warm transfer process.";
                                                document.getElementById("accountNoDiv").hidden = true;
                                                break;

                                default:
                                                document.getElementById("courierDropdown").disabled = false;
                                                document.getElementById("routeEndWarningDiv").hidden = true;
                                                document.getElementById("accountNoDiv").hidden = true;
                                                break;

                }

                formChanged();
}

function focusOnAccountNumberField() 
{

                accNoFieldVal = document.getElementById("accountNumber").value;
                if (accNoFieldVal == "Account No")
                {
                                document.getElementById("accountNumber").value = "";
                }

}

function accountNumberDidChange()
{
                
                formChanged();
                accountNoValid = validateAccountNumber();

                if (accountNoValid)
                {
                                document.getElementById("upiContainerDiv").hidden = false;
                }

}

function validateAccountNumber()
{

                //just remove spaces so that the user can paste into the field
                document.getElementById("accountNumber").value = document.getElementById("accountNumber").value.trim();

                //get rid of the hypen that can be put in when pasting from CAM
                cleanAccno = document.getElementById("accountNumber").value.replace("-","");
                document.getElementById("accountNumber").value = cleanAccno;

                accNoFieldVal = document.getElementById("accountNumber").value;
                var validCharsPattern = /[^a-z0-9]|[a-z]{2}|[0-9][a-z]/gim;

                if (accNoFieldVal.match(validCharsPattern))
                {

                                document.getElementById("accountNumber").value = "";
                                document.getElementById("accountNumberValidationLabel").innerHTML = "You Must Type a valid Account Number";
                                document.getElementById("accountNumberValidationLabel").classList.add("alert-danger");
                                document.getElementById("accountNumberValidationLabel").classList.remove("alert-warning");
                                document.getElementById("accountNumberValidationLabel").classList.remove("alert-success");

                                return false;

                }

                if (!accNoFieldVal.length)
                {

                                document.getElementById("accountNumberValidationLabel").innerHTML = "You Must Type a valid Account Number";
                                document.getElementById("accountNumberValidationLabel").classList.add("alert-danger");
                                document.getElementById("accountNumberValidationLabel").classList.remove("alert-warning");
                                document.getElementById("accountNumberValidationLabel").classList.remove("alert-success");

                                return false;

                }

                if (accNoFieldVal.length == 7)
                {

                                document.getElementById("accountNumberValidationLabel").innerHTML = "Text Entered is  " + accNoFieldVal.length + " digits long, while this is valid please double check as most account numbers are 8 digits long";
                                document.getElementById("accountNumberValidationLabel").classList.remove("alert-danger");
                                document.getElementById("accountNumberValidationLabel").classList.add("alert-warning");
                                document.getElementById("accountNumberValidationLabel").classList.remove("alert-success");


                                return true;

                }
                
                if (accNoFieldVal.length != 8)
                {

                                document.getElementById("accountNumberValidationLabel").innerHTML = "Text Entered is  " + accNoFieldVal.length + " digits long, please type a valid account number (8 digits usually)";
                                document.getElementById("accountNumberValidationLabel").classList.add("alert-danger");
                                document.getElementById("accountNumberValidationLabel").classList.remove("alert-warning");
                                document.getElementById("accountNumberValidationLabel").classList.remove("alert-success");

                                return false;

                }

                document.getElementById("accountNumberValidationLabel").innerHTML = "Account Number looks OK";
                document.getElementById("accountNumberValidationLabel").classList.remove("alert-danger");
                document.getElementById("accountNumberValidationLabel").classList.remove("alert-warning");
                document.getElementById("accountNumberValidationLabel").classList.add("alert-success");

                return true;

}

function focusOnUPINumberField(element, divIndex)
{

                upiNoFieldVal = (element).value;
                if (upiNoFieldVal == "UPI No")
                {
                                (element).value = "";
                }

                nextDivIndex = divIndex + 1;
                document.getElementById("upiDiv" + nextDivIndex).hidden = false;

}

function UPINumberDidChange(element, divIndex)
{

                formChanged();
                upiNoValid = validateUPINumber(element, divIndex, false);

                if (upiNoValid)
                {
                                document.getElementById("validateButton").hidden = false;
                }

}

//function validateUPINumber(element, divIndex, finalCheck = false)    <------ had to change this because IE is garbage
function validateUPINumber(element, divIndex, finalCheck)
{

                //just remove spaces so that the user can paste into the field
                (element).value = (element).value.trim();
                                
                upiFieldVal = (element).value;

                // if the place holder text is still present
                if (upiFieldVal == "UPI No")
                {
                                return true;
                }

                // if the field is blank
                if (!upiFieldVal.length)
                {
                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "";
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-danger");
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-success");

                                validateUPIDropdown(divIndex);

                                return true;

                }


                var validCharsPattern = /[^a-z0-9]/gim;
                if (upiFieldVal.match(validCharsPattern))
                {

                                (element).value = "";
                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "UPI Numbers can only consist of A-Z or 0-9";
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-danger");
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-success");

                                return false;

                }


                if (finalCheck)
                {

                                //this runs when the 'Validate Form' button is pressed - it cant be run before as you cannot completely validate partly-typed UPI Numbers
                                switch(document.getElementById("courierDropdown").value)
                                {
                                                
                                                case "yodel":

                                                                if (!isYodelUPICorrect(upiFieldVal))
                                                                {

                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "This UPI Does not match the critera for this courier, this UPI Number must be one of;<li>JJD00022 + 11 Digits <i>(i.e. JJD0002210322045244)</i></li><li>1 Digit, 3 Letters, 8 Digits & 1 Letter <i>(i.e. 8YPC15214304A)</i></li><li>12 Digits & 1 Letter <i>(i.e. 009437851845D)</i></li><li>11 or 13 Digits <i>(i.e. 9009724907901)</i></li>";                                                                           
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-danger");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-success");         

                                                                                return false;

                                                                }

                                                                break;

                                                case "collect+":

                                                                if (!isCollectPlusUPICorrect(upiFieldVal))
                                                                {

                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "This UPI Does not match the critera for this courier, this UPI Number must be one of;<li>1 Digit, 3 Letters, 8 Digits & 1 Letter <i>(i.e. 8YPC15214304A)</i></li><li>12 Digits & 1 Letter & always starting '009' <i>(i.e. 009437851845D)</i></li><li>11 or 13 Digits & always starting '900' <i>(i.e. 9009724907901)</i></li>";                                                                       
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-danger");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-success");         

                                                                                return false;

                                                                }

                                                                break;

                                                case "arrowXL":
                                                                
                                                                if (!isArrowXLUPICorrect(upiFieldVal))
                                                                {

                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "This UPI Does not match the critera for this courier, this UPI Number must be one of;<li>12 Digits & 1 Letter & always starting '009' <i>(i.e. 009437851845D)</i></li><li>11 or 13 Digits & always starting '900' <i>(i.e. 9009724907901)</i></li>";                                                                            
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-danger");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-success");         

                                                                                return false;

                                                                }

                                                                break;

                                                case "royalMail":
                                                                
                                                                if (!isRoyalMailUPICorrect(upiFieldVal))
                                                                {

                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "This UPI Does not match the critera for this courier, this UPI Number must be one of;<li>12 Digits & 1 Letter & always starting '009' <i>(i.e. 009437851845D)</i></li><li>2 Letters, 9 Digits & 2 Letters always ending GB <i>(i.e. MX771446055GB)</i></li>";                                                                   
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-danger");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-success");         

                                                                                return false;

                                                                }

                                                                break;

                                                case "sot":

                                                                if (!isSOTUPICorrect(upiFieldVal))
                                                                {

                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "This UPI Does not match the critera for this courier, this UPI Number must be one of;<li>11 Digits & always starting '900' <i>(i.e. 90097249079)</i></li><li>13 Digits & always starting '900' <i>(i.e. 9009724907901)</i></li>";                                                                           
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-danger");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-success");         

                                                                                return false;

                                                                }
                                                                break;
                                                case "FFM":

                                                                if (!isFFMUPICorrect(upiFieldVal))
                                                                {
    
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "This UPI Does not match the critera for this courier, this UPI Number must be 25 Digits & always starting 'F' <i>(i.e. F202106261154583605538002)</i></li>";                                                                           
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-danger");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-success");         
    
                                                                                return false;
    
                                                                }
                                                                
                                                                break;

                                                case "tuffnells":

                                                                if (!istuffnellsUPICorrect(upiFieldVal))
                                                                {

                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "This UPI Does not match the critera for this courier, this UPI Number must be one of;<li>Very - Standard - 17 Digits & always starting '01498093'<li><i>(i.e. 01498093123456789)</i></li><li>Very - Large - 17 Digits & always starting '01498094'<i>(i.e. 01498094123456789)</i></li><li>Littlewoods - Standard - 17 Digits & always starting '01498350'<i>(i.e. 01498350123456789)</i></li><li>Littlewoods � Large - 17 Digits & always starting '01498349'<i>(i.e. 01498349123456789)</i></li>";
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-danger");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                                                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-success");         

                                                                                return false;

                                                                }
                                                                break;

                                }

                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "UPI Number Looks Valid";
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-danger");
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-success");

                }
                else
                {

                                document.getElementById("upiAddressValidationLabel" + divIndex).innerHTML = "UPI Number Looks OK so far ... Please confirm this by pressing the 'Validate From' button";
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-danger");
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.remove("alert-warning");
                                document.getElementById("upiAddressValidationLabel" + divIndex).classList.add("alert-success");

                }

                validateUPIDropdown(divIndex);
                
                return true;

}

function UPIDropDownDidChange(divIndex)
{

                formChanged();
                validateUPIDropDown(divIndex);

}

function validateUPIDropdown(divIndex)
{

                upiFieldVal = document.getElementById("upiNumber" + divIndex).value;

                // just return true for fields that dont have a UPI populated
                if(upiFieldVal == "UPI No" || !upiFieldVal.length)
                {

                                document.getElementById("upiGeoCodeValidationLabel" + divIndex).innerHTML = "";
                                document.getElementById("upiGeoCodeValidationLabel" + divIndex).classList.remove("alert-danger");
                                document.getElementById("upiGeoCodeValidationLabel" + divIndex).classList.remove("alert-success");

                                return true;

                }

                //for the fileds that dont equal 'none' return true
                if(document.getElementById("upiGeoCode" + divIndex).value != "none")
                {

                                document.getElementById("upiGeoCodeValidationLabel" + divIndex).innerHTML = "Selection Looks OK";
                                document.getElementById("upiGeoCodeValidationLabel" + divIndex).classList.remove("alert-danger");
                                document.getElementById("upiGeoCodeValidationLabel" + divIndex).classList.add("alert-success");

                                return true;

                }
                else
                {
                                
                                document.getElementById("upiGeoCodeValidationLabel" + divIndex).innerHTML = "Please Select An Option";
                                document.getElementById("upiGeoCodeValidationLabel" + divIndex).classList.add("alert-danger");
                                document.getElementById("upiGeoCodeValidationLabel" + divIndex).classList.remove("alert-success");

                                return false;
                
                }

}

function validateForm()
{

                var courierOptionsCorrect = true;
                switch (document.getElementById("courierDropdown").value)
                {

                                case "yodel":
                                                if (!document.getElementById("geoCodeAndNotesQuesitonRadios_yes").checked)
                                                {              
                                                                courierOptionsCorrect = false;
                                                }
                                                break;

                                case "sot":
                                                if (document.getElementById("SOTDropdown").value != "deliveredTrack")
                                                {              
                                                                courierOptionsCorrect = false;
                                                }
                                                break;

                }

                if (!courierOptionsCorrect)
                {
                                alert("Your courier options are invalid\nPlease change the options or reset the form accordingly");
                                return false;
                }


                if (validateAccountNumber() == false)
                {
                                return false;
                }

                lp = 1;
                while(document.getElementById("upiNumber" + lp)) {

                                if (validateUPINumber(document.getElementById("upiNumber" + lp), lp, true) == false)
                                {
                                                return false;
                                }

                                if (validateUPIDropdown(lp) == false)
                                {
                                                return false;
                                }

                                lp++;

                }

                firstUPINumber = document.getElementById("upiNumber1").value
                if(firstUPINumber == "UPI No" || !firstUPINumber)
                {

                                document.getElementById("upiAddressValidationLabel1").innerHTML = "You must type <strong>at least one</strong> valid UPI Number";
                                document.getElementById("upiAddressValidationLabel1").classList.add("alert-danger");
                                document.getElementById("upiAddressValidationLabel1").classList.remove("alert-warning");
                                document.getElementById("upiAddressValidationLabel1").classList.remove("alert-success");

                                return false;

                }

                document.getElementById("validateButton").disabled = true;
                document.getElementById("validateButton").innerText = "Form Looks OK";
                document.getElementById("customerAdviceDiv").hidden = false;
                populateAnnotationField();
                document.getElementById("accountAnnotationDiv").hidden = false;
                document.getElementById("submitButton").hidden = false;

                return true;

}

function formChanged()
{

                document.getElementById("validateButton").disabled = false;
                document.getElementById("validateButton").innerText = "Validate Form";
                document.getElementById("customerAdviceDiv").hidden = true;
                document.getElementById("accountAnnotationDiv").hidden = true;
                document.getElementById("submitButton").hidden = true;

}

function formSubmitAttempted()
{

                document.getElementById("submitButton").classList.add("disabled");
                document.getElementById("formSubmittedMessage").enabled = false;
                document.getElementById("formSubmittedMessage").hidden = false;
                document.getElementById("submitButton").hidden = true;
                document.getElementById("validateButton").hidden = true;
                document.getElementById("submitButton").classList.add("hidden");
                document.getElementById("validateButton").classList.add("hidden");

}



// functions for UPI Validations
function isYodelUPICorrect(upiNo)
{

                //JJD0002210322045244 (JJD00022+11 Digits) 
                if (upiNo.match(/[a-z]{3}[0-9]{16}/gim) && upiNo.length == 19 && upiNo.substring(0, 8) == "JJD00022")
                {
                                return true;
                }

                //8YPC15214304A (1 Digit, 3 Letters, 8 Digits & 1 Letter)
                if (upiNo.match(/[0-9]{1}[a-z]{3}[0-9]{8}[a-z]{1}/gim) && upiNo.length == 13)
                {
                                return true;
                }

                //009437851845D (12 Digits & 1 Letter)
                if (upiNo.match(/[0-9]{12}[a-z]{1}/gim) && upiNo.length == 13)
                {
                                return true;
                }

                //9009724907901 (11 Digits or 13 Digits)
                if ((upiNo.match(/[0-9]{11}/gim) && upiNo.length == 11) || (upiNo.match(/[0-9]{13}/gim) && upiNo.length == 13))
                {
                                return true;
                }

                return false;

}

function isFFMUPICorrect(upiNo)
{

                //F009615854325D (Begins with 'F' & is 25 digits)
                if (upiNo.match(/[F]{1}[a-z0-9]{24}/gim))
                {
                                return true;
                }

                return false;

}

function isCollectPlusUPICorrect(upiNo)
{

                //8YPC15214304A (1 Digit, 3 Letters, 8 Digits & 1 Letter)
                if (upiNo.match(/[0-9]{1}[a-z]{3}[0-9]{8}[a-z]{1}/gim) && upiNo.length == 13)
                {
                                return true;
                }

                //009437851845D (12 Digits & 1 Letter & always starting '009')
                if (upiNo.match(/[0-9]{12}[a-z]{1}/gim) && upiNo.length == 13 && upiNo.substring(0, 3) == "009")
                {
                                return true;
                }

                //9009724907901 (11 Digits or 13 Digits & always starting '900')
                if ((upiNo.match(/[0-9]{11}/gim) && upiNo.length == 11) || (upiNo.match(/[0-9]{13}/gim) && upiNo.length == 13) && upiNo.substring(0, 3) == "900")
                {
                                return true;
                }

                return false;

}

function isArrowXLUPICorrect(upiNo)
{

                //009437851845D (12 Digits & 1 Letter & always starting '009')
                if (upiNo.match(/[0-9]{12}[a-z]{1}/gim) && upiNo.length == 13 && upiNo.substring(0, 3) == "009")
                {
                                return true;
                }

                //9009724907901 (11 Digits or 13 Digits & always starting '900')
                if ((upiNo.match(/[0-9]{11}/gim) && upiNo.length == 11) || (upiNo.match(/[0-9]{13}/gim) && upiNo.length == 13) && upiNo.substring(0, 3) == "900")
                {
                                return true;
                }

                //9009724907901 (11 Digits or 13 Digits & always starting '901')
                if ((upiNo.match(/[0-9]{11}/gim) && upiNo.length == 11) || (upiNo.match(/[0-9]{13}/gim) && upiNo.length == 13) && upiNo.substring(0, 3) == "901")
                {
                                return true;
                }

                return false;

}

function isRoyalMailUPICorrect(upiNo)
{

                //009437851845D (12 Digits & 1 Letter & always starting '009')
                if (upiNo.match(/[0-9]{12}[a-z]{1}/gim) && upiNo.length == 13 && upiNo.substring(0, 3) == "009")
                {
                                return true;
                }

                //MX771446055GB (2 Letters, 9 Digits & 2 Letters always ending GB)
                if (upiNo.match(/[a-z]{2}[0-9]{9}[a-z]{2}/gim) && upiNo.length == 13 && upiNo.substring(11, 13) == "GB")
                {
                                return true;
                }

                return false;

}

function isSOTUPICorrect(upiNo)
{

                //9009724907901 (11 Digits or 13 Digits & always starting '900')
                if ((upiNo.match(/[0-9]{11}/gim) && upiNo.length == 11) || (upiNo.match(/[0-9]{13}/gim) && upiNo.length == 13) && upiNo.substring(0, 3) == "900")
                {
                                return true;
                }

                return false;

}

function istuffnellsUPICorrect(upiNo)
{

                //01498093123456789 (17 Digits with tuffnells account number at the beginning)
                //Very Standard - 01498093
                //Very Large - 01498094
                //Littlewoods Standard - 01498350
                //Littlewoods Large - 01498349
                //Eg. 01498093xxxxxxxxx
                
                if (upiNo.match(/[0-9]{17}/gim) && upiNo.length == 17)
                {
                                return true;
                }

                return false;

}



// functions to populate the annotation
//function populateAnnotationField(defaultAnnotation = null)    <------ had to change this because IE is garbage
function populateAnnotationField(defaultAnnotation)
{

                if (defaultAnnotation)
                {
                                var annotation = defaultAnnotation;
                }
                else
                {

                                var startOfAnnotation = null;
                                var upiString = null;
                                var endOfAnnotation = null;
                                var annotation = null;

                                lp = 1;
                                while(document.getElementById("upiNumber" + lp)) {

                                                if (document.getElementById("upiNumber" + lp).value != "" && document.getElementById("upiNumber" + lp).value != "UPI No")
                                                {

                                                                if (upiString)
                                                                {
                                                                                startOfAnnotation = "GNR: GLIT-ARC: UPIS - ";
                                                                                upiString = upiString + " / " + document.getElementById("upiNumber" + lp).value;
                                                                }
                                                                else
                                                                {
                                                                                startOfAnnotation = "GNR: GLIT-ARC: UPI - ";
                                                                                upiString = document.getElementById("upiNumber" + lp).value;
                                                                }
                                                                
                                                }

                                                lp++;
                                                
                                }

                                switch (document.getElementById("courierDropdown").value)
                                {

                                                case "yodel":
                                                case "arrowXL":
                                                case "royalMail":
                                                                endOfAnnotation = " - GNR FORM COMPLETED";
                                                                break;

                                                case "collect+":
                                                               endOfAnnotation = " - STORE CONF GNR - GNR FORM COMPLETED";
                                                                if (document.getElementById("jaywingQuesitonRadios_yes").checked)
                                                                {
                                                                                endOfAnnotation += " - JAYWING FORM COMPLETED"
                                                                }
                                                                else if (document.getElementById("jaywingQuesitonRadios_no").checked)
                                                                {
                                                                                endOfAnnotation += " - JAYWING FORM NOT COMPLETED"
                                                                }
                                                                break;

                                                case "sot":
                                                                endOfAnnotation = " - GNR FORM COMPLETED";
                                                                if (document.getElementById("SOTDropdown").value == "noDeliveredTrackDigitalDownload")
                                                                {
                                                                                endOfAnnotation = " - DIGITIAL DOWNLOAD - TRANS PRE-DEL";
                                                                }
                                                                if (document.getElementById("SOTDropdown").value == "noDeliveredTrack")
                                                                {
                                                                                endOfAnnotation = " - SOT NO DEL TRACK - TRANS PRE-DEL";
                                                                }
                                                                break;
																
												case "tuffnells":
                                                                endOfAnnotation = " - GNR FORM COMPLETED";
                                                                if (document.getElementById("tuffnellsDropdown").value == "noDeliveredTrack")
                                                                {
                                                                                endOfAnnotation = " - TUFFNELLS NO DEL TRACK - TRANS PRE-DEL";
                                                                }
                                                                break;
                                                                
                                }

                                annotation = startOfAnnotation + upiString + endOfAnnotation;

                }

                document.getElementById("accountAnnotation").innerHTML = "<strong>Please now annotate the account with the following - Ensuring you add the order date at the end:</strong><br>" + annotation;
                document.getElementById("accountAnnotationTextOnly").innerText = annotation;

}

function copyAnnotationToClipboard()
{
                                
                var el = document.createElement('textarea');
                el.value = document.getElementById("accountAnnotationTextOnly").innerText.trim();

                el.setAttribute('readonly', '');
                el.style.position = 'absolute';                 
                el.style.left = '-9999px';
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);

}


//prevent users from issuing the form by pressing enter
function stopRKey(evt) 
{

                var evt = (evt) ? evt : ((event) ? event : null); 
                var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 

                if ((evt.keyCode == 13) && (node.type=="text"))
                {
                                return false;
                } 

} 
  
document.onkeypress = stopRKey; 



//username functions
function populateUserIDField()
{

                var urlParams = new URLSearchParams(window.location.search);

                if (urlParams.has('userID'))
                {
                                document.getElementById("userID").value = urlParams.get('userID');
                }

}

function focusOnUserIDField() 
{

                accNoFieldVal = document.getElementById("userID").value;
                if (accNoFieldVal == "Connect ID")
                {
                                document.getElementById("userID").value = "";
                }


}

function userIDDidChange()
{

                formChanged();
                userIDValid = validateUserID();

                if (userIDValid)
                {
                                document.getElementById("preliminaryQuestionsDiv").hidden = false;
                }
                else
                {
                                document.getElementById("preliminaryQuestionsDiv").hidden = true;
                }

}

function validateUserID()
{

                //just remove spaces so that the user can paste into the field
                document.getElementById("userID").value = document.getElementById("userID").value.trim();

                username = document.getElementById("userID").value;
                var validCharsPattern = /[a-z]{3}[0-9]{4}/gim;

                if (!username.length)
                {

                                document.getElementById("userIDValidationLabel").innerHTML = "You Must Type Your PC User ID";
                                document.getElementById("userIDValidationLabel").classList.add("alert-danger");
                                document.getElementById("userIDValidationLabel").classList.remove("alert-success");

                                return false;

                }

                if (username.length != 7 && username.length != 8)
                {

                                document.getElementById("userIDValidationLabel").innerHTML = "Text Entered is  " + username.length + " characters long, please type a valid user ID (7 characters usually)";
                                document.getElementById("userIDValidationLabel").classList.add("alert-danger");
                                document.getElementById("userIDValidationLabel").classList.remove("alert-success");

                                return false;

                }

                if (!username.match(validCharsPattern) || isNaN(username.substring(username.length - 1, username.length)))
                {

                                document.getElementById("userIDValidationLabel").innerHTML = "You Must Type a Valid PC User ID (3 letters followed by 4 or 5 numbers)";
                                document.getElementById("userIDValidationLabel").classList.add("alert-danger");
                                document.getElementById("userIDValidationLabel").classList.remove("alert-success");

                                return false;

                }

                document.getElementById("userIDValidationLabel").innerHTML = "PC User ID looks OK";
                document.getElementById("userIDValidationLabel").classList.remove("alert-danger");
                document.getElementById("userIDValidationLabel").classList.add("alert-success");

                return true;

}
