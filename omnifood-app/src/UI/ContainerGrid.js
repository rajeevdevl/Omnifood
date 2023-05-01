import './ContainerGrid.css'

const Container = (props) => {

    const classList = "container " + props.className;

    return (
        <div className={classList}>
            {props.children}
        </div>
    )
}

export default Container;