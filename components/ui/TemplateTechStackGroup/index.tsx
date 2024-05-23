import { cn } from "@/lib/utils";
import { techStackIcons } from "constants/techStackIcon";
// export default () => (
//   <div className="mt-3 text-zinc-400 flex items-center gap-5">
//     <svg
//       width="30"
//       height="30"
//       viewBox="0 0 1000 1000"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M467.253 0.269139C465.103 0.464613 458.26 1.14878 452.102 1.63747C310.068 14.4411 177.028 91.0671 92.7664 208.841C45.8456 274.325 15.8358 348.605 4.49658 427.284C0.488759 454.748 0 462.86 0 500.098C0 537.336 0.488759 545.448 4.49658 572.912C31.6716 760.666 165.298 918.414 346.53 976.861C378.983 987.319 413.196 994.453 452.102 998.754C467.253 1000.42 532.747 1000.42 547.898 998.754C615.054 991.326 671.945 974.71 728.055 946.073C736.657 941.675 738.319 940.502 737.146 939.525C736.364 938.939 699.707 889.777 655.718 830.352L575.758 722.353L475.562 574.085C420.43 492.572 375.073 425.915 374.682 425.915C374.291 425.818 373.9 491.693 373.705 572.13C373.412 712.97 373.314 718.639 371.554 721.962C369.013 726.751 367.058 728.706 362.952 730.856C359.824 732.42 357.087 732.713 342.327 732.713H325.415L320.919 729.878C317.986 728.021 315.836 725.578 314.37 722.744L312.317 718.345L312.512 522.382L312.805 326.321L315.836 322.509C317.4 320.457 320.723 317.818 323.069 316.547C327.077 314.592 328.641 314.397 345.552 314.397C365.494 314.397 368.817 315.179 373.998 320.848C375.464 322.411 429.717 404.12 494.624 502.541C559.531 600.963 648.289 735.352 691.887 801.324L771.065 921.248L775.073 918.609C810.557 895.543 848.094 862.703 877.81 828.495C941.056 755.877 981.818 667.326 995.503 572.912C999.511 545.448 1000 537.336 1000 500.098C1000 462.86 999.511 454.748 995.503 427.284C968.328 239.53 834.702 81.7821 653.47 23.3352C621.505 12.975 587.488 5.84016 549.365 1.53972C539.98 0.562345 475.367 -0.51276 467.253 0.269139ZM671.945 302.668C676.637 305.014 680.45 309.51 681.818 314.201C682.6 316.743 682.796 371.085 682.6 493.549L682.307 669.281L651.32 621.781L620.235 574.281V446.538C620.235 363.95 620.626 317.525 621.212 315.277C622.776 309.803 626.197 305.503 630.89 302.962C634.897 300.909 636.364 300.714 651.711 300.714C666.178 300.714 668.719 300.909 671.945 302.668Z"
//         fill="currentColor"
//       />
//     </svg>
//     <svg
//       width="35"
//       height="35"
//       viewBox="0 0 35 36"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M26.979 14.3687C25.8853 13.9921 24.92 13.3148 24.1936 12.4146C23.393 11.4116 22.3737 10.605 21.2135 10.0565C20.0533 9.50799 18.783 9.23212 17.4998 9.25C15.7737 9.12775 14.0649 9.66015 12.7136 10.7412C11.3623 11.8222 10.4678 13.3725 10.2082 15.0833C10.7196 14.2276 11.4892 13.5563 12.4065 13.1658C13.3237 12.7753 14.3411 12.6859 15.3123 12.9104C16.4042 13.2981 17.368 13.9793 18.0978 14.8792C18.9027 15.8742 19.924 16.6724 21.0839 17.2132C22.2439 17.754 23.5119 18.0231 24.7915 18C26.5176 18.1222 28.2265 17.5899 29.5777 16.5088C30.929 15.4278 31.8235 13.8775 32.0832 12.1667C31.5811 13.0326 30.8138 13.7141 29.8947 14.1106C28.9757 14.5071 27.9534 14.5976 26.979 14.3687ZM8.02067 21.6313C9.11434 22.0079 10.0797 22.6852 10.8061 23.5854C11.6066 24.5884 12.626 25.395 13.7862 25.9435C14.9464 26.492 16.2166 26.7679 17.4998 26.75C19.226 26.8723 20.9348 26.3399 22.2861 25.2589C23.6373 24.1778 24.5319 22.6275 24.7915 20.9167C24.2801 21.7724 23.5104 22.4437 22.5932 22.8342C21.676 23.2247 20.6586 23.3141 19.6873 23.0896C18.5955 22.702 17.6317 22.0207 16.9019 21.1208C16.0948 20.1283 15.0731 19.3318 13.9137 18.7912C12.7542 18.2507 11.4873 17.9801 10.2082 18C8.48204 17.8778 6.77319 18.4102 5.42193 19.4912C4.07067 20.5722 3.17615 22.1225 2.9165 23.8333C3.41862 22.9674 4.18585 22.2859 5.10493 21.8894C6.02401 21.4929 7.04623 21.4024 8.02067 21.6313Z"
//         fill="currentColor"
//       />
//     </svg>
//   </div>
// );

type TechStackIconType = {
  [key: string]: {
    name: string;
    icon: any;
  };
};
export const TechStackDisplay = ({icons , className}: {icons: string[] , className?:string}) => {
  return (
    <div className={cn("flex gap-2 mt-3 items-center" , className)}>
      {icons.map((icon) => {
        return <span>{techStackIcons[icon].icon}</span>;
      })}
    </div>
  );
};
