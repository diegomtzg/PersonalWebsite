import React from "react";
import cx from "clsx";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { Row, Item } from "@mui-treasury/components/flex";

export default function CustomCard({
  styles,
  cover,
  logo,
  title,
  brand,
  date,
  projectInfo,
}) {
  const mediaStyles = useCoverCardMediaStyles();
  return (
    <Box className={cx(styles.root, styles.color)} pt={20}>
      <CardMedia image={cover} className={styles.cover} classes={mediaStyles} />
      <Box className={styles.content} p={2}>
        <Box position={"relative"} zIndex={1}>
          <Row p={0} gap={2}>
            <Item>
              <Avatar className={styles.logo} src={logo} />
            </Item>
            <Item position={"bottom"}>
              <h2 className={styles.title}>{title}</h2>
            </Item>
          </Row>
          <Row mt={4} alignItems={"center"}>
            <Item>
              <div className={styles.team}>{brand}</div>
            </Item>
            <Item position={"right"}>
              <div className={styles.date}>{date}</div>
            </Item>
          </Row>
        </Box>
      </Box>
    </Box>
  );
}
