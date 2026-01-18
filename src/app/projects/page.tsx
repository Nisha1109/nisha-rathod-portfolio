import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Nisha Rathod",
  description:
    "Nisha Rathod is a Lead Software Engineer specializing in Backend Engineering with 8 years of experience in cloud-native serverless applications.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      {/* <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <Products /> */}
    </Container>
  );
}
