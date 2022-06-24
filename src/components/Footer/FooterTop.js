import FooterTopHeader from "./FooterTopHeader";

function FooterTop(props) {
  return (
    <>
      <h1> This is Footer Top Component </h1>

      <FooterTopHeader title={props.title}/>
    </>
  );
}

export default FooterTop;
