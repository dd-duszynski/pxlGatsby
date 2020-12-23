//https://www.youtube.com/watch?v=MSbpKwZMaXQ
//https://www.npmjs.com/package/@contentful/rich-text-react-renderer
import React from "react"
import styles from "./RichText.module.scss"
import H2 from "../Headers/H2"
import H3 from "../Headers/H3"
// import Subtitle from "../Subtitle/Subtitle"
import Paragraph from "../Paragraph/Paragraph"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

export const RICHTEXT_OPTIONS = {
   renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
         return <Paragraph addClass={styles.paragraph}>{children}</Paragraph>
      },
      [BLOCKS.HEADING_2]: (node, children) => {
         return <H2>{children}</H2>
      },
      [BLOCKS.HEADING_3]: (node, children) => {
         return <H3>{children}</H3>
      },
      [MARKS.BOLD]: (node, children) => {
         return (
            <Paragraph addClass={styles.paragraphBold}>{children}</Paragraph>
         )
      },
   },
}

