'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS, SHOP_CATEGORIES, COLLECTIONS_LIST, BUSINESS } from '@/constants/business';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | null>(null);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenu(null);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
          transparent
            ? 'bg-transparent'
            : 'border-b border-border bg-white/90 backdrop-blur-xl'
        )}
        onMouseLeave={() => setMegaMenu(null)}
      >
        <div className="container-luxury">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className={cn(
                  'font-display text-xl font-bold tracking-tight transition-colors lg:text-2xl',
                  transparent ? 'text-white' : 'text-primary'
                )}
              >
                ThreadCraft
              </Link>
              <nav className="hidden items-center gap-1 lg:flex">
                {NAV_LINKS.map((link) => (
                  <div
                    key={link.href}
                    onMouseEnter={() =>
                      setMegaMenu(link.megaMenu ? link.megaMenu : null)
                    }
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center px-3 py-2 text-sm font-medium transition-colors',
                        transparent
                          ? 'text-white/90 hover:text-white'
                          : 'text-foreground hover:text-accent',
                        pathname === link.href && !transparent && 'text-accent'
                      )}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full transition-colors',
                  transparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'
                )}
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                aria-label="Wishlist"
                className={cn(
                  'hidden h-10 w-10 items-center justify-center rounded-full transition-colors sm:flex',
                  transparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'
                )}
              >
                <Heart className="h-5 w-5" />
              </button>
              <button
                aria-label="Shopping cart"
                className={cn(
                  'relative flex h-10 w-10 items-center justify-center rounded-full transition-colors',
                  transparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'
                )}
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                  0
                </span>
              </button>
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden',
                  transparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'
                )}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {megaMenu === 'shop' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-full hidden border-b border-border bg-white shadow-xl lg:block"
            >
              <div className="container-luxury py-8">
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Shop by Category
                    </h3>
                    <ul className="space-y-2">
                      {SHOP_CATEGORIES.map((cat) => (
                        <li key={cat.href}>
                          <Link
                            href={cat.href}
                            className="text-sm text-foreground transition-colors hover:text-accent"
                          >
                            {cat.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Featured
                    </h3>
                    <ul className="space-y-2">
                      <li><Link href="/shop?filter=new" className="text-sm hover:text-accent">New Arrivals</Link></li>
                      <li><Link href="/shop?filter=best" className="text-sm hover:text-accent">Best Sellers</Link></li>
                      <li><Link href="/shop?filter=trending" className="text-sm hover:text-accent">Trending</Link></li>
                      <li><Link href="/shop?filter=sale" className="text-sm hover:text-accent">On Sale</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <Link href="/shop/women" className="group relative block aspect-[16/9] overflow-hidden rounded-lg">
                      <Image
                        src="https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Featured collection"
                        fill
                        sizes="400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-xs uppercase tracking-wider">New Season</p>
                        <p className="font-display text-lg font-semibold">Evening Edit</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {megaMenu === 'collections' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-full hidden border-b border-border bg-white shadow-xl lg:block"
            >
              <div className="container-luxury py-8">
                <div className="grid grid-cols-4 gap-6">
                  {COLLECTIONS_LIST.map((col) => {
                    const slug = col.href.split('/').pop() || '';
                    return (
                    <Link
                      key={col.href}
                      href={col.href}
                      className="group flex flex-col gap-2"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={`https://images.pexels.com/photos/${getCollectionImage(slug)}/pexels-photo-${getCollectionImage(slug)}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                          alt={col.label}
                          fill
                          sizes="200px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-sm font-medium transition-colors group-hover:text-accent">
                        {col.label}
                      </span>
                    </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center bg-white/95 pt-24 backdrop-blur-xl"
          >
            <button
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="w-full max-w-2xl px-6">
              <div className="flex items-center gap-3 border-b-2 border-primary pb-4">
                <Search className="h-6 w-6 text-muted-foreground" />
                <input
                  autoFocus
                  placeholder="Search for products, collections, styles..."
                  className="w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Silk Saree', 'Blazer', 'Leather Bag', 'Sneakers', 'Wedding', 'Streetwear'].map((s) => (
                    <Link
                      key={s}
                      href={`/shop?q=${s.toLowerCase()}`}
                      onClick={() => setSearchOpen(false)}
                      className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[85%] max-w-sm flex-col bg-white lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="font-display text-lg font-bold">ThreadCraft</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-5 py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between border-b border-border py-3.5 text-base font-medium"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
                <div className="mt-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Shop
                  </p>
                  {SHOP_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-accent"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
                <p>{BUSINESS.phone}</p>
                <p>{BUSINESS.email}</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function getCollectionImage(slug: string): number {
  const map: Record<string, number> = {
    summer: 1844644,
    winter: 2703202,
    festive: 2589653,
    wedding: 1755428,
    'office-wear': 769733,
    casual: 1183266,
    luxury: 904350,
    streetwear: 37297401,
  };
  return map[slug] || 767972;
}
