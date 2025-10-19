import { useState } from 'react';
import Icon from '@/components/ui/icon';

const portfolioImages = [
  {
    url: 'https://cdn.poehali.dev/projects/5e48db9d-e3e4-417d-bb39-aac89311e3fb/files/e63d2aae-505b-45e4-b76b-77e92bcfdd4e.jpg',
    title: 'Editorial 01'
  },
  {
    url: 'https://cdn.poehali.dev/projects/5e48db9d-e3e4-417d-bb39-aac89311e3fb/files/7fed3d1c-d117-4dcf-927e-109cf2027dcc.jpg',
    title: 'Editorial 02'
  },
  {
    url: 'https://cdn.poehali.dev/projects/5e48db9d-e3e4-417d-bb39-aac89311e3fb/files/9e78c6cb-6239-4276-9974-3242347e58f5.jpg',
    title: 'Editorial 03'
  }
];

const socialLinks = [
  { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com', color: 'hover:text-pink-400' },
  { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com', color: 'hover:text-blue-400' },
  { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com', color: 'hover:text-sky-400' },
  { name: 'TikTok', icon: 'Music', url: 'https://tiktok.com', color: 'hover:text-purple-400' },
  { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com', color: 'hover:text-red-400' },
  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com', color: 'hover:text-blue-500' },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute top-20 right-10 w-64 h-64 border border-foreground/10 rounded-full opacity-20" 
           style={{ borderRadius: '60% 40% 50% 50% / 40% 60% 50% 50%' }}></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 border border-foreground/10 rounded-full opacity-20"
           style={{ borderRadius: '50% 50% 40% 60% / 60% 40% 60% 40%' }}></div>

      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-background/90 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-light italic tracking-wider text-foreground">Анастасия</h1>
          <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О себе</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section id="portfolio" className="min-h-screen pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Избранные работы</p>
            <h2 className="text-6xl md:text-8xl font-light italic text-foreground">Портфолио</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/30">
              <img 
                src={portfolioImages[currentIndex].url}
                alt={portfolioImages[currentIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            <button 
              onClick={prevImage}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-card/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 hover:bg-primary transition-all border border-border"
            >
              <Icon name="ChevronLeft" size={28} />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-card/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 hover:bg-primary transition-all border border-border"
            >
              <Icon name="ChevronRight" size={28} />
            </button>

            <div className="flex justify-center gap-3 mt-12">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-12' 
                      : 'bg-muted-foreground/40 hover:bg-muted-foreground/60 w-3'
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-3xl font-light italic text-muted-foreground">
                {portfolioImages[currentIndex].title}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-32">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-border/50 hover:border-primary/50">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                <Icon name="Camera" size={26} className="text-primary" />
              </div>
              <h4 className="text-2xl font-light italic mb-3">Редакционные съемки</h4>
              <p className="text-muted-foreground leading-relaxed">
                Работа с fashion-изданиями и творческими проектами высокого уровня
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-border/50 hover:border-primary/50">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                <Icon name="Sparkles" size={26} className="text-primary" />
              </div>
              <h4 className="text-2xl font-light italic mb-3">Рекламные кампании</h4>
              <p className="text-muted-foreground leading-relaxed">
                Сотрудничество с брендами для создания визуального контента
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-border/50 hover:border-primary/50">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                <Icon name="Heart" size={26} className="text-primary" />
              </div>
              <h4 className="text-2xl font-light italic mb-3">Показы мод</h4>
              <p className="text-muted-foreground leading-relaxed">
                Участие в fashion weeks и презентациях коллекций дизайнеров
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Обо мне</p>
              <h3 className="text-5xl md:text-6xl font-light italic leading-tight">
                Творчество через образ
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Я профессиональная модель с опытом работы в индустрии моды более 5 лет. Моя страсть — создавать уникальные образы, которые рассказывают истории.
                </p>
                <p>
                  Сотрудничала с международными брендами и участвовала в редакционных съемках для ведущих fashion-изданий. Каждый проект для меня — возможность проявить креативность и профессионализм.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-4xl font-light italic text-primary">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">Проектов</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-light italic text-primary">15+</p>
                  <p className="text-sm text-muted-foreground mt-1">Брендов</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-light italic text-primary">5+</p>
                  <p className="text-sm text-muted-foreground mt-1">Лет опыта</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h4 className="text-xl font-light italic mb-2">Параметры</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Рост: 175 см</p>
                  <p>Размер одежды: 42-44</p>
                  <p>Размер обуви: 38</p>
                </div>
              </div>

              <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h4 className="text-xl font-light italic mb-2">Навыки</h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Подиум', 'Fashion съемка', 'Рекламная съемка', 'Позирование', 'Актерское мастерство'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Связь</p>
            <h3 className="text-5xl md:text-7xl font-light italic">Социальные сети</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Следите за моими проектами и связывайтесь со мной в социальных сетях
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:scale-105 hover:shadow-xl transition-all ${social.color} hover:border-current`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon name={social.icon as any} size={32} />
                  </div>
                  <span className="text-lg font-light tracking-wider">{social.name}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-12">
            <a 
              href="mailto:model@example.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full hover:scale-105 hover:shadow-lg transition-all border border-primary"
            >
              <Icon name="Mail" size={22} />
              <span className="tracking-wider text-lg">Написать email</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50 relative z-10 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Анастасия. Все права защищены.</p>
          <p className="text-sm text-muted-foreground italic">Создано с любовью к моде</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
