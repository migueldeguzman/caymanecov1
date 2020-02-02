import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './climateScience101.module.css'
import Layout from "../components/layout"
import ArticlePreview from '../components/article-preview'

class ClimateScience101 extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <h2>Climate Science 101</h2>
          <div className={styles.hero}>
            image1
            <br/>
            <br/>
            Did you know that everything on earth is carbon based? Humans, animals, plants, rocks, and the ocean!

            Take this diagram of the global carbon cycle. What happens when carbon makes its way through these "reservoirs"?

            Carbon that is normally stored in the earth's crust, also known as "fossil fuel", gets pumped out to provide around 80% of the energy we use globally in industry and our daily lives today. The carbon in this reservoir has to go somewhere so it ends up in the other main reservoirs, most problematically the atmosphere and the ocean. And it's doing that at a rate we haven't seen in 800,000 years. That's around the time the sabretooth tiger roamed the earth!
            
            Between the mid-1700s, when we first started to extract fossil fuel during the Industrial Revolution, and today, the amount of carbon (CO2) in the atmosphere has skyrocketed from 280 to 408 parts per million. CO2 and heat are closely correlated so more CO2 means more heat.
            <br/>
            <br/>
            image2
            <br/>
            <br/>
            Scientists are concerned that many species, including our own, cannot  adapt quickly enough to survive this fast warming in such a short span of time.

            Keeping on with a business-as-usual approach is not an option, given the science. Luckily, practical solutions are here already. We just need to find the political will to tell our governments and corporations to convert as much as possible to renewable energy like wind, solar, tidal, and geothermal, and to incentivize those who make the switch, and we can get the carbon cycle back in balance.

            When the people lead, governments and corporations will follow! Vote for politicians who understand the carbon cycle. Vote every day with your dollar. 

﻿            As an individual, fly less, buy an electric or fuel-efficient car,          eat less meat. Be the change you want to see in the world!﻿
            <br/>
            <br/>
            image3
            <br/>
            <br/>
            image4
            <br/>
            <br/>
          </div>
          <div>

          </div>
          <div className="wrapper">
            <h2 className="section-headline">Cayman Eco News</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ClimateScience101

export const pageQuery = graphql`
  query ClimateScience101Index {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
