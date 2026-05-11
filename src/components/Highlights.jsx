function Highlights() {
  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design revolucionário</h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="/public/img/highlights_design_endframe__eu8gj0kqlmoi_large.jpg"
              alt="Titânio Premium"
            />
            <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
            <p className=" text-gray-300 ">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte
              e leve.
            </p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="font-bold mb-2 text-3xl"
              src="public/img/highlights_ios__e4213yr3208y_large.jpg"
              alt="ios 2026"
            />
            <h3 className="font-bold mb-2 text-3xl">IOS 26</h3>
            <p className="text-gray-300 ">
              O sistema operacional mais avançado do mundo com IA integrada.
            </p>
          </div>
        </div>

        <div className=" bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
          <p className="text-gray-300 mb-6">
            O chip mais poderosos em um smartphone
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="public/img/initial__d2ghrz27b54y_medium_2x.jpg"
            alt="chip a18"
          />
          <ul className="space-y-3 text-gray-300">
            <li>* CPU 20% mais rápido</li>
            <li>* GPU 25% mais eficiente</li>
            <li>* Neural engine com 16 núcleos</li>
            <li>* Ray tracing acelerado por hardware</li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div id="camera" className="text-center">
          <h3 className="text-4xl font-bold mb-10  ">
            Sistema de câmera Pro avançado
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-2xln p-8 hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
              <h4 className="text-xl font-semibold mb-2">Principal</h4>
              <p className="text-gray-400">
                Sensor quad-pixel com foco absoluto.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xln p-8 hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-4">
                12MP
              </div>
              <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
              <p className="text-gray-400">
                Campo de visão de 120° com foco automático e modo macro.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xln p-8 hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
              <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
              <p className="text-gray-400">
                Zom óptico de 5x com estabilização avançada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
