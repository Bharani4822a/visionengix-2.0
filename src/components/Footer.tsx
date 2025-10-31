const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} VisionEngix. All rights reserved.
        </p>
        <p className="text-sm mt-2 opacity-75">
          Empowering the next generation of tech professionals
        </p>
      </div>
    </footer>
  );
};

export default Footer;
