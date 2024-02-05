import styles from "@/styles";

export default function Card({
  projectDescription,
  projectPic,
  title,
  projectLink,
  projectTags,
}) {
  return (
    <div className="shadow-[0px_0px_15px_-5px] animate-[ease-in-out] transition-[0.3s] max-w-xs overflow-hidden max-h-full hover:scale-110 card bg-black">
      <img src={projectPic} alt="project" className="h-56 overflow-hidden" />
      <div className="m-4 mt-2 flex flex-col items-center">
        <div className="mb-2 font-bold text-white">{title}</div>
        <div className="text-white">{projectDescription}</div>
        <ul className="flex items-center justify-center flex-wrap">
          {projectTags?.map((tag) => {
            return (
              <li className="text-white px-4 py-2 mx-2 my-2 bg-purple-700 rounded-full">
                {tag}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center">
          <button className={`${styles.customButton} p-2 bg-white border-none mt-6` }>
            <a href={projectLink}>View Code</a>
          </button>
        </div>
      </div>
    </div>
  );
}
