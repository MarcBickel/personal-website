export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-foreground/10">
      <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

      <p className="opacity-80 mb-4">
        <a
          href="mailto:marcbickel@icloud.com"
          className="text-accent hover:opacity-70 transition-opacity"
        >
          marcbickel@icloud.com
        </a>
      </p>

      <div className="flex gap-6">
        <a
          href="https://linkedin.com/in/marcbickel"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 hover:text-accent transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/marcbickel"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 hover:text-accent transition-all"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
