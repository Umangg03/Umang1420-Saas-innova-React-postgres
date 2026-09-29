import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Bell,
  Box,
  Check,
  ChevronDown,
  CircleHelp,
  Command,
  Download,
  Ellipsis,
  Eye,
  EyeOff,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Mail,
  Plus,
  Search,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  Tag,
  TrendingUp,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type Status = "In stock" | "Low stock" | "Out of stock";
type Product = {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: string;
  stock: string;
  image: string;
  status: Status;
  updated: string;
};
type Draft = Pick<
  Product,
  "name" | "category" | "sku" | "price" | "stock" | "image"
>;
type Filter = "All products" | Status;

const initialProducts: Product[] = [
  {
    id: "PR-1048",
    name: "Studio headphones",
    category: "Electronics",
    sku: "FN-EL-048",
    price: "189.00",
    stock: "24",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=120&q=80",
    status: "In stock",
    updated: "Today, 10:42 AM",
  },
  {
    id: "PR-1047",
    name: "Canvas weekend bag",
    category: "Accessories",
    sku: "FN-AC-047",
    price: "84.00",
    stock: "8",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=120&q=80",
    status: "Low stock",
    updated: "Today, 9:18 AM",
  },
  {
    id: "PR-1046",
    name: "Analog wristwatch",
    category: "Accessories",
    sku: "FN-AC-046",
    price: "156.00",
    stock: "16",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=120&q=80",
    status: "In stock",
    updated: "Yesterday",
  },
  {
    id: "PR-1045",
    name: "Field camera",
    category: "Electronics",
    sku: "FN-EL-045",
    price: "329.00",
    stock: "0",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=120&q=80",
    status: "Out of stock",
    updated: "Yesterday",
  },
  {
    id: "PR-1044",
    name: "Everyday trainers",
    category: "Apparel",
    sku: "FN-AP-044",
    price: "112.00",
    stock: "31",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=120&q=80",
    status: "In stock",
    updated: "Sep 26, 2025",
  },
  {
    id: "PR-1043",
    name: "Pocket notebook set",
    category: "Stationery",
    sku: "FN-ST-043",
    price: "28.00",
    stock: "5",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=120&q=80",
    status: "Low stock",
    updated: "Sep 25, 2025",
  },
];
const filters: Filter[] = [
  "All products",
  "In stock",
  "Low stock",
  "Out of stock",
];
const blankDraft: Draft = {
  name: "",
  category: "Accessories",
  sku: "",
  price: "",
  stock: "",
  image: "",
};

function stockStatus(stock: string): Status {
  const count = Number(stock);
  return count === 0 ? "Out of stock" : count < 10 ? "Low stock" : "In stock";
}

function AuthPage({
  mode,
  setMode,
  onBack,
}: {
  mode: "signin" | "signup";
  setMode: (mode: "signin" | "signup") => void;
  onBack: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const signup = mode === "signup";
  return (
    <main className="auth-layout">
      <section className="auth-story">
        <button className="auth-back" type="button" onClick={onBack}>
          <ArrowLeft size={16} /> Back to workspace
        </button>
        <div className="auth-story-copy">
          <span className="eyebrow light-eyebrow">
            A CLEARER VIEW OF YOUR CATALOG
          </span>
          <h1>
            Make room
            <br />
            for what&apos;s next.
          </h1>
          <p>Every product, detail, and good idea in one considered place.</p>
        </div>
        <div className="auth-image-credit">
          A study in everyday objects <span>01 / 04</span>
        </div>
      </section>
      <section className="auth-panel">
        <button className="brand auth-brand" type="button" onClick={onBack}>
          <span className="brand-mark">
            <span />
          </span>
          fieldnote<span className="brand-period">.</span>
        </button>
        <div className="auth-form-wrap">
          <div className="auth-heading">
            <span className="eyebrow">YOUR PRODUCT STUDIO</span>
            <h2>{signup ? "Create your account" : "Welcome back"}</h2>
            <p>
              {signup
                ? "Start building a catalog that feels like yours."
                : "Sign in to pick up where you left off."}
            </p>
          </div>
          <form
            className="auth-form"
            onSubmit={(event) => event.preventDefault()}
          >
            {signup && (
              <label className="field-label">
                Your name
                <input
                  autoComplete="name"
                  name="name"
                  placeholder="Alex Morgan"
                  required
                />
              </label>
            )}
            <label className="field-label">
              Email address
              <span className="input-with-icon">
                <Mail size={16} />
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="you@studio.com"
                  required
                  type="email"
                />
              </span>
            </label>
            <label className="field-label">
              Password
              <span className="input-with-icon">
                <LockKeyhole size={16} />
                <input
                  autoComplete={signup ? "new-password" : "current-password"}
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="input-action"
                  type="button"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </span>
            </label>
            {!signup && (
              <div className="auth-options">
                <label className="check-label">
                  <input type="checkbox" /> Keep me signed in
                </label>
                <button className="text-button" type="button">
                  Forgot password?
                </button>
              </div>
            )}
            <button className="button button-primary auth-submit" type="submit">
              {signup ? "Create account" : "Sign in"} <ArrowRight size={16} />
            </button>
          </form>
          <div className="auth-switch">
            {signup ? "Already have an account?" : "New to Fieldnote?"}{" "}
            <button
              className="text-button"
              type="button"
              onClick={() => setMode(signup ? "signin" : "signup")}
            >
              {signup ? "Sign in" : "Create an account"}
            </button>
          </div>
          <p className="auth-legal">
            By continuing, you agree to our <a href="#terms">Terms</a> and{" "}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
        <span className="auth-version">FIELDNOTE STUDIO · 2025</span>
      </section>
    </main>
  );
}

function ProductDialog({
  product,
  onClose,
  onSave,
}: {
  product?: Product;
  onClose: () => void;
  onSave: (draft: Draft) => void;
}) {
  const [draft, setDraft] = useState<Draft>(product ?? blankDraft);
  return (
    <div
      className="dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="product-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <header className="dialog-header">
          <div>
            <span className="eyebrow">CATALOG ENTRY</span>
            <h2 id="dialog-title">
              {product ? "Edit product" : "Add a product"}
            </h2>
          </div>
          <button
            className="icon-button"
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </header>
        <form
          className="product-form"
          onSubmit={(event) => {
            event.preventDefault();
            onSave(draft);
          }}
        >
          <label className="field-label form-wide">
            Product image URL
            <input
              value={draft.image}
              onChange={(event) =>
                setDraft({ ...draft, image: event.target.value })
              }
              placeholder="https://..."
            />
          </label>
          <div className="form-grid">
            <label className="field-label form-wide">
              Product name
              <input
                required
                value={draft.name}
                onChange={(event) =>
                  setDraft({ ...draft, name: event.target.value })
                }
                placeholder="e.g. Everyday Tote"
              />
            </label>
            <label className="field-label">
              Category
              <select
                value={draft.category}
                onChange={(event) =>
                  setDraft({ ...draft, category: event.target.value })
                }
              >
                <option>Accessories</option>
                <option>Home goods</option>
                <option>Apparel</option>
                <option>Electronics</option>
                <option>Stationery</option>
              </select>
            </label>
            <label className="field-label">
              SKU
              <input
                required
                value={draft.sku}
                onChange={(event) =>
                  setDraft({ ...draft, sku: event.target.value })
                }
                placeholder="FN-0000"
              />
            </label>
            <label className="field-label">
              Price
              <input
                required
                min="0"
                step="0.01"
                type="number"
                value={draft.price}
                onChange={(event) =>
                  setDraft({ ...draft, price: event.target.value })
                }
                placeholder="0.00"
              />
            </label>
            <label className="field-label">
              Stock on hand
              <input
                required
                min="0"
                step="1"
                type="number"
                value={draft.stock}
                onChange={(event) =>
                  setDraft({ ...draft, stock: event.target.value })
                }
                placeholder="0"
              />
            </label>
          </div>
          <footer className="dialog-footer">
            <button
              className="button button-quiet"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="button button-primary" type="submit">
              {product ? "Save changes" : "Add product"}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [mode, setMode] = useState<"dashboard" | "signin" | "signup">(
    "dashboard",
  );
  const [filter, setFilter] = useState<Filter>("All products");
  const [search, setSearch] = useState("");
  const [dialogProduct, setDialogProduct] = useState<
    Product | null | undefined
  >(undefined);
  const [menuId, setMenuId] = useState<string | null>(null);
  const [notice, setNotice] = useState("");
  const visibleProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (filter === "All products" || product.status === filter) &&
          `${product.name} ${product.category} ${product.sku}`
            .toLowerCase()
            .includes(search.trim().toLowerCase()),
      ),
    [filter, products, search],
  );
  const totalUnits = products.reduce(
    (total, product) => total + Number(product.stock),
    0,
  );
  const catalogValue = products.reduce(
    (total, product) => total + Number(product.price) * Number(product.stock),
    0,
  );

  function saveProduct(draft: Draft) {
    if (dialogProduct) {
      setProducts((current) =>
        current.map((item) =>
          item.id === dialogProduct.id
            ? {
                ...item,
                ...draft,
                status: stockStatus(draft.stock),
                updated: "Just now",
              }
            : item,
        ),
      );
      setNotice("Product changes saved");
    } else {
      const newProduct: Product = {
        ...draft,
        id: `PR-${Math.floor(1000 + Math.random() * 9000)}`,
        status: stockStatus(draft.stock),
        updated: "Just now",
      };
      setProducts((current) => [newProduct, ...current]);
      setNotice("Product added to your catalog");
    }
    setDialogProduct(undefined);
    window.setTimeout(() => setNotice(""), 2800);
  }

  if (mode !== "dashboard")
    return (
      <AuthPage
        mode={mode}
        setMode={setMode}
        onBack={() => setMode("dashboard")}
      />
    );

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand" type="button">
          <span className="brand-mark">
            <span />
          </span>
          <span>
            fieldnote<span className="brand-period">.</span>
          </span>
        </button>
        <div className="workspace-switcher">
          <span className="workspace-avatar">N</span>
          <span className="workspace-meta">
            <strong>North Studio</strong>
            <small>Free workspace</small>
          </span>
          <ChevronDown size={15} />
        </div>
        <span className="nav-label">WORKSPACE</span>
        <nav className="primary-nav">
          <button className="nav-item" type="button">
            <LayoutDashboard size={17} />
            <span>Overview</span>
          </button>
          <button className="nav-item active" type="button">
            <Box size={17} />
            <span>Products</span>
            <span className="nav-count">{products.length}</span>
          </button>
          <button className="nav-item" type="button">
            <Tag size={17} />
            <span>Categories</span>
          </button>
        </nav>
        <span className="nav-label nav-label-lower">PREFERENCES</span>
        <nav className="primary-nav">
          <button className="nav-item" type="button">
            <Settings2 size={17} />
            <span>Settings</span>
          </button>
          <button className="nav-item" type="button">
            <CircleHelp size={17} />
            <span>Help & support</span>
          </button>
        </nav>
        <div className="sidebar-bottom">
          <div className="upgrade-note">
            <span className="upgrade-icon">
              <Sparkles size={15} />
            </span>
            <strong>A little more room?</strong>
            <p>Keep growing with a larger catalog.</p>
            <button type="button">
              Explore plans <ArrowRight size={14} />
            </button>
          </div>
          <button
            className="profile-button"
            type="button"
            onClick={() => setMode("signin")}
          >
            <span className="profile-avatar">AM</span>
            <span className="profile-meta">
              <strong>Alex Morgan</strong>
              <small>Studio admin</small>
            </span>
            <LogOut size={16} />
          </button>
        </div>
      </aside>
      <main className="main-area">
        <header className="topbar flex align-items-center justify-content-between">
          <div className="breadcrumbs">
            <span>North Studio</span>
            <span className="crumb-divider">/</span>
            <strong>Products</strong>
          </div>
          <div className="topbar-actions flex align-items-center">
            <label className="top-search">
              <Search size={16} />
              <input
                aria-label="Search products"
                placeholder="Search anything..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <kbd>
                <Command size={11} /> K
              </kbd>
            </label>
            <button
              className="icon-button notification-button"
              type="button"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span />
            </button>
            <button
              className="top-avatar"
              type="button"
              onClick={() => setMode("signin")}
            >
              AM
            </button>
          </div>
        </header>
        <div className="page-content">
          <section className="page-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" /> CATALOG / INVENTORY
              </div>
              <h1>
                Your products<span>.</span>
              </h1>
              <p>A thoughtful view of everything you make and move.</p>
            </div>
            <button
              className="button button-primary add-button"
              type="button"
              onClick={() => setDialogProduct(null)}
            >
              <Plus size={17} /> Add product
            </button>
          </section>
          <section className="summary-strip">
            <div className="summary-item">
              <span className="summary-label">CATALOG VALUE</span>
              <strong>
                $
                {catalogValue.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </strong>
              <span className="summary-change">
                <TrendingUp size={13} /> 12.8% <small>vs last month</small>
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">TOTAL PRODUCTS</span>
              <strong>
                {String(products.length).padStart(2, "0")} <small>items</small>
              </strong>
              <span className="summary-note">
                <i className="summary-accent accent-coral" /> Across 4
                categories
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">UNITS IN STOCK</span>
              <strong>
                {String(totalUnits).padStart(2, "0")} <small>units</small>
              </strong>
              <span className="summary-note">
                <i className="summary-accent accent-blue" /> Ready to ship
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">NEEDS ATTENTION</span>
              <strong>
                {String(
                  products.filter((item) => item.status === "Low stock").length,
                ).padStart(2, "0")}{" "}
                <small>products</small>
              </strong>
              <span className="summary-note">
                <i className="summary-accent accent-yellow" /> Running low
              </span>
            </div>
          </section>
          <section className="catalog-section">
            <div className="catalog-toolbar">
              <div className="filter-tabs" role="tablist">
                {filters.map((item) => (
                  <button
                    key={item}
                    className={`filter-tab ${filter === item ? "selected" : ""}`}
                    type="button"
                    role="tab"
                    aria-selected={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                    <span>
                      {item === "All products"
                        ? products.length
                        : products.filter((product) => product.status === item)
                            .length}
                    </span>
                  </button>
                ))}
              </div>
              <div className="toolbar-actions">
                <button
                  className="button button-outline"
                  type="button"
                  onClick={() => setNotice("Your catalog export is ready")}
                >
                  <Download size={15} /> Export
                </button>
                <button
                  className="button button-outline filter-button"
                  type="button"
                  onClick={() =>
                    setFilter(
                      filter === "All products" ? "In stock" : "All products",
                    )
                  }
                >
                  <SlidersHorizontal size={15} /> Filter{" "}
                  <i className="filter-dot" />
                </button>
              </div>
            </div>
            <div className="table-wrap">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>
                      <input aria-label="Select all products" type="checkbox" />
                    </th>
                    <th>
                      PRODUCT <ArrowDown size={12} />
                    </th>
                    <th>SKU</th>
                    <th>
                      PRICE <ArrowDown size={12} />
                    </th>
                    <th>
                      IN STOCK <ArrowDown size={12} />
                    </th>
                    <th>STATUS</th>
                    <th>LAST UPDATED</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {visibleProducts.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <input
                          aria-label={`Select ${product.name}`}
                          type="checkbox"
                        />
                      </td>
                      <td>
                        <div className="product-cell">
                          <img
                            className="product-thumb"
                            src={
                              product.image ||
                              "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=120&q=80"
                            }
                            alt=""
                          />
                          <span>
                            <strong>{product.name}</strong>
                            <small>{product.category}</small>
                          </span>
                        </div>
                      </td>
                      <td className="sku-cell">{product.sku}</td>
                      <td className="price-cell">
                        ${Number(product.price).toFixed(2)}
                      </td>
                      <td className="stock-cell">
                        {product.stock} <span>units</span>
                      </td>
                      <td>
                        <span
                          className={`status-pill ${product.status.toLowerCase().replaceAll(" ", "-")}`}
                        >
                          <i />
                          {product.status}
                        </span>
                      </td>
                      <td className="updated-cell">{product.updated}</td>
                      <td className="row-action-cell">
                        <button
                          className="icon-button row-menu-button"
                          type="button"
                          aria-label={`Actions for ${product.name}`}
                          onClick={() =>
                            setMenuId(menuId === product.id ? null : product.id)
                          }
                        >
                          <Ellipsis size={18} />
                        </button>
                        {menuId === product.id && (
                          <div className="row-menu">
                            <button
                              type="button"
                              onClick={() => {
                                setDialogProduct(product);
                                setMenuId(null);
                              }}
                            >
                              Edit product
                            </button>
                            <button
                              className="danger-menu-action"
                              type="button"
                              onClick={() => {
                                setProducts((current) =>
                                  current.filter(
                                    (item) => item.id !== product.id,
                                  ),
                                );
                                setMenuId(null);
                                setNotice("Product removed");
                              }}
                            >
                              Delete product
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                  {!visibleProducts.length && (
                    <tr>
                      <td className="empty-state" colSpan={8}>
                        <Box size={24} />
                        <strong>No products found</strong>
                        <span>
                          Try another search or add a product to your catalog.
                        </span>
                        <button
                          className="text-button"
                          type="button"
                          onClick={() => {
                            setSearch("");
                            setFilter("All products");
                          }}
                        >
                          Clear filters
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <footer className="table-footer">
              <span>
                Showing{" "}
                <strong>
                  {visibleProducts.length ? 1 : 0}–{visibleProducts.length}
                </strong>{" "}
                of <strong>{products.length}</strong> products
              </span>
              <div className="pagination">
                <button type="button" disabled aria-label="Previous page">
                  <ArrowRight className="previous-arrow" size={15} />
                </button>
                <button className="current-page" type="button">
                  1
                </button>
                <button type="button" disabled aria-label="Next page">
                  <ArrowRight size={15} />
                </button>
                <span>Rows per page</span>
                <button className="rows-select" type="button">
                  10 <ChevronDown size={13} />
                </button>
              </div>
            </footer>
          </section>
          <div className="page-footnote">
            <span>
              <i className="live-dot" /> All changes saved
            </span>
            <span>Updated just now</span>
            <span className="footnote-spacer" />
            <button type="button">
              <CircleHelp size={14} /> Need a hand?
            </button>
          </div>
        </div>
      </main>
      {dialogProduct !== undefined && (
        <ProductDialog
          product={dialogProduct ?? undefined}
          onClose={() => setDialogProduct(undefined)}
          onSave={saveProduct}
        />
      )}
      {notice && (
        <div className="toast-message" role="status">
          <span className="toast-check">
            <Check size={14} />
          </span>
          {notice}
          <button
            type="button"
            onClick={() => setNotice("")}
            aria-label="Dismiss notification"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
