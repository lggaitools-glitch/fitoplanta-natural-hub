import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment'>('cart');
  const [shippingData, setShippingData] = useState({
    name: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const shippingCost = totalPrice >= 150 ? 0 : 19.90;
  const finalTotal = totalPrice + shippingCost;

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFinishOrder = () => {
    toast.success('Pedido realizado com sucesso! Você receberá um e-mail com os detalhes.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-muted-foreground mb-8">
              Explore nossos produtos naturais e adicione itens ao seu carrinho.
            </p>
            <Button asChild size="lg">
              <Link to="/produtos">Ver Produtos</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link to="/produtos" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Continuar Comprando</span>
          </Link>

          <h1 className="font-display text-3xl font-bold text-foreground mb-8">
            Finalizar Pedido
          </h1>

          {/* Steps */}
          <div className="flex items-center gap-4 mb-12">
            {['Carrinho', 'Entrega', 'Pagamento'].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  i === ['cart', 'shipping', 'payment'].indexOf(step)
                    ? 'bg-primary text-primary-foreground'
                    : i < ['cart', 'shipping', 'payment'].indexOf(step)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {i + 1}
                </div>
                <span className={`text-sm ${
                  i === ['cart', 'shipping', 'payment'].indexOf(step)
                    ? 'font-medium text-foreground'
                    : 'text-muted-foreground'
                }`}>{s}</span>
                {i < 2 && <div className="w-8 h-px bg-border" />}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === 'cart' && (
                <div className="space-y-4 animate-fade-in">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4 p-4 bg-card rounded-xl shadow-card">
                      <div className="w-24 h-24 rounded-lg bg-green-soft overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.product.tagline}</p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-semibold">{formatPrice(item.product.price * item.quantity)}</span>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-destructive hover:text-destructive/80"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button size="lg" className="w-full mt-6" onClick={() => setStep('shipping')}>
                    Continuar para Entrega
                  </Button>
                </div>
              )}

              {step === 'shipping' && (
                <div className="bg-card p-6 rounded-xl shadow-card animate-fade-in">
                  <h2 className="font-display text-xl font-bold mb-6">Dados de Entrega</h2>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nome Completo</label>
                        <input
                          type="text"
                          name="name"
                          value={shippingData.name}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">E-mail</label>
                        <input
                          type="email"
                          name="email"
                          value={shippingData.email}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Telefone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={shippingData.phone}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                          placeholder="(11) 99000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CEP</label>
                        <input
                          type="text"
                          name="cep"
                          value={shippingData.cep}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                          placeholder="00000-000"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium mb-2">Endereço</label>
                        <input
                          type="text"
                          name="address"
                          value={shippingData.address}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                          placeholder="Rua, Avenida..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Número</label>
                        <input
                          type="text"
                          name="number"
                          value={shippingData.number}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Bairro</label>
                        <input
                          type="text"
                          name="neighborhood"
                          value={shippingData.neighborhood}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Cidade</label>
                        <input
                          type="text"
                          name="city"
                          value={shippingData.city}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Estado</label>
                        <input
                          type="text"
                          name="state"
                          value={shippingData.state}
                          onChange={handleShippingChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                          placeholder="SP"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <Button variant="outline" onClick={() => setStep('cart')}>
                      Voltar
                    </Button>
                    <Button className="flex-1" onClick={() => setStep('payment')}>
                      Continuar para Pagamento
                    </Button>
                  </div>
                </div>
              )}

              {step === 'payment' && (
                <div className="bg-card p-6 rounded-xl shadow-card animate-fade-in">
                  <h2 className="font-display text-xl font-bold mb-6">Pagamento</h2>
                  <div className="space-y-4">
                    <div className="p-4 border-2 border-primary rounded-lg flex items-center gap-4">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">Cartão de Crédito</p>
                        <p className="text-sm text-muted-foreground">Parcelamos em até 3x sem juros</p>
                      </div>
                    </div>
                    <div className="p-4 border border-border rounded-lg flex items-center gap-4 opacity-50">
                      <div className="w-6 h-6 bg-primary/20 rounded" />
                      <div>
                        <p className="font-medium">PIX</p>
                        <p className="text-sm text-muted-foreground">5% de desconto</p>
                      </div>
                    </div>
                    <div className="p-4 border border-border rounded-lg flex items-center gap-4 opacity-50">
                      <div className="w-6 h-6 bg-primary/20 rounded" />
                      <div>
                        <p className="font-medium">Boleto Bancário</p>
                        <p className="text-sm text-muted-foreground">Vencimento em 3 dias úteis</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <Button variant="outline" onClick={() => setStep('shipping')}>
                      Voltar
                    </Button>
                    <Button variant="premium" className="flex-1" onClick={handleFinishOrder}>
                      Finalizar Pedido
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-xl shadow-card sticky top-24">
                <h2 className="font-display text-lg font-bold mb-6">Resumo do Pedido</h2>
                
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.quantity}x {item.product.name}
                      </span>
                      <span>{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frete</span>
                    <span className={shippingCost === 0 ? 'text-secondary font-medium' : ''}>
                      {shippingCost === 0 ? 'Grátis' : formatPrice(shippingCost)}
                    </span>
                  </div>
                  {totalPrice < 150 && (
                    <p className="text-xs text-muted-foreground">
                      Faltam {formatPrice(150 - totalPrice)} para frete grátis!
                    </p>
                  )}
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(finalTotal)}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span>Compra 100% segura</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Truck className="w-4 h-4 text-secondary" />
                    <span>Entrega para todo o Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
