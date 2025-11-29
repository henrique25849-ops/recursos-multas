'use client';

import { ThemeToggle } from '@/components/custom/theme-toggle';
import { 
  FileText, 
  Search, 
  CreditCard, 
  Users, 
  BookOpen, 
  Headphones,
  ArrowRight,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const mainActions = [
    {
      icon: FileText,
      title: 'Gerar Recurso Automático',
      description: 'Crie seu recurso em minutos com IA',
      href: '/gerar-recurso',
      highlight: true
    },
    {
      icon: Search,
      title: 'Consultar Multas',
      description: 'Veja suas multas e recursos salvos',
      href: '/consultar-multas',
      highlight: false
    },
    {
      icon: CreditCard,
      title: 'Planos',
      description: 'Escolha o melhor plano para você',
      href: '/planos',
      highlight: false
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Compartilhe experiências e dicas',
      href: '/comunidade',
      highlight: false
    },
    {
      icon: BookOpen,
      title: 'Tutoriais',
      description: 'Aprenda sobre recursos de multas',
      href: '/tutoriais',
      highlight: false
    },
    {
      icon: Headphones,
      title: 'Suporte',
      description: 'Tire suas dúvidas conosco',
      href: '/suporte',
      highlight: false
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Rápido e Inteligente',
      description: 'Gere recursos em minutos com perguntas inteligentes'
    },
    {
      icon: Shield,
      title: 'Baseado no CTB',
      description: 'Argumentos jurídicos fundamentados no Código de Trânsito'
    },
    {
      icon: CheckCircle,
      title: 'Revisão Especializada',
      description: 'Plano Premium com revisão manual por especialistas'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
      <ThemeToggle />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center space-y-2">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-blue-400 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              minnes
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">
              multas
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Recursos de Multas de Trânsito
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Resolva sua multa em minutos com{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              inteligência automática
            </span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Sistema híbrido que faz perguntas inteligentes e gera recursos personalizados baseados no CTB
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Actions Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mainActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                action.highlight
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white shadow-2xl'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="relative z-10">
                <action.icon className={`w-12 h-12 mb-4 ${
                  action.highlight ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                }`} />
                <h3 className="text-2xl font-bold mb-2">
                  {action.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  action.highlight ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {action.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  Acessar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para recorrer da sua multa?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Comece agora gratuitamente e gere até 3 recursos por mês
          </p>
          <Link
            href="/gerar-recurso"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Gerar Meu Recurso Agora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/meus-recursos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Meus Recursos
          </Link>
          <Link href="/comunidade" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Comunidade
          </Link>
          <Link href="/perfil" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Perfil
          </Link>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-500">
          © 2024 minnes.multas - Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
