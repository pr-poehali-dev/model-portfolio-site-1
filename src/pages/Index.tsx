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

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent to-secondary">
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-sm bg-background/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-light italic tracking-wider">Анастасия</h1>
          <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О себе</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Fashion Model</p>
              <h2 className="text-6xl md:text-8xl font-light italic leading-none">
                Элегантность<br/>
                <span className="text-primary">в каждом<br/>движении</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
              Создаю визуальные истории через моделинг. Работаю с ведущими брендами и фотографами, воплощая творческие концепции в жизнь.
            </p>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform"
            >
              <span className="tracking-wider">Смотреть работы</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
            <img 
              src={portfolioImages[0].url}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Избранные работы</p>
            <h3 className="text-5xl md:text-7xl font-light italic">Портфолио</h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={portfolioImages[currentIndex].url}
                alt={portfolioImages[currentIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-background/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-background/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-2xl font-light italic text-muted-foreground">
                {portfolioImages[currentIndex].title}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-24">
            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                <Icon name="Camera" size={24} className="text-accent-foreground" />
              </div>
              <h4 className="text-2xl font-light italic mb-3">Редакционные съемки</h4>
              <p className="text-muted-foreground leading-relaxed">
                Работа с fashion-изданиями и творческими проектами высокого уровня
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Icon name="Sparkles" size={24} className="text-secondary-foreground" />
              </div>
              <h4 className="text-2xl font-light italic mb-3">Рекламные кампании</h4>
              <p className="text-muted-foreground leading-relaxed">
                Сотрудничество с брендами для создания визуального контента
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Icon name="Heart" size={24} className="text-primary" />
              </div>
              <h4 className="text-2xl font-light italic mb-3">Показы мод</h4>
              <p className="text-muted-foreground leading-relaxed">
                Участие в fashion weeks и презентациях коллекций дизайнеров
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/50">
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
              <div className="bg-accent rounded-2xl p-6">
                <h4 className="text-xl font-light italic mb-2">Параметры</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Рост: 175 см</p>
                  <p>Размер одежды: 42-44</p>
                  <p>Размер обуви: 38</p>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="text-xl font-light italic mb-2">Навыки</h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Подиум', 'Fashion съемка', 'Рекламная съемка', 'Позирование', 'Актерское мастерство'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-background/60 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Связаться</p>
            <h3 className="text-5xl md:text-7xl font-light italic">Давайте работать вместе</h3>
            <p className="text-lg text-muted-foreground">
              Открыта для новых проектов и сотрудничества
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="mailto:model@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform"
            >
              <Icon name="Mail" size={20} />
              <span className="tracking-wider">Написать email</span>
            </a>
            <a 
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-full hover:scale-105 transition-transform"
            >
              <Icon name="Instagram" size={20} />
              <span className="tracking-wider">Instagram</span>
            </a>
          </div>

          <div className="pt-12 flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Анастасия. Все права защищены.</p>
          <p className="text-sm text-muted-foreground italic">Создано с любовью к моде</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
