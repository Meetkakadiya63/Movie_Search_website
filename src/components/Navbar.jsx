// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";

function Navbar() {
    const {  toggleColorMode } = useColorMode();
    return (
        <Flex as={'nav'} alignItems="center" justifyContent="space-between" p={6}>
            <Heading color={'red'} size={'xl'} letterSpacing={'2px'} fontWeight={'400'}>Movies4You.com</Heading>
            <IconButton
                bg={''}
                borderRadius={'full'}
                onClick={toggleColorMode}
                color={'red'}
                //icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            />
        </Flex>
    )
}

export default Navbar;