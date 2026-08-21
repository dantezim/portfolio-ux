import svgPaths from "./svg-j8r5sa3a27";
import imgDownload1 from "./700c0d60683d14d88890d3fd83eacf3786b5c9ed.png";
import imgRectangle3 from "./9e02335baa9e73c98c7949947f1cfe368040d3d1.png";

function BotaoLinkedin({ className }: { className?: string }) {
  return (
    <div className={className || "h-[52px] relative w-[203px]"} data-name="Botão Linkedin">
      <div className="absolute aspect-[174/44] bg-[#d9d9d9] left-0 right-0 rounded-[18px] top-0" />
      <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[38.46%_5.42%_23.08%_22.66%] justify-center leading-[0] not-italic text-[#141516] text-[18px] tracking-[-0.9px] whitespace-nowrap">
        <p className="leading-[1.1]">Veja meu LinkedIn</p>
      </div>
      <div className="absolute contents inset-[23.08%_80.79%_23.17%_5.42%]" data-name="Group">
        <div className="absolute inset-[23.08%_80.79%_23.17%_5.42%]" data-name="Group">
          <svg className="absolute block inset-0 size-full" fill="none" height="27.9519" preserveAspectRatio="none" viewBox="0 0 28 27.9519" width="28">
            <g id="Group">
              <path d={svgPaths.p8cc540} fill="black" id="Vector" />
              <path d={svgPaths.p22555e80} fill="black" id="Vector_2" />
              <path d={svgPaths.p8e03100} fill="black" id="Vector_3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Sections() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 text-[16px] tracking-[-0.8px]" data-name="Sections">
      <div className="col-1 flex flex-col h-[16.629px] justify-center ml-0 mt-0 relative row-1 w-[56.165px]">
        <p className="leading-[1.1]">Sobre</p>
      </div>
      <div className="col-1 flex flex-col h-[16.629px] justify-center ml-[123.03px] mt-0 relative row-1 w-[76.224px]">
        <p className="leading-[1.1]">Projetos</p>
      </div>
      <div className="col-1 flex flex-col h-[16.629px] justify-center ml-[266.11px] mt-0 relative row-1 w-[74.886px]">
        <p className="leading-[1.1]">Contato</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="[word-break:break-word] absolute content-between flex flex-wrap gap-x-[341px] h-[96px] items-center leading-[0] left-0 not-italic overflow-clip px-[200px] py-[32px] right-0 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] text-[#f3f4f8] top-0" style={{ backgroundImage: "linear-gradient(95.3102416636248deg, rgb(91, 104, 245) 0.58654%, rgb(43, 73, 170) 45.761%, rgb(21, 30, 135) 102.41%)" }} data-name="Header">
      <div className="flex flex-col font-['IBM_Plex_Mono:Bold',sans-serif] h-[32.333px] justify-center relative shrink-0 text-[0px] tracking-[-1.6px] w-[250px]">
        <p className="font-black text-[32px]">
          <span className="font-['Inter:Black',sans-serif] leading-[1.1] not-italic">{`PEDRO `}</span>
          <span className="font-['Inter:Black_Italic',sans-serif] italic leading-[1.1]">ARMADA</span>
        </p>
      </div>
      <Sections />
    </div>
  );
}

function TituloHero() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[calc(10%+8px)] not-italic top-[269px]" data-name="Título Hero">
      <div className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] left-[calc(10%+8px)] text-[#1c1b1b] text-[0px] top-[269px] tracking-[2.16px] w-[1056px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0 text-[72px]">{`Transformando ideias em `}</p>
        <p className="leading-[normal] text-[#6822c9] text-[72px]">experiências digitais</p>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal left-[calc(10%+8px)] text-[#494a4c] text-[24px] top-[472px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Product Designer focado em soluções que agregam ao negócio e melhoram</p>
        <p className="leading-[normal]">a experiência do usuário, orientado a dados.</p>
      </div>
    </div>
  );
}

function BotaoBaixarCurriculo() {
  return (
    <div className="absolute contents left-[calc(80%+82px)] top-[22px]" data-name="Botão baixar currículo">
      <div className="absolute bg-[#d9d9d9] h-[52px] left-[calc(80%+82px)] rounded-[18px] top-[22px] w-[205.636px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21.667px] justify-center leading-[0] left-[calc(80%+135px)] not-italic text-[#141516] text-[18px] top-[51.25px] tracking-[-0.9px] w-[136.5px]">
        <p className="leading-[1.1]">Baixar currículo</p>
      </div>
      <div className="absolute left-[calc(80%+98.17px)] size-[27.083px] top-[35px]" data-name="download 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDownload1} />
      </div>
    </div>
  );
}

function PillDisponivel() {
  return (
    <div className="absolute contents left-[calc(80%+176px)] top-[313px]" data-name="Pill Disponível">
      <div className="absolute bg-gradient-to-r from-[#10783b] from-[0.225%] h-[19px] left-[calc(80%+176px)] rounded-[3px] to-[#129649] top-[313px] w-[89px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(90%+2px)] not-italic text-[#1c2f24] text-[12px] top-[322.5px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.1]">Disponível</p>
      </div>
    </div>
  );
}

function PillUxDesigner() {
  return (
    <div className="absolute contents left-[calc(70%+72px)] top-[478px]" data-name="Pill UX Designer">
      <div className="absolute bg-gradient-to-r from-[#8048ef] from-[0.225%] h-[19px] left-[calc(70%+72px)] rounded-[10px] to-[#129649] top-[478px] via-[#477099] via-[33.019%] w-[89px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(70%+90px)] not-italic text-[#1c1f1d] text-[12px] top-[487.5px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.1]">UX Design</p>
      </div>
    </div>
  );
}

function PillUxDesigner1() {
  return (
    <div className="absolute contents left-[calc(70%+72px)] top-[478px]" data-name="Pill UX Designer">
      <div className="absolute bg-gradient-to-r from-[#7a5cb5] from-[0.225%] h-[19px] left-[calc(70%+72px)] rounded-[10px] to-[#129649] top-[478px] via-[#477099] via-[44.231%] w-[89px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(70%+89px)] not-italic text-[#1c1f1d] text-[12px] top-[487.5px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.1]">UX Design</p>
      </div>
    </div>
  );
}

function PillUxDesigner2() {
  return (
    <div className="absolute contents left-[calc(70%+171px)] top-[478px]" data-name="Pill UX Designer">
      <div className="absolute bg-gradient-to-r from-[#8048ef] from-[0.225%] h-[19px] left-[calc(70%+171px)] rounded-[10px] to-[#129649] top-[478px] via-[#477099] via-[33.019%] w-[89px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(80%-3px)] not-italic text-[#1c1f1d] text-[12px] top-[487.5px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.1]">UI Design</p>
      </div>
    </div>
  );
}

function PillUxDesigner3() {
  return (
    <div className="absolute contents left-[calc(70%+171px)] top-[478px]" data-name="Pill UX Designer">
      <div className="absolute bg-gradient-to-r from-[#7a5cb5] from-[0.225%] h-[19px] left-[calc(70%+171px)] rounded-[10px] to-[#129649] top-[478px] via-[#477099] via-[44.231%] w-[89px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(80%-1px)] not-italic text-[#1c1f1d] text-[12px] top-[487.5px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.1]">UI Design</p>
      </div>
    </div>
  );
}

function PillUxDesigner4() {
  return (
    <div className="absolute contents left-[calc(80%+78px)] top-[478px]" data-name="Pill UX Designer">
      <div className="absolute bg-gradient-to-r from-[#8048ef] from-[0.225%] h-[19px] left-[calc(80%+78px)] rounded-[10px] to-[#129649] top-[478px] via-[#477099] via-[33.019%] w-[101px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(80%+95px)] not-italic text-[#1c1f1d] text-[12px] top-[487.5px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.1]">UX Research</p>
      </div>
    </div>
  );
}

function PillUxDesigner5() {
  return (
    <div className="absolute contents left-[calc(80%+78px)] top-[478px]" data-name="Pill UX Designer">
      <div className="absolute bg-gradient-to-r from-[#7a5cb5] from-[0.225%] h-[19px] left-[calc(80%+78px)] rounded-[10px] to-[#129649] top-[478px] via-[#477099] via-[44.231%] w-[101px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(80%+95px)] not-italic text-[#1c1f1d] text-[12px] top-[487.5px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.1]">UX Research</p>
      </div>
    </div>
  );
}

function PillUxDesigner6() {
  return (
    <div className="absolute contents left-[calc(80%+189px)] top-[478px]" data-name="Pill UX Designer">
      <div className="absolute bg-gradient-to-r from-[#7a5cb5] from-[0.225%] h-[19px] left-[calc(80%+189px)] rounded-[10px] to-[#129649] top-[478px] via-[#477099] via-[44.231%] w-[79px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(90%+12px)] not-italic text-[#1c1f1d] text-[12px] top-[487.5px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[1.1]">Chatbots</p>
      </div>
    </div>
  );
}

function CartaoSobreMim() {
  return (
    <div className="absolute contents left-[calc(70%+36px)] top-[283px]" data-name="Cartão sobre mim">
      <div className="absolute bg-[#1e2121] border-2 border-[#a6adae] border-solid h-[257px] left-[calc(70%+36px)] rounded-[15px] top-[283px] w-[457px]" />
      <div className="absolute h-[99px] left-[calc(70%+72px)] rounded-[6px] top-[313px] w-[98px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
          <img alt="" className="absolute h-[132.9%] left-0 max-w-none top-[0.12%] w-full" src={imgRectangle3} />
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(80%-2px)] not-italic text-[16px] text-white top-[343px] tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[1.1]">Product Designer</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(80%-2px)] not-italic text-[16px] text-white top-[313px] whitespace-nowrap">Pedro Armada</p>
      <PillDisponivel />
      <PillUxDesigner />
      <PillUxDesigner1 />
      <PillUxDesigner2 />
      <PillUxDesigner3 />
      <PillUxDesigner4 />
      <PillUxDesigner5 />
      <PillUxDesigner6 />
      <div className="absolute h-0 left-[calc(70%+72px)] top-[432px] w-[385px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 385 1" width="385">
            <line id="Line 2" stroke="white" x2="385" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(70%+72px)] not-italic text-[#909797] text-[14px] top-[450.5px] tracking-[-0.7px] whitespace-nowrap">
        <p className="leading-[1.1]">Áreas de atuação</p>
      </div>
    </div>
  );
}

function CtaContato() {
  return (
    <div className="absolute contents left-[calc(10%+5px)] top-[1441px]" data-name="CTA Contato">
      <div className="absolute bg-[#d9d9d9] h-[52px] left-[calc(10%+5px)] rounded-[18px] top-[1441px] w-[556px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(10%+26px)] not-italic text-[#141516] text-[24px] top-[1452px] whitespace-nowrap">Tem uma ideia de projeto? Vamos conversar!</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f6f7fb] relative size-full">
      <Header />
      <TituloHero />
      <BotaoLinkedin className="absolute h-[52px] left-[calc(70%+36px)] top-[22px] w-[203px]" />
      <BotaoBaixarCurriculo />
      <CartaoSobreMim />
      <div className="absolute h-[818px] left-0 top-[749px] w-[1920px]" style={{ backgroundImage: "linear-gradient(90.62497261877155deg, rgb(91, 104, 245) 0.58654%, rgb(43, 73, 170) 45.761%, rgb(21, 30, 135) 102.41%)" }} />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(10%+8px)] not-italic text-[#ccd4d4] text-[24px] top-[908px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">Muito Prazer! Me chamo Pedro Henrique Armada Nalis, tenho 22 anos e atuo</p>
        <p className="leading-[normal] mb-0 whitespace-pre">como Product/UX Designer desde 2023, movido pela curiosidade e paixão</p>
        <p className="leading-[normal] mb-0 whitespace-pre">de resolver problemas através do design.</p>
        <p className="leading-[normal] mb-0 whitespace-pre">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre">Sou formado em Sistemas de Informação e descobri a profissão durante a</p>
        <p className="leading-[normal] mb-0 whitespace-pre">{`minha trajetória no curso, onde sempre tive um perfil mais analítico e `}</p>
        <p className="leading-[normal] mb-0 whitespace-pre">{`visual, mas não muito forte com código, até descobrir que havia uma área `}</p>
        <p className="leading-[normal] mb-0 whitespace-pre">{`que se encaixava perfeitamente comigo: UX/UI Design. Mergulhei de cabeça `}</p>
        <p className="leading-[normal] mb-0 whitespace-pre">{`nos estudos e vi que ali era onde estava meu potencial, mas sem dispensar `}</p>
        <p className="leading-[normal] mb-0 whitespace-pre">a bagagem que consegui com meu período na programação, visto que hoje ela</p>
        <p className="leading-[normal] mb-0 whitespace-pre">me ajuda a tomar decisões melhores e me permite ter uma boa comunicação</p>
        <p className="leading-[normal] mb-0 whitespace-pre">com times de desenvolvimento.</p>
        <p className="leading-[normal] mb-0 whitespace-pre">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre">Pra além do trabalho, sempre gostei de ter diversos hobbies desde pequeno.</p>
        <p className="leading-[normal] mb-0 whitespace-pre">Hoje no meu tempo livre, gosto muito de tocar baixo, ler livros e quadrinhos,</p>
        <p className="leading-[normal] mb-0 whitespace-pre">ver filmes e jogar videogame. Não só são atividades que eu gosto muito, mas</p>
        <p className="leading-[normal] whitespace-pre">elas também me ajudam a estimular minha criatividade e minhas ideias.</p>
      </div>
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-[calc(10%+8px)] not-italic text-[#e1e3ed] text-[72px] top-[789px] tracking-[2.16px] whitespace-nowrap">Sobre mim</p>
      <CtaContato />
    </div>
  );
}