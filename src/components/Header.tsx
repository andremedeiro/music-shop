import { Container, Flex, FlexProps, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

import Social from "./Social";

export default function Header(props: FlexProps) {
    return(
        <Flex
          as='header'
          width='100%'
          minHeight='100px'
          justify='center'
          align='center'
          
          borderBottom='1px'
          borderColor='gray'

          position='sticky'
          top='0'

          zIndex='10'

          backdropFilter='blur(6px)'
          
          {...props}
        >

            <Container>

                <Flex justify='space-between' align='center'>

                    <Link href='#' passHref>
                        <ChakraLink bgGradient='linear(to-r, blue, red 50%)' bgClip='text' width='fit-content' fontFamily='Dela Gothic One' fontWeight='normal'>Garanta o seu!</ChakraLink>
                    </Link>
                    
                    <Image src='/logo.svg' height='45px' paddingY='7px' width='200px' bg='black' borderRadius='full' />

                    <Social/>
                </Flex>


            </Container>

        </Flex>
    )    
}