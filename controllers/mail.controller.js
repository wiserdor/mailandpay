const Mail = require("../models/mail.model");
const passport = require("passport");


exports.get_mail = (req, res, next) => {
    return res.send([{
        title:"ארנונה - עיריית תל-אביב-יפו",
        body:`
        מצורף תלוש הארנונה שלך לתקופה 01.03.2020 - 30.04.2020
        בעבור הכתובת סולד הנרייטה 27 תל אביב - יפו, חשבון 11021219.
        
        הסכום לתשלום הוא 623.35 ש"ח.
        
        לתשלום התלוש - לחץ כאן`,
        payment_link:"https://www.mybills.co.il/mobilePayments.aspx?paymentId=147&accountNum=11021219&payNum=1018016612",
        pdf_links:["https://mail.google.com/mail/u/0?ui=2&ik=ac684c1606&attid=0.2&permmsgid=msg-f:1659967958801716530&th=170964104ae81532&view=att&disp=inline",
    "https://mail.google.com/mail/u/0?ui=2&ik=ac684c1606&attid=0.1&permmsgid=msg-f:1659967958801716530&th=170964104ae81532&view=att&disp=inline"],
        paid:false,
        date_sent:Date.now()
    },
    {
        title:"ארנונה - עיריית תל-אביב-יפו",
        body:`
        מצורף תלוש הארנונה שלך לתקופה 01.03.2020 - 30.04.2020
        בעבור הכתובת סולד הנרייטה 27 תל אביב - יפו, חשבון 11021219.
        
        הסכום לתשלום הוא 623.35 ש"ח.
        
        לתשלום התלוש - לחץ כאן`,
        payment_link:"https://www.mybills.co.il/mobilePayments.aspx?paymentId=147&accountNum=11021219&payNum=1018016612",
        pdf_links:["https://mail.google.com/mail/u/0?ui=2&ik=ac684c1606&attid=0.2&permmsgid=msg-f:1659967958801716530&th=170964104ae81532&view=att&disp=inline",
    "https://mail.google.com/mail/u/0?ui=2&ik=ac684c1606&attid=0.1&permmsgid=msg-f:1659967958801716530&th=170964104ae81532&view=att&disp=inline"],
        paid:false,
        date_sent:Date.now()
    },{
        title:"ארנונה - עיריית תל-אביב-יפו",
        body:`
        מצורף תלוש הארנונה שלך לתקופה 01.03.2020 - 30.04.2020
        בעבור הכתובת סולד הנרייטה 27 תל אביב - יפו, חשבון 11021219.
        
        הסכום לתשלום הוא 623.35 ש"ח.
        
        לתשלום התלוש - לחץ כאן`,
        payment_link:"https://www.mybills.co.il/mobilePayments.aspx?paymentId=147&accountNum=11021219&payNum=1018016612",
        pdf_links:["https://mail.google.com/mail/u/0?ui=2&ik=ac684c1606&attid=0.2&permmsgid=msg-f:1659967958801716530&th=170964104ae81532&view=att&disp=inline",
    "https://mail.google.com/mail/u/0?ui=2&ik=ac684c1606&attid=0.1&permmsgid=msg-f:1659967958801716530&th=170964104ae81532&view=att&disp=inline"],
        paid:false,
        date_sent:Date.now()
    },{
        title:"ארנונה - עיריית תל-אביב-יפו",
        body:`
        מצורף תלוש הארנונה שלך לתקופה 01.03.2020 - 30.04.2020
        בעבור הכתובת סולד הנרייטה 27 תל אביב - יפו, חשבון 11021219.
        
        הסכום לתשלום הוא 623.35 ש"ח.
        
        לתשלום התלוש - לחץ כאן`,
        payment_link:"https://www.mybills.co.il/mobilePayments.aspx?paymentId=147&accountNum=11021219&payNum=1018016612",
        pdf_links:["https://mail.google.com/mail/u/0?ui=2&ik=ac684c1606&attid=0.2&permmsgid=msg-f:1659967958801716530&th=170964104ae81532&view=att&disp=inline",
    "https://mail.google.com/mail/u/0?ui=2&ik=ac684c1606&attid=0.1&permmsgid=msg-f:1659967958801716530&th=170964104ae81532&view=att&disp=inline"],
        paid:false,
        date_sent:Date.now()
    },
    {
        title:"electricity",
        body:"you need to pay 333000 nis",
        payment_link:"www.google.com",
        pdf_links:[],
        paid:true,
        date_sent:Date.now()
    },])
}