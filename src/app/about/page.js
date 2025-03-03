import React from "react";
import styles from "./about.module.scss";
import Heading from "@/components/heading/heading";
import { LinkedIn, Email, GitHub } from '@/constants';
import Link from "next/link";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_desc}>
        <div className={styles.about_head}>About Me</div>
        I&apos;m a developer who&apos;s really wants to learn new things. I&apos;ve got experience building backend applications and cloud systems. I can picking up new skills in no time and always want to be part of cool, innovative projects.
        <br />
        <br />
        <br />
        <div className={styles.about_head}>Connect</div>
        <div>
          <Link className={styles.about_connect_link} href="mailto:me+porfolio@rjha.dev">
            me@rjha.dev
          </Link>

          <Link
            target="_blank"
            className={styles.about_connect_link}
            rel="noopener noreferrer"
            href={GitHub}
          >
            Github
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={GitHub}
            className={styles.about_connect_link}
          >
            Linkedin
          </Link>
        </div >
      </div >


      <div className={styles.about_skills}>
        < div className={styles.about_head}>Skills</div>
        <Heading>Languages</Heading>

        <div className={styles.about_desc}>
          Python, Go
        </div >

        <br />
        <Heading>BackEnd</Heading>
        <div className={styles.about_desc}>Django, Django Rest, Golang</div>

        < br />
        <Heading>DevOps</Heading>
        <div className={styles.about_desc}>
          Infrastructure as a Code, Terraform, GitLab - CI, AWS, Kubernetes
        </div >

        <br />
        <Heading>Databases</Heading>
        <div className={styles.about_desc}>MySQL, Postgresql, Dynamodb</div>
      </div >

    </div>
  );
}

export default About;