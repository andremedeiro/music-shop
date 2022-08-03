import { Container, Flex, Heading, Stack, Link as ChakraLink, Image, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhatsApp from "../../components/WhatsAppBallon";

export default function Page() {
    return (
        <Flex
            width='100%'
            height='100%'
            flexDirection='column'
        >
            <Header/>

            <Flex as='main' flexDirection='column'>

                <Flex
                    as='section'
                    width='100%'
                    height='90vh'
                    minHeight='480px'
                    alignItems='center'
                    bg='linear-gradient(135deg,#141414 30%, #14141455), url(/caio-silva-C7RFkKvThG4-unsplash.jpg)'
                    bgSize='cover'
                >
                    <Container>
                        <Stack spacing='2'>
                            <Heading as='h1' maxWidth='500px' size='2xl' marginBottom='5'>Queremos te inspirar a ir muito além dos seus limites!</Heading>
                            <Link href='#' passHref>
                                <ChakraLink bgGradient='linear(to-r, blue, red 50%)' bgClip='text' fontSize='xl' width='fit-content' fontWeight='bold'>Clique e conheça nossa coleção!</ChakraLink>
                            </Link>
                            <Flex bgGradient='linear(to-r, blue, red 120%)' height='3px' width='100px'/>
                        </Stack>
                    </Container>
                </Flex>

                <Flex as='section' width='100%' paddingY='50px' bg='white' alignItems='center'>
                    <Container>
                        <Heading as='h2' color='black' fontSize='22' marginBottom='50px'>Chegamos para ficar!</Heading>

                        <HStack justify='space-between' spacing='4' width='100%' whiteSpace='nowrap' overflowX='scroll'>
                            <Category href='/' name="Violões" bg='url(/guitar.png)' />
                            <Category href='/' name="Bags" bg='url(/bags.png)' />
                            <Category href='/' name="LifeStyle" bg='url(/lifestyle.png)' />
                            <Category href='/' name="Assets" bg='url(/assets.png)' />
                        </HStack>

                        <Text color='gray' marginTop='20px' fontSize='sm'>*Nós não produzimos violões e bags! Nós traduzimos sentimentos de pessoas por música e seus instrumentos assim como você.</Text>
                    </Container>
                </Flex>

                <Flex as='section' width='100%' paddingY='100px' bg='white' alignItems='center'>
                    <Container>
                        <HStack spacing='50px'>
                            <Flex position='relative'>
                                <Image src='/asterisk.svg' width='35px' position='absolute' top='0' left='0'/>
                                <Flex border='3px solid' borderColor='black' width='320px' height='400px' borderRadius='200px 10px 10px 10px' bg='linear-gradient(#14141455 50%, #141414), url(/pexels-cottonbro-4088014.jpg)' bgSize='cover'/>
                            </Flex>
                            <Stack flexDirection='column' spacing='3'>
                                <Heading color='black' fontSize='20px' marginBottom='20px'>Quem somos?<br/>De onde viemos?</Heading>
                                <Text color='gray' fontSize='16px' lineHeight='18px'>Viemos de longe...</Text>
                                <Text color='gray' fontSize='16px' lineHeight='18px'>Aprendizes de Hefesto - Deus da Tecnologia, dos ferreiros, artesãos, escutores e tudo aquilo que há força e criatividade. Nascemos do fogo e da floresta!</Text>
                                <Text color='gray' fontSize='16px' lineHeight='18px'>Em uma noite tempestuosa, nosso lider acordou com um sonho futuristico de poderosos violões que encatavam os ouvidos do mundo. Nisto encontramos nosso desejo e o realizamos!</Text>
                                <Text color='gray' fontSize='16px' lineHeight='18px'>Chegamos a produzir instrumentos para grandes artistas como: Biliu de Campina, Fubica da Viola e Zé da Timba!</Text>
                                <Text color='gray' fontSize='16px' lineHeight='18px'>Hoje nossa produção está acontecendo em um dos centros mais movimentado do mundo, a Feira da Prata, e a venda no mais alto comércio da sociedade: A Feita de Troca! </Text>
                            </Stack>
                        </HStack>
                    </Container>
                </Flex>

                <Footer/>
                <WhatsApp/>

            </Flex>
        </Flex>
    )
}