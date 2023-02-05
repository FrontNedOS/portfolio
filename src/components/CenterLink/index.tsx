import React from 'react';
import {Center} from '@chakra-ui/react'
import Link from 'next/link';

const CenterLink = (props: { link: string, title: string }) => {
  return (
      <Center bg="red">
        <Link href={props.link}>{props.title}</Link>
      </Center>
  );
};

export default CenterLink;