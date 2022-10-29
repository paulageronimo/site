import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const Intro = () => {
  return (
    <StyledSection id="intro">
      <h1 className="title">
        Howdy <span role="img" aria-label="emoji">👋</span><br />
        I'm Paula Geronimo
      </h1>
      <h2 className="subtitle">
        I design, lead, and build <span className="highlighted">applications</span>.
      </h2>
      <div className="description">
        I am a senior (graduating in Aug 2023) pursuing a B.S. in Technology Management with Minors in Business and Cybersecurity. 💻 
        I'm a Latina, born and raised in Laredo, TX. 🇲🇽 In my free time, I love to listen to music, paint, and go to arcades. 👾
      </div>
    </StyledSection>
  )
}

export default Intro