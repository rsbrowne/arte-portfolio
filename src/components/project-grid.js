import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ProjectInfo from "../components/project-info"

const ProjectGrid = () => {
  const projects = useStaticQuery(graphql`
    query {
      prwd: allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "PRWD" } } }
      ) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      }
      allianz: allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "Allianz UK" } } }
      ) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      }
      kumon: allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "Kumon" } } }
      ) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      }
      pf: allMarkdownRemark(filter: { frontmatter: { title: { eq: "PF" } } }) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      }
      harveys: allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "Harveys" } } }
      ) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      }
      bh: allMarkdownRemark(filter: { frontmatter: { title: { eq: "BH" } } }) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      }
      tdf: allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "Tour De France" } } }
      ) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      }
      wmb: allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "WMB" } } }
      ) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      }
      f1: allMarkdownRemark(filter: { frontmatter: { title: { eq: "F1" } } }) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      }
    }
  `)

  return (
    <div className="project-grid">
      <Link
        to={`/${projects.prwd.edges[0].node.frontmatter.slug}`}
        aria-label="PWRD"
        className="project-grid__item project-grid__item--pwrd"
      >
        <Img
          fluid={
            projects.prwd.edges[0].node.frontmatter.cover.childImageSharp.fluid
          }
        />
      </Link>
      <Link
        to={`/${projects.allianz.edges[0].node.frontmatter.slug}`}
        aria-label="Allianz-UK"
        className="project-grid__item project-grid__item--allianz-uk"
      >
        <Img
          fluid={
            projects.allianz.edges[0].node.frontmatter.cover.childImageSharp
              .fluid
          }
        />
      </Link>
      <Link
        to={`/${projects.kumon.edges[0].node.frontmatter.slug}`}
        aria-label="Kumon"
        className="project-grid__item project-grid__item--kumon"
      >
        <Img
          fluid={
            projects.kumon.edges[0].node.frontmatter.cover.childImageSharp.fluid
          }
        />
      </Link>
      <Link
        to={`/${projects.pf.edges[0].node.frontmatter.slug}`}
        aria-label="PF"
        className="project-grid__item project-grid__item--allianz-pf"
      >
        <Img
          fluid={
            projects.pf.edges[0].node.frontmatter.cover.childImageSharp.fluid
          }
        />
      </Link>
      <Link
        to={`/${projects.harveys.edges[0].node.frontmatter.slug}`}
        aria-label="Harveys"
        className="project-grid__item project-grid__item--harveys"
      >
        <Img
          fluid={
            projects.harveys.edges[0].node.frontmatter.cover.childImageSharp
              .fluid
          }
        />
      </Link>
      <Link
        to={`/${projects.bh.edges[0].node.frontmatter.slug}`}
        aria-label="BH"
        className="project-grid__item project-grid__item--bh"
      >
        <Img
          fluid={
            projects.bh.edges[0].node.frontmatter.cover.childImageSharp.fluid
          }
        />
      </Link>
      <Link
        to={`/${projects.tdf.edges[0].node.frontmatter.slug}`}
        aria-label="Tour De France"
        className="project-grid__item project-grid__item--tdf"
      >
        <Img
          fluid={
            projects.tdf.edges[0].node.frontmatter.cover.childImageSharp.fluid
          }
        />
      </Link>
      <Link
        to={`/${projects.wmb.edges[0].node.frontmatter.slug}`}
        aria-label="WMB"
        className="project-grid__item project-grid__item---wmb"
      >
        <Img
          fluid={
            projects.wmb.edges[0].node.frontmatter.cover.childImageSharp.fluid
          }
        />
      </Link>
      <Link
        to={`/${projects.f1.edges[0].node.frontmatter.slug}`}
        aria-label="F1"
        className="project-grid__item project-grid__item--f1"
      >
        <Img
          fluid={
            projects.f1.edges[0].node.frontmatter.cover.childImageSharp.fluid
          }
        />
      </Link>
    </div>
  )
}

export default ProjectGrid
