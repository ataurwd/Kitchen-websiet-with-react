
const Precess = ({btn, handleDelete, prepare, calculate, total, calore}) => {
    return (
        <div>
<div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
            </thead>
            <tbody className="">
                {
                    btn.map((item, index) => (
                        <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                        <button onClick={() => {handleDelete(item.id)
                            calculate(
                                item.preparing_time,
                                item.calories
                            )
                        }} className="bg-[#0BE58A] text-black px-4 py-2 rounded-3xl font-semibold mr-3">prepared</button>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        <h1 className="text-center font-bold text-2xl py-5">Currently cooking: 02</h1>
                <div>
                <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
            </thead>
            <tbody className="">
                {
                    prepare.map((item, index) => (
                        <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                    </tr>
                    ))}
                     <tr className="border-none">
                        <th></th>
                        <td></td>
                        <td>Total Time = {total}</td>
                        <td> Total Calories {calore}</td>
                    </tr>
            </tbody>
        </table>
        </div>
        </div>
    </div>
    );
};

export default Precess;