import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../redux/actions'
import { Container, Segment, Header } from 'semantic-ui-react'
import Loader from '../common/Spinner'

const StreamShow = props => {

    useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, [])

    if(!props.stream) return <Loader />

    const { title, description } = props.stream
    return(
        <div>
            <Container>
                <Segment padded="very">
                    <Header as="h2">
                        { title }
                    </Header>
                    <Header as="h3">
                        { description }
                    </Header>
                </Segment>
            </Container>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})

export default connect(
    mapStateToProps,
    { fetchStream }
)(StreamShow)