let currentCaptcha = "";

function generateCaptcha() {
    currentCaptcha = Math.floor(
        100000 + Math.random() * 900000
    ).toString();

    document.getElementById(
        "captchaText"
    ).innerText = currentCaptcha;
}


generateCaptcha();

window.onload = function () {

const params =
    new URLSearchParams(
        window.location.search
    );

const cert =
    params.get("cert");

if(cert){

    document.getElementById(
        "certificateNumber"
    ).value = cert;

}

};


function verifyCertificate() {

    const certNumber =
        document.getElementById(
            "certificateNumber"
        ).value.trim();

    const enteredCaptcha =
        document.getElementById(
            "captchaInput"
        ).value.trim();

    if (enteredCaptcha !== currentCaptcha) {

        alert("Wrong CAPTCHA");

        generateCaptcha();

        return;
    }

    const cert =
        certificates[certNumber];

    const resultBox =
        document.getElementById(
            "resultBox"
        );

    if (cert) {

        resultBox.style.display = "block";

        resultBox.innerHTML = `

<p class="result-title">
Certificate Verification Service
</p>

<p class="result-intro">
We hereby confirm that the Certificate number entered corresponds to the following details available in our Certificate Registry:
</p>

<div class="cert-card">

<div class="cert-card-header">

<div class="lc-logo">
<span class="lc-text">
LANGUAGECERT
</span>
</div>

</div>

<table class="cert-table">

<tr>
<td>Certificate number</td>
<td>${certNumber}</td>
</tr>

<tr>
<td>First Name</td>
<td>${cert.firstName}</td>
</tr>

<tr>
<td>Last Name</td>
<td>${cert.lastName}</td>
</tr>

<tr>
<td>Certificate Type</td>
<td>${cert.certificateType}</td>
</tr>

<tr>
<td>Module</td>
<td>${cert.module}</td>
</tr>

<tr>
<td>Exam Date</td>
<td>${cert.examDate}</td>
</tr>

</table>

</div>

<div class="cert-footer">
The present does not substitute the certificate.
</div>

<div style="text-align:left;max-width:500px;margin:0 auto;">
<button class="print-btn" onclick="window.print()">
Print
</button>
</div>

`;

    } else {

        resultBox.style.display = "block";

        resultBox.innerHTML = `
        <h2 style="color:red;">
            Certificate Not Found
        </h2>
        `;
    }
}