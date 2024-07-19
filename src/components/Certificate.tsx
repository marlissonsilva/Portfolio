import Image from "next/image";
import {certificates} from "@/data/certificates";
import TitleSection from "./TitleSection";
import View from "./View";
import useToggle from "@/hooks/useToogle";
import {useState} from "react";

interface CertificateProps {
  className?: string;
}
export default function Certificate(props: CertificateProps) {
  const [modal, setModal] = useToggle(false);
  const [source, setSource] = useState("");
  function handleShowCertificate(e: any) {
    const src = e.target.dataset.target;
    setSource(src);
    document.body.style.overflow = "hidden";
    setModal();
  }

  function handleHiddenModal() {
    setModal();
    document.body.style.overflow = "auto";
  }

  return (
    <section id="certificate" className={props.className}>
      <TitleSection title="certificados" className="mt-16" />
      <div className="flex  flex-wrap justify-around items-center w-full h-full py-6 pb-20  gap-16">
        {certificates.map((certificate, index) => (
          <div key={index}>
            <Image
              src={certificate.image}
              data-target={certificate.image}
              alt={certificate.title}
              width={430}
              height={300}
              onClick={handleShowCertificate}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      <View
        className={modal ? "inline" : "hidden"}
        onClick={handleHiddenModal}
        url={source}
      />
    </section>
  );
}
