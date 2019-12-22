import React from 'react'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'

const StreamList = () => {

  return(
    <div>
      <Container>
        <Segment padded>
          <Header as="h5">All Streams</Header>
          <Grid columns={ 3 }>
            <Grid.Row>
              <Grid.Column>
                <Segment
                  inverted
                  color="red"
                  padded="very">
                  Stream 1
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  inverted
                  color="green"
                  padded="very">
                  Stream 2
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  inverted
                  color="blue"
                  padded="very">
                  Stream 3
                </Segment>
              </Grid.Column>            
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  )
}

export { StreamList }