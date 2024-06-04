import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to The Band's Official Tour Page
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Join us on our journey as we tour across the country. Get the latest updates, tour dates, and exclusive content right here!
        </Text>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1489602642804-64dea1e3ebc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMGxpdmV8ZW58MHx8fHwxNzE3NDUzOTg2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band performing live" borderRadius="md" />
        </Box>
        <VStack spacing={4} align="stretch" width="100%">
          <Heading as="h2" size="lg" textAlign="center">
            Upcoming Tour Dates
          </Heading>
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text fontSize="lg">City: New York, NY</Text>
            <Text fontSize="md">Date: October 15, 2023</Text>
            <Button mt={2} colorScheme="teal">
              Buy Tickets
            </Button>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text fontSize="lg">City: Los Angeles, CA</Text>
            <Text fontSize="md">Date: October 20, 2023</Text>
            <Button mt={2} colorScheme="teal">
              Buy Tickets
            </Button>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text fontSize="lg">City: Chicago, IL</Text>
            <Text fontSize="md">Date: October 25, 2023</Text>
            <Button mt={2} colorScheme="teal">
              Buy Tickets
            </Button>
          </Box>
        </VStack>
        <HStack spacing={4} mt={8}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
