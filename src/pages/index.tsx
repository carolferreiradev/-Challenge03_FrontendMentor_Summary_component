import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Summary Component</title>
      </Head>
      <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
        {/* <Box h="60%" w="100vw" position="relative">
          <Image
            src="/pattern-background-desktop.svg"
            alt="Hero"
            layout="fill"
          />
        </Box> */}

        <Flex
          flexDir="column"
          width={400}
          height={750}
          bg="blue.500"
          borderRadius="5"
          alignItems="center"
          justifyContent="center"
        >
          <Box position="relative" width="100%" height="40%">
            <Image
              src="/illustration-hero.svg"
              alt="Hero"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Flex flexDir="column" height="60%" p={10}>
            <Heading
              textAlign="center"
              color="blue.900"
              fontSize="2rem"
              pb={5}
              fontWeight="900"
            >
              Order Summary
            </Heading>
            <Text textAlign="center" pb={5}>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </Text>

            <Flex bg="blue.600" borderRadius={12} p={2} mb={8}>
              <Flex alignItems="center " w="100%">
                <Image
                  src="/icon-music.svg"
                  alt="Icon Music"
                  width="50"
                  height="50"
                />

                <Flex flexDir="column">
                  <Heading fontSize="1rem">Annual Plan</Heading>
                  <Text>$59.99/year</Text>
                </Flex>
              </Flex>

              <Link href="#">Change</Link>
            </Flex>

            <Button bg="blue.700" color="blue.500" p="7" mb={4}>
              Proceed to Payment
            </Button>
            <Button variant="ghost" p="7">
              Cancel Order
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
