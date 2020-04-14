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
              Major: Computer & Systems, Minor: Electrical Engineering 
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
      title: "Software skills",
      body: {
        AngularJS: { rating: 5 },
        NodeJS: { rating: 5 },
        MongoDB: { rating: 5 },
        "React-Native": { rating: 4 },
        Sql: { rating: 4 },
        JSF: { rating: 4 },
        JSP: { rating: 4 },
        EJB: { rating: 4 },
        Hibernate: { rating: 3 },
        Laravel: { rating: 3 },
        "PL/SQL": { rating: 3 },
        Spring: { rating: 2 }
      }
    },
    {
      title: "Skills",
      body: [
        "<u><b>Languages & Scripts:</b></u> PHP / Java SE / J2EE / Shell-Scripting / Python / NodeJs",
        "<u><b>Databases:</b></u> MongoDB/ MySQL / Oracle ",
        "<u><b>Data Access Layer:</b></u> Mongoose / JPA / Hibernate / JDBC",
        "<u><b>Front End Skills:</b></u> AngularJS / ReactJS / React-Native / Primefaces / RichFaces  / JavaFX /JSP/HTML / CSS / JavaScript / JQuery ",
        "<u><b>Application Servers:</b></u> Tomcat / JBoss /  PM2 / Apache2 ",
        "<u><b>Unit Testing:</b></u> Junit /Mocha",
        "<u><b>Load Testing Tools:</b></u>Soap UI",
        "<u><b>Build Tools:</b></u> Maven / Ant / Parcel",
        "<u><b>Web Services:</b></u> RESTful / SOAP",
        "<u><b>Version Control:</b></u> SVN / GIT / CVS",
        "<u><b>IDE:</b></u> Eclipse / VSCode",
        "<u><b>Others:</b></u> EJB / AWS / Flask",
        "<u><b>Old Knowledge - Embedded Systems:</b></u> Verilog Hardware Language / Microcontroller (PIC) / Proteus Design Suite / Arduino / DC & Stepper Motor Control ."
      ]
    },
    {
      title: "Personality",
      body: [
        "Communicative",
        "Creativity",
        "Organized",
        "responsibility",
        "Self-Motivated"
      ]
    },
    {
      title: "Achievements ",
      body: [
        "Volunteering as Software Developer for Ahlan-group Charity for 2 years developed a Facebook chat-bot.",
        "Worked as a freelancer on Upwork developing a supermarket system using FXML , Java and MySQL.",
        "Having the 1st rank in the 3rd year first semester Hardware project (16 -bit processor with many added features)",
        "Having 2 publications (one is paper and the other is Journal) in the field of Accelerating Electromagnetic Solvers via Hardware Emulation"
      ]
      // },
      // {
      //   title: "Hobbies ",
      //   body: {
      //     Cycling: { icon: "bicycle" },
      //     Swimming: { icon: "swimmer" },
      //     Reading: { icon: "book-reader" }
      // }
    }
  ]
};

export function getUserData() {
  return userData;
}
