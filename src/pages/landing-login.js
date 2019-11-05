import React from 'react';
import { Row, Col, Button } from 'tailwind-react-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Heading from '../components/atoms/heading';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`ServCo`, `GenWorth`]}
      />

      <section className="text-center">

        <Heading level="2" className="gw-h1">Welcome, Person</Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          non blandit dui. Nulla lectus nunc, eleifend non blandit at, ultrices
          ut lacus. Nulla ut fermentum leo, </p>

        <div class="my-10">
          <Heading level="3" className="gw-h2">How are you feeling?</Heading>
          <Row className="mt-8 flex flex-wrap list-reset">
            <Col w="1/3" className="w-1/3 text-center p-2">
              <Button brand="primary"  className="px-2 py-10">
                icon
                <span>Sad</span>
              </Button>
            </Col>
            <Col w="1/3" className="w-1/3 text-center p-2">
              <Button brand="primary" className="px-2 py-10">
                icon
                <span>Sad</span>
              </Button>
            </Col>
            <Col w="1/3" className="w-1/3 text-center p-2">
              <Button brand="primary" className="px-2 py-10">
                icon
                <span>Sad</span>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col w="1/3" bg="grey" text="center" p="2">
              <Button brand="primary" px="2" py="10" className="px-2 py-10">
                icon
                <span>Sad</span>
              </Button>
            </Col>
            <Col w="1/3" bg="grey-light" text="center" p="2">
              <Button brand="primary" px="2" py="10" className="px-2 py-10">
                icon
                <span>Sad</span>
              </Button>
            </Col>
            <Col w="1/3" bg="grey-light" text="center" p="2">
              <Button brand="primary" px="2" py="10" className="px-2 py-10">
                icon
                <span>Sad</span>
              </Button>
            </Col>
          </Row>
        </div>

        <div class="my-10">
          <Heading level="3" className="gw-h2">Has Anything Changed?</Heading>
          <Row>
            <Col w="1/2" text="center" p="2">
              <Button className="gw-button-secondary">No</Button>
            </Col>
            <Col w="1/2" text="center" p="2">
              <Button className="gw-button-primary">Yes</Button>
            </Col>
          </Row>
        </div>

      </section>
    </Layout>
  );
}

export default IndexPage;
