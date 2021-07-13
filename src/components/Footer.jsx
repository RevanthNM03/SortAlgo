import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <span>Developed By -</span>
      <p className="name">Revanth N M</p>
      <a href="https://github.com/RevanthNM03/SortAlgo" className="github">
        <GitHubIcon />
      </a>
    </div>
  );
};

export default Footer;
