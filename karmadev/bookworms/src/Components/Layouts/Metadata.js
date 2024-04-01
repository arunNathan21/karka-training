import React from "react";
import { Helmet } from "react-helmet-async";

export const Metadata = ({title}) => {
    return (
        <>
            <Helmet>
                <title>{`${title}-BookWorms`}</title>
            </Helmet>
        </>
    )
}