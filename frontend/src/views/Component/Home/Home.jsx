import React from 'react';
import anxiety from './images/anxiety.jpg'
import ocd from './images/ocd.jpeg'
import Schizo from './images/Schizophrenia.jpeg'
import depression from './images/depression.jpeg'
import { Box,Link, Container, Flex, Heading, Text, Image,Card } from '@chakra-ui/react';
import Hero from './mental-health-hero.png'

const Home = () => {
  return (
    <>
    <Box
      bgGradient="linear(to-r, #3B82F6, #7C3AED)"  
      color="white"
      py={{ base: '4rem', md: '6rem' }}  
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}  
          align="center"
          justify="center"
        >
          <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
            <Heading as="h1" size="2xl" mb="4">
              Bienvenue sur  <Text as="span" color="#FACC15">MindWell</Text>
            </Heading>
            <Text fontSize="xl" mb="6">
              Votre parcours vers le bien-être mental commence ici. Accédez à des ressources, connectez-vous avec des médecins et faites le premier pas vers un esprit plus sain.
            </Text>
          </Box>
          
          <Box flex="1" mb={{ base: '2rem', md: '0' }}>
            <Image
              src={Hero}
              alt="Mental Health Support"
              maxW="100%"
              borderRadius="lg"
            />
          </Box>

          
          
        </Flex>
      </Container>
    </Box>



    <Box
      bg="white"
      p={6}
      boxShadow="lg"
      width="100%"
    >
      <Text
        fontSize="5xl"
        mb="6"
        color='#7C3AED'
        fontWeight="bold"
        textAlign="center"
      >
        Identifiez Vos Problèmes
      </Text>      
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        
        
        {/* Anxiety Disorders */}
        <Card.Root maxW="xs" overflow="hidden">
          <Image
            src={anxiety}
            alt="Troubles Anxieux"
          />
          <Card.Body gap="1" bg="linear-gradient(to top right,rgb(58, 174, 237),rgb(51, 134, 145))">
            <Card.Title   fontSize="3xl" textAlign="center">Troubles Anxieux</Card.Title>
            <Card.Description fontSize="sm" >
              Comprenez et gérez votre anxiété.
            </Card.Description>
            
            <Link href="home/admin">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Voir les Médecins →
            </Text>
            </Link>


            <Link href="/Home/AnxietyTest">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Pass Test →
            </Text>
            </Link>

            <Link href="/Axiety">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Voir Resource →
            </Text>
            </Link>
            
          </Card.Body>
        </Card.Root>



        {/* Depressive Disorders */}
        <Card.Root maxW="xs" overflow="hidden">
          <Image
            src={depression}
            alt="Troubles Dépressifs"
          />
          <Card.Body gap="1"  bg="linear-gradient(to top right, #7C3AED,rgb(143, 116, 188))">
            <Card.Title fontSize="2xl" >Troubles Dépressifs</Card.Title>
            <Card.Description fontSize="sm">
              Apprenez à faire face à la dépression.
            </Card.Description>

            <Link href="home/admin">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Voir les Médecins →
            </Text>
            </Link>


            <Link href="/Home/DepressionTest">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Pass Test →
            </Text>
            </Link>

            <Link href="/Depression">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Voir Resource →
            </Text>
            </Link>
            
          </Card.Body>
        </Card.Root>




        {/* OCD */}
        <Card.Root maxW="xs" overflow="hidden">
          <Image
            src={ocd}
            alt="TOC"
            minH='319px'
          />
          <Card.Body gap="1" bg="linear-gradient(to top right,rgb(58, 174, 237),rgb(51, 134, 145))">
            <Card.Title fontSize="3xl">TOC</Card.Title>
            <Card.Description fontSize="sm">
              Trouvez des ressources pour la gestion du TOC.
            </Card.Description>
            
            <Link href="home/admin">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Voir les Médecins →
            </Text>
            </Link>


            <Link href="/home/OCDTest">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Pass Test →
            </Text>
            </Link>

            <Link href="/OCD">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Voir Resource →
            </Text>
            </Link>
            
          </Card.Body>
        </Card.Root>




        {/* Schizophrenia */}
        <Card.Root maxW="xs" overflow="hidden">
          <Image
            src={Schizo}
            alt="Schizophrénie"
          />
          <Card.Body gap="1" bg="linear-gradient(to top right, #7C3AED,rgb(143, 116, 188))">
            <Card.Title fontSize="3xl">Schizophrénie</Card.Title>
            <Card.Description fontSize="sm">
              Obtenez des informations sur la schizophrénie.
            </Card.Description>
            
            <Link href="home/admin">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Voir les Médecins →
            </Text>
            </Link>


            <Link href="/home/SchizophrénieTest">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Pass Test →
            </Text>
            </Link>

            <Link href="/Schizophrénie">
            <Text textStyle="lg" fontWeight="medium" mt="2" color="#FACC15">
              Voir Resource →
            </Text>
            </Link>
            
          </Card.Body>
        </Card.Root>
      </div>
    </Box>
    </>
  );
};

export default Home;
