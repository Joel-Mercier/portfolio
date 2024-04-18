import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/router"
import React from "react"

interface Props {
  children: React.ReactNode
}

const WorksLayout = ({ children }: Props) => {
  const router = useRouter()

  return (
    <div className="lg:py-24">
      <a
        href="/"
        onClick={(e) => { e.preventDefault(); router.back(); }}
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-emerald-500"
      >
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        Retour
      </a>
      <div className="prose text-slate-200 prose-h2:font-semibold prose-h3:font-semibold prose-h4:font-semibold prose-h5:font-semibold prose-h6:font-semibold">
        {children}
      </div>
    </div>
  )
}

export default WorksLayout