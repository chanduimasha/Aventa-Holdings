// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// // Define the type for a navigation link
// type NavLink = {
//   name: string;
//   path: string;
//   subLinks?: NavLink[]; // Optional sub-links for dropdown
// };

// const links: NavLink[] = [
//   {
//     name: "home",
//     path: "/",
//   },
//   {
//     name: "about",
//     path: "/about",
//     subLinks: [
//       { name: "Our Journey", path: "/about/our-journey" },
//       { name: "Leadership", path: "/about/leadership" },
//     ],
//   },
//   {
//     name: "ESG",
//     path: "/esg",
//     subLinks: [
//       { name: "Environmental", path: "/esg/environmental" },
//       { name: "Social", path: "/esg/social" },
//       { name: "Governance", path: "/esg/governance" },
//     ],
//   },
//   {
//     name: "contact",
//     path: "/contact",
//   },
//   {
//     name: "careers",
//     path: "/careers",
//   },
//   {
//     name: "subsidiaries",
//     path: "/subsidiaries",
//     subLinks: [
//       { name: "NetworkStore.lk", path: "/subsidiaries/networkstore" },
//       { name: "Auxano", path: "/subsidiaries/auxano" },
//       { name: "Eco Lanka", path: "/subsidiaries/ecolanka" },
//       { name: "Saroda", path: "/subsidiaries/saroda" },
//     ],
//   },
//   {
//     name: "news",
//     path: "/news",
//   },
//   {
//     name: "blogs",
//     path: "/blogs",
//   },
// ];

// const Nav: React.FC = () => {
//   const pathname = usePathname();
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const handleMouseEnter = (name: string) => {
//     setOpenDropdown(name); // Show dropdown on hover
//   };

//   const handleMouseLeave = () => {
//     setOpenDropdown(null); // Hide dropdown when mouse leaves
//   };

//   return (
//     <nav className="flex gap-8">
//       {links.map((link, index) => (
//         <div
//           key={index}
//           className="relative"
//           onMouseEnter={() => handleMouseEnter(link.name)} // Show dropdown on hover
//           onMouseLeave={handleMouseLeave} // Hide dropdown when mouse leaves
//         >
//           {/* If the link has subLinks, render a button to show dropdown */}
//           {link.subLinks ? (
//             <button
//               className={`${
//                 link.path === pathname && "text-fuchsia-500 border-b-2 border-fuchsia-500"
//               } capitalize font-medium hover:text-fuchsia-500 transition-all`}
//             >
//               {link.name}
//             </button>
//           ) : (
//             <Link
//               href={link.path}
//               className={`${
//                 link.path === pathname && "text-fuchsia-500 border-b-2 border-fuchsia-500"
//               } capitalize font-medium hover:text-fuchsia-500 transition-all`}
//             >
//               {link.name}
//             </Link>
//           )}

//           {/* Dropdown menu for "about" and other items with subLinks */}
//           {link.subLinks && openDropdown === link.name && (
//             <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48">
//               {link.subLinks.map((subLink, subIndex) => (
//                 <Link
//                   href={subLink.path}
//                   key={subIndex}
//                   className={`block px-4 py-2 text-black hover:text-fuchsia-500 transition-all`}
//                 >
//                   {subLink.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </nav>
//   );
// };

// export default Nav;

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Define the type for a navigation link
type NavLink = {
  name: string;
  path: string;
  subLinks?: NavLink[]; // Optional sub-links for dropdown
};

const links: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
    subLinks: [
      { name: "Our Journey", path: "/about/ourjourney" },
      { name: "Leadership", path: "/about/leadership" },
    ],
  },
  {
    name: "ESG",
    path: "/esg",
    subLinks: [
      { name: "Environmental", path: "/esg/environmental" },
      { name: "Social", path: "/esg/social" },
      { name: "Governance", path: "/esg/governance" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Subsidiaries",
    path: "/subsidiaries",
    subLinks: [
      { name: "NetworkStore.lk", path: "/subsidiaries/networkstore" },
      { name: "Auxano", path: "/subsidiaries/auxano" },
      { name: "Eco Lanka", path: "/subsidiaries/ecolanka" },
      { name: "Saroda", path: "/subsidiaries/saroda" },
    ],
  },
  {
    name: "News",
    path: "/news",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="flex items-center space-x-8 relative z-50">
      {links.map((link, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => setOpenDropdown(link.name)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {link.subLinks ? (
            <div
              className={`
                flex items-center cursor-pointer 
                ${pathname.startsWith(link.path)
                  ? "text-white font-semibold"
                  : "text-white hover:text-indigo-600"
                }
                text-[15px]
                transition-colors 
                duration-300 
                relative
                pb-0
              `}
            >
              {link.name}
              <ChevronDown
                className={`
                  ml-1.5 
                  h-4 
                  w-4 
                  transition-transform 
                  duration-300 
                  ${openDropdown === link.name ? "rotate-180" : ""}
                  ${pathname.startsWith(link.path)
                    ? "text-indigo-600"
                    : "text-gray-400"
                  }
                `}
                strokeWidth={2.5}
              />
              {openDropdown === link.name && (
                <motion.div
                  layoutId="underline"
                  {...{
                    className:
                      "absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          ) : (
            // <Link
            //   href={link.path}
            //   className={`
            //     text-[15px]
            //     font-medium
            //     relative
            //     pb-2
            //     ${
            //       pathname === link.path
            //         ? "text-white font-semibold"
            //         : "text-white hover:text-indigo-600"
            //     }
            //     transition-colors 
            //     duration-300
            //     group
            //   `}
            // >
            //   {link.name}
            //   {pathname === link.path && (
            //     <motion.div
            //       layoutId="underline"
            //       {...{
            //         className:
            //           "absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600",
            //       }}
            //       initial={{ scaleX: 0 }}
            //       animate={{ scaleX: 1 }}
            //       transition={{ duration: 0.3 }}
            //     />
            //   )}
            // </Link>
            <a
              href={link.path} // Use the link path as the href
              target={link.path.startsWith("http") ? "_blank" : undefined} // Open external links in a new tab
              rel={link.path.startsWith("http") ? "noopener noreferrer" : undefined} // Security for external links
              className={`
                text-[15px]
                font-medium
                relative
                pb-2
                ${pathname === link.path
                  ? "text-white font-semibold"
                  : "text-white hover:text-indigo-600"
                }
                transition-colors 
                duration-300
                group
              `}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          )}

          <AnimatePresence>
            {link.subLinks && openDropdown === link.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                {...{
                  className:
                    "absolute top-full left-0 mt-4 w-60  bg-white rounded-xl shadow-2xl border  border-gray-100  overflow-hidden z-50 ",
                }}
              >
                <div className="py-2">
                  {link.subLinks.map((subLink, subIndex) => (
                    // <Link
                    //   key={subIndex}
                    //   href={subLink.path}
                    //   className={`
                    //     block 
                    //     px-5 
                    
                    //     py-3 
                    //     text-[14px]
                    //     ${pathname === subLink.path
                    //       ? "bg-indigo-50 text-indigo-700 font-medium"
                    //       : "text-gray-700 hover:bg-indigo-300"
                    //     }
                    //     transition-colors 
                    //     duration-200
                    //     relative
                    //     group/sublink
                    //   `}
                    // >
                    //   {subLink.name}
                    //   <span
                    //     className="
                    //       absolute 
                    //       left-2 
                    //       top-1/2 
                    //       -translate-y-1/2 
                    //       w-1.5 
                    //       h-1.5 
                    //       bg-indigo-700 
                    //       rounded-full 
                    //       opacity-0 
                    //       group-hover/sublink:opacity-100 
                    //       transition-all 
                    //       duration-300
                    //     "
                    //   />
                    // </Link>
                    <a
                      key={subIndex} // Use a unique key, such as the name or an ID
                      href={subLink.path} // Set the href attribute for navigation
                      target={subLink.path.startsWith("http") ? "_blank" : undefined} // Open external links in a new tab
                      rel={subLink.path.startsWith("http") ? "noopener noreferrer" : undefined} // Ensure external link security
                      className={`
                      block 
                      px-5 
                      py-3 
                      text-[14px]
                      ${pathname === subLink.path
                          ? "bg-indigo-50 text-indigo-700 font-medium"
                          : "text-gray-700 hover:bg-indigo-300"
                        }
                      transition-colors 
                      duration-200
                      relative
                      group/sublink
                    `}
                    >
                      {subLink.name}
                      <span
                        className="
                        absolute 
                        left-2 
                        top-1/2 
                        -translate-y-1/2 
                        w-1.5 
                        h-1.5 
                        bg-indigo-700 
                        rounded-full 
                        opacity-0 
                        group-hover/sublink:opacity-100 
                        transition-all 
                        duration-300
                      "
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
};

export default Nav;