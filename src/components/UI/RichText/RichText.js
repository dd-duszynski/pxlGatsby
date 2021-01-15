// https://www.youtube.com/watch?v=MSbpKwZMaXQ
// https://www.npmjs.com/package/@contentful/rich-text-react-renderer

import React from "react"
import styles from "./RichText.module.scss"
import H1 from "../Headers/H1"
import H2 from "../Headers/H2"
import H3 from "../Headers/H3"
import H4 from "../Headers/H3"
import Paragraph from "../Paragraph/Paragraph"
import { BLOCKS /*MARKS*/ } from "@contentful/rich-text-types"

export const RICHTEXT_OPTIONS = {
   // renderMark: {
   //    [MARKS.BOLD]: text => {
   //       return <Paragraph addClass={styles.paragraphBold}>{text}</Paragraph>
   //    },
   // },
   renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node,children) => {
         return <img src={node.data.target.fields.file["en-US"].url} className={styles.img}/>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
         return <Paragraph addClass={styles.paragraph}>{children}</Paragraph>
      },
      [BLOCKS.HEADING_1]: (node, children) => {
         return <H1>{children}</H1>
      },
      [BLOCKS.HEADING_2]: (node, children) => {
         return <H2>{children}</H2>
      },
      [BLOCKS.HEADING_3]: (node, children) => {
         return <H3>{children}</H3>
      },
      [BLOCKS.HEADING_4]: (node, children) => {
         return <H4>{children}</H4>
      },
   },
}
