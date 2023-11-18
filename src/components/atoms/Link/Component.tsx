import NextLink from "next/link";
import React from "react";
import {Props} from "./Props";
import style from './styles.module.scss'

function Component(props: Props) {
    return <NextLink className={`${props.className ?? ""} ${style.link}`} {...props}/>;
}

export default Component;
