import React, { useState, useEffect } from "react"
import styles from "./Newsletter.module.scss"
import Paragraph from "../../UI/Paragraph/Paragraph"
import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
import Input from "../../UI/Input/Input"
import { FaSmile } from "react-icons/fa"

const Newsletter = ({ text }) => {
   const [isSend, setIsSend] = useState(false)
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [lang, setLang] = useState("")

   useEffect(() => {
      if (window.location.pathname) {
         setLang(window.location.pathname.substring(1, 3))
      } else {
         setLang("EN")
      }
   }, [])

   const handleSubmit = event => {
      event.preventDefault()
      fetch("https://printxl-newsletter.firebaseio.com/list.json", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            firstName: name,
            email: email,
            language: lang,
         })
      }).then(() => {
         setIsSend(true)
         setName("")
         setEmail("")
         setTimeout(() => setIsSend(false), 4000)

      })
   }

   const handleName = e => {
      setName(e.target.value)
   }
   const handleEmail = e => {
      setEmail(e.target.value)
   }

   const initialView = (
      <>
         <Paragraph addClass={styles.paragraph}>{text[5]}</Paragraph>
         <Paragraph addClass={styles.paragraph}>{text[6]}</Paragraph>
         <form className={styles.form} onSubmit={handleSubmit}>
            <Input
               val={name}
               onChange={handleName}
               type="text"
               name="name"
               placeholder={text[1]}
            />
            <Input
               val={email}
               onChange={handleEmail}
               type="email"
               name="email"
               placeholder={text[2]}
            />
            <RhombusBtn text={text[7]} type="input" />
         </form>
      </>
   )

   const afterSigning = (
      <div className={styles.afterMessageSend}>
         <Paragraph>{text[11]}</Paragraph>
         <FaSmile className={styles.icon} />
      </div>
   )

   return (
      <div className={styles.Newsletter}>
         {isSend ? afterSigning : initialView}
      </div>
   )
}
export default Newsletter

// import React, { useState, useEffect } from "react"
// import styles from "./Newsletter.module.scss"
// import Paragraph from "../../UI/Paragraph/Paragraph"
// import RhombusBtn from "../../UI/RhombusBtn/RhombusBtn"
// import Input from "../../UI/Input/Input"
// import { FaSmile } from "react-icons/fa"

// const Newsletter = ({ text }) => {
//    const [isSend, setIsSend] = useState(false)
//    const [name, setName] = useState("")
//    const [email, setEmail] = useState("")
//    const [lang, setLang] = useState("")

//    useEffect(() => {
//       if (window.location.pathname) {
//          setLang(window.location.pathname.substring(1, 3))
//       } else {
//          setLang("EN")
//       }
//    }, [])

//    const handleSubmit = event => {
//       event.preventDefault()
//       let owner, templateId, ownerId
//       switch (lang) {
//          case "PL":
//             owner = "lukasz.skoczek@printxl.pl"
//             templateId = "75745184-59b4-47cb-937a-39310cb32abf"
//             ownerId = "588583f6-25ad-4207-9bc4-0df9071ee642"
//             break
//          case "DE":
//             owner = "joanna.matuk@printxl.pl"
//             templateId = "c010328c-112c-4223-b2b6-5a8d19e36190"
//             ownerId = "c07a7f8c-ffa1-48c4-82b5-99780f311e89"
//             break
//          case "FR":
//             owner = "justyna.jankowska@printxl.pl"
//             templateId = "aa6e4f4b-10c2-4f9d-bfe8-bb8e8a36b7fe"
//             ownerId = "eca4b038-c24b-4351-af1b-643cb3c26d4d"
//             break
//          default:
//             owner = "tomasz.brzostowski@printxl.pl"
//             templateId = "aa6e4f4b-10c2-4f9d-bfe8-bb8e8a36b7fe"
//             ownerId = "29d3033e-f533-459d-a007-f29ace471a81"
//       }

//       const obj = {
//          apiKey: "abccba1",
//          clientId: "dvk3rbkyj6cogg6z",
//          sha: "f95da0390010f8f7c7253785d2b4c74596250442",
//          requestTime: 1327059355361,
//          useApiDoubleOptIn: true,
//          owner: owner,
//          apiDoubleOptInEmailTemplateId: templateId,
//          apiDoubleOptInEmailAccountId: ownerId,
//          apiDoubleOptInEmailSubject: "PrintXL - Newsletter",
//          contact: {
//             email: email,
//             name: name,
//          },
//          tags: ["prinxl.pl", lang],
//          lang: lang,
//          consentDetails: [
//             {
//                consentName: "CONFIRM",
//                consentAccept: true,
//                agreementDate: 1391167515515,
//                ip: "192.168.7.139",
//                optOut: false,
//                consentDescriptionId: 2474,
//             },
//          ],
//       }

//       fetch("https://www.salesmanago.pl/api/contact/upsert", {
//          method: "POST",
//          headers: {
//             "Accept": "application/json, application/json",
//             "Content-Type": "application/json;charset=utf-8",
//             "Access-Control-Allow-Origin": "*"
//          },
//          body: JSON.stringify(obj),
//       })
//          .then(response => response.json())
//          .then(data => {
//             setIsSend(true)
//             setName("")
//             setEmail("")
//             setTimeout(() => setIsSend(false), 4000)
//          })
//          .catch(error => {
//             console.error("!Error!:", error)
//          })
//    }

//    const handleName = e => {
//       setName(e.target.value)
//    }
//    const handleEmail = e => {
//       setEmail(e.target.value)
//    }

//    const initialView = (
//       <>
//          <Paragraph addClass={styles.paragraph}>{text[5]}</Paragraph>
//          <Paragraph addClass={styles.paragraph}>{text[6]}</Paragraph>
//          <form className={styles.form} onSubmit={handleSubmit}>
//             <Input
//                val={name}
//                onChange={handleName}
//                type="text"
//                name="name"
//                placeholder={text[1]}
//             />
//             <Input
//                val={email}
//                onChange={handleEmail}
//                type="email"
//                name="email"
//                placeholder={text[2]}
//             />
//             <RhombusBtn text={text[7]} type="input" />
//          </form>
//       </>
//    )

//    const afterSigning = (
//       <div className={styles.afterMessageSend}>
//          <Paragraph>{text[11]}</Paragraph>
//          <FaSmile className={styles.icon} />
//       </div>
//    )

//    return (
//       <div className={styles.Newsletter}>
//          {isSend ? afterSigning : initialView}
//       </div>
//    )
// }

// export default Newsletter

