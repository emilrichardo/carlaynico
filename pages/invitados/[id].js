import Invitaction from "../../components/Invitation";

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/invitados');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(invitado => {
      return {
        params: { id: invitado.id.toString() }
      }
    })

    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/api/invitados');
    const data = await res.json();

    return {
      props: { invitado: data[id] }
    }
  }

  const Details = ({ invitado }) => {
    return (
      <Invitaction nombres={invitado.nombres} personal={invitado.personal} />
    );
  }

  export default Details;