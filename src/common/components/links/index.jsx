import React from 'react';
import {Container, Link} from "./styled";

export const Links = () => {
    return (
        <Container>
            {PROJECTS.map(project => <Link key={project} href={`/${project}/`}>{project}</Link>)}
        </Container>
    );
};
