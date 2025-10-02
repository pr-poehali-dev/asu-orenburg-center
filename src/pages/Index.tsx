import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-600 rounded-lg flex items-center justify-center">
                <Icon name="Activity" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="font-heading font-bold text-lg text-foreground">Отдел АСУ</h1>
                <p className="text-xs text-muted-foreground">Оренбургский перинатальный центр</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'main', label: 'Главная', icon: 'Home' },
                { id: 'about', label: 'О центре', icon: 'Building2' },
                { id: 'department', label: 'Отдел АСУ', icon: 'Computer' },
                { id: 'team', label: 'Команда', icon: 'Users' },
                { id: 'gallery', label: 'Галерея', icon: 'Image' },
                { id: 'contact', label: 'Контакты', icon: 'Mail' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="main" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                  Отдел автоматизированных систем управления
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Мы обеспечиваем бесперебойную работу информационных систем перинатального центра, 
                  внедряем современные технологии и поддерживаем цифровую инфраструктуру учреждения.
                </p>
                <div className="flex gap-4">
                  <Button onClick={() => scrollToSection('contact')} size="lg" className="gap-2">
                    <Icon name="Mail" size={20} />
                    Связаться с нами
                  </Button>
                  <Button onClick={() => scrollToSection('department')} variant="outline" size="lg">
                    Узнать больше
                  </Button>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
                  <img 
                    src="https://v3.fal.media/files/elephant/XaGl1R89YjJpIO349RZEe_output.png" 
                    alt="Медицинский центр"
                    className="relative rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                О Перинатальном центре
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Государственное автономное учреждение здравоохранения "Оренбургский клинический перинатальный центр"
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'Heart',
                  title: 'Высокое качество помощи',
                  description: 'Современное медицинское оборудование и квалифицированные специалисты'
                },
                {
                  icon: 'Shield',
                  title: 'Безопасность',
                  description: 'Соблюдение всех стандартов безопасности и конфиденциальности данных'
                },
                {
                  icon: 'Sparkles',
                  title: 'Инновации',
                  description: 'Внедрение передовых технологий для улучшения качества медицинской помощи'
                }
              ].map((item, idx) => (
                <Card key={idx} className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="font-heading">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="department" className="py-20 px-4 bg-gradient-to-b from-secondary to-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Чем занимается отдел АСУ
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Наш отдел обеспечивает комплексную автоматизацию всех процессов перинатального центра
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'Server',
                  title: 'Поддержка IT-инфраструктуры',
                  points: [
                    'Обслуживание серверного оборудования',
                    'Администрирование сетевой инфраструктуры',
                    'Техническая поддержка рабочих станций'
                  ]
                },
                {
                  icon: 'Database',
                  title: 'Работа с медицинскими информационными системами',
                  points: [
                    'Поддержка МИС',
                    'Интеграция медицинского оборудования',
                    'Обеспечение защиты медицинских данных'
                  ]
                },
                {
                  icon: 'Wrench',
                  title: 'Техническое обеспечение',
                  points: [
                    'Установка и настройка программного обеспечения',
                    'Ремонт и модернизация компьютерной техники',
                    'Обучение персонала работе с системами'
                  ]
                },
                {
                  icon: 'LineChart',
                  title: 'Развитие и модернизация',
                  points: [
                    'Внедрение новых технологий',
                    'Автоматизация рабочих процессов',
                    'Оптимизация информационных систем'
                  ]
                }
              ].map((item, idx) => (
                <Card key={idx} className="animate-slide-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${idx * 0.15}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={item.icon as any} className="text-primary" size={20} />
                      </div>
                      <CardTitle className="font-heading text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Наша команда
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Специалисты отдела АСУ с многолетним опытом работы в медицинской сфере
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Иванов Алексей Петрович',
                  position: 'Начальник отдела АСУ',
                  experience: '15 лет в IT-сфере',
                  icon: 'UserCircle'
                },
                {
                  name: 'Смирнова Елена Викторовна',
                  position: 'Ведущий системный администратор',
                  experience: '10 лет опыта',
                  icon: 'UserCircle'
                },
                {
                  name: 'Петров Дмитрий Сергеевич',
                  position: 'Инженер-программист',
                  experience: '8 лет в медицинских ИС',
                  icon: 'UserCircle'
                }
              ].map((member, idx) => (
                <Card key={idx} className="animate-fade-in hover:shadow-lg transition-all duration-300 text-center" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={member.icon as any} className="text-white" size={48} />
                    </div>
                    <CardTitle className="font-heading text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-base">{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Award" size={16} className="text-primary" />
                      <span>{member.experience}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Галерея
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Наше оборудование и рабочие процессы отдела АСУ
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  src: '/img/98b6185d-71cb-4669-a47a-23047602fa57.jpg',
                  title: 'Серверная инфраструктура',
                  description: 'Современное серверное оборудование центра'
                },
                {
                  src: '/img/edd4f836-2ffa-4737-9b99-0d144104e82b.jpg',
                  title: 'Рабочий процесс',
                  description: 'Специалисты отдела за работой'
                },
                {
                  src: '/img/8d264663-cdc1-4e2f-8766-84987bc7db72.jpg',
                  title: 'Системы мониторинга',
                  description: 'Медицинские информационные системы'
                }
              ].map((image, idx) => (
                <Card 
                  key={idx} 
                  className="animate-fade-in hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group" 
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <Icon name="ZoomIn" className="text-white" size={24} />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading text-lg">{image.title}</CardTitle>
                    <CardDescription>{image.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-secondary to-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Контакты и помощь
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами для получения технической поддержки или консультации
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 animate-slide-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <Icon name="MapPin" className="text-primary" size={20} />
                      Адрес
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      г. Оренбург, ул. Салмышская, д. 52
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <Icon name="Phone" className="text-primary" size={20} />
                      Телефон
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+7 (3532) XX-XX-XX (доб. XXX)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <Icon name="Mail" className="text-primary" size={20} />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">asu@okpc-orenburg.ru</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <Icon name="Clock" className="text-primary" size={20} />
                      Режим работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 17:00</p>
                    <p className="text-muted-foreground text-sm">Экстренная поддержка: круглосуточно</p>
                  </CardContent>
                </Card>
              </div>
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="font-heading">Форма обращения</CardTitle>
                  <CardDescription>Оставьте заявку, и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="w-full" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="w-full" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" className="w-full" />
                    </div>
                    <div>
                      <Textarea placeholder="Опишите вашу проблему или вопрос" className="w-full min-h-[120px]" />
                    </div>
                    <Button className="w-full gap-2">
                      <Icon name="Send" size={16} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">О центре</h3>
              <p className="text-gray-300 text-sm">
                ГАУЗ "Оренбургский клинический перинатальный центр" - современное медицинское учреждение, 
                оказывающее высококвалифицированную помощь.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-sm">
                {['Главная', 'О центре', 'Отдел АСУ', 'Команда', 'Галерея', 'Контакты'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollToSection(
                        link === 'Главная' ? 'main' : 
                        link === 'О центре' ? 'about' : 
                        link === 'Отдел АСУ' ? 'department' : 
                        link === 'Команда' ? 'team' : 
                        link === 'Галерея' ? 'gallery' : 'contact'
                      )}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Отдел АСУ</h3>
              <p className="text-gray-300 text-sm mb-2">Техническая поддержка и автоматизация</p>
              <p className="text-gray-300 text-sm">asu@okpc-orenburg.ru</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ГАУЗ "Оренбургский клинический перинатальный центр". Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Просмотр изображения"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;