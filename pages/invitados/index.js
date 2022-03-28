import Link from "next/link"
import Logo from "../../components/Logo"
export default function InvitadosList({personas}) {
    return(
        <div className="py-8 px-4">
            <Logo/>
            <h2>Listado de invitados</h2>

                {personas.map(persona => (
                    <div className="mt-2" key={`id-${persona.id}`}>
                        <Link href={"/invitados/" + persona.id }>
                            <a className="bg-white rounded py-4 px-4 flex justify-between "><span>{persona.id} - {persona.nombres} ({persona.personal})</span> <span>&gt;</span></a>
                        </Link>

                    </div>
                )) }


        </div>
    )
};


export async function getStaticProps(){
    const results = await fetch(`https://carlaynico.vercel.app/api/invitados`).then(r=>r.json())

    return{
        props:{
            personas: results
        }
    }
}