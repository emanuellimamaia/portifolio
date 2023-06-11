import Image from "next/image"

export const PorjectCard = () => {
  return(
    <div>
      <div>
        <Image
        width={380}
        height={200}
         src="/images/foto emanuel elevador.png"
         alt="foto  do projeto"
         unoptimized
         />
      </div>

      <div>
        <strong>nome do projeto</strong>
        <p>nome do projeto</p>
        <span> tecnologias usadas. </span>
      </div>
    </div>
  )

}