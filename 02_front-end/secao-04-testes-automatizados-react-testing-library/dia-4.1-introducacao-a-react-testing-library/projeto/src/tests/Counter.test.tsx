import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../components/counter';

describe('Counter component tests', () => {
  it('Checar se existe um H1 com texto 0', () => {
    render(<Counter />);
    // Acessar
    const contador = screen.getByRole('heading');

    // Aferir
    expect(contador).toBeInTheDocument();
  });

  it('Checar se existe um botão com texto Increment', () => {
    render(<Counter />);

    // Acessar
    const btnIncrement = screen.getByText(/increment/i);

    // Aferir
    expect(btnIncrement).toBeInTheDocument();
  });

  it('Checar se existe um botão com texto Decrement', () => {
    render(<Counter />);

    // Acessar
    const btnDecrement = screen.getByRole('button', { name: 'btn-decrement' });

    // Aferir
    expect(btnDecrement).toBeInTheDocument();
  });

  it('Ao clicar no botão increment 1x, o valor do H1 deve ser 1', async () => {
    render(<Counter />);

    // Acessar
    const btnIncrement = screen.getByRole('button', { name: 'btn-increment' });
    const contador = screen.getByRole('heading');

    // Agir
    await userEvent.click(btnIncrement);

    // Aferir
    expect(contador).toHaveTextContent('1');
  });

  it('Ao clicar no botão decrement 5x, o valor do H1 deve ser -5', async () => {
    render(<Counter />);

    // Acessar
    const btnDecrement = screen.getByRole('button', { name: 'btn-decrement' });
    const contador = screen.getByRole('heading');

    // Agir
    await userEvent.click(btnDecrement);
    await userEvent.click(btnDecrement);
    await userEvent.click(btnDecrement);
    await userEvent.click(btnDecrement);
    await userEvent.click(btnDecrement);

    // Aferir
    expect(contador).toHaveTextContent('-5');
  });
});
