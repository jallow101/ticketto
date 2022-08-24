const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
var CryptoJS = require("crypto-js");

var QRCode = require("qrcode");

const OAuth2 = google.auth.OAuth2;
admin.initializeApp();
const firestore = admin.firestore();

let private_key = process.env.ENCRYPTION_KEY;

/**
 * Here we're using Gmail to send
 */

let qr_image;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET
);
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});
const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "ticketooleh@gmail.com",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: accessToken,
    tls: {
      rejectUnauthorized: false,
    },
  },
});

let ran = Math.random().toString(36).slice(-5);
let ranNo = Math.random().toString(36);

let emailContent;
let img;

exports.TicketReceipt = functions.firestore
  .document("events/{eventId}/vendors/{vendorId}/tickets/{ticketId}")
  .onCreate((snap, context) => {
    const clientInfo = snap.data();
    let clientName = clientInfo.fullname;
    let eventName = clientInfo.event_name;
    let eventLocation = clientInfo.location;
    let eventTime = clientInfo.timestamp.toDate().toDateString();
    let purchaseDate = clientInfo.event_date.toDate().toDateString();
    // let email = "ebrimajallow20@gmail.com";
    let email = clientInfo.email;
    let uuid = clientInfo.uid;
    let ticketPrice = clientInfo.price;
    let ticketType = clientInfo.ticket_type;

    //Create a unique encrypted qr code

    // Encrypt

    //get the name, timestamp, event, price and email on the ticket and encrypt it.
    //seperate the fields by comma.
    let encryptItems =
      clientName +
      " ," +
      eventTime +
      " ," +
      eventName +
      " ," +
      ticketPrice +
      " ," +
      uuid +
      " ," +
      email;
    //eg Musa Faal, 9298338292912,popcaan,1000,uuid,mfaal@gmail.com
    var ciphertext = CryptoJS.AES.encrypt(encryptItems, private_key).toString();

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, private_key);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    // console.log(originalText); // 'my message'
    functions.logger.info(originalText, { structuredData: true });

    const eventId = context.params.eventId;
    const vendorId = context.params.vendorId;
    const ticketId = context.params.ticketId;

    const getQr = async () => {
      const ticketQRInfo = `${clientName}-${ranNo}-${eventName}-${ran}-${email}-${ran}`;
      img = await QRCode.toDataURL(ticketQRInfo);
      // console.log("QR code generated...");
      emailContent = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
       <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
           <head>
             <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
             <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
             <!--[if !mso]><!-->
             <meta http-equiv="X-UA-Compatible" content="IE=Edge">
             <!--<![endif]-->
             <!--[if (gte mso 9)|(IE)]>
             <xml>
               <o:OfficeDocumentSettings>
                 <o:AllowPNG/>
                 <o:PixelsPerInch>96</o:PixelsPerInch>
               </o:OfficeDocumentSettings>
             </xml>
             <![endif]-->
             <!--[if (gte mso 9)|(IE)]>
         <style type="text/css">
           body {width: 677px;margin: 0 auto;}
           table {border-collapse: collapse;}
           table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
           img {-ms-interpolation-mode: bicubic;}
         </style>
       <![endif]-->
             <style type="text/css">
           body, p, div {
             font-family: arial,helvetica,sans-serif;
             font-size: 14px;
           }
           body {
             color: #000000;
           }
           body a {
             color: #1188E6;
             text-decoration: none;
           }
           p { margin: 0; padding: 0; }
           table.wrapper {
             width:100% !important;
             table-layout: fixed;
             -webkit-font-smoothing: antialiased;
             -webkit-text-size-adjust: 100%;
             -moz-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
           }
           img.max-width {
             max-width: 100% !important;
           }
           .column.of-2 {
             width: 50%;
           }
           .column.of-3 {
             width: 33.333%;
           }
           .column.of-4 {
             width: 25%;
           }
           ul ul ul ul  {
             list-style-type: disc !important;
           }
           ol ol {
             list-style-type: lower-roman !important;
           }
           ol ol ol {
             list-style-type: lower-latin !important;
           }
           ol ol ol ol {
             list-style-type: decimal !important;
           }
           @media screen and (max-width:480px) {
             .preheader .rightColumnContent,
             .footer .rightColumnContent {
               text-align: left !important;
             }
             .preheader .rightColumnContent div,
             .preheader .rightColumnContent span,
             .footer .rightColumnContent div,
             .footer .rightColumnContent span {
               text-align: left !important;
             }
             .preheader .rightColumnContent,
             .preheader .leftColumnContent {
               font-size: 80% !important;
               padding: 5px 0;
             }
             table.wrapper-mobile {
               width: 100% !important;
               table-layout: fixed;
             }
             img.max-width {
               height: auto !important;
               max-width: 100% !important;
             }
             a.bulletproof-button {
               display: block !important;
               width: auto !important;
               font-size: 80%;
               padding-left: 0 !important;
               padding-right: 0 !important;
             }
             .columns {
               width: 100% !important;
             }
             .column {
               display: block !important;
               width: 100% !important;
               padding-left: 0 !important;
               padding-right: 0 !important;
               margin-left: 0 !important;
               margin-right: 0 !important;
             }
             .social-icon-column {
               display: inline-block !important;
             }
           }
         </style>
             <!--user entered Head Start--><!--End Head user entered-->
           </head>
           <body>
             <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#4d2828;">
               <div class="webkit">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#4d2828">
                   <tr>
                     <td valign="top" bgcolor="#4d2828" width="100%">
                       <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                         <tr>
                           <td width="100%">
                             <table width="100%" cellpadding="0" cellspacing="0" border="0">
                               <tr>
                                 <td>
                                   <!--[if mso]>
           <center>
           <table><tr><td width="677">
         <![endif]-->
                                           <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:677px;" align="center">
                                             <tr>
                                               <td role="modules-container" style="padding:0px 36px 0px 36px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
           <tr>
             <td role="module-content">
               <p></p>
             </td>
           </tr>
         </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f477f875-2a21-4262-a6db-658ef2ed1493" data-mc-module-version="2019-10-22">
           <tbody>
             <tr>
               <td style="padding:18px 0px 18px 0px; line-height:23px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h3 style="text-align: center"><span style="color: #470606; font-size: 48px">TICKETTO</span></h3><div></div></div></td>
             </tr>
           </tbody>
         </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#FFFFFF" data-distribution="2,1">
           <tbody>
             <tr role="module-content">
               <td height="100%" valign="top"><table width="390" style="width:390px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
             <tbody>
               <tr>
                 <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="05dba91d-0be7-43b2-8217-aba7d429de5d" data-mc-module-version="2019-10-22">
           <tbody>
             <tr>
               <td style="padding:18px 0px 18px 0px; line-height:32px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;comic sans ms&quot;, cursive; font-size: 18px"><strong>Purchase Date:</strong></span><span style="font-family: &quot;comic sans ms&quot;, cursive; font-size: 18px">${purchaseDate}</span></div>
       <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;comic sans ms&quot;, cursive; font-size: 18px"><strong>Event:</strong></span><span style="font-family: &quot;comic sans ms&quot;, cursive; font-size: 18px">${eventName}</span></div>
       <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;comic sans ms&quot;, cursive; font-size: 18px"><strong>Time: </strong></span><span style="font-family: &quot;comic sans ms&quot;, cursive; font-size: 18px">${eventTime}</span></div>
       <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;comic sans ms&quot;, cursive; font-size: 18px"><strong>Location: </strong></span><span style="color: #000000; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline; font-family: &quot;comic sans ms&quot;, cursive; font-size: 14px">${eventLocation}</span></div>
       <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;comic sans ms&quot;, cursive; font-size: 18px"><strong>Ticket Type:</strong></span><span style="font-family: &quot;comic sans ms&quot;, cursive; font-size: 18px">Single Entrance</span></div>
       <div style="font-family: inherit; text-align: inherit"><span style="font-size: 18px; font-family: &quot;comic sans ms&quot;, cursive"><strong>Price:</strong></span><span style="font-size: 18px; font-family: &quot;comic sans ms&quot;, cursive"> D </span><span style="font-size: 18px; font-family: &quot;comic sans ms&quot;, cursive; color: #d61313">${ticketPrice}</span></div>
       <div style="font-family: inherit; text-align: inherit"><br></div>
       <div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
             </tr>
           </tbody>
         </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="528cd10f-1f61-4985-8930-f1295807ed95">
           <tbody>
             <tr>
               <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
                 <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="1px" style="line-height:1px; font-size:1px;">
                   <tbody>
                     <tr>
                       <td style="padding:0px 0px 1px 0px;" bgcolor="#a59e9e"></td>
                     </tr>
                   </tbody>
                 </table>
               </td>
             </tr>
           </tbody>
         </table></td>
               </tr>
             </tbody>
           </table><table width="195" style="width:195px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
             <tbody>
               <tr>
                 <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="5e509ed0-7244-4fdd-b920-d33b474ee08f" data-mc-module-version="2019-10-22">
           <tbody>
             <tr>
               <td style="padding:18px 0px 18px 0px; line-height:17px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;courier new&quot;, courier, monospace">Order No: 7-${ran}-2</span></div>
       <div style="font-family: inherit; text-align: inherit"><br></div>
       <div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;courier new&quot;, courier, monospace">Payment Method: </span><span style="font-family: &quot;courier new&quot;, courier, monospace"><em>Paypal</em></span></div><div></div></div></td>
             </tr>
           </tbody>
         </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="5b64f945-3029-46f6-b900-8af9a4ead88c">
           <tbody>
             <tr>
               <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="left">
                 <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="195" alt="" data-proportionally-constrained="true" data-responsive="true" src="${img}">
               </td>
             </tr>
           </tbody>
         </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="cb9b0192-6f8c-4eb4-9ac6-6927b10e53c8">
           <tbody>
             <tr>
               <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
                 <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="1px" style="line-height:1px; font-size:1px;">
                   <tbody>
                     <tr>
                       <td style="padding:0px 0px 1px 0px;" bgcolor="#a59e9e"></td>
                     </tr>
                   </tbody>
                 </table>
               </td>
             </tr>
           </tbody>
         </table></td>
               </tr>
             </tbody>
           </table></td>
             </tr>
           </tbody>
         </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="271cd58c-8a69-42e4-a026-617dd0ba8b47">
           <tbody>
             <tr>
               <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                 <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:20% !important; width:20%; height:auto !important;" width="121" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/fe260154e7f619a8/072eb2e6-8ff3-4a16-a91e-2d722a862df5/2630x1630.png">
               </td>
             </tr>
           </tbody>
         </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"><div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div><p style="font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="">Unsubscribe</a></p></div></td>
                                             </tr>
                                           </table>
                                           <!--[if mso]>
                                         </td>
                                       </tr>
                                     </table>
                                   </center>
                                   <![endif]-->
                                 </td>
                               </tr>
                             </table>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                 </table>
               </div>
             </center>
           </body>
         </html>`;
    };

    const sendEmail = async () => {
      await getQr();

      const mailOptions = {
        from: "jallow.co.nr@gmail.com", // You can write any mail Adress you want this doesn't effect anything
        to: email, // This mail adress should be filled with any mail you want to read it
        tile: clientName + " Your Ticket Is Here",
        subject: `${eventName} Ticket`, // Sample Subject for you template
        attachDataUrls: true,
        html: emailContent,
        // email content in HTML. You can write any Html template in here
      };

      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        // console.log("Message sent: " + info.response);
      });
    };

    //sendEmail();
    // Get a reference to the restaurant
    let referencePath = "events/"+eventId+"/vendors/"+vendorId+"/tickets"+ticketId;
    const adminRef = firestore.collection(referencePath)
     
    // console.log("Query Docuemnt ", adminRef);

   return adminRef
      .update({
        qrcode: ciphertext
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  });
