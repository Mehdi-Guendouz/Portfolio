import {content} from '../Content';
import {useState , createElement} from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};


Modal.setAppElement('#root');


const Skills = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [skillstab, setskillstab] = useState(null)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const {skills} = content



  return <section className='bg-bg_light_primary'>

    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
              <div className="flex items-center gap-2">
                <img className="w-10" src={skills.logo} alt="..." />
                <h6>{skills.name}</h6>
              </div>
              <br />
              <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit, ame.</li>
                <li>Lorem ipsum dolor sit, amet consectetur</li>
                <li>
                  Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
                  beatae quos rem.
                </li>
              </ul>
              <br />
              <div className="flex justify-end">
                <button onClick={closeModal} className="btn">
                  Close
                </button>
              </div>
    </Modal>
      <div className="py-10 px-5 flex items-center justify-center flex-col">
        <div className='w-full flex items-start justify-start flex-col gap-2 ml-[50px]'>
          <h2 className='md:text-3xl text-2xl'>{skills.title}</h2>
          <h4 className='text-gray'>{skills.subtitle}</h4>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-[1rem] p-10 px-20 ">
          {skills.skills_content.map((item,i)=>(
            <div className="bg-white group cursor-pointer flex items-center justify-start p-5 gap-5 rounded-md border-2 border-slate-200 " key={i}>
              <div><img src={item.logo} alt="logo" className='w-10 group-hover:scale-125 duration-200' /></div>
              <div className='px-7'>
                <h6>{item.name}</h6>
                <p>{item.para}</p>
              </div>
              <div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
  </section>;
};

export default Skills;
