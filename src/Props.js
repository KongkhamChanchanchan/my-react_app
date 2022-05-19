import'./Props.css';
const Welcom=({name, xyz})=>
{
    return(
        <div className="Prop">
            <h1> {name}{xyz} </h1>
        </div>
    )
}
export default Welcom;