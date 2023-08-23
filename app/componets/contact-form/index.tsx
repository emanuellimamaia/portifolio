'use client'
import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button"
import { SectionTitle } from "../../../section-title"
import {useForm} from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-hot-toast"
import axios from "axios"

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})


type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }
  return(
    <div id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"> 
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
    
    </div>
  )
}