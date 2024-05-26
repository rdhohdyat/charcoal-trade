export const Footer = () => {
  return (
    <div id="contact" className="py-24 bg-gradient-to-b from-white to-gray-300">
      <div className="container flex justify-center">
        <div className="justify-between w-full max-w-6xl sm:flex ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src="./logo.avif" alt="logo" width={60} />
              <h1 className="py-5 text-2xl font-semibold logo">
                Charcoal Trade
              </h1>
            </div>
            <p>
              We are a charcoal trading company and charcoal exporter from
              Indonesia.
            </p>
            <p>Pekanbaru, Riau , Indonesia</p>
            <p>+6289669917030</p>
            <p>charcoaltrade921@gmail.com</p>
          </div>

          <div className="flex flex-col items-end">
            <h1 className="py-5 text-2xl font-semibold">Follow Us</h1>
            <p className="sm:w-[400px] text-end">
              Follow us on social media, and some updates about company
              information
            </p>
            <div className="flex gap-3 mt-3">
              <a
                href="https://www.youtube.com/channel/UClTXQHeKk2zfWxz_vKErmtA"
                aria-label="YouTube"
              >
                <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full">
                  <i className="text-4xl bx bxl-youtube"></i>
                </div>
              </a>
              <a
                href="https://www.facebook.com/ridho.hidayat.984991?mibextid=ZbWKwL"
                aria-label="Facebook"
              >
                <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full">
                  <i className="text-4xl bx bxl-facebook"></i>
                </div>
              </a>
              <a
                href="https://x.com/rdhohdyat?t=aeUTAPggj5L_ADZ8ENy5pg&s=09"
                aria-label="Twitter"
              >
                <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full">
                  <i className="text-4xl bx bxl-twitter"></i>
                </div>
              </a>
              <a
                href="https://www.instagram.com/rdho.hdyat?igsh=MTkwOXF5eWpnZTRqcg=="
                aria-label="Instagram"
              >
                <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full">
                  <i className="text-4xl bx bxl-instagram"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center">
        &copy; {new Date().getFullYear()} RidTen . CharcoalTrade. All Rights
        Reserved.
      </p>
    </div>
  );
};
