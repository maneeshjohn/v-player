import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import flv from 'flv.js'
import { fetchStream } from '../../redux/actions'
import { Container, Segment, Header } from 'semantic-ui-react'
import Loader from '../common/Spinner'

const StreamShow = props => {

    const [player, setPlayer] = useState(null)
    const videoRef = useRef(null)

    useEffect(() => {
        const { id } = props.match.params
        props.fetchStream(id)
        buildPlayer(id)
    }, [props.stream])

    const buildPlayer = id => {
        if(player || !props.stream) return
        const streamer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${ id }.flv`
        })
        setPlayer(streamer)
        streamer.attachMediaElement(videoRef.current)
        streamer.load()
    }

    if(!props.stream) return <Loader />
    const { title, description } = props.stream
    return(
        <div>
            <Container>
                <Segment padded="very">
                    <video
                        controls
                        ref={ videoRef }
                        style={{ width: '100%' }}
                    />
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