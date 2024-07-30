import Container from "@/components/shared/Container"
import Cart from "@/components/ui/Cart"
import Image from "next/image"
import service1 from "../../assects/services/service-cover-1.51ae52045d81c6b97826 (1).webp"
import service2 from "../../assects/services/service-cover-2.f52e1f17d75e11264ede (1).webp"
const ServicesPage = () => {
    return (<Container>
        <div className="mt-12 mx-2 my-2">
            <h1 className="text-4xl font-bold my-8">Best Sellers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <Cart path="/contact">
                    <div className="mx-auto">
                        <Image width={200} height={150} src={service1} alt="services_photo" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Mobile Apps</h3>
                            <button className="bg-white text-black rounded-md p-1 font-bold">$599</button>
                        </div>
                        <p className="my-6 text-sm text-gray-400">String Properties and Method Normally strings like cannot have methods or properties because they ar</p>
                    </div>
                </Cart>
                <Cart path="/contact">
                    <div className="mx-auto">
                        <Image width={200} height={150} src={service2} alt="services_photo" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Web Apps</h3>
                            <button className="bg-white text-black rounded-md p-1 font-bold">$399</button>
                        </div>
                        <p className="my-6 text-sm text-gray-400">String Properties and Method Normally strings like cannot have methods or properties because they ar</p>
                    </div>
                </Cart>
                <Cart path="/contact">
                    <div className="mx-auto">
                        <Image width={200} height={150} src={service1} alt="services_photo" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">E-commerce Apps</h3>
                            <button className="bg-white text-black rounded-md p-1 font-bold">$799</button>
                        </div>
                        <p className="my-6 text-sm text-gray-400">String Properties and Method Normally strings like cannot have methods or properties because they ar</p>
                    </div>
                </Cart>
            </div>
        </div>
        <div className="mt-12 mx-2 my-2">
            <h1 className="text-4xl font-bold my-8">All Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <Cart path="/contact">
                    <div className="mx-auto">
                        <Image width={200} height={150} src={service1} alt="services_photo" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Mobile Apps</h3>
                            <button className="bg-white text-black rounded-md p-1 font-bold">$599</button>
                        </div>
                        <p className="my-6 text-sm text-gray-400">String Properties and Method Normally strings like cannot have methods or properties because they ar</p>
                    </div>
                </Cart>
                <Cart path="/contact">
                    <div className="mx-auto">
                        <Image width={200} height={150} src={service2} alt="services_photo" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Web Apps</h3>
                            <button className="bg-white text-black rounded-md p-1 font-bold">$399</button>
                        </div>
                        <p className="my-6 text-sm text-gray-400">String Properties and Method Normally strings like cannot have methods or properties because they ar</p>
                    </div>
                </Cart>
                <Cart path="/contact">
                    <div className="mx-auto">
                        <Image width={200} height={150} src={service1} alt="services_photo" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">E-commerce Apps</h3>
                            <button className="bg-white text-black rounded-md p-1 font-bold">$799</button>
                        </div>
                        <p className="my-6 text-sm text-gray-400">String Properties and Method Normally strings like cannot have methods or properties because they ar</p>
                    </div>
                </Cart>
                <Cart path="/contact">
                    <div className="mx-auto">
                        <Image width={200} height={150} src={service2} alt="services_photo" />
                    </div>
                    <div>
                        <div className="flex gap-2 justify-between">
                            <h3 className="text-xl font-semibold">House Apps</h3>
                            <button className="bg-white text-black rounded-md p-1 font-bold">$699</button>
                        </div>
                        <p className="my-6 text-sm text-gray-400">String Properties and Method Normally strings like cannot have methods or properties because they ar</p>
                    </div>
                </Cart>
            </div>
        </div>
    </Container>)
}


export default ServicesPage