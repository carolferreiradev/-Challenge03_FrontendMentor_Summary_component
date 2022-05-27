import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { GithubLogo } from "phosphor-react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Summary Component</title>
      </Head>

      <Link
        target="_blank"
        href="https://github.com/carolferreiradev"
        display="flex"
        justifyContent="center"
        alignItems="center"
        title="Acessar Github"
        position="absolute"
        zIndex={2}
        top="2"
        right="10"
        width="40px"
        height="40px"
        borderRadius="full"
        bg="blue.700"
        boxShadow="lg"
        colorScheme="blue.500"
        _hover={{
          background: "blue.750",
        }}
      >
        <GithubLogo color="white" />
      </Link>

      <Flex
        h="100vh"
        w="100vw"
        alignItems="center"
        justifyContent="center"
        className="container"
      >
        <Image
          src="/pattern-background-desktop.svg"
          alt="Hero"
          layout="fill"
          className="hero-background"
        />
        <Flex
          flexDir="column"
          width={350}
          zIndex={1}
          height="auto"
          bg="blue.500"
          borderRadius="2xl"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            position="relative"
            width={350}
            height="180px"
            className="sounds-play"
          >
            <Image
              src="/illustration-hero.svg"
              alt="Hero"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Flex flexDir="column" height="60%" py={8} px={10}>
            <Heading
              textAlign="center"
              color="blue.900"
              fontSize="1.3rem"
              pb={5}
              fontWeight="900"
            >
              Order Summary
            </Heading>
            <Text textAlign="center" pb={5} fontSize="0.8rem">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </Text>

            <Flex
              bg="blue.400"
              borderRadius={12}
              pt={6}
              pb={6}
              pr={3}
              pl={3}
              mb={8}
              alignItems="center"
            >
              <Flex alignItems="center" w="100%">
                <Box position="relative" width={35} height={35}>
                  <Image
                    src="/icon-music.svg"
                    alt="Icon Music"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>

                <Flex flexDir="column" marginLeft="4">
                  <Heading
                    fontSize="0.8rem"
                    fontWeight="extrabold"
                    color="blue.900"
                  >
                    Annual Plan
                  </Heading>
                  <Text fontSize="0.8rem">$59.99/year</Text>
                </Flex>
              </Flex>

              <Link
                fontSize="0.8rem"
                href="#"
                color="blue.700"
                textDecoration="underline"
                fontWeight="extrabold"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Text>Change</Text>
              </Link>
            </Flex>

            <Button
              fontSize="0.8rem"
              borderRadius="xl"
              bg="blue.700"
              boxShadow="lg"
              colorScheme="blue.500"
              p="4"
              mb={4}
              _hover={{
                background: "blue.750",
              }}
            >
              Proceed to Payment
            </Button>
            <Link
              href="#"
              fontSize="0.8rem"
              color="blue.800"
              display="flex"
              fontWeight="bold"
              justifyContent="center"
              alignItems="center"
              _hover={{
                textDecoration: "none",
                color: "blue.900",
              }}
            >
              <Text>Cancel Order</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
