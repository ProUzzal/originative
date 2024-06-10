import React from "react";

export default function Header() {
  return (
    <div
      className="flex items-center justify-between container px-[40px] py-5 mt-5 rounded-2xl bg-[rgba(251,251,251,0.50)] 
    shadow-[0px_7px_28px_0px_rgba(0,0,0,0.05)] backdrop-blur-[14px] sticky top-0"
    >
      <a className="flex items-center gap-2" href="#">
        {" "}
        <img src="/image/icon/logo.png" alt="" />{" "}
        <span className="text-[#0F172A] text-2xl">Originative</span>{" "}
      </a>

      <nav>
        <ul className="flex items-center justify-center gap-4 text-[#000]">
          <li>Home</li>
          <li>Agency </li>
          <li className="flex gap-1 items-center">
            Service{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
                  fill="white"
                />
                <path
                  d="M5.52502 6.66663L8.08502 9.33329L10.645 6.66663"
                  stroke="black"
                />
              </svg>
            </span>{" "}
          </li>
          <li>Works</li>
          <li>Contacts</li>
        </ul>
      </nav>

      <a
        className="flex group items-center gap-[10px] bg-brandPrimary text-white hover:bg-white hover:text-[#0F172A] py-3 pl-4 pr-3 rounded-full"
        href="#"
      >
        Let&apos;s talks
        {/* <svg
         
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M8.87487 3.48977L9.69253 2.67207C10.1441 2.22047 10.8763 2.22047 11.328 2.67207C11.7795 3.12367 11.7795 3.85586 11.328 4.30746L10.5102 5.12515M8.87487 3.48977L4.07178 8.29288C3.46202 8.90264 3.15713 9.20749 2.94953 9.57901C2.74192 9.95054 2.53305 10.8278 2.33331 11.6667C3.1722 11.467 4.04947 11.2581 4.421 11.0505C4.79252 10.8429 5.0974 10.538 5.70717 9.92826L10.5102 5.12515M8.87487 3.48977L10.5102 5.12515"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.41669 11.6666H9.91669"
            stroke="black"
            stroke-linecap="round"
          />
        </svg> */}
        <svg
          className="group-hover:bg-brandPrimary block text-[#0F172A] group-hover:text-white p-1 bg-white rounded-full h-[14px] w-[14px]"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
          <path d="m15 5 3 3"></path>
        </svg>
      </a>
    </div>
  );
}
