import { useState } from "react";
import adminList from "../datas/adminlist";
import { useNavigate } from "react-router-dom";


interface NavigateBarProps {
    title: string;
}

export const NavigateBar = ({ title }: NavigateBarProps) => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function isLoginOpen() {
        setLoginOpen(!loginOpen);
    }

    function isLoginPerson(email: string, password: string) {
        if (adminList.find((admin) => admin.email === email && admin.password === password)) {
            localStorage.setItem('isLoginPerson', 'admin');
        }else {
            alert("Invalid email or password");
        }
    }
    function refreshPage() {
        window.location.reload();
    }
    const isLogin = localStorage.getItem('isLoginPerson') || '';

    return (

        <div className="position:fixed top-0 bg-white h-20 w-full flex items-center rounded-t-xl">
            <div className="text-black px-10 flex flex-row justify-between items-center font-bold w-full">
                <p className="text-4xl ">{title}</p>
                <div>
                    {isLogin === 'admin' ? (
                        <div className="flex flex-row items-center gap-10">
                            <button
                                onClick={() => navigate(`/Dashboard`)}
                                className="font-bold text-lg hover:scale-106 focus:outline-none text-red-600">Dashboard</button>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('isLoginPerson');
                                    refreshPage();
                                }}
                                className="font-bold text-lg hover:scale-106 focus:outline-none">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={isLoginOpen}
                            className="font-bold text-lg hover:scale-106 focus:outline-none">
                            Login
                        </button>
                    )}
                    {loginOpen && (
                        <div className="absolute top-20 right-15 bg-gray-200 h-60 w-100 rounded-xl shadow-lg p-1  z-20">
                            <div className="bg-white h-full w-full rounded-xl">
                                <form action="" className="flex flex-col items-center justify-center h-full gap-6 p-5 text-black ">
                                    <label htmlFor="email">Email:
                                        <input
                                            value={email}
                                            className="text-black border border-gray-400 p-1 mx-4"
                                            type="text"
                                            placeholder="admin@example.com"
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                    <label htmlFor="password">
                                        Password:
                                        <input
                                            value={password}
                                            className="text-black border border-gray-400 mx-1"
                                            type="password"
                                            placeholder="123"
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </label>
                                    <button
                                        onClick={() => isLoginPerson(email, password)}
                                        type="submit"
                                        className="rounded bg-gray-500 hover:bg-gray-700 active:bg-gray-900 text-white font-boldrounded px-6 py-1"
                                    >
                                        Submit
                                    </button>
                                </form>

                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>

    )

}