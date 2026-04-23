import { CATEGORIES_TOP_20, type Category } from '@/data/categories';

type Props = {
  value: Category | '';
  onChange: (v: Category) => void;
  required?: boolean;
  id?: string;
};

export function CategoryDropdown({ value, onChange, required, id = 'category' }: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-graphite mb-1">
        Categoria principal do produto {required && <span className="text-gold-burnt">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as Category)}
        required={required}
        className="w-full px-3 py-2 border border-graphite-soft rounded bg-white focus:outline-none focus:ring-2 focus:ring-teal-deep"
      >
        <option value="">Selecione uma categoria</option>
        {CATEGORIES_TOP_20.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
