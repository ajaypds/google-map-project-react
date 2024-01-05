import { OverlayView } from '@react-google-maps/api'

const MarkerOverlay = ({ position, children }) => {
    const getPixelPositionOffset = (width, height) => ({
        x: -(width / 2),
        y: -(height / 2),
    })
    return (
        <OverlayView
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={getPixelPositionOffset}
            position={position} >
            {children}
        </OverlayView>
    )
}

export default MarkerOverlay