// ============================================
// TOQUE DE FADA — Interactive Features (Full)
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // CONFIG (for elementSdk compatibility)
  // ============================================
  const defaultConfig = {
    hero_title: 'Desperte sua magia interna',
    hero_subtitle: 'Joias em prata 925 e produtos de beleza que revelam o brilho que existe em você. Cada peça é única, assim como você.',
    promo_text: 'Frete grátis acima de R$199 • Parcele em até 6x sem juros'
  };

  let config = { ...defaultConfig };

  async function onConfigChange(cfg) {
    config = { ...defaultConfig, ...cfg };
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.textContent = config.hero_title;
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle;
    const promoText = document.getElementById('promo-text');
    if (promoText) promoText.textContent = config.promo_text;
  }

  function mapToCapabilities() {
    return { recolorables: [], borderables: [], fontEditable: undefined, fontSizeable: undefined };
  }

  function mapToEditPanelValues(cfg) {
    return new Map([
      ['hero_title', cfg.hero_title || defaultConfig.hero_title],
      ['hero_subtitle', cfg.hero_subtitle || defaultConfig.hero_subtitle],
      ['promo_text', cfg.promo_text || defaultConfig.promo_text]
    ]);
  }

  if (window.elementSdk) {
    window.elementSdk.init({ defaultConfig, onConfigChange, mapToCapabilities, mapToEditPanelValues });
  }

  // ============================================
  // PRODUCT DATABASE (defaults — overridden by Supabase)
  // ============================================
  const DEFAULT_PRODUCTS = {
    'anel-solitario': {
      id: 'anel-solitario',
      name: 'Anel Solitário',
      category: 'Prata 925',
      categorySlug: 'prata-925',
      price: 149.90,
      oldPrice: null,
      description: 'Anel solitário em prata 925 legítima com acabamento em rose gold. Design delicado e sofisticado, perfeito para uso diário ou ocasiões especiais. Pedra central em zircônia cristal com brilho incomparável.',
      rating: 4.9,
      reviews: 48,
      badge: 'NOVO',
      images: ['linear-gradient(135deg, #E8E0F0, #D4C6E8)'],
      reviewsList: [
        { author: 'Ana L.', rating: 5, text: 'Anel lindo! A prata é de excelente qualidade e o brilho é incrível.', date: '12/01/2026' },
        { author: 'Carla M.', rating: 5, text: 'Perfeito! Combina com tudo. Embalagem impecável!', date: '08/01/2026' },
        { author: 'Beatriz S.', rating: 4, text: 'Muito bonito, mas achei um pouco apertado. Recomendo pedir um número maior.', date: '03/01/2026' }
      ]
    },
    'brincos-rosa': {
      id: 'brincos-rosa',
      name: 'Brincos Rosa',
      category: 'Prata 925',
      categorySlug: 'prata-925',
      price: 89.90,
      oldPrice: null,
      description: 'Par de brincos em prata 925 com banho rose gold e pedras em quartzo rosa. Leves e confortáveis para uso prolongado. Fecho tipo tarraxa de silicone para maior segurança.',
      rating: 4.8,
      reviews: 32,
      badge: null,
      images: ['linear-gradient(135deg, var(--rosa-claro), var(--rosa-suave))'],
      reviewsList: [
        { author: 'Fernanda R.', rating: 5, text: 'Amei! São delicados e super leves. Uso todos os dias.', date: '10/01/2026' },
        { author: 'Raquel P.', rating: 5, text: 'Presente perfeito! Minha mãe adorou.', date: '05/01/2026' }
      ]
    },
    'batom-glow': {
      id: 'batom-glow',
      name: 'Batom Glow',
      category: 'Maquiagem',
      categorySlug: 'maquiagem',
      price: 55.90,
      oldPrice: 69.90,
      description: 'Batom líquido com acabamento glow e longa duração (até 12h). Fórmula hidratante com ácido hialurônico e vitamina E. Textura aveludada e alta pigmentação. Cruelty-free.',
      rating: 4.7,
      reviews: 67,
      badge: '-20%',
      images: ['linear-gradient(135deg, #FDE8EC, #F9CDD3)'],
      reviewsList: [
        { author: 'Juliana C.', rating: 5, text: 'Melhor batom que já usei! A textura é incrível e dura o dia todo.', date: '11/01/2026' },
        { author: 'Patricia A.', rating: 4, text: 'Cor linda, mas precisa reaplicar depois do almoço.', date: '07/01/2026' },
        { author: 'Luciana M.', rating: 5, text: 'Já comprei 3 cores! Não troco por nenhum outro.', date: '02/01/2026' }
      ]
    },
    'colar-cristal': {
      id: 'colar-cristal',
      name: 'Colar Cristal',
      category: 'Prata 925',
      categorySlug: 'prata-925',
      price: 199.90,
      oldPrice: null,
      description: 'Colar em prata 925 com pingente de cristal Swarovski. Corrente ajustável de 40 a 45cm. Ideal para looks elegantes e sofisticados. Acompanha certificado de autenticidade.',
      rating: 5.0,
      reviews: 91,
      badge: 'NOVO',
      images: ['linear-gradient(135deg, #E0F0E8, #C6E8D4)'],
      reviewsList: [
        { author: 'Marina S.', rating: 5, text: 'Peça maravilhosa! O cristal brilha muito. Super recomendo!', date: '14/01/2026' },
        { author: 'Amanda O.', rating: 5, text: 'Qualidade impecável. Veio com certificado e tudo.', date: '09/01/2026' }
      ]
    },
    'serum-glow': {
      id: 'serum-glow',
      name: 'Sérum Glow',
      category: 'Cosméticos',
      categorySlug: 'cosmeticos',
      price: 79.90,
      oldPrice: null,
      description: 'Sérum facial com vitamina C, niacinamida e ácido hialurônico. Ilumina, hidrata e uniformiza o tom da pele. Textura leve e rápida absorção. Vegano e cruelty-free.',
      rating: 4.9,
      reviews: 54,
      badge: null,
      images: ['linear-gradient(135deg, #E8F0E0, #D4E8C6)'],
      reviewsList: [
        { author: 'Isabela F.', rating: 5, text: 'Minha pele ficou incrível em 2 semanas! Sem oleosidade.', date: '13/01/2026' },
        { author: 'Tatiana L.', rating: 5, text: 'Produto maravilhoso! Super leve e absorve rápido.', date: '06/01/2026' }
      ]
    },
    'sombra-dourada': {
      id: 'sombra-dourada',
      name: 'Sombra Dourada',
      category: 'Maquiagem',
      categorySlug: 'maquiagem',
      price: 42.90,
      oldPrice: 49.90,
      description: 'Sombra compacta com pigmentação intensa e acabamento cintilante dourado. Longa duração (até 10h). Fórmula vegana com microfinas partículas de brilho.',
      rating: 4.6,
      reviews: 29,
      badge: '-15%',
      images: ['linear-gradient(135deg, #FEF3C7, #FDE68A)'],
      reviewsList: [
        { author: 'Vitória G.', rating: 5, text: 'Pigmentação maravilhosa! O brilho é super fino e elegante.', date: '10/01/2026' },
        { author: 'Débora R.', rating: 4, text: 'Linda cor, mas tem um pouco de fallout.', date: '04/01/2026' }
      ]
    },
    'pulseira-delicada': {
      id: 'pulseira-delicada',
      name: 'Pulseira Delicada',
      category: 'Prata 925',
      categorySlug: 'prata-925',
      price: 119.90,
      oldPrice: null,
      description: 'Pulseira em prata 925 com design minimalista e acabamento polido. Fecho ajustável com corrente extensora. Perfeita para empilhar com outras pulseiras.',
      rating: 4.9,
      reviews: 73,
      badge: null,
      images: ['linear-gradient(135deg, #F0E4F8, #E0D0F0)'],
      reviewsList: [
        { author: 'Renata D.', rating: 5, text: 'Delicada e elegante! Perfeita para o dia a dia.', date: '12/01/2026' },
        { author: 'Camila S.', rating: 5, text: 'Comprei para usar com meu anel e ficou lindo!', date: '08/01/2026' }
      ]
    },
    'hidratante-facial': {
      id: 'hidratante-facial',
      name: 'Hidratante Facial',
      category: 'Cosméticos',
      categorySlug: 'cosmeticos',
      price: 64.90,
      oldPrice: null,
      description: 'Hidratante facial com textura gel-creme, enriquecido com aloe vera e ceramidas. Hidratação 24h sem oleosidade. Ideal para todos os tipos de pele. Dermatologicamente testado.',
      rating: 4.9,
      reviews: 41,
      badge: 'NOVO',
      images: ['linear-gradient(135deg, #E0EFF8, #C6DFE8)'],
      reviewsList: [
        { author: 'Larissa B.', rating: 5, text: 'Melhor hidratante! Minha pele oleosa amou.', date: '11/01/2026' },
        { author: 'Gabriela T.', rating: 5, text: 'Super leve, absorve rápido. Uso todo dia!', date: '07/01/2026' }
      ]
    },
    'kit-fada-completa': {
      id: 'kit-fada-completa',
      name: 'Kit Fada Completa',
      category: 'Kit Especial',
      categorySlug: 'prata-925',
      price: 299.90,
      oldPrice: 399.90,
      description: 'Kit exclusivo com Brinco + Anel + Colar em Prata 925 com acabamento rose gold. O combo perfeito para brilhar em qualquer ocasião. Embalagem premium com caixa de veludo.',
      rating: 5.0,
      reviews: 120,
      badge: '-25%',
      images: ['linear-gradient(135deg, var(--rosa-suave), var(--rose-gold-light))'],
      reviewsList: [
        { author: 'Amanda O.', rating: 5, text: 'O Kit Fada Completa é TUDO! As peças combinam perfeitamente.', date: '14/01/2026' },
        { author: 'Jessica M.', rating: 5, text: 'Presente perfeito! A embalagem é um charme.', date: '10/01/2026' }
      ]
    }
  };

  // Search products array
  let PRODUCTS = { ...DEFAULT_PRODUCTS };

  function buildSearchProducts() {
    return Object.values(PRODUCTS).map(p => ({
      name: p.name,
      category: p.category,
      price: `R$ ${p.price.toFixed(2).replace('.', ',')}`,
      id: p.id
    }));
  }

  let searchProducts = buildSearchProducts();

  // ============================================
  // SVG ICONS FOR DEFAULT PRODUCTS
  // ============================================
  const PRODUCT_SVGS = {
    'anel-solitario': '<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="55" r="12" stroke="currentColor" stroke-width="3" fill="none"/><path d="M40 35L46 48L40 52L34 48L40 35Z" fill="currentColor"/></svg>',
    'brincos-rosa': '<svg viewBox="0 0 80 80" fill="none"><circle cx="30" cy="20" r="5" stroke="currentColor" stroke-width="2"/><line x1="30" y1="25" x2="30" y2="45" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="48" r="3" fill="currentColor" opacity="0.5"/><circle cx="50" cy="20" r="5" stroke="currentColor" stroke-width="2"/><line x1="50" y1="25" x2="50" y2="45" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="48" r="3" fill="currentColor" opacity="0.5"/></svg>',
    'batom-glow': '<svg viewBox="0 0 80 80" fill="none"><rect x="30" y="20" width="20" height="40" rx="4" fill="currentColor" opacity="0.8"/><rect x="33" y="16" width="14" height="8" rx="3" fill="currentColor"/></svg>',
    'colar-cristal': '<svg viewBox="0 0 80 80" fill="none"><path d="M20 25 Q40 35 60 25" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M40 35L46 50L40 56L34 50L40 35Z" fill="currentColor" opacity="0.8"/><circle cx="40" cy="56" r="3" fill="currentColor" opacity="0.4"/></svg>',
    'serum-glow': '<svg viewBox="0 0 80 80" fill="none"><rect x="32" y="25" width="16" height="32" rx="8" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="40" cy="36" r="3" fill="currentColor" opacity="0.6"/><line x1="40" y1="18" x2="40" y2="25" stroke="currentColor" stroke-width="2"/></svg>',
    'sombra-dourada': '<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="16" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.4"/><circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.7"/></svg>',
    'pulseira-delicada': '<svg viewBox="0 0 80 80" fill="none"><ellipse cx="40" cy="40" rx="20" ry="14" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="40" cy="26" r="3" fill="currentColor" opacity="0.6"/></svg>',
    'hidratante-facial': '<svg viewBox="0 0 80 80" fill="none"><rect x="28" y="20" width="24" height="36" rx="6" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M34 32h12M34 38h12" stroke="currentColor" stroke-width="1.5" opacity="0.4"/></svg>',
    'kit-fada-completa': '<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="55" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M25 20 Q40 30 55 20" stroke="currentColor" stroke-width="2" fill="none"/><rect x="34" y="35" width="12" height="16" rx="3" stroke="currentColor" stroke-width="2" fill="none"/></svg>'
  };
  const DEFAULT_SVG = '<svg viewBox="0 0 80 80" fill="none"><rect x="25" y="25" width="30" height="30" rx="6" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="40" cy="40" r="4" fill="currentColor" opacity="0.4"/></svg>';

  // Category color lookup (populated from DB)
  let CATEGORY_COLORS = {};

  // ============================================
  // DYNAMIC PRODUCT RENDERING
  // ============================================
  function convertDbProduct(p) {
    return {
      id: p.id,
      name: p.name,
      category: p.category,
      categorySlug: p.category_slug,
      price: parseFloat(p.price),
      oldPrice: p.old_price ? parseFloat(p.old_price) : null,
      description: p.description || '',
      rating: parseFloat(p.rating) || 5.0,
      reviews: p.reviews_count || 0,
      badge: p.badge || null,
      images: p.images || [],
      imageUrl: p.image_url || null,
      imageBg: p.image_bg || null,
      reviewsList: p.reviews_list || []
    };
  }

  function generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return '★'.repeat(full) + (half ? '<span class="star-half">★</span>' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
  }

  function renderProductCard(p) {
    const bg = p.imageBg || p.images[0] || 'linear-gradient(135deg, #f0e6f6, #d4c5e0)';
    const imgContent = p.imageUrl
      ? `<img src="${p.imageUrl}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
      : (PRODUCT_SVGS[p.id] || DEFAULT_SVG);
    const badgeClass = p.badge === 'NOVO' ? 'product-badge--new' : 'product-badge--sale';
    const badgeHtml = p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : '';
    const oldPriceHtml = p.oldPrice ? `<span class="product-price-old">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : '';
    const priceHtml = `<span class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>`;
    const starsHtml = generateStars(p.rating);

    return `<div class="product-card reveal" data-category="${p.categorySlug}" data-price="${p.price}" data-name="${p.name}" data-id="${p.id}">
      <div class="product-image" style="background: ${bg};">
        ${badgeHtml}
        <button class="product-wishlist" aria-label="Adicionar aos favoritos" data-product="${p.name}">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
        <div class="product-image-inner" role="button" tabindex="0" aria-label="Ver detalhes de ${p.name}">
          ${imgContent}
        </div>
      </div>
      <div class="product-info" role="button" tabindex="0" aria-label="Ver detalhes de ${p.name}">
        <p class="product-category-label"${CATEGORY_COLORS[p.categorySlug] ? ` style="color:${CATEGORY_COLORS[p.categorySlug]}"` : ''}>${p.category}</p>
        <h4 class="product-name">${p.name}</h4>
        <div class="product-rating">
          <div class="mini-stars">${starsHtml}</div>
          <span>(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div>${oldPriceHtml}${priceHtml}</div>
          <button class="product-add-btn" aria-label="Adicionar ao carrinho" data-product="${p.name}" data-price="${p.price}" data-product-id="${p.id}">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          </button>
        </div>
      </div>
    </div>`;
  }

  function renderProductsGrid() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    const productList = Object.values(PRODUCTS);
    grid.innerHTML = productList.map(p => renderProductCard(p)).join('');

    // Re-observe for reveal animation
    grid.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
      revealObserver.observe(el);
    });

    // Sync wishlist buttons (only after wishlist system is initialized)
    try { if (typeof syncWishlistButtons === 'function') syncWishlistButtons(); } catch(e) {}

    // Also render kits carousel
    renderKitsCarousel();
  }

  // ---- KITS CAROUSEL ----
  function renderKitsCarousel() {
    const track = document.getElementById('kits-carousel-track');
    const section = document.getElementById('kits-carousel-section');
    if (!track) return;

    const kits = Object.values(PRODUCTS).filter(p => p.categorySlug === 'kits');
    if (!kits.length) {
      if (section) section.style.display = 'none';
      return;
    }
    if (section) section.style.display = '';

    // Duplicate items for infinite scroll effect
    const items = [...kits, ...kits, ...kits];
    track.innerHTML = items.map(p => {
      const bg = p.imageBg || p.images?.[0] || 'linear-gradient(135deg, #f0e6f6, #d4c5e0)';
      const imgContent = p.imageUrl
        ? `<img src="${p.imageUrl}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
        : (PRODUCT_SVGS[p.id] || DEFAULT_SVG);
      const badgeHtml = p.badge ? `<span class="product-badge ${p.badge === 'NOVO' ? 'product-badge--new' : 'product-badge--sale'}">${p.badge}</span>` : '';
      const oldPriceHtml = p.oldPrice ? `<span class="product-price-old">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : '';
      const priceHtml = `<span class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>`;

      return `<div class="kit-carousel-card" data-id="${p.id}">
        <div class="kit-carousel-img" style="background:${bg};">
          ${badgeHtml}
          <div class="kit-carousel-img-inner">${imgContent}</div>
        </div>
        <div class="kit-carousel-info">
          <h4>${p.name}</h4>
          <p class="kit-carousel-desc">${p.description ? p.description.slice(0, 80) + (p.description.length > 80 ? '...' : '') : ''}</p>
          <div class="kit-carousel-prices">${oldPriceHtml} ${priceHtml}</div>
          <button class="kit-carousel-btn" data-product="${p.name}" data-price="${p.price}" data-product-id="${p.id}" onclick="addToCart(this)">Adicionar ao Carrinho</button>
        </div>
      </div>`;
    }).join('');

    // Click on card to open modal
    track.querySelectorAll('.kit-carousel-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.kit-carousel-btn')) return;
        const id = card.dataset.id;
        if (id && typeof window.openProductModal === 'function') window.openProductModal(id);
      });
    });

    // Start auto-scroll
    initKitsAutoScroll();
  }

  let kitsAnimFrame = null;
  let kitsScrollPaused = false;
  let kitsOffset = 0;

  function initKitsAutoScroll() {
    const track = document.getElementById('kits-carousel-track');
    if (!track || !track.children.length) return;
    if (kitsAnimFrame) cancelAnimationFrame(kitsAnimFrame);

    // Measure one set width (items are tripled)
    const totalWidth = track.scrollWidth;
    const oneSetWidth = totalWidth / 3;
    kitsOffset = 0;

    function step() {
      if (!kitsScrollPaused) {
        kitsOffset += 0.8;
        if (kitsOffset >= oneSetWidth) kitsOffset -= oneSetWidth;
      }
      track.style.transform = `translateX(-${kitsOffset}px)`;
      kitsAnimFrame = requestAnimationFrame(step);
    }
    kitsAnimFrame = requestAnimationFrame(step);

    track.addEventListener('mouseenter', () => { kitsScrollPaused = true; });
    track.addEventListener('mouseleave', () => { kitsScrollPaused = false; });
    track.addEventListener('touchstart', () => { kitsScrollPaused = true; }, { passive: true });
    track.addEventListener('touchend', () => { setTimeout(() => { kitsScrollPaused = false; }, 2000); });
  }

  // Carousel nav buttons
  document.getElementById('kits-carousel-prev')?.addEventListener('click', () => {
    const track = document.getElementById('kits-carousel-track');
    if (!track) return;
    const oneSetWidth = track.scrollWidth / 3;
    kitsOffset -= 300;
    if (kitsOffset < 0) kitsOffset += oneSetWidth;
  });
  document.getElementById('kits-carousel-next')?.addEventListener('click', () => {
    const track = document.getElementById('kits-carousel-track');
    if (!track) return;
    const oneSetWidth = track.scrollWidth / 3;
    kitsOffset += 300;
    if (kitsOffset >= oneSetWidth) kitsOffset -= oneSetWidth;
  });

  // ---- OFFERS CAROUSEL ----
  function renderOffersCarousel(offers) {
    const track = document.getElementById('offers-carousel-track');
    if (!track || !offers.length) return;

    // Build carousel cards - triplicate for infinite scroll (5x for single item to fill width)
    const repeatCount = offers.length === 1 ? 5 : 3;
    let items = [];
    for (let r = 0; r < repeatCount; r++) items = items.concat(offers);
    track.dataset.repeatCount = repeatCount;
    track.innerHTML = items.map((o, i) => {
      const savings = (parseFloat(o.old_price) || 0) - (parseFloat(o.price) || 0);
      const savingsHtml = savings > 0 ? `<span class="offer-card-badge">ECONOMIZE R$ ${savings.toFixed(0)}</span>` : '';
      const oldPriceHtml = o.old_price ? `<span class="offer-card-old-price">De R$ ${parseFloat(o.old_price).toFixed(2).replace('.', ',')}</span>` : '';
      const priceHtml = `<span class="offer-card-price">R$ ${parseFloat(o.price).toFixed(2).replace('.', ',')}</span>`;

      // Try to get image: offer's own image_url, or linked product image
      let imgSrc = '';
      if (o.image_url) {
        imgSrc = o.image_url;
      } else if (o.product_id && PRODUCTS[o.product_id]) {
        const prod = PRODUCTS[o.product_id];
        if (prod.imageUrl) imgSrc = prod.imageUrl;
      }
      const imgHtml = imgSrc ? `<div class="offer-card-img"><img src="${imgSrc}" alt="${o.name}" loading="lazy"></div>` : '';

      return `<div class="offer-carousel-card" data-offer-idx="${i}" ${o.product_id ? `data-product-id="${o.product_id}"` : ''}>
        ${imgHtml}
        <div class="offer-card-content">
          <p class="offer-card-label">OFERTA ESPECIAL</p>
          <h4 class="offer-card-title">${o.name || 'Oferta'}</h4>
          <p class="offer-card-desc">${o.description || ''}</p>
          <div class="offer-card-prices">${oldPriceHtml} ${priceHtml}</div>
          ${savingsHtml}
          <button class="offer-card-btn" data-product="${o.name}" data-price="${o.price}" ${o.product_id ? `data-product-id="${o.product_id}"` : ''} onclick="addToCart(this)">
            COMPRAR AGORA
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </button>
        </div>
      </div>`;
    }).join('');

    // Click on card to open product modal
    track.querySelectorAll('.offer-carousel-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.offer-card-btn')) return;
        const pid = card.dataset.productId;
        if (pid && typeof window.openProductModal === 'function') window.openProductModal(pid);
      });
    });

    initOffersAutoScroll();
  }

  let offersAnimFrame = null;
  let offersScrollPaused = false;
  let offersOffset = 0;

  function initOffersAutoScroll() {
    const track = document.getElementById('offers-carousel-track');
    if (!track || !track.children.length) return;
    if (offersAnimFrame) cancelAnimationFrame(offersAnimFrame);

    const repeatCount = parseInt(track.dataset.repeatCount) || 3;
    const totalWidth = track.scrollWidth;
    const oneSetWidth = totalWidth / repeatCount;
    offersOffset = 0;

    function step() {
      if (!offersScrollPaused) {
        offersOffset += 0.8;
        if (offersOffset >= oneSetWidth) offersOffset -= oneSetWidth;
      }
      track.style.transform = `translateX(-${offersOffset}px)`;
      offersAnimFrame = requestAnimationFrame(step);
    }
    offersAnimFrame = requestAnimationFrame(step);

    track.addEventListener('mouseenter', () => { offersScrollPaused = true; });
    track.addEventListener('mouseleave', () => { offersScrollPaused = false; });
    track.addEventListener('touchstart', () => { offersScrollPaused = true; }, { passive: true });
    track.addEventListener('touchend', () => { setTimeout(() => { offersScrollPaused = false; }, 2000); });
  }

  // Offers carousel nav buttons
  document.getElementById('offers-carousel-prev')?.addEventListener('click', () => {
    const track = document.getElementById('offers-carousel-track');
    if (!track) return;
    const repeatCount = parseInt(track.dataset.repeatCount) || 3;
    const oneSetWidth = track.scrollWidth / repeatCount;
    offersOffset -= 350;
    if (offersOffset < 0) offersOffset += oneSetWidth;
  });
  document.getElementById('offers-carousel-next')?.addEventListener('click', () => {
    const track = document.getElementById('offers-carousel-track');
    if (!track) return;
    const repeatCount = parseInt(track.dataset.repeatCount) || 3;
    const oneSetWidth = track.scrollWidth / repeatCount;
    offersOffset += 350;
    if (offersOffset >= oneSetWidth) offersOffset -= oneSetWidth;
  });

  // Event delegation for product grid
  function setupProductGridEvents() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.addEventListener('click', (e) => {
      // Wishlist button
      const wishBtn = e.target.closest('.product-wishlist');
      if (wishBtn) {
        e.stopPropagation();
        toggleWishlist(wishBtn.dataset.product);
        return;
      }
      // Add to cart button
      const addBtn = e.target.closest('.product-add-btn');
      if (addBtn) {
        e.stopPropagation();
        window.addToCart(addBtn);
        return;
      }
      // Product image or info click → open modal
      const imgBtn = e.target.closest('.product-image-inner[role="button"]');
      const infoBtn = e.target.closest('.product-info[role="button"]');
      if (imgBtn || infoBtn) {
        const card = (imgBtn || infoBtn).closest('.product-card');
        if (card?.dataset.id) window.openProductModal(card.dataset.id);
        return;
      }
    });

    grid.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const el = e.target.closest('.product-image-inner[role="button"], .product-info[role="button"]');
        if (el) {
          const card = el.closest('.product-card');
          if (card?.dataset.id) window.openProductModal(card.dataset.id);
        }
      }
    });
  }

  // Load products from Supabase with localStorage cache for instant loading
  function loadCachedProducts() {
    try {
      const cached = localStorage.getItem('toque_products_cache');
      if (cached) {
        const data = JSON.parse(cached);
        // Cache valid for 10 minutes as stale fallback, but we always refresh
        if (data && data.products && data.products.length > 0) {
          PRODUCTS = {};
          data.products.forEach(p => {
            PRODUCTS[p.id] = p;
          });
          searchProducts = buildSearchProducts();
          renderProductsGrid();
          return true;
        }
      }
    } catch (e) { /* ignore cache errors */ }
    return false;
  }

  async function loadProductsFromDB() {
    const hadCache = loadCachedProducts();
    try {
      if (typeof supabase !== 'undefined') {
        const dbProducts = await supabase.getProducts();
        if (dbProducts && Array.isArray(dbProducts) && dbProducts.length > 0) {
          PRODUCTS = {};
          const converted = [];
          dbProducts.filter(p => p.active !== false).forEach(p => {
            const cp = convertDbProduct(p);
            PRODUCTS[p.id] = cp;
            converted.push(cp);
          });
          searchProducts = buildSearchProducts();
          // Save to cache for instant loading next visit
          try {
            localStorage.setItem('toque_products_cache', JSON.stringify({
              products: converted,
              timestamp: Date.now()
            }));
          } catch (e) { /* storage full, ignore */ }
        }
      }
    } catch (e) {
      console.log('Using default products:', e.message);
    }
    renderProductsGrid();
  }

  // Load site settings from Supabase with localStorage cache
  function applySiteSettings(settings) {
    // Apply contact info
    const contact = settings.contact;
    if (contact) {
      const whatsDisplay = document.getElementById('contact-whatsapp-display');
      const whatsLink = document.getElementById('contact-whatsapp-link');
      const emailDisplay = document.getElementById('contact-email-display');
      const hoursDisplay = document.getElementById('contact-hours-display');
      if (whatsDisplay && contact.whatsapp_display) whatsDisplay.textContent = contact.whatsapp_display;
      if (whatsLink && contact.whatsapp) whatsLink.href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Ola! Vim pelo site Toque de Fada e gostaria de mais informacoes.')}`;
      if (emailDisplay && contact.email) emailDisplay.textContent = contact.email;
      if (hoursDisplay && contact.hours) hoursDisplay.textContent = contact.hours;
      window._whatsappNumber = contact.whatsapp || '5511999999999';
      const floatBtn = document.getElementById('whatsapp-float-btn');
      if (floatBtn && contact.whatsapp) {
        floatBtn.href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Ola! Vim pelo site Toque de Fada e gostaria de mais informacoes.')}`;
      }
    }

    // Apply hero image
    const heroImage = settings.hero_image;
    if (heroImage && heroImage.url) {
      const heroImg = document.getElementById('hero-image');
      const heroPlaceholder = document.getElementById('hero-image-placeholder');
      if (heroImg) {
        heroImg.src = heroImage.url;
        heroImg.style.display = '';
      }
      if (heroPlaceholder) heroPlaceholder.style.display = 'none';
    } else {
      const heroImg = document.getElementById('hero-image');
      const heroPlaceholder = document.getElementById('hero-image-placeholder');
      if (heroImg) { heroImg.style.display = 'none'; heroImg.src = ''; }
      if (heroPlaceholder) heroPlaceholder.style.display = '';
    }

    // Apply special offers carousel
    const allOffers = settings.offers;
    let activeOffers = [];
    if (Array.isArray(allOffers)) {
      activeOffers = allOffers.filter(o => o.active !== false);
    } else {
      // Fallback to old single special_offer format
      const offer = settings.special_offer;
      if (offer && offer.active) activeOffers = [offer];
    }
    const offerSection = document.getElementById('ofertas');
    if (activeOffers.length > 0) {
      if (offerSection) offerSection.style.display = '';
      renderOffersCarousel(activeOffers);
    } else {
      if (offerSection) offerSection.style.display = 'none';
    }
  }

  async function loadSiteSettings() {
    // Load from cache first for instant display
    try {
      const cached = localStorage.getItem('toque_settings_cache');
      if (cached) {
        const data = JSON.parse(cached);
        if (data && data.settings) {
          applySiteSettings(data.settings);
        }
      }
    } catch (e) { /* ignore */ }

    // Then refresh from Supabase
    try {
      if (typeof supabase === 'undefined') return;
      const rows = await supabase.getSiteSettings();
      if (!rows || !rows.length) return;

      const settings = {};
      rows.forEach(r => {
        settings[r.key] = typeof r.value === 'string' ? JSON.parse(r.value) : r.value;
      });

      applySiteSettings(settings);

      // Save to cache
      try {
        localStorage.setItem('toque_settings_cache', JSON.stringify({
          settings: settings,
          timestamp: Date.now()
        }));
      } catch (e) { /* storage full */ }

    } catch (e) {
      console.log('Site settings load error:', e.message);
    }
  }

  // Load categories for storefront filters
  async function loadSiteCategories() {
    // Load from cache first
    try {
      const cached = localStorage.getItem('toque_categories_cache');
      if (cached) {
        const data = JSON.parse(cached);
        if (data && data.categories) {
          applySiteCategories(data.categories);
        }
      }
    } catch (e) { /* ignore */ }

    // Refresh from DB
    try {
      if (typeof supabase === 'undefined') return;
      const cats = await supabase.getCategories();
      if (cats && Array.isArray(cats)) {
        applySiteCategories(cats.filter(c => c.active !== false));
        try {
          localStorage.setItem('toque_categories_cache', JSON.stringify({
            categories: cats.filter(c => c.active !== false),
            timestamp: Date.now()
          }));
        } catch (e) { /* storage full */ }
      }
    } catch (e) {
      console.log('Categories load error:', e.message);
    }
  }

  function applySiteCategories(cats) {
    if (!cats || !cats.length) return;
    // Update color lookup
    CATEGORY_COLORS = {};
    cats.forEach(c => {
      if (c.text_color) CATEGORY_COLORS[c.slug] = c.text_color;
    });

    // Rebuild filter buttons
    const container = document.getElementById('product-filters');
    if (!container) return;
    const priceWrap = container.querySelector('.filter-price-wrap');
    container.querySelectorAll('.filter-btn').forEach(b => b.remove());

    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.dataset.filter = 'all';
    allBtn.textContent = 'Todos';
    container.insertBefore(allBtn, priceWrap);

    cats.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.dataset.filter = c.slug;
      btn.textContent = c.name;
      if (c.text_color) btn.style.setProperty('--cat-color', c.text_color);
      container.insertBefore(btn, priceWrap);
    });

    // Re-bind filter events
    container.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        container.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
        applyFilters();
      });
    });

    // Re-render product cards to apply category colors
    renderProductsGrid();
  }

  // ============================================
  // SCROLL REVEAL (must be before product grid render)
  // ============================================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Render cached/defaults immediately, then refresh from DB in parallel
  renderProductsGrid();
  setupProductGridEvents();
  Promise.all([loadProductsFromDB(), loadSiteSettings(), loadSiteCategories()]);

  // ============================================
  // SUPABASE CART INITIALIZATION
  // ============================================
  const cartBadge = document.getElementById('cart-count');
  let appliedCoupon = null;

  async function initializeCart() {
    // Always start from localStorage (Supabase sync is secondary)
    loadCartFromLocalStorage();
    updateCartBadge();
    renderCartDrawer();
  }

  function loadCartFromLocalStorage() {
    const stored = localStorage.getItem('toque_cart');
    if (stored) {
      window.cartItems = JSON.parse(stored);
    } else {
      window.cartItems = [];
    }
  }

  function saveCartToLocalStorage() {
    localStorage.setItem('toque_cart', JSON.stringify(window.cartItems || []));
  }

  initializeCart();

  // (Scroll reveal observer moved above product grid render)

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // ============================================
  // ACTIVE NAV LINK ON SCROLL
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function updateActiveNav() {
    const scrollY = window.scrollY;
    const headerOffset = 120;
    let currentId = '';

    sections.forEach(section => {
      const top = section.offsetTop - headerOffset;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        currentId = section.id;
      }
    });

    // If near the bottom of the page, activate the last section
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) currentId = lastSection.id;
    }

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // ============================================
  // HERO PARTICLES
  // ============================================
  const particlesContainer = document.getElementById('hero-particles');
  
  if (particlesContainer) {
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 4 + 's';
      particle.style.animationDuration = (3 + Math.random() * 3) + 's';
      particle.style.width = (4 + Math.random() * 6) + 'px';
      particle.style.height = particle.style.width;
      particle.style.opacity = 0.3 + Math.random() * 0.5;
      particlesContainer.appendChild(particle);
    }
  }

  // ============================================
  // SEARCH
  // ============================================
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const closeSearchBtn = document.getElementById('close-search');
  const searchResults = document.getElementById('search-results');

  function openSearch() {
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput.focus(), 100);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    searchOverlay.classList.remove('open');
    searchInput.value = '';
    searchResults.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);
  
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      if (searchOverlay && searchOverlay.classList.contains('open')) closeSearch();
      if (document.getElementById('product-modal').classList.contains('open')) closeProductModal();
      if (document.getElementById('cart-drawer').classList.contains('open')) closeCartDrawer();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      
      if (term.length === 0) {
        searchResults.innerHTML = '';
        return;
      }

      const filtered = searchProducts.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );

      if (filtered.length === 0) {
        searchResults.innerHTML = `
          <div class="search-empty">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <p>Nenhum produto encontrado para "<strong>${term}</strong>"</p>
          </div>
        `;
        return;
      }

      searchResults.innerHTML = filtered.map(p => `
        <div class="search-result-item" data-product-id="${p.id}" role="button" tabindex="0">
          <div class="search-result-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <div class="search-result-info">
            <h4>${p.name}</h4>
            <div class="search-meta">
              <span class="search-category">${p.category}</span>
              <span class="search-price">${p.price}</span>
            </div>
          </div>
        </div>
      `).join('');

      // Add click handlers to search results
      searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const pid = item.dataset.productId;
          closeSearch();
          window.openProductModal(pid);
        });
      });
    });
  }

  window.closeSearch = closeSearch;

  // ============================================
  // MOBILE MENU
  // ============================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
      
      const svg = mobileMenuBtn.querySelector('svg');
      if (!isOpen) {
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
      } else {
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const svg = mobileMenuBtn.querySelector('svg');
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      });
    });
  }

  // ============================================
  // PRODUCT DETAIL MODAL
  // ============================================
  const productModal = document.getElementById('product-modal');
  const productModalOverlay = document.getElementById('product-modal-overlay');
  const productModalClose = document.getElementById('product-modal-close');
  let currentProduct = null;
  let modalQty = 1;
  let gallerySlides = [];
  let galleryIndex = 0;

  function isImageUrl(str) {
    return str && (str.startsWith('http') || str.startsWith('data:') || str.startsWith('/'));
  }

  function setGallerySlide(index) {
    const galleryMain = document.getElementById('gallery-main');
    if (!gallerySlides.length) return;
    galleryIndex = (index + gallerySlides.length) % gallerySlides.length;
    const slide = gallerySlides[galleryIndex];
    // Clear previous content (keep zoom hint)
    const zoomHint = galleryMain.querySelector('.gallery-zoom-hint');
    galleryMain.innerHTML = '';
    if (isImageUrl(slide)) {
      galleryMain.style.background = currentProduct?.imageBg || 'linear-gradient(135deg, #f0e6f6, #d4c5e0)';
      const img = document.createElement('img');
      img.src = slide;
      img.alt = currentProduct?.name || 'Produto';
      img.style.cssText = 'max-width:90%;max-height:90%;object-fit:contain;border-radius:8px;';
      galleryMain.appendChild(img);
    } else {
      galleryMain.style.background = slide;
      // For gradient-only slides, render SVG if available
      if (currentProduct && PRODUCT_SVGS[currentProduct.id]) {
        const svgDiv = document.createElement('div');
        svgDiv.innerHTML = PRODUCT_SVGS[currentProduct.id];
        svgDiv.style.cssText = 'width:60%;height:60%;display:flex;align-items:center;justify-content:center;';
        galleryMain.appendChild(svgDiv);
      }
    }
    if (zoomHint) galleryMain.appendChild(zoomHint);
    // Update thumbs
    document.querySelectorAll('#gallery-thumbs .gallery-thumb').forEach((th, i) => th.classList.toggle('active', i === galleryIndex));
    // Show/hide nav buttons
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    if (prevBtn) prevBtn.style.display = gallerySlides.length > 1 ? '' : 'none';
    if (nextBtn) nextBtn.style.display = gallerySlides.length > 1 ? '' : 'none';
  }

  function buildGalleryThumbs() {
    const thumbsEl = document.getElementById('gallery-thumbs');
    if (!thumbsEl) return;
    if (gallerySlides.length <= 1) { thumbsEl.innerHTML = ''; return; }
    thumbsEl.innerHTML = gallerySlides.map((slide, i) => {
      if (isImageUrl(slide)) {
        return `<button class="gallery-thumb${i === 0 ? ' active' : ''}" data-slide="${i}"><img src="${slide}" alt="Miniatura ${i+1}"></button>`;
      } else {
        return `<button class="gallery-thumb${i === 0 ? ' active' : ''}" data-slide="${i}" style="background:${slide}"></button>`;
      }
    }).join('');
  }

  // Gallery navigation
  document.getElementById('gallery-prev')?.addEventListener('click', () => setGallerySlide(galleryIndex - 1));
  document.getElementById('gallery-next')?.addEventListener('click', () => setGallerySlide(galleryIndex + 1));
  document.getElementById('gallery-thumbs')?.addEventListener('click', (e) => {
    const thumb = e.target.closest('[data-slide]');
    if (thumb) setGallerySlide(parseInt(thumb.dataset.slide));
  });

  window.openProductModal = function(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;
    currentProduct = product;
    modalQty = 1;

    document.getElementById('modal-category').textContent = product.category;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('qty-value').textContent = '1';

    // Stars
    const starsContainer = document.getElementById('modal-stars');
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    starsContainer.innerHTML = '★'.repeat(fullStars) + (halfStar ? '<span class="star-half">★</span>' : '') + '☆'.repeat(5 - fullStars - (halfStar ? 1 : 0));
    document.getElementById('modal-rating-text').textContent = `${product.rating} (${product.reviews} avaliações)`;

    // Prices
    const pricesEl = document.getElementById('modal-prices');
    if (product.oldPrice) {
      pricesEl.innerHTML = `<span class="modal-old-price">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span><span class="modal-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>`;
    } else {
      pricesEl.innerHTML = `<span class="modal-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>`;
    }

    document.getElementById('modal-desc').textContent = product.description;

    // Build gallery slides: main image first, then gallery images
    gallerySlides = [];
    if (product.imageUrl) {
      gallerySlides.push(product.imageUrl);
    }
    if (product.images && product.images.length > 0) {
      product.images.forEach(img => {
        if (img && !gallerySlides.includes(img)) gallerySlides.push(img);
      });
    }
    // Fallback: if no slides at all, use imageBg or default gradient
    if (!gallerySlides.length) {
      gallerySlides.push(product.imageBg || 'linear-gradient(135deg, #f0e6f6, #d4c5e0)');
    }
    galleryIndex = 0;
    buildGalleryThumbs();
    setGallerySlide(0);

    // Reviews
    const reviewsEl = document.getElementById('modal-reviews');
    if (product.reviewsList && product.reviewsList.length > 0) {
      reviewsEl.innerHTML = product.reviewsList.map(r => `
        <div class="review-item">
          <div class="review-header">
            <div class="review-avatar">${r.author.charAt(0)}</div>
            <div>
              <p class="review-author">${r.author}</p>
              <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
            </div>
            <span class="review-date">${r.date}</span>
          </div>
          <p class="review-text">${r.text}</p>
        </div>
      `).join('');
    } else {
      reviewsEl.innerHTML = '<p class="no-reviews">Nenhuma avaliação ainda.</p>';
    }

    // WhatsApp link
    const whatsappMsg = encodeURIComponent(`Ola! Vim pelo site e tenho interesse no produto *${product.name}* (R$ ${product.price.toFixed(2).replace('.', ',')}). Pode me dar mais informacoes?`);
    document.getElementById('modal-whatsapp').href = `https://wa.me/${window._whatsappNumber || '5511999999999'}?text=${whatsappMsg}`;

    // Reset coupon
    document.getElementById('coupon-input').value = '';
    document.getElementById('coupon-msg').textContent = '';
    document.getElementById('coupon-msg').className = 'coupon-msg';

    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeProductModal() {
    productModal.classList.remove('open');
    document.body.style.overflow = '';
    currentProduct = null;
  }

  if (productModalClose) productModalClose.addEventListener('click', closeProductModal);
  if (productModalOverlay) productModalOverlay.addEventListener('click', closeProductModal);

  // Qty controls
  document.getElementById('qty-minus')?.addEventListener('click', () => {
    if (modalQty > 1) {
      modalQty--;
      document.getElementById('qty-value').textContent = modalQty;
    }
  });

  document.getElementById('qty-plus')?.addEventListener('click', () => {
    if (modalQty < 10) {
      modalQty++;
      document.getElementById('qty-value').textContent = modalQty;
    }
  });

  // Modal add to cart
  document.getElementById('modal-add-cart')?.addEventListener('click', () => {
    if (!currentProduct) return;
    for (let i = 0; i < modalQty; i++) {
      const fakeBtn = { dataset: { product: currentProduct.name, price: currentProduct.price.toString(), productId: currentProduct.id }, style: {} };
      window.addToCart(fakeBtn);
    }
    closeProductModal();
  });

  // Modal add to wishlist
  document.getElementById('modal-add-wishlist')?.addEventListener('click', async () => {
    if (!currentProduct) return;
    await toggleWishlist(currentProduct.name);
  });

  // Product image click → open modal (handled by grid delegation)
  // Category cards → filter products on click
  document.querySelectorAll('.category-card[data-filter]').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.dataset.filter;
      document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setActiveFilter(filter);
      }, 500);
    });
  });

  // ============================================
  // PRODUCT FILTERS
  // ============================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const priceFilter = document.getElementById('price-filter');
  const priceFilterValue = document.getElementById('price-filter-value');
  const productsGrid = document.getElementById('products-grid');
  const noResults = document.getElementById('products-no-results');
  let activeFilter = 'all';

  function setActiveFilter(filter) {
    activeFilter = filter;
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    applyFilters();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setActiveFilter(btn.dataset.filter);
    });
  });

  if (priceFilter) {
    priceFilter.addEventListener('input', () => {
      priceFilterValue.textContent = priceFilter.value;
      applyFilters();
    });
  }

  function applyFilters() {
    const maxPrice = priceFilter ? parseFloat(priceFilter.value) : 500;
    const cards = productsGrid.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const category = card.dataset.category;
      const price = parseFloat(card.dataset.price);
      const matchCategory = activeFilter === 'all' || category === activeFilter;
      const matchPrice = price <= maxPrice;

      if (matchCategory && matchPrice) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  // ============================================
  // TOAST NOTIFICATION (site-wide)
  // ============================================
  function showToast(msg, duration = 3500) {
    let container = document.getElementById('site-toast');
    if (!container) {
      container = document.createElement('div');
      container.id = 'site-toast';
      container.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:99999;pointer-events:none;';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.style.cssText = 'background:#333;color:#fff;padding:12px 24px;border-radius:8px;font-size:14px;margin-top:8px;opacity:0;transition:opacity .3s;pointer-events:auto;text-align:center;max-width:90vw;';
    toast.textContent = msg;
    container.appendChild(toast);
    requestAnimationFrame(() => { toast.style.opacity = '1'; });
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ============================================
  // CART DRAWER
  // ============================================
  const cartDrawer = document.getElementById('cart-drawer');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartDrawerClose = document.getElementById('cart-drawer-close');
  const cartBtn = document.getElementById('cart-btn');

  function openCartDrawer() {
    renderCartDrawer();
    cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (cartDrawerClose) cartDrawerClose.addEventListener('click', closeCartDrawer);
  if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);

  function renderCartDrawer() {
    const itemsContainer = document.getElementById('cart-drawer-items');
    const emptyEl = document.getElementById('cart-empty');
    const footerEl = document.getElementById('cart-drawer-footer');
    if (!itemsContainer) return;
    const items = window.cartItems || [];

    // Remove old items
    const oldItems = itemsContainer.querySelectorAll('.cart-item');
    oldItems.forEach(i => i.remove());

    if (items.length === 0) {
      if (emptyEl) emptyEl.style.display = '';
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    if (emptyEl) emptyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = '';

    items.forEach((item, index) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      const name = item.product_name || item.productName || 'Produto';
      const price = parseFloat(item.price_at_cart) || 0;
      const qty = item.quantity || 1;
      
      itemEl.innerHTML = `
        <div class="cart-item-info">
          <h4>${name}</h4>
          <p class="cart-item-price">R$ ${price.toFixed(2).replace('.', ',')}</p>
        </div>
        <div class="cart-item-controls">
          <div class="cart-item-qty">
            <button class="qty-btn-sm" data-index="${index}" data-delta="-1">−</button>
            <span>${qty}</span>
            <button class="qty-btn-sm" data-index="${index}" data-delta="1">+</button>
          </div>
          <button class="cart-item-remove" data-index="${index}" aria-label="Remover">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `;
      itemsContainer.appendChild(itemEl);
    });

    // Event delegation for cart item buttons
    itemsContainer.querySelectorAll('.qty-btn-sm').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        const delta = parseInt(btn.dataset.delta);
        changeCartQty(idx, delta);
      });
    });
    itemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeCartItem(parseInt(btn.dataset.index));
      });
    });

    updateCartSummary();
  }

  function updateCartSummary() {
    const items = window.cartItems || [];
    let subtotal = items.reduce((sum, item) => {
      return sum + (parseFloat(item.price_at_cart) || 0) * (item.quantity || 1);
    }, 0);

    const subtotalEl = document.getElementById('cart-subtotal');
    if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    let discount = 0;
    const discountRow = document.getElementById('cart-discount-row');

    if (appliedCoupon) {
      if (appliedCoupon.discount_type === 'percentage') {
        discount = subtotal * (appliedCoupon.discount_value / 100);
      } else {
        discount = appliedCoupon.discount_value;
      }
      discount = Math.min(discount, subtotal);
      if (discountRow) discountRow.style.display = '';
      const discountEl = document.getElementById('cart-discount');
      if (discountEl) discountEl.textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
    } else {
      if (discountRow) discountRow.style.display = 'none';
    }

    const total = subtotal - discount;
    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Enable/disable checkout button based on items
    const checkoutBtn = document.getElementById('cart-checkout-whatsapp');
    if (checkoutBtn) {
      checkoutBtn.disabled = items.length === 0;
    }
  }

  // ---- CHECKOUT: CREATE ORDER + OPEN WHATSAPP ----
  async function finalizeCheckoutWhatsApp() {
    const items = window.cartItems || [];
    if (items.length === 0) return;

    // Require login before checkout
    if (!currentUser && !(supabase && supabase.getAccessToken())) {
      showToast('Login necessário', 'Faça login ou crie uma conta para finalizar sua compra.', 'warning');
      // Close cart drawer
      const cartDrawer = document.getElementById('cart-drawer');
      if (cartDrawer) cartDrawer.classList.remove('open');
      document.body.style.overflow = '';
      // Open login modal after brief delay
      setTimeout(() => {
        const authModal = document.getElementById('auth-modal');
        const authSubtitle = document.getElementById('auth-subtitle');
        const loginForm = document.getElementById('auth-login-form');
        if (authModal) {
          if (authSubtitle) authSubtitle.textContent = 'Entre ou crie sua conta para finalizar a compra';
          // Show login form
          document.querySelectorAll('#auth-login-form, #auth-register-form, #auth-forgot-form').forEach(f => f.style.display = 'none');
          if (loginForm) loginForm.style.display = '';
          authModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      }, 400);
      return;
    }

    const checkoutBtn = document.getElementById('cart-checkout-whatsapp');
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.textContent = 'PROCESSANDO...';
    }

    try {
      // Calculate totals
      let subtotal = items.reduce((sum, item) => {
        return sum + (parseFloat(item.price_at_cart) || 0) * (item.quantity || 1);
      }, 0);

      let discount = 0;
      if (appliedCoupon) {
        if (appliedCoupon.discount_type === 'percentage') {
          discount = subtotal * (appliedCoupon.discount_value / 100);
        } else {
          discount = appliedCoupon.discount_value;
        }
        discount = Math.min(discount, subtotal);
      }
      const total = subtotal - discount;

      // Build WhatsApp message
      let msg = 'Ola! Gostaria de finalizar meu pedido no Toque de Fada.\n\n';
      msg += '-----------------------------\n';
      items.forEach((item, idx) => {
        const name = item.product_name || item.productName || 'Produto';
        const price = parseFloat(item.price_at_cart) || 0;
        const qty = item.quantity || 1;
        msg += `${idx + 1}. *${name}*\n   Qtd: ${qty} | Valor: R$ ${(price * qty).toFixed(2).replace('.', ',')}\n`;
      });
      msg += '-----------------------------\n';
      if (appliedCoupon) {
        msg += `Cupom aplicado: *${appliedCoupon.code}*\n`;
        msg += `Desconto: -R$ ${discount.toFixed(2).replace('.', ',')}\n`;
      }
      msg += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;

      // Get user info
      const user = JSON.parse(localStorage.getItem('toque_user') || 'null');
      const sessionId = localStorage.getItem('toque_session_id') || 'unknown';

      // Create order in database
      const order = await supabase.createOrder({
        session_id: sessionId,
        user_email: user ? user.email : null,
        customer_name: user ? (user.user_metadata?.name || user.email) : null,
        status: 'pending',
        total_price: total,
        discount: discount,
        coupon_code: appliedCoupon ? appliedCoupon.code : null,
        whatsapp_message: msg
      });

      const orderId = order.id;

      // Create order items
      const orderItems = items.map(item => ({
        order_id: orderId,
        product_id: item.product_id || null,
        product_name: item.product_name || item.productName || 'Produto',
        price_at_order: parseFloat(item.price_at_cart) || 0,
        quantity: item.quantity || 1
      }));
      await supabase.createOrderItems(orderItems);

      // Add order ID to WhatsApp message
      msg = `*Pedido #${orderId}*\n\n` + msg;
      msg += '\n\nAguardo confirmacao. Obrigada!';

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/${window._whatsappNumber || '5511999999999'}?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank');

      // Clear cart
      window.cartItems = [];
      appliedCoupon = null;
      saveCartToLocalStorage();
      updateCartBadge();
      renderCartDrawer();
      closeCartDrawer();

      // Show success message
      showToast('Pedido #' + orderId + ' criado! Finalize pelo WhatsApp.');

    } catch (err) {
      console.error('Erro ao criar pedido:', err);
      showToast('Erro ao criar pedido. Tente novamente.');
    } finally {
      if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = 'FINALIZAR VIA WHATSAPP <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>';
      }
    }
  }

  // Attach checkout click handler
  document.getElementById('cart-checkout-whatsapp')?.addEventListener('click', finalizeCheckoutWhatsApp);

  function changeCartQty(index, delta) {
    if (!window.cartItems || !window.cartItems[index]) return;
    window.cartItems[index].quantity = (window.cartItems[index].quantity || 1) + delta;
    if (window.cartItems[index].quantity < 1) {
      window.cartItems.splice(index, 1);
    }
    saveCartToLocalStorage();
    updateCartBadge();
    renderCartDrawer();
  }

  function removeCartItem(index) {
    if (!window.cartItems) return;
    const removed = window.cartItems.splice(index, 1);
    saveCartToLocalStorage();
    updateCartBadge();
    renderCartDrawer();

  }

  // ============================================
  // COUPON SYSTEM
  // ============================================
  const DEMO_COUPONS = {
    'FADA10': { code: 'FADA10', discount_type: 'percentage', discount_value: 10, min_purchase: 0 },
    'DESCONTO20': { code: 'DESCONTO20', discount_type: 'percentage', discount_value: 20, min_purchase: 150 },
    'VIP50': { code: 'VIP50', discount_type: 'fixed', discount_value: 50, min_purchase: 200 }
  };

  async function validateCoupon(code) {
    const upperCode = code.toUpperCase().trim();
    
    try {
      if (typeof supabase !== 'undefined') {
        const result = await supabase.request('GET', 'coupons', {
          query: `?code=eq.${encodeURIComponent(upperCode)}&active=eq.true`
        });
        if (result && result.length > 0) {
          const c = result[0];
          // Check expiry
          if (c.expires_at && new Date(c.expires_at) < new Date()) return DEMO_COUPONS[upperCode] || null;
          // Check max uses
          if (c.max_uses && c.current_uses >= c.max_uses) return DEMO_COUPONS[upperCode] || null;
          // Map DB columns to app format
          return {
            code: c.code,
            discount_type: c.type, // 'percentage' or 'fixed'
            discount_value: parseFloat(c.value),
            min_purchase: parseFloat(c.min_purchase) || 0
          };
        }
      }
    } catch (e) {
      console.log('Supabase coupon check failed, using demo coupons');
    }

    return DEMO_COUPONS[upperCode] || null;
  }

  function setupCouponBtn(inputId, btnId, msgId, isCart) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    btn.addEventListener('click', async () => {
      const input = document.getElementById(inputId);
      const msgEl = document.getElementById(msgId);
      const code = input.value.trim();

      if (!code) {
        msgEl.textContent = 'Digite um código de cupom';
        msgEl.className = 'coupon-msg coupon-error';
        return;
      }

      btn.disabled = true;
      btn.textContent = '...';

      const coupon = await validateCoupon(code);

      if (coupon) {
        const items = window.cartItems || [];
        const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.price_at_cart) || 0) * (item.quantity || 1), 0);

        if (coupon.min_purchase && subtotal < coupon.min_purchase) {
          msgEl.textContent = `Pedido mínimo: R$ ${coupon.min_purchase.toFixed(2).replace('.', ',')}`;
          msgEl.className = 'coupon-msg coupon-error';
        } else {
          appliedCoupon = coupon;
          const desc = coupon.discount_type === 'percentage'
            ? `${coupon.discount_value}% de desconto`
            : `R$ ${coupon.discount_value.toFixed(2).replace('.', ',')} de desconto`;
          msgEl.textContent = `✓ Cupom aplicado! ${desc}`;
          msgEl.className = 'coupon-msg coupon-success';
          if (isCart) updateCartSummary();
        }
      } else {
        msgEl.textContent = 'Cupom inválido ou expirado';
        msgEl.className = 'coupon-msg coupon-error';
      }

      btn.disabled = false;
      btn.textContent = 'APLICAR';
    });
  }

  setupCouponBtn('coupon-input', 'coupon-apply', 'coupon-msg', false);
  setupCouponBtn('cart-coupon-input', 'cart-coupon-apply', 'cart-coupon-msg', true);

  // ============================================
  // CART FUNCTIONALITY (PERSISTENT)
  // ============================================
  window.addToCart = async function(button) {
    // Prevent multiple rapid clicks
    if (button.disabled) return;
    button.disabled = true;

    const productName = button.dataset.product || button.getAttribute('data-product');
    const price = button.dataset.price || button.getAttribute('data-price') || '0';
    const productDbId = button.dataset.productId || button.getAttribute('data-product-id') || '';
    const productId = `product_${productName.replace(/\s+/g, '_').toLowerCase()}`;

    try {
      if (!window.cartItems) window.cartItems = [];

      // Always check if item already exists in cart
      const existing = window.cartItems.find(item => item.product_name === productName);
      let message = '';
      
      if (existing) {
        // Item already exists - just increment quantity
        existing.quantity++;
        message = `Agora você tem ${existing.quantity}x ${productName}`;
      } else {
        // New item - add to cart
        const newItem = {
          product_name: productName,
          product_id: productDbId,
          price_at_cart: parseFloat(price),
          quantity: 1
        };
        window.cartItems.push(newItem);
        message = 'Adicionado ao carrinho!';
        
        // If Supabase available, sync to database
        if (window.cart && typeof supabase !== 'undefined') {
          try {
            await supabase.addToCart(productId, productName, price, 1);
          } catch (err) {
            console.error('Supabase sync error (non-fatal):', err);
          }
        }
      }
      
      saveCartToLocalStorage();
      updateCartBadge();
      renderCartDrawer();
      if (button.style) {
        button.style.transform = 'scale(0.85)';
        setTimeout(() => button.style.transform = '', 200);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);

    } finally {
      // Re-enable button after 400ms
      setTimeout(() => {
        button.disabled = false;
      }, 400);
    }
  };

  function updateCartBadge() {
    if (!window.cartItems) window.cartItems = [];
    const count = window.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    if (cartBadge) {
      cartBadge.textContent = count;
      cartBadge.classList.remove('bounce');
      void cartBadge.offsetWidth;
      cartBadge.classList.add('bounce');
    }
  }

  // Product card add-to-cart buttons (handled by grid delegation)

  // ============================================
  // WISHLIST (PERSISTENT)
  // ============================================
  let wishlistItems = [];

  function loadWishlistFromLocal() {
    try {
      const stored = localStorage.getItem('toque_wishlist');
      if (stored) {
        wishlistItems = JSON.parse(stored);
      }
    } catch (e) {
      wishlistItems = [];
    }
  }

  async function loadWishlist() {
    // Start with localStorage for instant UI
    loadWishlistFromLocal();
    updateWishlistBadge();
    syncWishlistButtons();

    // Then try Supabase in background
    try {
      if (typeof supabase !== 'undefined') {
        const items = await supabase.getWishlist();
        if (items && Array.isArray(items) && items.length > 0) {
          wishlistItems = items;
          saveWishlistLocal();
          updateWishlistBadge();
          syncWishlistButtons();
        }
      }
    } catch (e) {
      console.log('Wishlist Supabase sync skipped:', e.message);
    }
  }

  function saveWishlistLocal() {
    localStorage.setItem('toque_wishlist', JSON.stringify(wishlistItems));
  }

  async function toggleWishlist(productName) {
    const existing = wishlistItems.find(w => w.product_name === productName);

    if (existing) {
      // Remove from wishlist
      wishlistItems = wishlistItems.filter(w => w.product_name !== productName);
      saveWishlistLocal();
      updateWishlistBadge();
      syncWishlistButtons();

      // Sync removal with Supabase
      try {
        if (typeof supabase !== 'undefined' && existing.id) {
          await supabase.removeFromWishlist(existing.id);
        }
      } catch (e) { console.log('Wishlist remove sync error:', e); }

    } else {
      // Add to wishlist locally first (instant feedback)
      const newItem = { product_name: productName };
      wishlistItems.push(newItem);
      saveWishlistLocal();
      updateWishlistBadge();
      syncWishlistButtons();

      // Sync with Supabase
      try {
        if (typeof supabase !== 'undefined') {
          const result = await supabase.addToWishlist(productName);
          if (result && result.id) {
            // Update local item with DB id for future removal
            const idx = wishlistItems.findIndex(w => w.product_name === productName && !w.id);
            if (idx !== -1) {
              wishlistItems[idx] = result;
              saveWishlistLocal();
            }
          }
        }
      } catch (e) {
        console.log('Wishlist add sync error:', e);
      }
    }
  }

  function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-count');
    if (badge) {
      const count = wishlistItems.length;
      badge.textContent = count;
      badge.style.display = count > 0 ? '' : 'none';
    }
  }

  function syncWishlistButtons() {
    document.querySelectorAll('.product-wishlist').forEach(btn => {
      const name = btn.dataset.product;
      const isWished = wishlistItems.some(w => w.product_name === name);
      btn.classList.toggle('active', isWished);
      const svgPath = btn.querySelector('svg path');
      if (svgPath) {
        svgPath.setAttribute('fill', isWished ? 'currentColor' : 'none');
      }
    });

    // Sync modal wishlist button if modal is open
    const modalWishBtn = document.getElementById('modal-add-wishlist');
    if (modalWishBtn && currentProduct) {
      const isWished = wishlistItems.some(w => w.product_name === currentProduct.name);
      modalWishBtn.classList.toggle('active', isWished);
      const svgPath = modalWishBtn.querySelector('svg path');
      if (svgPath) {
        svgPath.setAttribute('fill', isWished ? 'currentColor' : 'none');
      }
    }
  }

  // Product wishlist buttons (handled by grid delegation)

  // Header wishlist button → scroll to products
  document.getElementById('wishlist-btn')?.addEventListener('click', () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  });

  loadWishlist();

  // ============================================
  // FAQ ACCORDION
  // ============================================
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const faqItem = btn.parentElement;
      const isOpen = faqItem.classList.contains('open');
      
      // Close all
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        faqItem.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ============================================
  // CONTACT FORM
  // ============================================
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      const whatsappMsg = encodeURIComponent(
        `Olá! Sou ${name} (${email}).\n\nAssunto: ${subject || 'Geral'}\n\n${message}\n\nEnviado pelo formulário de contato`
      );

      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';
      contactSuccess.style.animation = 'scaleIn 0.4s var(--transition-smooth)';

      setTimeout(() => {
        window.open(`https://wa.me/5511978042160?text=${whatsappMsg}`, '_blank');
      }, 500);

      setTimeout(() => {
        contactForm.style.display = '';
        contactSuccess.style.display = '';
        contactForm.reset();
      }, 5000);
    });
  }



  // ============================================
  // NEWSLETTER
  // ============================================
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      
      try {
        if (typeof supabase !== 'undefined') {
          await supabase.subscribeNewsletter(email);
        }
      } catch (err) {
        console.log('Newsletter signup error:', err);
      }

      newsletterForm.style.display = 'none';
      newsletterSuccess.classList.add('show');
      
      setTimeout(() => {
        newsletterForm.style.display = '';
        newsletterSuccess.classList.remove('show');
        newsletterForm.reset();
      }, 4000);
    });
  }

  // ============================================
  // BACK TO TOP
  // ============================================
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // SMOOTH SCROLL FOR HASH LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  // ============================================
  // PROMO BANNER ROTATION
  // ============================================
  const promoMessages = [
    'Frete grátis acima de R$199 • Parcele em até 6x sem juros',
    'Nova Coleção 2026 disponível • Peças exclusivas',
    'Ganhe 10% OFF na primeira compra • Use: FADA10',
    'Prata 925 com garantia vitalícia • Qualidade premium'
  ];

  let promoIndex = 0;
  const promoText = document.getElementById('promo-text');

  if (promoText) {
    setInterval(() => {
      promoText.style.opacity = '0';
      promoText.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        promoIndex = (promoIndex + 1) % promoMessages.length;
        promoText.textContent = promoMessages[promoIndex];
        promoText.style.opacity = '1';
        promoText.style.transform = 'translateY(0)';
      }, 300);
    }, 4000);

    promoText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  }

  // ============================================
  // AUTH SYSTEM
  // ============================================
  const authBtn = document.getElementById('auth-btn');
  const authModal = document.getElementById('auth-modal');
  const authModalOverlay = document.getElementById('auth-modal-overlay');
  const authModalClose = document.getElementById('auth-modal-close');
  const authSubtitle = document.getElementById('auth-subtitle');

  const loginForm = document.getElementById('auth-login-form');
  const registerForm = document.getElementById('auth-register-form');
  const forgotForm = document.getElementById('auth-forgot-form');

  const userDropdown = document.getElementById('user-dropdown');
  let dropdownOpen = false;
  let currentUser = null;

  // Show/hide auth forms
  function showForm(form) {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    forgotForm.style.display = 'none';
    form.style.display = '';
    // Clear errors
    document.querySelectorAll('.auth-error, .auth-success').forEach(el => el.textContent = '');
  }

  document.getElementById('show-register')?.addEventListener('click', () => {
    authSubtitle.textContent = 'Crie sua conta';
    showForm(registerForm);
  });

  document.getElementById('show-login')?.addEventListener('click', () => {
    authSubtitle.textContent = 'Entre na sua conta';
    showForm(loginForm);
  });

  document.getElementById('back-to-login')?.addEventListener('click', () => {
    authSubtitle.textContent = 'Entre na sua conta';
    showForm(loginForm);
  });

  document.getElementById('forgot-password-link')?.addEventListener('click', () => {
    authSubtitle.textContent = 'Recuperar senha';
    showForm(forgotForm);
  });

  // Password toggle buttons
  document.querySelectorAll('.password-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (input) {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        btn.classList.toggle('active', isPassword);
      }
    });
  });

  // Open auth modal
  function openAuthModal() {
    if (currentUser) {
      toggleUserDropdown();
      return;
    }
    authSubtitle.textContent = 'Entre na sua conta';
    showForm(loginForm);
    authModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAuthModal() {
    authModal.classList.remove('open');
    document.body.style.overflow = '';
    document.querySelectorAll('.auth-error, .auth-success').forEach(el => el.textContent = '');
  }

  if (authBtn) authBtn.addEventListener('click', openAuthModal);
  if (authModalClose) authModalClose.addEventListener('click', closeAuthModal);
  if (authModalOverlay) authModalOverlay.addEventListener('click', closeAuthModal);

  // Auto-open login when session expires (fired from supabase-client.js)
  window.addEventListener('session-expired', () => {
    // Close any admin panel if open
    const admPanel = document.getElementById('admin-panel');
    if (admPanel) admPanel.classList.remove('open');
    document.body.style.overflow = '';
    // Show toast + open login
    showToast('Sessão expirada', 'Faça login novamente para continuar.', 'warning');
    setTimeout(() => openAuthModal(), 600);
  });

  // User dropdown
  function toggleUserDropdown() {
    dropdownOpen = !dropdownOpen;
    if (dropdownOpen) {
      const rect = authBtn.getBoundingClientRect();
      userDropdown.style.top = (rect.bottom + 8) + 'px';
      userDropdown.style.right = (window.innerWidth - rect.right) + 'px';
      userDropdown.style.display = '';
    } else {
      userDropdown.style.display = 'none';
    }
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (dropdownOpen && !userDropdown.contains(e.target) && e.target !== authBtn && !authBtn.contains(e.target)) {
      dropdownOpen = false;
      userDropdown.style.display = 'none';
    }
  });

  // Update UI based on auth state
  function updateAuthUI(user) {
    currentUser = user;
    if (user) {
      // User is logged in - change icon to filled
      authBtn.innerHTML = `
        <svg fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" style="fill: var(--rose-gold); stroke: var(--rose-gold);">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>`;
      
      const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Usuário';
      document.getElementById('user-display-name').textContent = name;
      document.getElementById('user-display-email').textContent = user.email;
      document.getElementById('user-avatar').textContent = name.charAt(0).toUpperCase();
    } else {
      // User is logged out - outline icon
      authBtn.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>`;
      userDropdown.style.display = 'none';
      dropdownOpen = false;
    }
  }

  // Set submit button loading state
  function setLoading(btn, loading) {
    if (loading) {
      btn.disabled = true;
      btn.querySelector('span').textContent = 'Aguarde...';
    } else {
      btn.disabled = false;
      // Restore text based on which button
      if (btn.id === 'login-submit') btn.querySelector('span').textContent = 'Entrar';
      if (btn.id === 'register-submit') btn.querySelector('span').textContent = 'Criar conta';
      if (btn.id === 'forgot-submit') btn.querySelector('span').textContent = 'Enviar link';
    }
  }

  // LOGIN
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      const errorEl = document.getElementById('login-error');
      const submitBtn = document.getElementById('login-submit');
      errorEl.textContent = '';

      setLoading(submitBtn, true);

      try {
        const result = await supabase.signIn(email, password);
        const user = result.user || await supabase.getUser();
        updateAuthUI(user);
        closeAuthModal();
        loginForm.reset();
        showToast('Login realizado', 'Bem-vindo(a) de volta!', 'success');
      } catch (err) {
        console.warn('Login error:', err.message);
        const msg = err.message.toLowerCase();
        if (msg.includes('invalid') || msg.includes('credentials') || msg.includes('invalid_grant')) {
          errorEl.textContent = 'E-mail ou senha incorretos';
        } else if (msg.includes('email not confirmed') || msg.includes('not confirmed')) {
          errorEl.textContent = 'Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada e spam.';
        } else if (msg.includes('too many requests') || msg.includes('rate limit')) {
          errorEl.textContent = 'Muitas tentativas. Aguarde alguns minutos e tente novamente.';
        } else {
          errorEl.textContent = err.message || 'Erro ao fazer login. Tente novamente.';
        }
      } finally {
        setLoading(submitBtn, false);
      }
    });
  }

  // REGISTER
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('register-name').value.trim();
      const email = document.getElementById('register-email').value.trim();
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('register-password-confirm').value;
      const errorEl = document.getElementById('register-error');
      const submitBtn = document.getElementById('register-submit');
      errorEl.textContent = '';

      if (password !== confirmPassword) {
        errorEl.textContent = 'As senhas não coincidem';
        return;
      }

      if (password.length < 6) {
        errorEl.textContent = 'A senha deve ter no mínimo 6 caracteres';
        return;
      }

      setLoading(submitBtn, true);

      try {
        const result = await supabase.signUp(email, password, name);
        
        if (result.access_token) {
          // Auto-confirmed — user is logged in
          const user = result.user || await supabase.getUser();
          updateAuthUI(user);
          closeAuthModal();
          registerForm.reset();
        } else {
          // Email confirmation needed
          errorEl.style.color = '#4CAF50';
          errorEl.textContent = '✓ Conta criada! Verifique seu e-mail para confirmar.';
          registerForm.reset();
        }
      } catch (err) {
        const msg = err.message.toLowerCase();
        if (msg.includes('already registered') || msg.includes('already been registered')) {
          errorEl.textContent = 'Este e-mail já está cadastrado';
        } else {
          errorEl.textContent = err.message;
        }
      } finally {
        setLoading(submitBtn, false);
      }
    });
  }

  // FORGOT PASSWORD
  if (forgotForm) {
    forgotForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('forgot-email').value.trim();
      const errorEl = document.getElementById('forgot-error');
      const successEl = document.getElementById('forgot-success');
      const submitBtn = document.getElementById('forgot-submit');
      errorEl.textContent = '';
      successEl.textContent = '';

      setLoading(submitBtn, true);

      try {
        await supabase.resetPassword(email);
        successEl.textContent = '✓ Link enviado! Verifique seu e-mail.';
        forgotForm.reset();
      } catch (err) {
        errorEl.textContent = err.message || 'Erro ao enviar link';
      } finally {
        setLoading(submitBtn, false);
      }
    });
  }

  // LOGOUT
  document.getElementById('btn-logout')?.addEventListener('click', async () => {
    await supabase.signOut();
    updateAuthUI(null);
    // Clear cart on logout
    window.cartItems = [];
    saveCartToLocalStorage();
    updateCartBadge();
    renderCartDrawer();
  });

  // My orders
  document.getElementById('btn-my-orders')?.addEventListener('click', () => {
    toggleUserDropdown();
    openMyOrders();
  });

  // ---- MY ORDERS PAGE ----
  const myOrdersOverlay = document.getElementById('my-orders-overlay');
  const myOrdersClose = document.getElementById('my-orders-close');
  const myOrdersBody = document.getElementById('my-orders-body');
  const myOrdersList = document.getElementById('my-orders-list');
  const myOrdersLoading = document.getElementById('my-orders-loading');
  const myOrdersEmpty = document.getElementById('my-orders-empty');

  if (myOrdersClose) {
    myOrdersClose.addEventListener('click', closeMyOrders);
  }
  if (myOrdersOverlay) {
    myOrdersOverlay.addEventListener('click', (e) => {
      if (e.target === myOrdersOverlay) closeMyOrders();
    });
  }

  function openMyOrders() {
    if (!myOrdersOverlay) return;
    myOrdersOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    loadMyOrders();
  }

  function closeMyOrders() {
    if (!myOrdersOverlay) return;
    myOrdersOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  function myOrdersStatusInfo(status) {
    const map = {
      'pending': { label: 'Pendente', cls: 'mo-status--pending', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', desc: 'Aguardando confirmacao de pagamento' },
      'paid': { label: 'Pago', cls: 'mo-status--paid', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', desc: 'Pagamento confirmado - em preparacao' },
      'delivered': { label: 'Concluído', cls: 'mo-status--delivered', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>', desc: 'Pedido concluido' },
      'canceled': { label: 'Cancelado', cls: 'mo-status--canceled', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>', desc: 'Pedido cancelado' }
    };
    return map[status] || { label: status, cls: '', icon: '', desc: '' };
  }

  function formatMyOrderDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) + ' as ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  async function loadMyOrders() {
    if (!myOrdersList || !myOrdersLoading || !myOrdersEmpty) return;

    myOrdersList.innerHTML = '';
    myOrdersLoading.style.display = 'flex';
    myOrdersEmpty.style.display = 'none';

    try {
      const user = supabase.getCachedUser();
      let orders = [];

      if (user && user.email) {
        orders = await supabase.getOrdersByEmail(user.email);
      }
      // Also try session-based orders
      const sessionId = localStorage.getItem('toque_session_id');
      if (sessionId) {
        try {
          const sessionOrders = await supabase.getOrdersBySession(sessionId);
          // Merge, avoiding duplicates
          const existingIds = new Set(orders.map(o => o.id));
          sessionOrders.forEach(o => { if (!existingIds.has(o.id)) orders.push(o); });
        } catch(e) { /* ignore */ }
      }

      // Sort by date desc
      orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      myOrdersLoading.style.display = 'none';

      if (!orders.length) {
        myOrdersEmpty.style.display = 'flex';
        return;
      }

      // Load items for each order
      for (const order of orders) {
        try {
          order._items = await supabase.getOrderItems(order.id);
        } catch(e) { order._items = []; }
      }

      myOrdersList.innerHTML = orders.map(order => {
        const status = myOrdersStatusInfo(order.status);
        const total = parseFloat(order.total_price) || 0;
        const discount = parseFloat(order.discount) || 0;
        const items = order._items || [];
        const tracking = order.tracking_code || null;
        const noTracking = order.no_tracking === true;
        const dateStr = formatMyOrderDate(order.created_at);

        let trackingHtml = '';
        if (order.status === 'delivered' || order.status === 'paid') {
          if (tracking) {
            trackingHtml = `<div class="mo-tracking mo-tracking--available">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              <div><strong>Codigo de Rastreio</strong><span class="mo-tracking-code">${tracking}</span></div>
            </div>`;
          } else if (noTracking) {
            trackingHtml = `<div class="mo-tracking mo-tracking--pickup">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <div><strong>Retirada / Entrega local</strong><span>Sem codigo de rastreio</span></div>
            </div>`;
          } else {
            trackingHtml = `<div class="mo-tracking mo-tracking--waiting">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <div><strong>Rastreio</strong><span>Ainda nao disponivel</span></div>
            </div>`;
          }
        } else if (order.status === 'pending') {
          trackingHtml = `<div class="mo-tracking mo-tracking--waiting">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div><strong>Rastreio</strong><span>Disponivel apos confirmacao</span></div>
          </div>`;
        }

        return `<div class="mo-card">
          <div class="mo-card-header">
            <div class="mo-card-id">Pedido #${order.id}</div>
            <span class="mo-status ${status.cls}">${status.icon} ${status.label}</span>
          </div>
          <div class="mo-card-date">${dateStr}</div>
          <div class="mo-card-items">
            ${items.map(item => `<div class="mo-item">
              <span class="mo-item-name">${item.product_name}</span>
              <span class="mo-item-qty">x${item.quantity}</span>
              <span class="mo-item-price">R$ ${(item.price_at_order * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>`).join('')}
          </div>
          <div class="mo-card-footer">
            <div class="mo-card-total">
              ${discount > 0 ? `<small class="mo-discount">Desconto: -R$ ${discount.toFixed(2).replace('.', ',')}</small>` : ''}
              <strong>Total: R$ ${total.toFixed(2).replace('.', ',')}</strong>
            </div>
          </div>
          ${trackingHtml}
          <div class="mo-status-desc">${status.desc}</div>
        </div>`;
      }).join('');

    } catch (err) {
      console.error('Error loading my orders:', err);
      myOrdersLoading.style.display = 'none';
      myOrdersList.innerHTML = '<div class="my-orders-error"><p>Erro ao carregar pedidos. Tente novamente.</p></div>';
    }
  }

  // My wishlist
  document.getElementById('btn-my-wishlist')?.addEventListener('click', () => {
    toggleUserDropdown();
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Check existing session on page load
  async function checkAuthSession() {
    const cachedUser = supabase.getCachedUser();
    if (cachedUser) {
      updateAuthUI(cachedUser);
      // Verify token is still valid in background
      try {
        const user = await supabase.getUser();
        if (user) {
          updateAuthUI(user);
        } else {
          updateAuthUI(null);
        }
      } catch (e) {
        updateAuthUI(null);
      }
    }
  }

  if (typeof supabase !== 'undefined') {
    checkAuthSession();
  }

  // ============================================
  // ADMIN PANEL (integrated overlay)
  // ============================================
  (function initAdminPanel() {
    let ADM_CATEGORIES = {};
    let admCategories = [];
    let admProducts = [];
    let admCoupons = [];
    let admSettings = {};
    let admOffers = [];
    let isAdmin = false;

    const admOverlay = document.getElementById('admin-panel-overlay');
    const admBtnOpen = document.getElementById('btn-admin-panel');
    if (!admOverlay || !admBtnOpen) return;

    // ---- NOTIFICATION ----
    function admNotify(msg, type = 'success') {
      const el = document.getElementById('adm-notification');
      if (!el) return;
      el.textContent = msg;
      el.className = `adm-notification ${type} show`;
      setTimeout(() => el.classList.remove('show'), 3000);
    }

    function admFormatPrice(n) { return `R$ ${parseFloat(n).toFixed(2).replace('.', ',')}`; }

    // ---- OPEN / CLOSE ----
    function openAdminPanel() {
      admOverlay.style.display = '';
      document.body.style.overflow = 'hidden';
      admLoadAll();
      // Set user info
      if (currentUser) {
        const name = currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Admin';
        document.getElementById('adm-user-name').textContent = name;
        document.getElementById('adm-avatar').textContent = name.charAt(0).toUpperCase();
      }
    }

    function closeAdminPanel() {
      admOverlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    admBtnOpen.addEventListener('click', () => {
      if (dropdownOpen) toggleUserDropdown();
      openAdminPanel();
    });

    document.getElementById('adm-close-panel')?.addEventListener('click', closeAdminPanel);

    // ---- CHECK ADMIN ON AUTH ----
    const origUpdateAuthUI = updateAuthUI;
    updateAuthUI = async function(user) {
      origUpdateAuthUI(user);
      if (user && typeof supabase !== 'undefined') {
        try {
          isAdmin = await supabase.checkAdmin(user.email);
          admBtnOpen.style.display = isAdmin ? '' : 'none';
        } catch(e) { admBtnOpen.style.display = 'none'; }
      } else {
        isAdmin = false;
        admBtnOpen.style.display = 'none';
        closeAdminPanel();
      }
    };
    // Re-check if already logged in
    if (currentUser && typeof supabase !== 'undefined') {
      supabase.checkAdmin(currentUser.email).then(result => {
        isAdmin = result;
        admBtnOpen.style.display = result ? '' : 'none';
      }).catch(() => {});
    }

    // ---- NAVIGATION ----
    const admPageTitles = { 'adm-dashboard': 'Dashboard', 'adm-products': 'Produtos', 'adm-categories': 'Categorias', 'adm-coupons': 'Cupons', 'adm-offers': 'Ofertas', 'adm-orders': 'Pedidos', 'adm-reports': 'Relatórios', 'adm-settings': 'Configurações' };

    function admNavigateTo(page) {
      document.querySelectorAll('.adm-page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.adm-nav[data-adm-page]').forEach(n => n.classList.remove('active'));
      document.getElementById(page)?.classList.add('active');
      document.querySelector(`.adm-nav[data-adm-page="${page}"]`)?.classList.add('active');
      document.getElementById('adm-page-title').textContent = admPageTitles[page] || '';
      document.getElementById('adm-sidebar').classList.remove('open');
      // Refresh data when navigating to specific pages
      if (page === 'adm-orders') admLoadOrders();
      if (page === 'adm-reports') admRenderReports();
      if (page === 'adm-categories') admRenderCategories();
    }

    document.querySelectorAll('.adm-nav[data-adm-page]').forEach(btn => {
      btn.addEventListener('click', () => admNavigateTo(btn.dataset.admPage));
    });

    document.getElementById('adm-sidebar-toggle')?.addEventListener('click', () => {
      document.getElementById('adm-sidebar').classList.toggle('open');
    });

    document.getElementById('adm-qa-product')?.addEventListener('click', () => { admNavigateTo('adm-products'); admOpenProductModal(); });
    document.getElementById('adm-qa-coupon')?.addEventListener('click', () => { admNavigateTo('adm-coupons'); admOpenCouponModal(); });
    document.getElementById('adm-qa-offer')?.addEventListener('click', () => { admNavigateTo('adm-offers'); admOpenOfferModal(); });
    document.getElementById('adm-qa-orders')?.addEventListener('click', () => { admNavigateTo('adm-orders'); admLoadOrders(); });
    document.getElementById('adm-qa-reports')?.addEventListener('click', () => admNavigateTo('adm-reports'));
    document.getElementById('adm-qa-settings')?.addEventListener('click', () => admNavigateTo('adm-settings'));

    // ---- LOAD ALL ----
    let admOrders = [];

    async function admLoadAll() {
      await Promise.all([admLoadProducts(), admLoadCoupons(), admLoadSettings(), admLoadOffers(), admLoadOrders(), admLoadCategories()]);
      admUpdateDashboard();
    }

    function admUpdateDashboard() {
      document.getElementById('adm-stat-products').textContent = admProducts.length;
      document.getElementById('adm-stat-coupons').textContent = admCoupons.filter(c => c.active).length;
      document.getElementById('adm-stat-active').textContent = admProducts.filter(p => p.active !== false).length;
      document.getElementById('adm-stat-orders').textContent = admOrders.filter(o => o.status === 'pending').length;
      // Revenue stats
      const paidOrders = admOrders.filter(o => o.status === 'delivered' || o.status === 'paid');
      const totalRevenue = paidOrders.reduce((sum, o) => sum + (parseFloat(o.total_price) || 0), 0);
      const now = new Date();
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const monthRevenue = paidOrders.filter(o => new Date(o.created_at) >= monthStart).reduce((sum, o) => sum + (parseFloat(o.total_price) || 0), 0);
      const avgTicket = paidOrders.length > 0 ? totalRevenue / paidOrders.length : 0;
      document.getElementById('adm-stat-revenue').textContent = admFormatPrice(totalRevenue);
      document.getElementById('adm-stat-month-revenue').textContent = admFormatPrice(monthRevenue);
      document.getElementById('adm-stat-total-orders').textContent = admOrders.length;
      document.getElementById('adm-stat-avg-ticket').textContent = admFormatPrice(avgTicket);
      // Check stock-deactivated products
      const oos = admProducts.filter(p => p.stock_deactivated);
      if (oos.length) console.log(`[Admin] ${oos.length} product(s) auto-deactivated by stock.`);
    }

    // ---- CATEGORIES ----
    async function admLoadCategories() {
      try { admCategories = await supabase.getCategories(); } catch(e) { admCategories = []; }
      // Build lookups
      ADM_CATEGORIES = {};
      CATEGORY_COLORS = {};
      admCategories.filter(c => c.active !== false).forEach(c => {
        ADM_CATEGORIES[c.slug] = c.name;
        if (c.text_color) CATEGORY_COLORS[c.slug] = c.text_color;
      });
      admRenderCategories();
      admPopulateCategorySelects();
      admRefreshSiteFilters();
    }

    function admPopulateCategorySelects() {
      const sel = document.getElementById('adm-pf-category');
      if (!sel) return;
      const currentVal = sel.value;
      sel.innerHTML = '<option value="">Selecione</option>';
      admCategories.filter(c => c.active !== false).forEach(c => {
        sel.innerHTML += `<option value="${c.slug}">${c.name}</option>`;
      });
      if (currentVal) sel.value = currentVal;
    }

    function admRefreshSiteFilters() {
      const container = document.getElementById('product-filters');
      if (!container) return;
      // Keep only the price filter, rebuild category buttons
      const priceWrap = container.querySelector('.filter-price-wrap');
      container.querySelectorAll('.filter-btn').forEach(b => b.remove());
      // Add "Todos" button first
      const allBtn = document.createElement('button');
      allBtn.className = 'filter-btn active';
      allBtn.dataset.filter = 'all';
      allBtn.textContent = 'Todos';
      container.insertBefore(allBtn, priceWrap);
      // Add category buttons
      admCategories.filter(c => c.active !== false).forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.filter = c.slug;
        btn.textContent = c.name;
        if (c.text_color) btn.style.setProperty('--cat-color', c.text_color);
        container.insertBefore(btn, priceWrap);
      });
      // Re-bind filter events
      container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          activeFilter = btn.dataset.filter;
          container.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
          applyFilters();
        });
      });
    }

    function admRenderCategories() {
      const grid = document.getElementById('adm-categories-grid');
      const empty = document.getElementById('adm-categories-empty');
      if (!grid) return;
      if (!admCategories.length) { grid.innerHTML = ''; if (empty) empty.style.display = ''; return; }
      if (empty) empty.style.display = 'none';
      grid.innerHTML = admCategories.map(c => {
        const productCount = admProducts.filter(p => p.category_slug === c.slug).length;
        const statusBadge = c.active !== false
          ? '<span class="adm-badge adm-badge--active">Ativa</span>'
          : '<span class="adm-badge adm-badge--inactive">Inativa</span>';
        return `<div class="adm-cat-card">
          <div class="adm-cat-card-header">
            <div class="adm-cat-color-dot" style="background:${c.text_color || '#1e293b'}"></div>
            <h4 style="color:${c.text_color || '#1e293b'}">${c.name}</h4>
            ${statusBadge}
          </div>
          <div class="adm-cat-card-info">
            <span class="adm-cat-slug">${c.slug}</span>
            <span>${productCount} produto(s)</span>
          </div>
          <div class="adm-cat-card-actions">
            <button class="adm-btn-sm adm-btn-edit" data-adm-edit-cat="${c.id}">Editar</button>
            <button class="adm-btn-sm adm-btn-delete" data-adm-delete-cat="${c.id}">Excluir</button>
          </div>
        </div>`;
      }).join('');
    }

    // Category grid delegation
    document.getElementById('adm-categories-grid')?.addEventListener('click', async (e) => {
      const editBtn = e.target.closest('[data-adm-edit-cat]');
      if (editBtn) {
        const cat = admCategories.find(c => c.id == editBtn.dataset.admEditCat);
        if (cat) admOpenCategoryModal(cat);
        return;
      }
      const deleteBtn = e.target.closest('[data-adm-delete-cat]');
      if (deleteBtn) {
        if (!confirm('Excluir esta categoria?')) return;
        try {
          await supabase.deleteCategory(deleteBtn.dataset.admDeleteCat);
          admNotify('Categoria excluída!');
          await admLoadCategories();
        } catch(e) { admNotify('Erro ao excluir', 'error'); }
      }
    });

    function admOpenCategoryModal(cat = null) {
      const modal = document.getElementById('adm-category-modal');
      const form = document.getElementById('adm-category-form');
      form.reset();
      document.getElementById('adm-catf-editing-id').value = '';
      document.getElementById('adm-catf-active').checked = true;
      document.getElementById('adm-catf-color').value = '#1e293b';
      document.getElementById('adm-catf-color-preview').style.color = '#1e293b';
      document.getElementById('adm-catf-color-preview').textContent = 'Preview';

      // Populate products list
      const listEl = document.getElementById('adm-catf-products-list');
      listEl.innerHTML = admProducts.map(p => {
        const checked = cat ? p.category_slug === cat.slug : false;
        return `<label class="adm-cat-product-item">
          <input type="checkbox" value="${p.id}" ${checked ? 'checked' : ''}>
          <span>${p.name}</span>
        </label>`;
      }).join('') || '<p style="color:#94a3b8;font-size:0.85rem;">Nenhum produto cadastrado.</p>';

      if (cat) {
        document.getElementById('adm-category-modal-title').textContent = 'Editar Categoria';
        document.getElementById('adm-catf-editing-id').value = cat.id;
        document.getElementById('adm-catf-name').value = cat.name || '';
        document.getElementById('adm-catf-slug').value = cat.slug || '';
        document.getElementById('adm-catf-color').value = cat.text_color || '#1e293b';
        document.getElementById('adm-catf-color-preview').style.color = cat.text_color || '#1e293b';
        document.getElementById('adm-catf-sort').value = cat.sort_order || 0;
        document.getElementById('adm-catf-active').checked = cat.active !== false;
      } else {
        document.getElementById('adm-category-modal-title').textContent = 'Nova Categoria';
      }
      modal.classList.add('open');
    }

    document.getElementById('adm-btn-add-category')?.addEventListener('click', () => admOpenCategoryModal());

    // Auto-generate slug from name
    document.getElementById('adm-catf-name')?.addEventListener('input', (e) => {
      const slugInput = document.getElementById('adm-catf-slug');
      const editingId = document.getElementById('adm-catf-editing-id').value;
      if (!editingId) {
        slugInput.value = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
    });

    // Color preview
    document.getElementById('adm-catf-color')?.addEventListener('input', (e) => {
      document.getElementById('adm-catf-color-preview').style.color = e.target.value;
    });

    // Category form submit
    document.getElementById('adm-category-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('adm-catf-submit-btn');
      submitBtn.disabled = true; submitBtn.textContent = 'Salvando...';
      const editingId = document.getElementById('adm-catf-editing-id').value;
      const slug = document.getElementById('adm-catf-slug').value.trim();
      const data = {
        name: document.getElementById('adm-catf-name').value.trim(),
        slug: slug,
        text_color: document.getElementById('adm-catf-color').value,
        sort_order: parseInt(document.getElementById('adm-catf-sort').value) || 0,
        active: document.getElementById('adm-catf-active').checked
      };

      // Get selected products
      const selectedProducts = [];
      document.querySelectorAll('#adm-catf-products-list input[type="checkbox"]:checked').forEach(cb => {
        selectedProducts.push(cb.value);
      });

      try {
        if (editingId) {
          await supabase.updateCategory(editingId, data);
        } else {
          data.id = slug;
          await supabase.createCategory(data);
        }

        // Update products category assignments
        for (const p of admProducts) {
          const shouldBelong = selectedProducts.includes(p.id);
          const currentlyBelongs = p.category_slug === slug;
          if (shouldBelong && !currentlyBelongs) {
            await supabase.updateProduct(p.id, { category: data.name, category_slug: slug });
          } else if (!shouldBelong && currentlyBelongs) {
            await supabase.updateProduct(p.id, { category: '', category_slug: '' });
          }
        }

        admNotify(editingId ? 'Categoria atualizada!' : 'Categoria criada!');
        document.getElementById('adm-category-modal').classList.remove('open');
        await Promise.all([admLoadCategories(), admLoadProducts()]);
        admUpdateDashboard();
        admRefreshSite();
      } catch(err) { admNotify('Erro: ' + (err.message || ''), 'error'); }
      finally { submitBtn.disabled = false; submitBtn.textContent = 'Salvar Categoria'; }
    });

    // ---- PRODUCTS ----
    async function admLoadProducts() {
      try { admProducts = await supabase.getProducts(); } catch(e) { admNotify('Erro ao carregar produtos', 'error'); admProducts = []; }
      admRenderProducts();
    }

    function admRenderProducts() {
      const tbody = document.getElementById('adm-products-tbody');
      const empty = document.getElementById('adm-products-empty');
      if (!admProducts.length) { tbody.innerHTML = ''; empty.style.display = ''; return; }
      empty.style.display = 'none';
      tbody.innerHTML = admProducts.map(p => {
        const imgHtml = p.image_url
          ? `<img src="${p.image_url}" class="adm-table-img" alt="${p.name}">`
          : `<div class="adm-table-img" style="background:${p.image_bg || 'linear-gradient(135deg,#f0e6f6,#d4c5e0)'}"></div>`;
        const badgeHtml = p.badge ? `<span class="adm-badge adm-badge--promo">${p.badge}</span>` : '\u2014';
        // Stock display
        const stockVal = p.stock;
        let stockHtml;
        if (stockVal === null || stockVal === undefined || stockVal === '') {
          stockHtml = '<span style="color:#94a3b8">\u221e</span>';
        } else if (parseInt(stockVal) === 0) {
          stockHtml = '<span class="adm-badge adm-badge--danger">Esgotado</span>';
        } else if (parseInt(stockVal) <= 5) {
          stockHtml = `<span class="adm-badge adm-badge--warn">${stockVal}</span>`;
        } else {
          stockHtml = `<span>${stockVal}</span>`;
        }
        // Status
        let statusHtml;
        if (p.stock_deactivated) {
          statusHtml = '<span class="adm-badge adm-badge--danger" title="Desativado automaticamente por estoque zerado">Sem estoque</span>';
        } else if (p.active !== false) {
          statusHtml = '<span class="adm-badge adm-badge--active">Ativo</span>';
        } else {
          statusHtml = '<span class="adm-badge adm-badge--inactive">Inativo</span>';
        }
        const oldPrice = p.old_price ? `<s style="color:#94a3b8;font-size:0.75rem">${admFormatPrice(p.old_price)}</s> ` : '';
        return `<tr${p.stock_deactivated ? ' style="opacity:0.6"' : ''}>
          <td>${imgHtml}</td>
          <td><strong>${p.name}</strong><br><small style="color:#94a3b8">${p.id}</small></td>
          <td>${ADM_CATEGORIES[p.category_slug] || p.category || '\u2014'}</td>
          <td>${oldPrice}${admFormatPrice(p.price)}</td>
          <td>${stockHtml}</td>
          <td>${badgeHtml}</td>
          <td>${statusHtml}</td>
          <td><div class="adm-cell-actions">
            <button class="adm-btn-sm adm-btn-edit" data-adm-edit-product="${p.id}">Editar</button>
            <button class="adm-btn-sm adm-btn-toggle" data-adm-toggle-product="${p.id}">${p.active !== false ? 'Desativar' : 'Ativar'}</button>
            <button class="adm-btn-sm adm-btn-delete" data-adm-delete-product="${p.id}">Excluir</button>
          </div></td>
        </tr>`;
      }).join('');
    }

    // Product table delegation
    document.getElementById('adm-products-tbody')?.addEventListener('click', async (e) => {
      const editBtn = e.target.closest('[data-adm-edit-product]');
      if (editBtn) { const p = admProducts.find(x => x.id === editBtn.dataset.admEditProduct); if (p) admOpenProductModal(p); return; }
      const toggleBtn = e.target.closest('[data-adm-toggle-product]');
      if (toggleBtn) {
        const p = admProducts.find(x => x.id === toggleBtn.dataset.admToggleProduct);
        if (!p) return;
        const updates = { active: p.active === false };
        // If reactivating a stock-deactivated product, clear the flag and prompt for stock
        if (p.stock_deactivated && p.active === false) {
          const newStock = prompt('Produto estava desativado por estoque zerado. Informe o novo estoque:', '10');
          if (newStock === null) return;
          updates.stock = parseInt(newStock) || 0;
          updates.stock_deactivated = false;
        } else if (p.active !== false) {
          updates.stock_deactivated = false;
        }
        try { await supabase.updateProduct(p.id, updates); admNotify(updates.active ? 'Produto ativado!' : 'Produto desativado!'); await admLoadProducts(); admUpdateDashboard(); admRefreshSite(); } catch(e) { admNotify('Erro ao atualizar', 'error'); }
        return;
      }
      const deleteBtn = e.target.closest('[data-adm-delete-product]');
      if (deleteBtn) {
        if (!confirm('Excluir este produto?')) return;
        try { await supabase.deleteProduct(deleteBtn.dataset.admDeleteProduct); admNotify('Produto excluído!'); await admLoadProducts(); admUpdateDashboard(); admRefreshSite(); } catch(e) { admNotify('Erro ao excluir', 'error'); }
      }
    });

    // Product modal
    function admOpenProductModal(product = null) {
      const modal = document.getElementById('adm-product-modal');
      const form = document.getElementById('adm-product-form');
      const idInput = document.getElementById('adm-pf-id');
      form.reset();
      document.getElementById('adm-pf-editing-id').value = '';
      document.getElementById('adm-pf-active').checked = true;
      // Reset image drop zone
      admClearImagePreview();
      // Reset bg
      document.getElementById('adm-pf-image-bg').value = '';
      document.getElementById('adm-pf-bg-preview').style.background = '';
      document.querySelectorAll('.adm-color-swatch').forEach(sw => sw.classList.remove('active'));
      document.getElementById('adm-pf-color1').value = '#E8E0F0';
      document.getElementById('adm-pf-color2').value = '#D4C6E8';
      // Reset gallery
      admGalleryUrls = [];
      admRenderGallery();

      if (product) {
        document.getElementById('adm-product-modal-title').textContent = 'Editar Produto';
        document.getElementById('adm-pf-editing-id').value = product.id;
        idInput.value = product.id; idInput.readOnly = true;
        document.getElementById('adm-pf-name').value = product.name || '';
        document.getElementById('adm-pf-category').value = product.category_slug || '';
        document.getElementById('adm-pf-badge').value = product.badge || '';
        document.getElementById('adm-pf-price').value = product.price || '';
        document.getElementById('adm-pf-old-price').value = product.old_price || '';
        document.getElementById('adm-pf-description').value = product.description || '';
        document.getElementById('adm-pf-image-url').value = product.image_url || '';
        document.getElementById('adm-pf-image-bg').value = product.image_bg || '';
        document.getElementById('adm-pf-rating').value = product.rating || 5;
        document.getElementById('adm-pf-reviews').value = product.reviews_count || 0;
        document.getElementById('adm-pf-sort').value = product.sort_order || 0;
        document.getElementById('adm-pf-stock').value = (product.stock !== null && product.stock !== undefined) ? product.stock : '';
        document.getElementById('adm-pf-active').checked = product.active !== false;
        // Populate image preview
        if (product.image_url) admShowImagePreview(product.image_url);
        // Populate bg gradient
        if (product.image_bg) admSetBg(product.image_bg);
        // Populate gallery
        admGalleryUrls = Array.isArray(product.images) ? [...product.images] : [];
        admRenderGallery();
      } else {
        document.getElementById('adm-product-modal-title').textContent = 'Novo Produto';
        idInput.readOnly = false;
      }
      modal.classList.add('open');
    }

    document.getElementById('adm-btn-add-product')?.addEventListener('click', () => admOpenProductModal());

    // Product form submit
    document.getElementById('adm-product-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('adm-pf-submit-btn');
      submitBtn.disabled = true; submitBtn.textContent = 'Salvando...';
      const editingId = document.getElementById('adm-pf-editing-id').value;
      const categorySlug = document.getElementById('adm-pf-category').value;
      const images = admGalleryUrls.filter(Boolean);
      const data = {
        id: document.getElementById('adm-pf-id').value.trim().toLowerCase(),
        name: document.getElementById('adm-pf-name').value.trim(),
        category: ADM_CATEGORIES[categorySlug] || categorySlug,
        category_slug: categorySlug,
        price: parseFloat(document.getElementById('adm-pf-price').value) || 0,
        old_price: parseFloat(document.getElementById('adm-pf-old-price').value) || null,
        description: document.getElementById('adm-pf-description').value.trim(),
        badge: document.getElementById('adm-pf-badge').value.trim() || null,
        image_url: document.getElementById('adm-pf-image-url').value.trim() || null,
        image_bg: document.getElementById('adm-pf-image-bg').value.trim() || null,
        images, rating: parseFloat(document.getElementById('adm-pf-rating').value) || 5.0,
        reviews_count: parseInt(document.getElementById('adm-pf-reviews').value) || 0,
        sort_order: parseInt(document.getElementById('adm-pf-sort').value) || 0,
        stock: document.getElementById('adm-pf-stock').value.trim() !== '' ? parseInt(document.getElementById('adm-pf-stock').value) : null,
        stock_deactivated: false,
        active: document.getElementById('adm-pf-active').checked
      };
      // Auto-deactivate when stock reaches 0
      if (data.stock !== null && data.stock <= 0) {
        data.active = false;
        data.stock_deactivated = true;
        data.stock = 0;
      }
      try {
        if (editingId) { const { id, ...upd } = data; await supabase.updateProduct(editingId, upd); admNotify('Produto atualizado!'); }
        else { await supabase.createProduct(data); admNotify('Produto criado!'); }
        document.getElementById('adm-product-modal').classList.remove('open');
        await admLoadProducts(); admUpdateDashboard(); admRefreshSite();
      } catch(err) { admNotify('Erro: ' + (err.message || ''), 'error'); }
      finally { submitBtn.disabled = false; submitBtn.textContent = 'Salvar Produto'; }
    });

    // ---- DRAG & DROP IMAGE UPLOAD ----
    const dropzone = document.getElementById('adm-pf-dropzone');
    const dropEmpty = document.getElementById('adm-pf-drop-empty');
    const dropPreview = document.getElementById('adm-pf-drop-preview');
    const dropImg = document.getElementById('adm-pf-drop-img');
    const dropLoading = document.getElementById('adm-pf-drop-loading');
    const dropRemove = document.getElementById('adm-pf-drop-remove');
    const fileInput = document.getElementById('adm-pf-image-upload');
    const urlInput = document.getElementById('adm-pf-image-url');

    function admShowImagePreview(url) {
      dropImg.src = url;
      dropEmpty.style.display = 'none';
      dropPreview.style.display = '';
      dropLoading.style.display = 'none';
      urlInput.value = url;
    }
    function admClearImagePreview() {
      dropImg.src = '';
      dropEmpty.style.display = '';
      dropPreview.style.display = 'none';
      dropLoading.style.display = 'none';
      urlInput.value = '';
    }
    async function admUploadFile(file) {
      if (!file || !file.type.startsWith('image/')) { admNotify('Selecione uma imagem válida', 'error'); return; }
      if (file.size > 5 * 1024 * 1024) { admNotify('Imagem muito grande (máx. 5MB)', 'error'); return; }
      dropEmpty.style.display = 'none';
      dropPreview.style.display = 'none';
      dropLoading.style.display = '';
      try {
        const url = await supabase.uploadImage(file);
        admShowImagePreview(url);
        admNotify('Imagem enviada!');
      } catch(err) {
        admClearImagePreview();
        admNotify('Erro no upload: ' + err.message, 'error');
      }
    }

    // Click to browse
    dropzone?.addEventListener('click', (e) => {
      if (e.target.closest('.adm-dropzone-remove')) return;
      fileInput?.click();
    });
    fileInput?.addEventListener('change', (e) => { if (e.target.files[0]) admUploadFile(e.target.files[0]); e.target.value = ''; });

    // Drag & drop events
    ['dragenter', 'dragover'].forEach(evt => dropzone?.addEventListener(evt, (e) => { e.preventDefault(); e.stopPropagation(); dropzone.classList.add('drag-over'); }));
    ['dragleave', 'drop'].forEach(evt => dropzone?.addEventListener(evt, (e) => { e.preventDefault(); e.stopPropagation(); dropzone.classList.remove('drag-over'); }));
    dropzone?.addEventListener('drop', (e) => { const file = e.dataTransfer?.files?.[0]; if (file) admUploadFile(file); });

    // Remove image
    dropRemove?.addEventListener('click', (e) => { e.stopPropagation(); admClearImagePreview(); });

    // ---- COLOR PRESETS & PICKER ----
    const bgHidden = document.getElementById('adm-pf-image-bg');
    const bgPreview = document.getElementById('adm-pf-bg-preview');
    const color1 = document.getElementById('adm-pf-color1');
    const color2 = document.getElementById('adm-pf-color2');

    function admSetBg(gradient) {
      bgHidden.value = gradient;
      bgPreview.style.background = gradient;
      // Parse colors from gradient to update pickers
      const colors = gradient.match(/#[a-fA-F0-9]{6}/g);
      if (colors && colors.length >= 2) { color1.value = colors[0]; color2.value = colors[1]; }
      // Mark active swatch
      document.querySelectorAll('.adm-color-swatch').forEach(sw => sw.classList.toggle('active', sw.dataset.gradient === gradient));
    }
    function admUpdateBgFromPickers() {
      const g = `linear-gradient(135deg, ${color1.value}, ${color2.value})`;
      bgHidden.value = g;
      bgPreview.style.background = g;
      document.querySelectorAll('.adm-color-swatch').forEach(sw => sw.classList.remove('active'));
    }

    document.querySelectorAll('.adm-color-swatch').forEach(sw => sw.addEventListener('click', () => admSetBg(sw.dataset.gradient)));
    color1?.addEventListener('input', admUpdateBgFromPickers);
    color2?.addEventListener('input', admUpdateBgFromPickers);

    // ---- GALLERY MULTI-UPLOAD ----
    let admGalleryUrls = [];
    const galleryGrid = document.getElementById('adm-pf-gallery-grid');
    const galleryAddBtn = document.getElementById('adm-pf-gallery-add');
    const galleryUpload = document.getElementById('adm-pf-gallery-upload');

    function admRenderGallery() {
      if (!galleryGrid) return;
      galleryGrid.innerHTML = admGalleryUrls.map((url, i) => `
        <div class="adm-gallery-item">
          <img src="${url}" alt="Galeria ${i+1}">
          <button type="button" class="adm-gallery-remove" data-gallery-idx="${i}">✕</button>
        </div>
      `).join('');
    }

    galleryAddBtn?.addEventListener('click', () => galleryUpload?.click());
    galleryUpload?.addEventListener('change', async (e) => {
      const files = Array.from(e.target.files);
      if (!files.length) return;
      for (const file of files) {
        if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) continue;
        try {
          admNotify('Enviando imagem da galeria...', 'info');
          const url = await supabase.uploadImage(file);
          admGalleryUrls.push(url);
          admRenderGallery();
        } catch(err) { admNotify('Erro: ' + err.message, 'error'); }
      }
      admNotify('Galeria atualizada!');
      e.target.value = '';
    });
    galleryGrid?.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('[data-gallery-idx]');
      if (removeBtn) { admGalleryUrls.splice(parseInt(removeBtn.dataset.galleryIdx), 1); admRenderGallery(); }
    });
    // Auto slug
    document.getElementById('adm-pf-name')?.addEventListener('input', (e) => {
      const idField = document.getElementById('adm-pf-id');
      if (idField.readOnly) return;
      idField.value = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    });

    // ---- COUPONS ----
    async function admLoadCoupons() {
      try { admCoupons = await supabase.getCoupons(); } catch(e) { admNotify('Erro ao carregar cupons', 'error'); admCoupons = []; }
      admRenderCoupons();
    }

    function admRenderCoupons() {
      const tbody = document.getElementById('adm-coupons-tbody');
      const empty = document.getElementById('adm-coupons-empty');
      if (!admCoupons.length) { tbody.innerHTML = ''; empty.style.display = ''; return; }
      empty.style.display = 'none';
      tbody.innerHTML = admCoupons.map(c => {
        const typeLabel = c.type === 'percentage' ? 'Percentual' : 'Valor Fixo';
        const valueLabel = c.type === 'percentage' ? `${c.value}%` : admFormatPrice(c.value);
        const minLabel = c.min_purchase > 0 ? admFormatPrice(c.min_purchase) : '—';
        const usesLabel = c.max_uses ? `${c.current_uses || 0}/${c.max_uses}` : `${c.current_uses || 0}`;
        const expiresLabel = c.expires_at ? new Date(c.expires_at).toLocaleDateString('pt-BR') : '—';
        const statusHtml = c.active ? '<span class="adm-badge adm-badge--active">Ativo</span>' : '<span class="adm-badge adm-badge--inactive">Inativo</span>';
        return `<tr>
          <td><strong>${c.code}</strong></td><td>${typeLabel}</td><td>${valueLabel}</td><td>${minLabel}</td><td>${usesLabel}</td><td>${expiresLabel}</td><td>${statusHtml}</td>
          <td><div class="adm-cell-actions"><button class="adm-btn-sm adm-btn-edit" data-adm-edit-coupon="${c.id}">Editar</button><button class="adm-btn-sm adm-btn-delete" data-adm-delete-coupon="${c.id}">Excluir</button></div></td>
        </tr>`;
      }).join('');
    }

    document.getElementById('adm-coupons-tbody')?.addEventListener('click', async (e) => {
      const editBtn = e.target.closest('[data-adm-edit-coupon]');
      if (editBtn) { const c = admCoupons.find(x => x.id === editBtn.dataset.admEditCoupon); if (c) admOpenCouponModal(c); return; }
      const deleteBtn = e.target.closest('[data-adm-delete-coupon]');
      if (deleteBtn) { if (!confirm('Excluir este cupom?')) return; try { await supabase.deleteCoupon(deleteBtn.dataset.admDeleteCoupon); admNotify('Cupom excluído!'); await admLoadCoupons(); admUpdateDashboard(); } catch(e) { admNotify('Erro ao excluir', 'error'); } }
    });

    function admOpenCouponModal(coupon = null) {
      const modal = document.getElementById('adm-coupon-modal');
      const form = document.getElementById('adm-coupon-form');
      form.reset();
      document.getElementById('adm-cf-editing-id').value = '';
      document.getElementById('adm-cf-active').checked = true;
      if (coupon) {
        document.getElementById('adm-coupon-modal-title').textContent = 'Editar Cupom';
        document.getElementById('adm-cf-editing-id').value = coupon.id;
        document.getElementById('adm-cf-code').value = coupon.code || '';
        document.getElementById('adm-cf-type').value = coupon.type || 'percentage';
        document.getElementById('adm-cf-value').value = coupon.value || '';
        document.getElementById('adm-cf-min').value = coupon.min_purchase || 0;
        document.getElementById('adm-cf-max-uses').value = coupon.max_uses || '';
        document.getElementById('adm-cf-active').checked = coupon.active !== false;
        if (coupon.expires_at) document.getElementById('adm-cf-expires').value = coupon.expires_at.slice(0, 16);
      } else {
        document.getElementById('adm-coupon-modal-title').textContent = 'Novo Cupom';
      }
      modal.classList.add('open');
    }

    document.getElementById('adm-btn-add-coupon')?.addEventListener('click', () => admOpenCouponModal());

    document.getElementById('adm-coupon-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const editingId = document.getElementById('adm-cf-editing-id').value;
      const expiresRaw = document.getElementById('adm-cf-expires').value;
      const data = {
        code: document.getElementById('adm-cf-code').value.trim().toUpperCase(),
        type: document.getElementById('adm-cf-type').value,
        value: parseFloat(document.getElementById('adm-cf-value').value) || 0,
        min_purchase: parseFloat(document.getElementById('adm-cf-min').value) || 0,
        max_uses: parseInt(document.getElementById('adm-cf-max-uses').value) || null,
        active: document.getElementById('adm-cf-active').checked,
        expires_at: expiresRaw ? new Date(expiresRaw).toISOString() : null
      };
      try {
        if (editingId) { await supabase.updateCoupon(editingId, data); admNotify('Cupom atualizado!'); }
        else { await supabase.createCoupon(data); admNotify('Cupom criado!'); }
        document.getElementById('adm-coupon-modal').classList.remove('open');
        await admLoadCoupons(); admUpdateDashboard();
      } catch(err) { admNotify('Erro: ' + (err.message || ''), 'error'); }
    });

    // ---- OFFERS ----
    async function admLoadOffers() {
      try {
        const rows = await supabase.getSiteSettings();
        const offersRow = rows.find(r => r.key === 'offers');
        if (offersRow) {
          admOffers = typeof offersRow.value === 'string' ? JSON.parse(offersRow.value) : offersRow.value;
          if (!Array.isArray(admOffers)) admOffers = [];
        } else {
          // Migrate from old single special_offer format
          const oldOffer = rows.find(r => r.key === 'special_offer');
          if (oldOffer) {
            const val = typeof oldOffer.value === 'string' ? JSON.parse(oldOffer.value) : oldOffer.value;
            if (val && val.name) { admOffers = [val]; } else { admOffers = []; }
          } else { admOffers = []; }
        }
      } catch(e) { admOffers = []; }
      admRenderOffers();
    }

    function admRenderOffers() {
      const tbody = document.getElementById('adm-offers-tbody');
      const empty = document.getElementById('adm-offers-empty');
      if (!admOffers.length) { tbody.innerHTML = ''; empty.style.display = ''; return; }
      empty.style.display = 'none';
      tbody.innerHTML = admOffers.map((o, i) => {
        const savings = (parseFloat(o.old_price) || 0) - (parseFloat(o.price) || 0);
        const savingsHtml = savings > 0 ? `R$ ${savings.toFixed(0)}` : '\u2014';
        const statusHtml = o.active !== false
          ? '<span class="adm-badge adm-badge--active">Ativa</span>'
          : '<span class="adm-badge adm-badge--inactive">Inativa</span>';
        return `<tr>
          <td><strong>${o.name || '\u2014'}</strong></td>
          <td><small>${(o.description || '').substring(0, 60)}${(o.description || '').length > 60 ? '...' : ''}</small></td>
          <td>${admFormatPrice(o.price || 0)}</td>
          <td>${o.old_price ? admFormatPrice(o.old_price) : '\u2014'}</td>
          <td>${savingsHtml}</td>
          <td>${statusHtml}</td>
          <td><div class="adm-cell-actions">
            <button class="adm-btn-sm adm-btn-edit" data-adm-edit-offer="${i}">Editar</button>
            <button class="adm-btn-sm adm-btn-toggle" data-adm-toggle-offer="${i}">${o.active !== false ? 'Desativar' : 'Ativar'}</button>
            <button class="adm-btn-sm adm-btn-delete" data-adm-delete-offer="${i}">Excluir</button>
          </div></td>
        </tr>`;
      }).join('');
    }

    async function admSaveOffers() {
      try {
        await supabase.upsertSiteSetting('offers', admOffers);
        // Also update old special_offer for backwards compatibility (first active offer)
        const firstActive = admOffers.find(o => o.active !== false);
        await supabase.upsertSiteSetting('special_offer', firstActive || { active: false });
        admRefreshSettings();
      } catch(err) { admNotify('Erro ao salvar ofertas', 'error'); }
    }

    function admOpenOfferModal(offer = null, index = -1) {
      const modal = document.getElementById('adm-offer-modal');
      const form = document.getElementById('adm-offer-form');
      form.reset();
      document.getElementById('adm-of-editing-idx').value = index >= 0 ? index : '';
      document.getElementById('adm-of-active').checked = true;

      // Populate product select
      const productSelect = document.getElementById('adm-of-product-id');
      if (productSelect) {
        const currentVal = offer ? (offer.product_id || '') : '';
        productSelect.innerHTML = '<option value="">Nenhum produto vinculado</option>' +
          admProducts.map(p => `<option value="${p.id}" ${p.id === currentVal ? 'selected' : ''}>${p.name}</option>`).join('');
      }

      if (offer) {
        document.getElementById('adm-offer-modal-title').textContent = 'Editar Oferta';
        document.getElementById('adm-of-active').checked = offer.active !== false;
        document.getElementById('adm-of-name').value = offer.name || '';
        document.getElementById('adm-of-desc').value = offer.description || '';
        document.getElementById('adm-of-price').value = offer.price || '';
        document.getElementById('adm-of-old-price').value = offer.old_price || '';
        document.getElementById('adm-of-product-id').value = offer.product_id || '';
        const imgEl = document.getElementById('adm-of-image');
        if (imgEl) imgEl.value = offer.image_url || '';
      } else {
        document.getElementById('adm-offer-modal-title').textContent = 'Nova Oferta';
      }
      modal.classList.add('open');
    }

    document.getElementById('adm-btn-add-offer')?.addEventListener('click', () => admOpenOfferModal());

    document.getElementById('adm-offer-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const idx = document.getElementById('adm-of-editing-idx').value;
      const offerData = {
        active: document.getElementById('adm-of-active').checked,
        name: document.getElementById('adm-of-name').value.trim(),
        description: document.getElementById('adm-of-desc').value.trim(),
        price: parseFloat(document.getElementById('adm-of-price').value) || 0,
        old_price: parseFloat(document.getElementById('adm-of-old-price').value) || 0,
        product_id: document.getElementById('adm-of-product-id').value.trim(),
        image_url: (document.getElementById('adm-of-image')?.value || '').trim()
      };
      if (idx !== '') {
        admOffers[parseInt(idx)] = offerData;
      } else {
        admOffers.push(offerData);
      }
      await admSaveOffers();
      admRenderOffers();
      document.getElementById('adm-offer-modal').classList.remove('open');
      admNotify(idx !== '' ? 'Oferta atualizada!' : 'Oferta criada!');
    });

    document.getElementById('adm-offers-tbody')?.addEventListener('click', async (e) => {
      const editBtn = e.target.closest('[data-adm-edit-offer]');
      if (editBtn) {
        const i = parseInt(editBtn.dataset.admEditOffer);
        if (admOffers[i]) admOpenOfferModal(admOffers[i], i);
        return;
      }
      const toggleBtn = e.target.closest('[data-adm-toggle-offer]');
      if (toggleBtn) {
        const i = parseInt(toggleBtn.dataset.admToggleOffer);
        if (admOffers[i]) {
          admOffers[i].active = admOffers[i].active === false ? true : false;
          await admSaveOffers();
          admRenderOffers();
          admNotify(admOffers[i].active ? 'Oferta ativada!' : 'Oferta desativada!');
        }
        return;
      }
      const deleteBtn = e.target.closest('[data-adm-delete-offer]');
      if (deleteBtn) {
        if (!confirm('Excluir esta oferta?')) return;
        admOffers.splice(parseInt(deleteBtn.dataset.admDeleteOffer), 1);
        await admSaveOffers();
        admRenderOffers();
        admNotify('Oferta excluida!');
      }
    });

    // ---- ORDERS ----
    async function admLoadOrders() {
      try {
        admOrders = await supabase.getOrders();
      } catch(e) {
        console.error('Error loading orders:', e);
        admOrders = [];
      }
      admRenderOrders();
      admUpdateDashboard();
    }

    function admFormatDate(dateStr) {
      if (!dateStr) return '\u2014';
      const d = new Date(dateStr);
      return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }) + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    }

    function admOrderStatusBadge(status) {
      const map = {
        'pending': ['Pendente', 'adm-badge--pending'],
        'paid': ['Pago', 'adm-badge--paid'],
        'delivered': ['Entregue', 'adm-badge--delivered'],
        'canceled': ['Cancelado', 'adm-badge--canceled']
      };
      const [label, cls] = map[status] || [status, ''];
      return `<span class="adm-badge ${cls}">${label}</span>`;
    }

    function admRenderOrders() {
      const tbody = document.getElementById('adm-orders-tbody');
      const empty = document.getElementById('adm-orders-empty');
      if (!tbody) return;

      const filter = document.getElementById('adm-orders-filter')?.value || 'all';
      const filtered = filter === 'all' ? admOrders : admOrders.filter(o => o.status === filter);

      if (!filtered.length) {
        tbody.innerHTML = '';
        if (empty) empty.style.display = '';
        return;
      }
      if (empty) empty.style.display = 'none';

      tbody.innerHTML = filtered.map(o => {
        const total = parseFloat(o.total_price) || 0;
        const customerName = o.customer_name || o.user_email || 'Visitante';
        return `<tr style="${o.status === 'canceled' ? 'opacity:0.5;' : ''}">
          <td><strong>#${o.id}</strong></td>
          <td><small>${admFormatDate(o.created_at)}</small></td>
          <td><small>${customerName}</small></td>
          <td><small>${o.whatsapp_message ? o.whatsapp_message.split('\n').filter(l => /^\d+\.\s\*/.test(l.trim())).length + ' item(ns)' : '\u2014'}</small></td>
          <td><strong>${admFormatPrice(total)}</strong></td>
          <td>${admOrderStatusBadge(o.status)}</td>
          <td><div class="adm-cell-actions">
            <button class="adm-btn-sm adm-btn-edit" data-adm-view-order="${o.id}">Detalhes</button>
            ${o.status === 'pending' ? `<button class="adm-btn-sm adm-btn-confirm" style="background:#059669;color:#fff;" data-adm-confirm-order="${o.id}">Confirmar</button>` : ''}
            ${o.status === 'pending' ? `<button class="adm-btn-sm adm-btn-delete" data-adm-cancel-order="${o.id}">Cancelar</button>` : ''}
          </div></td>
        </tr>`;
      }).join('');
    }

    // Order filter
    document.getElementById('adm-orders-filter')?.addEventListener('change', admRenderOrders);
    document.getElementById('adm-btn-refresh-orders')?.addEventListener('click', admLoadOrders);

    // Order actions (delegation on tbody)
    document.getElementById('adm-orders-tbody')?.addEventListener('click', async (e) => {
      const viewBtn = e.target.closest('[data-adm-view-order]');
      if (viewBtn) {
        const orderId = parseInt(viewBtn.dataset.admViewOrder);
        await admShowOrderDetail(orderId);
        return;
      }
      const confirmBtn = e.target.closest('[data-adm-confirm-order]');
      if (confirmBtn) {
        const orderId = parseInt(confirmBtn.dataset.admConfirmOrder);
        admOpenTrackingModal(orderId);
        return;
      }
      const cancelBtn = e.target.closest('[data-adm-cancel-order]');
      if (cancelBtn) {
        const orderId = parseInt(cancelBtn.dataset.admCancelOrder);
        if (!confirm('Cancelar este pedido?')) return;
        await admCancelOrder(orderId);
        return;
      }
    });

    async function admShowOrderDetail(orderId) {
      const order = admOrders.find(o => o.id === orderId);
      if (!order) return;

      // Load order items
      let items = [];
      try {
        items = await supabase.getOrderItems(orderId);
      } catch(e) {
        console.error('Error loading order items:', e);
      }

      const modal = document.getElementById('adm-order-modal');
      const body = document.getElementById('adm-order-detail-body');
      const actions = document.getElementById('adm-order-detail-actions');
      const title = document.getElementById('adm-order-modal-title');

      title.textContent = `Pedido #${order.id}`;

      const total = parseFloat(order.total_price) || 0;
      const discount = parseFloat(order.discount) || 0;
      const customerName = order.customer_name || order.user_email || 'Visitante';

      body.innerHTML = `
        <div class="adm-order-detail-section">
          <h4>Informacoes</h4>
          <div class="adm-order-detail-info">
            <p><strong>Status:</strong> ${admOrderStatusBadge(order.status)}</p>
            <p><strong>Data:</strong> ${admFormatDate(order.created_at)}</p>
            <p><strong>Cliente:</strong> ${customerName}</p>
            <p><strong>E-mail:</strong> ${order.user_email || '\u2014'}</p>
            ${order.coupon_code ? `<p><strong>Cupom:</strong> ${order.coupon_code}</p>` : ''}
            ${discount > 0 ? `<p><strong>Desconto:</strong> ${admFormatPrice(discount)}</p>` : ''}
            <p><strong>Total:</strong> <strong style="color:#059669;">${admFormatPrice(total)}</strong></p>
            ${order.tracking_code ? `<p><strong>Rastreio:</strong> <code style="background:#ede9fe;padding:2px 8px;border-radius:4px;">${order.tracking_code}</code></p>` : ''}
            ${order.no_tracking ? `<p><strong>Rastreio:</strong> Sem rastreio (retirada/entrega local)</p>` : ''}
          </div>
        </div>
        <div class="adm-order-detail-section">
          <h4>Itens do Pedido</h4>
          <table class="adm-order-items-list">
            <thead><tr><th>Produto</th><th>Qtd</th><th>Preco Unit.</th><th>Subtotal</th></tr></thead>
            <tbody>
              ${items.map(item => `<tr>
                <td>${item.product_name}</td>
                <td>${item.quantity}</td>
                <td>${admFormatPrice(item.price_at_order)}</td>
                <td>${admFormatPrice(item.price_at_order * item.quantity)}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        ${order.whatsapp_message ? `<div class="adm-order-detail-section">
          <h4>Mensagem WhatsApp</h4>
          <div class="adm-order-whatsapp-msg">${order.whatsapp_message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
        </div>` : ''}
      `;

      // Actions based on status
      let actionsHtml = '<button type="button" class="adm-btn-cancel" data-close-modal="adm-order-modal">Fechar</button>';
      if (order.status === 'pending') {
        actionsHtml = `
          <button type="button" class="adm-btn-cancel-order" id="adm-order-cancel-btn" data-order-id="${order.id}">Cancelar Pedido</button>
          <button type="button" class="adm-btn-confirm" id="adm-order-confirm-btn" data-order-id="${order.id}">Confirmar Pagamento</button>
          <button type="button" class="adm-btn-cancel" data-close-modal="adm-order-modal">Fechar</button>
        `;
      }
      actions.innerHTML = actionsHtml;

      // Attach modal action listeners
      const confirmModalBtn = document.getElementById('adm-order-confirm-btn');
      if (confirmModalBtn) {
        confirmModalBtn.addEventListener('click', () => {
          modal.classList.remove('open');
          admOpenTrackingModal(parseInt(confirmModalBtn.dataset.orderId));
        });
      }
      const cancelModalBtn = document.getElementById('adm-order-cancel-btn');
      if (cancelModalBtn) {
        cancelModalBtn.addEventListener('click', async () => {
          if (!confirm('Cancelar este pedido?')) return;
          modal.classList.remove('open');
          await admCancelOrder(parseInt(cancelModalBtn.dataset.orderId));
        });
      }
      modal.classList.add('open');
    }

    async function admCancelOrder(orderId) {
      try {
        await supabase.updateOrderStatus(orderId, 'canceled');
        await admLoadOrders();
        admNotify('Pedido cancelado.');
      } catch (err) {
        console.error('Error canceling order:', err);
        admNotify('Erro ao cancelar pedido: ' + (err.message || ''), 'error');
      }
    }

    function admOpenTrackingModal(orderId) {
      const trackingModal = document.getElementById('adm-tracking-modal');
      if (trackingModal) {
        document.getElementById('adm-tracking-order-id').value = orderId;
        document.getElementById('adm-tracking-code').value = '';
        document.getElementById('adm-tracking-none').checked = false;
        document.getElementById('adm-tracking-code').disabled = false;
        trackingModal.classList.add('open');
      }
    }

    // Tracking modal logic
    document.getElementById('adm-tracking-none')?.addEventListener('change', (e) => {
      const codeInput = document.getElementById('adm-tracking-code');
      if (codeInput) codeInput.disabled = e.target.checked;
    });

    document.getElementById('adm-tracking-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const orderId = parseInt(document.getElementById('adm-tracking-order-id').value);
      const trackingCode = document.getElementById('adm-tracking-code').value.trim();
      const noTracking = document.getElementById('adm-tracking-none').checked;

      if (!trackingCode && !noTracking) {
        admNotify('Informe o codigo de rastreio ou marque "Sem rastreio"', 'error');
        return;
      }

      try {
        // 1. Update order with tracking + status delivered
        const updateData = { status: 'delivered' };
        if (noTracking) {
          updateData.no_tracking = true;
          updateData.tracking_code = null;
        } else {
          updateData.tracking_code = trackingCode;
          updateData.no_tracking = false;
        }
        await supabase.updateOrder(orderId, updateData);

        // 2. Decrement stock for each item
        const items = await supabase.getOrderItems(orderId);
        for (const item of items) {
          if (!item.product_id) continue;
          try {
            const product = await supabase.getProductById(item.product_id);
            if (!product) continue;
            if (product.stock !== null && product.stock !== undefined) {
              let newStock = (parseInt(product.stock) || 0) - (item.quantity || 1);
              if (newStock < 0) newStock = 0;
              const stockData = { stock: newStock };
              if (newStock <= 0) {
                stockData.active = false;
                stockData.stock_deactivated = true;
              }
              await supabase.updateProduct(item.product_id, stockData);
            }
          } catch (stockErr) {
            console.error(`Error updating stock for ${item.product_id}:`, stockErr);
          }
        }

        document.getElementById('adm-tracking-modal')?.classList.remove('open');
        await admLoadOrders();
        await admLoadProducts();
        admRenderProducts();
        admRefreshSite();
        admNotify('Pagamento confirmado! ' + (noTracking ? 'Sem rastreio.' : 'Rastreio: ' + trackingCode));
      } catch (err) {
        console.error('Error confirming payment:', err);
        admNotify('Erro: ' + (err.message || ''), 'error');
      }
    });

    // ---- SETTINGS ----
    async function admLoadSettings() {
      try {
        const rows = await supabase.getSiteSettings();
        admSettings = {};
        rows.forEach(r => { admSettings[r.key] = typeof r.value === 'string' ? JSON.parse(r.value) : r.value; });
      } catch(e) { admSettings = {}; }
      admFillSettings();
    }

    function admFillSettings() {
      const contact = admSettings.contact || {};
      document.getElementById('adm-set-whatsapp').value = contact.whatsapp || '';
      document.getElementById('adm-set-whatsapp-display').value = contact.whatsapp_display || '';
      document.getElementById('adm-set-email').value = contact.email || '';
      document.getElementById('adm-set-hours').value = contact.hours || '';
      const social = admSettings.social || {};
      document.getElementById('adm-set-instagram').value = social.instagram || '';
      document.getElementById('adm-set-facebook').value = social.facebook || '';
      document.getElementById('adm-set-tiktok').value = social.tiktok || '';
      const promo = admSettings.promo_banner || {};
      document.getElementById('adm-set-promo-active').checked = promo.active !== false;
      document.getElementById('adm-set-promo-text').value = promo.text || '';

      // Hero image
      const hero = admSettings.hero_image || {};
      const heroUrl = hero.url || '';
      const heroPreview = document.getElementById('adm-hero-drop-preview');
      const heroEmpty = document.getElementById('adm-hero-drop-empty');
      const heroImg = document.getElementById('adm-hero-drop-img');
      const heroHidden = document.getElementById('adm-hero-image-url');
      if (heroUrl && heroPreview && heroEmpty && heroImg) {
        heroImg.src = heroUrl;
        heroPreview.style.display = '';
        heroEmpty.style.display = 'none';
        if (heroHidden) heroHidden.value = heroUrl;
      } else if (heroPreview && heroEmpty) {
        heroPreview.style.display = 'none';
        heroEmpty.style.display = '';
        if (heroHidden) heroHidden.value = '';
      }
    }

    document.getElementById('adm-form-contact')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const value = { whatsapp: document.getElementById('adm-set-whatsapp').value.trim(), whatsapp_display: document.getElementById('adm-set-whatsapp-display').value.trim(), email: document.getElementById('adm-set-email').value.trim(), hours: document.getElementById('adm-set-hours').value.trim() };
      try { await supabase.upsertSiteSetting('contact', value); admSettings.contact = value; admNotify('Contato atualizado!'); admRefreshSettings(); } catch(err) { admNotify('Erro ao salvar', 'error'); }
    });

    document.getElementById('adm-form-social')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const value = { instagram: document.getElementById('adm-set-instagram').value.trim(), facebook: document.getElementById('adm-set-facebook').value.trim(), tiktok: document.getElementById('adm-set-tiktok').value.trim() };
      try { await supabase.upsertSiteSetting('social', value); admSettings.social = value; admNotify('Redes atualizadas!'); } catch(err) { admNotify('Erro ao salvar', 'error'); }
    });

    document.getElementById('adm-form-promo')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const value = { active: document.getElementById('adm-set-promo-active').checked, text: document.getElementById('adm-set-promo-text').value.trim() };
      try { await supabase.upsertSiteSetting('promo_banner', value); admSettings.promo_banner = value; admNotify('Banner atualizado!'); admRefreshSettings(); } catch(err) { admNotify('Erro ao salvar', 'error'); }
    });

    // ---- HERO IMAGE UPLOAD ----
    (function initHeroImageUpload() {
      const dropzone = document.getElementById('adm-hero-dropzone');
      const fileInput = document.getElementById('adm-hero-image-upload');
      const emptyState = document.getElementById('adm-hero-drop-empty');
      const previewState = document.getElementById('adm-hero-drop-preview');
      const previewImg = document.getElementById('adm-hero-drop-img');
      const removeBtn = document.getElementById('adm-hero-drop-remove');
      const loadingState = document.getElementById('adm-hero-drop-loading');
      const hiddenUrl = document.getElementById('adm-hero-image-url');
      if (!dropzone) return;

      dropzone.addEventListener('click', (e) => {
        if (e.target.closest('.adm-dropzone-remove')) return;
        fileInput.click();
      });
      dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
      dropzone.addEventListener('drop', (e) => { e.preventDefault(); dropzone.classList.remove('dragover'); if (e.dataTransfer.files.length) handleHeroFile(e.dataTransfer.files[0]); });
      fileInput.addEventListener('change', () => { if (fileInput.files.length) handleHeroFile(fileInput.files[0]); });
      removeBtn?.addEventListener('click', (e) => { e.stopPropagation(); previewState.style.display = 'none'; emptyState.style.display = ''; previewImg.src = ''; hiddenUrl.value = ''; });

      async function handleHeroFile(file) {
        if (file.size > 5 * 1024 * 1024) { admNotify('Imagem muito grande (máx. 5MB)', 'error'); return; }
        emptyState.style.display = 'none';
        previewState.style.display = 'none';
        loadingState.style.display = 'flex';
        try {
          const url = await supabase.uploadImage(file);
          previewImg.src = url;
          hiddenUrl.value = url;
          previewState.style.display = '';
        } catch (err) {
          emptyState.style.display = '';
          admNotify('Erro no upload: ' + err.message, 'error');
        } finally {
          loadingState.style.display = 'none';
          fileInput.value = '';
        }
      }
    })();

    document.getElementById('adm-form-hero-image')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const url = document.getElementById('adm-hero-image-url').value.trim();
      const value = { url: url };
      try {
        await supabase.upsertSiteSetting('hero_image', value);
        admSettings.hero_image = value;
        admNotify('Imagem do Hero atualizada!');
        admRefreshSettings();
      } catch (err) {
        admNotify('Erro ao salvar: ' + (err.message || ''), 'error');
      }
    });

    // ---- REPORTS / SALES DASHBOARD ----
    document.getElementById('adm-report-period')?.addEventListener('change', admRenderReports);

    function admRenderReports() {
      const periodVal = document.getElementById('adm-report-period')?.value || '30';
      const now = new Date();
      let startDate = null;
      if (periodVal !== 'all') {
        const days = parseInt(periodVal);
        startDate = new Date(now.getTime() - days * 86400000);
      }

      const filtered = startDate
        ? admOrders.filter(o => new Date(o.created_at) >= startDate)
        : admOrders;

      const paid = filtered.filter(o => o.status === 'delivered' || o.status === 'paid');
      const totalRevenue = paid.reduce((s, o) => s + (parseFloat(o.total_price) || 0), 0);
      const avgTicket = paid.length ? totalRevenue / paid.length : 0;
      const delivered = filtered.filter(o => o.status === 'delivered').length;
      const canceled = filtered.filter(o => o.status === 'canceled').length;
      const conversion = filtered.length ? ((delivered + paid.length) / filtered.length * 100) : 0;

      // KPIs
      document.getElementById('rpt-revenue').textContent = admFormatPrice(totalRevenue);
      document.getElementById('rpt-orders').textContent = filtered.length;
      document.getElementById('rpt-avg').textContent = admFormatPrice(avgTicket);
      document.getElementById('rpt-delivered').textContent = delivered;
      document.getElementById('rpt-canceled').textContent = canceled;
      document.getElementById('rpt-conversion').textContent = conversion.toFixed(0) + '%';

      // Revenue trend
      const trendEl = document.getElementById('rpt-revenue-trend');
      if (trendEl && startDate) {
        const prevStart = new Date(startDate.getTime() - (now.getTime() - startDate.getTime()));
        const prevPaid = admOrders.filter(o => {
          const d = new Date(o.created_at);
          return d >= prevStart && d < startDate && (o.status === 'delivered' || o.status === 'paid');
        });
        const prevRevenue = prevPaid.reduce((s, o) => s + (parseFloat(o.total_price) || 0), 0);
        if (prevRevenue > 0) {
          const pct = ((totalRevenue - prevRevenue) / prevRevenue * 100).toFixed(0);
          const isUp = totalRevenue >= prevRevenue;
          trendEl.innerHTML = `<span style="color:${isUp ? '#059669' : '#dc2626'}">${isUp ? '\u2191' : '\u2193'} ${Math.abs(pct)}% vs per\u00edodo anterior</span>`;
        } else {
          trendEl.innerHTML = '';
        }
      }

      // Revenue by day chart (bar chart using CSS)
      renderRevenueChart(paid, startDate, now);

      // Status donut chart
      renderStatusChart(filtered);

      // Top products
      renderTopProductsChart(paid);

      // Categories chart
      renderCategoriesChart(paid);

      // Recent orders table
      renderRecentOrders(filtered.slice(0, 10));
    }

    function renderRevenueChart(orders, startDate, endDate) {
      const container = document.getElementById('adm-chart-revenue');
      if (!container) return;

      // Group by day
      const dayMap = {};
      const days = startDate ? Math.ceil((endDate - startDate) / 86400000) : 30;
      const displayDays = Math.min(days, 30); // show max 30 bars

      // Build day buckets
      for (let i = displayDays - 1; i >= 0; i--) {
        const d = new Date(endDate.getTime() - i * 86400000);
        const key = d.toISOString().slice(0, 10);
        dayMap[key] = 0;
      }

      orders.forEach(o => {
        const key = new Date(o.created_at).toISOString().slice(0, 10);
        if (dayMap[key] !== undefined) dayMap[key] += parseFloat(o.total_price) || 0;
      });

      const values = Object.values(dayMap);
      const maxVal = Math.max(...values, 1);
      const labels = Object.keys(dayMap);

      container.innerHTML = `<div class="adm-bar-chart">${labels.map((lbl, i) => {
        const pct = (values[i] / maxVal * 100).toFixed(0);
        const dayLabel = new Date(lbl + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        return `<div class="adm-bar-col" title="${dayLabel}: ${admFormatPrice(values[i])}">
          <div class="adm-bar" style="height:${pct}%"></div>
          <span class="adm-bar-lbl">${labels.length <= 15 ? dayLabel : (i % Math.ceil(labels.length / 10) === 0 ? dayLabel : '')}</span>
        </div>`;
      }).join('')}</div>`;
    }

    function renderStatusChart(orders) {
      const container = document.getElementById('adm-chart-status');
      if (!container) return;

      const statuses = {
        pending: { label: 'Pendente', color: '#f59e0b', count: 0 },
        paid: { label: 'Pago', color: '#10b981', count: 0 },
        delivered: { label: 'Entregue', color: '#3b82f6', count: 0 },
        canceled: { label: 'Cancelado', color: '#ef4444', count: 0 }
      };

      orders.forEach(o => {
        if (statuses[o.status]) statuses[o.status].count++;
      });

      const total = orders.length || 1;
      const items = Object.values(statuses).filter(s => s.count > 0);

      // Build conic-gradient segments
      let gradParts = [];
      let cumPct = 0;
      items.forEach(s => {
        const pct = (s.count / total * 100);
        gradParts.push(`${s.color} ${cumPct}% ${cumPct + pct}%`);
        cumPct += pct;
      });
      if (!gradParts.length) gradParts.push('#e2e8f0 0% 100%');

      container.innerHTML = `
        <div class="adm-donut-chart">
          <div class="adm-donut" style="background:conic-gradient(${gradParts.join(', ')})">
            <div class="adm-donut-hole"><strong>${orders.length}</strong><small>pedidos</small></div>
          </div>
          <div class="adm-donut-legend">${items.map(s =>
            `<div class="adm-legend-item"><span class="adm-legend-dot" style="background:${s.color}"></span>${s.label}: <strong>${s.count}</strong> (${(s.count/total*100).toFixed(0)}%)</div>`
          ).join('')}</div>
        </div>`;
    }

    function renderTopProductsChart(paidOrders) {
      const container = document.getElementById('adm-chart-top-products');
      if (!container) return;

      // Parse product names from whatsapp messages
      const productCount = {};
      paidOrders.forEach(o => {
        if (o.whatsapp_message) {
          o.whatsapp_message.split('\n').forEach(line => {
            const match = line.trim().match(/^\d+\.\s\*(.+?)\*/);
            if (match) {
              const name = match[1].trim();
              productCount[name] = (productCount[name] || 0) + 1;
            }
          });
        }
      });

      const sorted = Object.entries(productCount).sort((a, b) => b[1] - a[1]).slice(0, 8);
      const maxCount = sorted.length ? sorted[0][1] : 1;

      if (!sorted.length) {
        container.innerHTML = '<p style="color:#94a3b8;text-align:center;padding:20px;">Sem dados de produtos vendidos.</p>';
        return;
      }

      container.innerHTML = `<div class="adm-hbar-chart">${sorted.map(([name, count]) => {
        const pct = (count / maxCount * 100).toFixed(0);
        return `<div class="adm-hbar-row">
          <span class="adm-hbar-label">${name}</span>
          <div class="adm-hbar-track"><div class="adm-hbar-fill" style="width:${pct}%"></div></div>
          <span class="adm-hbar-val">${count}</span>
        </div>`;
      }).join('')}</div>`;
    }

    function renderCategoriesChart(paidOrders) {
      const container = document.getElementById('adm-chart-categories');
      if (!container) return;

      // Map products to categories
      const catRevenue = {};
      paidOrders.forEach(o => {
        if (o.whatsapp_message) {
          o.whatsapp_message.split('\n').forEach(line => {
            const match = line.trim().match(/^\d+\.\s\*(.+?)\*.*?R\$\s*([\d.,]+)/);
            if (match) {
              const productName = match[1].trim();
              const price = parseFloat(match[2].replace(',', '.')) || 0;
              // Find product category
              const product = admProducts.find(p => p.name === productName);
              const catSlug = product?.category_slug || 'outros';
              const catName = ADM_CATEGORIES[catSlug] || catSlug || 'Outros';
              catRevenue[catName] = (catRevenue[catName] || 0) + price;
            }
          });
        }
      });

      const items = Object.entries(catRevenue).sort((a, b) => b[1] - a[1]);
      const total = items.reduce((s, [,v]) => s + v, 0) || 1;

      if (!items.length) {
        container.innerHTML = '<p style="color:#94a3b8;text-align:center;padding:20px;">Sem dados de vendas por categoria.</p>';
        return;
      }

      const colors = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#06b6d4', '#84cc16'];
      let gradParts = [];
      let cumPct = 0;
      items.forEach(([, val], i) => {
        const pct = val / total * 100;
        const color = colors[i % colors.length];
        gradParts.push(`${color} ${cumPct}% ${cumPct + pct}%`);
        cumPct += pct;
      });

      container.innerHTML = `
        <div class="adm-donut-chart">
          <div class="adm-donut" style="background:conic-gradient(${gradParts.join(', ')})">
            <div class="adm-donut-hole"><strong>${admFormatPrice(total)}</strong><small>total</small></div>
          </div>
          <div class="adm-donut-legend">${items.map(([name, val], i) =>
            `<div class="adm-legend-item"><span class="adm-legend-dot" style="background:${colors[i % colors.length]}"></span>${name}: <strong>${admFormatPrice(val)}</strong></div>`
          ).join('')}</div>
        </div>`;
    }

    function renderRecentOrders(orders) {
      const tbody = document.getElementById('adm-report-recent-tbody');
      if (!tbody) return;
      if (!orders.length) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#94a3b8;padding:20px;">Nenhum pedido no per\u00edodo.</td></tr>';
        return;
      }
      tbody.innerHTML = orders.map(o => `<tr>
        <td><strong>#${o.id}</strong></td>
        <td><small>${admFormatDate(o.created_at)}</small></td>
        <td><small>${o.customer_name || o.user_email || 'Visitante'}</small></td>
        <td><strong>${admFormatPrice(parseFloat(o.total_price) || 0)}</strong></td>
        <td>${admOrderStatusBadge(o.status)}</td>
      </tr>`).join('');
    }

    // ---- MODAL CLOSE (delegation) ----
    admOverlay.addEventListener('click', (e) => {
      const closeTarget = e.target.closest('[data-close-modal]');
      if (closeTarget) { document.getElementById(closeTarget.dataset.closeModal)?.classList.remove('open'); return; }
      if (e.target.classList.contains('adm-modal-bg')) { e.target.closest('.adm-modal')?.classList.remove('open'); }
    });

    // ---- REAL-TIME SITE REFRESH ----
    function admRefreshSite() {
      // Reload products on the main site in real-time
      loadProductsFromDB();
    }

    function admRefreshSettings() {
      // Reload settings on the main site in real-time
      loadSiteSettings();
    }

  })();

});
