import Image from "next/image";
const AboutPage = () => {
  
    return (
        <div className="container mx-auto">
            <h2 className="my-5 text-center font-bold text-4xl">This is about page</h2>
            <div className="flex gap-5">
                <Image src="/work-2.png" alt="this is photography" width={500} height={300} />
                <Image src={"https://i.ibb.co/p6SfQMcq/antick.png"} alt="this is antick chandra kuri" width={500} height={300} className="rounded-2xl"></Image>
            </div>
        </div>
    );
};

export default AboutPage;