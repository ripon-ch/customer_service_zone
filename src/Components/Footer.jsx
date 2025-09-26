export default function Footer() {
  return (
    <footer className="mt-20 bg-black text-neutral-200">
      <div className="container mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-extrabold text-lg">
            <span className="inline-block h-7 w-7 rounded-lg bg-gradient-to-tr from-brand-start via-brand-mid to-brand-end" />
            <span>CS — Ticket System</span>
          </div>
          <p className="mt-3 text-[13px] leading-6 text-neutral-400 max-w-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-neutral-100">Company</h3>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Sales</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-neutral-100">Services</h3>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-neutral-100">Information</h3>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-neutral-100">Social Links</h3>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li><span className="inline-block h-2 w-2 rounded-full bg-neutral-400 mr-2 align-middle" />@CS — Ticket System</li>
            <li><span className="inline-block h-2 w-2 rounded-full bg-neutral-400 mr-2 align-middle" />@CS — Ticket System</li>
            <li><span className="inline-block h-2 w-2 rounded-full bg-neutral-400 mr-2 align-middle" />@CS — Ticket System</li>
            <li><span className="inline-block h-2 w-2 rounded-full bg-neutral-400 mr-2 align-middle" />support@cst.com</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4"><div className="h-px w-full bg-neutral-800" /></div>
      <div>
        <div className="container mx-auto max-w-6xl px-4 py-6 text-xs text-neutral-500 text-center">© 2025 CS — Ticket System. All rights reserved.</div>
      </div>
    </footer>
  );
}
