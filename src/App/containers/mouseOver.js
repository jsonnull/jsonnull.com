import { compose, withState, withHandlers } from 'recompose'

const mouseOver = compose(
  withState('isMouseOver', 'setMouseOver', false),
  withHandlers({
    onMouseEnter: ({ setMouseOver }) => () => setMouseOver(true),
    onMouseLeave: ({ setMouseOver }) => () => setMouseOver(false)
  })
)

export default mouseOver
