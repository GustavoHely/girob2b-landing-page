import { describe, it, expect } from 'vitest';
import { validateCNPJ, validateEmail, formatCNPJ } from '@/lib/validators';

describe('validateCNPJ', () => {
  it('aceita CNPJ válido formatado', () => {
    expect(validateCNPJ('11.222.333/0001-81')).toBe(true);
  });

  it('aceita CNPJ válido sem formatação', () => {
    expect(validateCNPJ('11222333000181')).toBe(true);
  });

  it('rejeita CNPJ com dígito verificador errado', () => {
    expect(validateCNPJ('11.222.333/0001-99')).toBe(false);
  });

  it('rejeita CNPJ com todos dígitos iguais (ex: 00000000000000)', () => {
    expect(validateCNPJ('00.000.000/0000-00')).toBe(false);
    expect(validateCNPJ('11.111.111/1111-11')).toBe(false);
  });

  it('rejeita string vazia ou curta', () => {
    expect(validateCNPJ('')).toBe(false);
    expect(validateCNPJ('123')).toBe(false);
  });
});

describe('validateEmail', () => {
  it('aceita email válido', () => {
    expect(validateEmail('teste@empresa.com.br')).toBe(true);
  });

  it('rejeita email sem @', () => {
    expect(validateEmail('teste.empresa.com')).toBe(false);
  });

  it('rejeita email sem TLD', () => {
    expect(validateEmail('teste@empresa')).toBe(false);
  });
});

describe('formatCNPJ', () => {
  it('formata 14 dígitos', () => {
    expect(formatCNPJ('11222333000181')).toBe('11.222.333/0001-81');
  });

  it('formata parcial conforme digita', () => {
    expect(formatCNPJ('1122')).toBe('11.22');
    expect(formatCNPJ('11222333')).toBe('11.222.333');
    expect(formatCNPJ('112223330001')).toBe('11.222.333/0001');
  });
});
