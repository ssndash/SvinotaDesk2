import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div>
            <div className="flex items-center">
                <img src="/img/icon.png" className="w-24 h-24 p-3"></img>
                <h1 className="text-2xl font-bold">SvinotaDesk 2</h1>
                <Button className="ml-auto mr-3">Switch theme</Button>
                <Button className="ml mr-3">Settings</Button>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md m-8 mr-300 divide-gray-300 space-between justify-content">
                <p className="text-gray-800 text-lg font-semibold">Recent connections</p>
                <div className="flex justify-between items-center border border-gray-200">
                    <div className="flex-col">
                        <p className="text-gray-800">PC</p>
                        <p className="text-gray-600">Hostname • OS • Protocol</p>
                    </div>
                    <Button className="flex  ml-auto gap-2">Connect</Button>
                    <hr className="pt-2"></hr>
                </div>
                <hr className="pt-2"></hr>
                <div className="flex justify-between items-center border border-gray-200">
                    <div className="flex-col">
                        <p className="text-gray-800">PC</p>
                        <p className="text-gray-600">Hostname • OS • Protocol</p>
                    </div>
                    <Button className="flex ml-auto gap-2">Connect</Button>
                    <hr className="pt-2"></hr>
                </div>
                <hr className="pt-2"></hr>
                <div className="flex justify-between items-center border border-gray-200">
                    <div className="flex-col">
                        <p className="text-gray-800">PC</p>
                        <p className="text-gray-600">Hostname • OS • Protocol</p>
                    </div>
                    <Button className="flex ml-auto gap-2">Connect</Button>
                    <hr className="pt-2"></hr>
                </div>
            </div>
        </div>
    )
}