import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { SpotifyIcon, FacebookIcon, InstagramIcon, WhatsappIcon, YoutubeIcon } from "../utils/icons";

export default function Social() {
    return (
        <HStack spacing='4'>
            <Link href='https://open.spotify.com/' target='_blank' passHref><ChakraLink><SpotifyIcon width='15px' /></ChakraLink></Link>
            <Link href='https://youtube.com/' target='_blank' passHref><ChakraLink><YoutubeIcon /></ChakraLink></Link>
            <Link href='https://instagram.com/' target='_blank' passHref><ChakraLink><InstagramIcon width='15px'/></ChakraLink></Link>
            <Link href='https://facebook.com/' target='_blank' passHref><ChakraLink><FacebookIcon width='15px'/></ChakraLink></Link>
            <Link href='https://whatsapp.com/' target='_blank' passHref><ChakraLink><WhatsappIcon width='15px'/></ChakraLink></Link>
        </HStack>
    )
}