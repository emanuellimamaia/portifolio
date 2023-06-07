'use client'
import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button"
import { SectionTitle } from "../section-title"
import {useForm} from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const ContactFormSchema = z.object ({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),

})

type ContactFormData = z.infer<typeof ContactFormSchema>
export const ContactForm = () =>{


  const {handleSubmit, register} = useForm <ContactFormData> ({
    resolver: zodResolver(ContactFormSchema)
  })

  const onSubmit = (data: ContactFormData) =>{
    console.log(data)
  }
  return(
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"> 
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle 
        subtitle="contato"
        title="vamos trabalhar juntos"
        className="items-center text-center"

        />
        <form 
        
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 w-full flex flex-col gap-4">
          <input 
          placeholder="Nome"
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 "  
          {...register("name")}/>

           <input 
          placeholder="E-mail"
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 " 
          {...register("email")} />
           <textarea 
          placeholder="Mensagem"
          className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 "
          maxLength={500}
          {...register("message")}
          ></textarea>

          <Button className="h-max mx-auto mt-6 shadow-butto"
          >Enviar Mensagem
          <HiArrowNarrowRight size={18}/>
          </Button>
        </form>

      </div>
    
    </section>
  )
}