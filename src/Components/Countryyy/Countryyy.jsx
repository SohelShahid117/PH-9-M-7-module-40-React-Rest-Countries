import './contryyy.css'
const Countryyy = ({cntryyy}) => {
    // console.log(JSON.parse(cntryyy))
    console.log(cntryyy[0])

    const {name,flags} = cntryyy[0];
    // console.log(name)
    // let i = 0;
    return (
        <div className="cntry">
            {/* <h1>{i}:name</h1> */}
            <h1>name:{name?.common}</h1>
            <img src={flags.png}/>
        </div>
    );
};

export default Countryyy;