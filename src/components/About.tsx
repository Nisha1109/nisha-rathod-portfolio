"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Nisha Rathod - a Lead Software Engineer
          specializing in Backend Engineering with a passion for building
          cloud-native serverless applications. Welcome to my corner of the
          digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          With over 8 years of experience in software development, I&apos;ve
          dedicated my career to crafting scalable, performant, and secure
          backend solutions. I thrive on turning complex requirements into
          elegant serverless architectures that leverage the power of AWS and
          Azure cloud platforms. My goal is to not just write code, but to build
          robust systems that seamlessly handle millions of requests while
          maintaining high availability and performance.
        </Paragraph>

        <Paragraph className=" mt-4">
          Throughout my journey, I&apos;ve worked across diverse domains
          including healthcare, cybersecurity, e-commerce, ERP systems, and
          fitness platforms. From developing AWS Lambda APIs for healthcare
          applications to building Azure Functions for enterprise integrations,
          I&apos;ve consistently delivered solutions that solve real-world
          problems. My expertise spans serverless technologies, microservices
          architecture, REST APIs, GraphQL, and various databases including
          DynamoDB, PostgreSQL, MongoDB, and CosmosDB.
        </Paragraph>
        <Paragraph className=" mt-4">
          What sets me apart is my commitment to best practices and quality. I
          believe in Domain-Driven Design, separation of concerns, and building
          systems that are maintainable and scalable. I&apos;m proficient in
          resolving intricate issues requiring substantial debugging and
          root-cause analysis, and I maintain a steadfast commitment to quality
          that encompasses comprehensive testing procedures from various
          perspectives.
        </Paragraph>
        <Paragraph className=" mt-4">
          As a lead engineer, I take pride in mentoring team members, conducting
          code reviews, and establishing CI/CD pipelines that follow industry
          best practices. I&apos;m enthusiastic about acquiring knowledge in
          emerging technologies and design patterns relevant to cloud-native
          platforms, and I engage in the complete application lifecycle from
          architecture design to deployment and maintenance.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I aim to share my insights, experiences, and
          learnings from building cloud-native applications. Whether
          you&apos;re a fellow developer seeking solutions, someone interested
          in serverless architectures, or simply curious about backend
          engineering, there&apos;s something here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Join me on this journey of serverless computing, microservices, and
          cloud-native development. Together, we can explore the boundless
          possibilities of modern backend engineering and build solutions that
          make a real impact.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I look forward to connecting with you!
        </Paragraph>
      </div>
    </div>
  );
}
