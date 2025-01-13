import { Html } from "@react-three/drei";

const Loader = ({ size = 50, color = '#29ABE2', strokeWidth = 4 }) => {
    const loaderStyle = {
        width: size,
        height: size,
        borderWidth: strokeWidth,
        borderStyle: 'solid',
        borderColor: '#eee',
        borderTopColor: color,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    };

    return (
        <Html center>
            <div style={containerStyle}>
                <div style={loaderStyle} aria-label="Cargando..."></div>
            </div>
        </Html>
    );
};

export default Loader;