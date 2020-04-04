// import React from "react";
const userData = {
  sections: [
    {
      title: "Personal Informations",
      body: {
        Name: "Mohamed Nagy",
        Address: "Hadaiq El quba,Cairo, Egypt",
        "Date of Birth": "1992/03/05",
        "Phone number": "+201115781509",
        "E-mail": "medonagy45@gmail.com",
        Linkedin: "http://linkedin.com/in/mohamednagyelewa/",
        Github: "http://github.com/medonagy45",
        "":
          "<b>Experienced full-stack developer with more than 5 years of progressive experience in the field</b>"
      },
      photo: {
        uri:
          "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg"
      }
    },
    {
      title: "Education",
      body: {
        "2009 - 2014": `
            <b>
              Engineering College , Ain-Shams University
              <br /> V.Good
            </b>
            <br />
            <span>
              Major: Electrical Engineering, Minor: Computer & Systems
              <br />
              Graduation Project (2013/2014) Excellent It was about accelerating
              electromagnetic solving equations via emulation technology.
              <br />
              sponsored by Mentor Graphics.
            </b>
            `
      }
    },
    {
      title: "Experience",
      body: {
        "06/2018 - present": `
        <b>Agrisource Data</b> <br />
        Senior Full-stack developer <br />
        Responsibilities:  <br />
        <ul>
          <li>Developing <b>AgClarity</b> using NodeJS, AngularJS and MongoDB.</li>
          <li>Using <b>AWS</b>to deploy our system and maintain reliability.</li>
          <li>Building APIs for embedded system engineers to receive sensors readings.<br></li>
          <li>Added new features to <b>Totalcommercial </b>using Laravel while maintaining the same code flow and structure.</li>
          <li>Build a mobile application For <b>AgClarity</b>using ReactJs</li>
        </ul>
`,
        "12/2016 - 06/2018": `
<b>Etisalat-Misr</b><br>
Senior Software developer<br>
Responsibilities:
<ul>
  <li>Developing <b>CSS system</b> which is an inhouse system to manage users rate-plans and subscriptions using JSF ,RichFaces , EJB,Servlets.</li>
  <li>Discuss the change made with the technical board to decide the best time to apply the change.</li>
  <li>Customizing <b>CX- BSCS IX</b>billing system to enable the user functionality based on user privileges</li>
</ul>
`,
        "12/2015 - 12/2016": `
<b>ITS</b><br>
Software developer<br>
Responsibilities:
<ul>
<li>Revamping <b>ETHIX-NET</b> banking system which was sold to a lot of big banks in MENA region using JSF,EJB , JPA and deployed on weblogic . </li>
<li>Technical supporting production banking systems and adding new enhancements using JSP ,Servlet.</li>
</ul>
`,
        "09/2014 - 12/2015": `
<b>UPS KWT</b><br>
Software developer<br>
Responsibilities:
<ul>
  <li>Implementing using SOAP  Restful web services the APIs for <b>Alshaya loyalty card</b>.</li>
  <li>Designing using Birt tool Reports for CRM system made with ADF.<br></li>
  <li>Building a communication service to send SMSs and Emails to the customers.</li>
</ul>
`
      }
    },
    {
      title: "Languages",
      body: {
        Arabic: { rating: 6 },
        English: { rating: 5 },
        German: { rating: 1 }
      }
    },
    {
      title: "Languages",
      body: {
        Arabic: { rating: 6 },
        English: { rating: 5 },
        German: { rating: 1 }
      }
    },
    {
      title: "Languages",
      body: {
        Arabic: { rating: 6 },
        English: { rating: 5 },
        German: { rating: 1 }
      }
    },
    {
      title: "Languages",
      body: {
        Arabic: { rating: 6 },
        English: { rating: 5 },
        German: { rating: 1 }
      }
    },
    {
      title: "Languages",
      body: {
        Arabic: { rating: 6 },
        English: { rating: 5 },
        German: { rating: 1 }
      }
    },
    {
      title: "Languages",
      body: {
        Arabic: { rating: 6 },
        English: { rating: 5 },
        German: { rating: 1 }
      }
    }
  ]
};

export function getUserData() {
  return userData;
}
