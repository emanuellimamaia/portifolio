import Image from "next/image"

export const PorjectCard = () => {
  return(
    

    <div className="rounded-lg h-[600px] flex flex-col bf-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div>
        <Image
        width={380}
        height={200}
         src="/images/profile-pic.png"
         alt="foto  do projeto"
         unoptimized
         className="group-hover:scale-110 duration-500 transition-all"
         />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">nome do piandae accusantium quis deleniti debitplicabo placeat! Commodi dolore corrupti suscipit.</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">nome do projeto</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate"> NODEJS </span>
      </div>
    </div>
  )

}