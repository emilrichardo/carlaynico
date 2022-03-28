import Link from "next/link"
export default function InvitadosList({personas}) {
    return(
        <div className="py-8 px-4">

                {personas.map(persona => (
                    <div className="py-4 px-4" key={`id-${persona.id}`}>
                        <Link href={"/invitados/" + persona.id }>
                            <a>{persona.nombres} - id:{persona.id} - invitados : {persona.personal}</a>
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