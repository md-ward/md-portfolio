import Image from "next/image";
import React from "react";

export default function ProjectCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div>
      <Image src={image} alt={title}></Image>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
